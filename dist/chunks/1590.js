(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[1590],{85987:(e,t,i)=>{"use strict";i.d(t,{QM:()=>a,hy:()=>o,uI:()=>n});var s=i(7584),r=i(33655);const n=(()=>{if(!("document"in s.Z))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,i=>{t.clearRect(0,0,1,e.height);const s=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of i.colorStops)s.addColorStop(Math.max(e,.001),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`);return t.fillStyle=s,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function a(e,t,i,s){const{blurRadius:r,fieldOffset:n,field:a}=t,o=new Float64Array(i*s),l=h(r),d=Math.round(3*r);let u,c=Number.NEGATIVE_INFINITY;const p=function(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):i=>+i.readAttribute(e)+t:e=>1}(a,n),f=new Set;for(const t of e){const e=t.getCursor();for(;e.next();){const t=e.getObjectId();if(f.has(t))continue;f.add(t);const r=e.readLegacyPointGeometry(),n=+p(e),a=r.x-d,h=r.y-d,g=Math.max(0,a),x=Math.max(0,h),m=Math.min(s,r.y+d),y=Math.min(i,r.x+d);for(let e=x;e<m;e++){const t=l[e-h];for(let s=g;s<y;s++){const r=l[s-a];u=o[e*i+s]+=t*r*n,u>c&&(c=u)}}}}return{matrix:o.buffer,max:c}}function o(e,t,i,s,n,a){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const o=e.getImageData(0,0,t,t);i&&s&&o.data.set(new Uint8ClampedArray(function(e,t,i,s,n){const a=new Uint32Array(e*e),o="buffer"in t?t:new Float64Array(t),h="buffer"in i?new Uint32Array(i.buffer):new Uint32Array(new Uint8Array(i).buffer),l=h.length/(n-s);for(let e=0;e<o.length;e++){const t=o[e],i=Math.floor((t-s)*l);a[e]=h[(0,r.uZ)(i,0,h.length-1)]}return a.buffer}(t,i,s,n,a))),e.putImageData(o,0,0)}function h(e){const t=Math.round(3*e),i=2*e*e,s=new Float64Array(2*t+1);for(let r=0;r<=s.length;r++)s[r]=Math.exp(-Math.pow(r-t,2)/i)/Math.sqrt(2*Math.PI)*(e/2);return s}},29720:(e,t,i)=>{"use strict";i.d(t,{e:()=>d});i(95830);var s=i(98501),r=i(55955),n=i(27851),a=(i(5627),i(8634)),o=(i(84570),i(89930),i(56291)),h=i(64796);function l(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new a.Z(e,s)}class d extends o.s{constructor(e=null,t=!0){super(),this.requestRenderOnSourceChangedEnabled=t,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:(0,r.c)()},this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(e){const t=(0,s.i)(this.transforms.dvs),[i,r]=e.toScreenNoRotation([0,0],this.x,this.y),a=this.resolution/this.pixelRatio/e.resolution,o=a*this.width,h=a*this.height,l=Math.PI*this.rotation/180;(0,s.a)(t,t,(0,n.f)(i,r)),(0,s.a)(t,t,(0,n.f)(o/2,h/2)),(0,s.r)(t,t,-l),(0,s.a)(t,t,(0,n.f)(-o/2,-h/2)),(0,s.j)(t,t,(0,n.f)(o,h)),(0,s.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind({context:e},t){this._texture&&e.bindTexture(this._texture,t)}updateTexture({context:e}){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=l(e,this.sourceWidth,this.sourceHeight):this._texture=l(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof h.Z){const e=i.getRenderedRasterPixels();this._texture.setData(e.renderedRasterPixels)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},36734:(e,t,i)=>{"use strict";i.d(t,{s:()=>d});var s=i(50897),r=i(31514),n=i(32825),a=i(55649),o=i(9793),h=i(29720);class l extends o.I{constructor(e,t,i,s=null){super(e,t,i,i),this.bitmap=new h.e(s),this.bitmap.coordScale=i,this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}class d extends a.Z{createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e);return new l(e,t,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[n.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:r.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===r.jx.MAP&&super.doRender(e)}}},64796:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});const s=class{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},55649:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var s=i(31514),r=i(69822),n=i(87772),a=i(23956);const o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col,h=class extends a.Z{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(o),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)}}prepareRenderPasses(e){const t=e.registerRenderPass({name:"stencil",brushes:[n.Z],drawPhase:s.jx.DEBUG|s.jx.MAP|s.jx.HIGHLIGHT,target:()=>this.getStencilTarget()}),i=e.registerRenderPass({name:"tileInfo",brushes:[r.Z],drawPhase:s.jx.DEBUG,target:()=>this.children,has:"esri-tiles-debug"});return[...super.prepareRenderPasses(e),t,i]}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}},9793:(e,t,i)=>{"use strict";i.d(t,{I:()=>o});i(95830);var s=i(98501),r=i(5201),n=i(55955),a=i(56291);class o extends a.s{constructor(e,t,i,s=i){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:(0,n.c)(),tileMat3:(0,n.c)()},this.triangleCount=0,this.key=new r.Z(e),this.bounds=t,this.size=i,this.coordRange=s}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(e){this._coords=[e[0],e[3]],this._bounds=e}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[n,a]=e.toScreenNoRotation([0,0],this.coords),o=this.size[0]/this.coordRange[0]*i,h=this.size[1]/this.coordRange[1]*i;(0,s.s)(r,o,0,0,0,h,0,n,a,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,r)}}},81129:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),n=i(87566),a=(i(10923),i(57002),i(86035),i(77204));let o=class extends a.r{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,s._)([(0,r.Cb)()],o.prototype,"layer",void 0),(0,s._)([(0,r.Cb)()],o.prototype,"layerView",void 0),(0,s._)([(0,r.Cb)()],o.prototype,"tileInfoView",void 0),(0,s._)([(0,r.Cb)()],o.prototype,"updating",null),o=(0,s._)([(0,n.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],o);const h=o},21590:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>u});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881),i(87566)),n=(i(10923),i(57002),i(86035),i(39105)),a=i(85987),o=i(36734),h=i(81129);class l{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){(0,a.hy)(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let d=class extends h.Z{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new o.s(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=(0,a.uI)(e.toJSON()),this.tiles.forEach((e=>{const s=e.bitmap.source;s&&(s.minPixelIntensity=t,s.maxPixelIntensity=i,s.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return(0,n.resolve)([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:s,maxPixelIntensity:r}=this._intensityInfo,n=t.bitmap.source||new l;n.intensities=i&&i.matrix||null,n.minPixelIntensity=s,n.maxPixelIntensity=r,n.gradient=this._gradient,t.bitmap.source=n,this._container.addChild(t),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}};d=(0,s._)([(0,r.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],d);const u=d}}]);
//# sourceMappingURL=1590.js.map