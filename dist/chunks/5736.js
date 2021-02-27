(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[5736],{54452:(e,t,r)=>{"use strict";r.d(t,{T:()=>s,b:()=>n});var i=r(85461),o=r(51219),a=r(84444);function n(){const e=new o.kG;return e.include(a.k),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("color","vec4"),e.fragment.code.add(i.H`
    void main() {
      vec4 texColor = texture2D(tex, uv);
      gl_FragColor = texColor * color;
    }
  `),e}var s=Object.freeze({__proto__:null,build:n})},74332:(e,t,r)=>{"use strict";r.d(t,{W:()=>m,b:()=>p});var i=r(85461),o=r(62213),a=r(51219),n=r(63230),s=r(61514),d=r(72023),l=r(34658),c=r(71613),h=r(91123),u=r(31777),f=r(83917),g=r(53584);function p(e){const t=new a.kG;return t.include(o.w,{linearDepth:!1}),t.attributes.add("position","vec3"),t.attributes.add("uv0","vec2"),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3"),t.vertex.uniforms.add("waterColor","vec4"),0!==e.output&&7!==e.output||(t.include(f.n,e),t.include(u.q,e),t.varyings.add("vuv","vec2"),t.varyings.add("vpos","vec3"),t.varyings.add("vnormal","vec3"),t.varyings.add("vtbnMatrix","mat3"),t.vertex.code.add(i.H`
      void main(void) {
        if (waterColor.a < ${i.H.float(l.bf)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        gl_Position = transformPosition(proj, view, vpos);
        ${0===e.output?"forwardLinearDepth();":""}
      }
    `)),7===e.output&&(t.include(s.p,e),t.fragment.uniforms.add("waterColor","vec4"),t.fragment.code.add(i.H`
        void main() {
          discardBySlice(vpos);

          gl_FragColor = vec4(waterColor.a);
        }
      `)),0===e.output&&(t.include(h.M,e),t.include(s.p,e),e.receiveShadows&&t.include(c.h,e),t.include(g.B,e),t.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("camPos","vec3").add("timeElapsed","float").add("view","mat4"),t.fragment.include(n.Y),t.fragment.code.add(i.H`
      void main() {
        discardBySlice(vpos);
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
    `)),2===e.output&&(t.include(f.n,e),t.include(h.M,e),t.include(s.p,e),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),t.vertex.code.add(i.H`
        void main(void) {
          if (waterColor.a < ${i.H.float(l.bf)}) {
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
          if (waterColor.a < ${i.H.float(l.bf)}) {
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
    `)),4===e.output&&(t.include(d.b),t.varyings.add("vpos","vec3"),t.vertex.code.add(i.H`
      void main(void) {
        if (waterColor.a < ${i.H.float(l.bf)}) {
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
    `)),t}var m=Object.freeze({__proto__:null,build:p})},82204:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var i=r(33655);function o(e,t,r){const o=e.byteLength/(4*t),l=new Uint32Array(e,0,o*t);let c=new Uint32Array(o);const h=r&&r.minReduction||0,u=r&&r.originalIndices||null,f=r&&r.componentOffsets||null;let g=0;if(f)for(let e=0;e<f.length-1;e++){const t=f[e+1]-f[e];t>g&&(g=t)}else g=o;const p=Math.floor(1.1*g)+1;(null==d||d.length<2*p)&&(d=new Uint32Array((0,i.Sf)(2*p)));for(let e=0;e<2*p;e++)d[e]=0;let m=0;const v=!!f&&!!u,_=v?u.length:o,y=v?new Uint32Array(u.length):null,w=1.96;let b=0!==h?Math.ceil(4*w*w/(h*h)*h*(1-h)):_,x=1,R=f?f[1]:_;for(let e=0;e<_;e++){if(e===b){const t=1-m/e;if(t+w*Math.sqrt(t*(1-t)/e)<h)return null;b*=2}if(e===R){for(let e=0;e<2*p;e++)d[e]=0;if(u)for(let e=f[x-1];e<f[x];e++)y[e]=c[u[e]];R=f[++x]}const r=v?u[e]:e,i=r*t,o=s(l,i,t);let n=o%p,g=m;for(;0!==d[2*n+1];){if(d[2*n]===o){const e=d[2*n+1]-1;if(a(l,i,e*t,t)){g=c[e];break}}n++,n>=p&&(n-=p)}g===m&&(d[2*n]=o,d[2*n+1]=r+1,m++),c[r]=g}if(0!==h&&1-m/o<h)return null;if(v){for(let e=f[x-1];e<y.length;e++)y[e]=c[u[e]];c=y}const C=new Uint32Array(t*m);m=0;for(let e=0;e<_;e++)c[e]===m&&(n(l,(v?u[e]:e)*t,C,m*t,t),m++);if(u&&!v){const e=new Uint32Array(u.length);for(let t=0;t<e.length;t++)e[t]=c[u[t]];c=e}return{buffer:C.buffer,indices:c,uniqueCount:m}}function a(e,t,r,i){for(let o=0;o<i;o++)if(e[t+o]!==e[r+o])return!1;return!0}function n(e,t,r,i,o){for(let a=0;a<o;a++)r[i+a]=e[t+a]}function s(e,t,r){let i=0;for(let o=0;o<r;o++)i=e[t+o]+i|0,i=i+(i<<11)+(i>>>2)|0;return i>>>0}let d=null},85736:(e,t,r)=>{"use strict";r.d(t,{Mk:()=>bt,VP:()=>xt,rm:()=>Ct});var i=r(6962),o=r(59472),a=r(33655),n=r(77625),s=r(17387),d=r(17333),l=r(92232);r(82204);function c(e,t,r){const i=e.length,o=new Array(i),a=new Array(i),n=new Array(i);let s=0,d=0,c=0,u=0;for(let t=0;t<i;++t)u+=e[t].length;const f=new Float64Array(3*u);let g=0;for(let u=i-1;u>=0;u--){const p=e[u],m=1===r&&!(0,l.bu)(p,!1,!1);if(m&&1!==i)o[s++]=p;else{let e=p.length;for(let t=0;t<s;++t)e+=o[t].length;const r={index:g,pathLengths:new Array(s+1),count:e,holeIndices:new Array(s)};r.pathLengths[0]=p.length,p.length>0&&(n[c++]={index:g,count:p.length}),g=m?h(p,p.length-1,-1,f,g,p.length,t):h(p,0,1,f,g,p.length,t);for(let e=0;e<s;++e){const i=o[e];r.holeIndices[e]=g,r.pathLengths[e+1]=i.length,i.length>0&&(n[c++]={index:g,count:i.length}),g=h(i,0,1,f,g,i.length,t)}s=0,r.count>0&&(a[d++]=r)}}for(let e=0;e<s;++e){const r=o[e];r.length>0&&(n[c++]={index:g,count:r.length}),g=h(r,0,1,f,g,r.length,t)}return d<i&&(a.length=d),c<i&&(n.length=c),{position:f,polygons:a,outlines:n}}function h(e,t,r,i,o,a,n){o*=3;for(let s=0;s<a;++s){const a=e[t];i[o++]=a[0],i[o++]=a[1],i[o++]=n?a[2]:0,t+=r}return o/3}var u=r(69534),f=r(81718),g=r(43965),p=r(56140),m=(r(95830),r(36544)),v=(r(68055),r(79881)),_=r(87566),y=(r(10923),r(57002),r(86035),r(62698)),w=r(82677),b=r(59691),x=r(80621),R=r(67128),C=r(77293),T=r(55735),S=r(8634),E=r(57319),I=r(10346);class O{constructor(e=(0,n.c)(),t=(0,n.f)(.57735,.57735,.57735),r=!0){this.intensity=e,this.direction=t,this.castShadows=r}}class M{constructor(e=(0,n.c)(),t=(0,n.f)(.57735,.57735,.57735)){this.intensity=(0,n.c)(),this.direction=(0,n.c)(),this.intensity=e,this.direction=t}}class D{constructor(e=(0,n.c)()){this.intensity=e}}class P{constructor(){this.sh={r:[0],g:[0],b:[0]}}}var H=r(81495),A=r(90168);let L=class extends w.default{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.SCENEVIEW_LOCKING_LOG=!1,this.HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED=!1,this.HIGHLIGHTS_PROFILE_TO_CONSOLE=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TERRAIN_DEBUG_POPUP=!1,this.TESTS_DISABLE_UPDATE_THRESHOLDS=!1,this.DISABLE_DECONFLICTOR_VISIBILITY_OFFSET=!1,this.DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.ENABLE_PROFILE_DEPTH_RANGE=!1,this.DISABLE_FAST_UPDATES=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1}};(0,p._)([(0,v.Cb)()],L.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"SCENEVIEW_LOCKING_LOG",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"HIGHLIGHTS_GRID_OPTIMIZATION_DISABLED",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"HIGHLIGHTS_PROFILE_TO_CONSOLE",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"LABELS_SHOW_BORDER",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"SHOW_POI",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"TERRAIN_DEBUG_POPUP",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"TESTS_DISABLE_UPDATE_THRESHOLDS",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"DISABLE_DECONFLICTOR_VISIBILITY_OFFSET",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"DISABLE_ELEVATION_ALIGNERS_ITERATIVE_UPDATES",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"ENABLE_PROFILE_DEPTH_RANGE",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"DISABLE_FAST_UPDATES",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,p._)([(0,v.Cb)()],L.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),L=(0,p._)([(0,_.j)("esri.views.3d.support.DebugFlags")],L);const N=new L;var U=r(91852),z=(r(5627),r(84570));r(89930);class F{constructor(e,t,r,i){this._renderTarget=null,this.id=`${t}_${++r}`,this._renderTarget=new z.Z(e,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,hasMipmap:i,maxAnisotropy:8,width:0,height:0})}dispose(){this._renderTarget.dispose(),this._renderTarget=null}getTexture(){return this._renderTarget?this._renderTarget.colorTexture:null}isValid(){return null!==this._renderTarget}resize(e,t){this._renderTarget.resize(e,t)}bind(e){e.bindFramebuffer(this._renderTarget)}generateMipMap(){this._renderTarget.colorTexture.descriptor.hasMipmap&&this._renderTarget.colorTexture.generateMipmap()}disposeRenderTargetMemory(){this._renderTarget&&this._renderTarget.resize(0,0)}getGpuMemoryUsage(){let e=0;return this._renderTarget&&(e+=(0,E.un)(this._renderTarget)),e}}var G=r(50897);class V{constructor(e,t){this.vec3=e,this.id=t}}function W(e,t,r,i){return new V((0,n.f)(e,t,r),i)}class k{constructor(e,t){this.extent=(0,G.Ue)(),this.resolution=0,this.renderLocalOrigin=W(0,0,0,"O"),this.pixelRatio=1,this.renderTargets={color:{fbo:new F(e,"overlay",t,!0),valid:!1,lastUsed:1/0},colorWithoutRasterImage:{fbo:new F(e,"overlayWithoutRasterImage",t,!0),valid:!1,lastUsed:1/0},highlight:{fbo:new F(e,"overlayHighlight",t,!1),valid:!1,lastUsed:1/0},water:{fbo:new F(e,"overlayWaterMask",t,!0),valid:!1,lastUsed:1/0},occluded:{fbo:new F(e,"overlayOccluded",t,!0),valid:!1,lastUsed:1/0}}}dispose(){this.renderTargets.color.fbo.dispose(),this.renderTargets.colorWithoutRasterImage.fbo.dispose(),this.renderTargets.highlight.fbo.dispose(),this.renderTargets.water.fbo.dispose(),this.renderTargets.occluded.fbo.dispose()}drawRenderTargets(e,t,r){const i=this.renderTargets;i.color.valid=e.drawPass(0,i.color.fbo,t),i.highlight.valid=e.drawPass(5,i.highlight.fbo,t),i.water.valid=e.drawPass(3,i.water.fbo,t),i.occluded.valid=e.drawPass(0,i.occluded.fbo,t,1),i.colorWithoutRasterImage.valid=r&&e.drawPass(0,i.colorWithoutRasterImage.fbo,t,2)}computeRenderTargetValidityBitfield(){const e=this.renderTargets;return+e.color.valid|+e.colorWithoutRasterImage.valid<<1|+e.highlight.valid<<2|+e.water.valid<<3|+e.occluded.valid<<4}validateUsage(e,t){if(e.valid)e.lastUsed=t;else if(t-e.lastUsed>B)e.fbo.disposeRenderTargetMemory(),e.lastUsed=1/0;else if(e.lastUsed<1/0)return!0;return!1}collectUnusedMemory(e){let t=!1;return t=this.validateUsage(this.renderTargets.color,e)||t,t=this.validateUsage(this.renderTargets.colorWithoutRasterImage,e)||t,t=this.validateUsage(this.renderTargets.highlight,e)||t,t=this.validateUsage(this.renderTargets.occluded,e)||t,t=this.validateUsage(this.renderTargets.water,e)||t,t}getGpuMemoryUsage(){return this.renderTargets.color.fbo.getGpuMemoryUsage()+this.renderTargets.colorWithoutRasterImage.fbo.getGpuMemoryUsage()+this.renderTargets.highlight.fbo.getGpuMemoryUsage()+this.renderTargets.water.fbo.getGpuMemoryUsage()+this.renderTargets.occluded.fbo.getGpuMemoryUsage()}}const B=1e3;var j=r(19677);class Z{constructor(){this._uniforms={proj:[],shadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}dispose(){this._uniforms=null}getPrograms(e){return this._uniforms[e]||[]}subscribeProgram(e){for(const t in this._uniforms)e.hasUniform(t)&&this._uniforms[t].push(e)}unsubscribeProgram(e){for(const t in this._uniforms)(0,j.e$)(this._uniforms[t],e)}}var q=r(39105);class ${constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}class Y{constructor(e){this._context=e,this._perConstructorInstances=new Map,this._frameCounter=0,this._keepAliveFrameCount=1200}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.dispose())))),this._perConstructorInstances.clear()}acquire(e,t){const r=t.key;let i=this._perConstructorInstances.get(e);i||(i=new Map,this._perConstructorInstances.set(e,i));let o=i.get(r);return void 0===o&&(o=new $(new e(this._context,t)),i.set(r,o)),++o.refCount,o.technique}acquireAndReleaseExisting(e,t,r){return(0,o.Wi)(r)?this.acquire(e,t):t.key===r.key&&r instanceof e?r:(this.release(r),this.acquire(e,t))}release(e){const t=this._perConstructorInstances.get(e.constructor).get(e.key);t.refCount-=1,0===t.refCount&&(t.refZeroFrame=this._frameCounter)}frameUpdate(){this._frameCounter++,this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((t,r)=>{0===t.refCount&&t.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(t.technique.dispose(),e.delete(r))})),0===e.size&&this._perConstructorInstances.delete(t)}))}getProgramsUsingUniform(e){return this._context.commonUniformStore.getPrograms(e)}async hotReload(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{e.push((async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>{e.technique.reload(this._context)})))})(t,r))})),await(0,q.all)(e)}}var K=r(56469);const Q=[{output:0,name:"color"},{output:1,name:"depth"},{output:2,name:"normal"},{output:3,name:"depthShadowMap"},{output:4,name:"highlight"},{output:5,name:"draped"},{output:6,name:"occlusion"},{output:7,name:"alpha"}];function X(e,t){return e+"_"+Q.find((e=>e.output===t)).name}const J=m.Z.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRep");class ee{constructor(e){this.refCnt=0,this.glMaterial=e}incRefCnt(){++this.refCnt}decRefCnt(){--this.refCnt,(0,K.hu)(this.refCnt>=0)}getRefCnt(){return this.refCnt}getGLMaterial(){return this.glMaterial}}var te=r(73032),re=r(12811),ie=r(88909),oe=r(68500),ae=r(89852),ne=r(57511);let se=0;class de{constructor(){this.ROOT_ORIGIN_ID="rg_root_"+se++,this._origins=new Map,this._gridSize=42e5}getOrigin(e){const t=this._origins.get(this.ROOT_ORIGIN_ID);if(null==t){if((0,o.pC)(de.testOrigin)){const t=de.testOrigin;return this._origins.set(this.ROOT_ORIGIN_ID,W(t[0],t[1],t[2],this.ROOT_ORIGIN_ID)),this.getOrigin(e)}const t=W(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);return this._origins.set(this.ROOT_ORIGIN_ID,t),t}(0,s.f)(le,e,t.vec3),le[0]=Math.abs(le[0]),le[1]=Math.abs(le[1]),le[2]=Math.abs(le[2]);const r=this._gridSize;if(le[0]<r&&le[1]<r&&le[2]<r)return t;const i=Math.round(e[0]/r),a=Math.round(e[1]/r),n=Math.round(e[2]/r),d=`rg_${i}/${a}/${n}`;let l=this._origins.get(d);return l||(l=W(i*r,a*r,n*r,d),this._origins.set(d,l)),l}_drawOriginBox(e){const t=window.view,r=t._stage;if(null==this._object){this._material=new ne.U({width:2,color:[0,1,0,1]},"GridLocalOriginMaterial"),r.add(3,this._material);const e=new ae.Z("GridLocalOrigin",{isPickable:!1});r.add(0,e),this._object=new ie.Z({idHint:"GridLocalOrigin",castShadow:!1}),r.add(1,this._object),e.addObject(this._object),r.addToViewContent([e.id])}const i=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],o=i.length,a=new Float32Array(3*o),n=new Uint32Array(2*(o-1)),s=.5*this._gridSize;for(let t=0;t<o;t++)a[3*t+0]=e[0]+(1&i[t]?s:-s),a[3*t+1]=e[1]+(2&i[t]?s:-s),a[3*t+2]=e[2]+(4&i[t]?s:-s),t>0&&(n[2*t+0]=t-1,n[2*t+1]=t);(0,d.CM)(a,te.Z.WebMercator,0,a,t.spatialReference,0,o);const l={};l[K.Xt.POSITION]={size:3,data:a};const c={};c[K.Xt.POSITION]=n;const h=new u.b(l,c,"line"),f=new oe.Z(h,"GridLocalOriginBox");r.add(2,f),this._object.addGeometry(f,this._material,re.I),console.log(this._origins.size,e)}}const le=(0,n.c)();!function(e){e.testOrigin=null}(de||(de={}));const ce=de;var he=r(10762);function ue(e){return t=e.data,(0,K.kV)(t.indices).length>=1;var t}var fe=r(1227),ge=r(69595),pe=r(74038),me=r(49366);class ve{constructor(e){null==e?e=16:e<65536&&(e=(0,a.Sf)(e)),this._array=new Float32Array(e),this._size=0}resize(e,t){if(this._size=e,this._size>this._array.length){let e=this._array.length||1;for(;e<this._size;)e*=2;const r=new Float32Array(e);return t&&r.set(this._array),this._array=r,!0}const r=2*this._size;if(r<=this._array.length){let e=this._array.length;for(;e>=r;)e=Math.floor(e/2);const i=new Float32Array(e);return t&&i.set(this._array.subarray(0,e)),this._array=i,!0}return!1}append(e){const t=this._size;this.resize(this._size+e.length,!0),this._array.set(e,t)}erase(e,t){for(let r=e;r<t;++r)this._array[r]=0}get array(){return this._array}get size(){return this._size}}var _e=r(26701),ye=r(23240),we=r(97853),be=r(44801),xe=r(11379),Re=r(51007),Ce=r(36904),Te=r(89553),Se=r(68397),Ee=r(61514),Ie=r(72023),Oe=r(66704),Me=r(71613),De=r(75619),Pe=r(91123),He=r(74332);class Ae extends we.A{constructor(e,t){super(e,t),this.waterTextureRepository=e.waterTextureRepository}initializeProgram(e){const t=Ae.shader.get(),r=this.configuration,i=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:r.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:r.useSSR,highStepCount:!0});return new Re.Z(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),xe.i)}ensureResource(e){return this.waterTextureRepository.ready||this.waterTextureRepository.updating||this.waterTextureRepository.loadTextures(e),this.waterTextureRepository.ready?2:1}bindPass(e,t,r){Te.G.bindProjectionMatrix(this.program,r.camera.projectionMatrix),0===this.configuration.output&&(r.lighting.setUniforms(this.program,!1),De.P.bindUniforms(this.program,e,r)),0!==this.configuration.output&&2!==this.configuration.output||(Pe.M.bindUniforms(this.program,t),this.waterTextureRepository.bindRepo(e)),this.program.setUniform4fv("waterColor",t.color),4===this.configuration.output&&Ie.b.bindOutputHighlight(e,this.program,r)}bindDraw(e){Te.G.bindView(this.program,e),0!==this.configuration.output&&7!==this.configuration.output||Te.G.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),0===this.configuration.output&&Me.h.bindUniforms(this.program,e,Se.G.SHADOW_MAP),0!==this.configuration.output&&7!==this.configuration.output&&4!==this.configuration.output||Ee.p.bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e){const t=this.configuration,r=3===e,i=2===e;return(0,Ce.sm)({blending:2!==t.output&&4!==t.output&&t.transparent?r?Oe.wu:(0,Oe.$L)(e):null,depthTest:{func:(0,Oe.$x)(e)},depthWrite:r?t.writeDepth&&Ce.LZ:(0,Oe.Vc)(e),colorWrite:Ce.BK,polygonOffset:r||i?null:(0,Oe.je)(t.enableOffset)})}initializePipeline(){return this.setPipelineState(this.configuration.transparencyPassType)}}Ae.shader=new ye.J(He.W,(()=>r.e(6815).then(r.bind(r,16815))));class Le extends be.m{constructor(){super(...arguments),this.output=0,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.useSSR=!1,this.isDraped=!1,this.transparencyPassType=3}}(0,p._)([(0,be.o)({count:8})],Le.prototype,"output",void 0),(0,p._)([(0,be.o)()],Le.prototype,"receiveShadows",void 0),(0,p._)([(0,be.o)()],Le.prototype,"slicePlaneEnabled",void 0),(0,p._)([(0,be.o)()],Le.prototype,"transparent",void 0),(0,p._)([(0,be.o)()],Le.prototype,"enableOffset",void 0),(0,p._)([(0,be.o)()],Le.prototype,"writeDepth",void 0),(0,p._)([(0,be.o)()],Le.prototype,"useSSR",void 0),(0,p._)([(0,be.o)()],Le.prototype,"isDraped",void 0),(0,p._)([(0,be.o)({count:4})],Le.prototype,"transparencyPassType",void 0);class Ne extends _e.Z{constructor(e){super(e),this.updateParameters()}updateParameters(e){this.technique=this.techniqueRep.acquireAndReleaseExisting(Ae,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){if(2===this.output)return 22===e;if(5===this.output)return null==e;if(4===this.output)return 3===e;let t=3;return this.material.params.transparent&&(t=this.material.params.writeDepth?5:8),e===t}setElapsedTimeUniform(e){const t=.001*this.material.animation.time;e.setUniform1f("timeElapsed",t*this.material.params.animationSpeed)}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.receiveShadows&&this.material.setParameterValues({receiveShadows:e.shadowMappingEnabled})}_updateSSRState(e){e.ssrEnabled!==this.material.params.ssrEnabled&&this.material.setParameterValues({ssrEnabled:e.ssrEnabled})}ensureResources(e){return this.technique.ensureResource(e)}ensureParameters(e){0===this.output&&(this._updateShadowState(e),this._updateSSRState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),2!==this.output&&0!==this.output||this.setElapsedTimeUniform(this.technique.program)}}class Ue{constructor(e,t,r,i,o,a){this.from=e,this.to=t,this.isVisible=r,this.hasHighlights=i,this.hasOccludees=o,this.transformation=a,null!=a&&(this.transformationNormal=(0,re.b)(a),(0,R.a)(this.transformationNormal,this.transformationNormal),(0,R.b)(this.transformationNormal,this.transformationNormal))}}function ze(e,t){const r=e=>({first:e.from,count:e.to-e.from});if(0===e.length)return void e.push(r(t));const i=e[e.length-1];if(a=t,(o=i).first+o.count>=a.from){const e=t.from-i.first+t.to-t.from;i.count=e}else e.push(r(t));var o,a}function Fe(e,t,r){(0,o.pC)(r)&&(r.drawCalls+=e,r.triangles+=t)}const Ge={begin:0,end:0},Ve=(0,re.a)(),We=(0,re.a)(),ke=(0,re.a)();class Be{}let je=class extends w.default{constructor(){super(...arguments),this._pendingAddsRemoves=new Map,this._adds=new y.Z,this._removes=new y.Z,this._updates=new y.Z({allocator:e=>e||new Be,deallocator:e=>(e.renderGeometry=null,e)}),this._materialRenderers=new Map,this._sortedMaterialRenderers=new y.Z,this._hasHighlights=!1,this._hasWater=!1}dispose(){this._adds.prune(),this._removes.prune(),this._updates.prune(),this._materialRenderers&&(this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear())}get updating(){return this._pendingAddsRemoves.size>0||this._updates.length>0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return(0,C.o)(this._materialRenderers,(e=>e.rendersOccluded))}stopAnimationsAtTime(e){this._sortedMaterialRenderers.forAll((t=>(0,o.yw)(t.material.animation,(t=>t.stopAtTime(e)))))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size}commitChanges(){let e=!1;if(!this.updating)return!1;this.updateAddsRemoves();const t=function(e){const t=new Map;let r=null,i=null;const o=e=>{if(e===r)return i;let o=t.get(e);return o||(o={toAdd:[],numToAdd:-1,toRemove:[],numToRemove:-1,toUpdate:[],numToUpdate:-1},t.set(e,o)),r=e,i=o,o};for(let t=0;t<e.numToAdd;t++){const r=e.toAdd[t];ue(r)&&o(r.material).toAdd.push(r)}for(let t=0;t<e.numToRemove;t++){const r=e.toRemove[t];ue(r)&&o(r.material).toRemove.push(r)}for(let t=0;t<e.numToUpdate;t++){const r=e.toUpdate[t];ue(r.renderGeometry)&&o(r.renderGeometry.material).toUpdate.push(r)}return t}({numToAdd:this._adds.length,toAdd:this._adds.data,numToRemove:this._removes.length,toRemove:this._removes.data,numToUpdate:this._updates.length,toUpdate:this._updates.data});let r=!1,i=!1;return t.forEach(((t,a)=>{let n=this._materialRenderers.get(a);if(!n&&t.toAdd.length>0&&(n=new class{constructor(e,t,r){this.type="MergedRenderer",this._dataByOrigin=new Map,this._hasHighlights=!1,this._hasOccludees=!1,this._rctx=e,this._material=r,this._materialRep=t,this._glMaterials=(0,me.a9)(this._material,this._materialRep),this._bufferWriter=r.createBufferWriter()}dispose(){(0,me.BX)(this._material,this._materialRep),this._dataByOrigin&&(this._dataByOrigin.forEach((e=>{e.vao.dispose(!0),e.vao=null})),this._dataByOrigin.clear(),this._dataByOrigin=null),this._glMaterials&&(this._glMaterials.forEach((e=>{e&&e.dispose()})),this._glMaterials.clear(),this._glMaterials=null)}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&(0,C.o)(this._glMaterials,(e=>e instanceof Ne))}get rendersOccluded(){return!this.isEmpty&&1!==this._material.renderOccluded}modify(e){this.updateGeometries(e.toUpdate),this.addAndRemoveGeometries(e.toAdd,e.toRemove),this.updateRenderCommands()}addAndRemoveGeometries(e,t){const r=this._bufferWriter,i=r.vertexBufferLayout,o=i.stride/4,a=this._dataByOrigin,n=function(e,t,r,i){const o=new Map,a=t.vertexBufferLayout.stride/4,n=(r,i)=>{const n=r.origin,s=e.get(n.id);let d=o.get(n.id);null==d&&(d={optimalCount:null==s?0:s.optimalCount,sparseCount:null==s?0:s.buffer.size,toAdd:[],toRemove:[],origin:n.vec3},o.set(n.id,d));const l=t.elementCount(r.data)*a;i?(d.optimalCount+=l,d.sparseCount+=l,d.toAdd.push(r)):(d.optimalCount-=l,d.toRemove.push(r))};for(const e of r)n(e,!0);for(const e of i)n(e,!1);return o}(a,r,e,t);n.forEach(((e,t)=>{n.delete(t);const r=e.optimalCount,s=e.sparseCount;let d=a.get(t);if(null==d)(0,K.hu)(r>0),d=this.createData(i,r,e.origin),a.set(t,d);else if(0===r)return d.vao.dispose(!0),d.vao=null,void a.delete(t);const l=r<e.sparseCount/2,c=l?r:s,h=Ge,u=d.buffer.size,f=d.buffer.array,g=d.buffer.resize(c,!1);l||g?this.removeAndRebuild(d,e.toRemove,o,f,h):e.toRemove.length>0?(this.removeByErasing(d,e.toRemove,o,h),e.toAdd.length>0&&(h.end=u)):(h.begin=u,h.end=u);const p=Ve;(0,K.u_)(p,-e.origin[0],-e.origin[1],-e.origin[2]),this.append(d,e.toAdd,o,p,h);const m=d.vao.vertexBuffers.geometry;if(m.byteSize!==d.buffer.array.buffer.byteLength)m.setData(d.buffer.array);else{const{begin:e,end:t}=h;if(e<t){const r=d.buffer.array,i=4,o=e*i,a=t*i;m.setSubData(r,o,o,a)}}d.drawCommandsDirty=!0}))}updateGeometries(e){const t=this._bufferWriter,r=t.vertexBufferLayout.stride/4;for(const i of e){const e=i.updateType,o=i.renderGeometry,a=this._dataByOrigin.get(o.origin.id),n=a&&a.instances.get(o.uniqueName);if(!n)return;if(1&e&&(n.isVisible=o.instanceParameters.visible),9&e){const e=o.instanceParameters.visible;n.hasHighlights=!!o.instanceParameters.highlights&&e}if(16&e&&(n.hasOccludees=!!o.instanceParameters.occludees),6&e){const e=a.buffer.array,i=a.vao;(0,me.Wr)(o,We,ke),t.write({transformation:We,invTranspTransformation:ke},o.data,t.vertexBufferLayout.createView(e.buffer),n.from),(0,K.hu)(n.from+t.elementCount(o.data)===n.to,"material VBO layout has changed"),i.vertexBuffers.geometry.setSubData(e,n.from*r*4,n.from*r*4,n.to*r*4)}a.drawCommandsDirty=!0}}updateRenderCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((e=>{e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,(0,C.o)(e.instances,(t=>(t.isVisible?(t.hasHighlights&&(this._hasHighlights=!0,e.hasHighlights=!0),t.hasOccludees&&(this._hasOccludees=!0,e.hasOccludees=!0)):e.hasHiddenInstances=!0,e.hasHiddenInstances&&e.hasHighlights&&e.hasOccludees)))})),this._dataByOrigin.forEach((e=>{e.drawCommandsDirty&&((e=>{if(e.drawCommandsDefault=null,e.drawCommandsHighlight=null,e.drawCommandsOccludees=null,e.stats={default:0,highlight:0,occludees:0},0===e.instances.size)return;if(!(e.hasOccludees||e.hasHighlights||e.hasHiddenInstances)){const t=4*e.buffer.size/(0,E.m)(e.vao.layout.geometry);return e.drawCommandsDefault=[{first:0,count:t}],void(e.stats={default:t,highlight:0,occludees:0})}const t=function(e){return e.sort(((e,t)=>e.from===t.from?e.to>t.to?1:e.to<t.to?-1:0:e.from>t.from?1:e.from<t.from?-1:0))}([...e.instances.values()]);e.drawCommandsDefault=[],e.drawCommandsHighlight=[],e.drawCommandsOccludees=[];for(const r of t)r.isVisible&&(r.hasOccludees?ze(e.drawCommandsOccludees,r):ze(e.drawCommandsDefault,r),r.hasHighlights&&ze(e.drawCommandsHighlight,r));const r=e=>{let t=0;for(const r of e)t+=r.count;return t/3};e.stats={default:r(e.drawCommandsDefault),highlight:r(e.drawCommandsHighlight),occludees:r(e.drawCommandsOccludees)}})(e),e.drawCommandsDirty=!1)}))}updateLogic(e){return this._material.update(e)}render(e,t,r,i){const a=this._rctx,n=this._glMaterials.get(t.pass),s=5===t.pass;let d=e;if(3===t.pass&&null===d&&(d=22),!n||2!==n.ensureResources(a)||null!=d&&!n.beginSlot(d)||s&&!this._hasHighlights)return!1;n.ensureParameters(r);const l=n.getTechnique(),c=n.getPipelineState(d,!1);a.setPipelineState(c),n.bind(a,r);let h=!1;return this._dataByOrigin.forEach((e=>{if((0,o.Wi)(e.drawCommandsDefault)&&(0,o.Wi)(e.drawCommandsHighlight)&&(0,o.Wi)(e.drawCommandsOccludees))return;if(s&&!e.hasHighlights)return;r.origin=e.origin,l.bindDraw(r),l.ensureAttributeLocations(e.vao),a.bindVAO(e.vao);const t=l.primitiveType;let u=s?e.drawCommandsHighlight:e.drawCommandsDefault;const f=s?e.stats.highlight:e.stats.default;if((0,o.pC)(u)&&(this.renderCommands(a,t,u),Fe(u.length,f,i),h=!0),!s&&(u=e.drawCommandsOccludees,(0,o.pC)(u))){const r=n.getPipelineState(d,!0);a.setPipelineState(r),this.renderCommands(a,t,u),a.setPipelineState(c),Fe(u.length,e.stats.occludees,i),h=!0}})),h}renderCommands(e,t,r){for(let i=0;i<r.length;i++)e.drawArrays(t,r[i].first,r[i].count)}createData(e,t,r){return{instances:new Map,vao:new pe.Z(this._rctx,this._material.vertexAttributeLocations,{geometry:(0,fe.K)(e)},{geometry:ge.Z.createVertex(this._rctx,35044)}),buffer:new ve(t),optimalCount:0,origin:r,hasHiddenInstances:!1,hasHighlights:!1,hasOccludees:!1,drawCommandsDirty:!1,drawCommandsDefault:null,drawCommandsOccludees:null,drawCommandsHighlight:null,stats:{default:0,highlight:0,occludees:0}}}removeAndRebuild(e,t,r,i,o){for(const i of t){const t=i.uniqueName,o=e.instances.get(t);e.optimalCount-=(o.to-o.from)*r,e.instances.delete(t)}let a=0;const n=e.buffer.array;o.begin=0,o.end=0;let s=-1,d=-1,l=0;e.instances.forEach((e=>{const t=e.from*r,o=e.to*r,c=o-t;s!==d&&d!==t?(n.set(i.subarray(s,d),l),l+=d-s,s=t):-1===s&&(s=t),d=o,e.from=a/r,a+=c,e.to=a/r})),s!==d&&n.set(i.subarray(s,d),l),o.end=a}removeByErasing(e,t,r,i){i.begin=1/0,i.end=-1/0;let o=-1,a=-1;for(const n of t){const t=n.uniqueName,s=e.instances.get(t),d=s.from*r,l=s.to*r;o!==a&&a!==d?(e.buffer.erase(o,a),o=d):-1===o&&(o=d),a=l,e.instances.delete(t),e.optimalCount-=l-d,d<i.begin&&(i.begin=d),l>i.end&&(i.end=l)}o!==a&&e.buffer.erase(o,a)}append(e,t,r,i,a){const n=this._bufferWriter;for(const s of t){const t=(0,o.pC)(s.transformation)?(0,R.m)(We,i,s.transformation):i;(0,R.a)(ke,t),(0,R.b)(ke,ke);const d=a.end;n.write({transformation:t,invTranspTransformation:ke},s.data,n.vertexBufferLayout.createView(e.buffer.array.buffer),a.end/r);const l=n.elementCount(s.data)*r,c=d+l;(0,K.hu)(null==e.instances.get(s.uniqueName));const h=s.instanceParameters.visible,u=!!s.instanceParameters.highlights&&h,f=!!s.instanceParameters.occludees,g=new Ue(d/r,c/r,h,u,f);e.instances.set(s.uniqueName,g),e.optimalCount+=l,a.end+=l}}get test(){return{material:this._material,glMaterials:this._glMaterials}}}(this.rctx,this.materialRepository,a),this._materialRenderers.set(a,n),e=!0,r=!0,i=!0),!n)return;const s=r||n.hasHighlights,d=i||n.hasWater;n.modify(t),r=r||s!==n.hasHighlights,i=i||d!==n.hasWater,n.isEmpty&&(this._materialRenderers.delete(a),n.dispose(),e=!0)})),this._adds.clear(),this._removes.clear(),this._updates.clear(),this._pendingAddsRemoves.clear(),e&&this.updateSortedMaterialRenderers(),r&&(this._hasHighlights=(0,C.o)(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=(0,C.o)(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}add(e){if(0===e.length)return;const t=0===this._pendingAddsRemoves.size;for(const t of e)this._pendingAddsRemoves.set(t,0);t&&this.notifyChange("updating")}remove(e){const t=0===this._pendingAddsRemoves.size;for(const t of e){const e=this._pendingAddsRemoves.get(t);0===e?this._pendingAddsRemoves.set(t,2):2!==e&&this._pendingAddsRemoves.set(t,1)}t&&this._pendingAddsRemoves.size>0&&this.notifyChange("updating")}modify(e,t){const r=0===this._updates.length;for(const r of e){const e=this._updates.pushNew();e.renderGeometry=r,e.updateType=t}r&&this._updates.length>0&&this.notifyChange("updating")}updateLogic(e){let t=!1;return this._sortedMaterialRenderers.forAll((({materialRenderer:r})=>{r.updateLogic&&r.updateLogic(e)&&(t=!0)})),t}draw(e,t){for(let r=0;r<this._sortedMaterialRenderers.length;r++){const i=this._sortedMaterialRenderers.data[r];(0,he.Pb)(i.material,e)&&i.materialRenderer.render(null,e,t,null)}}updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((t,r)=>{r.insertOrder=e++,this._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort(((e,t)=>{const r=t.material.renderPriority-e.material.renderPriority;return 0!==r?r:e.material.insertOrder-t.material.insertOrder}))}updateAddsRemoves(){this._adds.clear(),this._removes.clear(),this._pendingAddsRemoves.forEach(((e,t)=>{switch(e){case 0:this._adds.push(t);break;case 1:this._removes.push(t)}}));let e=0;for(;e<this._updates.length;){const t=this._updates.data[e].renderGeometry;this._pendingAddsRemoves.has(t)?this._updates.removeUnorderedIndex(e):e++}}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};(0,p._)([(0,v.Cb)()],je.prototype,"rctx",void 0),(0,p._)([(0,v.Cb)()],je.prototype,"materialRepository",void 0),(0,p._)([(0,v.Cb)()],je.prototype,"updating",null),je=(0,p._)([(0,_.j)("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],je);var Ze=r(54452);class qe extends we.A{initializeProgram(e){const t=qe.shader.get().build();return new Re.Z(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),xe.i)}initializePipeline(){return this.configuration.hasAlpha?(0,Ce.sm)({blending:(0,Ce.wK)(770,1,771,771),colorWrite:Ce.BK}):(0,Ce.sm)({colorWrite:Ce.BK})}}qe.shader=new ye.J(Ze.T,(()=>r.e(1225).then(r.bind(r,61225))));class $e extends be.m{constructor(){super(...arguments),this.hasAlpha=!1}}function Ye(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t[i];return r}function Ke(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t;return r}function Qe(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]+t[i];return r}function Xe(e){return(e+1)*(e+1)}function Je(e,t,r){const i=e[0],o=e[1],a=e[2],n=r||[];return n.length=Xe(t),t>=0&&(n[0]=.28209479177),t>=1&&(n[1]=.4886025119*i,n[2]=.4886025119*a,n[3]=.4886025119*o),t>=2&&(n[4]=1.09254843059*i*o,n[5]=1.09254843059*o*a,n[6]=.31539156525*(3*a*a-1),n[7]=1.09254843059*i*a,n[8]=.54627421529*(i*i-o*o)),n}function et(e,t){const r=function(e){return(0,a.uZ)(Math.floor(Math.sqrt(e)-1),0,2)}(t.r.length);for(const i of e)(0,s.p)(st,i.direction),Je(st,r,at),Ye(at,dt),Ke(at,i.intensity[0],nt),Qe(t.r,nt),Ke(at,i.intensity[1],nt),Qe(t.g,nt),Ke(at,i.intensity[2],nt),Qe(t.b,nt);return t}function tt(e,t,r){(function(e,t){const r=Xe(e),i=t||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let e=0;e<r;e++)i.r[e]=i.g[e]=i.b[e]=0})(t,r.sphericalHarmonics.sh),(0,s.s)(r.main.intensity,0,0,0);let i=!1;const o=rt,a=it,n=ot;o.length=0,a.length=0,n.length=0;for(const t of e)t instanceof O&&!i?((0,s.g)(r.main.direction,t.direction),r.main.intensity[0]=t.intensity[0],r.main.intensity[1]=t.intensity[1],r.main.intensity[2]=t.intensity[2],r.main.castShadows=t.castShadows,i=!0):t instanceof O||t instanceof M?o.push(t):t instanceof D?a.push(t):t instanceof P&&n.push(t);et(o,r.sphericalHarmonics.sh),function(e,t){Je(st,0,at);for(const r of e)t.r[0]+=at[0]*dt[0]*r.intensity[0]*4*Math.PI,t.g[0]+=at[0]*dt[0]*r.intensity[1]*4*Math.PI,t.b[0]+=at[0]*dt[0]*r.intensity[2]*4*Math.PI}(a,r.sphericalHarmonics.sh);for(const e of n)Qe(r.sphericalHarmonics.sh.r,e.sh.r),Qe(r.sphericalHarmonics.sh.g,e.sh.g),Qe(r.sphericalHarmonics.sh.b,e.sh.b)}(0,p._)([(0,be.o)()],$e.prototype,"hasAlpha",void 0);const rt=[],it=[],ot=[],at=[0],nt=[0],st=(0,n.c)(),dt=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398],lt=(0,n.c)();class ct{constructor(){this._renderLighting={main:{intensity:(0,n.c)(),direction:(0,n.f)(1,0,0),castShadows:!1},sphericalHarmonics:{sh:{r:[0],g:[0],b:[0]}}},this._shOrder=2,this._oldSunlight={direction:(0,n.c)(),ambient:{color:(0,n.c)(),intensity:0},diffuse:{color:(0,n.c)(),intensity:0}}}setLightDirectionUniform(e){e.setUniform3fv("lightingMainDirection",this._renderLighting.main.direction)}setUniforms(e,t=!1){if(t){const t=(1-this._info.groundLightingFactor)*(1-this._info.globalFactor);e.setUniform1f("lightingFixedFactor",t)}else e.setUniform1f("lightingFixedFactor",0);e.setUniform1f("lightingGlobalFactor",this._info.globalFactor),this.setLightDirectionUniform(e),e.setUniform3fv("lightingMainIntensity",this._renderLighting.main.intensity),e.setUniform1f("ambientBoostFactor",.4);const r=this._renderLighting.sphericalHarmonics.sh;0===this._shOrder?e.setUniform3f("lightingAmbientSH0",r.r[0],r.g[0],r.b[0]):1===this._shOrder?(e.setUniform4f("lightingAmbientSH_R",r.r[0],r.r[1],r.r[2],r.r[3]),e.setUniform4f("lightingAmbientSH_G",r.g[0],r.g[1],r.g[2],r.g[3]),e.setUniform4f("lightingAmbientSH_B",r.b[0],r.b[1],r.b[2],r.b[3])):2===this._shOrder&&(e.setUniform3f("lightingAmbientSH0",r.r[0],r.g[0],r.b[0]),e.setUniform4f("lightingAmbientSH_R1",r.r[1],r.r[2],r.r[3],r.r[4]),e.setUniform4f("lightingAmbientSH_G1",r.g[1],r.g[2],r.g[3],r.g[4]),e.setUniform4f("lightingAmbientSH_B1",r.b[1],r.b[2],r.b[3],r.b[4]),e.setUniform4f("lightingAmbientSH_R2",r.r[5],r.r[6],r.r[7],r.r[8]),e.setUniform4f("lightingAmbientSH_G2",r.g[5],r.g[6],r.g[7],r.g[8]),e.setUniform4f("lightingAmbientSH_B2",r.b[5],r.b[6],r.b[7],r.b[8]))}set(e){this._info=e,tt(e.lights,this._shOrder,this._renderLighting),(0,s.p)(this._oldSunlight.direction,this._renderLighting.main.direction);const t=1/Math.PI;this._oldSunlight.ambient.color[0]=.282095*this._renderLighting.sphericalHarmonics.sh.r[0]*t,this._oldSunlight.ambient.color[1]=.282095*this._renderLighting.sphericalHarmonics.sh.g[0]*t,this._oldSunlight.ambient.color[2]=.282095*this._renderLighting.sphericalHarmonics.sh.b[0]*t,this._oldSunlight.ambient.intensity=1,this._oldSunlight.diffuse.color[0]=this._renderLighting.main.intensity[0]*t,this._oldSunlight.diffuse.color[1]=this._renderLighting.main.intensity[1]*t,this._oldSunlight.diffuse.color[2]=this._renderLighting.main.intensity[2]*t,this._oldSunlight.diffuse.intensity=1;const r=(0,s.g)(lt,this._oldSunlight.diffuse.color);(0,s.a)(r,r,.4*this._info.globalFactor),(0,s.b)(this._oldSunlight.ambient.color,this._oldSunlight.ambient.color,r)}get globalFactor(){return this._info.globalFactor}get old(){return this._oldSunlight}}var ht=r(48430);const ut=m.Z.getLogger("esri.views.3d.webgl-engine.lib.OverlayRenderer");let ft=class extends((0,U.TF)(w.default)){constructor(e){super(e),this._overlays=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._lighting=new ct,this._localOrigins=new ce,this._handles=new b.Z,this._layerRenderers=new Map,this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers=new y.Z,this._geometries=new Map,this._uniqueIdx=0,this.globalUnitScale=1,this.longitudeCyclical=null}initialize(){this._rctx=this.renderView.renderingContext,this._renderContext=new class{constructor(e,t,r,i,o,a){this.camera=null,this.lastFrameCamera=new A.Z,this.pass=0,this.slot=0,this.highlightDepthTexture=null,this.renderOccludedMask=13,this.hasOccludees=!1,this.rctx=e,this.offscreenRenderingHelper=t,this.scenelightingData=r,this.shadowMap=i,this.ssaoHelper=o,this.sliceHelper=a}resetRenderOccludedMask(){this.renderOccludedMask=13}get isHighlightPass(){return 5===this.pass}}(this._rctx,null,null,null,null,null),this._stippleTextureRepository=new ht.h0,this.waterTextureRepository=this.renderView.waterTextureRepository,this._shaderTechniqueRepository=new Y({rctx:this._rctx,viewingMode:2,commonUniformStore:new Z,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:this.waterTextureRepository}),(0,x.init)(this.waterTextureRepository,"loadingState",(()=>this.emitContentChanged())),this._materialRepository=new class{constructor(e,t,r){this._textureRep=e,this._techniqueRep=t,this.onMaterialChanged=r,this._id2glMaterialRef=new Map}dispose(){this._textureRep.dispose()}acquire(e,t){this.ownMaterial(e);const r=X(e.id,t);let i=this._id2glMaterialRef.get(r);if(null==i){const o=e.getGLMaterial({material:e,techniqueRep:this._techniqueRep,textureRep:this._textureRep,output:t});return i=new ee(o),i.incRefCnt(),this._id2glMaterialRef.set(r,i),o}return i.incRefCnt(),i.getGLMaterial()}release(e,t){const r=X(e.id,t),i=this._id2glMaterialRef.get(r);if(i.decRefCnt(),0===i.getRefCnt()){const e=i.getGLMaterial();e&&e.dispose(),this._id2glMaterialRef.delete(r)}}materialChanged(e){for(const t of Q)if(5!==t.output&&6!==t.output){const r=this._id2glMaterialRef.get(X(e.id,t.output));if(r&&r.getGLMaterial()){const e=r.getGLMaterial();e.updateParameters&&e.updateParameters()}}this.onMaterialChanged&&this.onMaterialChanged(e)}ownMaterial(e){(0,o.pC)(e.materialRepository)&&e.materialRepository!==this&&J.error("Material is already owned by a different material repository"),e.materialRepository=this}}(this.renderView.textureRepository,this._shaderTechniqueRepository),this._materialRepository.onMaterialChanged=e=>{(e.renderOccluded&yt)>0!==this._rendersOccluded&&this.updateRendersOccluded(),this.emitContentChanged(),this.notifyChange("updating")},this._compositingHelper=this.renderView.compositingHelper,this._lighting.set({lights:[new D((0,n.f)(1,1,1))],groundLightingFactor:1,globalFactor:0}),this._bindParameters={slot:null,highlightDepthTexture:(0,I.hf)(this._rctx),camera:mt,inverseViewport:(0,T.a)(),origin:null,screenToWorldRatio:null,screenToWorldRatioGlobalWM:null,shadowMappingEnabled:!1,slicePlane:null,ssaoEnabled:!1,hasOccludees:!1,linearDepthTexture:null,linearDepthTextureID:0,lastFrameColorTexture:null,lastFrameColorTextureID:0,reprojectionMat:null,ssrEnabled:!1,lighting:this._lighting,transparencyPassType:3}}dispose(){this._handles.destroy(),this._layerRenderers.forEach((e=>e.dispose())),this._layerRenderers.clear(),this._bindParameters.highlightDepthTexture.dispose(),this._bindParameters.highlightDepthTexture=null,this._shaderTechniqueRepository.dispose(),this._shaderTechniqueRepository=null}get updating(){return this._sortedLayerRenderersDirty||(0,C.o)(this._layerRenderers,(e=>e.updating))||this.waterTextureRepository.updating}get hasOverlays(){return(0,o.pC)(this._overlays)}get gpuMemoryUsage(){return(0,o.pC)(this._overlays)?this._overlays[0].getGpuMemoryUsage()+this._overlays[1].getGpuMemoryUsage():0}get overlays(){return this._overlays}forEachOverlay(e){(0,o.pC)(this._overlays)&&(e(this._overlays[0],0),e(this._overlays[1],1))}ensureOverlays(){if((0,o.Wi)(this._overlays)){const e=this.renderView.renderingContext;this._overlays=[new k(e,0),new k(e,1)]}}disposeOverlays(){(0,o.pC)(this._overlays)&&(this._overlays.forEach((e=>e.dispose())),this._overlays=null)}commitChanges(){let e=!1;this._layerRenderers.forEach(((t,r)=>{t.commitChanges()&&(e=!0),t.isEmpty&&(this._layerRenderers.delete(r),this._sortedLayerRenderersDirty=!0,this._handles.remove(r))})),this._sortedLayerRenderersDirty&&(this.updateSortedLayerRenderers(),e=!0),e&&(this.notifyChange("updating"),this.emitContentChanged(),this.updateHasHighlights(),this.updateRendersOccluded(),this.updateHasWater())}addGeometries(e,t,r){for(const t of e)null==t.origin&&(t.origin=this._localOrigins.getOrigin(t.center)),t.uniqueName||(t.uniqueName="ov:"+this._uniqueIdx++),this._geometries.set(t.uniqueName,t);this.ensureLayerRenderer(t).add(e),2===r&&this.notifyGraphicUpdate(e,t,2)}removeGeometries(e,t,r){for(const t of e)this._geometries.delete(t.uniqueName);const i=this._layerRenderers.get(t);i&&(i.remove(e),2===r&&this.notifyGraphicUpdate(e,t,2))}updateGeometries(e,t,r){const i=this._layerRenderers.get(t);i?(i.modify(e,r),this.notifyUpdateGeometries(e,t,r)):ut.warn("Attempted to update geometry for nonexistent layer")}notifyUpdateGeometries(e,t,r){const i=4===r||2===r?2:1===r?1:0;this.notifyGraphicUpdate(e,t,i)}notifyGraphicUpdate(e,t,r){if(0===r||(0,o.Wi)(t.notifyGraphicUpdate))return;let i=-1;for(const o of e){const e=o.data.graphicUid;e!==i&&(t.notifyGraphicUpdate(e,r),i=e)}}updateHighlights(e,t){const r=this._layerRenderers.get(t);r?r.modify(e,8):ut.warn("Attempted to update highlights for nonexistent layer")}isEmpty(){return 0===this._geometries.size&&!N.OVERLAY_DRAW_DEBUG_TEXTURE}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateLogic(e){let t=!1;return this._layerRenderers.forEach((r=>{r.updateLogic(e)&&(t=!0)})),t}updateLayerOrder(){this._sortedLayerRenderersDirty=!0}drawPass(e,t,r,i=0){if(0===r.numViews)return!1;if(this._screenToWorldRatio=r.pixelRatio*Math.abs(r.views[0].extent[2]-r.views[0].extent[0])/Math.abs(r.views[0].viewport[2]-r.views[0].viewport[0]),this.isEmpty()||5===e&&!this.hasHighlights||3===e&&!this.hasWater)return!1;if(!this.hasNonZeroSizedView(r))return!1;const a=r.width,n=r.height;if(!t.isValid())return!1;t.resize(a,n);const s=this._rctx;if(mt.pixelRatio=r.pixelRatio||1,this._renderContext.pass=e,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToWorldRatioGlobalWM=this._screenToWorldRatio*this.globalUnitScale,t.bind(s),s.setClearColor(0,0,0,0),s.clearSafe(16384),1===i&&(this._renderContext.renderOccludedMask=yt),N.OVERLAY_DRAW_DEBUG_TEXTURE&&1!==i)for(let e=0;e<r.numViews;e++)this.setViewParameters(r.views[e],mt),this.drawDebugTexture(a,n,pt[r.index%pt.length]);return this._layerRenderers.size>0&&this._sortedLayerRenderers.forAll((({layerView:d,renderer:l})=>{if(2===i&&(0,o.pC)(d)&&0===d.drapeSourceType)return;const c=(0,o.pC)(d)&&(0,o.pC)(d.fullOpacity)&&d.fullOpacity<1&&0===e;c&&(this.bindTemporaryFramebuffer(this._rctx,a,n),s.clearSafe(16384));for(let e=0;e<r.numViews;e++)this.setViewParameters(r.views[e],mt),l.draw(this._renderContext,this._bindParameters);c&&(0,o.pC)(this._temporaryRenderTarget)&&(t.bind(s),this._compositingHelper.composite(this._temporaryRenderTarget.getTexture(),2,(0,o.Wg)((0,o.Wg)(d).fullOpacity)))})),s.bindFramebuffer(null),t.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,t,r){(0,o.Wi)(this._temporaryRenderTarget)&&(this._temporaryRenderTarget=new F(e,"temp",0,!1)),this._temporaryRenderTarget.resize(t,r),this._temporaryRenderTarget.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.hotReload()}intersect(e,t,r){let i=0;this._geometries.forEach((o=>{if(r&&!r(o))return;this.intersectRenderGeometry(o,t,0,e,i);const a=this.longitudeCyclical;a&&(o.center[0]-o.bsRadius<a.min&&this.intersectRenderGeometry(o,t,a.range,e,i),o.center[0]+o.bsRadius>a.max&&this.intersectRenderGeometry(o,t,-a.range,e,i)),i++}))}intersectRenderGeometry(e,t,r,i,a){let n=0;(0,o.pC)(e.transformation)&&(r+=e.transformation[12],n=e.transformation[13]),vt[0]=t[0]-r,vt[1]=t[1]-n,vt[2]=1,_t[0]=t[0]-r,_t[1]=t[1]-n,_t[2]=0,e.screenToWorldRatio=this._screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),i,vt,_t,((t,r,o)=>{this.addIntersectionResult(o,e.material.renderPriority,a,i,e.data.layerUid,e.data.graphicUid)}),e.calculateShaderTransformation,!0)}addIntersectionResult(e,t,r,i,o,a){const n={type:"external",metadata:{layerUid:o,graphicUid:a}},s=o=>{o.set(n,null,i.results.ground.dist,i.results.ground.normal,i.results.ground.transformation,t,null,null,e,r),o.intersector="OverlayRenderer"};if((null==i.results.min.drapedLayerOrder||t>=i.results.min.drapedLayerOrder)&&(null==i.results.min.dist||i.results.ground.dist<=i.results.min.dist)&&s(i.results.min),0!==i.options.store&&(null==i.results.max.drapedLayerOrder||t<i.results.max.drapedLayerOrder)&&(null==i.results.max.dist||i.results.ground.dist>i.results.max.dist)&&s(i.results.max),2===i.options.store){const e=new H.xM(i.ray);s(e),i.results.all.push(e)}}stopAnimationsAtTime(e){this._sortedLayerRenderers.forAll((t=>t.renderer.stopAnimationsAtTime(e)))}ensureLayerRenderer(e){let t=this._layerRenderers.get(e);return t||(t=new je({rctx:this._rctx,materialRepository:this._materialRepository}),this._layerRenderers.set(e,t),this._sortedLayerRenderersDirty=!0,"fullOpacity"in e&&this._handles.add(e.watch("fullOpacity",(()=>this.emitContentChanged())),e),this._handles.add((0,x.init)(t,"updating",(()=>this.notifyChange("updating"))),e)),t}updateSortedLayerRenderers(){if(!this._sortedLayerRenderersDirty)return;if(this._sortedLayerRenderersDirty=!1,this._sortedLayerRenderers.clear(),0===this._layerRenderers.size)return;const[{view:{allLayerViews:e}}]=this._layerRenderers.keys(),t=new Set(this._layerRenderers.values());e.forEach((e=>{const r=e,i=this._layerRenderers.get(r);i&&(this._sortedLayerRenderers.push(new gt(r,i)),t.delete(i))})),t.forEach((e=>{this._sortedLayerRenderers.push(new gt(null,e))}))}setViewParameters(e,t){t.viewport=e.viewport;const r=e.extent;(0,R.o)(t.projectionMatrix,0,r[2]-r[0],0,r[3]-r[1],t.near,t.far),(0,R.i)(t.viewMatrix),(0,R.t)(t.viewMatrix,t.viewMatrix,[-e.extent[0],-e.extent[1],0]),t.setGLViewport(this._rctx),this._renderContext.camera=t,this._bindParameters.camera=t,this._bindParameters.inverseViewport[0]=1/t.fullViewport[2],this._bindParameters.inverseViewport[1]=1/t.fullViewport[3]}hasNonZeroSizedView(e){for(let t=0;t<e.numViews;t++){const r=e.views[t];if(r.extent[0]!==r.extent[2]&&r.extent[1]!==r.extent[3])return!0}return!1}emitContentChanged(){this.onContentChanged&&this.onContentChanged()}updateHasWater(){const e=(0,C.o)(this._layerRenderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e)}updateHasHighlights(){const e=(0,C.o)(this._layerRenderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.onHasHighlightsChanged&&this.onHasHighlightsChanged(this._hasHighlights))}updateRendersOccluded(){const e=(0,C.o)(this._layerRenderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.onRendersOccludedChanged&&this.onRendersOccludedChanged(this.rendersOccluded))}drawDebugTexture(e,t,r){const i=this._rctx;this.ensureDebugPatternResources(e,t);const o=this._debugTextureTechnique.program;i.bindProgram(o),i.setPipelineState(this._debugTextureTechnique.pipeline),o.setUniform4f("color",r[0],r[1],r[2],1),o.setUniform1i("tex",0),i.bindTexture(this._debugPatternTexture,0),i.bindVAO(this._quadVAO),i.drawArrays(5,0,(0,E._V)(this._quadVAO,"geometry"))}ensureDebugPatternResources(e,t){if(this._debugPatternTexture)return;const r=new Uint8Array(e*t*4);let i=0;for(let o=0;o<t;o++)for(let a=0;a<e;a++){const n=Math.floor(a/10),s=Math.floor(o/10);n<2||s<2||10*n>e-20||10*s>t-20?(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=255):(r[i++]=255,r[i++]=255,r[i++]=255,r[i++]=1&n&&1&s?1&a^1&o?0:255:1&n^1&s?0:128)}this._debugPatternTexture=new S.Z(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:e,height:t},r);const o=new $e;o.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquireAndReleaseExisting(qe,o,this._debugTextureTechnique),this._quadVAO=(0,I.ow)(this._rctx)}get test(){return{layerRenderers:this._layerRenderers}}};(0,p._)([(0,U.gT)()],ft.prototype,"_shaderTechniqueRepository",void 0),(0,p._)([(0,U.gT)()],ft.prototype,"_stippleTextureRepository",void 0),(0,p._)([(0,v.Cb)(),(0,U.gT)()],ft.prototype,"waterTextureRepository",void 0),(0,p._)([(0,v.Cb)({constructOnly:!0})],ft.prototype,"renderView",void 0),(0,p._)([(0,v.Cb)()],ft.prototype,"globalUnitScale",void 0),(0,p._)([(0,v.Cb)({type:Boolean,readOnly:!0,dependsOn:["waterTextureRepository.updating"]})],ft.prototype,"updating",null),ft=(0,p._)([(0,_.j)("esri.views.3d.terrain.OverlayRenderer")],ft);class gt{constructor(e,t){this.layerView=e,this.renderer=t}}const pt=[[1,.5,.5],[.5,.5,1],[.5,1,.5]],mt=new A.Z;mt.near=1,mt.far=1e4,mt.relativeElevation=null;const vt=(0,n.c)(),_t=(0,n.c)(),yt=4;const wt=r(38256).O;function bt(e){const t={},r={};!function(e,t,r){const{attributeData:{position:o},removeDuplicateStartEnd:a}=e,n=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(o)&&1===a,s=o.length/3-(n?1:0),d=new Uint32Array(2*(s-1)),l=n?(0,i.tP)(o,0,o.length-3):o;let c=0;for(let e=0;e<s-1;e++)d[c++]=e,d[c++]=e+1;t[g._A.POSITION]={size:3,data:l,offsetIdx:0,strideIdx:3},r[g._A.POSITION]=d}(e,r,t);const n=new Uint32Array(t[g._A.POSITION].length);return function(e,t,r){const i=e.attributeData.mapPosition;(0,o.Wi)(i)||(r.mapPos=r[g._A.POSITION],t.mapPos={size:3,data:i,offsetIdx:0,strideIdx:3})}(e,r,t),function(e,t,r,i){if((0,o.pC)(e.attributeData.colorFeature))return;const a=e.attributeData.color;t[g._A.COLOR]={size:4,data:(0,o.Pt)(a,wt),offsetIdx:0,strideIdx:4},r[g._A.COLOR]=i}(e,r,t,n),function(e,t,r,i){if((0,o.pC)(e.attributeData.sizeFeature))return;const a=e.attributeData.size;t[g._A.SIZE]={size:1,data:new Float32Array([(0,o.Pt)(a,1)]),offsetIdx:0,strideIdx:1},r[g._A.SIZE]=i}(e,r,t,n),function(e,t,r,i){const a=e.attributeData.colorFeature;(0,o.Wi)(a)||(t[g._A.COLORFEATUREATTRIBUTE]={size:1,data:new Float32Array([a]),offsetIdx:0,strideIdx:1},r[g._A.COLOR]=i)}(e,r,t,n),function(e,t,r,i){const a=e.attributeData.sizeFeature;(0,o.Wi)(a)||(t[g._A.SIZEFEATUREATTRIBUTE]={size:1,data:new Float32Array([a]),offsetIdx:0,strideIdx:1},r[g._A.SIZEFEATUREATTRIBUTE]=i)}(e,r,t,n),function(e,t,r,i){const a=e.attributeData.opacityFeature;(0,o.Wi)(a)||(t[g._A.OPACITYFEATUREATTRIBUTE]={size:1,data:new Float32Array([a]),offsetIdx:0,strideIdx:1},r[g._A.OPACITYFEATUREATTRIBUTE]=i)}(e,r,t,n),function(e,t,r){if("round"!==e.join)return;const i=t[g._A.POSITION].data,n=i.length/3,d=new Float32Array(n),l=St,c=Et;(0,s.s)(l,0,0,0);const h=(0,o.Pt)(e.uniformSize,1);for(let e=-1;e<n;++e){const t=e<0?n+e:e,r=(e+1)%n;if((0,s.s)(c,i[3*r+0]-i[3*t+0],i[3*r+1]-i[3*t+1],i[3*r+2]-i[3*t+2]),(0,s.n)(c,c),e>=0){const t=(Math.PI-(0,a.ZF)((0,s.d)(l,c)))*It*1*Tt(h);d[e]=Math.max(Math.floor(t),0)}(0,s.a)(l,c,-1)}t[g._A.SUBDIVISIONS]={size:1,data:d,offsetIdx:0,strideIdx:1},r[g._A.SUBDIVISIONS]=r[g._A.POSITION]}(e,r,t),new u.b(r,t,"line")}function xt(e,t,r,i){const o="polygon"===e.type?1:0,a="polygon"===e.type?e.rings:e.paths,{position:n,outlines:s}=c(a,e.hasZ,o),d=new Float64Array(n.length),l=(0,f.rR)(n,e.spatialReference,0,d,0,n,0,n.length/3,t,r,i),h=null!=l;return{lines:h?Rt(s,n,d):[],projectionSuccess:h,sampledElevation:l}}function Rt(e,t,r){const i=new Array;for(const{index:o,count:a}of e){if(a<=1)continue;const e=3*o,n=e+3*a;i.push({position:t.subarray(e,n),mapPosition:r?r.subarray(e,n):void 0})}return i}function Ct(e,t){const r="polygon"===e.type?1:0,i="polygon"===e.type?e.rings:e.paths,{position:o,outlines:a}=c(i,!1,r),n=(0,d.CM)(o,e.spatialReference,0,o,t,0,o.length/3);for(let e=2;e<o.length;e+=3)o[e]=-2;return{lines:n?Rt(a,o):[],projectionSuccess:n}}function Tt(e){return 1.863798+-2.0062872/Math.pow(1+e/18.2313,.8856294)}const St=(0,n.c)(),Et=(0,n.c)(),It=4/Math.PI},31777:(e,t,r)=>{"use strict";r.d(t,{q:()=>o});var i=r(85461);function o(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(i.H`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(i.H`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):e.vertex.code.add(i.H`
      void forwardLinearDepth() {}
    `)}},11913:(e,t,r)=>{"use strict";r.d(t,{E:()=>a,K:()=>o});var i=r(85461);function o(e){e.fragment.code.add(i.H`
    float normals2FoamIntensity(vec3 n, float waveStrength){
      float normalizationFactor =  max(0.015, waveStrength);
      return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
    }
  `)}function a(e){e.fragment.code.add(i.H`
    vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
      return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
    }
  `)}},83917:(e,t,r)=>{"use strict";r.d(t,{n:()=>o});var i=r(85461);function o(e,t){1===t.viewingMode?e.vertex.code.add(i.H`
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
    `)}},87023:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});var i=r(85461),o=r(9295);function a(e){const t=e.fragment.code;t.add(i.H`
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
    `)}function n(e,t){const r=e.fragment.code;e.include(o.e),3===t.pbrMode||4===t.pbrMode?(r.add(i.H`
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
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(a),r.add(i.H`
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
    `))}},71613:(e,t,r)=>{"use strict";r.d(t,{h:()=>a});var i=r(85461),o=r(61017);function a(e){e.fragment.include(o.n),e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("shadowMapNum","int"),e.fragment.uniforms.add("shadowMapDistance","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(i.H`
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
  `)}!function(e){e.bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},e.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},e.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}}(a||(a={}))},75619:(e,t,r)=>{"use strict";r.d(t,{P:()=>n});var i=r(85461),o=r(4071);function a(e){e.fragment.uniforms.add("lastFrameColorMap","sampler2D"),e.fragment.uniforms.add("reprojectionMat","mat4"),e.fragment.uniforms.add("rpProjectionMat","mat4"),e.fragment.code.add(i.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = rpProjectionMat * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMat * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy*0.5 + 0.5;
  }
  `)}function n(e,t){e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("depthMapView","sampler2D"),e.fragment.uniforms.add("ssrViewMat","mat4"),e.fragment.uniforms.add("invResolutionHeight","float"),e.include(o.S),e.include(a),e.fragment.code.add(i.H`
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
  `)}!function(e){e.bindUniforms=function(e,t,r){e.setUniform1i("lastFrameColorMap",r.lastFrameColorTextureID),t.bindTexture(r.lastFrameColorTexture,r.lastFrameColorTextureID),e.setUniformMatrix4fv("reprojectionMat",r.reprojectionMat),e.setUniformMatrix4fv("rpProjectionMat",r.camera.projectionMatrix)}}(a||(a={})),function(e){e.bindUniforms=function(e,t,r){r.ssrEnabled&&(e.setUniform1i("depthMapView",r.linearDepthTextureID),t.bindTexture(r.linearDepthTexture,r.linearDepthTextureID),e.setUniform2fv("nearFar",r.camera.nearFar),e.setUniformMatrix4fv("ssrViewMat",r.camera.viewMatrix),e.setUniform1f("invResolutionHeight",1/r.camera.height),a.bindUniforms(e,t,r))}}(n||(n={}))},53584:(e,t,r)=>{"use strict";r.d(t,{B:()=>d});var i=r(85461),o=r(75619),a=r(11913);function n(e){e.fragment.code.add(i.H`
    const float GAMMA = 2.2;
    const float INV_GAMMA = 0.4545454545;

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}var s=r(87023);function d(e,t){e.include(s.T,t),e.include(n),e.include(a.E),t.ssrEnabled&&e.include(o.P,t),e.fragment.code.add(i.H`
    const vec3 fresnelSky =  vec3(0.02, 1.0, 15.0); // f0, f0max, exp
    const vec2 fresnelMaterial =  vec2(0.02, 0.1); // f0, f0max for specular term
    const float roughness = 0.015;
    const float foamIntensityExternal = 1.7;
    const float ssrIntensity = 0.65;
    const float ssrHeightFadeStart = 300000.0;
    const float ssrHeightFadeEnd = 500000.0;
    const float waterDiffusion = 0.775;
    const float waterSeeColorMod = 0.8;
    const float correctionViewingPowerFactor = 0.4;

    const vec3 skyZenitColor = vec3(0.52, 0.68, 0.90);
    const vec3 skyColor = vec3(0.67, 0.79, 0.9);

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
  `)}},91123:(e,t,r)=>{"use strict";r.d(t,{M:()=>a});var i=r(85461),o=r(11913);function a(e){e.fragment.uniforms.add("texWaveNormal","sampler2D"),e.fragment.uniforms.add("texWavePerturbation","sampler2D"),e.fragment.uniforms.add("waveParams","vec4"),e.fragment.uniforms.add("waveDirection","vec2"),e.include(o.K),e.fragment.code.add(i.H`
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
    `)}!function(e){e.bindUniforms=function(e,t){e.setUniform1i("texWaveNormal",0),e.setUniform1i("texWavePerturbation",1),e.setUniform4f("waveParams",t.waveStrength,t.waveTextureRepeat,t.flowStrength,t.flowOffset),e.setUniform2f("waveDirection",t.waveDirection[0]*t.waveVelocity,t.waveDirection[1]*t.waveVelocity)}}(a||(a={}))}}]);
//# sourceMappingURL=5736.js.map