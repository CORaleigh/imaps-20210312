(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[7522],{10510:(e,t,r)=>{"use strict";r.d(t,{D:()=>R,b:()=>I});var o=r(85461),i=r(62213),a=r(51219),n=r(61514),s=r(8681),l=r(34658),c=r(76789),d=r(11823),u=r(71613),m=r(31777),p=r(87023),h=r(84530),f=r(82094),v=r(44624),g=r(7261),x=r(74681),b=r(6838),y=r(31163),w=r(34074),T=r(36305),C=r(10832),S=r(72582),M=r(72884),O=r(52369),_=r(62734),A=r(42211);function I(e){const t=new a.kG,r=t.vertex.code,I=t.fragment.code;return t.include(_.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(b.f),t.varyings.add("vpos","vec3"),t.include(s.k,e),t.include(h.f,e),t.include(c.L,e),0!==e.output&&7!==e.output||(t.include(x.O,e),t.include(i.w,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(g.w),t.include(C.Q,e),t.include(w.B,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(f.D,e),t.include(m.q,e),t.include(y.R,e),t.include(d.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(o.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${o.H.float(l.bf)}) {
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
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(n.p,e),t.include(l.sj,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(A.y),I.add(o.H`
      void main() {
        discardBySlice(vpos);
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
    `)),0===e.output&&(t.include(n.p,e),t.include(M.X,e),t.include(S.K,e),t.include(l.sj,e),e.receiveShadows&&t.include(u.h,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(v.j,e),t.include(p.T,e),t.fragment.include(A.y),t.include(O.k,e),I.add(o.H`
      void main() {
        discardBySlice(vpos);
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
    `)),t.include(T.s,e),t}var R=Object.freeze({__proto__:null,build:I})},79733:(e,t,r)=>{"use strict";r.d(t,{R:()=>O,b:()=>M});var o=r(85461),i=r(62213),a=r(51219),n=r(61514),s=r(8681),l=r(34658),c=r(76789),d=r(11823),u=r(71613),m=r(31777),p=r(87023),h=r(84530),f=r(82094),v=r(44624),g=r(7261),x=r(74681),b=r(6838),y=r(31163),w=r(36305),T=r(72582),C=r(72884),S=r(42211);function M(e){const t=new a.kG,r=t.vertex.code,M=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(b.f),t.varyings.add("vpos","vec3"),t.include(s.k,e),t.include(h.f,e),t.include(c.L,e),0!==e.output&&7!==e.output||(t.include(x.O,e),t.include(i.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(g.w),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),t.include(f.D,e),t.include(m.q,e),t.include(y.R,e),t.include(d.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(o.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${o.H.float(l.bf)}) {
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
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(n.p,e),t.include(l.sj,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(S.y),M.add(o.H`
      void main() {
        discardBySlice(vpos);
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
    `)),0===e.output&&(t.include(n.p,e),t.include(C.X,e),t.include(T.K,e),t.include(l.sj,e),e.receiveShadows&&t.include(u.h,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(v.j,e),t.include(p.T,e),t.fragment.include(S.y),M.add(o.H`
      void main() {
        discardBySlice(vpos);
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
    `)),t.include(w.s,e),t}var O=Object.freeze({__proto__:null,build:M})},34175:(e,t,r)=>{"use strict";r.d(t,{G:()=>i});var o=r(32656);class i{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new o.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new i(this.major,this.minor,this._context)}static parse(e,t=""){const[r,a]=e.split("."),n=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(n))throw new o.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!a||!a.match||!a.match(n))throw new o.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),l=parseInt(a,10);return new i(s,l,t)}}},41419:(e,t,r)=>{"use strict";r.d(t,{t:()=>i});var o=r(54721);async function i(e,t){const{data:r}=await(0,o.default)(e,{responseType:"image",...t});return r}},77522:(e,t,r)=>{"use strict";r.r(t),r.d(t,{fetch:()=>gt,gltfToEngineResources:()=>bt,parseUrl:()=>xt});var o=r(59472),i=r(77625),a=r(17387),n=r(67128),s=r(37969),l=r(30663),c=r(12811),d=r(98501),u=r(12608),m=r(36544);const p=m.Z.getLogger("esri.views.3d.support.buffer.math");function h(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],a=r[1],n=r[2],s=r[4],l=r[5],c=r[6],d=r[8],u=r[9],m=r[10],h=r[12],f=r[13],v=r[14],g=e.typedBuffer,x=e.typedBufferStride,b=t.typedBuffer,y=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*x,r=e*y,o=b[r],p=b[r+1],w=b[r+2];g[t]=i*o+s*p+d*w+h,g[t+1]=a*o+l*p+u*w+f,g[t+2]=n*o+c*p+m*w+v}}function f(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],a=r[1],n=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],m=r[8],h=e.typedBuffer,f=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*f,r=e*g,o=v[r],p=v[r+1],x=v[r+2];h[t]=i*o+s*p+d*x,h[t+1]=a*o+l*p+u*x,h[t+2]=n*o+c*p+m*x}}function v(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*a,o=e*s;i[t]=r*n[o],i[t+1]=r*n[o+1],i[t+2]=r*n[o+2]}}Object.freeze({__proto__:null,transformMat4:h,transformMat3:f,scale:v,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*a,o=e*s;i[t]=n[o]>>r,i[t+1]=n[o+1]>>r,i[t+2]=n[o+2]>>r}}});var g=r(69996),x=r(69534),b=r(68500),y=r(80905),w=r(81495),T=r(82976),C=r(30090),S=r(10762),M=r(13405),O=r(34658),_=r(66704),A=r(56140),I=r(23240),R=r(97853),P=r(44801),L=r(11379),F=r(51007),H=r(36904),D=r(89553),z=r(61514),E=r(72023),N=r(8681),B=r(76789),U=r(38391),V=r(71613),G=r(25117),k=r(84530),q=r(44624),W=r(10510);class $ extends R.A{initializeProgram(e){const t=$.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,G.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new F.Z(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),L.i)}bindPass(e,t,r){D.G.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const o=this.configuration.output;7===o&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",C.FZ[t.colorMixMode])),0===o?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",C.FZ[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&q.j.bindUniforms(this.program,t,this.configuration.isSchematic)):1===o||3===o?this.program.setUniform2fv("nearFar",r.camera.nearFar):4===o&&E.b.bindOutputHighlight(e,this.program,r),N.k.bindUniformsForSymbols(this.program,t),B.L.bindUniforms(this.program,t,r),(0,C.bj)(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,i.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;D.G.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&D.G.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&k.f.bindCustomOrigin(this.program,t),z.p.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&V.h.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,o=3===e,i=2===e;return(0,H.sm)({blending:0!==r.output&&7!==r.output||!r.transparent?null:o?_.wu:(0,_.$L)(e),culling:j(r),depthTest:{func:(0,_.$x)(e)},depthWrite:o||i?r.writeDepth&&H.LZ:null,colorWrite:H.BK,stencilWrite:r.sceneHasOcludees?U.s3:null,stencilTest:r.sceneHasOcludees?t?U.eD:U.RY:null,polygonOffset:o||i?null:(0,_.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}$.shader=new I.J(W.D,(()=>r.e(2186).then(r.bind(r,72186))));const j=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class Z extends P.m{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3}}(0,A._)([(0,P.o)({count:8})],Z.prototype,"output",void 0),(0,A._)([(0,P.o)({count:4})],Z.prototype,"alphaDiscardMode",void 0),(0,A._)([(0,P.o)({count:3})],Z.prototype,"doubleSidedMode",void 0),(0,A._)([(0,P.o)()],Z.prototype,"isSchematic",void 0),(0,A._)([(0,P.o)()],Z.prototype,"vertexColors",void 0),(0,A._)([(0,P.o)()],Z.prototype,"offsetBackfaces",void 0),(0,A._)([(0,P.o)()],Z.prototype,"symbolColors",void 0),(0,A._)([(0,P.o)()],Z.prototype,"vvSize",void 0),(0,A._)([(0,P.o)()],Z.prototype,"vvColor",void 0),(0,A._)([(0,P.o)()],Z.prototype,"verticalOffset",void 0),(0,A._)([(0,P.o)()],Z.prototype,"receiveShadows",void 0),(0,A._)([(0,P.o)()],Z.prototype,"slicePlaneEnabled",void 0),(0,A._)([(0,P.o)()],Z.prototype,"sliceHighlightDisabled",void 0),(0,A._)([(0,P.o)()],Z.prototype,"receiveAmbientOcclusion",void 0),(0,A._)([(0,P.o)()],Z.prototype,"screenSizePerspective",void 0),(0,A._)([(0,P.o)()],Z.prototype,"textureAlphaPremultiplied",void 0),(0,A._)([(0,P.o)()],Z.prototype,"hasColorTexture",void 0),(0,A._)([(0,P.o)()],Z.prototype,"usePBR",void 0),(0,A._)([(0,P.o)()],Z.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,A._)([(0,P.o)()],Z.prototype,"hasEmissionTexture",void 0),(0,A._)([(0,P.o)()],Z.prototype,"hasOcclusionTexture",void 0),(0,A._)([(0,P.o)()],Z.prototype,"hasNormalTexture",void 0),(0,A._)([(0,P.o)()],Z.prototype,"instanced",void 0),(0,A._)([(0,P.o)()],Z.prototype,"instancedColor",void 0),(0,A._)([(0,P.o)()],Z.prototype,"instancedDoublePrecision",void 0),(0,A._)([(0,P.o)()],Z.prototype,"vertexTangents",void 0),(0,A._)([(0,P.o)()],Z.prototype,"normalsTypeDerivate",void 0),(0,A._)([(0,P.o)()],Z.prototype,"writeDepth",void 0),(0,A._)([(0,P.o)()],Z.prototype,"sceneHasOcludees",void 0),(0,A._)([(0,P.o)()],Z.prototype,"transparent",void 0),(0,A._)([(0,P.o)()],Z.prototype,"enableOffset",void 0),(0,A._)([(0,P.o)({count:3})],Z.prototype,"cullFace",void 0),(0,A._)([(0,P.o)({count:4})],Z.prototype,"transparencyPassType",void 0);var X=r(79733);class J extends ${initializeProgram(e){const t=J.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,G.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1});return new F.Z(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),L.i)}}J.shader=new I.J(X.R,(()=>r.e(1343).then(r.bind(r,41343))));class K extends S.F5{constructor(e,t){super(t,e,ee),this.supportsEdges=!0,this.techniqueConfig=new Z,this.vertexBufferLayout=K.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?K.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,o=e.symbolColors,i=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(i||a||o)?!!n||s:r?n?l:s:i||a||o?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<_.ve),this.techniqueConfig}intersect(e,t,r,o,i,n,s){if(null!==this.params.verticalOffset){const e=o.camera;(0,a.s)(se,r[12],r[13],r[14]);let t=null;switch(o.viewingMode){case 1:t=(0,a.n)(ae,se);break;case 2:t=(0,a.g)(ae,ie)}let s=0;if(null!==this.params.verticalOffset){const r=(0,a.f)(le,se,e.eye),o=(0,a.l)(r),i=(0,a.a)(r,r,1/o);let n=null;this.params.screenSizePerspective&&(n=(0,a.d)(t,i)),s+=(0,C.Hx)(e,o,this.params.verticalOffset,n,this.params.screenSizePerspective)}(0,a.a)(t,t,s),(0,a.t)(ne,t,o.transform.inverseRotation),i=(0,a.f)(re,i,ne),n=(0,a.f)(oe,n,ne)}(0,C.Bw)(e,t,o,i,n,(0,w.W9)(o.verticalOffset),s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new Q(e)}createBufferWriter(){return new te(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,y.U$)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=(0,y.U$)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class Q extends T.Z{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(J,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting($,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const Y=2.1,ee={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,l.a)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:O.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...S.zh};class te{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.position.length}write(e,t,r,o){(0,M.NK)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,o)}}const re=(0,i.c)(),oe=(0,i.c)(),ie=(0,i.f)(0,0,1),ae=(0,i.c)(),ne=(0,i.c)(),se=(0,i.c)(),le=(0,i.c)();var ce=r(43446),de=r(32656),ue=r(10923),me=r(39105),pe=r(54721),he=r(59351);class fe{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return(0,ue.HK)(e)?((0,me.throwIfAborted)(t),(0,ue.AH)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if((0,o.Wi)(this.streamDataRequester))return(await(0,pe.default)(t,{responseType:ve[e]})).data;const i=await(0,he.q6)(this.streamDataRequester.request(t,e,r));if(!0===i.ok)return i.value;throw(0,me.throwIfAbortError)(i.error),new de.Z("",`Request for resource failed: ${i.error}`)}}const ve={image:"image",binary:"array-buffer",json:"json"};var ge=r(45072);function xe(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*i,c=(r&&r.srcIndex?r.srcIndex:0)*n;for(let e=0;e<s;++e)o[l]=a[c],o[l+1]=a[c+1],l+=i,c+=n}function be(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*i,c=(r&&r.srcIndex?r.srcIndex:0)*n;if((0,ge.U)(t.elementType)){const e=(0,ge.Op)(t.elementType);if((0,ge.B3)(t.elementType))for(let t=0;t<s;++t)o[l]=Math.max(a[c]/e,-1),o[l+1]=Math.max(a[c+1]/e,-1),l+=i,c+=n;else for(let t=0;t<s;++t)o[l]=a[c]/e,o[l+1]=a[c+1]/e,l+=i,c+=n}else xe(e,t,r);return e}Object.freeze({__proto__:null,copy:xe,normalizeIntegerBuffer:be});function ye(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*i,c=(r&&r.srcIndex?r.srcIndex:0)*n;for(let e=0;e<s;++e)o[l]=a[c],o[l+1]=a[c+1],o[l+2]=a[c+2],l+=i,c+=n}Object.freeze({__proto__:null,copy:ye});function we(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*i,c=(r&&r.srcIndex?r.srcIndex:0)*n;for(let e=0;e<s;++e)o[l]=a[c],o[l+1]=a[c+1],o[l+2]=a[c+2],o[l+3]=a[c+3],l+=i,c+=n}function Te(e,t,r,o,i,a){const n=e.typedBuffer,s=e.typedBufferStride,l=a?a.count:e.count;let c=(a&&a.dstIndex?a.dstIndex:0)*s;for(let e=0;e<l;++e)n[c]=t,n[c+1]=r,n[c+2]=o,n[c+3]=i,c+=s}Object.freeze({__proto__:null,copy:we,fill:Te});Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*i,c=(r&&r.srcIndex?r.srcIndex:0)*n;for(let e=0;e<s;++e){for(let e=0;e<9;++e)o[l+e]=a[c+e];l+=i,c+=n}}});Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*i,c=(r&&r.srcIndex?r.srcIndex:0)*n;for(let e=0;e<s;++e){for(let e=0;e<16;++e)o[l+e]=a[c+e];l+=i,c+=n}}});function Ce(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*i,c=(r&&r.srcIndex?r.srcIndex:0)*n;for(let e=0;e<s;++e)o[l]=a[c],l+=i,c+=n},makeDense:Ce});function Se(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,ge.n1)(e.ElementType)))}const Me=m.Z.getLogger("esri.views.3d.glTF");var Oe=r(94588),_e=r(34175),Ae=r(32232),Ie=r(2847);class Re{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const Pe={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Le={pbrMetallicRoughness:Pe,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Fe={ESRI_externalColorMixMode:"tint"},He=(e={})=>{const t={...Pe,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,Oe.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...Fe,...e.extras});return{...Le,...e,pbrMetallicRoughness:t,extras:r}},De={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const ze=1179937895;class Ee{constructor(e,t,r,o,i){this.context=e,this.errorContext=t,this.uri=r,this.json=o,this.glbBuffer=i,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,o,i)=>(t=o||"",r=i||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==o.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==o.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==o.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,o){if((0,ue.HK)(r)){const o=(0,ue.sJ)(r);if("model/gltf-binary"!==o.mediaType)try{const i=JSON.parse(o.isBase64?atob(o.data):o.data);return new Ee(e,t,r,i)}catch{}const i=(0,ue.AH)(r);if(Ee.isGLBData(i))return this.fromGLBData(e,t,r,i)}if(r.endsWith(".gltf")){const i=await e.loadJSON(r,o);return new Ee(e,t,r,i)}const i=await e.loadBinary(r,o);if(Ee.isGLBData(i))return this.fromGLBData(e,t,r,i);const a=await e.loadJSON(r,o);return new Ee(e,t,r,a)}static isGLBData(e){const t=new Re(e);return t.remainingBytes()>=4&&t.readUint32()===ze}static async fromGLBData(e,t,r,o){const i=await Ee.parseGLBData(t,o);return new Ee(e,t,r,i.json,i.binaryData)}static async parseGLBData(e,t){const r=new Re(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const o=r.readUint32(),i=r.readUint32(),a=r.readUint32();e.assert(o===ze,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=a,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==i,"An unsupported GLB container version was detected. Only version 2 is supported.");let n,s,l=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),o=r.readUint32();0===l?(e.assert(1313821514===o,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),n=await ke(r.readUint8Array(t))):1===l?(e.errorUnsupportedIf(5130562!==o,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),l+=1}return n||e.error("No GLB JSON chunk detected."),{json:n,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],o=this.errorContext;if(null==r.uri)return o.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let i=this.bufferCache.get(e);if(!i){const a=await this.context.loadBinary(this.resolveUri(r.uri),t);i=new Uint8Array(a),this.bufferCache.set(e,i),o.assert(i.byteLength===r.byteLength,"Buffer byte lengths should match.")}return i}async getAccessor(e,t){const r=this.json.accessors[e],o=this.errorContext;o.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),o.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const i=this.json.bufferViews[r.bufferView],a=await this.getBuffer(i.buffer,t),n=Ve[r.type],s=Ge[r.componentType],l=n*s,c=i.byteStride||l;return{raw:a.buffer,byteStride:c,byteOffset:a.byteOffset+(i.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===l,componentCount:n,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Ce(this.wrapAccessor(u.D_,r));case 5123:return Ce(this.wrapAccessor(u.av,r));case 5125:return Ce(this.wrapAccessor(u.Nu,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const o=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+qe[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(u.ct,o)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const o=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+qe[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(u.ct,o)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const o=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+qe[o.componentType]),r.errorUnsupportedIf(4!==o.componentCount,"TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed()),new u.ek(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(u.Eu,o):(r.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new u.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new u.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new u.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new u.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new u.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new u.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,Oe.Bg)(e.componentType)}}(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const o=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==o.componentCount&&3!==o.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed()),4===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(u.ek,o);if(5121===o.componentType)return this.wrapAccessor(u.mc,o);if(5123===o.componentType)return this.wrapAccessor(u.v6,o)}else if(3===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(u.ct,o);if(5121===o.componentType)return this.wrapAccessor(u.ne,o);if(5123===o.componentType)return this.wrapAccessor(u.mw,o)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+qe[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const r=this.errorContext;let o=this.materialCache.get(e.material);if(!o){const i=null!=e.material?He(this.json.materials[e.material]):He(),a=i.pbrMetallicRoughness,n=this.hasVertexColors(e);let s,l,c,d,u;a.baseColorTexture&&(r.errorUnsupportedIf(0!==(a.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),s=await this.getTexture(a.baseColorTexture.index,t)),i.normalTexture&&(0!==(i.normalTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(i.normalTexture.index,t)),i.occlusionTexture&&(0!==(i.occlusionTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):c=await this.getTexture(i.occlusionTexture.index,t)),i.emissiveTexture&&(0!==(i.emissiveTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(i.emissiveTexture.index,t)),a.metallicRoughnessTexture&&(0!==(a.metallicRoughnessTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):u=await this.getTexture(a.metallicRoughnessTexture.index,t));const m=null!=e.material?e.material:-1;o={alphaMode:i.alphaMode,alphaCutoff:i.alphaCutoff,color:a.baseColorFactor,doubleSided:!!i.doubleSided,colorTexture:s,normalTexture:l,name:i.name,id:m,occlusionTexture:c,emissiveTexture:d,emissiveFactor:i.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:u,vertexColors:n,ESRI_externalColorMixMode:i.extras.ESRI_externalColorMixMode}}return o}async getTexture(e,t){const r=this.errorContext,o=this.json.textures[e],i=(e=>({...De,...e}))(null!=o.sampler?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const a=this.json.images[o.source];let n=this.textureCache.get(e);if(!n){let o;if(a.uri)o=await this.context.loadImage(this.resolveUri(a.uri),t);else{r.errorUnsupportedIf(null==a.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==a.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[a.bufferView],i=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),o=await async function(e,t){return(0,me.create)(((r,o)=>{const i=new Blob([e],{type:t}),a=URL.createObjectURL(i),n=new Image;n.addEventListener("load",(()=>{URL.revokeObjectURL(a),"decode"in n?n.decode().then((()=>r(n)),(()=>r(n))):r(n)})),n.addEventListener("error",(e=>{URL.revokeObjectURL(a),o(e)})),n.src=a}))}(new Uint8Array(i.buffer,i.byteOffset+(e.byteOffset||0),e.byteLength),a.mimeType)}n={data:o,wrapS:i.wrapS,wrapT:i.wrapT,minFilter:i.minFilter,name:a.name,id:e},this.textureCache.set(e,n)}return n}getNodeTransform(e){if(void 0===e)return Be;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=(0,n.m)((0,c.a)(),r,o.matrix):o.translation||o.rotation||o.scale?(t=(0,c.b)(r),o.translation&&(0,n.t)(t,t,o.translation),o.rotation&&(Ue[3]=(0,Ie.g)(Ue,o.rotation),(0,n.r)(t,t,Ue[3],Ue)),o.scale&&(0,n.s)(t,t,o.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return(0,ue.hF)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=_e.G.parse(this.json.asset.version,"glTF");Ne.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const Ne=new _e.G(2,0,"glTF"),Be=(0,n.k)((0,c.a)(),Math.PI/2),Ue=(0,Ae.a)(),Ve={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Ge={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function ke(e){return(0,me.create)(((t,r)=>{const o=new Blob([e]),i=new FileReader;i.onload=()=>{const e=i.result;t(JSON.parse(e))},i.onerror=e=>{r(e)},i.readAsText(o)}))}const qe={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let We=0;async function $e(e,t,r={}){const i=await Ee.load(e,Ke,t,r),a="gltf_"+We++,n={lods:[],materials:new Map,textures:new Map,meta:je(i)},s=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,i=o.length>1;for(const e of o){const t=r.nodes[e],o=[a(e,0)];if(Ze(t)&&!i){const e=t.extensions.MSFT_lod.ids;o.push(...e.map(((e,t)=>a(e,t+1))))}await(0,me.all)(o)}async function a(o,i){const n=r.nodes[o],s=e.getNodeTransform(o);if(Ke.warnUnsupportedIf(null!=n.weights,"Morph targets are not supported."),null!=n.mesh){const e=r.meshes[n.mesh];for(const r of e.primitives)await t(r,s,i,e.name)}for(const e of n.children||[])await a(e,i)}}(i,(async(e,t,s,l)=>{const d=void 0!==e.mode?e.mode:4,u=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(d);if((0,o.Wi)(u))return void Ke.warnUnsupported("Unsupported primitive mode ("+Ye[d]+"). Skipping primitive.");if(!i.hasPositions(e))return void Ke.warn("Skipping primitive without POSITION vertex attribute.");const m=await i.getMaterial(e,r),p={transform:(0,c.b)(t),attributes:{position:await i.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await i.getIndexData(e,r),primitiveType:u,material:Xe(n,m,a)};i.hasNormals(e)&&(p.attributes.normal=await i.getNormalData(e,r)),i.hasTangents(e)&&(p.attributes.tangent=await i.getTangentData(e,r)),i.hasTextureCoordinates(e)&&(p.attributes.texCoord0=await i.getTextureCoordinates(e,r)),i.hasVertexColors(e)&&(p.attributes.color=await i.getVertexColors(e,r));let h=null;(0,o.pC)(n.meta)&&(0,o.pC)(n.meta.ESRI_lod)&&"screenSpaceRadius"===n.meta.ESRI_lod.metric&&(h=n.meta.ESRI_lod.thresholds[s]),n.lods[s]=n.lods[s]||{parts:[],name:l,lodThreshold:h},n.lods[s].parts.push(p)})),{model:n,meta:{isEsriSymbolResource:s,uri:i.uri},customMeta:{}}}function je(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,o.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}function Ze(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Xe(e,t,r){const o=t=>{const o=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:Je(t.wrapS),t:Je(t.wrapT)},mipmap:Qe.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(o,r)}return o},i=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(i)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(i,r)}return i}function Je(e){if(33071===e||33648===e||10497===e)return e;Ke.error(`Unexpected TextureSampler WrapMode: ${e}`)}const Ke=new class{error(e){throw new de.Z("gltf-loader-error",e)}errorUnsupported(e){throw new de.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Me.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},Qe=[9987,9985],Ye=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];var et=r(6962),tt=r(27898);function rt(e){return"number"==typeof e?function(e){return(0,tt.p)(e)}(e):(0,et.Uc)(e)||(0,et.lq)(e)?new Uint32Array(e):e}var ot=r(82550),it=r(41419);const at=m.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function nt(e,t){const r=await async function(e,t){const r=(0,o.pC)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const o=await(0,he.q6)(t.request(e,"json",r));return!0===o.ok?o.value:((0,me.throwIfAbortError)(o.error),void st(o.error.details.url))}(e,r,t);const i=await(0,he.q6)((0,pe.default)(e,(0,o.Wg)(t)));return!0===i.ok?i.value.data:((0,me.throwIfAbortError)(i.error),void st(i.error))}(e,t);return{resource:r,textures:await dt(r.textureDefinitions,t)}}function st(e){throw new de.Z("",`Request for object resource failed: ${e}`)}function lt(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(at.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(at.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(at.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(at.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else at.warn("Indexed geometries must specify faces"),o=!1;break}default:at.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(at.warn("Geometry requires material"),o=!1);const i=e.params.vertexAttributes;for(const e in i)i[e].values||(at.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function ct(e){const t=(0,g.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,g.pp)(t,r.getBBMin()),(0,g.pp)(t,r.getBBMax())})),t}async function dt(e,t){const r=[];for(const i in e){const a=e[i],n=a.images[0].data;if(!n){at.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+n,l="/textureDefinitions/"+i,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=(0,o.pC)(t)&&t.disableTextures?(0,me.resolve)(null):(0,it.t)(s,t);r.push(d.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:"rgba"===a.channels?a.alphaChannelUsage||"transparency":"none"}))))}const i=await(0,me.all)(r),a={};for(const e of i)a[e.refId]=e;return a}function ut(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function mt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}function pt(e){const t=new Uint32Array(e);for(let r=0;r<e;r++)t[r]=r;return t}const ht=new _e.G(1,2,"wosr");function ft(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],a=r[1],n=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],m=r[8],h=e.typedBuffer,f=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*f,r=e*g,o=v[r],p=v[r+1],x=v[r+2],b=v[r+3];h[t]=i*o+s*p+d*x,h[t+1]=a*o+l*p+u*x,h[t+2]=n*o+c*p+m*x,h[t+3]=b}}function vt(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*a,o=e*s;i[t]=r*n[o],i[t+1]=r*n[o+1],i[t+2]=r*n[o+2],i[t+3]=r*n[o+3]}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,i=r[0],a=r[1],n=r[2],s=r[3],l=r[4],c=r[5],d=r[6],u=r[7],m=r[8],h=r[9],f=r[10],v=r[11],g=r[12],x=r[13],b=r[14],y=r[15],w=e.typedBuffer,T=e.typedBufferStride,C=t.typedBuffer,S=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*T,r=e*S,o=C[r],p=C[r+1],M=C[r+2],O=C[r+3];w[t]=i*o+l*p+m*M+g*O,w[t+1]=a*o+c*p+h*M+x*O,w[t+2]=n*o+d*p+f*M+b*O,w[t+3]=s*o+u*p+v*M+y*O}},transformMat3:ft,scale:vt,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<o;e++){const t=e*a,o=e*s;i[t]=n[o]>>r,i[t+1]=n[o+1]>>r,i[t+2]=n[o+2]>>r,i[t+3]=n[o+3]>>r}}});async function gt(e,t){const r=xt((0,s.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):nt(r.url,t)),a=function(e,t){const r=[],a=[],n=[],s=[],l=e.resource,c=_e.G.parse(l.version||"1.0","wosr");ht.validate(c);const d=l.model.name,u=l.model.geometries,m=l.materialDefinitions,p=e.textures;let h=0;const f=new Map;for(let e=0;e<u.length;e++){const l=u[e];if(!lt(l))continue;const c=mt(l),v=l.params.vertexAttributes,g={};for(const e in v){const t=v[e],r=t.values;g[e]={data:r,size:t.valuesPerElement}}const y={};if("PerAttributeArray"===l.params.topology){const e=pt(g.position.data.length/g.position.size);for(const t in g)y[t]=e}else{const e=l.params.faces;for(const t in e)y[t]=new Uint32Array(e[t].values)}const w=p&&p[c.texture];if(w&&!f.has(c.texture)){const{image:e,params:t}=w,r=new ce.Z(e,d,t);s.push(r),f.set(c.texture,r)}const T=f.get(c.texture),C=T?T.id:void 0;let S=n[c.material]?n[c.material][c.texture]:null;if(!S){const e=m[c.material.substring(c.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=w&&w.alphaChannelUsage,a=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s={ambient:(0,i.d)(e.diffuse),diffuse:(0,i.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:a,textureAlphaMode:w?ut(w.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:C,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};(0,o.pC)(t)&&t.materialParamsMixin&&(0,ot.jB)(s,t.materialParamsMixin),S=new K(s,d),n[c.material]||(n[c.material]={}),n[c.material][c.texture]=S}a.push(S);const M=new b.Z(new x.b(g,y),d);h+=y.position?y.position.length:0,r.push(M)}return{name:d,stageResources:{textures:s,materials:a,geometries:r},pivotOffset:l.model.pivotOffset,boundingBox:ct(r),numberOfVertices:h,lodThreshold:null}}(e,t);return{lods:[a],referenceBoundingBox:a.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const l=await(t.cache?t.cache.loadGLTF(r.url,t):$e(new fe(t.streamDataRequester),r.url,t)),d=(0,o.U2)(l.model.meta,"ESRI_proxyEllipsoid");l.meta.isEsriSymbolResource&&(0,o.pC)(d)&&-1!==l.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const l of s.parts){const s=l.attributes.normal;if((0,o.Wi)(s))return;const d=l.attributes.position,m=d.count,p=(0,i.c)(),h=(0,i.c)(),f=(0,i.c)(),v=Se(u.mc,m),g=Se(u.ct,m),x=(0,n.a)((0,c.a)(),l.transform);for(let o=0;o<m;o++){d.getVec(o,h),s.getVec(o,p),(0,a.i)(h,h,l.transform),(0,a.f)(f,h,t.center),(0,a.C)(f,f,t.radius);const i=f[2],n=(0,a.l)(f),c=Math.min(.45+.55*n*n,1);(0,a.C)(f,f,t.radius),(0,a.i)(f,f,x),(0,a.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,a.e)(f,f,p,i>-1?.2:Math.min(-4*i-3.8,1)),g.setVec(o,f),v.set(o,0,255*c),v.set(o,1,255*c),v.set(o,2,255*c),v.set(o,3,255)}l.attributes.normal=g,l.attributes.color=v}}}(l,d);const m=l.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:l.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},p={...t.materialParamsMixin,treeRendering:l.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=bt(l,m,p,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=bt(l,m,p,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:l.meta.isEsriSymbolResource,isWosr:!1,remove:l.remove}}const h=bt(l,m,p);return{lods:h,referenceBoundingBox:h[0].boundingBox,isEsriSymbolResource:l.meta.isEsriSymbolResource,isWosr:!1,remove:l.remove}}function xt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function bt(e,t,r,i){const a=e.model,n=(0,l.a)(),s=new Array,c=new Map,m=new Map;return a.lods.forEach(((e,l)=>{if(void 0!==i&&l!==i)return;let p=0;const y={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,o.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,g.cS)()};s.push(y),e.parts.forEach((i=>{const s=i.material+(i.attributes.normal?"_normal":"")+(i.attributes.color?"_color":"")+(i.attributes.texCoord0?"_texCoord0":"")+(i.attributes.tangent?"_tangent":""),l=a.materials.get(i.material),w=(0,o.pC)(i.attributes.texCoord0),T=(0,o.pC)(i.attributes.normal);if(!c.has(s)){if(w){if((0,o.pC)(l.textureColor)&&!m.has(l.textureColor)){const e=a.textures.get(l.textureColor),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureColor,new ce.Z(e.data,l.textureColor,t))}if((0,o.pC)(l.textureNormal)&&!m.has(l.textureNormal)){const e=a.textures.get(l.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureNormal,new ce.Z(e.data,l.textureNormal,t))}if((0,o.pC)(l.textureOcclusion)&&!m.has(l.textureOcclusion)){const e=a.textures.get(l.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureOcclusion,new ce.Z(e.data,l.textureOcclusion,t))}if((0,o.pC)(l.textureEmissive)&&!m.has(l.textureEmissive)){const e=a.textures.get(l.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureEmissive,new ce.Z(e.data,l.textureEmissive,t))}if((0,o.pC)(l.textureMetallicRoughness)&&!m.has(l.textureMetallicRoughness)){const e=a.textures.get(l.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureMetallicRoughness,new ce.Z(e.data,l.textureMetallicRoughness,t))}}const e=Math.pow(l.color[0],1/Y),n=Math.pow(l.color[1],1/Y),d=Math.pow(l.color[2],1/Y),u=Math.pow(l.emissiveFactor[0],1/Y),p=Math.pow(l.emissiveFactor[1],1/Y),h=Math.pow(l.emissiveFactor[2],1/Y);c.set(s,new K({...t,transparent:"BLEND"===l.alphaMode,textureAlphaMode:yt(l.alphaMode),textureAlphaCutoff:l.alphaCutoff,diffuse:[e,n,d],ambient:[e,n,d],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?0:2,vertexColors:!!i.attributes.color,vertexTangents:!!i.attributes.tangent,normals:T?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,o.pC)(l.textureColor)&&w?m.get(l.textureColor).id:void 0,colorMixMode:l.colorMixMode,normalTextureId:(0,o.pC)(l.textureNormal)&&w?m.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:(0,o.pC)(l.textureOcclusion)&&w?m.get(l.textureOcclusion).id:void 0,emissiveTextureId:(0,o.pC)(l.textureEmissive)&&w?m.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.pC)(l.textureMetallicRoughness)&&w?m.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[u,p,h],mrrFactors:[l.metallicFactor,l.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r},s))}const C=function(e,t){switch(t){case 4:return rt(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,o=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let i=0;i<r;i+=1)if(i%2==0){const r=e[i],a=e[i+1],n=e[i+2];o[t++]=r,o[t++]=a,o[t++]=n}else{const r=e[i+1],a=e[i],n=e[i+2];o[t++]=r,o[t++]=a,o[t++]=n}}return o}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const r=t-2,o=new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}{const t=e[0];let i=e[1],a=0;for(let n=0;n<r;++n){const r=e[n+2];o[a++]=t,o[a++]=i,o[a++]=r,i=r}return o}}(e)}}(i.indices||i.attributes.position.count,i.primitiveType),S={},M={},O=i.attributes.position.count,_=Se(u.ct,O);if(h(_,i.attributes.position,i.transform),M.position={data:_.typedBuffer,size:_.elementCount},S.position=C,(0,o.pC)(i.attributes.normal)){const e=Se(u.ct,O);(0,d.n)(n,i.transform),f(e,i.attributes.normal,n),M.normal={data:e.typedBuffer,size:e.elementCount},S.normal=C}if((0,o.pC)(i.attributes.tangent)){const e=Se(u.ek,O);(0,d.n)(n,i.transform),ft(e,i.attributes.tangent,n),M.tangent={data:e.typedBuffer,size:e.elementCount},S.tangent=C}if((0,o.pC)(i.attributes.texCoord0)){const e=Se(u.Eu,O);be(e,i.attributes.texCoord0),M.uv0={data:e.typedBuffer,size:e.elementCount},S.uv0=C}if((0,o.pC)(i.attributes.color)){const e=Se(u.mc,O);if(4===i.attributes.color.elementCount)i.attributes.color instanceof u.ek?vt(e,i.attributes.color,255):i.attributes.color instanceof u.mc?we(e,i.attributes.color):i.attributes.color instanceof u.v6&&vt(e,i.attributes.color,1/256);else{Te(e,255,255,255,255);const t=new u.ne(e.buffer,0,4);i.attributes.color instanceof u.ct?v(t,i.attributes.color,255):i.attributes.color instanceof u.ne?ye(t,i.attributes.color):i.attributes.color instanceof u.mw&&v(t,i.attributes.color,1/256)}M.color={data:e.typedBuffer,size:e.elementCount},S.color=C}const A=new b.Z(new x.b(M,S),`gltf_${e.name}_${p++}`);y.stageResources.geometries.push(A),y.stageResources.materials.push(c.get(s)),w&&((0,o.pC)(l.textureColor)&&y.stageResources.textures.push(m.get(l.textureColor)),(0,o.pC)(l.textureNormal)&&y.stageResources.textures.push(m.get(l.textureNormal)),(0,o.pC)(l.textureOcclusion)&&y.stageResources.textures.push(m.get(l.textureOcclusion)),(0,o.pC)(l.textureEmissive)&&y.stageResources.textures.push(m.get(l.textureEmissive)),(0,o.pC)(l.textureMetallicRoughness)&&y.stageResources.textures.push(m.get(l.textureMetallicRoughness))),y.numberOfVertices+=O;const I=A.boundingInfo;(0,g.pp)(y.boundingBox,I.getBBMin()),(0,g.pp)(y.boundingBox,I.getBBMax())}))})),s}function yt(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}},31777:(e,t,r)=>{"use strict";r.d(t,{q:()=>i});var o=r(85461);function i(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(o.H`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(o.H`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):e.vertex.code.add(o.H`
      void forwardLinearDepth() {}
    `)}},7261:(e,t,r)=>{"use strict";r.d(t,{w:()=>i});var o=r(85461);function i(e){e.vertex.code.add(o.H`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},84530:(e,t,r)=>{"use strict";r.d(t,{f:()=>l});var o,i=r(77625),a=r(85461),n=r(71061),s=r(25117);function l(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(s.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[a.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,a.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?a.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,a.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,a.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?a.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:a.H``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(o=l||(l={})).Uniforms=class{},o.bindCustomOrigin=function(e,t){(0,n.po)(t,c,d,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",d)};const c=(0,i.c)(),d=(0,i.c)()},74681:(e,t,r)=>{"use strict";r.d(t,{O:()=>a});var o=r(85461);function i(e){const t=o.H`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function a(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(o.H`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(i),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(o.H`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}},6838:(e,t,r)=>{"use strict";r.d(t,{f:()=>i});var o=r(85461);function i(e){e.attributes.add("position","vec3"),e.vertex.code.add(o.H`
    vec3 positionModel() { return position; }
  `)}},31163:(e,t,r)=>{"use strict";r.d(t,{R:()=>a});var o=r(85461);function i(e){e.vertex.code.add(o.H`
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
  `)}function a(e,t){t.symbolColor?(e.include(i),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(o.H`
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
    `)}},82094:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var o=r(85461);function i(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(o.H`
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
    `)}},34074:(e,t,r)=>{"use strict";r.d(t,{B:()=>m});var o,i=r(85461),a=r(74681),n=r(77625),s=r(30663),l=r(12811),c=r(25117),d=r(6838);function u(e,t){e.include(d.f),e.vertex.include(c.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(i.H`
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
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(i.H`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function m(e,t){0===t.normalType||1===t.normalType?(e.include(a.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(i.H`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(i.H`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?i.H`normalize(vPositionWorldCameraRelative);`:i.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(i.H`
      void forwardNormal() {}
    `)}(o=u||(u={})).ModelTransform=class{constructor(){this.worldFromModel_RS=(0,s.a)(),this.worldFromModel_TH=(0,n.c)(),this.worldFromModel_TL=(0,n.c)()}},o.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,n.c)(),this.worldFromView_TL=(0,n.c)(),this.viewFromCameraRelative_RS=(0,s.a)(),this.projFromView=(0,l.a)()}},o.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},o.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)},(m||(m={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},51206:(e,t,r)=>{"use strict";r.d(t,{i:()=>n});var o=r(85461),i=r(82094);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`
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
      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;
      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;

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
  `)}function n(e,t){e.include(i.D,t),e.fragment.code.add(o.H`
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
    `))}},76789:(e,t,r)=>{"use strict";r.d(t,{L:()=>a});var o=r(85461),i=r(91930);function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(i.c),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(o.H`
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
    `)}function n(e,t,r,o=s){return o.screenLength=e.screenLength,o.perDistance=Math.tan(.5*t)/(.5*r),o.minWorldLength=e.minWorldLength,o.maxWorldLength=e.maxWorldLength,o}(a||(a={})).bindUniforms=function(e,t,r){if(!t.verticalOffset)return;const o=n(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),i=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",o.screenLength*i,o.perDistance,o.minWorldLength,o.maxWorldLength)};const s={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},36305:(e,t,r)=>{"use strict";r.d(t,{s:()=>p});var o=r(85461),i=r(62213),a=r(61514),n=r(72023),s=r(8681),l=r(34658),c=r(83488),d=r(82094),u=r(74681),m=r(34074);function p(e,t){const r=e.vertex.code,p=e.fragment.code;1!==t.output&&3!==t.output||(e.include(i.w,{linearDepth:!0}),e.include(d.D,t),e.include(s.k,t),e.include(c.F,t),e.include(a.p,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(o.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(l.sj,t),p.add(o.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?o.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(i.w,{linearDepth:!1}),e.include(u.O,t),e.include(m.B,t),e.include(d.D,t),e.include(s.k,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(o.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?o.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.p,t),e.include(l.sj,t),p.add(o.H`
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
    `)),4===t.output&&(e.include(i.w,{linearDepth:!1}),e.include(d.D,t),e.include(s.k,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(o.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.p,t),e.include(l.sj,t),e.include(n.b),p.add(o.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?o.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},10832:(e,t,r)=>{"use strict";r.d(t,{Q:()=>a});var o=r(85461),i=r(51206);function a(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(o.H`
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
  `)),0!==t.attributeTextureCoordinates&&(e.include(i.i,t),r.code.add(o.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},72582:(e,t,r)=>{"use strict";r.d(t,{K:()=>i});var o=r(85461);function i(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(o.H`
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
    `)}},72884:(e,t,r)=>{"use strict";r.d(t,{X:()=>d});var o=r(85461),i=r(9295),a=r(71613),n=r(87023),s=r(72582);function l(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(o.H`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===i?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(o.H`
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
    `)):2===i&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(o.H`
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
  `)}function d(e,t){const r=e.fragment;e.include(c),e.include(s.K,t),0!==t.pbrMode&&e.include(n.T,t),e.include(l,t),t.receiveShadows&&e.include(a.h,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(i.e),r.code.add(o.H`
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
    `)))}},52369:(e,t,r)=>{"use strict";r.d(t,{k:()=>i});var o=r(85461);function i(e,t){const r=e.fragment;r.code.add(o.H`
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
    `)}},87023:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});var o=r(85461),i=r(9295);function a(e){const t=e.fragment.code;t.add(o.H`
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
    `)}function n(e,t){const r=e.fragment.code;e.include(i.e),3===t.pbrMode||4===t.pbrMode?(r.add(o.H`
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
    `))}},44624:(e,t,r)=>{"use strict";r.d(t,{j:()=>n});var o=r(85461),i=r(69236),a=r(51206);(0,i.f)(0,.6,.2);function n(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(a.i,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(o.H`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(o.H`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(o.H`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(o.H`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(o.H`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(o.H`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(o.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(o.H`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}(n||(n={})).bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},71613:(e,t,r)=>{"use strict";r.d(t,{h:()=>n});var o,i=r(85461),a=r(61017);function n(e){e.fragment.include(a.n),e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("shadowMapNum","int"),e.fragment.uniforms.add("shadowMapDistance","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(i.H`
    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      float halfPixelSize = depthHalfPixelSz;
      vec4 distance = shadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      if (i >= shadowMapNum) { return 0.0; }

      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;

      // vertex completely outside? -> no shadow
      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;

      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }
  `)}(o=n||(n={})).bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},o.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},o.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},25117:(e,t,r)=>{"use strict";r.d(t,{$:()=>v,I:()=>g});var o=r(95830),i=r(85461),a=r(59472),n=(r(33655),r(77625)),s=r(51007),l=r(56469),c=r(69595),d=r(74038),u=r(71061),m=r(84570);r(89930);class p{constructor(e){this.context=e,this._doublePrecisionRequiresObfuscation=null}get doublePrecisionRequiresObfuscation(){if((0,a.Wi)(this._doublePrecisionRequiresObfuscation)){const e=f(this.context,!1),t=f(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let h=null;function f(e,t){const r=new m.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),o=c.Z.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),i=new d.Z(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:o}),a=(0,n.f)(5633261.287538229,2626832.878767164,1434988.0495278358),p=(0,n.f)(5633271.46742708,2626873.6381334523,1434963.231608387),h=function(r,o){const i=new s.Z(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),a=new Float32Array(6);(0,u.LF)(r,a,3);const n=new Float32Array(6);return(0,u.LF)(o,n,3),e.bindProgram(i),i.setUniform3f("u_highA",a[0],a[2],a[4]),i.setUniform3f("u_lowA",a[1],a[3],a[5]),i.setUniform3f("u_highB",n[0],n[2],n[4]),i.setUniform3f("u_lowB",n[1],n[3],n[5]),i}(a,p),f=e.getBoundFramebufferObject(),{x:v,y:g,width:x,height:b}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(i),e.drawArrays(5,0,4);const y=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,y),h.dispose(),i.dispose(!1),o.dispose(),r.dispose(),e.setViewport(v,g,x,b),e.bindFramebuffer(f);const w=(a[2]-p[2])/25,T=(0,l.vP)(y);return Math.abs(w-T)}function v({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`
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
    `):e.add(i.H`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function g(e){return!!(0,o.Z)("force-double-precision-obfuscation")||function(e){return((0,a.Wi)(h)||h.context!==e)&&(h=new p(e)),h}(e).doublePrecisionRequiresObfuscation}},62734:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});r(95830);var o=r(85461);function i(e,t){o.H`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},42211:(e,t,r)=>{"use strict";r.d(t,{y:()=>a});var o=r(85461),i=r(63230);function a(e){e.include(i.Y),e.code.add(o.H`
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
  `)}},91930:(e,t,r)=>{"use strict";r.d(t,{c:()=>a});var o=r(85461),i=r(30090);function a(e){e.vertex.code.add(o.H`
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
  `)}(a||(a={})).bindUniforms=function(e,t){if(t.screenSizePerspective){(0,i.bj)(t.screenSizePerspective,e,"screenSizePerspective");const r=t.screenSizePerspectiveAlignment||t.screenSizePerspective;(0,i.bj)(r,e,"screenSizePerspectiveAlignment")}}},68397:(e,t,r)=>{"use strict";r.d(t,{G:()=>o});const o={DIFFUSE:0,NORMAL:1,EMISSION:2,OCCLUSION:3,METALLIC_ROUGHNESS:4,SSAO:6,SHADOW_MAP:7}},82976:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(59472),i=r(68397),a=r(26701);const n=class extends a.Z{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(e,t){(0,o.pC)(this._texture)&&(t.setUniform1i("tex",i.G.DIFFUSE),e.bindTexture(this._texture.glTexture,i.G.DIFFUSE)),(0,o.pC)(this._textureNormal)&&(t.setUniform1i("normalTexture",i.G.NORMAL),e.bindTexture(this._textureNormal.glTexture,i.G.NORMAL)),(0,o.pC)(this._textureEmissive)&&(t.setUniform1i("texEmission",i.G.EMISSION),e.bindTexture(this._textureEmissive.glTexture,i.G.EMISSION)),(0,o.pC)(this._textureOcclusion)&&(t.setUniform1i("texOcclusion",i.G.OCCLUSION),e.bindTexture(this._textureOcclusion.glTexture,i.G.OCCLUSION)),(0,o.pC)(this._textureMetallicRoughness)&&(t.setUniform1i("texMetallicRoughness",i.G.METALLIC_ROUGHNESS),e.bindTexture(this._textureMetallicRoughness.glTexture,i.G.METALLIC_ROUGHNESS))}bindTextureScale(e,t){const r=(0,o.pC)(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?t.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):t.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!(0,o.Wi)(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){void 0!==e&&(this._textureIDs.delete(e),this._textureRepository.release(e))}}},43446:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var o=r(94588),i=r(6962),a=r(59472),n=r(32656),s=r(10923),l=r(39105),c=r(35470),d=r(33655),u=r(4094),m=r(41419),p=r(56469),h=r(8634),f=r(57319),v=r(10346),g=r(15853),x=r(84570),b=r(6091);const y=r(36544).Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function w(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const T=w("DXT1"),C=w("DXT3"),S=w("DXT5");function M(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return y.error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return y.error("Unsupported format, must contain a FourCC code"),null;const o=r[21];let i,a;switch(o){case T:i=8,a=33776;break;case C:i=16,a=33778;break;case S:i=16,a=33779;break;default:return y.error("Unsupported FourCC code:",(n=o,String.fromCharCode(255&n,n>>8&255,n>>16&255,n>>24&255))),null}var n;let s=1,l=r[4],c=r[3];0==(3&l)&&0==(3&c)||(y.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const u=l,m=c;let p,h;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7])),1===s||(0,d.wt)(l)&&(0,d.wt)(c)||(y.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let f=r[1]+4;const v=[];for(let t=0;t<s;++t)h=(l+3>>2)*(c+3>>2)*i,p=new Uint8Array(e,f,h),v.push(p),f+=h,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:v},internalFormat:a,width:u,height:m}}class O{constructor(e,t,r){this.data=e,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new c.Z,this.data=e,this.id=O.idGen.gen(t),this.params=r||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=O.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;(0,a.Wi)(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){(0,s.jc)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){(0,s.HK)(e.src)||(0,s.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,t){if((0,a.Wi)(e))return 0;if((0,i.eP)(e)||(0,i.lq)(e))return e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?O.getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,t){if((0,a.pC)(this.glTexture))return this.glTexture;if((0,a.pC)(this.loadingPromise))return this.loadingPromise;const r=this.data;return(0,a.Wi)(r)?(this.glTexture=new h.Z(e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof r?this.loadFromURL(e,t,r):r instanceof Image?this.loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this.loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this.loadFromImage(e,r,t):((0,i.eP)(r)||(0,i.lq)(r))&&this.params.encoding===O.DDS_ENCODING?this.loadFromDDSData(e,r):(0,i.lq)(r)?this.loadFromPixelData(e,r):(0,i.eP)(r)?this.loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,a.Wi)(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if((0,a.pC)(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:o,sourceTexture:i}=this.powerOfTwoStretchInfo;i.setData(this.data),this.drawStretchedTexture(e,t,r,o,i,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:o}=this.glTexture.descriptor;e!==r||t!==o?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,o),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=function(e,t,r,o){const{textureData:i,internalFormat:a,width:n,height:s}=M(r,o);t.samplingMode=i.levels.length>1?9987:9729,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=n,t.height=s;const l=new h.Z(e,t,i);return e.bindTexture(l,0),l}(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromPixelData(e,t){(0,p.hu)(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new h.Z(e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=(0,l.createAbortController)();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const o=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(o,o),r}loadFromURL(e,t,r){return this.loadAsync((async o=>{const i=await(0,m.t)(r,{signal:o});return this.loadFromImage(e,i,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async o=>{const i=await(0,u.f)(r,r.src,!1,o);return this.loadFromImage(e,i,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((o=>(0,l.create)(((i,s)=>{const c=()=>{r.removeEventListener("loadeddata",d),r.removeEventListener("error",u),(0,a.pC)(m)&&m.remove()},d=()=>{r.readyState>=2&&(c(),i(this.loadFromImage(e,r,t)))},u=e=>{c(),s(e||new n.Z("Failed to load video"))};r.addEventListener("loadeddata",d),r.addEventListener("error",u);const m=(0,l.onAbort)(o,(()=>u((0,l.createAbortError)())))}))))}loadFromImage(e,t,r){const o=O.getDataDimensions(t);this.params.width=o.width,this.params.height=o.height;const i=this.createDescriptor(e);return i.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,i)||(0,d.wt)(o.width)&&(0,d.wt)(o.height)?(i.width=o.width,i.height=o.height,this.glTexture=new h.Z(e,i,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,o,i,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,o="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,b.Z)(e.gl)&&(t.hasMipmap||!o)}makePowerOfTwoTexture(e,t,r,i,a){const{width:n,height:s}=r,l=(0,d.Sf)(n),c=(0,d.Sf)(s);let u;switch(i.width=l,i.height=c,this.params.powerOfTwoResizeMode){case 2:i.textureCoordinateScaleFactor=[n/l,s/c],u=new h.Z(e,i),u.updateData(0,0,0,n,s,t);break;case 1:case null:case void 0:u=this.stretchToPowerOfTwo(e,t,i,a);break;default:(0,o.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&u.generateMipmap(),u}stretchToPowerOfTwo(e,t,r,o){const i=new h.Z(e,r),a=new x.Z(e,{colorTarget:0,depthStencilTarget:0},i),n=new h.Z(e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=(0,v.ow)(e);return this.drawStretchedTexture(e,o,a,s,n,i),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:a}:(s.dispose(!0),n.dispose(),a.detachColorTexture(),e.bindFramebuffer(null),a.dispose()),i}drawStretchedTexture(e,t,r,o,i,a){e.bindFramebuffer(r);const n=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=t.program;e.bindProgram(s),s.setUniform4f("color",1,1,1,1),s.setUniform1i("tex",0),e.bindTexture(i,0),e.bindVAO(o),e.setPipelineState(t.pipeline),e.drawArrays(5,0,(0,f._V)(o,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if((0,a.pC)(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if((0,a.pC)(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),(0,a.pC)(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}O.idGen=new g.A,O.DDS_ENCODING="image/vnd-ms.dds";const _=O},81495:(e,t,r)=>{"use strict";r.d(t,{om:()=>x,xM:()=>T,LV:()=>w,yn:()=>b,cy:()=>_,W9:()=>O});var o=r(59472),i=r(77625),a=r(17387),n=r(67128),s=r(30663),l=r(12811),c=r(32232),d=r(38256),u=r(98501),m=r(34353),p=r(2847),h=r(69236),f=(r(55534),r(13633)),v=r(88),g=r(88909);class x{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=2}}class b{constructor(){this._transform=(0,l.a)(),this._transformInverse=new y({value:this._transform},n.a,l.a),this._transformInverseTranspose=new y(this._transformInverse,n.b,l.a),this._transformTranspose=new y({value:this._transform},n.b,l.a),this._transformInverseRotation=new y({value:this._transform},u.b,s.a)}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){(0,n.c)(this._transform,e)}multiplyTransform(e){(0,n.m)(this._transform,this._transform,e)}set(e){(0,n.c)(this._transform,e),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,t){this.setTransformMatrix(e),this.multiplyTransform(t),this.invalidateLazyTransforms()}}class y{constructor(e,t,r){this.original=e,this.update=t,this.dirty=!0,this.transform=r()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class w{constructor(){this.min=new T,this.max=new T,this.hud=new T,this.ground=new T}init(e){this.min.init(e),this.max.init(e),this.hud.init(e),this.ground.init(e),this.all=[]}}class T{constructor(e){this.normal=(0,i.c)(),this.transformation=(0,l.a)(),this._ray=v.kx.create(),this.init(e)}get ray(){return this._ray}get hasIntersectionPoint(){return null!=this.dist}get distanceInRenderSpace(){if(null!=this.dist)return(0,a.a)(A,this.ray.direction,this.dist),(0,a.l)(A)}getIntersectionPoint(e){return!!this.hasIntersectionPoint&&((0,a.a)(A,this.ray.direction,this.dist),(0,a.b)(e,this.ray.origin,A),!0)}getTransformedNormal(e){return(0,a.g)(I,this.normal),I[3]=0,(0,m.t)(I,I,this.transformation),(0,a.g)(e,I),(0,a.n)(e,e),e}init(e){this.dist=void 0,this.target=void 0,this.name=void 0,this.drapedLayerOrder=void 0,this.drapedLayerGraphicOrder=void 0,this.center=null,this.geometryId=null,this.triangleNr=null,this.intersector="Stage",e?v.kx.copy(e,this._ray):this._ray=v.kx.create()}set(e,t,r,o,s,l,c,d,u,m){e instanceof g.Z&&(e={type:"stage",obj:e}),this.dist=r,(0,a.g)(this.normal,o),(0,n.c)(this.transformation,s),this.target=e,this.name=t,this.drapedLayerOrder=l,this.center=c?(0,i.b)(c):null,this.geometryId=d,this.triangleNr=u,this.drapedLayerGraphicOrder=m}copyFrom(e){v.kx.copy(e._ray,this._ray),this.dist=e.dist,this.target=e.target,this.name=e.name,this.drapedLayerOrder=e.drapedLayerOrder,this.center=e.center?(0,i.b)(e.center):null,this.geometryId=e.geometryId,this.triangleNr=e.triangleNr,this.intersector=e.intersector,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,(0,a.g)(this.normal,e.normal),(0,n.c)(this.transformation,e.transformation)}toOwner(e){if(!this.target)return null;switch(this.target.type){case"stage":return C(this.target.obj.metadata,e);case"external":switch(this.intersector){case"PointRenderer":return function(e,t){const r=e.metadata.layerUid;return null!=r?t.map.findLayerByUid(r):null}(this.target,e);case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return C(this.target.metadata,e);case"TerrainRenderer":return e.map&&e.map.ground}}return null}toGraphic(e){if(!this.target)return null;switch(this.target.type){case"stage":return S(this.target.obj.metadata,e);case"external":switch(this.intersector){case"PointRenderer":return this.target.metadata.createGraphic();case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return S(this.target.metadata,e)}}return null}}function C(e,t){return(0,o.Wi)(e)||null==e.layerUid?null:(0,o.pC)(t.graphicsView)&&e.layerUid===t.graphicsView.mockLayerId?t.graphics:t.map.findLayerByUid(e.layerUid)}function S(e,t){if((0,o.Wi)(e))return null;const r=C(e,t);if((0,o.Wi)(r))return null;if(r===t.graphics)return(0,o.pC)(t.graphicsView)?(0,o.Wg)(t.graphicsView.getGraphicFromGraphicUid(e.graphicUid)):null;const i=t.allLayerViews.find((e=>e.layer===r));return i?function(e,t){return!e||e.suspended?null:"getGraphicFromIntersectorMetadata"in e&&t?e.getGraphicFromIntersectorMetadata(t):"getGraphicFromGraphicUid"in e&&null!=t.graphicUid?e.getGraphicFromGraphicUid(t.graphicUid):null}(i,e):null}const M=new class{constructor(e=0){this.offset=e,this.sphere=(0,f.c)(),this.tmpVertex=(0,i.c)()}applyToVertex(e,t,r){const o=this.objectTransform.transform;let i=o[0]*e+o[4]*t+o[8]*r+o[12],a=o[1]*e+o[5]*t+o[9]*r+o[13],n=o[2]*e+o[6]*t+o[10]*r+o[14];const s=this.offset/Math.sqrt(i*i+a*a+n*n);i+=i*s,a+=a*s,n+=n*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*i+l[4]*a+l[8]*n+l[12],this.tmpVertex[1]=l[1]*i+l[5]*a+l[9]*n+l[13],this.tmpVertex[2]=l[2]*i+l[6]*a+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*o,t[1]+=t[1]*o,t[2]+=t[2]*o}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e,t){const r=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),o=this.offset/r;return this.sphere.center[0]=t[0]+t[0]*o,this.sphere.center[1]=t[1]+t[1]*o,this.sphere.center[2]=t[2]+t[2]*o,this.sphere.radius=e+e*this.offset/r,this.sphere}};function O(e){return(0,o.pC)(e)?(M.offset=e,M):null}new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=(0,i.c)(),this.mbs=(0,d.a)(),this.obb={center:(0,i.c)(),halfSize:(0,h.c)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const o=e,i=t,a=r+this.componentLocalOriginLength,n=this.offset/Math.sqrt(o*o+i*i+a*a);return this.tmpVertex[0]=e+o*n,this.tmpVertex[1]=t+i*n,this.tmpVertex[2]=r+a*n,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],o=e[2]+this.componentLocalOriginLength,i=e[3],a=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+o*o);e[0]+=t*s,e[1]+=r*s,e[2]+=o*s;const l=this.offset/Math.sqrt(i*i+a*a+n*n);return e[3]+=i*l,e[4]+=a*l,e[5]+=n*l,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,(0,a.q)(this.obb.halfSize,e.halfSize,e.quaternion),(0,a.b)(this.obb.halfSize,this.obb.halfSize,e.center);const o=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*o,this.obb.halfSize[1]+=this.obb.halfSize[1]*o,this.obb.halfSize[2]+=this.obb.halfSize[2]*o,(0,a.f)(this.obb.halfSize,this.obb.halfSize,e.center),(0,p.c)(R,e.quaternion),(0,a.q)(this.obb.halfSize,this.obb.halfSize,R),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,i.c)()}applyToVertex(e,t,r){const o=e+this.localOrigin[0],i=t+this.localOrigin[1],a=r+this.localOrigin[2],n=this.offset/Math.sqrt(o*o+i*i+a*a);return this.tmpVertex[0]=e+o*n,this.tmpVertex[1]=t+i*n,this.tmpVertex[2]=r+a*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],o=e[2]+this.localOrigin[2],i=e[3]+this.localOrigin[0],a=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+o*o);e[0]+=t*s,e[1]+=r*s,e[2]+=o*s;const l=this.offset/Math.sqrt(i*i+a*a+n*n);return e[3]+=i*l,e[4]+=a*l,e[5]+=n*l,e}};const _="terrain",A=((0,i.c)(),(0,i.c)()),I=(0,d.a)(),R=(0,c.a)()}}]);
//# sourceMappingURL=7522.js.map