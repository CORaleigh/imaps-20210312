(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[2175,1012,995],{10510:(e,t,r)=>{"use strict";r.d(t,{D:()=>F,b:()=>R});var o=r(85461),n=r(62213),a=r(51219),i=r(61514),s=r(4071),l=r(8681),c=r(34658),d=r(76789),u=r(88214),m=r(71613),f=r(31777),p=r(87023),h=r(84530),v=r(82094),g=r(44624),x=r(7261),b=r(74681),y=r(6838),w=r(31163),T=r(11823),C=r(34074),M=r(36305),S=r(10832),_=r(72582),A=r(72884),O=r(52369),P=r(62734),I=r(42211);function R(e){const t=new a.kG,r=t.vertex.code,R=t.fragment.code;return t.include(P.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(y.f),t.varyings.add("vpos","vec3"),t.include(l.k,e),t.include(h.f,e),t.include(d.L,e),0!==e.output&&7!==e.output||(t.include(b.O,e),t.include(n.w,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(x.w),t.include(S.Q,e),t.include(C.B,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(v.D,e),t.include(f.q,e),t.include(w.R,e),t.include(T.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(o.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${o.H.float(c.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?o.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(i.p,e),t.include(c.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(s.S),t.include(u.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(I.y),R.add(o.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?o.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?o.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(i.p,e),t.include(A.X,e),t.include(_.K,e),t.include(c.sj,e),e.receiveShadows&&t.include(m.h,e),e.multipassTerrainEnabled&&(t.fragment.include(s.S),t.include(u.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(g.j,e),t.include(p.T,e),t.fragment.include(I.y),t.include(O.k,e),R.add(o.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?o.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?o.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:o.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?o.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?o.H`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?o.H`vec3 normalGround = normalize(vpos + localOrigin);`:o.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:o.H``}
        ${1===e.pbrMode||2===e.pbrMode?o.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(M.s,e),t}var F=Object.freeze({__proto__:null,build:R})},79733:(e,t,r)=>{"use strict";r.d(t,{R:()=>O,b:()=>A});var o=r(85461),n=r(62213),a=r(51219),i=r(61514),s=r(4071),l=r(8681),c=r(34658),d=r(76789),u=r(88214),m=r(71613),f=r(31777),p=r(87023),h=r(84530),v=r(82094),g=r(44624),x=r(7261),b=r(74681),y=r(6838),w=r(31163),T=r(11823),C=r(36305),M=r(72582),S=r(72884),_=r(42211);function A(e){const t=new a.kG,r=t.vertex.code,A=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(y.f),t.varyings.add("vpos","vec3"),t.include(l.k,e),t.include(h.f,e),t.include(d.L,e),0!==e.output&&7!==e.output||(t.include(b.O,e),t.include(n.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(x.w),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(v.D,e),t.include(f.q,e),t.include(w.R,e),t.include(T.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(o.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${o.H.float(c.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?o.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(i.p,e),t.include(c.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(s.S),t.include(u.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(_.y),A.add(o.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?o.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?o.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?o.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(i.p,e),t.include(S.X,e),t.include(M.K,e),t.include(c.sj,e),e.receiveShadows&&t.include(m.h,e),e.multipassTerrainEnabled&&(t.fragment.include(s.S),t.include(u.l,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(g.j,e),t.include(p.T,e),t.fragment.include(_.y),A.add(o.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?o.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?o.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?o.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${o.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?o.H`vec3 normalGround = normalize(vpos + localOrigin);`:o.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:o.H``}
        ${1===e.pbrMode||2===e.pbrMode?o.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(C.s,e),t}var O=Object.freeze({__proto__:null,build:A})},71012:(e,t,r)=>{"use strict";r.d(t,{b:()=>a,c:()=>n,g:()=>o});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return a(null==t&&r.path)}},r.exports),r.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},30663:(e,t,r)=>{"use strict";function o(){return[1,0,0,0,1,0,0,0,1]}function n(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>n,c:()=>o});Object.freeze({__proto__:null,create:o,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,r,o,n,a,i,s,l){return[e,t,r,o,n,a,i,s,l]},createView:n})},12811:(e,t,r)=>{"use strict";function o(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function a(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>i,a:()=>n,b:()=>a,c:()=>o});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:o,clone:n,fromValues:function(e,t,r,o,n,a,i,s,l,c,d,u,m,f,p,h){return[e,t,r,o,n,a,i,s,l,c,d,u,m,f,p,h]},createView:a,IDENTITY:i})},2847:(e,t,r)=>{"use strict";r.d(t,{c:()=>p,g:()=>d,i:()=>f,r:()=>I});var o=r(77625),n=r(60418),a=r(17387),i=r(30663),s=r(32232),l=r(34353);function c(e,t,r){r*=.5;const o=Math.sin(r);return e[0]=o*t[0],e[1]=o*t[1],e[2]=o*t[2],e[3]=Math.cos(r),e}function d(e,t){const r=2*Math.acos(t[3]),o=Math.sin(r/2);return o>n.E?(e[0]=t[0]/o,e[1]=t[1]/o,e[2]=t[2]/o):(e[0]=1,e[1]=0,e[2]=0),r}function u(e,t,r){const o=t[0],n=t[1],a=t[2],i=t[3],s=r[0],l=r[1],c=r[2],d=r[3];return e[0]=o*d+i*s+n*c-a*l,e[1]=n*d+i*l+a*s-o*c,e[2]=a*d+i*c+o*l-n*s,e[3]=i*d-o*s-n*l-a*c,e}function m(e,t,r,o){const a=t[0],i=t[1],s=t[2],l=t[3];let c,d,u,m,f,p=r[0],h=r[1],v=r[2],g=r[3];return d=a*p+i*h+s*v+l*g,d<0&&(d=-d,p=-p,h=-h,v=-v,g=-g),1-d>n.E?(c=Math.acos(d),u=Math.sin(c),m=Math.sin((1-o)*c)/u,f=Math.sin(o*c)/u):(m=1-o,f=o),e[0]=m*a+f*p,e[1]=m*i+f*h,e[2]=m*s+f*v,e[3]=m*l+f*g,e}function f(e,t){const r=t[0],o=t[1],n=t[2],a=t[3],i=r*r+o*o+n*n+a*a,s=i?1/i:0;return e[0]=-r*s,e[1]=-o*s,e[2]=-n*s,e[3]=a*s,e}function p(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function h(e,t){const r=t[0]+t[4]+t[8];let o;if(r>0)o=Math.sqrt(r+1),e[3]=.5*o,o=.5/o,e[0]=(t[5]-t[7])*o,e[1]=(t[6]-t[2])*o,e[2]=(t[1]-t[3])*o;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const n=(r+1)%3,a=(r+2)%3;o=Math.sqrt(t[3*r+r]-t[3*n+n]-t[3*a+a]+1),e[r]=.5*o,o=.5/o,e[3]=(t[3*n+a]-t[3*a+n])*o,e[n]=(t[3*n+r]+t[3*r+n])*o,e[a]=(t[3*a+r]+t[3*r+a])*o}return e}const v=l.c,g=l.s,x=l.a,b=u,y=l.b,w=l.d,T=l.l,C=l.e,M=C,S=l.f,_=S,A=l.n,O=l.g,P=l.h;function I(e,t,r){const o=(0,a.d)(t,r);return o<-.999999?((0,a.c)(R,F,t),(0,a.r)(R)<1e-6&&(0,a.c)(R,E,t),(0,a.n)(R,R),c(e,R,Math.PI),e):o>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,a.c)(R,t,r),e[0]=R[0],e[1]=R[1],e[2]=R[2],e[3]=1+o,A(e,e))}const R=(0,o.c)(),F=(0,o.f)(1,0,0),E=(0,o.f)(0,1,0);const H=(0,s.c)(),L=(0,s.c)();const D=(0,i.c)();Object.freeze({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:c,getAxisAngle:d,multiply:u,rotateX:function(e,t,r){r*=.5;const o=t[0],n=t[1],a=t[2],i=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=o*l+i*s,e[1]=n*l+a*s,e[2]=a*l-n*s,e[3]=i*l-o*s,e},rotateY:function(e,t,r){r*=.5;const o=t[0],n=t[1],a=t[2],i=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=o*l-a*s,e[1]=n*l+i*s,e[2]=a*l+o*s,e[3]=i*l-n*s,e},rotateZ:function(e,t,r){r*=.5;const o=t[0],n=t[1],a=t[2],i=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=o*l+n*s,e[1]=n*l-o*s,e[2]=a*l+i*s,e[3]=i*l-a*s,e},calculateW:function(e,t){const r=t[0],o=t[1],n=t[2];return e[0]=r,e[1]=o,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-o*o-n*n)),e},slerp:m,random:function(e){const t=(0,n.R)(),r=(0,n.R)(),o=(0,n.R)(),a=Math.sqrt(1-t),i=Math.sqrt(t);return e[0]=a*Math.sin(2*Math.PI*r),e[1]=a*Math.cos(2*Math.PI*r),e[2]=i*Math.sin(2*Math.PI*o),e[3]=i*Math.cos(2*Math.PI*o),e},invert:f,conjugate:p,fromMat3:h,fromEuler:function(e,t,r,o){const n=.5*Math.PI/180;t*=n,r*=n,o*=n;const a=Math.sin(t),i=Math.cos(t),s=Math.sin(r),l=Math.cos(r),c=Math.sin(o),d=Math.cos(o);return e[0]=a*l*d-i*s*c,e[1]=i*s*d+a*l*c,e[2]=i*l*c-a*s*d,e[3]=i*l*d+a*s*c,e},str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:v,set:g,add:x,mul:b,scale:y,dot:w,lerp:T,length:C,len:M,squaredLength:S,sqrLen:_,normalize:A,exactEquals:O,equals:P,rotationTo:I,sqlerp:function(e,t,r,o,n,a){return m(H,t,n,a),m(L,r,o,a),m(e,H,L,2*a*(1-a)),e},setAxes:function(e,t,r,o){const n=D;return n[0]=r[0],n[3]=r[1],n[6]=r[2],n[1]=o[0],n[4]=o[1],n[7]=o[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],A(e,h(e,n))}})},32232:(e,t,r)=>{"use strict";function o(){return[0,0,0,1]}function n(e,t){return new Float64Array(e,t,4)}r.d(t,{a:()=>n,c:()=>o});const a=[0,0,0,1];Object.freeze({__proto__:null,create:o,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:function(e,t,r,o){return[e,t,r,o]},createView:n,IDENTITY:a})},14286:(e,t,r)=>{"use strict";r.d(t,{a:()=>d,b:()=>_,c:()=>n,d:()=>m,e:()=>s,f:()=>g,g:()=>b,h:()=>x,i:()=>i,j:()=>f,k:()=>M,l:()=>p,m:()=>y,n:()=>v,o:()=>w,p:()=>u,q:()=>h,r:()=>C,s:()=>a,t:()=>T});var o=r(60418);function n(e,t){return e[0]=t[0],e[1]=t[1],e}function a(e,t,r){return e[0]=t,e[1]=r,e}function i(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e}function s(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}function l(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e}function c(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e}function d(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e}function u(e,t,r,o){return e[0]=t[0]+r[0]*o,e[1]=t[1]+r[1]*o,e}function m(e,t){const r=t[0]-e[0],o=t[1]-e[1];return Math.sqrt(r*r+o*o)}function f(e,t){const r=t[0]-e[0],o=t[1]-e[1];return r*r+o*o}function p(e){const t=e[0],r=e[1];return Math.sqrt(t*t+r*r)}function h(e){const t=e[0],r=e[1];return t*t+r*r}function v(e,t){return e[0]=-t[0],e[1]=-t[1],e}function g(e,t){const r=t[0],o=t[1];let n=r*r+o*o;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e}function x(e,t){return e[0]*t[0]+e[1]*t[1]}function b(e,t,r){const o=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=o,e}function y(e,t,r,o){const n=t[0],a=t[1];return e[0]=n+o*(r[0]-n),e[1]=a+o*(r[1]-a),e}function w(e,t,r){const o=t[0],n=t[1];return e[0]=r[0]*o+r[2]*n,e[1]=r[1]*o+r[3]*n,e}function T(e,t,r){const o=t[0],n=t[1];return e[0]=r[0]*o+r[2]*n+r[4],e[1]=r[1]*o+r[3]*n+r[5],e}function C(e,t,r,o){const n=t[0]-r[0],a=t[1]-r[1],i=Math.sin(o),s=Math.cos(o);return e[0]=n*s-a*i+r[0],e[1]=n*i+a*s+r[1],e}function M(e,t){return e[0]===t[0]&&e[1]===t[1]}const S=p,_=s,A=l,O=c,P=m,I=f,R=h;Object.freeze({__proto__:null,copy:n,set:a,add:i,subtract:s,multiply:l,divide:c,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e},scale:d,scaleAndAdd:u,distance:m,squaredDistance:f,length:p,squaredLength:h,negate:v,inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},normalize:g,dot:x,cross:b,lerp:y,random:function(e,t){t=t||1;const r=2*(0,o.R)()*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e},transformMat2:w,transformMat2d:T,transformMat3:function(e,t,r){const o=t[0],n=t[1];return e[0]=r[0]*o+r[3]*n+r[6],e[1]=r[1]*o+r[4]*n+r[7],e},transformMat4:function(e,t,r){const o=t[0],n=t[1];return e[0]=r[0]*o+r[4]*n+r[12],e[1]=r[1]*o+r[5]*n+r[13],e},rotate:C,angle:function(e,t){const r=e[0],o=e[1],n=t[0],a=t[1];let i=r*r+o*o;i>0&&(i=1/Math.sqrt(i));let s=n*n+a*a;s>0&&(s=1/Math.sqrt(s));const l=(r*n+o*a)*i*s;return l>1?0:l<-1?Math.PI:Math.acos(l)},str:function(e){return"vec2("+e[0]+", "+e[1]+")"},exactEquals:M,equals:function(e,t){const r=e[0],n=e[1],a=t[0],i=t[1];return Math.abs(r-a)<=o.E*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-i)<=o.E*Math.max(1,Math.abs(n),Math.abs(i))},len:S,sub:_,mul:A,div:O,dist:P,sqrDist:I,sqrLen:R})},55735:(e,t,r)=>{"use strict";function o(){return[0,0]}function n(e){return[e[0],e[1]]}function a(e,t){return[e,t]}function i(e){const t=[0,0],r=Math.min(2,e.length);for(let o=0;o<r;++o)t[o]=e[o];return t}function s(e,t){return new Float64Array(e,t,2)}function l(){return[0,0]}function c(){return a(1,1)}function d(){return a(1,0)}function u(){return a(0,1)}r.d(t,{a:()=>s,b:()=>n,c:()=>o,d:()=>i,f:()=>a});const m=[0,0],f=c(),p=d(),h=u();Object.freeze({__proto__:null,create:o,clone:n,fromValues:a,fromArray:i,createView:s,zeros:l,ones:c,unitX:d,unitY:u,ZEROS:m,ONES:f,UNIT_X:p,UNIT_Y:h})},34353:(e,t,r)=>{"use strict";r.d(t,{a:()=>i,b:()=>d,c:()=>n,d:()=>v,e:()=>f,f:()=>p,g:()=>b,h:()=>y,i:()=>m,l:()=>g,n:()=>h,s:()=>a,t:()=>x});var o=r(60418);function n(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function a(e,t,r,o,n){return e[0]=t,e[1]=r,e[2]=o,e[3]=n,e}function i(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function s(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function l(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function c(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function d(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function u(e,t){const r=t[0]-e[0],o=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+o*o+n*n+a*a)}function m(e,t){const r=t[0]-e[0],o=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+o*o+n*n+a*a}function f(e){const t=e[0],r=e[1],o=e[2],n=e[3];return Math.sqrt(t*t+r*r+o*o+n*n)}function p(e){const t=e[0],r=e[1],o=e[2],n=e[3];return t*t+r*r+o*o+n*n}function h(e,t){const r=t[0],o=t[1],n=t[2],a=t[3];let i=r*r+o*o+n*n+a*a;return i>0&&(i=1/Math.sqrt(i),e[0]=r*i,e[1]=o*i,e[2]=n*i,e[3]=a*i),e}function v(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function g(e,t,r,o){const n=t[0],a=t[1],i=t[2],s=t[3];return e[0]=n+o*(r[0]-n),e[1]=a+o*(r[1]-a),e[2]=i+o*(r[2]-i),e[3]=s+o*(r[3]-s),e}function x(e,t,r){const o=t[0],n=t[1],a=t[2],i=t[3];return e[0]=r[0]*o+r[4]*n+r[8]*a+r[12]*i,e[1]=r[1]*o+r[5]*n+r[9]*a+r[13]*i,e[2]=r[2]*o+r[6]*n+r[10]*a+r[14]*i,e[3]=r[3]*o+r[7]*n+r[11]*a+r[15]*i,e}function b(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function y(e,t){const r=e[0],n=e[1],a=e[2],i=e[3],s=t[0],l=t[1],c=t[2],d=t[3];return Math.abs(r-s)<=o.E*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-l)<=o.E*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(a-c)<=o.E*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(i-d)<=o.E*Math.max(1,Math.abs(i),Math.abs(d))}const w=s,T=l,C=c,M=u,S=m,_=f,A=p;Object.freeze({__proto__:null,copy:n,set:a,add:i,subtract:s,multiply:l,divide:c,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:d,scaleAndAdd:function(e,t,r,o){return e[0]=t[0]+r[0]*o,e[1]=t[1]+r[1]*o,e[2]=t[2]+r[2]*o,e[3]=t[3]+r[3]*o,e},distance:u,squaredDistance:m,length:f,squaredLength:p,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},normalize:h,dot:v,lerp:g,random:function(e,t){let r,n,a,i,s,l;t=t||1;do{r=2*(0,o.R)()-1,n=2*(0,o.R)()-1,s=r*r+n*n}while(s>=1);do{a=2*(0,o.R)()-1,i=2*(0,o.R)()-1,l=a*a+i*i}while(l>=1);const c=Math.sqrt((1-s)/l);return e[0]=t*r,e[1]=t*n,e[2]=t*a*c,e[3]=t*i*c,e},transformMat4:x,transformQuat:function(e,t,r){const o=t[0],n=t[1],a=t[2],i=r[0],s=r[1],l=r[2],c=r[3],d=c*o+s*a-l*n,u=c*n+l*o-i*a,m=c*a+i*n-s*o,f=-i*o-s*n-l*a;return e[0]=d*c+f*-i+u*-l-m*-s,e[1]=u*c+f*-s+m*-i-d*-l,e[2]=m*c+f*-l+d*-s-u*-i,e[3]=t[3],e},str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},exactEquals:b,equals:y,sub:w,mul:T,div:C,dist:M,sqrDist:S,len:_,sqrLen:A})},38256:(e,t,r)=>{"use strict";function o(){return[0,0,0,0]}function n(e,t,r,o){return[e,t,r,o]}function a(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let o=0;o<r;++o)t[o]=e[o];return t}function i(e,t){return new Float64Array(e,t,4)}function s(){return[0,0,0,0]}function l(){return n(1,1,1,1)}function c(){return n(1,0,0,0)}function d(){return n(0,1,0,0)}function u(){return n(0,0,1,0)}function m(){return n(0,0,0,1)}r.d(t,{O:()=>p,Z:()=>f,a:()=>i,b:()=>a,c:()=>o,f:()=>n});const f=[0,0,0,0],p=l(),h=c(),v=d(),g=u(),x=m();Object.freeze({__proto__:null,create:o,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:n,fromArray:a,createView:i,zeros:s,ones:l,unitX:c,unitY:d,unitZ:u,unitW:m,ZEROS:f,ONES:p,UNIT_X:h,UNIT_Y:v,UNIT_Z:g,UNIT_W:x})},34175:(e,t,r)=>{"use strict";r.d(t,{G:()=>n});var o=r(32656);class n{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new o.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new n(this.major,this.minor,this._context)}static parse(e,t=""){const[r,a]=e.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new o.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!a||!a.match||!a.match(i))throw new o.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),l=parseInt(a,10);return new n(s,l,t)}}},41419:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});var o=r(36654);async function n(e,t){const{data:r}=await(0,o.default)(e,{responseType:"image",...t});return r}},77522:(e,t,r)=>{"use strict";r.r(t),r.d(t,{fetch:()=>vt,gltfToEngineResources:()=>xt,parseUrl:()=>gt});var o=r(59472),n=r(77625),a=r(17387),i=r(37969),s=r(67128),l=r(98501),c=r(30663),d=r(12811),u=r(69996),m=r(12608),f=r(36544);const p=f.Z.getLogger("esri.views.3d.support.buffer.math");function h(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],i=r[2],s=r[4],l=r[5],c=r[6],d=r[8],u=r[9],m=r[10],f=r[12],h=r[13],v=r[14],g=e.typedBuffer,x=e.typedBufferStride,b=t.typedBuffer,y=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*x,r=e*y,o=b[r],p=b[r+1],w=b[r+2];g[t]=n*o+s*p+d*w+f,g[t+1]=a*o+l*p+u*w+h,g[t+2]=i*o+c*p+m*w+v}}function v(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],i=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],m=r[8],f=e.typedBuffer,h=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*h,r=e*g,o=v[r],p=v[r+1],x=v[r+2];f[t]=n*o+s*p+d*x,f[t+1]=a*o+l*p+u*x,f[t+2]=i*o+c*p+m*x}}function g(e,t,r){const o=Math.min(e.count,t.count),n=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*a,o=e*s;n[t]=r*i[o],n[t+1]=r*i[o+1],n[t+2]=r*i[o+2]}}Object.freeze({__proto__:null,transformMat4:h,transformMat3:v,scale:g,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),n=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*a,o=e*s;n[t]=i[o]>>r,n[t+1]=i[o+1]>>r,n[t+2]=i[o+2]>>r}}});var x=r(68500),b=r(81495),y=r(80905),w=r(82976),T=r(30090),C=r(10762),M=r(13405),S=r(34658),_=r(66704),A=r(56140),O=r(23240),P=r(97853),I=r(44801),R=r(11379),F=r(51007),E=r(36904),H=r(89553),L=r(61514),D=r(72023),N=r(8681),z=r(76789),B=r(88214),U=r(38391),V=r(71613),G=r(25117),q=r(84530),k=r(44624),W=r(10510);class j extends P.A{initializeProgram(e){const t=j.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,G.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new F.Z(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),R.i)}bindPass(e,t,r){H.G.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||r.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("viewportDim",[e.getViewport().width,e.getViewport().height]),(0,B.C)(this.program,e,r)),7===o&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",T.FZ[t.colorMixMode])),0===o?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",T.FZ[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&k.j.bindUniforms(this.program,t,this.configuration.isSchematic)):4===o&&D.bA.bindOutputHighlight(e,this.program,r),N.k.bindUniformsForSymbols(this.program,t),z.L.bindUniforms(this.program,t,r),(0,T.bj)(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,n.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;H.G.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&H.G.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&q.f.bindCustomOrigin(this.program,t),L.p.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&V.h.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,o=3===e,n=2===e;return(0,E.sm)({blending:0!==r.output&&7!==r.output||!r.transparent?null:o?_.wu:(0,_.$L)(e),culling:$(r),depthTest:{func:(0,_.$x)(e)},depthWrite:o||n?r.writeDepth&&E.LZ:null,colorWrite:E.BK,stencilWrite:r.sceneHasOcludees?U.s3:null,stencilTest:r.sceneHasOcludees?t?U.eD:U.RY:null,polygonOffset:o||n?null:(0,_.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}j.shader=new O.J(W.D,(()=>r.e(2186).then(r.bind(r,72186))));const $=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class Z extends I.m{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}(0,A._)([(0,I.o)({count:8})],Z.prototype,"output",void 0),(0,A._)([(0,I.o)({count:4})],Z.prototype,"alphaDiscardMode",void 0),(0,A._)([(0,I.o)({count:3})],Z.prototype,"doubleSidedMode",void 0),(0,A._)([(0,I.o)()],Z.prototype,"isSchematic",void 0),(0,A._)([(0,I.o)()],Z.prototype,"vertexColors",void 0),(0,A._)([(0,I.o)()],Z.prototype,"offsetBackfaces",void 0),(0,A._)([(0,I.o)()],Z.prototype,"symbolColors",void 0),(0,A._)([(0,I.o)()],Z.prototype,"vvSize",void 0),(0,A._)([(0,I.o)()],Z.prototype,"vvColor",void 0),(0,A._)([(0,I.o)()],Z.prototype,"verticalOffset",void 0),(0,A._)([(0,I.o)()],Z.prototype,"receiveShadows",void 0),(0,A._)([(0,I.o)()],Z.prototype,"slicePlaneEnabled",void 0),(0,A._)([(0,I.o)()],Z.prototype,"sliceHighlightDisabled",void 0),(0,A._)([(0,I.o)()],Z.prototype,"receiveAmbientOcclusion",void 0),(0,A._)([(0,I.o)()],Z.prototype,"screenSizePerspective",void 0),(0,A._)([(0,I.o)()],Z.prototype,"textureAlphaPremultiplied",void 0),(0,A._)([(0,I.o)()],Z.prototype,"hasColorTexture",void 0),(0,A._)([(0,I.o)()],Z.prototype,"usePBR",void 0),(0,A._)([(0,I.o)()],Z.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,A._)([(0,I.o)()],Z.prototype,"hasEmissionTexture",void 0),(0,A._)([(0,I.o)()],Z.prototype,"hasOcclusionTexture",void 0),(0,A._)([(0,I.o)()],Z.prototype,"hasNormalTexture",void 0),(0,A._)([(0,I.o)()],Z.prototype,"instanced",void 0),(0,A._)([(0,I.o)()],Z.prototype,"instancedColor",void 0),(0,A._)([(0,I.o)()],Z.prototype,"instancedDoublePrecision",void 0),(0,A._)([(0,I.o)()],Z.prototype,"vertexTangents",void 0),(0,A._)([(0,I.o)()],Z.prototype,"normalsTypeDerivate",void 0),(0,A._)([(0,I.o)()],Z.prototype,"writeDepth",void 0),(0,A._)([(0,I.o)()],Z.prototype,"sceneHasOcludees",void 0),(0,A._)([(0,I.o)()],Z.prototype,"transparent",void 0),(0,A._)([(0,I.o)()],Z.prototype,"enableOffset",void 0),(0,A._)([(0,I.o)({count:3})],Z.prototype,"cullFace",void 0),(0,A._)([(0,I.o)({count:4})],Z.prototype,"transparencyPassType",void 0),(0,A._)([(0,I.o)()],Z.prototype,"multipassTerrainEnabled",void 0),(0,A._)([(0,I.o)()],Z.prototype,"cullAboveGround",void 0);var X=r(79733);class Q extends j{initializeProgram(e){const t=Q.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,G.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new F.Z(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),R.i)}}Q.shader=new O.J(X.R,(()=>r.e(1343).then(r.bind(r,41343))));class J extends C.F5{constructor(e){super(e,ee),this.supportsEdges=!0,this.techniqueConfig=new Z,this.vertexBufferLayout=J.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?J.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,o=e.symbolColors,n=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,i="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(n||a||o)?!!i||s:r?i?l:s:n||a||o?!!i||s:i?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<_.ve),this.techniqueConfig}intersect(e,t,r,o,n,i,s){if(null!==this.params.verticalOffset){const e=o.camera;(0,a.s)(se,r[12],r[13],r[14]);let t=null;switch(o.viewingMode){case 1:t=(0,a.n)(ae,se);break;case 2:t=(0,a.g)(ae,ne)}let s=0;if(null!==this.params.verticalOffset){const r=(0,a.f)(le,se,e.eye),o=(0,a.l)(r),n=(0,a.a)(r,r,1/o);let i=null;this.params.screenSizePerspective&&(i=(0,a.d)(t,n)),s+=(0,T.Hx)(e,o,this.params.verticalOffset,i,this.params.screenSizePerspective)}(0,a.a)(t,t,s),(0,a.t)(ie,t,o.transform.inverseRotation),n=(0,a.f)(re,n,ie),i=(0,a.f)(oe,i,ie)}(0,T.Bw)(e,t,o,n,i,(0,b.W9)(o.verticalOffset),s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new K(e)}createBufferWriter(){return new te(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,y.U$)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=(0,y.U$)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class K extends w.Z{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(Q,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(j,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const Y=2.1,ee={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,c.c)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:S.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...C.zh};class te{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,o){(0,M.NK)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,o)}}const re=(0,n.c)(),oe=(0,n.c)(),ne=(0,n.f)(0,0,1),ae=(0,n.c)(),ie=(0,n.c)(),se=(0,n.c)(),le=(0,n.c)();var ce=r(43473),de=r(32656),ue=r(10923),me=r(39105),fe=r(36654),pe=r(59351);class he{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return(0,ue.HK)(e)?((0,me.throwIfAborted)(t),(0,ue.AH)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if((0,o.Wi)(this.streamDataRequester))return(await(0,fe.default)(t,{responseType:ve[e]})).data;const n=await(0,pe.q6)(this.streamDataRequester.request(t,e,r));if(!0===n.ok)return n.value;throw(0,me.throwIfAbortError)(n.error),new de.Z("",`Request for resource failed: ${n.error}`)}}const ve={image:"image",binary:"array-buffer",json:"json"};var ge=r(45072);function xe(e,t,r){const o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*n,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<s;++e)o[l]=a[c],o[l+1]=a[c+1],l+=n,c+=i}function be(e,t,r){const o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*n,c=(r&&r.srcIndex?r.srcIndex:0)*i;if((0,ge.U)(t.elementType)){const e=(0,ge.Op)(t.elementType);if((0,ge.B3)(t.elementType))for(let t=0;t<s;++t)o[l]=Math.max(a[c]/e,-1),o[l+1]=Math.max(a[c+1]/e,-1),l+=n,c+=i;else for(let t=0;t<s;++t)o[l]=a[c]/e,o[l+1]=a[c+1]/e,l+=n,c+=i}else xe(e,t,r);return e}Object.freeze({__proto__:null,copy:xe,normalizeIntegerBuffer:be});function ye(e,t,r){const o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*n,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<s;++e)o[l]=a[c],o[l+1]=a[c+1],o[l+2]=a[c+2],l+=n,c+=i}Object.freeze({__proto__:null,copy:ye});function we(e,t,r){const o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*n,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<s;++e)o[l]=a[c],o[l+1]=a[c+1],o[l+2]=a[c+2],o[l+3]=a[c+3],l+=n,c+=i}function Te(e,t,r,o,n,a){const i=e.typedBuffer,s=e.typedBufferStride,l=a?a.count:e.count;let c=(a&&a.dstIndex?a.dstIndex:0)*s;for(let e=0;e<l;++e)i[c]=t,i[c+1]=r,i[c+2]=o,i[c+3]=n,c+=s}Object.freeze({__proto__:null,copy:we,fill:Te});Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*n,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<s;++e){for(let e=0;e<9;++e)o[l+e]=a[c+e];l+=n,c+=i}}});Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*n,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<s;++e){for(let e=0;e<16;++e)o[l+e]=a[c+e];l+=n,c+=i}}});function Ce(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*n,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<s;++e)o[l]=a[c],l+=n,c+=i},makeDense:Ce});function Me(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,ge.n1)(e.ElementType)))}const Se=f.Z.getLogger("esri.views.3d.glTF");var _e=r(94588),Ae=r(34175),Oe=r(32232),Pe=r(2847);class Ie{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const Re={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Fe={pbrMetallicRoughness:Re,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ee={ESRI_externalColorMixMode:"tint"},He=(e={})=>{const t={...Re,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,_e.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...Ee,...e.extras});return{...Fe,...e,pbrMetallicRoughness:t,extras:r}};const Le={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const De=1179937895,Ne=1313821514,ze=5130562;class Be{constructor(e,t,r,o,n){this.context=e,this.errorContext=t,this.uri=r,this.json=o,this.glbBuffer=n,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,o,n)=>(t=o||"",r=n||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==o.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==o.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==o.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,o){if((0,ue.HK)(r)){const o=(0,ue.sJ)(r);if("model/gltf-binary"!==o.mediaType)try{const n=JSON.parse(o.isBase64?atob(o.data):o.data);return new Be(e,t,r,n)}catch{}const n=(0,ue.AH)(r);if(Be.isGLBData(n))return this.fromGLBData(e,t,r,n)}if(r.endsWith(".gltf")){const n=await e.loadJSON(r,o);return new Be(e,t,r,n)}const n=await e.loadBinary(r,o);if(Be.isGLBData(n))return this.fromGLBData(e,t,r,n);const a=await e.loadJSON(r,o);return new Be(e,t,r,a)}static isGLBData(e){const t=new Ie(e);return t.remainingBytes()>=4&&t.readUint32()===De}static async fromGLBData(e,t,r,o){const n=await Be.parseGLBData(t,o);return new Be(e,t,r,n.json,n.binaryData)}static async parseGLBData(e,t){const r=new Ie(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const o=r.readUint32(),n=r.readUint32(),a=r.readUint32();e.assert(o===De,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=a,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==n,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,s,l=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),o=r.readUint32();0===l?(e.assert(o===Ne,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await We(r.readUint8Array(t))):1===l?(e.errorUnsupportedIf(o!==ze,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),l+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],o=this.errorContext;if(null==r.uri)return o.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let n=this.bufferCache.get(e);if(!n){const a=await this.context.loadBinary(this.resolveUri(r.uri),t);n=new Uint8Array(a),this.bufferCache.set(e,n),o.assert(n.byteLength===r.byteLength,"Buffer byte lengths should match.")}return n}async getAccessor(e,t){const r=this.json.accessors[e],o=this.errorContext;o.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),o.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const n=this.json.bufferViews[r.bufferView],a=await this.getBuffer(n.buffer,t),i=qe[r.type],s=ke[r.componentType],l=i*s,c=n.byteStride||l;return{raw:a.buffer,byteStride:c,byteOffset:a.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===l,componentCount:i,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Ce(this.wrapAccessor(m.D_,r));case 5123:return Ce(this.wrapAccessor(m.av,r));case 5125:return Ce(this.wrapAccessor(m.Nu,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const o=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+je[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(m.ct,o)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const o=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+je[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(m.ct,o)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const o=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+je[o.componentType]),r.errorUnsupportedIf(4!==o.componentCount,"TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed()),new m.ek(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(m.Eu,o):(r.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new m.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new m.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new m.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new m.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new m.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new m.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,_e.Bg)(e.componentType)}}(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const o=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==o.componentCount&&3!==o.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed()),4===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(m.ek,o);if(5121===o.componentType)return this.wrapAccessor(m.mc,o);if(5123===o.componentType)return this.wrapAccessor(m.v6,o)}else if(3===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(m.ct,o);if(5121===o.componentType)return this.wrapAccessor(m.ne,o);if(5123===o.componentType)return this.wrapAccessor(m.mw,o)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+je[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const r=this.errorContext;let o=this.materialCache.get(e.material);if(!o){const n=null!=e.material?He(this.json.materials[e.material]):He(),a=n.pbrMetallicRoughness,i=this.hasVertexColors(e);let s,l,c,d,u;a.baseColorTexture&&(r.errorUnsupportedIf(0!==(a.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),s=await this.getTexture(a.baseColorTexture.index,t)),n.normalTexture&&(0!==(n.normalTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(n.normalTexture.index,t)),n.occlusionTexture&&(0!==(n.occlusionTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):c=await this.getTexture(n.occlusionTexture.index,t)),n.emissiveTexture&&(0!==(n.emissiveTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(n.emissiveTexture.index,t)),a.metallicRoughnessTexture&&(0!==(a.metallicRoughnessTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):u=await this.getTexture(a.metallicRoughnessTexture.index,t));const m=null!=e.material?e.material:-1;o={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:a.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:s,normalTexture:l,name:n.name,id:m,occlusionTexture:c,emissiveTexture:d,emissiveFactor:n.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:u,vertexColors:i,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode}}return o}async getTexture(e,t){const r=this.errorContext,o=this.json.textures[e],n=(e=>({...Le,...e}))(null!=o.sampler?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const a=this.json.images[o.source];let i=this.textureCache.get(e);if(!i){let o;if(a.uri)o=await this.context.loadImage(this.resolveUri(a.uri),t);else{r.errorUnsupportedIf(null==a.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==a.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[a.bufferView],n=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),o=await async function(e,t){return new Promise(((r,o)=>{const n=new Blob([e],{type:t}),a=URL.createObjectURL(n),i=new Image;i.addEventListener("load",(()=>{URL.revokeObjectURL(a),"decode"in i?i.decode().then((()=>r(i)),(()=>r(i))):r(i)})),i.addEventListener("error",(e=>{URL.revokeObjectURL(a),o(e)})),i.src=a}))}(new Uint8Array(n.buffer,n.byteOffset+(e.byteOffset||0),e.byteLength),a.mimeType)}i={data:o,wrapS:n.wrapS,wrapT:n.wrapT,minFilter:n.minFilter,name:a.name,id:e},this.textureCache.set(e,i)}return i}getNodeTransform(e){if(void 0===e)return Ve;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=(0,s.m)((0,d.c)(),r,o.matrix):o.translation||o.rotation||o.scale?(t=(0,d.a)(r),o.translation&&(0,s.t)(t,t,o.translation),o.rotation&&(Ge[3]=(0,Pe.g)(Ge,o.rotation),(0,s.r)(t,t,Ge[3],Ge)),o.scale&&(0,s.s)(t,t,o.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return(0,ue.hF)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=Ae.G.parse(this.json.asset.version,"glTF");Ue.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const Ue=new Ae.G(2,0,"glTF"),Ve=(0,s.k)((0,d.c)(),Math.PI/2),Ge=(0,Oe.c)(),qe={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},ke={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function We(e){return new Promise(((t,r)=>{const o=new Blob([e]),n=new FileReader;n.onload=()=>{const e=n.result;t(JSON.parse(e))},n.onerror=e=>{r(e)},n.readAsText(o)}))}const je={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let $e=0;async function Ze(e,t,r={}){const n=await Be.load(e,Ye,t,r),a="gltf_"+$e++,i={lods:[],materials:new Map,textures:new Map,meta:Xe(n)},s=!(!n.json.asset.extras||"symbolResource"!==n.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,n=o.length>1;for(const e of o){const t=r.nodes[e],o=[a(e,0)];if(Qe(t)&&!n){const e=t.extensions.MSFT_lod.ids;o.push(...e.map(((e,t)=>a(e,t+1))))}await Promise.all(o)}async function a(o,n){const i=r.nodes[o],s=e.getNodeTransform(o);if(Ye.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=r.meshes[i.mesh];for(const r of e.primitives)await t(r,s,n,e.name)}for(const e of i.children||[])await a(e,n)}}(n,(async(e,t,s,l)=>{const c=void 0!==e.mode?e.mode:4,u=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(c);if((0,o.Wi)(u))return void Ye.warnUnsupported("Unsupported primitive mode ("+tt[c]+"). Skipping primitive.");if(!n.hasPositions(e))return void Ye.warn("Skipping primitive without POSITION vertex attribute.");const m=await n.getMaterial(e,r),f={transform:(0,d.a)(t),attributes:{position:await n.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await n.getIndexData(e,r),primitiveType:u,material:Je(i,m,a)};n.hasNormals(e)&&(f.attributes.normal=await n.getNormalData(e,r)),n.hasTangents(e)&&(f.attributes.tangent=await n.getTangentData(e,r)),n.hasTextureCoordinates(e)&&(f.attributes.texCoord0=await n.getTextureCoordinates(e,r)),n.hasVertexColors(e)&&(f.attributes.color=await n.getVertexColors(e,r));let p=null;(0,o.pC)(i.meta)&&(0,o.pC)(i.meta.ESRI_lod)&&"screenSpaceRadius"===i.meta.ESRI_lod.metric&&(p=i.meta.ESRI_lod.thresholds[s]),i.lods[s]=i.lods[s]||{parts:[],name:l,lodThreshold:p},i.lods[s].parts.push(f)})),{model:i,meta:{isEsriSymbolResource:s,uri:n.uri},customMeta:{}}}function Xe(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,o.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}function Qe(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Je(e,t,r){const o=t=>{const o=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:Ke(t.wrapS),t:Ke(t.wrapT)},mipmap:et.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(o,r)}return o},n=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(n)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(n,r)}return n}function Ke(e){if(33071===e||33648===e||10497===e)return e;Ye.error(`Unexpected TextureSampler WrapMode: ${e}`)}const Ye=new class{error(e){throw new de.Z("gltf-loader-error",e)}errorUnsupported(e){throw new de.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Se.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},et=[9987,9985],tt=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];var rt=r(6962),ot=r(27898);var nt=r(41419);const at=f.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function it(e,t){const r=await async function(e,t){const r=(0,o.pC)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const o=await(0,pe.q6)(t.request(e,"json",r));if(!0===o.ok)return o.value;(0,me.throwIfAbortError)(o.error),st(o.error.details.url)}(e,r,t);const n=await(0,pe.q6)((0,fe.default)(e,(0,o.Wg)(t)));if(!0===n.ok)return n.value.data;(0,me.throwIfAbortError)(n.error),st(n.error)}(e,t);return{resource:r,textures:await dt(r.textureDefinitions,t)}}function st(e){throw new de.Z("",`Request for object resource failed: ${e}`)}function lt(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(at.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(at.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(at.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(at.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else at.warn("Indexed geometries must specify faces"),o=!1;break}default:at.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(at.warn("Geometry requires material"),o=!1);const n=e.params.vertexAttributes;for(const e in n)n[e].values||(at.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function ct(e){const t=(0,u.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,o.pC)(r)&&((0,u.pp)(t,r.getBBMin()),(0,u.pp)(t,r.getBBMax()))})),t}async function dt(e,t){const r=[];for(const n in e){const a=e[n],i=a.images[0].data;if(!i){at.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+i,l="/textureDefinitions/"+n,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=(0,o.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,nt.t)(s,t);r.push(d.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:"rgba"===a.channels?a.alphaChannelUsage||"transparency":"none"}))))}const n=await Promise.all(r),a={};for(const e of n)a[e.refId]=e;return a}function ut(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function mt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ft=new Ae.G(1,2,"wosr");function pt(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],i=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],m=r[8],f=e.typedBuffer,h=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*h,r=e*g,o=v[r],p=v[r+1],x=v[r+2],b=v[r+3];f[t]=n*o+s*p+d*x,f[t+1]=a*o+l*p+u*x,f[t+2]=i*o+c*p+m*x,f[t+3]=b}}function ht(e,t,r){const o=Math.min(e.count,t.count),n=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*a,o=e*s;n[t]=r*i[o],n[t+1]=r*i[o+1],n[t+2]=r*i[o+2],n[t+3]=r*i[o+3]}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],a=r[1],i=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],m=r[8],f=r[9],h=r[10],v=r[11],g=r[12],x=r[13],b=r[14],y=r[15],w=e.typedBuffer,T=e.typedBufferStride,C=t.typedBuffer,M=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*T,r=e*M,o=C[r],p=C[r+1],S=C[r+2],_=C[r+3];w[t]=n*o+l*p+m*S+g*_,w[t+1]=a*o+c*p+f*S+x*_,w[t+2]=i*o+d*p+h*S+b*_,w[t+3]=s*o+u*p+v*S+y*_}},transformMat3:pt,scale:ht,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),n=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*a,o=e*s;n[t]=i[o]>>r,n[t+1]=i[o+1]>>r,n[t+2]=i[o+2]>>r,n[t+3]=i[o+3]>>r}}});async function vt(e,t){const r=gt((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):it(r.url,t)),a=function(e,t){const r=[],a=[],i=[],s=[],l=e.resource,c=Ae.G.parse(l.version||"1.0","wosr");ft.validate(c);const d=l.model.name,u=l.model.geometries,m=l.materialDefinitions,f=e.textures;let p=0;const h=new Map;for(let e=0;e<u.length;e++){const l=u[e];if(!lt(l))continue;const c=mt(l),d=l.params.vertexAttributes,v=[];for(const e in d){const t=d[e],r=t.values;v.push([e,{data:r,size:t.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==l.params.topology){const e=l.params.faces;for(const t in e)g.push([t,new Uint32Array(e[t].values)])}const b=f&&f[c.texture];if(b&&!h.has(c.texture)){const{image:e,params:t}=b,r=new ce.x(e,t);s.push(r),h.set(c.texture,r)}const y=h.get(c.texture),w=y?y.id:void 0;let T=i[c.material]?i[c.material][c.texture]:null;if(!T){const e=m[c.material.substring(c.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=b&&b.alphaChannelUsage,a=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s={ambient:(0,n.d)(e.diffuse),diffuse:(0,n.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:a,textureAlphaMode:b?ut(b.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:w,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};(0,o.pC)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),T=new J(s),i[c.material]||(i[c.material]={}),i[c.material][c.texture]=T}a.push(T);const C=new x.Z(v,g);p+=g.position?g.position.length:0,r.push(C)}return{name:d,stageResources:{textures:s,materials:a,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:ct(r),numberOfVertices:p,lodThreshold:null}}(e,t);return{lods:[a],referenceBoundingBox:a.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const l=await(t.cache?t.cache.loadGLTF(r.url,t):Ze(new he(t.streamDataRequester),r.url,t)),c=(0,o.U2)(l.model.meta,"ESRI_proxyEllipsoid");l.meta.isEsriSymbolResource&&(0,o.pC)(c)&&-1!==l.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const l of i.parts){const i=l.attributes.normal;if((0,o.Wi)(i))return;const c=l.attributes.position,u=c.count,f=(0,n.c)(),p=(0,n.c)(),h=(0,n.c)(),v=Me(m.mc,u),g=Me(m.ct,u),x=(0,s.c)((0,d.c)(),l.transform);for(let o=0;o<u;o++){c.getVec(o,p),i.getVec(o,f),(0,a.k)(p,p,l.transform),(0,a.f)(h,p,t.center),(0,a.C)(h,h,t.radius);const n=h[2],s=(0,a.l)(h),d=Math.min(.45+.55*s*s,1);(0,a.C)(h,h,t.radius),(0,a.k)(h,h,x),(0,a.n)(h,h),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,a.e)(h,h,f,n>-1?.2:Math.min(-4*n-3.8,1)),g.setVec(o,h),v.set(o,0,255*d),v.set(o,1,255*d),v.set(o,2,255*d),v.set(o,3,255)}l.attributes.normal=g,l.attributes.color=v}}}(l,c);const u=l.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:l.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},f={...t.materialParamsMixin,treeRendering:l.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=xt(l,u,f,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=xt(l,u,f,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:l.meta.isEsriSymbolResource,isWosr:!1,remove:l.remove}}const p=xt(l,u,f);return{lods:p,referenceBoundingBox:p[0].boundingBox,isEsriSymbolResource:l.meta.isEsriSymbolResource,isWosr:!1,remove:l.remove}}function gt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function xt(e,t,r,n){const a=e.model,i=(0,c.c)(),s=new Array,d=new Map,f=new Map;return a.lods.forEach(((e,c)=>{if(void 0!==n&&c!==n)return;const p={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,o.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,u.cS)()};s.push(p),e.parts.forEach((e=>{const n=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=a.materials.get(e.material),c=(0,o.pC)(e.attributes.texCoord0),b=(0,o.pC)(e.attributes.normal);if(!d.has(n)){if(c){if((0,o.pC)(s.textureColor)&&!f.has(s.textureColor)){const e=a.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureColor,new ce.x(e.data,t))}if((0,o.pC)(s.textureNormal)&&!f.has(s.textureNormal)){const e=a.textures.get(s.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureNormal,new ce.x(e.data,t))}if((0,o.pC)(s.textureOcclusion)&&!f.has(s.textureOcclusion)){const e=a.textures.get(s.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureOcclusion,new ce.x(e.data,t))}if((0,o.pC)(s.textureEmissive)&&!f.has(s.textureEmissive)){const e=a.textures.get(s.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureEmissive,new ce.x(e.data,t))}if((0,o.pC)(s.textureMetallicRoughness)&&!f.has(s.textureMetallicRoughness)){const e=a.textures.get(s.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};f.set(s.textureMetallicRoughness,new ce.x(e.data,t))}}const i=s.color[0]**(1/Y),l=s.color[1]**(1/Y),u=s.color[2]**(1/Y),m=s.emissiveFactor[0]**(1/Y),p=s.emissiveFactor[1]**(1/Y),h=s.emissiveFactor[2]**(1/Y);d.set(n,new J({...t,transparent:"BLEND"===s.alphaMode,textureAlphaMode:bt(s.alphaMode),textureAlphaCutoff:s.alphaCutoff,diffuse:[i,l,u],ambient:[i,l,u],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:b?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,o.pC)(s.textureColor)&&c?f.get(s.textureColor).id:void 0,colorMixMode:s.colorMixMode,normalTextureId:(0,o.pC)(s.textureNormal)&&c?f.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:(0,o.pC)(s.textureOcclusion)&&c?f.get(s.textureOcclusion).id:void 0,emissiveTextureId:(0,o.pC)(s.textureEmissive)&&c?f.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.pC)(s.textureMetallicRoughness)&&c?f.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[m,p,h],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const y=function(e,t){switch(t){case 4:return function(e){return"number"==typeof e?(0,ot.p)(e):(0,rt.Uc)(e)||(0,rt.lq)(e)?new Uint32Array(e):e}(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let n=0;n<r;n+=1)if(n%2==0){const r=e[n],a=e[n+1],i=e[n+2];o[t++]=r,o[t++]=a,o[t++]=i}else{const r=e[n+1],a=e[n],i=e[n+2];o[t++]=r,o[t++]=a,o[t++]=i}}return o}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}{const t=e[0];let n=e[1],a=0;for(let i=0;i<r;++i){const r=e[i+2];o[a++]=t,o[a++]=n,o[a++]=r,n=r}return o}}(e)}}(e.indices||e.attributes.position.count,e.primitiveType),w=e.attributes.position.count,T=Me(m.ct,w);h(T,e.attributes.position,e.transform);const C=[["position",{data:T.typedBuffer,size:T.elementCount,exclusive:!0}]],M=[["position",y]];if((0,o.pC)(e.attributes.normal)){const t=Me(m.ct,w);(0,l.a)(i,e.transform),v(t,e.attributes.normal,i),C.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["normal",y])}if((0,o.pC)(e.attributes.tangent)){const t=Me(m.ek,w);(0,l.a)(i,e.transform),pt(t,e.attributes.tangent,i),C.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["tangent",y])}if((0,o.pC)(e.attributes.texCoord0)){const t=Me(m.Eu,w);be(t,e.attributes.texCoord0),C.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["uv0",y])}if((0,o.pC)(e.attributes.color)){const t=Me(m.mc,w);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m.ek?ht(t,e.attributes.color,255):e.attributes.color instanceof m.mc?we(t,e.attributes.color):e.attributes.color instanceof m.v6&&ht(t,e.attributes.color,1/256);else{Te(t,255,255,255,255);const r=new m.ne(t.buffer,0,4);e.attributes.color instanceof m.ct?g(r,e.attributes.color,255):e.attributes.color instanceof m.ne?ye(r,e.attributes.color):e.attributes.color instanceof m.mw&&g(r,e.attributes.color,1/256)}C.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),M.push(["color",y])}const S=new x.Z(C,M);p.stageResources.geometries.push(S),p.stageResources.materials.push(d.get(n)),c&&((0,o.pC)(s.textureColor)&&p.stageResources.textures.push(f.get(s.textureColor)),(0,o.pC)(s.textureNormal)&&p.stageResources.textures.push(f.get(s.textureNormal)),(0,o.pC)(s.textureOcclusion)&&p.stageResources.textures.push(f.get(s.textureOcclusion)),(0,o.pC)(s.textureEmissive)&&p.stageResources.textures.push(f.get(s.textureEmissive)),(0,o.pC)(s.textureMetallicRoughness)&&p.stageResources.textures.push(f.get(s.textureMetallicRoughness))),p.numberOfVertices+=w;const _=S.boundingInfo;(0,o.pC)(_)&&((0,u.pp)(p.boundingBox,_.getBBMin()),(0,u.pp)(p.boundingBox,_.getBBMax()))}))})),s}function bt(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}},8344:(e,t,r)=>{"use strict";r.d(t,{MP:()=>v,qW:()=>f,WM:()=>p,o6:()=>h});var o=r(59472),n=r(33469),a=r(77625),i=r(30663),s=r(12811),l=r(32232),c=r(55735),d=r(38256);class u{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=n.Z.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=(0,o.Bd)(this.tickHandle)),this.itemsPtr=0,this.items=(0,o.Bd)(this.items),this.buffers=(0,o.Bd)(this.buffers)}get(){0===this.itemsPtr&&(0,n.Z)((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=m){return new u(16,c.a,e)}static createVec3f64(e=m){return new u(24,a.b,e)}static createVec4f64(e=m){return new u(32,d.a,e)}static createMat3f64(e=m){return new u(72,i.a,e)}static createMat4f64(e=m){return new u(128,s.b,e)}static createQuatf64(e=m){return new u(32,l.a,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const m=4096,f=u.createVec2f64(),p=u.createVec3f64(),h=u.createVec4f64(),v=(u.createMat3f64(),u.createMat4f64());u.createQuatf64()},31777:(e,t,r)=>{"use strict";r.d(t,{q:()=>n});var o=r(85461);function n(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(o.H`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(o.H`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(o.H`
      void forwardLinearDepth() {}
    `)}},7261:(e,t,r)=>{"use strict";r.d(t,{w:()=>n});var o=r(85461);function n(e){e.vertex.code.add(o.H`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},84530:(e,t,r)=>{"use strict";r.d(t,{f:()=>l});var o,n=r(77625),a=r(71061),i=r(85461),s=r(25117);function l(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(s.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[i.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,i.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?i.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,i.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,i.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?i.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:i.H``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(o=l||(l={})).Uniforms=class{},o.bindCustomOrigin=function(e,t){(0,a.po)(t,c,d,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",d)};const c=(0,n.c)(),d=(0,n.c)()},74681:(e,t,r)=>{"use strict";r.d(t,{O:()=>a});var o=r(85461);function n(e){const t=o.H`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function a(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(o.H`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(n),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(o.H`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}},6838:(e,t,r)=>{"use strict";r.d(t,{f:()=>n});var o=r(85461);function n(e){e.attributes.add("position","vec3"),e.vertex.code.add(o.H`
    vec3 positionModel() { return position; }
  `)}},31163:(e,t,r)=>{"use strict";r.d(t,{R:()=>a});var o=r(85461);function n(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function a(e,t){t.symbolColor?(e.include(n),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(o.H`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(o.H`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}},82094:(e,t,r)=>{"use strict";r.d(t,{D:()=>n});var o=r(85461);function n(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(o.H`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(o.H`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(o.H`
      void forwardTextureCoordinates() {}
    `)}},34074:(e,t,r)=>{"use strict";r.d(t,{B:()=>u});var o=r(85461),n=r(74681),a=r(77625),i=r(30663),s=r(12811),l=r(25117),c=r(6838);function d(e,t){e.include(c.f),e.vertex.include(l.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(o.H`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(o.H`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function u(e,t){0===t.normalType||1===t.normalType?(e.include(n.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(o.H`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(d,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(o.H`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?o.H`normalize(vPositionWorldCameraRelative);`:o.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(o.H`
      void forwardNormal() {}
    `)}!function(e){e.ModelTransform=class{constructor(){this.worldFromModel_RS=(0,i.c)(),this.worldFromModel_TH=(0,a.c)(),this.worldFromModel_TL=(0,a.c)()}};e.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,a.c)(),this.worldFromView_TL=(0,a.c)(),this.viewFromCameraRelative_RS=(0,i.c)(),this.projFromView=(0,s.c)()}},e.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},e.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}}(d||(d={})),(u||(u={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},51206:(e,t,r)=>{"use strict";r.d(t,{i:()=>i});var o=r(85461),n=r(82094);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      // clamp the derivatives to avoid discoloring when zooming out.
      float maxdUV = 0.125; // Emprirically tuned compromise between discoloring and aliasing noise.
      vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
      vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function i(e,t){e.include(n.D,t),e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(o.H`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(a),e.fragment.code.add(o.H`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}},76789:(e,t,r)=>{"use strict";r.d(t,{L:()=>a});var o=r(85461),n=r(91930);function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(n.c),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(o.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?o.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:o.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?o.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:o.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(o.H`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}function i(e,t,r,o=s){return o.screenLength=e.screenLength,o.perDistance=Math.tan(.5*t)/(.5*r),o.minWorldLength=e.minWorldLength,o.maxWorldLength=e.maxWorldLength,o}(a||(a={})).bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const o=i(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",o.screenLength*n,o.perDistance,o.minWorldLength,o.maxWorldLength)};const s={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},36305:(e,t,r)=>{"use strict";r.d(t,{s:()=>f});var o=r(85461),n=r(62213),a=r(61514),i=r(72023),s=r(8681),l=r(34658),c=r(83488),d=r(82094),u=r(74681),m=r(34074);function f(e,t){const r=e.vertex.code,f=e.fragment.code;1!==t.output&&3!==t.output||(e.include(n.w,{linearDepth:!0}),e.include(d.D,t),e.include(s.k,t),e.include(c.F,t),e.include(a.p,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(o.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(l.sj,t),f.add(o.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?o.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(n.w,{linearDepth:!1}),e.include(u.O,t),e.include(m.B,t),e.include(d.D,t),e.include(s.k,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(o.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?o.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.p,t),e.include(l.sj,t),f.add(o.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?o.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?o.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:o.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(n.w,{linearDepth:!1}),e.include(d.D,t),e.include(s.k,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(o.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.p,t),e.include(l.sj,t),e.include(i.bA),f.add(o.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?o.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},10832:(e,t,r)=>{"use strict";r.d(t,{Q:()=>a});var o=r(85461),n=r(51206);function a(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(o.H`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(o.H`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(o.H`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(n.i,t),r.code.add(o.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},72582:(e,t,r)=>{"use strict";r.d(t,{K:()=>n});var o=r(85461);function n(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(o.H`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(o.H`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}},72884:(e,t,r)=>{"use strict";r.d(t,{X:()=>d});var o=r(85461),n=r(9295),a=r(71613),i=r(87023),s=r(72582);function l(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(o.H`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===n?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(o.H`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===n&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(o.H`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(o.H`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function c(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(o.H`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function d(e,t){const r=e.fragment;e.include(c),e.include(s.K,t),0!==t.pbrMode&&e.include(i.T,t),e.include(l,t),t.receiveShadows&&e.include(a.h,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(n.e),r.code.add(o.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(o.H`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(o.H`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(o.H`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(o.H`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(o.H`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(o.H`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(o.H`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(o.H`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(o.H`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(o.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?o.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:o.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}},52369:(e,t,r)=>{"use strict";r.d(t,{k:()=>n});var o=r(85461);function n(e,t){const r=e.fragment;r.code.add(o.H`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(o.H`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(o.H`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(o.H`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}},87023:(e,t,r)=>{"use strict";r.d(t,{T:()=>i});var o=r(85461),n=r(9295);function a(e){const t=e.fragment.code;t.add(o.H`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(o.H`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(o.H`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function i(e,t){const r=e.fragment.code;e.include(n.e),3===t.pbrMode||4===t.pbrMode?(r.add(o.H`
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
    `),r.add(o.H`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(o.H`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(o.H`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(o.H`
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
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(a),r.add(o.H`
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
    `),r.add(o.H`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(o.H`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(o.H`
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
    `),r.add(o.H`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(o.H`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},44624:(e,t,r)=>{"use strict";r.d(t,{j:()=>i});var o=r(69236),n=r(85461),a=r(51206);(0,o.f)(0,.6,.2);function i(e,t){const r=e.fragment,o=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&o&&e.include(a.i,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(n.H`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(n.H`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(n.H`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(n.H`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(n.H`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(n.H`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(n.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(n.H`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}(i||(i={})).bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},9295:(e,t,r)=>{"use strict";r.d(t,{e:()=>n});var o=r(85461);function n(e){e.vertex.code.add(o.H`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(o.H`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}},71613:(e,t,r)=>{"use strict";r.d(t,{h:()=>i});var o,n=r(85461),a=r(61017);function i(e){e.fragment.include(a.n),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(n.H`
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
  `)}(o=i||(i={})).bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},o.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},o.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},8681:(e,t,r)=>{"use strict";r.d(t,{k:()=>n});var o=r(85461);function n(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(o.H`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(o.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?o.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(o.H`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(o.H`
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

      ${t.vvInstancingEnabled?o.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(o.H`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,r){t(e,r),r.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",r.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",r.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,r){t(e,r),r.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",r.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",r.vvSymbolRotationMatrix))}}(n||(n={}))},25117:(e,t,r)=>{"use strict";r.d(t,{$:()=>g,I:()=>x});var o=r(95830),n=r(85461),a=r(59472),i=(r(33655),r(77625)),s=r(56469),l=r(71061),c=r(51007),d=r(69595),u=r(74038),m=r(84570),f=r(31563);class p{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,(0,f.M)(e).then((e=>{this.svgAlwaysPremultipliesAlpha=!e}))}get doublePrecisionRequiresObfuscation(){if((0,a.Wi)(this._doublePrecisionRequiresObfuscation)){const e=v(this.context,!1),t=v(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let h=null;function v(e,t){const r=new m.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const o=d.Z.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),n=new u.Z(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:o}),a=(0,i.f)(5633261.287538229,2626832.878767164,1434988.0495278358),f=(0,i.f)(5633271.46742708,2626873.6381334523,1434963.231608387),p=function(r,o){const n=new c.Z(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),a=new Float32Array(6);(0,l.LF)(r,a,3);const i=new Float32Array(6);return(0,l.LF)(o,i,3),e.bindProgram(n),n.setUniform3f("u_highA",a[0],a[2],a[4]),n.setUniform3f("u_lowA",a[1],a[3],a[5]),n.setUniform3f("u_highB",i[0],i[2],i[4]),n.setUniform3f("u_lowB",i[1],i[3],i[5]),n}(a,f),h=e.getBoundFramebufferObject(),{x:v,y:g,width:x,height:b}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(n),e.drawArrays(5,0,4);const y=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,y),p.dispose(),n.dispose(!1),o.dispose(),r.dispose(),e.setViewport(v,g,x,b),e.bindFramebuffer(h);const w=(a[2]-f[2])/25,T=(0,s.vP)(y);return Math.abs(w-T)}function g({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.H`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(n.H`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function x(e){return!!(0,o.Z)("force-double-precision-obfuscation")||function(e){return((0,a.Wi)(h)||h.context!==e)&&(h=new p(e)),h}(e).doublePrecisionRequiresObfuscation}},62734:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});r(95830);var o=r(85461);function n(e,t){o.H`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},42211:(e,t,r)=>{"use strict";r.d(t,{y:()=>a});var o=r(85461),n=r(63230);function a(e){e.include(n.Y),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${o.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${o.H.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${o.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},91930:(e,t,r)=>{"use strict";r.d(t,{c:()=>a});var o=r(85461),n=r(30090);function a(e){e.vertex.code.add(o.H`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),e.vertex.code.add(o.H`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(o.H`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(o.H`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(o.H`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(o.H`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(o.H`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}(a||(a={})).bindUniforms=function(e,t){if(t.screenSizePerspective){(0,n.bj)(t.screenSizePerspective,e,"screenSizePerspective");const r=t.screenSizePerspectiveAlignment||t.screenSizePerspective;(0,n.bj)(r,e,"screenSizePerspectiveAlignment")}}},68397:(e,t,r)=>{"use strict";r.d(t,{G:()=>o});const o={DIFFUSE:0,NORMAL:1,EMISSION:2,OCCLUSION:3,METALLIC_ROUGHNESS:4,SSAO:6,SHADOW_MAP:7}},82976:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(59472),n=r(68397),a=r(26701);class i extends a.Z{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){(0,o.pC)(this._texture)&&(t.setUniform1i("tex",n.G.DIFFUSE),e.bindTexture(this._texture.glTexture,n.G.DIFFUSE)),(0,o.pC)(this._textureNormal)&&(t.setUniform1i("normalTexture",n.G.NORMAL),e.bindTexture(this._textureNormal.glTexture,n.G.NORMAL)),(0,o.pC)(this._textureEmissive)&&(t.setUniform1i("texEmission",n.G.EMISSION),e.bindTexture(this._textureEmissive.glTexture,n.G.EMISSION)),(0,o.pC)(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",n.G.OCCLUSION),e.bindTexture(this._textureOcclusion.glTexture,n.G.OCCLUSION)),(0,o.pC)(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",n.G.METALLIC_ROUGHNESS),e.bindTexture(this._textureMetallicRoughness.glTexture,n.G.METALLIC_ROUGHNESS))}bindTextureScale(e,t){const r=(0,o.pC)(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!(0,o.Wi)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){(0,o.Wi)(e)||(this._textureIDs.delete(e),this._textureRepository.release(e))}}const s=i},43473:(e,t,r)=>{"use strict";r.d(t,{x:()=>R});var o=r(94588),n=r(6962),a=r(59472),i=r(32656),s=r(10923),l=r(39105),c=r(35470),d=r(33655),u=r(4094),m=r(49326),f=r(56469),p=r(41419),h=r(6091),v=r(8634),g=r(57319),x=r(10346),b=r(84570),y=r(12973);let w,T=null,C=null;async function M(){return(0,a.Wi)(C)&&(C=function(){if((0,a.Wi)(w)){const e=e=>(0,y.V)(`esri/libs/basisu/${e}`);w=r.e(3886).then(r.bind(r,33886)).then((function(e){return e.b})).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return w}(),T=await C),C}const S=r(36544).Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function _(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const A=_("DXT1"),O=_("DXT3"),P=_("DXT5");function I(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return S.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return S.error("Unsupported format, must contain a FourCC code"),null;const o=r[21];let n,a;switch(o){case A:n=8,a=33776;break;case O:n=16,a=33778;break;case P:n=16,a=33779;break;default:return S.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(o)),null}let i=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(S.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,u=l;let m,f;131072&r[2]&&!1!==t&&(i=Math.max(1,r[7])),1===i||(0,d.wt)(s)&&(0,d.wt)(l)||(S.warn("Ignoring mipmaps of non power of two sized compressed texture."),i=1);let p=r[1]+4;const h=[];for(let t=0;t<i;++t)f=(s+3>>2)*(l+3>>2)*n,m=new Uint8Array(e,p,f),h.push(m),p+=f,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:h},internalFormat:a,width:c,height:u}}class R extends m.c{constructor(e,t){super(),this.data=e,this.type=4,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new c.Z,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=R.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;(0,a.Wi)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){(0,s.jc)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){(0,s.HK)(e.src)||(0,s.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if((0,a.Wi)(e))return 0;if((0,n.eP)(e)||(0,n.lq)(e))return t.encoding===R.BASIS_ENCODING?function(e){if((0,a.Wi)(T))return e.byteLength;const t=new T.BasisFile(new Uint8Array(e));if(t.getNumImages()<1)return 0;const r=t.getNumLevels(0),o=t.getHasAlpha(),n=t.getImageWidth(0,0),i=t.getImageHeight(0,0);t.close(),t.delete();const s=(0,g.RG)(o?37496:37492),l=(4**r-1)/(3*4**(r-1));return Math.ceil(n*i*s*l)}(e):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?R.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if((0,a.pC)(this.glTexture))return this.glTexture;if((0,a.pC)(this.loadingPromise))return this.loadingPromise;const r=this.data;return(0,a.Wi)(r)?(this.glTexture=new v.Z(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):((0,n.eP)(r)||(0,n.lq)(r))&&this.params.encoding===R.DDS_ENCODING?this.loadFromDDSData(e,r):((0,n.eP)(r)||(0,n.lq)(r))&&this.params.encoding===R.BASIS_ENCODING?this.loadFromBasis(e,r):(0,n.lq)(r)?this.loadFromPixelData(e,r):(0,n.eP)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,a.Wi)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if((0,a.pC)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:o,sourceTexture:n}=this.powerOfTwoStretchInfo;n.setData(this.data),this.drawStretchedTexture(e,t,r,o,n,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:o}=this.glTexture.descriptor;e!==r||t!==o?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,o),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=function(e,t,r,o){const{textureData:n,internalFormat:a,width:i,height:s}=I(r,o);t.samplingMode=n.levels.length>1?9987:9729,t.hasMipmap=n.levels.length>1,t.internalFormat=a,t.width=i,t.height=s;const l=new v.Z(e,t,n);return e.bindTexture(l,0),l}(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromBasis(e,t){return this.loadAsync((()=>async function(e,t,r){(0,a.Wi)(T)&&(T=await M());const o=new T.BasisFile(new Uint8Array(r));if(o.getNumImages()<1)return null;const n=o.getNumLevels(0),i=o.getHasAlpha(),s=o.getImageWidth(0,0),l=o.getImageHeight(0,0),{compressedTextureETC:c,compressedTextureS3TC:d}=e.capabilities,[u,m]=c?i?[1,37496]:[0,37492]:d?i?[3,33779]:[2,33776]:[13,6408];o.startTranscoding();const f=[];for(let e=0;e<n;e++)f.push(new Uint8Array(o.getImageTranscodedSizeInBytes(0,e,u))),o.transcodeImage(f[e],0,e,u,0,0);o.close(),o.delete();const p={...t,samplingMode:n>1?9987:9729,hasMipmap:n>1,internalFormat:m,width:s,height:l};return new v.Z(e,p,{type:"compressed",levels:f})}(e,this.createDescriptor(e),t).then((e=>(this.glTexture=e,e)))))}loadFromPixelData(e,t){(0,f.hu)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new v.Z(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=(0,l.createAbortController)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const o=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(o,o),r}loadFromURL(e,t,r){return this.loadAsync((async o=>{const n=await(0,p.t)(r,{signal:o});return this.loadFromImage(e,n,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async o=>{const n=await(0,u.f)(r,r.src,!1,o);return this.loadFromImage(e,n,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((o=>new Promise(((n,s)=>{const c=()=>{r.removeEventListener("loadeddata",d),r.removeEventListener("error",u),(0,a.pC)(m)&&m.remove()},d=()=>{r.readyState>=2&&(c(),n(this.loadFromImage(e,r,t)))},u=e=>{c(),s(e||new i.Z("Failed to load video"))};r.addEventListener("loadeddata",d),r.addEventListener("error",u);const m=(0,l.onAbort)(o,(()=>u((0,l.createAbortError)())))}))))}loadFromImage(e,t,r){const o=R.getDataDimensions(t);this.params.width=o.width,this.params.height=o.height;const n=this.createDescriptor(e);return n.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,n)||(0,d.wt)(o.width)&&(0,d.wt)(o.height)?(n.width=o.width,n.height=o.height,this.glTexture=new v.Z(e,n,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,o,n,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,o="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,h.Z)(e.gl)&&(t.hasMipmap||!o)}makePowerOfTwoTexture(e,t,r,n,a){const{width:i,height:s}=r,l=(0,d.Sf)(i),c=(0,d.Sf)(s);let u;switch(n.width=l,n.height=c,this.params.powerOfTwoResizeMode){case 2:n.textureCoordinateScaleFactor=[i/l,s/c],u=new v.Z(e,n),u.updateData(0,0,0,i,s,t);break;case 1:case null:case void 0:u=this.stretchToPowerOfTwo(e,t,n,a);break;default:(0,o.Bg)(this.params.powerOfTwoResizeMode)}return n.hasMipmap&&u.generateMipmap(),u}stretchToPowerOfTwo(e,t,r,o){const n=new v.Z(e,r),a=new b.Z(e,{colorTarget:0,depthStencilTarget:0},n),i=new v.Z(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=(0,x.ow)(e);return this.drawStretchedTexture(e,o,a,s,i,n),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:i,framebuffer:a}:(s.dispose(!0),i.dispose(),a.detachColorTexture(),e.bindFramebuffer(null),a.dispose()),n}drawStretchedTexture(e,t,r,o,n,a){e.bindFramebuffer(r);const i=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(n,0),e.bindVAO(o),e.setPipelineState(t.pipeline),e.drawArrays(5,0,(0,g._V)(o,"geometry")),e.bindFramebuffer(null),e.setViewport(i.x,i.y,i.width,i.height)}unload(){if((0,a.pC)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if((0,a.pC)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),(0,a.pC)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}R.DDS_ENCODING="image/vnd-ms.dds",R.BASIS_ENCODING="image/x.basis"},31563:(e,t,r)=>{"use strict";r.d(t,{M:()=>l});r(95830);var o=r(51007),n=r(69595),a=r(8634),i=r(74038),s=r(84570);async function l(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const r=new s.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),l=n.Z.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),c=new i.Z(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:l}),d=new o.Z(e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",{a_pos:0});e.bindProgram(d);const u=new a.Z(e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(u,0),d.setUniform1i("u_texture",0);const m=e.getBoundFramebufferObject(),{x:f,y:p,width:h,height:v}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(c),e.drawArrays(5,0,4);const g=new Uint8Array(4);return r.readPixels(0,0,1,1,6408,5121,g),d.dispose(),c.dispose(!1),l.dispose(),r.dispose(),u.dispose(),e.setViewport(f,p,h,v),e.bindFramebuffer(m),t.src="",255===g[0]}}}]);
//# sourceMappingURL=2175.js.map