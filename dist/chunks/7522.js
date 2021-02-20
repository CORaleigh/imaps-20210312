(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[7522],{10510:(e,t,o)=>{"use strict";o.d(t,{D:()=>P,b:()=>R});var r=o(85461),i=o(62213),a=o(51219),n=o(61514),s=o(8681),l=o(34658),c=o(76789),d=o(11823),u=o(71613),m=o(31777),p=o(87023),f=o(84530),v=o(82094),h=o(44624),g=o(7261),x=o(74681),b=o(6838),y=o(31163),C=o(34074),w=o(36305),T=o(10832),M=o(72582),S=o(72884),_=o(52369),O=o(62734),A=o(42211);function R(e){const t=new a.kG,o=t.vertex.code,R=t.fragment.code;return t.include(O.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(b.f),t.varyings.add("vpos","vec3"),t.include(s.k,e),t.include(f.f,e),t.include(c.L,e),0!==e.output&&7!==e.output||(t.include(x.O,e),t.include(i.w,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(g.w),t.include(T.Q,e),t.include(C.B,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(v.D,e),t.include(m.q,e),t.include(y.R,e),t.include(d.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(r.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${r.H.float(l.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?r.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(n.p,e),t.include(l.sj,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(A.y),R.add(r.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?r.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:r.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?r.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n.p,e),t.include(S.X,e),t.include(M.K,e),t.include(l.sj,e),e.receiveShadows&&t.include(u.h,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(h.j,e),t.include(p.T,e),t.fragment.include(A.y),t.include(_.k,e),R.add(r.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?r.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:r.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?r.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:r.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?r.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?r.H`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?r.H`vec3 normalGround = normalize(vpos + localOrigin);`:r.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:r.H``}
        ${1===e.pbrMode||2===e.pbrMode?r.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(w.s,e),t}var P=Object.freeze({__proto__:null,build:R})},79733:(e,t,o)=>{"use strict";o.d(t,{R:()=>_,b:()=>S});var r=o(85461),i=o(62213),a=o(51219),n=o(61514),s=o(8681),l=o(34658),c=o(76789),d=o(11823),u=o(71613),m=o(31777),p=o(87023),f=o(84530),v=o(82094),h=o(44624),g=o(7261),x=o(74681),b=o(6838),y=o(31163),C=o(36305),w=o(72582),T=o(72884),M=o(42211);function S(e){const t=new a.kG,o=t.vertex.code,S=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(b.f),t.varyings.add("vpos","vec3"),t.include(s.k,e),t.include(f.f,e),t.include(c.L,e),0!==e.output&&7!==e.output||(t.include(x.O,e),t.include(i.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(g.w),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),t.include(v.D,e),t.include(m.q,e),t.include(y.R,e),t.include(d.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(r.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${r.H.float(l.bf)}) {
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
      `)),7===e.output&&(t.include(n.p,e),t.include(l.sj,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(M.y),S.add(r.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?r.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:r.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?r.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n.p,e),t.include(T.X,e),t.include(w.K,e),t.include(l.sj,e),e.receiveShadows&&t.include(u.h,e),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(h.j,e),t.include(p.T,e),t.fragment.include(M.y),S.add(r.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?r.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:r.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?r.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${r.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?r.H`vec3 normalGround = normalize(vpos + localOrigin);`:r.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:r.H``}
        ${1===e.pbrMode||2===e.pbrMode?r.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(C.s,e),t}var _=Object.freeze({__proto__:null,build:S})},77522:(e,t,o)=>{"use strict";o.r(t),o.d(t,{fetch:()=>gt,gltfToEngineResources:()=>bt,parseUrl:()=>xt});var r=o(59472),i=o(77625),a=o(17387),n=o(67128),s=o(37969),l=o(30663),c=o(12811),d=o(98501),u=o(12608),m=o(36544);const p=m.Z.getLogger("esri.views.3d.support.buffer.math");function f(e,t,o){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const r=e.count,i=o[0],a=o[1],n=o[2],s=o[4],l=o[5],c=o[6],d=o[8],u=o[9],m=o[10],f=o[12],v=o[13],h=o[14],g=e.typedBuffer,x=e.typedBufferStride,b=t.typedBuffer,y=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*x,o=e*y,r=b[o],p=b[o+1],C=b[o+2];g[t]=i*r+s*p+d*C+f,g[t+1]=a*r+l*p+u*C+v,g[t+2]=n*r+c*p+m*C+h}}function v(e,t,o){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const r=e.count,i=o[0],a=o[1],n=o[2],s=o[3],l=o[4],c=o[5],d=o[6],u=o[7],m=o[8],f=e.typedBuffer,v=e.typedBufferStride,h=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*v,o=e*g,r=h[o],p=h[o+1],x=h[o+2];f[t]=i*r+s*p+d*x,f[t+1]=a*r+l*p+u*x,f[t+2]=n*r+c*p+m*x}}function h(e,t,o){const r=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*a,r=e*s;i[t]=o*n[r],i[t+1]=o*n[r+1],i[t+2]=o*n[r+2]}}Object.freeze({__proto__:null,transformMat4:f,transformMat3:v,scale:h,shiftRight:function(e,t,o){const r=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*a,r=e*s;i[t]=n[r]>>o,i[t+1]=n[r+1]>>o,i[t+2]=n[r+2]>>o}}});var g=o(69996),x=o(69534),b=o(68500),y=o(80905),C=o(81495),w=o(82976),T=o(30090),M=o(10762),S=o(13405),_=o(34658),O=o(66704),A=o(56140),R=o(23240),P=o(97853),B=o(44801),L=o(11379),I=o(51007),F=o(36904),E=o(89553),H=o(61514),D=o(72023),N=o(8681),U=o(76789),z=o(38391),V=o(71613),G=o(25117),k=o(84530),$=o(44624),q=o(10510);class j extends P.A{initializeProgram(e){const t=j.shader.get(),o=this.configuration,r=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:o.usePBR?o.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:o.normalsTypeDerivate?3:0,doubleSidedMode:o.doubleSidedMode,vertexTangets:o.vertexTangents,attributeTextureCoordinates:o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture||o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,G.I)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1});return new I.Z(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),L.i)}bindPass(e,t,o){E.G.bindProjectionMatrix(this.program,o.camera.projectionMatrix);const r=this.configuration.output;7===r&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",T.FZ[t.colorMixMode])),0===r?(o.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",T.FZ[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&$.j.bindUniforms(this.program,t,this.configuration.isSchematic)):1===r||3===r?this.program.setUniform2fv("nearFar",o.camera.nearFar):4===r&&D.b.bindOutputHighlight(e,this.program,o),N.k.bindUniformsForSymbols(this.program,t),U.L.bindUniforms(this.program,t,o),(0,T.bj)(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,i.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;E.G.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&E.G.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&k.f.bindCustomOrigin(this.program,t),H.p.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&V.h.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const o=this.configuration,r=3===e,i=2===e;return(0,F.sm)({blending:0!==o.output&&7!==o.output||!o.transparent?null:r?O.wu:(0,O.$L)(e),culling:W(o),depthTest:{func:(0,O.$x)(e)},depthWrite:r||i?o.writeDepth&&F.LZ:null,colorWrite:F.BK,stencilWrite:o.sceneHasOcludees?z.s3:null,stencilTest:o.sceneHasOcludees?t?z.eD:z.RY:null,polygonOffset:r||i?null:(0,O.je)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}j.shader=new R.J(q.D,(()=>o.e(2186).then(o.bind(o,72186))));const W=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class Z extends B.m{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3}}(0,A._)([(0,B.o)({count:8})],Z.prototype,"output",void 0),(0,A._)([(0,B.o)({count:4})],Z.prototype,"alphaDiscardMode",void 0),(0,A._)([(0,B.o)({count:3})],Z.prototype,"doubleSidedMode",void 0),(0,A._)([(0,B.o)()],Z.prototype,"isSchematic",void 0),(0,A._)([(0,B.o)()],Z.prototype,"vertexColors",void 0),(0,A._)([(0,B.o)()],Z.prototype,"offsetBackfaces",void 0),(0,A._)([(0,B.o)()],Z.prototype,"symbolColors",void 0),(0,A._)([(0,B.o)()],Z.prototype,"vvSize",void 0),(0,A._)([(0,B.o)()],Z.prototype,"vvColor",void 0),(0,A._)([(0,B.o)()],Z.prototype,"verticalOffset",void 0),(0,A._)([(0,B.o)()],Z.prototype,"receiveShadows",void 0),(0,A._)([(0,B.o)()],Z.prototype,"slicePlaneEnabled",void 0),(0,A._)([(0,B.o)()],Z.prototype,"sliceHighlightDisabled",void 0),(0,A._)([(0,B.o)()],Z.prototype,"receiveAmbientOcclusion",void 0),(0,A._)([(0,B.o)()],Z.prototype,"screenSizePerspective",void 0),(0,A._)([(0,B.o)()],Z.prototype,"textureAlphaPremultiplied",void 0),(0,A._)([(0,B.o)()],Z.prototype,"hasColorTexture",void 0),(0,A._)([(0,B.o)()],Z.prototype,"usePBR",void 0),(0,A._)([(0,B.o)()],Z.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,A._)([(0,B.o)()],Z.prototype,"hasEmissionTexture",void 0),(0,A._)([(0,B.o)()],Z.prototype,"hasOcclusionTexture",void 0),(0,A._)([(0,B.o)()],Z.prototype,"hasNormalTexture",void 0),(0,A._)([(0,B.o)()],Z.prototype,"instanced",void 0),(0,A._)([(0,B.o)()],Z.prototype,"instancedColor",void 0),(0,A._)([(0,B.o)()],Z.prototype,"instancedDoublePrecision",void 0),(0,A._)([(0,B.o)()],Z.prototype,"vertexTangents",void 0),(0,A._)([(0,B.o)()],Z.prototype,"normalsTypeDerivate",void 0),(0,A._)([(0,B.o)()],Z.prototype,"writeDepth",void 0),(0,A._)([(0,B.o)()],Z.prototype,"sceneHasOcludees",void 0),(0,A._)([(0,B.o)()],Z.prototype,"transparent",void 0),(0,A._)([(0,B.o)()],Z.prototype,"enableOffset",void 0),(0,A._)([(0,B.o)({count:3})],Z.prototype,"cullFace",void 0),(0,A._)([(0,B.o)({count:4})],Z.prototype,"transparencyPassType",void 0);var X=o(79733);class J extends j{initializeProgram(e){const t=J.shader.get(),o=this.configuration,r=t.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,G.I)(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1});return new I.Z(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),L.i)}}J.shader=new R.J(X.R,(()=>o.e(1343).then(o.bind(o,41343))));class Q extends M.F5{constructor(e,t){super(t,e,ee),this.supportsEdges=!0,this.techniqueConfig=new Z,this.vertexBufferLayout=Q.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?Q.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,o=e.vertexColors,r=e.symbolColors,i=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return o&&(i||a||r)?!!n||s:o?n?l:s:i||a||r?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<O.ve),this.techniqueConfig}intersect(e,t,o,r,i,n,s){if(null!==this.params.verticalOffset){const e=r.camera;(0,a.s)(se,o[12],o[13],o[14]);let t=null;switch(r.viewingMode){case 1:t=(0,a.n)(ae,se);break;case 2:t=(0,a.g)(ae,ie)}let s=0;if(null!==this.params.verticalOffset){const o=(0,a.f)(le,se,e.eye),r=(0,a.l)(o),i=(0,a.a)(o,o,1/r);let n=null;this.params.screenSizePerspective&&(n=(0,a.d)(t,i)),s+=(0,T.Hx)(e,r,this.params.verticalOffset,n,this.params.screenSizePerspective)}(0,a.a)(t,t,s),(0,a.t)(ne,t,r.transform.inverseRotation),i=(0,a.f)(oe,i,ne),n=(0,a.f)(re,n,ne)}(0,T.Bw)(e,t,r,i,n,(0,C.W9)(r.verticalOffset),s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new K(e)}createBufferWriter(){return new te(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=(0,y.U$)().vec3f("position").vec3f("normal");return e.vertexTangents&&o.vec4f("tangent"),t&&o.vec2f("uv0"),e.vertexColors&&o.vec4u8("color"),e.symbolColors&&o.vec4u8("symbolColor"),o}static getInstanceBufferLayout(e){let t=(0,y.U$)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class K extends w.Z{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(J,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(j,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const Y=2.1,ee={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,l.a)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:_.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...M.zh};class te{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.position.length}write(e,t,o,r){(0,S.NK)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,r)}}const oe=(0,i.c)(),re=(0,i.c)(),ie=(0,i.f)(0,0,1),ae=(0,i.c)(),ne=(0,i.c)(),se=(0,i.c)(),le=(0,i.c)();var ce=o(43446),de=o(32656),ue=o(10923),me=o(39105),pe=o(54721),fe=o(59351);class ve{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return(0,ue.HK)(e)?((0,me.k_)(t),(0,ue.AH)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,o){if((0,r.Wi)(this.streamDataRequester))return(await(0,pe.default)(t,{responseType:he[e]})).data;const i=await(0,fe.q6)(this.streamDataRequester.request(t,e,o));if(!0===i.ok)return i.value;throw(0,me.r9)(i.error),new de.Z("",`Request for resource failed: ${i.error}`)}}const he={image:"image",binary:"array-buffer",json:"json"};var ge=o(45072);function xe(e,t,o){const r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*i,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let e=0;e<s;++e)r[l]=a[c],r[l+1]=a[c+1],l+=i,c+=n}function be(e,t,o){const r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*i,c=(o&&o.srcIndex?o.srcIndex:0)*n;if((0,ge.U)(t.elementType)){const e=(0,ge.Op)(t.elementType);if((0,ge.B3)(t.elementType))for(let t=0;t<s;++t)r[l]=Math.max(a[c]/e,-1),r[l+1]=Math.max(a[c+1]/e,-1),l+=i,c+=n;else for(let t=0;t<s;++t)r[l]=a[c]/e,r[l+1]=a[c+1]/e,l+=i,c+=n}else xe(e,t,o);return e}Object.freeze({__proto__:null,copy:xe,normalizeIntegerBuffer:be});function ye(e,t,o){const r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*i,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let e=0;e<s;++e)r[l]=a[c],r[l+1]=a[c+1],r[l+2]=a[c+2],l+=i,c+=n}Object.freeze({__proto__:null,copy:ye});function Ce(e,t,o){const r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*i,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let e=0;e<s;++e)r[l]=a[c],r[l+1]=a[c+1],r[l+2]=a[c+2],r[l+3]=a[c+3],l+=i,c+=n}function we(e,t,o,r,i,a){const n=e.typedBuffer,s=e.typedBufferStride,l=a?a.count:e.count;let c=(a&&a.dstIndex?a.dstIndex:0)*s;for(let e=0;e<l;++e)n[c]=t,n[c+1]=o,n[c+2]=r,n[c+3]=i,c+=s}Object.freeze({__proto__:null,copy:Ce,fill:we});Object.freeze({__proto__:null,copy:function(e,t,o){const r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*i,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let e=0;e<s;++e){for(let e=0;e<9;++e)r[l+e]=a[c+e];l+=i,c+=n}}});Object.freeze({__proto__:null,copy:function(e,t,o){const r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*i,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let e=0;e<s;++e){for(let e=0;e<16;++e)r[l+e]=a[c+e];l+=i,c+=n}}});function Te(e,t){const o=e.count;t||(t=new e.TypedArrayConstructor(o));for(let r=0;r<o;r++)t[r]=e.get(r);return t}Object.freeze({__proto__:null,copy:function(e,t,o){const r=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*i,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let e=0;e<s;++e)r[l]=a[c],l+=i,c+=n},makeDense:Te});function Me(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,ge.n1)(e.ElementType)))}const Se=m.Z.getLogger("esri.views.3d.glTF");var _e=o(94588),Oe=o(34175),Ae=o(32232),Re=o(2847);class Pe{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const Be={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Le={pbrMetallicRoughness:Be,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ie={ESRI_externalColorMixMode:"tint"},Fe=(e={})=>{const t={...Be,...e.pbrMetallicRoughness},o=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,_e.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...Ie,...e.extras});return{...Le,...e,pbrMetallicRoughness:t,extras:o}},Ee={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};const He=1179937895;class De{constructor(e,t,o,r,i){this.context=e,this.errorContext=t,this.uri=o,this.json=r,this.glbBuffer=i,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,o;return e.replace(/^(.*\/)?([^/]*)$/,((e,r,i)=>(t=r||"",o=i||"",""))),{dirPart:t,filePart:o}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==r.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==r.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==r.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,o,r){if((0,ue.HK)(o)){const r=(0,ue.sJ)(o);if("model/gltf-binary"!==r.mediaType)try{const i=JSON.parse(r.isBase64?atob(r.data):r.data);return new De(e,t,o,i)}catch{}const i=(0,ue.AH)(o);if(De.isGLBData(i))return this.fromGLBData(e,t,o,i)}if(o.endsWith(".gltf")){const i=await e.loadJSON(o,r);return new De(e,t,o,i)}const i=await e.loadBinary(o,r);if(De.isGLBData(i))return this.fromGLBData(e,t,o,i);const a=await e.loadJSON(o,r);return new De(e,t,o,a)}static isGLBData(e){const t=new Pe(e);return t.remainingBytes()>=4&&t.readUint32()===He}static async fromGLBData(e,t,o,r){const i=await De.parseGLBData(t,r);return new De(e,t,o,i.json,i.binaryData)}static async parseGLBData(e,t){const o=new Pe(t);e.assert(o.remainingBytes()>=12,"GLB binary data is insufficiently large.");const r=o.readUint32(),i=o.readUint32(),a=o.readUint32();e.assert(r===He,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=a,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==i,"An unsupported GLB container version was detected. Only version 2 is supported.");let n,s,l=0;for(;o.remainingBytes()>=8;){const t=o.readUint32(),r=o.readUint32();0===l?(e.assert(1313821514===r,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),n=await ke(o.readUint8Array(t))):1===l?(e.errorUnsupportedIf(5130562!==r,"Second GLB chunk expected to be BIN."),s=o.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),l+=1}return n||e.error("No GLB JSON chunk detected."),{json:n,binaryData:s}}async getBuffer(e,t){const o=this.json.buffers[e],r=this.errorContext;if(null==o.uri)return r.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let i=this.bufferCache.get(e);if(!i){const a=await this.context.loadBinary(this.resolveUri(o.uri),t);i=new Uint8Array(a),this.bufferCache.set(e,i),r.assert(i.byteLength===o.byteLength,"Buffer byte lengths should match.")}return i}async getAccessor(e,t){const o=this.json.accessors[e],r=this.errorContext;r.errorUnsupportedIf(null==o.bufferView,"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(o.type in["MAT2","MAT3","MAT4"],`AttributeType ${o.type} is not supported`);const i=this.json.bufferViews[o.bufferView],a=await this.getBuffer(i.buffer,t),n=Ve[o.type],s=Ge[o.componentType],l=n*s,c=i.byteStride||l;return{raw:a.buffer,byteStride:c,byteOffset:a.byteOffset+(i.byteOffset||0)+(o.byteOffset||0),entryCount:o.count,isDenselyPacked:c===l,componentCount:n,componentByteSize:s,componentType:o.componentType,min:o.min,max:o.max,normalized:!!o.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const o=await this.getAccessor(e.indices,t);if(o.isDenselyPacked)switch(o.componentType){case 5121:return new Uint8Array(o.raw,o.byteOffset,o.entryCount);case 5123:return new Uint16Array(o.raw,o.byteOffset,o.entryCount);case 5125:return new Uint32Array(o.raw,o.byteOffset,o.entryCount)}else switch(o.componentType){case 5121:return Te(this.wrapAccessor(u.D_,o));case 5123:return Te(this.wrapAccessor(u.av,o));case 5125:return Te(this.wrapAccessor(u.Nu,o))}}async getPositionData(e,t){const o=this.errorContext;o.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);return o.errorUnsupportedIf(5126!==r.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+$e[r.componentType]),o.errorUnsupportedIf(3!==r.componentCount,"POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this.wrapAccessor(u.ct,r)}async getNormalData(e,t){const o=this.errorContext;o.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);return o.errorUnsupportedIf(5126!==r.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+$e[r.componentType]),o.errorUnsupportedIf(3!==r.componentCount,"NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this.wrapAccessor(u.ct,r)}async getTangentData(e,t){const o=this.errorContext;o.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);return o.errorUnsupportedIf(5126!==r.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+$e[r.componentType]),o.errorUnsupportedIf(4!==r.componentCount,"TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed()),new u.ek(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){const o=this.errorContext;o.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);return o.errorUnsupportedIf(2!==r.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed()),5126===r.componentType?this.wrapAccessor(u.Eu,r):(o.errorUnsupportedIf(!r.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new u.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new u.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new u.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new u.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new u.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new u.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,_e.Bg)(e.componentType)}}(r))}async getVertexColors(e,t){const o=this.errorContext;o.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(o.errorUnsupportedIf(4!==r.componentCount&&3!==r.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed()),4===r.componentCount){if(5126===r.componentType)return this.wrapAccessor(u.ek,r);if(5121===r.componentType)return this.wrapAccessor(u.mc,r);if(5123===r.componentType)return this.wrapAccessor(u.v6,r)}else if(3===r.componentCount){if(5126===r.componentType)return this.wrapAccessor(u.ct,r);if(5121===r.componentType)return this.wrapAccessor(u.ne,r);if(5123===r.componentType)return this.wrapAccessor(u.mw,r)}o.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+$e[r.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const o=this.errorContext;let r=this.materialCache.get(e.material);if(!r){const i=null!=e.material?Fe(this.json.materials[e.material]):Fe(),a=i.pbrMetallicRoughness,n=this.hasVertexColors(e);let s,l,c,d,u;a.baseColorTexture&&(o.errorUnsupportedIf(0!==(a.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),s=await this.getTexture(a.baseColorTexture.index,t)),i.normalTexture&&(0!==(i.normalTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(i.normalTexture.index,t)),i.occlusionTexture&&(0!==(i.occlusionTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):c=await this.getTexture(i.occlusionTexture.index,t)),i.emissiveTexture&&(0!==(i.emissiveTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):d=await this.getTexture(i.emissiveTexture.index,t)),a.metallicRoughnessTexture&&(0!==(a.metallicRoughnessTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):u=await this.getTexture(a.metallicRoughnessTexture.index,t));const m=null!=e.material?e.material:-1;r={alphaMode:i.alphaMode,alphaCutoff:i.alphaCutoff,color:a.baseColorFactor,doubleSided:!!i.doubleSided,colorTexture:s,normalTexture:l,name:i.name,id:m,occlusionTexture:c,emissiveTexture:d,emissiveFactor:i.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:u,vertexColors:n,ESRI_externalColorMixMode:i.extras.ESRI_externalColorMixMode}}return r}async getTexture(e,t){const o=this.errorContext,r=this.json.textures[e],i=(e=>({...Ee,...e}))(null!=r.sampler?this.json.samplers[r.sampler]:{});o.errorUnsupportedIf(null==r.source,"Source is expected to be defined for a texture.");const a=this.json.images[r.source];let n=this.textureCache.get(e);if(!n){let r;if(a.uri)r=await this.context.loadImage(this.resolveUri(a.uri),t);else{o.errorUnsupportedIf(null==a.bufferView,"Image bufferView must be defined."),o.errorUnsupportedIf(null==a.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[a.bufferView],i=await this.getBuffer(e.buffer,t);o.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),r=await async function(e,t){return(0,me.Ue)(((o,r)=>{const i=new Blob([e],{type:t}),a=URL.createObjectURL(i),n=new Image;n.addEventListener("load",(()=>{URL.revokeObjectURL(a),"decode"in n?n.decode().then((()=>o(n)),(()=>o(n))):o(n)})),n.addEventListener("error",(e=>{URL.revokeObjectURL(a),r(e)})),n.src=a}))}(new Uint8Array(i.buffer,i.byteOffset+(e.byteOffset||0),e.byteLength),a.mimeType)}n={data:r,wrapS:i.wrapS,wrapT:i.wrapT,minFilter:i.minFilter,name:a.name,id:e},this.textureCache.set(e,n)}return n}getNodeTransform(e){if(void 0===e)return Ue;let t=this.nodeTransformCache.get(e);if(!t){const o=this.getNodeTransform(this.getNodeParent(e)),r=this.json.nodes[e];r.matrix?t=(0,n.m)((0,c.a)(),o,r.matrix):r.translation||r.rotation||r.scale?(t=(0,c.b)(o),r.translation&&(0,n.t)(t,t,r.translation),r.rotation&&(ze[3]=(0,Re.g)(ze,r.rotation),(0,n.r)(t,t,ze[3],ze)),r.scale&&(0,n.s)(t,t,r.scale)):t=o,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return(0,ue.hF)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=Oe.G.parse(this.json.asset.version,"glTF");Ne.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const Ne=new Oe.G(2,0,"glTF"),Ue=(0,n.k)((0,c.a)(),Math.PI/2),ze=(0,Ae.a)(),Ve={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Ge={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function ke(e){return(0,me.Ue)(((t,o)=>{const r=new Blob([e]),i=new FileReader;i.onload=()=>{const e=i.result;t(JSON.parse(e))},i.onerror=e=>{o(e)},i.readAsText(r)}))}const $e={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let qe=0;async function je(e,t,o={}){const i=await De.load(e,Qe,t,o),a="gltf_"+qe++,n={lods:[],materials:new Map,textures:new Map,meta:We(i)},s=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type);return await async function(e,t){const o=e.json,r=o.scenes[o.scene||0].nodes,i=r.length>1;for(const e of r){const t=o.nodes[e],r=[a(e,0)];if(Ze(t)&&!i){const e=t.extensions.MSFT_lod.ids;r.push(...e.map(((e,t)=>a(e,t+1))))}await(0,me.$6)(r)}async function a(r,i){const n=o.nodes[r],s=e.getNodeTransform(r);if(Qe.warnUnsupportedIf(null!=n.weights,"Morph targets are not supported."),null!=n.mesh){const e=o.meshes[n.mesh];for(const o of e.primitives)await t(o,s,i,e.name)}for(const e of n.children||[])await a(e,i)}}(i,(async(e,t,s,l)=>{const d=void 0!==e.mode?e.mode:4,u=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(d);if((0,r.Wi)(u))return void Qe.warnUnsupported("Unsupported primitive mode ("+Ye[d]+"). Skipping primitive.");if(!i.hasPositions(e))return void Qe.warn("Skipping primitive without POSITION vertex attribute.");const m=await i.getMaterial(e,o),p={transform:(0,c.b)(t),attributes:{position:await i.getPositionData(e,o),normal:null,texCoord0:null,color:null,tangent:null},indices:await i.getIndexData(e,o),primitiveType:u,material:Xe(n,m,a)};i.hasNormals(e)&&(p.attributes.normal=await i.getNormalData(e,o)),i.hasTangents(e)&&(p.attributes.tangent=await i.getTangentData(e,o)),i.hasTextureCoordinates(e)&&(p.attributes.texCoord0=await i.getTextureCoordinates(e,o)),i.hasVertexColors(e)&&(p.attributes.color=await i.getVertexColors(e,o));let f=null;(0,r.pC)(n.meta)&&(0,r.pC)(n.meta.ESRI_lod)&&"screenSpaceRadius"===n.meta.ESRI_lod.metric&&(f=n.meta.ESRI_lod.thresholds[s]),n.lods[s]=n.lods[s]||{parts:[],name:l,lodThreshold:f},n.lods[s].parts.push(p)})),{model:n,meta:{isEsriSymbolResource:s,uri:i.uri},customMeta:{}}}function We(e){const t=e.json;let o=null;return t.nodes.forEach((e=>{const t=e.extras;(0,r.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(o=t)})),o}function Ze(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Xe(e,t,o){const r=t=>{const r=`${o}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(r)){const o=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:Je(t.wrapS),t:Je(t.wrapT)},mipmap:Ke.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(r,o)}return r},i=`${o}_mat_${t.id}_${t.name}`;if(!e.materials.has(i)){const o=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?r(t.colorTexture):void 0,textureNormal:t.normalTexture?r(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?r(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?r(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?r(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(i,o)}return i}function Je(e){if(33071===e||33648===e||10497===e)return e;Qe.error(`Unexpected TextureSampler WrapMode: ${e}`)}const Qe=new class{error(e){throw new de.Z("gltf-loader-error",e)}errorUnsupported(e){throw new de.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Se.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},Ke=[9987,9985],Ye=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];var et=o(6962),tt=o(27898);function ot(e){return"number"==typeof e?function(e){return(0,tt.p)(e)}(e):(0,et.Uc)(e)||(0,et.lq)(e)?new Uint32Array(e):e}var rt=o(82550),it=o(41419);const at=m.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function nt(e,t){const o=await async function(e,t){const o=(0,r.pC)(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const r=await(0,fe.q6)(t.request(e,"json",o));return!0===r.ok?r.value:((0,me.r9)(r.error),void st(r.error.details.url))}(e,o,t);const i=await(0,fe.q6)((0,pe.default)(e,(0,r.Wg)(t)));return!0===i.ok?i.value.data:((0,me.r9)(i.error),void st(i.error))}(e,t);return{resource:o,textures:await dt(o.textureDefinitions,t)}}function st(e){throw new de.Z("",`Request for object resource failed: ${e}`)}function lt(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(at.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(at.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(at.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(at.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else at.warn("Indexed geometries must specify faces"),r=!1;break}default:at.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(at.warn("Geometry requires material"),r=!1);const i=e.params.vertexAttributes;for(const e in i)i[e].values||(at.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function ct(e){const t=(0,g.cS)();return e.forEach((e=>{const o=e.boundingInfo;(0,g.pp)(t,o.getBBMin()),(0,g.pp)(t,o.getBBMax())})),t}async function dt(e,t){const o=[];for(const i in e){const a=e[i],n=a.images[0].data;if(!n){at.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+n,l="/textureDefinitions/"+i,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=(0,r.pC)(t)&&t.disableTextures?(0,me.DB)(null):(0,it.t)(s,t);o.push(d.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:"rgba"===a.channels?a.alphaChannelUsage||"transparency":"none"}))))}const i=await(0,me.$6)(o),a={};for(const e of i)a[e.refId]=e;return a}function ut(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function mt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}function pt(e){const t=new Uint32Array(e);for(let o=0;o<e;o++)t[o]=o;return t}const ft=new Oe.G(1,2,"wosr");function vt(e,t,o){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const r=e.count,i=o[0],a=o[1],n=o[2],s=o[3],l=o[4],c=o[5],d=o[6],u=o[7],m=o[8],f=e.typedBuffer,v=e.typedBufferStride,h=t.typedBuffer,g=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*v,o=e*g,r=h[o],p=h[o+1],x=h[o+2],b=h[o+3];f[t]=i*r+s*p+d*x,f[t+1]=a*r+l*p+u*x,f[t+2]=n*r+c*p+m*x,f[t+3]=b}}function ht(e,t,o){const r=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*a,r=e*s;i[t]=o*n[r],i[t+1]=o*n[r+1],i[t+2]=o*n[r+2],i[t+3]=o*n[r+3]}}Object.freeze({__proto__:null,transformMat4:function(e,t,o){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const r=e.count,i=o[0],a=o[1],n=o[2],s=o[3],l=o[4],c=o[5],d=o[6],u=o[7],m=o[8],f=o[9],v=o[10],h=o[11],g=o[12],x=o[13],b=o[14],y=o[15],C=e.typedBuffer,w=e.typedBufferStride,T=t.typedBuffer,M=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*w,o=e*M,r=T[o],p=T[o+1],S=T[o+2],_=T[o+3];C[t]=i*r+l*p+m*S+g*_,C[t+1]=a*r+c*p+f*S+x*_,C[t+2]=n*r+d*p+v*S+b*_,C[t+3]=s*r+u*p+h*S+y*_}},transformMat3:vt,scale:ht,shiftRight:function(e,t,o){const r=Math.min(e.count,t.count),i=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*a,r=e*s;i[t]=n[r]>>o,i[t+1]=n[r+1]>>o,i[t+2]=n[r+2]>>o,i[t+3]=n[r+3]>>o}}});async function gt(e,t){const o=xt((0,s.pJ)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):nt(o.url,t)),a=function(e,t){const o=[],a=[],n=[],s=[],l=e.resource,c=Oe.G.parse(l.version||"1.0","wosr");ft.validate(c);const d=l.model.name,u=l.model.geometries,m=l.materialDefinitions,p=e.textures;let f=0;const v=new Map;for(let e=0;e<u.length;e++){const l=u[e];if(!lt(l))continue;const c=mt(l),h=l.params.vertexAttributes,g={};for(const e in h){const t=h[e],o=t.values;g[e]={data:o,size:t.valuesPerElement}}const y={};if("PerAttributeArray"===l.params.topology){const e=pt(g.position.data.length/g.position.size);for(const t in g)y[t]=e}else{const e=l.params.faces;for(const t in e)y[t]=new Uint32Array(e[t].values)}const C=p&&p[c.texture];if(C&&!v.has(c.texture)){const{image:e,params:t}=C,o=new ce.Z(e,d,t);s.push(o),v.set(c.texture,o)}const w=v.get(c.texture),T=w?w.id:void 0;let M=n[c.material]?n[c.material][c.texture]:null;if(!M){const e=m[c.material.substring(c.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=C&&C.alphaChannelUsage,a=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,s={ambient:(0,i.d)(e.diffuse),diffuse:(0,i.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:a,textureAlphaMode:C?ut(C.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};(0,r.pC)(t)&&t.materialParamsMixin&&(0,rt.jB)(s,t.materialParamsMixin),M=new Q(s,d),n[c.material]||(n[c.material]={}),n[c.material][c.texture]=M}a.push(M);const S=new b.Z(new x.b(g,y),d);f+=y.position?y.position.length:0,o.push(S)}return{name:d,stageResources:{textures:s,materials:a,geometries:o},pivotOffset:l.model.pivotOffset,boundingBox:ct(o),numberOfVertices:f,lodThreshold:null}}(e,t);return{lods:[a],referenceBoundingBox:a.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const l=await(t.cache?t.cache.loadGLTF(o.url,t):je(new ve(t.streamDataRequester),o.url,t)),d=(0,r.U2)(l.model.meta,"ESRI_proxyEllipsoid");l.meta.isEsriSymbolResource&&(0,r.pC)(d)&&-1!==l.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let o=0;o<e.model.lods.length;++o){const s=e.model.lods[o];e.customMeta.esriTreeRendering=!0;for(const l of s.parts){const s=l.attributes.normal;if((0,r.Wi)(s))return;const d=l.attributes.position,m=d.count,p=(0,i.c)(),f=(0,i.c)(),v=(0,i.c)(),h=Me(u.mc,m),g=Me(u.ct,m),x=(0,n.a)((0,c.a)(),l.transform);for(let r=0;r<m;r++){d.getVec(r,f),s.getVec(r,p),(0,a.i)(f,f,l.transform),(0,a.f)(v,f,t.center),(0,a.C)(v,v,t.radius);const i=v[2],n=(0,a.l)(v),c=Math.min(.45+.55*n*n,1);(0,a.C)(v,v,t.radius),(0,a.i)(v,v,x),(0,a.n)(v,v),o+1!==e.model.lods.length&&e.model.lods.length>1&&(0,a.e)(v,v,p,i>-1?.2:Math.min(-4*i-3.8,1)),g.setVec(r,v),h.set(r,0,255*c),h.set(r,1,255*c),h.set(r,2,255*c),h.set(r,3,255)}l.attributes.normal=g,l.attributes.color=h}}}(l,d);const m=l.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:l.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},p={...t.materialParamsMixin,treeRendering:l.customMeta.esriTreeRendering};if(null!=o.specifiedLodIndex){const e=bt(l,m,p,o.specifiedLodIndex);let t=e[0].boundingBox;return 0!==o.specifiedLodIndex&&(t=bt(l,m,p,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:l.meta.isEsriSymbolResource,isWosr:!1,remove:l.remove}}const f=bt(l,m,p);return{lods:f,referenceBoundingBox:f[0].boundingBox,isEsriSymbolResource:l.meta.isEsriSymbolResource,isWosr:!1,remove:l.remove}}function xt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function bt(e,t,o,i){const a=e.model,n=(0,l.a)(),s=new Array,c=new Map,m=new Map;return a.lods.forEach(((e,l)=>{if(void 0!==i&&l!==i)return;let p=0;const y={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,r.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,g.cS)()};s.push(y),e.parts.forEach((i=>{const s=i.material+(i.attributes.normal?"_normal":"")+(i.attributes.color?"_color":"")+(i.attributes.texCoord0?"_texCoord0":"")+(i.attributes.tangent?"_tangent":""),l=a.materials.get(i.material),C=(0,r.pC)(i.attributes.texCoord0),w=(0,r.pC)(i.attributes.normal);if(!c.has(s)){if(C){if((0,r.pC)(l.textureColor)&&!m.has(l.textureColor)){const e=a.textures.get(l.textureColor),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureColor,new ce.Z(e.data,l.textureColor,t))}if((0,r.pC)(l.textureNormal)&&!m.has(l.textureNormal)){const e=a.textures.get(l.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureNormal,new ce.Z(e.data,l.textureNormal,t))}if((0,r.pC)(l.textureOcclusion)&&!m.has(l.textureOcclusion)){const e=a.textures.get(l.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureOcclusion,new ce.Z(e.data,l.textureOcclusion,t))}if((0,r.pC)(l.textureEmissive)&&!m.has(l.textureEmissive)){const e=a.textures.get(l.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureEmissive,new ce.Z(e.data,l.textureEmissive,t))}if((0,r.pC)(l.textureMetallicRoughness)&&!m.has(l.textureMetallicRoughness)){const e=a.textures.get(l.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};m.set(l.textureMetallicRoughness,new ce.Z(e.data,l.textureMetallicRoughness,t))}}const e=Math.pow(l.color[0],1/Y),n=Math.pow(l.color[1],1/Y),d=Math.pow(l.color[2],1/Y),u=Math.pow(l.emissiveFactor[0],1/Y),p=Math.pow(l.emissiveFactor[1],1/Y),f=Math.pow(l.emissiveFactor[2],1/Y);c.set(s,new Q({...t,transparent:"BLEND"===l.alphaMode,textureAlphaMode:yt(l.alphaMode),textureAlphaCutoff:l.alphaCutoff,diffuse:[e,n,d],ambient:[e,n,d],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?0:2,vertexColors:!!i.attributes.color,vertexTangents:!!i.attributes.tangent,normals:w?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,r.pC)(l.textureColor)&&C?m.get(l.textureColor).id:void 0,colorMixMode:l.colorMixMode,normalTextureId:(0,r.pC)(l.textureNormal)&&C?m.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:(0,r.pC)(l.textureOcclusion)&&C?m.get(l.textureOcclusion).id:void 0,emissiveTextureId:(0,r.pC)(l.textureEmissive)&&C?m.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,r.pC)(l.textureMetallicRoughness)&&C?m.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[u,p,f],mrrFactors:[l.metallicFactor,l.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...o},s))}const T=function(e,t){switch(t){case 4:return ot(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const o=t-2,r=new Uint32Array(3*o);if("number"==typeof e){let e=0;for(let t=0;t<o;t+=1)t%2==0?(r[e++]=t,r[e++]=t+1,r[e++]=t+2):(r[e++]=t+1,r[e++]=t,r[e++]=t+2)}else{let t=0;for(let i=0;i<o;i+=1)if(i%2==0){const o=e[i],a=e[i+1],n=e[i+2];r[t++]=o,r[t++]=a,r[t++]=n}else{const o=e[i+1],a=e[i],n=e[i+2];r[t++]=o,r[t++]=a,r[t++]=n}}return r}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint32Array(0);const o=t-2,r=new Uint32Array(3*o);if("number"==typeof e){let e=0;for(let t=0;t<o;++t)r[e++]=0,r[e++]=t+1,r[e++]=t+2;return r}{const t=e[0];let i=e[1],a=0;for(let n=0;n<o;++n){const o=e[n+2];r[a++]=t,r[a++]=i,r[a++]=o,i=o}return r}}(e)}}(i.indices||i.attributes.position.count,i.primitiveType),M={},S={},_=i.attributes.position.count,O=Me(u.ct,_);if(f(O,i.attributes.position,i.transform),S.position={data:O.typedBuffer,size:O.elementCount},M.position=T,(0,r.pC)(i.attributes.normal)){const e=Me(u.ct,_);(0,d.n)(n,i.transform),v(e,i.attributes.normal,n),S.normal={data:e.typedBuffer,size:e.elementCount},M.normal=T}if((0,r.pC)(i.attributes.tangent)){const e=Me(u.ek,_);(0,d.n)(n,i.transform),vt(e,i.attributes.tangent,n),S.tangent={data:e.typedBuffer,size:e.elementCount},M.tangent=T}if((0,r.pC)(i.attributes.texCoord0)){const e=Me(u.Eu,_);be(e,i.attributes.texCoord0),S.uv0={data:e.typedBuffer,size:e.elementCount},M.uv0=T}if((0,r.pC)(i.attributes.color)){const e=Me(u.mc,_);if(4===i.attributes.color.elementCount)i.attributes.color instanceof u.ek?ht(e,i.attributes.color,255):i.attributes.color instanceof u.mc?Ce(e,i.attributes.color):i.attributes.color instanceof u.v6&&ht(e,i.attributes.color,1/256);else{we(e,255,255,255,255);const t=new u.ne(e.buffer,0,4);i.attributes.color instanceof u.ct?h(t,i.attributes.color,255):i.attributes.color instanceof u.ne?ye(t,i.attributes.color):i.attributes.color instanceof u.mw&&h(t,i.attributes.color,1/256)}S.color={data:e.typedBuffer,size:e.elementCount},M.color=T}const A=new b.Z(new x.b(S,M),`gltf_${e.name}_${p++}`);y.stageResources.geometries.push(A),y.stageResources.materials.push(c.get(s)),C&&((0,r.pC)(l.textureColor)&&y.stageResources.textures.push(m.get(l.textureColor)),(0,r.pC)(l.textureNormal)&&y.stageResources.textures.push(m.get(l.textureNormal)),(0,r.pC)(l.textureOcclusion)&&y.stageResources.textures.push(m.get(l.textureOcclusion)),(0,r.pC)(l.textureEmissive)&&y.stageResources.textures.push(m.get(l.textureEmissive)),(0,r.pC)(l.textureMetallicRoughness)&&y.stageResources.textures.push(m.get(l.textureMetallicRoughness))),y.numberOfVertices+=_;const R=A.boundingInfo;(0,g.pp)(y.boundingBox,R.getBBMin()),(0,g.pp)(y.boundingBox,R.getBBMax())}))})),s}function yt(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}},7261:(e,t,o)=>{"use strict";o.d(t,{w:()=>i});var r=o(85461);function i(e){e.vertex.code.add(r.H`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},84530:(e,t,o)=>{"use strict";o.d(t,{f:()=>l});var r,i=o(77625),a=o(85461),n=o(71061),s=o(25117);function l(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(s.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[a.H`
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
    `:a.H``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===t.output&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}(r=l||(l={})).Uniforms=class{},r.bindCustomOrigin=function(e,t){(0,n.po)(t,c,d,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",d)};const c=(0,i.c)(),d=(0,i.c)()},74681:(e,t,o)=>{"use strict";o.d(t,{O:()=>a});var r=o(85461);function i(e){const t=r.H`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function a(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(r.H`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(i),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(r.H`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}},6838:(e,t,o)=>{"use strict";o.d(t,{f:()=>i});var r=o(85461);function i(e){e.attributes.add("position","vec3"),e.vertex.code.add(r.H`
    vec3 positionModel() { return position; }
  `)}},31163:(e,t,o)=>{"use strict";o.d(t,{R:()=>a});var r=o(85461);function i(e){e.vertex.code.add(r.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function a(e,t){t.symbolColor?(e.include(i),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(r.H`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(r.H`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}},82094:(e,t,o)=>{"use strict";o.d(t,{D:()=>i});var r=o(85461);function i(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(r.H`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(r.H`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(r.H`
      void forwardTextureCoordinates() {}
    `)}},34074:(e,t,o)=>{"use strict";o.d(t,{B:()=>m});var r,i=o(85461),a=o(74681),n=o(77625),s=o(30663),l=o(12811),c=o(25117),d=o(6838);function u(e,t){e.include(d.f),e.vertex.include(c.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(i.H`
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
    `)}(r=u||(u={})).ModelTransform=class{constructor(){this.worldFromModel_RS=(0,s.a)(),this.worldFromModel_TH=(0,n.c)(),this.worldFromModel_TL=(0,n.c)()}},r.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=(0,n.c)(),this.worldFromView_TL=(0,n.c)(),this.viewFromCameraRelative_RS=(0,s.a)(),this.projFromView=(0,l.a)()}},r.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},r.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)},(m||(m={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},51206:(e,t,o)=>{"use strict";o.d(t,{i:()=>n});var r=o(85461),i=o(82094);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`
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
  `)}function n(e,t){e.include(i.D,t),e.fragment.code.add(r.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(r.H`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(a),e.fragment.code.add(r.H`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}},36305:(e,t,o)=>{"use strict";o.d(t,{s:()=>p});var r=o(85461),i=o(62213),a=o(61514),n=o(72023),s=o(8681),l=o(34658),c=o(83488),d=o(82094),u=o(74681),m=o(34074);function p(e,t){const o=e.vertex.code,p=e.fragment.code;1!==t.output&&3!==t.output||(e.include(i.w,{linearDepth:!0}),e.include(d.D,t),e.include(s.k,t),e.include(c.F,t),e.include(a.p,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(r.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(l.sj,t),p.add(r.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?r.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(i.w,{linearDepth:!1}),e.include(u.O,t),e.include(m.B,t),e.include(d.D,t),e.include(s.k,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),o.add(r.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?r.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.p,t),e.include(l.sj,t),p.add(r.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?r.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?r.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:r.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(i.w,{linearDepth:!1}),e.include(d.D,t),e.include(s.k,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(r.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(a.p,t),e.include(l.sj,t),e.include(n.b),p.add(r.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?r.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},10832:(e,t,o)=>{"use strict";o.d(t,{Q:()=>a});var r=o(85461),i=o(51206);function a(e,t){const o=e.fragment;o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?o.code.add(r.H`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):o.code.add(r.H`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(r.H`
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
  `)),0!==t.attributeTextureCoordinates&&(e.include(i.i,t),o.code.add(r.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},72582:(e,t,o)=>{"use strict";o.d(t,{K:()=>i});var r=o(85461);function i(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add("ssaoTex","sampler2D"),o.uniforms.add("viewportPixelSz","vec4"),o.code.add(r.H`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):o.code.add(r.H`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}},72884:(e,t,o)=>{"use strict";o.d(t,{X:()=>d});var r=o(85461),i=o(9295),a=o(71613),n=o(87023),s=o(72582);function l(e,t){const o=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(o.uniforms.add("lightingAmbientSH0","vec3"),o.code.add(r.H`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===i?(o.uniforms.add("lightingAmbientSH_R","vec4"),o.uniforms.add("lightingAmbientSH_G","vec4"),o.uniforms.add("lightingAmbientSH_B","vec4"),o.code.add(r.H`
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
    `)):2===i&&(o.uniforms.add("lightingAmbientSH0","vec3"),o.uniforms.add("lightingAmbientSH_R1","vec4"),o.uniforms.add("lightingAmbientSH_G1","vec4"),o.uniforms.add("lightingAmbientSH_B1","vec4"),o.uniforms.add("lightingAmbientSH_R2","vec4"),o.uniforms.add("lightingAmbientSH_G2","vec4"),o.uniforms.add("lightingAmbientSH_B2","vec4"),o.code.add(r.H`
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
    `),1!==t.pbrMode&&2!==t.pbrMode||o.code.add(r.H`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function c(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(r.H`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function d(e,t){const o=e.fragment;e.include(c),e.include(s.K,t),0!==t.pbrMode&&e.include(n.T,t),e.include(l,t),t.receiveShadows&&e.include(a.h,t),o.uniforms.add("lightingGlobalFactor","float"),o.uniforms.add("ambientBoostFactor","float"),e.include(i.e),o.code.add(r.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?o.code.add(r.H`
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
  `):(1===t.viewingMode?o.code.add(r.H`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):o.code.add(r.H`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),o.code.add(r.H`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?o.code.add(r.H`
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
      `):1!==t.pbrMode&&2!==t.pbrMode||(o.code.add(r.H`
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
      `),o.code.add(r.H`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),o.code.add(r.H`
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
      `),o.code.add(r.H`
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
        `),o.code.add(r.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?r.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:r.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}},52369:(e,t,o)=>{"use strict";o.d(t,{k:()=>i});var r=o(85461);function i(e,t){const o=e.fragment;o.code.add(r.H`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?o.code.add(r.H`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?o.code.add(r.H`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):o.code.add(r.H`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}},44624:(e,t,o)=>{"use strict";o.d(t,{j:()=>n});var r=o(85461),i=o(69236),a=o(51206);(0,i.f)(0,.6,.2);function n(e,t){const o=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&i&&e.include(a.i,t),2!==t.pbrMode?(0===t.pbrMode&&o.code.add(r.H`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(o.uniforms.add("emissionFactor","vec3"),o.uniforms.add("mrrFactors","vec3"),o.code.add(r.H`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(o.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texMetallicRoughnessSize","vec2"),o.code.add(r.H`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(o.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texEmissionSize","vec2"),o.code.add(r.H`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(o.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&o.uniforms.add("texOcclusionSize","vec2"),o.code.add(r.H`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):o.code.add(r.H`
      float getBakedOcclusion() { return 1.0; }
      `),o.code.add(r.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):o.code.add(r.H`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}(n||(n={})).bindUniforms=function(e,t,o=!1){o||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},25117:(e,t,o)=>{"use strict";o.d(t,{$:()=>h,I:()=>g});var r=o(95830),i=o(85461),a=o(59472),n=(o(33655),o(77625)),s=o(51007),l=o(56469),c=o(69595),d=o(74038),u=o(71061),m=o(84570);o(89930);class p{constructor(e){this.context=e,this._doublePrecisionRequiresObfuscation=null}get doublePrecisionRequiresObfuscation(){if((0,a.Wi)(this._doublePrecisionRequiresObfuscation)){const e=v(this.context,!1),t=v(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let f=null;function v(e,t){const o=new m.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),r=c.Z.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),i=new d.Z(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:r}),a=(0,n.f)(5633261.287538229,2626832.878767164,1434988.0495278358),p=(0,n.f)(5633271.46742708,2626873.6381334523,1434963.231608387),f=function(o,r){const i=new s.Z(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),a=new Float32Array(6);(0,u.LF)(o,a,3);const n=new Float32Array(6);return(0,u.LF)(r,n,3),e.bindProgram(i),i.setUniform3f("u_highA",a[0],a[2],a[4]),i.setUniform3f("u_lowA",a[1],a[3],a[5]),i.setUniform3f("u_highB",n[0],n[2],n[4]),i.setUniform3f("u_lowB",n[1],n[3],n[5]),i}(a,p),v=e.getBoundFramebufferObject(),{x:h,y:g,width:x,height:b}=e.getViewport();e.bindFramebuffer(o),e.setViewport(0,0,1,1),e.bindVAO(i),e.drawArrays(5,0,4);const y=new Uint8Array(4);o.readPixels(0,0,1,1,6408,5121,y),f.dispose(),i.dispose(!1),r.dispose(),o.dispose(),e.setViewport(h,g,x,b),e.bindFramebuffer(v);const C=(a[2]-p[2])/25,w=(0,l.vP)(y);return Math.abs(C-w)}function h({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`
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
    `)}function g(e){return!!(0,r.Z)("force-double-precision-obfuscation")||function(e){return((0,a.Wi)(f)||f.context!==e)&&(f=new p(e)),f}(e).doublePrecisionRequiresObfuscation}},62734:(e,t,o)=>{"use strict";o.d(t,{a:()=>i});o(95830);var r=o(85461);function i(e,t){r.H`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},42211:(e,t,o)=>{"use strict";o.d(t,{y:()=>a});var r=o(85461),i=o(63230);function a(e){e.include(i.Y),e.code.add(r.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${r.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${r.H.int(3)}) {
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

      if (mode == ${r.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${r.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}}}]);
//# sourceMappingURL=7522.js.map