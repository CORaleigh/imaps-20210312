(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[2457,5883],{81632:(e,t,r)=>{"use strict";r.d(t,{R:()=>m,b:()=>f});var i=r(85461),o=r(51219),n=r(63230),a=r(61514),s=r(4071),l=r(34658),d=r(88214),c=r(82768),h=r(83488),u=r(93077),p=r(9295);function f(e){const t=new o.kG;t.extensions.add("GL_OES_standard_derivatives"),t.include(p.e),t.include(c.U,e),t.include(u.q,e),1===e.output&&t.include(h.F,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraNearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),t.attributes.add("position","vec3"),t.attributes.add("subdivisionFactor","float"),t.attributes.add("uv0","vec2"),t.attributes.add("auxpos1","vec3"),t.attributes.add("auxpos2","vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("linearDepth","float"),e.multipassTerrainEnabled&&t.varyings.add("depth","float");const r=e.falloffEnabled,f=e.innerColorEnabled;return f&&t.varyings.add("vLineDistance","float"),r&&t.varyings.add("vLineDistanceNorm","float"),e.falloffEnabled&&t.fragment.uniforms.add("falloff","float"),e.innerColorEnabled&&(t.fragment.uniforms.add("innerColor","vec4"),t.fragment.uniforms.add("innerWidth","float")),t.vertex.code.add(i.H`
		#define PERPENDICULAR(v) vec2(v.y, -v.x);
		#define ISOUTSIDE (left.x * right.y - left.y * right.x)*uv0.y > 0.0

		float interp(float ncp, vec4 a, vec4 b) {
			return (-ncp - a.z) / (b.z - a.z);
		}

		vec2 rotate(vec2 v, float a) {
			float s = sin(a);
			float c = cos(a);
			mat2 m = mat2(c, -s, s, c);
			return m * v;
		}
`),t.vertex.code.add(i.H`
    vec4 projectAndScale(vec4 pos) {
      vec4 posNdc = proj * pos;

      // Note that posNdc is in -1:1, scaling by screenSize converts this to a coordinate system
      // that is twice scaled (going from -size:size).
      posNdc.xy *= screenSize / posNdc.w;
      return posNdc;
    }
`),t.vertex.code.add(i.H`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = cameraNearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -cameraNearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -cameraNearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -cameraNearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -cameraNearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -cameraNearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${e.multipassTerrainEnabled?"depth = pos.z;":""}
      linearDepth = (-pos.z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),t.vertex.code.add(i.H`
  void main(void) {
    float coverage = 1.0;
    vpos = position;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;
      bool isJoin = abs(uv0.y)-3.0 < 0.0;

      float lineWidth = getSize() * pixelRatio;

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);

      clipAndTransform(pos, prev, next, isStartVertex);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);
  `),e.stippleEnabled&&t.vertex.code.add(i.H`
      // uv0.x is either 0 or 1, depending on whether this is considered the start of a line segment
      // or the end. If start, then use pos->next, otherwise use prev->pos to define the line segment
      // vector
      vec4 stippleSegmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);
      vec2 stippleSegmentOrigin = stippleSegmentInfo.xy;

      // Scale s.t. it's in units of stipple pattern size.
      vec2 stippleSegmentDirection = stippleSegmentInfo.zw;
    `),t.vertex.code.add(i.H`
    left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
    right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);

    vec2 capDisplacementDir = vec2(0, 0);
    vec2 joinDisplacementDir = vec2(0, 0);
    float displacementLen = lineWidth;

    if (isJoin) {

      // JOIN handling ---------------------------------------------------
      // determine if vertex is on the "outside or "inside" of the join
      bool isOutside = ISOUTSIDE;

      // compute miter join position first
      joinDisplacementDir = normalize(left + right);
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      // compute miter stretch
      if (leftLen > 0.001 && rightLen > 0.001) {
        float nDotSeg = dot(joinDisplacementDir, left);
        displacementLen /= length(nDotSeg * left - joinDisplacementDir);

        // limit displacement of inner vertices
        if (!isOutside) {
          displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
        }
      }

      if (isOutside && (displacementLen > miterLimit * lineWidth)) {
    `),e.roundJoins?t.vertex.code.add(i.H`
        vec2 startDir;
        vec2 endDir;

        if (leftLen < 0.001) {
          startDir = right;
        }
        else{
          startDir = left;
        }
        startDir = normalize(startDir);
        startDir = PERPENDICULAR(startDir);

        if (rightLen < 0.001) {
          endDir = left;
        }
        else{
          endDir = right;
        }
        endDir = normalize(endDir);
        endDir = PERPENDICULAR(endDir);

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * subdivisionFactor * rotationAngle);
      `):t.vertex.code.add(i.H`
        // convert to bevel join if miterLimit is exceeded
        if (leftLen < 0.001) {
          joinDisplacementDir = right;
        }
        else if (rightLen < 0.001) {
          joinDisplacementDir = left;
        }
        else {
          joinDisplacementDir = isStartVertex ? right : left;
        }
        joinDisplacementDir = normalize(joinDisplacementDir);
        joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
  `),t.vertex.code.add(i.H`
        displacementLen = lineWidth;
      }
    } else {
    // CAP handling ---------------------------------------------------
    if (leftLen < 0.001) {
      joinDisplacementDir = right;
    }
    else if (rightLen < 0.001) {
      joinDisplacementDir = left;
    }
    else {
      joinDisplacementDir = isStartVertex ? right : left;
    }
    joinDisplacementDir = normalize(joinDisplacementDir);
    joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
    displacementLen = lineWidth;

    capDisplacementDir = isStartVertex ? -right : left;
  `),e.roundCaps?t.vertex.code.add(i.H`
    float angle = subdivisionFactor*PI*0.5;
    joinDisplacementDir *= cos(angle);
    capDisplacementDir *= sin(angle);
    `):t.vertex.code.add(i.H`
    capDisplacementDir *= subdivisionFactor;
    `),t.vertex.code.add(i.H`
  }

  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

  ${r||f?i.H`float lineDist = lineWidth * sign(uv0.y) * pos.w;`:""}

  ${f?i.H`vLineDistance = lineDist;`:""}
  ${r?i.H`vLineDistanceNorm = lineDist / lineWidth;`:""}

  pos.xy += dpos;
  `),e.stippleEnabled&&(t.vertex.code.add(i.H`
    {
      // Compute the stipple pattern UV coordinate from the actual position, based on the origin
      // and direction of the line segment on which the stipple pattern is based.

      // Project the vector from the origin of the segment to the vertex onto the line segment.
      // Note the 0.5 factor due to projected positions being at twice the screen size scale (see projectAndScale)
      vec2 posVec = pos.xy - stippleSegmentOrigin;

      float stippleSegmentDirectionLength = length(stippleSegmentDirection);
    `),e.stippleIntegerRepeatsEnabled&&t.vertex.code.add(i.H`
      float numberOfPatternRepeats = stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
      float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
      stipplePatternUvMax = roundedNumberOfPatternRepeats;
      `),t.vertex.code.add(i.H`
      if (stippleSegmentDirectionLength >= 0.001) {
        // Project the vertex position onto the line segment.
        float projectedLength = dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;
     ${e.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale = roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale = 1.0;"}
        stipplePatternUv = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stipplePatternUv = 1.0;
        }
      }
    `)),t.vertex.code.add(i.H`
      // Convert back into NDC
      pos.xy = pos.xy / screenSize * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      gl_Position = pos;
    }
  }
  `),e.multipassTerrainEnabled&&(t.fragment.include(s.S),t.include(d.l,e)),t.include(a.p,e),t.fragment.uniforms.add("intrinsicColor","vec4"),t.fragment.include(n.Y),t.fragment.code.add(i.H`
  void main() {
    discardBySlice(vpos);
    ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 color = intrinsicColor * vColor;
  `),e.innerColorEnabled&&(t.fragment.uniforms.add("pixelRatio","float"),t.fragment.code.add(i.H`
    float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
    float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
    float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
    color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);
    `)),t.fragment.code.add(i.H`
    vec4 finalColor = blendStipple(color, stippleAlpha);
  `),e.falloffEnabled&&t.fragment.code.add(i.H`
    finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);
    `),t.fragment.code.add(i.H`
    if (finalColor.a < ${i.H.float(l.bf)}) {
      discard;
    }

    ${7===e.output?i.H`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===e.output?i.H`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===e.output&&e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===e.output?i.H`gl_FragColor = vec4(1.0);`:""}
    ${1===e.output?i.H`outputDepth(linearDepth);`:""}
  }
  `),t}var m=Object.freeze({__proto__:null,build:f})},54452:(e,t,r)=>{"use strict";r.d(t,{T:()=>s,b:()=>a});var i=r(85461),o=r(51219),n=r(84444);function a(){const e=new o.kG;return e.include(n.k),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add(i.H`
    void main() {
      vec4 texColor = texture2D(tex, uv);
      gl_FragColor = texColor * color;
    }
  `),e}var s=Object.freeze({__proto__:null,build:a})},74332:(e,t,r)=>{"use strict";r.d(t,{W:()=>y,b:()=>v});var i=r(85461),o=r(62213),n=r(51219),a=r(63230),s=r(61514),l=r(4071),d=r(72023),c=r(34658),h=r(88214),u=r(71613),p=r(91123),f=r(31777),m=r(83917),g=r(53584);function v(e){const t=new n.kG;return t.include(o.w,{linearDepth:!1}),t.attributes.add("position","vec3"),t.attributes.add("uv0","vec2"),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),t.vertex.uniforms.add("waterColor","vec4"),0!==e.output&&7!==e.output||(t.include(m.n,e),t.include(f.q,e),t.varyings.add("vuv","vec2"),t.varyings.add("vpos","vec3"),t.varyings.add("vnormal","vec3"),t.varyings.add("vtbnMatrix","mat3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.vertex.code.add(i.H`
      void main(void) {
        if (waterColor.a < ${i.H.float(c.bf)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${0===e.output?"forwardLinearDepth();":""}
      }
    `)),e.multipassTerrainEnabled&&(t.fragment.include(l.S),t.include(h.l,e)),7===e.output&&(t.include(s.p,e),t.fragment.uniforms.add("waterColor","vec4"),t.fragment.code.add(i.H`
        void main() {
          discardBySlice(vpos);
          ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `)),0===e.output&&(t.include(p.M,e),t.include(s.p,e),e.receiveShadows&&t.include(u.h,e),t.include(g.B,e),t.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("camPos","vec3").add("timeElapsed","float").add("view","mat4"),t.fragment.include(a.Y),t.fragment.code.add(i.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - camPos);
        vec3 l = normalize(-lightingMainDirection);
        float shadow = ${e.receiveShadows?i.H`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, l, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),2===e.output&&(t.include(m.n,e),t.include(p.M,e),t.include(s.p,e),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),t.vertex.code.add(i.H`
        void main(void) {
          if (waterColor.a < ${i.H.float(c.bf)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.fragment.uniforms.add("timeElapsed","float"),t.fragment.code.add(i.H`
        void main() {
          discardBySlice(vpos);

          // the created normal is in tangent space and foam
          vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
          tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);

          gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
        }
    `)),5===e.output&&(t.varyings.add("vpos","vec3"),t.vertex.code.add(i.H`
        void main(void) {
          if (waterColor.a < ${i.H.float(c.bf)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),t.fragment.uniforms.add("waterColor","vec4"),t.fragment.code.add(i.H`
        void main() {
          gl_FragColor = waterColor;
        }
    `)),4===e.output&&(t.include(d.bA),t.varyings.add("vpos","vec3"),t.vertex.code.add(i.H`
      void main(void) {
        if (waterColor.a < ${i.H.float(c.bf)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),t.include(s.p,e),t.fragment.code.add(i.H`
      void main() {
        discardBySlice(vpos);
        outputHighlight();
      }
    `)),t}var y=Object.freeze({__proto__:null,build:v})},70189:(e,t,r)=>{"use strict";function i(){return new Float32Array(4)}function o(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function n(e,t,r,i){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o}function a(){return i()}function s(){return n(1,1,1,1)}function l(){return n(1,0,0,0)}function d(){return n(0,1,0,0)}function c(){return n(0,0,1,0)}function h(){return n(0,0,0,1)}r.d(t,{a:()=>o,c:()=>i,f:()=>n});const u=a(),p=s(),f=l(),m=d(),g=c(),v=h();Object.freeze({__proto__:null,create:i,clone:o,fromValues:n,createView:function(e,t){return new Float32Array(e,t,4)},zeros:a,ones:s,unitX:l,unitY:d,unitZ:c,unitW:h,ZEROS:u,ONES:p,UNIT_X:f,UNIT_Y:m,UNIT_Z:g,UNIT_W:v})},35883:(e,t,r)=>{"use strict";r.r(t),r.d(t,{hydratedAdapter:()=>l});var i=r(61106),o=r(52937),n=r(3470),a=r(53817),s=r(93833);const l={convertToGEGeometry:function(e,t){if(null==t)return null;let r="cache"in t?t.cache._geVersion:void 0;return null==r&&(r=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=r)),r},exportPoint:function(e,t,r){const o=e.hasZ(t),n=e.hasM(t),a=new i.Z({x:e.getPointX(t),y:e.getPointY(t),spatialReference:r});return o&&(a.z=e.getPointZ(t)),n&&(a.m=e.getPointM(t)),a.cache._geVersion=t,a},exportPolygon:function(e,t,r){const i=new a.Z({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:r});return i.cache._geVersion=t,i},exportPolyline:function(e,t,r){const i=new s.Z({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:r});return i.cache._geVersion=t,i},exportMultipoint:function(e,t,r){const i=new n.Z({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:r});return i.cache._geVersion=t,i},exportExtent:function(e,t,r){const i=e.hasZ(t),n=e.hasM(t),a=new o.Z({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:r});if(i){const r=e.getZExtent(t);a.zmin=r.vmin,a.zmax=r.vmax}if(n){const r=e.getMExtent(t);a.mmin=r.vmin,a.mmax=r.vmax}return a.cache._geVersion=t,a}}},70642:(e,t,r)=>{"use strict";r.r(t),r.d(t,{buffer:()=>T,clip:()=>s,contains:()=>d,convexHull:()=>w,crosses:()=>c,cut:()=>l,densify:()=>N,difference:()=>x,disjoint:()=>g,distance:()=>h,equals:()=>u,extendedSpatialReferenceInfo:()=>a,flipHorizontal:()=>H,flipVertical:()=>z,generalize:()=>L,geodesicArea:()=>W,geodesicBuffer:()=>D,geodesicDensify:()=>U,geodesicLength:()=>G,intersect:()=>S,intersects:()=>p,isSimple:()=>_,nearestCoordinate:()=>O,nearestVertex:()=>A,nearestVertices:()=>P,offset:()=>E,overlaps:()=>v,planarArea:()=>F,planarLength:()=>V,relate:()=>y,rotate:()=>I,simplify:()=>b,symmetricDifference:()=>C,touches:()=>f,union:()=>R,within:()=>m});var i=r(65798),o=r(35883);function n(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function a(e){return i.a.extendedSpatialReferenceInfo(e)}function s(e,t){return i.a.clip(o.hydratedAdapter,n(e),e,t)}function l(e,t){return i.a.cut(o.hydratedAdapter,n(e),e,t)}function d(e,t){return i.a.contains(o.hydratedAdapter,n(e),e,t)}function c(e,t){return i.a.crosses(o.hydratedAdapter,n(e),e,t)}function h(e,t,r){return i.a.distance(o.hydratedAdapter,n(e),e,t,r)}function u(e,t){return i.a.equals(o.hydratedAdapter,n(e),e,t)}function p(e,t){return i.a.intersects(o.hydratedAdapter,n(e),e,t)}function f(e,t){return i.a.touches(o.hydratedAdapter,n(e),e,t)}function m(e,t){return i.a.within(o.hydratedAdapter,n(e),e,t)}function g(e,t){return i.a.disjoint(o.hydratedAdapter,n(e),e,t)}function v(e,t){return i.a.overlaps(o.hydratedAdapter,n(e),e,t)}function y(e,t,r){return i.a.relate(o.hydratedAdapter,n(e),e,t,r)}function _(e){return i.a.isSimple(o.hydratedAdapter,n(e),e)}function b(e){return i.a.simplify(o.hydratedAdapter,n(e),e)}function w(e,t=!1){return i.a.convexHull(o.hydratedAdapter,n(e),e,t)}function x(e,t){return i.a.difference(o.hydratedAdapter,n(e),e,t)}function C(e,t){return i.a.symmetricDifference(o.hydratedAdapter,n(e),e,t)}function S(e,t){return i.a.intersect(o.hydratedAdapter,n(e),e,t)}function R(e,t=null){return i.a.union(o.hydratedAdapter,n(e),e,t)}function E(e,t,r,a,s,l){return i.a.offset(o.hydratedAdapter,n(e),e,t,r,a,s,l)}function T(e,t,r,a=!1){return i.a.buffer(o.hydratedAdapter,n(e),e,t,r,a)}function D(e,t,r,a,s,l){return i.a.geodesicBuffer(o.hydratedAdapter,n(e),e,t,r,a,s,l)}function O(e,t,r=!0){return i.a.nearestCoordinate(o.hydratedAdapter,n(e),e,t,r)}function A(e,t){return i.a.nearestVertex(o.hydratedAdapter,n(e),e,t)}function P(e,t,r,a){return i.a.nearestVertices(o.hydratedAdapter,n(e),e,t,r,a)}function M(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function I(e,t,r){var o;if(null==e)throw new Error("Illegal Argument Exception");const n=e.spatialReference;if(null==(r=null!=(o=r)?o:M(e)))throw new Error("Illegal Argument Exception");const a=e.constructor.fromJSON(i.a.rotate(e,t,r));return a.spatialReference=n,a}function H(e,t){var r;if(null==e)throw new Error("Illegal Argument Exception");const o=e.spatialReference;if(null==(t=null!=(r=t)?r:M(e)))throw new Error("Illegal Argument Exception");const n=e.constructor.fromJSON(i.a.flipHorizontal(e,t));return n.spatialReference=o,n}function z(e,t){var r;if(null==e)throw new Error("Illegal Argument Exception");const o=e.spatialReference;if(null==(t=null!=(r=t)?r:M(e)))throw new Error("Illegal Argument Exception");const n=e.constructor.fromJSON(i.a.flipVertical(e,t));return n.spatialReference=o,n}function L(e,t,r,a){return i.a.generalize(o.hydratedAdapter,n(e),e,t,r,a)}function N(e,t,r){return i.a.densify(o.hydratedAdapter,n(e),e,t,r)}function U(e,t,r,a=0){return i.a.geodesicDensify(o.hydratedAdapter,n(e),e,t,r,a)}function F(e,t){return i.a.planarArea(o.hydratedAdapter,n(e),e,t)}function V(e,t){return i.a.planarLength(o.hydratedAdapter,n(e),e,t)}function W(e,t,r){return i.a.geodesicArea(o.hydratedAdapter,n(e),e,t,r)}function G(e,t,r){return i.a.geodesicLength(o.hydratedAdapter,n(e),e,t,r)}},82204:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var i=r(33655);function o(e,t,r){const o=e.byteLength/(4*t),d=new Uint32Array(e,0,o*t);let c=new Uint32Array(o);const h=r&&r.minReduction||0,u=r&&r.originalIndices||null,p=r&&r.componentOffsets||null;let f=0;if(p)for(let e=0;e<p.length-1;e++){const t=p[e+1]-p[e];t>f&&(f=t)}else f=o;const m=Math.floor(1.1*f)+1;(null==l||l.length<2*m)&&(l=new Uint32Array((0,i.Sf)(2*m)));for(let e=0;e<2*m;e++)l[e]=0;let g=0;const v=!!p&&!!u,y=v?u.length:o,_=v?new Uint32Array(u.length):null,b=1.96;let w=0!==h?Math.ceil(4*b*b/(h*h)*h*(1-h)):y,x=1,C=p?p[1]:y;for(let e=0;e<y;e++){if(e===w){const t=1-g/e;if(t+b*Math.sqrt(t*(1-t)/e)<h)return null;w*=2}if(e===C){for(let e=0;e<2*m;e++)l[e]=0;if(u)for(let e=p[x-1];e<p[x];e++)_[e]=c[u[e]];C=p[++x]}const r=v?u[e]:e,i=r*t,o=s(d,i,t);let a=o%m,f=g;for(;0!==l[2*a+1];){if(l[2*a]===o){const e=l[2*a+1]-1;if(n(d,i,e*t,t)){f=c[e];break}}a++,a>=m&&(a-=m)}f===g&&(l[2*a]=o,l[2*a+1]=r+1,g++),c[r]=f}if(0!==h&&1-g/o<h)return null;if(v){for(let e=p[x-1];e<_.length;e++)_[e]=c[u[e]];c=_}const S=new Uint32Array(t*g);g=0;for(let e=0;e<y;e++)c[e]===g&&(a(d,(v?u[e]:e)*t,S,g*t,t),g++);if(u&&!v){const e=new Uint32Array(u.length);for(let t=0;t<e.length;t++)e[t]=c[u[t]];c=e}return{buffer:S.buffer,indices:c,uniqueCount:g}}function n(e,t,r,i){for(let o=0;o<i;o++)if(e[t+o]!==e[r+o])return!1;return!0}function a(e,t,r,i,o){for(let n=0;n<o;n++)r[i+n]=e[t+n]}function s(e,t,r){let i=0;for(let o=0;o<r;o++)i=e[t+o]+i|0,i=i+(i<<11)+(i>>>2)|0;return i>>>0}let l=null},20241:(e,t,r)=>{"use strict";r.d(t,{r:()=>p});var i=r(59472),o=r(77625),n=r(17387),a=r(67128),s=r(12811),l=r(34353),d=r(56769),c=r(17282),h=r(70189),u=r(71702);class p extends u._{constructor(e){super(e),this._renderOccluded=4,this._width=1,this._color=(0,h.f)(1,0,1,1),this._innerWidth=1,this._innerColor=null,this._stipplePattern=null,this._stippleOffColor=null,this._stippleIntegerRepeats=!1,this._writeDepthEnabled=!0,this._falloff=0,this._polygonOffset=!1,this.applyProps(e)}setGeometryFromExtent(e){const t=this.view.spatialReference,r=(0,o.c)(),i=(0,o.c)(),a=100,s=[];(0,n.s)(r,e[0],e[1],a),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),(0,n.s)(r,e[2],e[1],a),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),(0,n.s)(r,e[2],e[3],a),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),(0,n.s)(r,e[0],e[3],a),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),(0,n.s)(r,e[0],e[1],a),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),(0,n.s)(r,e[0],e[1],a),this.view.renderCoordsHelper.toRenderCoords(r,t,i),s.push([i[0],i[1],i[2]]),this.geometry=[s]}setGeometryFromFrustum(e){const t=[];e.lines.forEach((e=>{t.push([e.origin[0],e.origin[1],e.origin[2]]),t.push([e.endpoint[0],e.endpoint[1],e.endpoint[2]])})),this.geometry=[t]}setGeometryFromSegment(e){const t=e.endRenderSpace;(0,a.i)(f),(0,a.t)(f,f,t),this.transform=f;const{points:r}=e.createRenderGeometry(t,this.view.renderCoordsHelper);this.geometry=[r]}setGeometryFromSegments(e,t=o.Z){(0,a.i)(f),(0,a.t)(f,f,t),this.transform=f,this.geometry=e.map((e=>e.createRenderGeometry(t,this.view.renderCoordsHelper).points))}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){(0,l.g)(e,this._color)||((0,l.c)(this._color,e),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){(0,i.pC)(e)?!(0,i.Wi)(this._innerColor)&&(0,l.g)(e,this._innerColor)||(this._innerColor=(0,l.c)((0,h.c)(),e),this._updateMaterial()):(0,i.pC)(this._innerColor)&&(this._innerColor=null,this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=(0,i.pC)(e)!==(0,i.pC)(this._stipplePattern);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){((0,i.Wi)(e)||(0,i.Wi)(this._stippleOffColor)||!(0,l.g)(e,this._stippleOffColor))&&(this._stippleOffColor=(0,i.pC)(e)?(0,h.a)(e):null,this._updateMaterial())}get stippleIntegerRepeats(){return this._stippleIntegerRepeats}set stippleIntegerRepeats(e){this._stippleIntegerRepeats!==e&&(this._stippleIntegerRepeats=e,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled!==e&&(this._writeDepthEnabled=e,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){e!==this._polygonOffset&&(this._polygonOffset=e,this._updateMaterial())}createExternalResources(){this._material=new d.U(this.materialParameters)}destroyExternalResources(){this._material=null}createGeometries(e){const t=this._createLineGeometries();if(0!==t.length)for(let r=0;r<t.length;++r){const i=(0,c.YU)(t[r]);e.addGeometry(i,this._material)}}forEachExternalMaterial(e){e(this._material)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,isClosed:!1,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,stippleIntegerRepeats:this._stippleIntegerRepeats,polygonOffset:this._polygonOffset,renderOccluded:this._renderOccluded,writeDepth:this._writeDepthEnabled}}_updateMaterial(){this.attached&&this._material.setParameterValues(this.materialParameters)}_createLineGeometries(){const e=this.geometry;if((0,i.Wi)(e)||0===e.length)return[];const t=[];return e.forEach((e=>{const r=e.length,i=new Float64Array(3*r);e.forEach(((e,t)=>{i[3*t+0]=e[0],i[3*t+1]=e[1],i[3*t+2]=e[2]}));const o={attributeData:{position:i},removeDuplicateStartEnd:0};t.push(o)})),t}}const f=(0,s.c)()},71702:(e,t,r)=>{"use strict";r.d(t,{_:()=>d});var i=r(59472),o=r(67128),n=r(12811),a=r(88909),s=r(81667),l=r(74808);class d extends l.l{constructor(e){super(e.view),this._resources=null,this._transform=(0,n.c)()}get object(){return(0,i.pC)(this._resources)?this._resources.object:null}get transform(){return this._transform}set transform(e){(0,o.e)(this._transform,e),(0,i.pC)(this._resources)&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if((0,i.Wi)(this._resources))return;const e=this._resources.object,t=this.view._stage;t.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),this.visible||e.setVisible(this.visible),t.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const t=new s.F({isPickable:!1});e.add(t);const r=new a.T({castShadow:!1});r.transformation=this._transform,this.createExternalResources(),this.createGeometries(r),e.addMany(r.geometries),this.forEachExternalMaterial((t=>e.add(t))),e.add(r),t.add(r),e.processDirtyLayer(t.id),this.visible||r.setVisible(!1),this._resources={layer:t,object:r}}destroyResources(){const e=this.view._stage;!(0,i.Wi)(this._resources)&&e&&(e.remove(this._resources.object),e.remove(this._resources.layer),this.forEachExternalMaterial((t=>{e.remove(t),t.dispose()})),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){(0,i.Wi)(this._resources)||this._resources.object.setVisible(e)}}},81718:(e,t,r)=>{"use strict";r.d(t,{rR:()=>h,w7:()=>u});var i,o=r(94588),n=r(59472),a=r(77625),s=(r(67128),r(17333)),l=r(12811),d=r(45201),c=r(19132);r(74218);function h(e,t,r,i,o,n,a,l,d,c,h){const u=p[h.mode];let f,m,g=0;if((0,s.CM)(e,t,r,i,d.spatialReference,o,l))return u.requiresAlignment(h)?(g=u.applyElevationAlignmentBuffer(i,o,n,a,l,d,c,h),f=n,m=a):(f=i,m=o),(0,s.CM)(f,d.spatialReference,m,n,c.spatialReference,a,l)?g:void 0}function u(e,t,r,i,a){const s=((0,d.Vs)(e)?e.z:(0,c.Fb)(e)?e.array[e.offset+2]:e[2])||0;switch(r.mode){case"on-the-ground":{const r=(0,n.Pt)((0,c.KO)(t,e,"ground"),0);return a&&(a.verticalDistanceToGround=0,a.sampledElevation=r),r}case"relative-to-ground":{const o=(0,n.Pt)((0,c.KO)(t,e,"ground"),0),l=r.geometryZWithOffset(s,i);return a&&(a.verticalDistanceToGround=l,a.sampledElevation=o),l+o}case"relative-to-scene":{const o=(0,n.Pt)((0,c.KO)(t,e,"scene"),0),l=r.geometryZWithOffset(s,i);return a&&(a.verticalDistanceToGround=l,a.sampledElevation=o),l+o}case"absolute-height":{const o=r.geometryZWithOffset(s,i);if(a){const r=(0,n.Pt)((0,c.KO)(t,e,"ground"),0);a.verticalDistanceToGround=o-r,a.sampledElevation=r}return o}default:return(0,o.Bg)(r.mode),0}}!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(i||(i={}));const p={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,r,i,o,n,a,s){const l=s.calculateOffsetRenderUnits(a),d=s.featureExpressionInfoContext;t*=3,i*=3;for(let n=0;n<o;++n){const o=e[t+0],n=e[t+1],a=e[t+2];r[i+0]=o,r[i+1]=n,r[i+2]=null==d?a+l:l,t+=3,i+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,r=e.featureExpressionInfoContext;return 0!==t||null!=r}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,r,i,o,a){let s=0;const l=a.spatialReference;t*=3,i*=3;for(let d=0;d<o;++d){const o=e[t+0],d=e[t+1],c=e[t+2],h=(0,n.Pt)(a.getElevation(o,d,c,l,"ground"),0);s+=h,r[i+0]=o,r[i+1]=d,r[i+2]=h,t+=3,i+=3}return s/o},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,r,i,o,a,s,l){let d=0;const c=l.calculateOffsetRenderUnits(s),h=l.featureExpressionInfoContext,u=a.spatialReference;t*=3,i*=3;for(let s=0;s<o;++s){const o=e[t+0],s=e[t+1],l=e[t+2],p=(0,n.Pt)(a.getElevation(o,s,l,u,"ground"),0);d+=p,r[i+0]=o,r[i+1]=s,r[i+2]=null==h?l+p+c:p+c,t+=3,i+=3}return d/o},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,r,i,o,a,s,l){let d=0;const c=l.calculateOffsetRenderUnits(s),h=l.featureExpressionInfoContext,u=a.spatialReference;t*=3,i*=3;for(let s=0;s<o;++s){const o=e[t+0],s=e[t+1],l=e[t+2],p=(0,n.Pt)(a.getElevation(o,s,l,u,"scene"),0);d+=p,r[i+0]=o,r[i+1]=s,r[i+2]=null==h?l+p+c:p+c,t+=3,i+=3}return d/o},requiresAlignment:()=>!0}};(0,l.c)(),(0,a.c)()},17282:(e,t,r)=>{"use strict";r.d(t,{YU:()=>Dt,VP:()=>Ot,rm:()=>Pt});var i=r(6962),o=r(59472),n=r(33655),a=r(77625),s=r(17387),l=r(17333),d=r(92232);r(82204);function c(e,t,r){const i=e.length,o=new Array(i),n=new Array(i),a=new Array(i);let s=0,l=0,d=0,c=0;for(let t=0;t<i;++t)c+=e[t].length;const p=new Float64Array(3*c);let f=0;for(let c=i-1;c>=0;c--){const m=e[c],g=1===r&&u(m);if(g&&1!==i)o[s++]=m;else{let e=m.length;for(let t=0;t<s;++t)e+=o[t].length;const r={index:f,pathLengths:new Array(s+1),count:e,holeIndices:new Array(s)};r.pathLengths[0]=m.length,m.length>0&&(a[d++]={index:f,count:m.length}),f=g?h(m,m.length-1,-1,p,f,m.length,t):h(m,0,1,p,f,m.length,t);for(let e=0;e<s;++e){const i=o[e];r.holeIndices[e]=f,r.pathLengths[e+1]=i.length,i.length>0&&(a[d++]={index:f,count:i.length}),f=h(i,0,1,p,f,i.length,t)}s=0,r.count>0&&(n[l++]=r)}}for(let e=0;e<s;++e){const r=o[e];r.length>0&&(a[d++]={index:f,count:r.length}),f=h(r,0,1,p,f,r.length,t)}return l<i&&(n.length=l),d<i&&(a.length=d),{position:p,polygons:n,outlines:a}}function h(e,t,r,i,o,n,a){o*=3;for(let s=0;s<n;++s){const n=e[t];i[o++]=n[0],i[o++]=n[1],i[o++]=a?n[2]:0,t+=r}return o/3}function u(e){return!(0,d.bu)(e,!1,!1)}var p=r(68500),f=r(81718),m=r(56140),g=(r(95830),r(36544)),v=(r(68055),r(79881)),y=r(87566),_=(r(10923),r(57002),r(86035),r(62698)),b=r(82677),w=r(32366),x=r(59691),C=r(80621),S=r(67128),R=r(55735),E=r(81495),T=r(35430),D=r(77293),O=r(8634),A=r(57319),P=r(10346);class M{constructor(e=(0,a.c)(),t=(0,a.f)(.57735,.57735,.57735),r=!0){this.intensity=e,this.direction=t,this.castShadows=r}}class I{constructor(e=(0,a.c)(),t=(0,a.f)(.57735,.57735,.57735)){this.intensity=(0,a.c)(),this.direction=(0,a.c)(),this.intensity=e,this.direction=t}}class H{constructor(e=(0,a.c)()){this.intensity=e}}class z{constructor(){this.sh={r:[0],g:[0],b:[0]}}}var L=r(90168),N=r(25026),U=r(91852),F=(r(5627),r(84570));class V{constructor(e,t){this.id=(0,w.D)(),this._renderTarget=null,this._renderTarget=new F.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,hasMipmap:t,maxAnisotropy:8,width:0,height:0})}dispose(){this._renderTarget.dispose(),this._renderTarget=null}getTexture(){return this._renderTarget?this._renderTarget.colorTexture:null}isValid(){return null!==this._renderTarget}resize(e,t){this._renderTarget.resize(e,t)}bind(e){e.bindFramebuffer(this._renderTarget)}generateMipMap(){this._renderTarget.colorTexture.descriptor.hasMipmap&&this._renderTarget.colorTexture.generateMipmap()}disposeRenderTargetMemory(){this._renderTarget&&this._renderTarget.resize(0,0)}getGpuMemoryUsage(){let e=0;return this._renderTarget&&(e+=(0,A.un)(this._renderTarget)),e}}var W=r(50897);class G{constructor(e,t){this.vec3=e,this.id=t}}function j(e,t,r,i){return new G((0,a.f)(e,t,r),i)}class B{constructor(e){this.extent=(0,W.Ue)(),this.resolution=0,this.renderLocalOrigin=j(0,0,0,"O"),this.pixelRatio=1,this.renderTargets={color:{fbo:new V(e,!0),valid:!1,lastUsed:1/0},colorWithoutRasterImage:{fbo:new V(e,!0),valid:!1,lastUsed:1/0},highlight:{fbo:new V(e,!1),valid:!1,lastUsed:1/0},water:{fbo:new V(e,!0),valid:!1,lastUsed:1/0},occluded:{fbo:new V(e,!0),valid:!1,lastUsed:1/0}}}dispose(){this.renderTargets.color.fbo.dispose(),this.renderTargets.colorWithoutRasterImage.fbo.dispose(),this.renderTargets.highlight.fbo.dispose(),this.renderTargets.water.fbo.dispose(),this.renderTargets.occluded.fbo.dispose()}drawRenderTargets(e,t,r){const i=this.renderTargets;i.color.valid=e.drawPass(0,i.color.fbo,t),i.highlight.valid=e.drawPass(5,i.highlight.fbo,t),i.water.valid=e.drawPass(3,i.water.fbo,t),i.occluded.valid=e.drawPass(0,i.occluded.fbo,t,1),i.colorWithoutRasterImage.valid=r&&e.drawPass(0,i.colorWithoutRasterImage.fbo,t,2)}computeRenderTargetValidityBitfield(){const e=this.renderTargets;return+e.color.valid|+e.colorWithoutRasterImage.valid<<1|+e.highlight.valid<<2|+e.water.valid<<3|+e.occluded.valid<<4}validateUsage(e,t){if(e.valid)e.lastUsed=t;else if(t-e.lastUsed>k)e.fbo.disposeRenderTargetMemory(),e.lastUsed=1/0;else if(e.lastUsed<1/0)return!0;return!1}collectUnusedMemory(e){let t=!1;return t=this.validateUsage(this.renderTargets.color,e)||t,t=this.validateUsage(this.renderTargets.colorWithoutRasterImage,e)||t,t=this.validateUsage(this.renderTargets.highlight,e)||t,t=this.validateUsage(this.renderTargets.occluded,e)||t,t=this.validateUsage(this.renderTargets.water,e)||t,t}getGpuMemoryUsage(){return this.renderTargets.color.fbo.getGpuMemoryUsage()+this.renderTargets.colorWithoutRasterImage.fbo.getGpuMemoryUsage()+this.renderTargets.highlight.fbo.getGpuMemoryUsage()+this.renderTargets.water.fbo.getGpuMemoryUsage()+this.renderTargets.occluded.fbo.getGpuMemoryUsage()}}const k=1e3;var q=r(19677);class Z{constructor(){this._uniforms={proj:[],uShadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}dispose(){this._uniforms=null}getPrograms(e){return this._uniforms[e]||[]}subscribeProgram(e){for(const t in this._uniforms)e.hasUniform(t)&&this._uniforms[t].push(e)}unsubscribeProgram(e){for(const t in this._uniforms)(0,q.e$)(this._uniforms[t],e)}}class ${constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}class J{constructor(e){this._context=e,this._perConstructorInstances=new Map,this._frameCounter=0,this._keepAliveFrameCount=1200}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.dispose())))),this._perConstructorInstances.clear()}acquire(e,t){const r=t.key;let i=this._perConstructorInstances.get(e);i||(i=new Map,this._perConstructorInstances.set(e,i));let o=i.get(r);return void 0===o&&(o=new $(new e(this._context,t)),i.set(r,o)),++o.refCount,o.technique}acquireAndReleaseExisting(e,t,r){return(0,o.Wi)(r)?this.acquire(e,t):t.key===r.key&&r instanceof e?r:(this.release(r),this.acquire(e,t))}release(e){if((0,o.Wi)(e))return;const t=this._perConstructorInstances.get(e.constructor).get(e.key);t.refCount-=1,0===t.refCount&&(t.refZeroFrame=this._frameCounter)}frameUpdate(){this._frameCounter++,this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((t,r)=>{0===t.refCount&&t.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(t.technique.dispose(),e.delete(r))})),0===e.size&&this._perConstructorInstances.delete(t)}))}getProgramsUsingUniform(e){return this._context.commonUniformStore.getPrograms(e)}async hotReload(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{e.push((async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>{e.technique.reload(this._context)})))})(t,r))})),await Promise.all(e)}}var K=r(56469);const Y=[{output:0,name:"color"},{output:1,name:"depth"},{output:2,name:"normal"},{output:3,name:"depthShadowMap"},{output:4,name:"highlight"},{output:5,name:"draped"},{output:6,name:"occlusion"},{output:7,name:"alpha"}];function X(e,t){return e+"_"+Y.find((e=>e.output===t)).name}const Q=g.Z.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRep");class ee{constructor(e){this.refCnt=0,this.glMaterial=e}incRefCnt(){++this.refCnt}decRefCnt(){--this.refCnt,(0,K.hu)(this.refCnt>=0)}getRefCnt(){return this.refCnt}getGLMaterial(){return this.glMaterial}}const te=class{constructor(e,t,r){this._textureRep=e,this._techniqueRep=t,this.onMaterialChanged=r,this._id2glMaterialRef=new Map}dispose(){this._textureRep.dispose()}acquire(e,t){this.ownMaterial(e);const r=X(e.id,t);let i=this._id2glMaterialRef.get(r);if(null==i){const o=e.getGLMaterial({material:e,techniqueRep:this._techniqueRep,textureRep:this._textureRep,output:t});return i=new ee(o),i.incRefCnt(),this._id2glMaterialRef.set(r,i),o}return i.incRefCnt(),i.getGLMaterial()}release(e,t){const r=X(e.id,t),i=this._id2glMaterialRef.get(r);if(i.decRefCnt(),0===i.getRefCnt()){const e=i.getGLMaterial();e&&e.dispose(),this._id2glMaterialRef.delete(r)}}materialChanged(e){for(const t of Y)if(5!==t.output&&6!==t.output){const r=this._id2glMaterialRef.get(X(e.id,t.output));if(r&&r.getGLMaterial()){const e=r.getGLMaterial();e.updateParameters&&e.updateParameters()}}this.onMaterialChanged&&this.onMaterialChanged(e)}ownMaterial(e){(0,o.pC)(e.materialRepository)&&e.materialRepository!==this&&Q.error("Material is already owned by a different material repository"),e.materialRepository=this}};var re=r(73032),ie=r(12811),oe=r(88909),ne=r(81667),ae=r(56769);let se=0;class le{constructor(){this.ROOT_ORIGIN_ID="rg_root_"+se++,this._origins=new Map,this._gridSize=42e5}getOrigin(e){const t=this._origins.get(this.ROOT_ORIGIN_ID);if(null==t){if((0,o.pC)(le.testOrigin)){const t=le.testOrigin;return this._origins.set(this.ROOT_ORIGIN_ID,j(t[0],t[1],t[2],this.ROOT_ORIGIN_ID)),this.getOrigin(e)}const t=j(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);return this._origins.set(this.ROOT_ORIGIN_ID,t),t}(0,s.f)(de,e,t.vec3),de[0]=Math.abs(de[0]),de[1]=Math.abs(de[1]),de[2]=Math.abs(de[2]);const r=this._gridSize;if(de[0]<r&&de[1]<r&&de[2]<r)return t;const i=Math.round(e[0]/r),n=Math.round(e[1]/r),a=Math.round(e[2]/r),l=`rg_${i}/${n}/${a}`;let d=this._origins.get(l);return d||(d=j(i*r,n*r,a*r,l),this._origins.set(l,d)),d}_drawOriginBox(e){const t=window.view,r=t._stage;if(null==this._object){this._material=new ae.U({width:2,color:[0,1,0,1]}),r.add(this._material);const e=new ne.F({isPickable:!1});this._object=new oe.T({castShadow:!1}),r.add(this._object),e.add(this._object),r.add(e)}const i=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],o=i.length,n=new Array(3*o),a=new Uint16Array(2*(o-1)),s=.5*this._gridSize;for(let t=0;t<o;t++)n[3*t+0]=e[0]+(1&i[t]?s:-s),n[3*t+1]=e[1]+(2&i[t]?s:-s),n[3*t+2]=e[2]+(4&i[t]?s:-s),t>0&&(a[2*t+0]=t-1,a[2*t+1]=t);(0,l.CM)(n,re.Z.WebMercator,0,n,t.spatialReference,0,o);const d=new p.Z([["position",{size:3,data:n,exclusive:!0}]],[["position",a]],2);r.add(d),this._object.addGeometry(d,this._material,ie.I),console.log(this._origins.size,e)}}const de=(0,a.c)();!function(e){e.testOrigin=null}(le||(le={}));const ce=le;const he=13,ue=class{constructor(e,t,r,i,o,n){this.rctx=e,this.offscreenRenderingHelper=t,this.scenelightingData=r,this.shadowMap=i,this.ssaoHelper=o,this.sliceHelper=n,this.camera=null,this.lastFrameCamera=new L.Z,this.pass=0,this.slot=0,this.highlightDepthTexture=null,this.renderOccludedMask=he,this.hasOccludees=!1}resetRenderOccludedMask(){this.renderOccludedMask=he}get isHighlightPass(){return 5===this.pass}};var pe=r(10762);class fe{constructor(){this.adds=new _.Z,this.removes=new _.Z,this.updates=new _.Z({allocator:e=>e||new me,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class me{}class ge{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}function ve(e){return e.data.indexCount>=1}var ye=r(49366),_e=r(1227),be=r(69595),we=r(74038);class xe{constructor(e){null==e?e=16:e<65536&&(e=(0,n.Sf)(e)),this._array=new Float32Array(e),this._size=0}resize(e,t){if(this._size=e,this._size>this._array.length){let e=this._array.length||1;for(;e<this._size;)e*=2;const r=new Float32Array(e);return t&&r.set(this._array),this._array=r,!0}const r=2*this._size;if(r<=this._array.length){let e=this._array.length;for(;e>=r;)e=Math.floor(e/2);const i=new Float32Array(e);return t&&i.set(this._array.subarray(0,e)),this._array=i,!0}return!1}append(e){const t=this._size;this.resize(this._size+e.length,!0),this._array.set(e,t)}erase(e,t){for(let r=e;r<t;++r)this._array[r]=0}get array(){return this._array}get size(){return this._size}}var Ce=r(26701),Se=r(23240),Re=r(97853),Ee=r(44801),Te=r(11379),De=r(51007),Oe=r(36904),Ae=r(89553),Pe=r(68397),Me=r(61514),Ie=r(72023),He=r(66704),ze=r(88214),Le=r(71613),Ne=r(75619),Ue=r(91123),Fe=r(74332);class Ve extends Re.A{constructor(e,t){super(e,t),this.waterTextureRepository=e.waterTextureRepository}initializeProgram(e){const t=Ve.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:r.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:r.useSSR,highStepCount:!0,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new De.Z(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),Te.i)}ensureResource(e){return this.waterTextureRepository.ready||this.waterTextureRepository.updating||this.waterTextureRepository.loadTextures(e),this.waterTextureRepository.ready?2:1}bindPass(e,t,r){Ae.G.bindProjectionMatrix(this.program,r.camera.projectionMatrix),r.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),this.program.setUniform2fv("viewportDim",[e.getViewport().width,e.getViewport().height]),(0,ze.C)(this.program,e,r)),0===this.configuration.output&&(r.lighting.setUniforms(this.program,!1),Ne.P.bindUniforms(this.program,e,r)),0!==this.configuration.output&&2!==this.configuration.output||(Ue.M.bindUniforms(this.program,t),this.waterTextureRepository.bindRepo(e)),this.program.setUniform4fv("waterColor",t.color),4===this.configuration.output&&Ie.bA.bindOutputHighlight(e,this.program,r)}bindDraw(e){Ae.G.bindView(this.program,e),0!==this.configuration.output&&7!==this.configuration.output||Ae.G.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),0===this.configuration.output&&Le.h.bindUniforms(this.program,e,Pe.G.SHADOW_MAP),0!==this.configuration.output&&7!==this.configuration.output&&4!==this.configuration.output||Me.p.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e){const t=this.configuration,r=3===e,i=2===e;return(0,Oe.sm)({blending:2!==t.output&&4!==t.output&&t.transparent?r?He.wu:(0,He.$L)(e):null,depthTest:{func:(0,He.$x)(e)},depthWrite:r?t.writeDepth&&Oe.LZ:(0,He.Vc)(e),colorWrite:Oe.BK,polygonOffset:r||i?null:(0,He.je)(t.enableOffset)})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}}Ve.shader=new Se.J(Fe.W,(()=>r.e(6815).then(r.bind(r,16815))));class We extends Ee.m{constructor(){super(...arguments),this.output=0,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.useSSR=!1,this.isDraped=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}(0,m._)([(0,Ee.o)({count:8})],We.prototype,"output",void 0),(0,m._)([(0,Ee.o)()],We.prototype,"receiveShadows",void 0),(0,m._)([(0,Ee.o)()],We.prototype,"slicePlaneEnabled",void 0),(0,m._)([(0,Ee.o)()],We.prototype,"transparent",void 0),(0,m._)([(0,Ee.o)()],We.prototype,"enableOffset",void 0),(0,m._)([(0,Ee.o)()],We.prototype,"writeDepth",void 0),(0,m._)([(0,Ee.o)()],We.prototype,"useSSR",void 0),(0,m._)([(0,Ee.o)()],We.prototype,"isDraped",void 0),(0,m._)([(0,Ee.o)({count:4})],We.prototype,"transparencyPassType",void 0),(0,m._)([(0,Ee.o)()],We.prototype,"multipassTerrainEnabled",void 0),(0,m._)([(0,Ee.o)()],We.prototype,"cullAboveGround",void 0);class Ge extends Ce.Z{constructor(e){super(e),this.updateParameters()}updateParameters(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(Ve,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){if(2===this.output)return 22===e;if(5===this.output)return null==e;if(4===this.output)return 3===e;let t=3;return this.material.params.transparent&&(t=this.material.params.writeDepth?5:8),e===t}setElapsedTimeUniform(e){const t=.001*this.material.animation.time;e.setUniform1f("timeElapsed",t*this.material.params.animationSpeed)}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.receiveShadows&&this.material.setParameterValues({receiveShadows:e.shadowMappingEnabled})}_updateSSRState(e){e.ssrEnabled!==this.material.params.ssrEnabled&&this.material.setParameterValues({ssrEnabled:e.ssrEnabled})}ensureResources(e){return this.technique.ensureResource(e)}ensureParameters(e){0===this.output&&(this._updateShadowState(e),this._updateSSRState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),2!==this.output&&0!==this.output||this.setElapsedTimeUniform(this.technique.program)}}class je{constructor(e,t,r,i,o,n){this.from=e,this.to=t,this.isVisible=r,this.hasHighlights=i,this.hasOccludees=o,this.transformation=n,null!=n&&(this.transformationNormal=(0,ie.a)(n),(0,S.c)(this.transformationNormal,this.transformationNormal),(0,S.d)(this.transformationNormal,this.transformationNormal))}}function Be(e,t){const r=e=>({first:e.from,count:e.to-e.from});if(0===e.length)return void e.push(r(t));const i=e[e.length-1];if(function(e,t){return e.first+e.count>=t.from}(i,t)){const e=t.from-i.first+t.to-t.from;i.count=e}else e.push(r(t))}r(65575);function ke(e,t,r){(0,o.pC)(r)&&(r.drawCalls+=e,r.triangles+=t)}function qe(e){return e.hasOccludees||e.hasHighlights||e.hasHiddenInstances}const Ze={begin:0,end:0},$e=(0,ie.c)(),Je=(0,ie.c)(),Ke=(0,ie.c)(),Ye=class{constructor(e,t,r){this.type="MergedRenderer",this._dataByOrigin=new Map,this._hasHighlights=!1,this._hasOccludees=!1,this._rctx=e,this._material=r,this._materialRep=t,this._glMaterials=(0,ye.a9)(this._material,this._materialRep),this._bufferWriter=r.createBufferWriter()}dispose(){(0,ye.BX)(this._material,this._materialRep),this._dataByOrigin&&(this._dataByOrigin.forEach((e=>{e.vao.dispose(!0),e.vao=null})),this._dataByOrigin.clear(),this._dataByOrigin=null),this._glMaterials&&(this._glMaterials.forEach((e=>{e&&e.dispose()})),this._glMaterials.clear(),this._glMaterials=null)}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&(0,D.o)(this._glMaterials,(e=>e instanceof Ge))}get rendersOccluded(){return!this.isEmpty&&1!==this._material.renderOccluded}modify(e){this.updateGeometries(e.updates),this.addAndRemoveGeometries(e.adds,e.removes),this.updateRenderCommands()}addAndRemoveGeometries(e,t){const r=this._bufferWriter,i=r.vertexBufferLayout,o=i.stride/4,n=this._dataByOrigin,a=function(e,t,r,i){const o=new Map,n=t.vertexBufferLayout.stride/4,a=(r,i)=>{const a=r.origin,s=e.get(a.id);let l=o.get(a.id);null==l&&(l={optimalCount:null==s?0:s.optimalCount,sparseCount:null==s?0:s.buffer.size,toAdd:[],toRemove:[],origin:a.vec3},o.set(a.id,l));const d=t.elementCount(r.data)*n;i?(l.optimalCount+=d,l.sparseCount+=d,l.toAdd.push(r)):(l.optimalCount-=d,l.toRemove.push(r))};for(const e of r)a(e,!0);for(const e of i)a(e,!1);return o}(n,r,e,t);a.forEach(((e,t)=>{a.delete(t);const r=e.optimalCount,s=e.sparseCount;let l=n.get(t);if(null==l)(0,K.hu)(r>0),l=this.createData(i,r,e.origin),n.set(t,l);else if(0===r)return l.vao.dispose(!0),l.vao=null,void n.delete(t);const d=r<e.sparseCount/2,c=d?r:s,h=Ze,u=l.buffer.size,p=l.buffer.array,f=l.buffer.resize(c,!1);d||f?this.removeAndRebuild(l,e.toRemove,o,p,h):e.toRemove.length>0?(this.removeByErasing(l,e.toRemove,o,h),e.toAdd.length>0&&(h.end=u)):(h.begin=u,h.end=u);const m=$e;(0,K.u_)(m,-e.origin[0],-e.origin[1],-e.origin[2]),this.append(l,e.toAdd,o,m,h);const g=l.vao.vertexBuffers.geometry;if(g.byteSize!==l.buffer.array.buffer.byteLength)g.setData(l.buffer.array);else{const{begin:e,end:t}=h;if(e<t){const r=l.buffer.array,i=4,o=e*i,n=t*i;g.setSubData(r,o,o,n)}}l.drawCommandsDirty=!0}))}updateGeometries(e){const t=this._bufferWriter,r=t.vertexBufferLayout.stride/4;for(const i of e){const e=i.updateType,o=i.renderGeometry,n=this._dataByOrigin.get(o.origin.id),a=n&&n.instances.get(o.id);if(!a)return;if(1&e&&(a.isVisible=o.instanceParameters.visible),9&e){const e=o.instanceParameters.visible;a.hasHighlights=!!o.instanceParameters.highlights&&e}if(16&e&&(a.hasOccludees=!!o.instanceParameters.occludees),6&e){const e=n.buffer.array,i=n.vao;(0,ye.Wr)(o,Je,Ke),t.write({transformation:Je,invTranspTransformation:Ke},o.data,t.vertexBufferLayout.createView(e.buffer),a.from),(0,K.hu)(a.from+t.elementCount(o.data)===a.to,"material VBO layout has changed"),i.vertexBuffers.geometry.setSubData(e,a.from*r*4,a.from*r*4,a.to*r*4)}n.drawCommandsDirty=!0}}updateRenderCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((e=>{e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,(0,D.o)(e.instances,(t=>(t.isVisible?(t.hasHighlights&&(this._hasHighlights=!0,e.hasHighlights=!0),t.hasOccludees&&(this._hasOccludees=!0,e.hasOccludees=!0)):e.hasHiddenInstances=!0,e.hasHiddenInstances&&e.hasHighlights&&e.hasOccludees)))}));this._dataByOrigin.forEach((e=>{e.drawCommandsDirty&&((e=>{if(e.drawCommandsDefault=null,e.drawCommandsHighlight=null,e.drawCommandsOccludees=null,e.drawCommandsShadowHighlightRest=null,e.stats={default:0,highlight:0,occludees:0,shadowHighlightRest:0},0===e.instances.size)return;if(!qe(e)){const t=4*e.buffer.size/(0,A.m)(e.vao.layout.geometry);return e.drawCommandsDefault=[{first:0,count:t}],void(e.stats={default:t,highlight:0,occludees:0,shadowHighlightRest:0})}const t=function(e){return e.sort(((e,t)=>e.from===t.from?e.to>t.to?1:e.to<t.to?-1:0:e.from>t.from?1:e.from<t.from?-1:0))}([...e.instances.values()]);e.drawCommandsDefault=[],e.drawCommandsHighlight=[],e.drawCommandsOccludees=[],e.drawCommandsShadowHighlightRest=[];for(const r of t)r.isVisible&&(r.hasOccludees?Be(e.drawCommandsOccludees,r):Be(e.drawCommandsDefault,r),r.hasHighlights?Be(e.drawCommandsHighlight,r):Be(e.drawCommandsShadowHighlightRest,r));const r=e=>{let t=0;for(const r of e)t+=r.count;return t/3};e.stats={default:r(e.drawCommandsDefault),highlight:r(e.drawCommandsHighlight),occludees:r(e.drawCommandsOccludees),shadowHighlightRest:r(e.drawCommandsShadowHighlightRest)}})(e),e.drawCommandsDirty=!1)}))}updateLogic(e){return this._material.update(e)}render(e,t,r,i){const n=this._rctx,a=this._glMaterials.get(t.pass),s=5===t.pass||7===t.pass,l=6===t.pass,d=!(s||l);let c=e;if(3===t.pass&&null===c&&(c=22),!a||2!==a.ensureResources(n)||null!=c&&!a.beginSlot(c)||s&&!this._hasHighlights)return!1;a.ensureParameters(r);const h=a.getTechnique(),u=a.getPipelineState(c,!1);n.setPipelineState(u),a.bind(n,r);let p=!1;return this._dataByOrigin.forEach((e=>{if((0,o.Wi)(e.drawCommandsDefault)&&(0,o.Wi)(e.drawCommandsHighlight)&&(0,o.Wi)(e.drawCommandsOccludees)&&(0,o.Wi)(e.drawCommandsShadowHighlightRest))return;if(s&&!e.hasHighlights)return;r.origin=e.origin,h.bindDraw(r),h.ensureAttributeLocations(e.vao),n.bindVAO(e.vao);const t=h.primitiveType;let f=s?e.drawCommandsHighlight:l&&qe(e)?e.drawCommandsShadowHighlightRest:e.drawCommandsDefault;const m=s?e.stats.highlight:l&&qe(e)?e.stats.shadowHighlightRest:e.stats.default;if((0,o.pC)(f)&&(this.renderCommands(n,t,f),ke(f.length,m,i),p=!0),d&&(f=e.drawCommandsOccludees,(0,o.pC)(f))){const r=a.getPipelineState(c,!0);n.setPipelineState(r),this.renderCommands(n,t,f),n.setPipelineState(u),ke(f.length,e.stats.occludees,i),p=!0}})),p}renderCommands(e,t,r){for(let i=0;i<r.length;i++)e.drawArrays(t,r[i].first,r[i].count)}createData(e,t,r){return{instances:new Map,vao:new we.Z(this._rctx,this._material.vertexAttributeLocations,{geometry:(0,_e.K)(e)},{geometry:be.Z.createVertex(this._rctx,35044)}),buffer:new xe(t),optimalCount:0,origin:r,hasHiddenInstances:!1,hasHighlights:!1,hasOccludees:!1,drawCommandsDirty:!1,drawCommandsDefault:null,drawCommandsOccludees:null,drawCommandsHighlight:null,drawCommandsShadowHighlightRest:null,stats:{default:0,highlight:0,occludees:0,shadowHighlightRest:0}}}removeAndRebuild(e,t,r,i,o){for(const i of t){const t=i.id,o=e.instances.get(t);e.optimalCount-=(o.to-o.from)*r,e.instances.delete(t)}let n=0;const a=e.buffer.array;o.begin=0,o.end=0;let s=-1,l=-1,d=0;e.instances.forEach((e=>{const t=e.from*r,o=e.to*r,c=o-t;s!==l&&l!==t?(a.set(i.subarray(s,l),d),d+=l-s,s=t):-1===s&&(s=t),l=o,e.from=n/r,n+=c,e.to=n/r})),s!==l&&a.set(i.subarray(s,l),d),o.end=n}removeByErasing(e,t,r,i){i.begin=1/0,i.end=-1/0;let o=-1,n=-1;for(const a of t){const t=a.id,s=e.instances.get(t),l=s.from*r,d=s.to*r;o!==n&&n!==l?(e.buffer.erase(o,n),o=l):-1===o&&(o=l),n=d,e.instances.delete(t),e.optimalCount-=d-l,l<i.begin&&(i.begin=l),d>i.end&&(i.end=d)}o!==n&&e.buffer.erase(o,n)}append(e,t,r,i,n){const a=this._bufferWriter;for(const s of t){const t=(0,o.pC)(s.transformation)?(0,S.m)(Je,i,s.transformation):i;(0,S.c)(Ke,t),(0,S.d)(Ke,Ke);const l=n.end;a.write({transformation:t,invTranspTransformation:Ke},s.data,a.vertexBufferLayout.createView(e.buffer.array.buffer),n.end/r);const d=a.elementCount(s.data)*r,c=l+d;(0,K.hu)(null==e.instances.get(s.id));const h=s.instanceParameters.visible,u=!!s.instanceParameters.highlights&&h,p=!!s.instanceParameters.occludees,f=new je(l/r,c/r,h,u,p);e.instances.set(s.id,f),e.optimalCount+=d,n.end+=d}}get test(){return{material:this._material,glMaterials:this._glMaterials}}};let Xe=class extends b.default{constructor(){super(...arguments),this._pendingAddsRemoves=new Map,this._changes=new fe,this._materialRenderers=new Map,this._sortedMaterialRenderers=new _.Z,this._hasHighlights=!1,this._hasWater=!1}dispose(){this._changes.prune(),this._materialRenderers&&(this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear())}get updating(){return this._pendingAddsRemoves.size>0||this._changes.updates.length>0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return(0,D.o)(this._materialRenderers,(e=>e.rendersOccluded))}stopAnimationsAtTime(e){this._sortedMaterialRenderers.forAll((t=>(0,o.yw)(t.material.animation,(t=>t.stopAtTime(e)))))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size}commitChanges(){let e=!1;if(!this.updating)return!1;this.updateAddsRemoves();const t=function(e){const t=new Map,r=e=>{let r=t.get(e);return r||(r=new ge,t.set(e,r)),r};return e.adds.forAll((e=>{ve(e)&&r(e.material).adds.push(e)})),e.removes.forAll((e=>{ve(e)&&r(e.material).removes.push(e)})),e.updates.forAll((e=>{ve(e.renderGeometry)&&r(e.renderGeometry.material).updates.push(e)})),t}(this._changes);let r=!1,i=!1;return t.forEach(((t,o)=>{let n=this._materialRenderers.get(o);if(!n&&t.adds.length>0&&(n=new Ye(this.rctx,this.materialRepository,o),this._materialRenderers.set(o,n),e=!0,r=!0,i=!0),!n)return;const a=r||n.hasHighlights,s=i||n.hasWater;n.modify(t),r=r||a!==n.hasHighlights,i=i||s!==n.hasWater,n.isEmpty&&(this._materialRenderers.delete(o),n.dispose(),e=!0)})),this._changes.clear(),this._pendingAddsRemoves.clear(),e&&this.updateSortedMaterialRenderers(),r&&(this._hasHighlights=(0,D.o)(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=(0,D.o)(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}add(e){if(0===e.length)return;const t=0===this._pendingAddsRemoves.size;for(const t of e)this._pendingAddsRemoves.set(t,0);t&&this.notifyChange("updating")}remove(e){const t=0===this._pendingAddsRemoves.size;for(const t of e){const e=this._pendingAddsRemoves.get(t);0===e?this._pendingAddsRemoves.set(t,2):2!==e&&this._pendingAddsRemoves.set(t,1)}t&&this._pendingAddsRemoves.size>0&&this.notifyChange("updating")}modify(e,t){const r=0===this._changes.updates.length;for(const r of e){const e=this._changes.updates.pushNew();e.renderGeometry=r,e.updateType=t}r&&this._changes.updates.length>0&&this.notifyChange("updating")}updateLogic(e){let t=!1;return this._sortedMaterialRenderers.forAll((({materialRenderer:r})=>{r.updateLogic&&r.updateLogic(e)&&(t=!0)})),t}draw(e,t){for(let r=0;r<this._sortedMaterialRenderers.length;r++){const i=this._sortedMaterialRenderers.data[r];(0,pe.Pb)(i.material,e)&&i.materialRenderer.render(null,e,t,null)}}updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((t,r)=>{r.insertOrder=e++,this._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort(((e,t)=>{const r=t.material.renderPriority-e.material.renderPriority;return 0!==r?r:e.material.insertOrder-t.material.insertOrder}))}updateAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._pendingAddsRemoves.forEach(((e,t)=>{switch(e){case 0:this._changes.adds.push(t);break;case 1:this._changes.removes.push(t)}}));let e=0;for(;e<this._changes.updates.length;){const t=this._changes.updates.data[e].renderGeometry;this._pendingAddsRemoves.has(t)?this._changes.updates.removeUnorderedIndex(e):e++}}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};(0,m._)([(0,v.Cb)()],Xe.prototype,"rctx",void 0),(0,m._)([(0,v.Cb)()],Xe.prototype,"materialRepository",void 0),(0,m._)([(0,v.Cb)()],Xe.prototype,"updating",null),Xe=(0,m._)([(0,y.j)("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],Xe);var Qe=r(54452);class et extends Re.A{initializeProgram(e){const t=et.shader.get().build();return new De.Z(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),Te.i)}initializePipeline(){return this.configuration.hasAlpha?(0,Oe.sm)({blending:(0,Oe.wK)(770,1,771,771),colorWrite:Oe.BK}):(0,Oe.sm)({colorWrite:Oe.BK})}}et.shader=new Se.J(Qe.T,(()=>r.e(1225).then(r.bind(r,61225))));class tt extends Ee.m{constructor(){super(...arguments),this.hasAlpha=!1}}function rt(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t[i];return r}function it(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t;return r}function ot(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]+t[i];return r}function nt(e){return(e+1)*(e+1)}function at(e,t,r){const i=e[0],o=e[1],n=e[2],a=r||[];return a.length=nt(t),t>=0&&(a[0]=.28209479177),t>=1&&(a[1]=.4886025119*i,a[2]=.4886025119*n,a[3]=.4886025119*o),t>=2&&(a[4]=1.09254843059*i*o,a[5]=1.09254843059*o*n,a[6]=.31539156525*(3*n*n-1),a[7]=1.09254843059*i*n,a[8]=.54627421529*(i*i-o*o)),a}function st(e,t){const r=function(e){return(0,n.uZ)(Math.floor(Math.sqrt(e)-1),0,2)}(t.r.length);for(const i of e)(0,s.m)(ft,i.direction),at(ft,r,ut),rt(ut,mt),it(ut,i.intensity[0],pt),ot(t.r,pt),it(ut,i.intensity[1],pt),ot(t.g,pt),it(ut,i.intensity[2],pt),ot(t.b,pt);return t}function lt(e,t,r){(function(e,t){const r=nt(e),i=t||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let e=0;e<r;e++)i.r[e]=i.g[e]=i.b[e]=0})(t,r.sphericalHarmonics.sh),(0,s.s)(r.main.intensity,0,0,0);let i=!1;const o=dt,n=ct,a=ht;o.length=0,n.length=0,a.length=0;for(const t of e)t instanceof M&&!i?((0,s.g)(r.main.direction,t.direction),r.main.intensity[0]=t.intensity[0],r.main.intensity[1]=t.intensity[1],r.main.intensity[2]=t.intensity[2],r.main.castShadows=t.castShadows,i=!0):t instanceof M||t instanceof I?o.push(t):t instanceof H?n.push(t):t instanceof z&&a.push(t);st(o,r.sphericalHarmonics.sh),function(e,t){at(ft,0,ut);for(const r of e)t.r[0]+=ut[0]*mt[0]*r.intensity[0]*4*Math.PI,t.g[0]+=ut[0]*mt[0]*r.intensity[1]*4*Math.PI,t.b[0]+=ut[0]*mt[0]*r.intensity[2]*4*Math.PI}(n,r.sphericalHarmonics.sh);for(const e of a)ot(r.sphericalHarmonics.sh.r,e.sh.r),ot(r.sphericalHarmonics.sh.g,e.sh.g),ot(r.sphericalHarmonics.sh.b,e.sh.b)}(0,m._)([(0,Ee.o)()],tt.prototype,"hasAlpha",void 0);const dt=[],ct=[],ht=[],ut=[0],pt=[0],ft=(0,a.c)(),mt=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398],gt=(0,a.c)();class vt{constructor(){this._renderLighting={main:{intensity:(0,a.c)(),direction:(0,a.f)(1,0,0),castShadows:!1},sphericalHarmonics:{sh:{r:[0],g:[0],b:[0]}}},this._shOrder=2,this._oldSunlight={direction:(0,a.c)(),ambient:{color:(0,a.c)(),intensity:0},diffuse:{color:(0,a.c)(),intensity:0}}}setLightDirectionUniform(e){e.setUniform3fv("lightingMainDirection",this._renderLighting.main.direction)}setUniforms(e,t=!1){if(t){const t=(1-this._info.groundLightingFactor)*(1-this._info.globalFactor);e.setUniform1f("lightingFixedFactor",t)}else e.setUniform1f("lightingFixedFactor",0);e.setUniform1f("lightingGlobalFactor",this._info.globalFactor),this.setLightDirectionUniform(e),e.setUniform3fv("lightingMainIntensity",this._renderLighting.main.intensity),e.setUniform1f("ambientBoostFactor",.4);const r=this._renderLighting.sphericalHarmonics.sh;0===this._shOrder?e.setUniform3f("lightingAmbientSH0",r.r[0],r.g[0],r.b[0]):1===this._shOrder?(e.setUniform4f("lightingAmbientSH_R",r.r[0],r.r[1],r.r[2],r.r[3]),e.setUniform4f("lightingAmbientSH_G",r.g[0],r.g[1],r.g[2],r.g[3]),e.setUniform4f("lightingAmbientSH_B",r.b[0],r.b[1],r.b[2],r.b[3])):2===this._shOrder&&(e.setUniform3f("lightingAmbientSH0",r.r[0],r.g[0],r.b[0]),e.setUniform4f("lightingAmbientSH_R1",r.r[1],r.r[2],r.r[3],r.r[4]),e.setUniform4f("lightingAmbientSH_G1",r.g[1],r.g[2],r.g[3],r.g[4]),e.setUniform4f("lightingAmbientSH_B1",r.b[1],r.b[2],r.b[3],r.b[4]),e.setUniform4f("lightingAmbientSH_R2",r.r[5],r.r[6],r.r[7],r.r[8]),e.setUniform4f("lightingAmbientSH_G2",r.g[5],r.g[6],r.g[7],r.g[8]),e.setUniform4f("lightingAmbientSH_B2",r.b[5],r.b[6],r.b[7],r.b[8]))}set(e){this._info=e,lt(e.lights,this._shOrder,this._renderLighting),(0,s.m)(this._oldSunlight.direction,this._renderLighting.main.direction);const t=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._renderLighting.sphericalHarmonics.sh.r[0]*t,this._oldSunlight.ambient.color[1]=.282095*this._renderLighting.sphericalHarmonics.sh.g[0]*t,this._oldSunlight.ambient.color[2]=.282095*this._renderLighting.sphericalHarmonics.sh.b[0]*t,this._oldSunlight.ambient.intensity=1,this._oldSunlight.diffuse.color[0]=this._renderLighting.main.intensity[0]*t,this._oldSunlight.diffuse.color[1]=this._renderLighting.main.intensity[1]*t,this._oldSunlight.diffuse.color[2]=this._renderLighting.main.intensity[2]*t,this._oldSunlight.diffuse.intensity=1;const r=(0,s.g)(gt,this._oldSunlight.diffuse.color);(0,s.a)(r,r,.4*this._info.globalFactor),(0,s.b)(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,r)}get globalFactor(){return this._info.globalFactor}get old(){return this._oldSunlight}}var yt=r(48430);const _t=g.Z.getLogger("esri.views.3d.webgl-engine.lib.OverlayRenderer");let bt=class extends((0,U.TF)(b.default)){constructor(e){super(e),this._overlays=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._lighting=new vt,this._localOrigins=new ce,this._handles=new x.Z,this._layerRenderers=new Map,this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers=new _.Z,this._geometries=new Map,this.globalUnitScale=1,this.longitudeCyclical=null}initialize(){this._rctx=this.renderView.renderingContext,this._renderContext=new ue(this._rctx,null,null,null,null,null),this._stippleTextureRepository=new yt.h0,this.waterTextureRepository=this.renderView.waterTextureRepository,this._shaderTechniqueRepository=new J({rctx:this._rctx,viewingMode:2,commonUniformStore:new Z,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:this.waterTextureRepository}),(0,C.init)(this.waterTextureRepository,"loadingState",(()=>this.emitContentChanged())),this._materialRepository=new te(this.renderView.textureRepository,this._shaderTechniqueRepository),this._materialRepository.onMaterialChanged=e=>{(e.renderOccluded&Et)>0!==this._rendersOccluded&&this.updateRendersOccluded(),this.emitContentChanged(),this.notifyChange("updating")},this._compositingHelper=this.renderView.compositingHelper,this._lighting.set({lights:[new H((0,a.f)(1,1,1))],groundLightingFactor:1,globalFactor:0}),this._bindParameters={slot:null,highlightDepthTexture:(0,P.hf)(this._rctx),camera:Ct,inverseViewport:(0,R.c)(),origin:null,screenToWorldRatio:null,screenToWorldRatioGlobalWM:null,shadowMappingEnabled:!1,slicePlane:null,ssaoEnabled:!1,hasOccludees:!1,linearDepthTexture:null,linearDepthTextureUnit:0,lastFrameColorTexture:null,lastFrameColorTextureUnit:0,reprojectionMat:null,ssrEnabled:!1,lighting:this._lighting,transparencyPassType:3,terrainLinearDepthTexture:null,terrainLinearDepthTextureUnit:0,geometryLinearDepthTexture:null,geometryLinearDepthTextureUnit:0,multipassTerrainEnabled:!1,cullAboveGround:!0,multipassGeometryEnabled:!1},this._handles.add(this.scheduler.registerTask(T.iQ.STAGE,(()=>this.commitChanges()),(()=>this.updating)))}dispose(){this._handles.destroy(),this._layerRenderers.forEach((e=>e.dispose())),this._layerRenderers.clear(),this._bindParameters.highlightDepthTexture.dispose(),this._bindParameters.highlightDepthTexture=null,this._shaderTechniqueRepository.dispose(),this._shaderTechniqueRepository=null}get updating(){return this._sortedLayerRenderersDirty||(0,D.o)(this._layerRenderers,(e=>e.updating))||this.waterTextureRepository.updating}get hasOverlays(){return(0,o.pC)(this._overlays)}get gpuMemoryUsage(){return(0,o.pC)(this._overlays)?this._overlays[0].getGpuMemoryUsage()+this._overlays[1].getGpuMemoryUsage():0}get overlays(){return this._overlays}forEachOverlay(e){(0,o.pC)(this._overlays)&&(e(this._overlays[0],0),e(this._overlays[1],1))}ensureOverlays(){if((0,o.Wi)(this._overlays)){const e=this.renderView.renderingContext;this._overlays=[new B(e),new B(e)]}}disposeOverlays(){(0,o.pC)(this._overlays)&&(this._overlays.forEach((e=>e.dispose())),this._overlays=null)}commitChanges(){let e=!1;this._layerRenderers.forEach(((t,r)=>{t.commitChanges()&&(e=!0),t.isEmpty&&(this._layerRenderers.delete(r),this._sortedLayerRenderersDirty=!0,this._handles.remove(r))})),this._sortedLayerRenderersDirty&&(this.updateSortedLayerRenderers(),e=!0),e&&(this.notifyChange("updating"),this.emitContentChanged(),this.updateHasHighlights(),this.updateRendersOccluded(),this.updateHasWater())}addGeometries(e,t,r){for(const t of e)null==t.origin&&(t.origin=this._localOrigins.getOrigin(t.boundingSphere)),(0,o.Wi)(t.id)&&(t.id=(0,w.D)()),this._geometries.set(t.id,t);this.ensureLayerRenderer(t).add(e),2===r&&this.notifyGraphicGeometryChanged(e,t)}removeGeometries(e,t,r){for(const t of e)this._geometries.delete((0,o.Wg)(t.id));const i=this._layerRenderers.get(t);i&&(i.remove(e),2===r&&this.notifyGraphicGeometryChanged(e,t))}updateGeometries(e,t,r){const i=this._layerRenderers.get(t);if(i)switch(i.modify(e,r),r){case 4:case 2:return this.notifyGraphicGeometryChanged(e,t);case 1:return this.notifyGraphicVisibilityChanged(e,t)}else _t.warn("Attempted to update geometry for nonexistent layer")}notifyGraphicGeometryChanged(e,t){if((0,o.Wi)(t.notifyGraphicGeometryChanged))return;let r;for(const i of e){const e=i.graphicUid;e!==r&&(t.notifyGraphicGeometryChanged(e),r=e)}}notifyGraphicVisibilityChanged(e,t){if((0,o.Wi)(t.notifyGraphicVisibilityChanged))return;let r;for(const i of e){const e=i.graphicUid;e!==r&&(t.notifyGraphicVisibilityChanged(e),r=e)}}updateHighlights(e,t){const r=this._layerRenderers.get(t);r?r.modify(e,8):_t.warn("Attempted to update highlights for nonexistent layer")}isEmpty(){return 0===this._geometries.size&&!N.Z.OVERLAY_DRAW_DEBUG_TEXTURE}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateLogic(e){let t=!1;return this._layerRenderers.forEach((r=>{r.updateLogic(e)&&(t=!0)})),t}updateLayerOrder(){this._sortedLayerRenderersDirty=!0}drawPass(e,t,r,i=0){if(0===r.numViews)return!1;if(this._screenToWorldRatio=r.pixelRatio*Math.abs(r.views[0].extent[2]-r.views[0].extent[0])/Math.abs(r.views[0].viewport[2]-r.views[0].viewport[0]),this.isEmpty()||5===e&&!this.hasHighlights||3===e&&!this.hasWater)return!1;if(!this.hasNonZeroSizedView(r))return!1;const n=r.width,a=r.height;if(!t.isValid())return!1;t.resize(n,a);const s=this._rctx;if(Ct.pixelRatio=r.pixelRatio||1,this._renderContext.pass=e,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToWorldRatioGlobalWM=this._screenToWorldRatio*this.globalUnitScale,t.bind(s),s.setClearColor(0,0,0,0),s.clearSafe(16384),1===i&&(this._renderContext.renderOccludedMask=Et),N.Z.OVERLAY_DRAW_DEBUG_TEXTURE&&1!==i)for(let e=0;e<r.numViews;e++)this.setViewParameters(r.views[e],Ct),this.drawDebugTexture(n,a,xt[r.index%xt.length]);return this._layerRenderers.size>0&&this._sortedLayerRenderers.forAll((({layerView:l,renderer:d})=>{if(2===i&&(0,o.pC)(l)&&0===l.drapeSourceType)return;const c=(0,o.pC)(l)&&(0,o.pC)(l.fullOpacity)&&l.fullOpacity<1&&0===e;c&&(this.bindTemporaryFramebuffer(this._rctx,n,a),s.clearSafe(16384));for(let e=0;e<r.numViews;e++)this.setViewParameters(r.views[e],Ct),d.draw(this._renderContext,this._bindParameters);c&&(0,o.pC)(this._temporaryRenderTarget)&&(t.bind(s),this._compositingHelper.composite(this._temporaryRenderTarget.getTexture(),2,(0,o.Wg)((0,o.Wg)(l).fullOpacity)))})),s.bindFramebuffer(null),t.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,t,r){(0,o.Wi)(this._temporaryRenderTarget)&&(this._temporaryRenderTarget=new V(e,!1)),this._temporaryRenderTarget.resize(t,r),this._temporaryRenderTarget.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.hotReload()}intersect(e,t,r){let i=0;this._geometries.forEach((o=>{if(r&&!r(o))return;this.intersectRenderGeometry(o,t,0,e,i);const n=this.longitudeCyclical;n&&(o.boundingSphere[0]-o.boundingSphere[3]<n.min&&this.intersectRenderGeometry(o,t,n.range,e,i),o.boundingSphere[0]+o.boundingSphere[3]>n.max&&this.intersectRenderGeometry(o,t,-n.range,e,i)),i++}))}intersectRenderGeometry(e,t,r,i,n){let a=0;(0,o.pC)(e.transformation)&&(r+=e.transformation[12],a=e.transformation[13]),St[0]=t[0]-r,St[1]=t[1]-a,St[2]=1,Rt[0]=t[0]-r,Rt[1]=t[1]-a,Rt[2]=0,e.screenToWorldRatio=this._screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),i,St,Rt,((t,r,o)=>{this.addIntersectionResult(o,e.material.renderPriority,n,i,e.layerUid,e.graphicUid)}),e.calculateShaderTransformation,!0)}addIntersectionResult(e,t,r,i,o,n){const a={type:"external",metadata:{layerUid:o,graphicUid:n}},s=o=>{o.set(a,null,i.results.ground.dist,i.results.ground.normal,i.results.ground.transformation,t,null,null,e,r),o.intersector="OverlayRenderer"};if((null==i.results.min.drapedLayerOrder||t>=i.results.min.drapedLayerOrder)&&(null==i.results.min.dist||i.results.ground.dist<=i.results.min.dist)&&s(i.results.min),0!==i.options.store&&(null==i.results.max.drapedLayerOrder||t<i.results.max.drapedLayerOrder)&&(null==i.results.max.dist||i.results.ground.dist>i.results.max.dist)&&s(i.results.max),2===i.options.store){const e=new E.xM(i.ray);s(e),i.results.all.push(e)}}stopAnimationsAtTime(e){this._sortedLayerRenderers.forAll((t=>t.renderer.stopAnimationsAtTime(e)))}ensureLayerRenderer(e){let t=this._layerRenderers.get(e);return t||(t=new Xe({rctx:this._rctx,materialRepository:this._materialRepository}),this._layerRenderers.set(e,t),this._sortedLayerRenderersDirty=!0,"fullOpacity"in e&&this._handles.add(e.watch("fullOpacity",(()=>this.emitContentChanged())),e),this._handles.add((0,C.init)(t,"updating",(()=>this.notifyChange("updating"))),e)),t}updateSortedLayerRenderers(){if(!this._sortedLayerRenderersDirty)return;if(this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers.clear(),0===this._layerRenderers.size)return;const[{view:{allLayerViews:e}}]=this._layerRenderers.keys(),t=new Set(this._layerRenderers.values());e.forEach((e=>{const r=e,i=this._layerRenderers.get(r);i&&(this._sortedLayerRenderers.push(new wt(r,i)),t.delete(i))})),t.forEach((e=>{this._sortedLayerRenderers.push(new wt(null,e))}))}setViewParameters(e,t){t.viewport=e.viewport;const r=e.extent;(0,S.o)(t.projectionMatrix,0,r[2]-r[0],0,r[3]-r[1],t.near,t.far),(0,S.i)(t.viewMatrix),(0,S.t)(t.viewMatrix,t.viewMatrix,[-e.extent[0],-e.extent[1],0]),t.setGLViewport(this._rctx),this._renderContext.camera=t,this._bindParameters.camera=t,this._bindParameters.inverseViewport[0]=1/t.fullViewport[2],this._bindParameters.inverseViewport[1]=1/t.fullViewport[3]}hasNonZeroSizedView(e){for(let t=0;t<e.numViews;t++){const r=e.views[t];if(r.extent[0]!==r.extent[2]&&r.extent[1]!==r.extent[3])return!0}return!1}emitContentChanged(){this.onContentChanged&&this.onContentChanged()}updateHasWater(){const e=(0,D.o)(this._layerRenderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e)}updateHasHighlights(){const e=(0,D.o)(this._layerRenderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.onHasHighlightsChanged&&this.onHasHighlightsChanged(this._hasHighlights))}updateRendersOccluded(){const e=(0,D.o)(this._layerRenderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.onRendersOccludedChanged&&this.onRendersOccludedChanged(this.rendersOccluded))}drawDebugTexture(e,t,r){const i=this._rctx;this.ensureDebugPatternResources(e,t);const o=this._debugTextureTechnique.program;i.bindProgram(o),i.setPipelineState(this._debugTextureTechnique.pipeline),o.setUniform4f("color",r[0],r[1],r[2],1),o.setUniform1i("tex",0),i.bindTexture(this._debugPatternTexture,0),i.bindVAO(this._quadVAO),i.drawArrays(5,0,(0,A._V)(this._quadVAO,"geometry"))}ensureDebugPatternResources(e,t){if(this._debugPatternTexture)return;const r=new Uint8Array(e*t*4);let i=0;for(let o=0;o<t;o++)for(let n=0;n<e;n++){const a=Math.floor(n/10),s=Math.floor(o/10);a<2||s<2||10*a>e-20||10*s>t-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&a&&1&s?1&n^1&o?0:255:1&a^1&s?0:128)}this._debugPatternTexture=new O.Z(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:e,height:t},r);const o=new tt;o.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquireAndReleaseExisting(et,o,this._debugTextureTechnique),this._quadVAO=(0,P.ow)(this._rctx)}get test(){return{layerRenderers:this._layerRenderers}}};(0,m._)([(0,U.gT)()],bt.prototype,"_shaderTechniqueRepository",void 0),(0,m._)([(0,U.gT)()],bt.prototype,"_stippleTextureRepository",void 0),(0,m._)([(0,v.Cb)(),(0,U.gT)()],bt.prototype,"waterTextureRepository",void 0),(0,m._)([(0,v.Cb)({constructOnly:!0})],bt.prototype,"renderView",void 0),(0,m._)([(0,v.Cb)({constructOnly:!0})],bt.prototype,"scheduler",void 0),(0,m._)([(0,v.Cb)()],bt.prototype,"globalUnitScale",void 0),(0,m._)([(0,v.Cb)({type:Boolean,readOnly:!0})],bt.prototype,"updating",null),bt=(0,m._)([(0,y.j)("esri.views.3d.terrain.OverlayRenderer")],bt);class wt{constructor(e,t){this.layerView=e,this.renderer=t}}const xt=[[1,.5,.5],[.5,.5,1],[.5,1,.5]],Ct=new L.Z;Ct.near=1,Ct.far=1e4,Ct.relativeElevation=null;const St=(0,a.c)(),Rt=(0,a.c)(),Et=4;const Tt=r(38256).O;function Dt(e){const t=[],r=[];!function(e,t,r){const{attributeData:{position:o},removeDuplicateStartEnd:n}=e,a=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(o)&&1===n,s=o.length/3-(a?1:0),l=new Uint32Array(2*(s-1)),d=a?(0,i.tP)(o,0,o.length-3):o;let c=0;for(let e=0;e<s-1;e++)l[c++]=e,l[c++]=e+1;t.push(["position",{size:3,data:d,exclusive:a}]),r.push(["position",l])}(e,r,t);const a=r[0][1].data,l=t[0][1].length,d=new Uint16Array(l);return function(e,t,r){const i=e.attributeData.mapPosition;(0,o.Wi)(i)||(r.push(["mapPos",r[0][1]]),t.push(["mapPos",{size:3,data:i}]))}(e,r,t),function(e,t,r,i){if((0,o.pC)(e.attributeData.colorFeature))return;const n=e.attributeData.color;t.push(["color",{size:4,data:(0,o.Pt)(n,Tt)}]),r.push(["color",i])}(e,r,t,d),function(e,t,r,i){if((0,o.pC)(e.attributeData.sizeFeature))return;const n=e.attributeData.size;t.push(["size",{size:1,data:[(0,o.Pt)(n,1)]}]),r.push(["size",i])}(e,r,t,d),function(e,t,r,i){const n=e.attributeData.colorFeature;(0,o.Wi)(n)||(t.push(["colorFeatureAttribute",{size:1,data:new Float32Array([n])}]),r.push(["color",i]))}(e,r,t,d),function(e,t,r,i){const n=e.attributeData.sizeFeature;(0,o.Wi)(n)||(t.push(["sizeFeatureAttribute",{size:1,data:new Float32Array([n])}]),r.push(["sizeFeatureAttribute",i]))}(e,r,t,d),function(e,t,r,i){const n=e.attributeData.opacityFeature;(0,o.Wi)(n)||(t.push(["opacityFeatureAttribute",{size:1,data:new Float32Array([n])}]),r.push(["opacityFeatureAttribute",i]))}(e,r,t,d),function(e,t,r,i){if("round"!==e.join)return;const a=i.length/3,l=new Float32Array(a),d=It,c=Ht;(0,s.s)(d,0,0,0);const h=(0,o.Pt)(e.uniformSize,1);for(let e=-1;e<a;++e){const t=e<0?a+e:e,r=(e+1)%a;if((0,s.s)(c,i[3*r+0]-i[3*t+0],i[3*r+1]-i[3*t+1],i[3*r+2]-i[3*t+2]),(0,s.n)(c,c),e>=0){const t=(Math.PI-(0,n.ZF)((0,s.d)(d,c)))*zt*1*Mt(h);l[e]=Math.max(Math.floor(t),0)}(0,s.a)(d,c,-1)}t.push(["subdivisions",{size:1,data:l}]),r.push(["subdivisions",r[0][1]])}(e,r,t,a),new p.Z(r,t,2)}function Ot(e,t,r,i){const o="polygon"===e.type?1:0,n="polygon"===e.type?e.rings:e.paths,{position:a,outlines:s}=c(n,e.hasZ,o),l=new Float64Array(a.length),d=(0,f.rR)(a,e.spatialReference,0,l,0,a,0,a.length/3,t,r,i),h=null!=d;return{lines:h?At(s,a,l):[],projectionSuccess:h,sampledElevation:d}}function At(e,t,r){const i=new Array;for(const{index:o,count:n}of e){if(n<=1)continue;const e=3*o,a=e+3*n;i.push({position:t.subarray(e,a),mapPosition:r?r.subarray(e,a):void 0})}return i}function Pt(e,t){const r="polygon"===e.type?1:0,i="polygon"===e.type?e.rings:e.paths,{position:o,outlines:n}=c(i,!1,r),a=(0,l.CM)(o,e.spatialReference,0,o,t,0,o.length/3);for(let e=2;e<o.length;e+=3)o[e]=-2;return{lines:a?At(n,o):[],projectionSuccess:a}}function Mt(e){return 1.863798+-2.0062872/(1+e/18.2313)**.8856294}const It=(0,a.c)(),Ht=(0,a.c)(),zt=4/Math.PI},25026:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var i=r(56140),o=(r(95830),r(36544),r(68055),r(79881)),n=r(87566),a=(r(10923),r(57002),r(86035),r(82677));let s=class extends a.default{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.SCENEVIEW_LOCKING_LOG=!1,this.HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED=!0,this.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,this.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,this.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.ENABLE_PROFILE_DEPTH_RANGE=!1,this.DISABLE_FAST_UPDATES=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.EDITING_RECALCULATE_MANIPULATORS_DURING_TRANSFORM=!1}};(0,i._)([(0,o.Cb)()],s.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"SCENEVIEW_LOCKING_LOG",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_ENABLED",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"LABELS_SHOW_BORDER",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"SHOW_POI",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"DISABLE_FAST_UPDATES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,i._)([(0,o.Cb)()],s.prototype,"EDITING_RECALCULATE_MANIPULATORS_DURING_TRANSFORM",void 0),s=(0,i._)([(0,n.j)("esri.views.3d.support.DebugFlags")],s);const l=new s},31777:(e,t,r)=>{"use strict";r.d(t,{q:()=>o});var i=r(85461);function o(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.H`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(i.H`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(i.H`
      void forwardLinearDepth() {}
    `)}},82768:(e,t,r)=>{"use strict";r.d(t,{U:()=>o});var i=r(85461);function o(e,t){e.vertex.uniforms.add("intrinsicWidth","float"),t.vvSize?(e.attributes.add("sizeFeatureAttribute","float"),e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(i.H`
    float getSize() {
      return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
    }
    `)):(e.attributes.add("size","float"),e.vertex.code.add(i.H`
    float getSize(){
      return intrinsicWidth * size;
    }
    `)),t.vvOpacity?(e.attributes.add("opacityFeatureAttribute","float"),e.vertex.constants.add("vvOpacityNumber","int",8),e.vertex.code.add(i.H`
    uniform float vvOpacityValues[vvOpacityNumber];
    uniform float vvOpacityOpacities[vvOpacityNumber];

    float interpolateOpacity( float value ){
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity( vec4 color ){
      return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):e.vertex.code.add(i.H`
    vec4 applyOpacity( vec4 color ){
      return color;
    }
    `),t.vvColor?(e.attributes.add("colorFeatureAttribute","float"),e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i.H`
    uniform float vvColorValues[vvColorNumber];
    uniform vec4 vvColorColors[vvColorNumber];

    vec4 interpolateColor( float value ) {
      if (value <= vvColorValues[0]) {
        return vvColorColors[0];
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return mix(vvColorColors[i-1], vvColorColors[i], f);
        }
      }

      return vvColorColors[vvColorNumber - 1];
    }

    vec4 getColor(){
      return applyOpacity(interpolateColor(colorFeatureAttribute));
    }
    `)):(e.attributes.add("color","vec4"),e.vertex.code.add(i.H`
    vec4 getColor(){
      return applyOpacity(color);
    }
    `))}},11913:(e,t,r)=>{"use strict";r.d(t,{E:()=>n,K:()=>o});var i=r(85461);function o(e){e.fragment.code.add(i.H`
    float normals2FoamIntensity(vec3 n, float waveStrength){
      float normalizationFactor =  max(0.015, waveStrength);
      return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
    }
  `)}function n(e){e.fragment.code.add(i.H`
    vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
      return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
    }
  `)}},93077:(e,t,r)=>{"use strict";r.d(t,{q:()=>o});var i=r(85461);function o(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?function(e,t){e.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),t.stippleUVMaxEnabled&&e.varyings.add("stipplePatternUvMax","float"),e.varyings.add("stipplePatternUv","float"),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),t.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4"),e.fragment.code.add(i.H`
  float getStippleAlpha() {
    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;
    ${t.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":""}

    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;
  }`),t.stippleOffColorEnabled?e.fragment.code.add(i.H`
    #define discardByStippleAlpha(stippleAlpha, threshold) {}
    #define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)
    `):e.fragment.code.add(i.H`
    #define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
    #define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)
    `)}(e,t):function(e){e.fragment.code.add(i.H`
  float getStippleAlpha() { return 1.0; }

  #define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
  #define blendStipple(color, _stippleAlpha_) color
  `)}(e)}},83917:(e,t,r)=>{"use strict";r.d(t,{n:()=>o});var i=r(85461);function o(e,t){1===t.viewingMode?e.vertex.code.add(i.H`
      vec3 getLocalUp(in vec3 pos, in vec3 origin) {
          return normalize(pos + origin);
      }
    `):e.vertex.code.add(i.H`
      vec3 getLocalUp(in vec3 pos, in vec3 origin) {
          return vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code
      }
    `),1===t.viewingMode?e.vertex.code.add(i.H`
        mat3 getTBNMatrix(in vec3 n) {
            vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
            vec3 b = normalize(cross(n, t));
            return mat3(t, b, n);
        }
    `):e.vertex.code.add(i.H`
        mat3 getTBNMatrix(in vec3 n) {
            vec3 t = vec3(1.0, 0.0, 0.0);
            vec3 b = normalize(cross(n, t));
            return mat3(t, b, n);
        }
    `)}},87023:(e,t,r)=>{"use strict";r.d(t,{T:()=>a});var i=r(85461),o=r(9295);function n(e){const t=e.fragment.code;t.add(i.H`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(i.H`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(i.H`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function a(e,t){const r=e.fragment.code;e.include(o.e),3===t.pbrMode||4===t.pbrMode?(r.add(i.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.H`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(i.H`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(i.H`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(i.H`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(n),r.add(i.H`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(i.H`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(i.H`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(i.H`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(i.H`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(i.H`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},9295:(e,t,r)=>{"use strict";r.d(t,{e:()=>o});var i=r(85461);function o(e){e.vertex.code.add(i.H`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(i.H`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}},71613:(e,t,r)=>{"use strict";r.d(t,{h:()=>n});var i=r(85461),o=r(61017);function n(e){e.fragment.include(o.n),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(i.H`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}!function(e){e.bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},e.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},e.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}}(n||(n={}))},75619:(e,t,r)=>{"use strict";r.d(t,{P:()=>a});var i=r(85461),o=r(4071);function n(e){e.fragment.uniforms.add("lastFrameColorMap","sampler2D"),e.fragment.uniforms.add("reprojectionMat","mat4"),e.fragment.uniforms.add("rpProjectionMat","mat4"),e.fragment.code.add(i.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = rpProjectionMat * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMat * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy*0.5 + 0.5;
  }
  `)}function a(e,t){e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("depthMapView","sampler2D"),e.fragment.uniforms.add("ssrViewMat","mat4"),e.fragment.uniforms.add("invResolutionHeight","float"),e.fragment.include(o.S),e.include(n),e.fragment.code.add(i.H`
  const int maxSteps = ${t.highStepCount?"150;":"75;"}

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(rpProjectionMat, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(rpProjectionMat, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMapView, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
          return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}!function(e){e.bindUniforms=function(e,t,r){e.setUniform1i("lastFrameColorMap",r.lastFrameColorTextureUnit),t.bindTexture(r.lastFrameColorTexture,r.lastFrameColorTextureUnit),e.setUniformMatrix4fv("reprojectionMat",r.reprojectionMat),e.setUniformMatrix4fv("rpProjectionMat",r.camera.projectionMatrix)}}(n||(n={})),function(e){e.bindUniforms=function(e,t,r){r.ssrEnabled&&(e.setUniform1i("depthMapView",r.linearDepthTextureUnit),t.bindTexture(r.linearDepthTexture,r.linearDepthTextureUnit),e.setUniform2fv("nearFar",r.camera.nearFar),e.setUniformMatrix4fv("ssrViewMat",r.camera.viewMatrix),e.setUniform1f("invResolutionHeight",1/r.camera.height),n.bindUniforms(e,t,r))}}(a||(a={}))},8681:(e,t,r)=>{"use strict";r.d(t,{k:()=>o});var i=r(85461);function o(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.H`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(i.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.H`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.H`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(o||(o={}))},53584:(e,t,r)=>{"use strict";r.d(t,{B:()=>l});var i=r(85461),o=r(75619),n=r(11913);function a(e){e.fragment.code.add(i.H`
    const float GAMMA = 2.2;
    const float INV_GAMMA = 0.4545454545;

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}var s=r(87023);function l(e,t){e.include(s.T,t),e.include(a),e.include(n.E),t.ssrEnabled&&e.include(o.P,t),e.fragment.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.775).add("waterSeeColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]),e.fragment.code.add(i.H`
    PBRShadingWater shadingInfo;

    /*
    *   This function is an approximation for the sky gradient reflected
    *   the water surface and describes a combination of two fresnel terms.
    *   @parameter: cosTheta = is the result of max(dot(n,v), 0.0)
    *   @parameter: horizon = the dominant color of the sky horizon
    *   @parameter: cosTheta = the dominant color of the sky zenit
    */
    vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
      float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
      return mix(zenit, horizon, exponent);
    }

    /*
    *   This function determines the water color per pixel.
    *   @parameter: n = normal facing away from the surface
    *   @parameter: v = view direction facing away from the surface.
    *   @parameter: l = light direction facing away from the surface
    *   @parameter: lightIntensity = light intensity, currently between 0...PI
    *   @parameter: localUp = a normal for the general direction of the surface
    *   @parameter: shadow = the amount of shadow at this pixel (0 = no shadow)
    */
    vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 positionView) {

      float reflectionHit = 0.;
      vec3 seaWaterColor = linearizeGamma(color);
      // using half vector to determine the specular light
      vec3 h = normalize(l + v);
      shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
      shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
      shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
      shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
      shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
      shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);

      // angle between vertex normal and view direction
      float upDotV = max(dot(localUp,v), 0.0);
      // reflected sky color: the reflected sky color consists of two main colors, the
      // reflected color at the horizon and the reflected color of the zenit.
      // the reflected sky color is then an approximation based on the fresnel term.
      vec3 skyHorizon = linearizeGamma(skyColor);
      vec3 skyZenit = linearizeGamma(skyZenitColor);
      vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );

      // we use the upDotL to smoothen out the
      // reflected color of the water
      float upDotL = max(dot(localUp,l),0.0);

      // The approximated sky color is adjusted according to the sun position.
      // This is done as approximation for e.g. night views.
      float daytimeMod = 0.1 + upDotL * 0.9;
      skyColor *= daytimeMod;

      // If a water surface is in shadow we just use a slight darkening of the
      // water surface expressed with this shadowModifier.
      float shadowModifier = clamp(shadow, 0.8, 1.0);

      // The reflected sky color consists of the fresnel reflection multiplied with the approximated sky color.
      // The shadow is influencing the frensel term to keep the shadow impression for really near views. As long
      // as reflection are absent there is a need to have a slight shadow for depth perception.
      vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
      vec3 reflSky = fresnelModifier * skyColor * shadowModifier;

      // The reflected sea color is the input water color combined with the reflected sky color.
      // The reflected sky color is modified by the incoming light.
      vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;

      vec3 specular = vec3(0.0);
      // This prevents the specular light to be rendered when:
      // - sun is behind a polygon (e.g. sundown for elevated polygons where nDotL might be still ok)
      // - viewer is under water (for this localUp is better than n)
      if(upDotV > 0.0 && upDotL > 0.0) {
        // calculate the cook torrance BRDF but with simplified occlusion
        vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);

        // Normalize light intensity to be between 0...1. Shadow cancels out specular light here
        vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;

        specular = shadingInfo.NdotL * incidentLight * specularSun;
      }

      vec3 foam = vec3(0.0);
      if(upDotV > 0.0) {
        foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
      }
      `),t.ssrEnabled?e.fragment.code.add(i.H`
      // Convert the world position to view position
      vec4 viewPosition = vec4(positionView.xyz, 1.0);
      vec3 viewDir = normalize(viewPosition.xyz);
      vec4 viewNormalVectorCoordinate = ssrViewMat *vec4(n, 0.0);
      vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
      vec4 viewUp = ssrViewMat *vec4(localUp, 0.0);

      // at steeper viewing angles we use more of a vertex normal (in this case up) then the wave normal
      // this removes some artifacts of normal mapping
      float correctionViewingFactor = pow(max(dot(-viewDir, viewUp.xyz), 0.0), correctionViewingPowerFactor);
      vec3 viewNormalCorrected = mix(viewUp.xyz, viewNormal, correctionViewingFactor);

      vec3 reflected = normalize(reflect(viewDir, viewNormalCorrected));

      // perform screen space reflection to detect hit
      vec3 hitCoordinate = screenSpaceIntersection( normalize(reflected), viewPosition.xyz, viewDir, viewUp.xyz);
      vec3 reflectedColor = vec3(0.0);

      // if there is a hit with ssr find reflected color from the reprojeted frame
      if (hitCoordinate.z > 0.0)
      {
        vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);

        // fade out if there if the hit is near end of Y axis
        vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
        float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -positionView.z);
        reflectionHit = waterDiffusion * clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;

        reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHit * fresnelModifier.y * ssrIntensity;
      }
      float seeColorMod =  mix(waterSeeColorMod, waterSeeColorMod*0.5, reflectionHit);
      // combining reflected sky, reflected sea, specular highlight and SSR reflections.
      return tonemapACES((1. - reflectionHit) * reflSky + reflectedColor + reflSea * seeColorMod + specular + foam);
    }
  `):e.fragment.code.add(i.H`
      // combining reflected sky, reflected sea, specular highlight and SSR reflections.
      return tonemapACES(reflSky + reflSea * waterSeeColorMod + specular + foam);
    }
  `)}},91123:(e,t,r)=>{"use strict";r.d(t,{M:()=>n});var i=r(85461),o=r(11913);function n(e){e.fragment.uniforms.add("texWaveNormal","sampler2D"),e.fragment.uniforms.add("texWavePerturbation","sampler2D"),e.fragment.uniforms.add("waveParams","vec4"),e.fragment.uniforms.add("waveDirection","vec2"),e.include(o.K),e.fragment.code.add(i.H`
      const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);

      vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
        return 2.0 * texture2D(_tex, _uv).rg - 1.0;
      }

      float sampleNoiseTexture(vec2 _uv) {
        return texture2D(texWavePerturbation, _uv).b;
      }

      vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
        return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
      }

      float computeProgress(vec2 uv, float time) {
        return fract(time);
      }

      float computeWeight(vec2 uv, float time) {
        float progress = computeProgress(uv, time);
        return 1.0 - abs(1.0 - 2.0 * progress);
      }

      vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
        float flowStrength = waveParams[2];
        float flowOffset = waveParams[3];

        vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;

        float progress = computeProgress(uv, time + phaseOffset);
        float weight = computeWeight(uv, time + phaseOffset);

        vec2 result = uv;
        result -= flowVector * (progress + flowOffset);
        result += phaseOffset;
        result += (time - progress) * FLOW_JUMP;

        return vec3(result, weight);
      }

      const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
      const float TIME_NOISE_STRENGTH = 7.77;

      vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
        float waveStrength = waveParams[0];

        // overall directional shift in uv's for directional wave movement for
        // now we do a hard coded scale for wave speed such that a unit length
        // direction is not too fast.
        vec2 waveMovement = time * -_waveDir;

        float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;

        // compute two perturbed uvs and blend weights
        // then sample the wave normals at the two positions and blend
        vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
        vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);

        vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
        vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;

        // logic to flatten the wave pattern
        // scale xy components of the normal, then adjust z (up) component
        vec3 mixNormal = normalize(normal_A + normal_B);
        mixNormal.xy *= waveStrength;
        mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));

        return mixNormal;
      }

      vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
        float waveTextureRepeat = waveParams[1];
        vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
        float foam  = normals2FoamIntensity(normal, waveParams[0]);
        return vec4(normal, foam);
      }
    `)}!function(e){e.bindUniforms=function(e,t){e.setUniform1i("texWaveNormal",0),e.setUniform1i("texWavePerturbation",1),e.setUniform4f("waveParams",t.waveStrength,t.waveTextureRepeat,t.flowStrength,t.flowOffset),e.setUniform2f("waveDirection",t.waveDirection[0]*t.waveVelocity,t.waveDirection[1]*t.waveVelocity)}}(n||(n={}))},68397:(e,t,r)=>{"use strict";r.d(t,{G:()=>i});const i={DIFFUSE:0,NORMAL:1,EMISSION:2,OCCLUSION:3,METALLIC_ROUGHNESS:4,SSAO:6,SHADOW_MAP:7}},56769:(e,t,r)=>{"use strict";r.d(t,{U:()=>V});var i,o=r(59472),n=r(36544),a=r(33655),s=r(96071),l=r(77625),d=r(17387),c=r(14286),h=r(88),u=r(56469),p=r(49366),f=r(80905),m=r(27898),g=r(26701),v=r(10762),y=r(30663),_=r(69236);!function(e){e.Default={vvSizeEnabled:!1,vvSizeMinSize:(0,_.f)(1,1,1),vvSizeMaxSize:(0,_.f)(100,100,100),vvSizeOffset:(0,_.f)(0,0,0),vvSizeFactor:(0,_.f)(1,1,1),vvSizeValue:(0,_.f)(1,1,1),vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvOpacityEnabled:!1,vvOpacityValues:[0,0,0,0,0,0,0,0],vvOpacityOpacities:[1,1,1,1,1,1,1,1],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,y.c)()}}(i||(i={}));const b=i;var w=r(56140),x=r(23240),C=r(97853),S=r(44801),R=r(51007),E=r(36904),T=r(89553),D=r(61514),O=r(72023),A=r(8681),P=r(66704),M=r(88214),I=r(38391),H=r(81632);const z={position:0,subdivisionFactor:1,uv0:2,auxpos1:3,auxpos2:4,size:6,sizeFeatureAttribute:6,color:5,colorFeatureAttribute:5,opacityFeatureAttribute:7};class L extends C.A{constructor(e,t){super(e,t),this.stipplePattern=null,this.stippleTextureBind=null,this.stippleTextureRepository=e.stippleTextureRepository}initializeProgram(e){const t=L.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,stippleEnabled:r.stippleEnabled,stippleOffColorEnabled:r.stippleOffColorEnabled,stippleUVMaxEnabled:r.stippleIntegerRepeatsEnabled,stippleIntegerRepeatsEnabled:r.stippleIntegerRepeatsEnabled,roundCaps:r.roundCaps,roundJoins:r.roundJoins,vvColor:r.vvColor,vvSize:r.vvSize,vvInstancingEnabled:!0,vvOpacity:r.vvOpacity,falloffEnabled:r.falloffEnabled,innerColorEnabled:r.innerColorEnabled,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new R.Z(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),z)}dispose(){super.dispose(),this.stippleTextureRepository.release(this.stipplePattern),this.stipplePattern=null,this.stippleTextureBind=null}bindPass(e,t,r){if(T.G.bindProjectionMatrix(this.program,r.camera.projectionMatrix),4===this.configuration.output&&O.bA.bindOutputHighlight(e,this.program,r),r.multipassTerrainEnabled&&(this.program.setUniform2fv("viewportDim",[e.getViewport().width,e.getViewport().height]),(0,M.C)(this.program,e,r)),this.program.setUniform1f("intrinsicWidth",t.width),this.program.setUniform4fv("intrinsicColor",t.color),this.program.setUniform1f("miterLimit","miter"!==t.join?0:t.miterLimit),this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),this.program.setUniform1f("pixelRatio",r.camera.pixelRatio),this.program.setUniform2f("screenSize",r.camera.fullViewport[2],r.camera.fullViewport[3]),A.k.bindUniformsWithOpacity(this.program,t),this.stipplePattern!==t.stipplePattern){const e=t.stipplePattern;this.stippleTextureBind=this.stippleTextureRepository.swap(this.stipplePattern,e),this.stipplePattern=e}if(this.configuration.stippleEnabled){const i=(0,o.pC)(this.stippleTextureBind)?this.stippleTextureBind(e,0)*r.camera.pixelRatio:1;if(this.program.setUniform1i("stipplePatternTexture",0),this.program.setUniform1f("stipplePatternPixelSizeInv",1/i),this.configuration.stippleOffColorEnabled){const e=(0,o.Wg)(t.stippleOffColor);this.program.setUniform4f("stippleOffColor",e[0],e[1],e[2],e.length>3?e[3]:1)}}this.configuration.falloffEnabled&&this.program.setUniform1f("falloff",t.falloff),this.configuration.innerColorEnabled&&(this.program.setUniform4fv("innerColor",(0,o.Pt)(t.innerColor,t.color)),this.program.setUniform1f("innerWidth",t.innerWidth*r.camera.pixelRatio))}bindDraw(e){T.G.bindView(this.program,e),D.p.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e,t){const r=this.configuration,i=3===e,o=2===e;return(0,E.sm)({blending:0===r.output||7===r.output?i?P.wu:(0,P.$L)(e):null,depthTest:{func:(0,P.$x)(e)},depthWrite:i?!r.transparent&&r.writeDepth&&E.LZ:(0,P.Vc)(e),colorWrite:E.BK,stencilWrite:r.sceneHasOcludees?I.s3:null,stencilTest:r.sceneHasOcludees?t?I.eD:I.RY:null,polygonOffset:i||o?r.polygonOffset&&N:P.E0})}initializePipeline(){const e=this.configuration,t=e.polygonOffset&&N;return e.occluder&&(this._occluderPipelineTransparent=(0,E.sm)({blending:P.wu,polygonOffset:t,depthTest:I.zV,depthWrite:null,colorWrite:E.BK,stencilWrite:null,stencilTest:I.YD}),this._occluderPipelineOpaque=(0,E.sm)({blending:P.wu,polygonOffset:t,depthTest:I.zV,depthWrite:null,colorWrite:E.BK,stencilWrite:I.P7,stencilTest:I.ii}),this._occluderPipelineMaskWrite=(0,E.sm)({blending:null,polygonOffset:t,depthTest:I.JN,depthWrite:null,colorWrite:null,stencilWrite:I.s3,stencilTest:I.eD})),this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return 5}getPipelineState(e,t){return t?this._occludeePipelineState:this.configuration.occluder?11===e?this._occluderPipelineTransparent:10===e?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:this.pipeline}}L.shader=new x.J(H.R,(()=>r.e(4271).then(r.bind(r,14271))));const N={factor:0,units:-4};class U extends S.m{constructor(){super(...arguments),this.output=0,this.occluder=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.vertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.writeDepth=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleIntegerRepeatsEnabled=!1,this.roundCaps=!1,this.roundJoins=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}(0,w._)([(0,S.o)({count:8})],U.prototype,"output",void 0),(0,w._)([(0,S.o)()],U.prototype,"occluder",void 0),(0,w._)([(0,S.o)()],U.prototype,"slicePlaneEnabled",void 0),(0,w._)([(0,S.o)()],U.prototype,"sliceHighlightDisabled",void 0),(0,w._)([(0,S.o)()],U.prototype,"vertexColors",void 0),(0,w._)([(0,S.o)()],U.prototype,"transparent",void 0),(0,w._)([(0,S.o)()],U.prototype,"polygonOffset",void 0),(0,w._)([(0,S.o)()],U.prototype,"writeDepth",void 0),(0,w._)([(0,S.o)()],U.prototype,"stippleEnabled",void 0),(0,w._)([(0,S.o)()],U.prototype,"stippleOffColorEnabled",void 0),(0,w._)([(0,S.o)()],U.prototype,"stippleIntegerRepeatsEnabled",void 0),(0,w._)([(0,S.o)()],U.prototype,"roundCaps",void 0),(0,w._)([(0,S.o)()],U.prototype,"roundJoins",void 0),(0,w._)([(0,S.o)()],U.prototype,"vvSize",void 0),(0,w._)([(0,S.o)()],U.prototype,"vvColor",void 0),(0,w._)([(0,S.o)()],U.prototype,"vvOpacity",void 0),(0,w._)([(0,S.o)()],U.prototype,"falloffEnabled",void 0),(0,w._)([(0,S.o)()],U.prototype,"innerColorEnabled",void 0),(0,w._)([(0,S.o)()],U.prototype,"sceneHasOcludees",void 0),(0,w._)([(0,S.o)({count:4})],U.prototype,"transparencyPassType",void 0),(0,w._)([(0,S.o)()],U.prototype,"multipassTerrainEnabled",void 0),(0,w._)([(0,S.o)()],U.prototype,"cullAboveGround",void 0);const F=n.Z.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial");class V extends v.F5{constructor(e){super(e,G),this._vertexAttributeLocations=z,this.techniqueConfig=new U,this.layout=this.createLayout()}isClosed(e,t){return q(this.params,e,t)}dispose(){}getPassParameters(){return this.params}getTechniqueConfig(e,t){this.techniqueConfig.output=e;const r=(0,o.pC)(this.params.stipplePattern);return this.techniqueConfig.stippleEnabled=r,this.techniqueConfig.stippleIntegerRepeatsEnabled=r&&this.params.stippleIntegerRepeats,this.techniqueConfig.stippleOffColorEnabled=r&&(0,o.pC)(this.params.stippleOffColor),this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.roundJoins="round"===this.params.join,this.techniqueConfig.roundCaps="round"===this.params.cap,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.polygonOffset=this.params.polygonOffset,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.vvOpacity=this.params.vvOpacityEnabled,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.innerColorEnabled=this.params.innerWidth>0&&(0,o.pC)(this.params.innerColor),this.techniqueConfig.falloffEnabled=this.params.falloff>0,this.techniqueConfig.occluder=8===this.params.renderOccluded,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,this.techniqueConfig}intersect(e,t,r,i,o,n,a,s,l){l?this.intersectDrapedLineGeometry(e,i,n,a):this.intersectLineGeometry(e,t,r,i,this.params.width,a)}intersectDrapedLineGeometry(e,t,r,i){if(!t.options.selectionMode)return;const o=e.vertexAttributes.get("position").data,n=e.vertexAttributes.get("size");let s=this.params.width;if(this.params.vvSizeEnabled){const t=e.vertexAttributes.get("sizeFeatureAttribute").data[0];s*=(0,a.uZ)(this.params.vvSizeOffset[0]+t*this.params.vvSizeFactor[0],this.params.vvSizeMinSize[0],this.params.vvSizeMaxSize[0])}else n&&(s*=n.data[0]);const l=r[0],d=r[1],c=(s/2+4)*e.screenToWorldRatio;let h=Number.MAX_VALUE;for(let e=0;e<o.length-5;e+=3){const t=o[e],r=o[e+1],i=l-t,n=d-r,s=o[e+3]-t,c=o[e+4]-r,u=(0,a.uZ)((s*i+c*n)/(s*s+c*c),0,1),p=s*u-i,f=c*u-n,m=p*p+f*f;m<h&&(h=m)}h<c*c&&i()}intersectLineGeometry(e,t,r,i,o,n){if(!i.options.selectionMode||(0,p.PD)(t))return;if(!(0,u.kG)(r))return void F.error("intersection assumes a translation-only matrix");const s=e.vertexAttributes,l=s.get("position").data;let f=o;if(this.params.vvSizeEnabled){const e=s.get("sizeFeatureAttribute").data[0];f*=(0,a.uZ)(this.params.vvSizeOffset[0]+e*this.params.vvSizeFactor[0],this.params.vvSizeMinSize[0],this.params.vvSizeMaxSize[0])}else s.has("size")&&(f*=s.get("size").data[0]);const m=i.camera,g=Q;(0,c.c)(g,i.point);const v=f*m.pixelRatio/2+4*m.pixelRatio;(0,d.s)(de[0],g[0]-v,g[1]+v,0),(0,d.s)(de[1],g[0]+v,g[1]+v,0),(0,d.s)(de[2],g[0]+v,g[1]-v,0),(0,d.s)(de[3],g[0]-v,g[1]-v,0);for(let e=0;e<4;e++)if(!m.unprojectFromRenderScreen(de[e],ce[e]))return;h.yC.fromPoints(m.eye,ce[0],ce[1],he),h.yC.fromPoints(m.eye,ce[1],ce[2],ue),h.yC.fromPoints(m.eye,ce[2],ce[3],pe),h.yC.fromPoints(m.eye,ce[3],ce[0],fe);let y=Number.MAX_VALUE;const _=k(this.params,s,e.indices)?l.length-2:l.length-5;for(let e=0;e<_;e+=3){J[0]=l[e]+r[12],J[1]=l[e+1]+r[13],J[2]=l[e+2]+r[14];const t=(e+3)%l.length;if(K[0]=l[t]+r[12],K[1]=l[t+1]+r[13],K[2]=l[t+2]+r[14],h.yC.signedDistance(he,J)<0&&h.yC.signedDistance(he,K)<0||h.yC.signedDistance(ue,J)<0&&h.yC.signedDistance(ue,K)<0||h.yC.signedDistance(pe,J)<0&&h.yC.signedDistance(pe,K)<0||h.yC.signedDistance(fe,J)<0&&h.yC.signedDistance(fe,K)<0)continue;if(m.projectToRenderScreen(J,ee),m.projectToRenderScreen(K,te),ee[2]<0&&te[2]>0){(0,d.f)(Y,J,K);const e=m.frustum,t=-h.yC.signedDistance(e[4],J)/(0,d.d)(Y,h.yC.normal(e[4]));(0,d.a)(Y,Y,t),(0,d.b)(J,J,Y),m.projectToRenderScreen(J,ee)}else if(ee[2]>0&&te[2]<0){(0,d.f)(Y,K,J);const e=m.frustum,t=-h.yC.signedDistance(e[4],K)/(0,d.d)(Y,h.yC.normal(e[4]));(0,d.a)(Y,Y,t),(0,d.b)(K,K,Y),m.projectToRenderScreen(K,te)}else if(ee[2]<0&&te[2]<0)continue;ee[2]=0,te[2]=0;const i=h.KD.distance2(h.KD.fromPoints(ee,te,oe),g);i<y&&(y=i,(0,d.g)(re,J),(0,d.g)(ie,K))}const b=i.rayBeginPoint,w=i.rayEndPoint;if(y<v*v){let e=Number.MAX_VALUE;if(h.KD.closestLineSegmentPoint(h.KD.fromPoints(re,ie,oe),h.KD.fromPoints(b,w,ne),X)){(0,d.f)(X,X,b);const t=(0,d.l)(X);(0,d.a)(X,X,1/t),e=t/(0,d.i)(b,w)}n(e,X)}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return null;const i=e.indices,o=r.get("position");return(0,m.qZ)(o,i?i.get("position"):null,i&&k(this.params,r,i),t)}createLayout(){const e=(0,f.U$)().vec3f("position").f32("subdivisionFactor").vec2f("uv0").vec3f("auxpos1").vec3f("auxpos2");return this.params.vvSizeEnabled?e.f32("sizeFeatureAttribute"):e.f32("size"),this.params.vvColorEnabled?e.f32("colorFeatureAttribute"):e.vec4f("color"),this.params.vvOpacityEnabled&&e.f32("opacityFeatureAttribute"),e}createBufferWriter(){return new j(this.layout,this.params)}getGLMaterial(e){return 0===e.output||7===e.output||4===e.output||1===e.output?new W(e):void 0}validateParameterValues(e){"miter"!==e.join&&(e.miterLimit=0),this.requiresTransparent(e)&&(e.transparent=!0)}requiresTransparent(e){return!!((e.color&&e.color[3])<1||e.innerWidth>0&&this.colorRequiresTransparent(e.innerColor)||e.stipplePattern&&this.colorRequiresTransparent(e.stippleOffColor)||e.falloff>0)}colorRequiresTransparent(e){return(0,o.pC)(e)&&e[3]<1&&e[3]>0}}class W extends g.Z{constructor(e){super(e),this.updateParameters()}updateParameters(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(L,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){return this.technique.configuration.occluder?3===e||10===e||11===e:0===this.output||7===this.output?(this.targetSlot=this.technique.configuration.writeDepth?5:8,e===this.targetSlot):3===e}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.getPassParameters(),t)}getPipelineState(e,t){return this.technique.getPipelineState(e,t)}}const G={width:0,color:[1,1,1,1],join:"miter",cap:"butt",miterLimit:5,writeDepth:!0,polygonOffset:!1,stipplePattern:null,stippleIntegerRepeats:!1,stippleOffColor:null,slicePlaneEnabled:!1,vvFastUpdate:!1,transparent:!1,isClosed:!1,falloff:0,innerWidth:0,innerColor:null,sceneHasOcludees:!1,...v.zh,...b.Default};class j{constructor(e,t){switch(this.params=t,this.numJoinSubdivisions=0,this.vertexBufferLayout=e,this.params.join){case"miter":case"bevel":this.numJoinSubdivisions=t.stipplePattern?1:0;break;case"round":this.numJoinSubdivisions=$}}isClosed(e){return k(this.params,e.vertexAttributes,e.indices)}numCapSubdivisions(e){if(this.isClosed(e))return 0;switch(this.params.cap){case"butt":return 0;case"square":return 1;case"round":return Z}}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=2*this.numCapSubdivisions(e)+2,r=e.indices.get("position").length/2+1,i=this.isClosed(e);let o=i?2:2*t;const n=i?0:1,a=i?r:r-1;if(e.vertexAttributes.has("subdivisions")){const t=e.vertexAttributes.get("subdivisions").data;for(let e=n;e<a;++e)o+=4+2*t[e]}else o+=(a-n)*(2*this.numJoinSubdivisions+4);return o+=2,o}write(e,t,r,i){const o=ae,n=se,a=le,s=t.vertexAttributes.get("position").data,l=t.indices&&t.indices.get("position"),c=this.numCapSubdivisions(t);l&&l.length!==2*(s.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let h=null;t.vertexAttributes.has("subdivisions")&&(h=t.vertexAttributes.get("subdivisions").data);let u=1,p=0;this.params.vvSizeEnabled?p=t.vertexAttributes.get("sizeFeatureAttribute").data[0]:t.vertexAttributes.has("size")&&(u=t.vertexAttributes.get("size").data[0]);let f=[1,1,1,1],m=0;this.params.vvColorEnabled?m=t.vertexAttributes.get("colorFeatureAttribute").data[0]:t.vertexAttributes.has("color")&&(f=t.vertexAttributes.get("color").data);let g=0;this.params.vvOpacityEnabled&&(g=t.vertexAttributes.get("opacityFeatureAttribute").data[0]);const v=s.length/3,y=e.transformation,_=new Float32Array(r.buffer),b=this.vertexBufferLayout.stride/4;let w=i*b;const x=w,C=(e,t,r,i,o,n,a)=>{if(_[w++]=t[0],_[w++]=t[1],_[w++]=t[2],_[w++]=i,_[w++]=o,_[w++]=n,_[w++]=e[0],_[w++]=e[1],_[w++]=e[2],_[w++]=r[0],_[w++]=r[1],_[w++]=r[2],this.params.vvSizeEnabled?_[w++]=p:_[w++]=u,this.params.vvColorEnabled)_[w++]=m;else{const e=Math.min(4*a,f.length-4);_[w++]=f[e+0],_[w++]=f[e+1],_[w++]=f[e+2],_[w++]=f[e+3]}this.params.vvOpacityEnabled&&(_[w++]=g)};w+=b,(0,d.s)(n,s[0],s[1],s[2]),y&&(0,d.k)(n,n,y);const S=this.isClosed(t);if(S){const e=s.length-3;(0,d.s)(o,s[e],s[e+1],s[e+2]),y&&(0,d.k)(o,o,y)}else{(0,d.g)(o,n),(0,d.s)(a,s[3],s[4],s[5]),y&&(0,d.k)(a,a,y);for(let e=0;e<c;++e){const t=1-e/c;C(o,n,a,t,1,-4,0),C(o,n,a,t,1,4,0)}C(o,n,a,0,0,-4,0),C(o,n,a,0,0,4,0),(0,d.g)(o,n),(0,d.g)(n,a)}const R=S?v:v-1;for(let e=S?0:1;e<R;e++){const t=(e+1)%v*3;(0,d.s)(a,s[t+0],s[t+1],s[t+2]),y&&(0,d.k)(a,a,y),C(o,n,a,0,1,-1,e),C(o,n,a,0,1,1,e);const r=h?h[e]:this.numJoinSubdivisions;for(let t=0;t<r;++t){const i=(t+1)/(r+1);C(o,n,a,i,1,-2,e),C(o,n,a,i,1,2,e)}C(o,n,a,1,0,-2,e),C(o,n,a,1,0,2,e),(0,d.g)(o,n),(0,d.g)(n,a)}if(S)w=B(_,x+b,_,w,2*b);else{C(o,n,a,0,1,-5,R),C(o,n,a,0,1,5,R);for(let e=0;e<c;++e){const t=(e+1)/c;C(o,n,a,t,1,-5,R),C(o,n,a,t,1,5,R)}}B(_,x+b,_,x,b),w=B(_,w-b,_,w,b)}}function B(e,t,r,i,o){for(let n=0;n<o;n++)r[i++]=e[t++];return i}function k(e,t,r){return q(e,t.get("position").data,r?r.get("position"):null)}function q(e,t,r){return!!e.isClosed&&(r?r.length>2:t.length>6)}const Z=3,$=1,J=(0,l.c)(),K=(0,l.c)(),Y=(0,l.c)(),X=(0,l.c)(),Q=(0,l.c)(),ee=(0,s.J$)(),te=(0,s.J$)(),re=(0,l.c)(),ie=(0,l.c)(),oe=h.KD.create(),ne=h.KD.create(),ae=(0,l.c)(),se=(0,l.c)(),le=(0,l.c)(),de=[(0,s.J$)(),(0,s.J$)(),(0,s.J$)(),(0,s.J$)()],ce=[(0,l.c)(),(0,l.c)(),(0,l.c)(),(0,l.c)()],he=h.yC.create(),ue=h.yC.create(),pe=h.yC.create(),fe=h.yC.create()},48430:(e,t,r)=>{"use strict";r.d(t,{h0:()=>n,i2:()=>a,z5:()=>s});r(95830);var i=r(59472),o=(r(5627),r(8634));r(84570);class n{constructor(){this.cache=new Map}dispose(){this.cache.forEach((e=>{(0,i.pC)(e.texture)&&(e.texture.dispose(),e.texture=null)})),this.cache.clear()}acquire(e){if((0,i.Wi)(e))return null;const t=this.patternId(e),r=this.cache.get(t);if(r)return r.refCount++,r.bind;const n=this.patternToTextureData(e,2),a=n.length/2,s={refCount:1,texture:null,bind:(e,t)=>((0,i.Wi)(s.texture)&&(s.texture=new o.Z(e,{width:n.length,height:1,internalFormat:6406,pixelFormat:6406,dataType:5121,wrapMode:33071},n)),e.bindTexture(s.texture,t),a)};return this.cache.set(t,s),s.bind}release(e){if((0,i.Wi)(e))return;const t=this.patternId(e),r=this.cache.get(t);r&&(r.refCount--,0===r.refCount&&((0,i.pC)(r.texture)&&r.texture.dispose(),this.cache.delete(t)))}swap(e,t){const r=this.acquire(t);return this.release(e),r}patternId(e){return e.join(",")}patternToTextureData(e,t){const r=e.reduce(((e,t)=>e+t))*t,i=new Uint8Array(r);let o=!0,n=0;for(const r of e){for(let e=0;e<r*t;e++)i[n++]=o?255:0;o=!o}return i}}function a(e){return(0,i.Wi)(e)?e:e.slice()}function s(e){return[e,e]}}}]);
//# sourceMappingURL=2457.js.map