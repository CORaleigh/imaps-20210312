(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[8280],{8280:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>y});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),a=i(87566),n=(i(10923),i(57002),i(86035),i(39105)),p=i(83477),d=i(15988),h=i(48164),l=i(79334),o=i(81558);const u={remove(){},pause(){},resume(){}};let c=class extends((0,o.y)(h.Z)){initialize(){this.graphicsView=new l.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(e,t){return this.suspended||!this.graphicsView?(0,n.resolve)(null):this.graphicsView.hitTest(e,t)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){let t;return"number"==typeof e?t=[e]:e instanceof d.default?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):p.Z.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):u}queryGraphics(){return(0,n.resolve)(this.graphicsView.graphics)}};(0,s._)([(0,r.Cb)()],c.prototype,"graphicsView",void 0),(0,s._)([(0,r.Cb)({dependsOn:["graphicsView.updating"]})],c.prototype,"updating",void 0),c=(0,s._)([(0,a.j)("esri.views.2d.layers.GraphicsLayerView2D")],c);const y=c},81558:(e,t,i)=>{"use strict";i.d(t,{y:()=>U});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),a=i(87566),n=(i(10923),i(57002),i(86035),i(83477)),p=i(32105),d=i(80621),h=i(58385);let l=class extends h.wq{};l=(0,s._)([(0,a.j)("esri.views.layers.support.ClipArea")],l);const o=l;var u;let c=u=class extends o{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),(0,s._)([(0,r.Cb)({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["left","right","top","bottom"]})],c.prototype,"version",null),c=u=(0,s._)([(0,a.j)("esri.views.layers.support.ClipRect")],c);const y=c;var g,v=i(17149),w=i(39718),b=i(52937),m=i(53817),_=i(56885);i(36348);const C={base:w.Z,key:"type",typeMap:{extent:b.Z,polygon:m.Z}};let f=g=class extends o{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new g({geometry:this.geometry.clone()})}};(0,s._)([(0,r.Cb)({types:C,json:{read:_.im,write:!0}})],f.prototype,"geometry",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["geometry"]})],f.prototype,"version",null),f=g=(0,s._)([(0,a.j)("esri.views.layers.support.Geometry")],f);const O=f;let V=class extends o{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,r.Cb)({type:[[[Number]]],json:{write:!0}})],V.prototype,"path",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["path"]})],V.prototype,"version",null),V=(0,s._)([(0,a.j)("esri.views.layers.support.Path")],V);const q=V,R=n.Z.ofType({key:"type",base:o,typeMap:{rect:y,path:q,geometry:O}}),U=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new R,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new v.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,d.init)(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,d.init)(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),(0,d.init)(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),(0,d.init)(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&e<=s&&(i=!0),!a&&e>=r&&(a=!0),t=i&&a}return t}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,s._)([(0,r.Cb)({type:R,set(e){const t=(0,p.Z)(e,this._get("clips"),R);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,r.Cb)({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),(0,s._)([(0,r.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,r.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,r.Cb)({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),(0,s._)([(0,r.Cb)()],t.prototype,"view",void 0),t=(0,s._)([(0,a.j)("esri.views.2d.layers.LayerView2D")],t),t}},48164:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(56140),r=(i(95830),i(36544)),a=(i(68055),i(79881)),n=i(87566),p=(i(10923),i(57002),i(86035),i(82677)),d=i(35470),h=i(35326),l=i(75044),o=i(77204);let u=class extends((0,o.p)((0,h.I)((0,l.v)(d.Z.EventedMixin(p.default))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,a.Cb)({dependsOn:["layer.opacity","parent.fullOpacity"]})],u.prototype,"fullOpacity",null),(0,s._)([(0,a.Cb)()],u.prototype,"layer",void 0),(0,s._)([(0,a.Cb)()],u.prototype,"parent",void 0),(0,s._)([(0,a.Cb)({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],u.prototype,"suspended",null),(0,s._)([(0,a.Cb)({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],u.prototype,"suspendInfo",null),(0,s._)([(0,a.Cb)({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],u.prototype,"legendEnabled",null),(0,s._)([(0,a.Cb)({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,a.Cb)({dependsOn:["layer.visible"]})],u.prototype,"visible",null),u=(0,s._)([(0,n.j)("esri.views.layers.LayerView")],u);const c=u}}]);
//# sourceMappingURL=8280.js.map