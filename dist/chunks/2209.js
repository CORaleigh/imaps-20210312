(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[2209],{56700:(e,t,i)=>{"use strict";i.d(t,{Z:()=>g});var s=i(56140),r=(i(95830),i(34926)),o=i(36544),n=(i(68055),i(79881)),l=i(87566),a=i(32656),d=i(10923),h=(i(57002),i(86035),i(73032)),c=i(52937),u=(i(36348),i(35470)),p=i(35326),y=i(54721),m=i(809);let _=0;const b=o.Z.getLogger("esri.layers.Layer");let v=class extends(u.Z.EventedMixin((0,p.I)(m.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new c.Z(-180,-90,180,90,h.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+_++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=h.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,s=await i.e(956).then(i.bind(i,50956));try{return await s.fromUrl(t)}catch(e){throw b.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},s=await i.e(1204).then(i.bind(i,1204));try{return await s.fromItem(t)}catch(e){const i=t&&t.portalItem,s=i&&i.id||"unset",o=i&&i.portal&&i.portal.url||r.Z.portalUrl;throw b.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+o+"', id: '"+s+"')",e),e}}initialize(){this.when().catch((e=>{var t,i;o.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(i=this.id)?i:"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,d.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,y.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new a.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,s._)([(0,n.Cb)({type:String})],v.prototype,"attributionDataUrl",void 0),(0,s._)([(0,n.Cb)({type:c.Z})],v.prototype,"fullExtent",void 0),(0,s._)([(0,n.Cb)({readOnly:!0,dependsOn:["attributionDataUrl"]})],v.prototype,"hasAttributionData",null),(0,s._)([(0,n.Cb)({type:String})],v.prototype,"id",void 0),(0,s._)([(0,n.Cb)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),(0,s._)([(0,n.Cb)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),(0,s._)([(0,n.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"parent",void 0),(0,s._)([(0,n.Cb)({readOnly:!0,dependsOn:["url"]})],v.prototype,"parsedUrl",null),(0,s._)([(0,n.Cb)({type:Boolean})],v.prototype,"popupEnabled",void 0),(0,s._)([(0,n.Cb)({type:Boolean})],v.prototype,"attributionVisible",void 0),(0,s._)([(0,n.Cb)({type:h.Z})],v.prototype,"spatialReference",void 0),(0,s._)([(0,n.Cb)({type:String})],v.prototype,"title",void 0),(0,s._)([(0,n.Cb)({type:String,readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),(0,s._)([(0,n.Cb)()],v.prototype,"url",void 0),(0,s._)([(0,n.Cb)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=(0,s._)([(0,l.j)("esri.layers.Layer")],v);const g=v},10113:(e,t,i)=>{"use strict";i.d(t,{M:()=>n});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),o=i(87566);i(10923),i(57002),i(86035);const n=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get scaleRangeId(){return`${this.minScale},${this.maxScale}`}};return(0,s._)([(0,r.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,s._)([(0,r.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["minScale","maxScale"]})],t.prototype,"scaleRangeId",null),t=(0,s._)([(0,o.j)("esri.layers.mixins.ScaleRangeLayer")],t),t}},83873:(e,t,i)=>{"use strict";function s(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?function(e){let t=0,i=0;for(let s=0;s<e.length;s++){const r=e[s].size;"number"==typeof r&&(t+=r,i++)}return t/i}(e.stops):t}function o(e){const t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return i;const o="visualVariables"in t?function(e,t){if(!t)return e;const i=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:i,minSize:s}=t;return(r(i,e)+r(s,e))/2}));let s=0;const o=i.length;if(0===o)return e;for(let e=0;e<o;e++)s+=i[e];const n=Math.floor(s/o);return Math.max(n,e)}(i,t.visualVariables):i;if("simple"===t.type)return s(o,t.symbol);if("unique-value"===t.type){let e=o;return t.uniqueValueInfos.forEach((t=>{e=s(e,t.symbol)})),e}if("class-breaks"===t.type){let e=o;return t.classBreakInfos.forEach((t=>{e=s(e,t.symbol)})),e}return t.type,o}i.d(t,{k:()=>o})},5684:(e,t,i)=>{"use strict";i.d(t,{Rz:()=>u,G:()=>y,kD:()=>_,mW:()=>m,js:()=>p});i(95830);var s=i(59472),r=i(48142),o=i(5674),n=i(88083),l=i(44190),a=i(7767);const d=n.Z.fromJSON(a.I4),h=r.Z.fromJSON(a.ET),c=o.default.fromJSON(a.lF),u=l.default.fromJSON(a.qP);function p(e){if((0,s.Wi)(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return d;case"polyline":return h;case"polygon":case"extent":return c}return null}const y=n.Z.fromJSON(a.eG),m=r.Z.fromJSON(a.wW),_=o.default.fromJSON(a.lj)},7767:(e,t,i)=>{"use strict";i.d(t,{I4:()=>r,lF:()=>n,ET:()=>o,qP:()=>l,eG:()=>a,lj:()=>h,wW:()=>d});const s=[252,146,31,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:s,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:s},n={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},a={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},h={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},65865:(e,t,i)=>{"use strict";i.d(t,{L:()=>f});var s=i(56140),r=(i(95830),i(59472)),o=i(36544),n=(i(68055),i(79881)),l=i(87566),a=(i(10923),i(57002),i(86035),i(82677)),d=i(35470),h=i(96071),c=i(77625),u=i(17387),p=i(17333),y=i(79710),m=i(5684),_=i(14286),b=i(46970),v=i(37694);const g=o.Z.getLogger("esri.views.interactive.GraphicManipulator");let f=class extends a.default{constructor(e){super(e),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new d.Z.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(e){"mesh"!==(0,r.U2)(e.geometry,"type")?(this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged()):g.error("Mesh geometries are not supported")}get elevationInfo(){const e="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,t=(0,b.vu)(this.graphic),i=e?e.offset:0;return new y.Z({mode:t,offset:i})}set focusedSymbol(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol())}set hovering(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol())}set selected(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(e){const t=this._get("graphic");if(!1===t.visible)return null;const i=this._get("focusedSymbol"),s=(0,r.pC)(i)?i:t.symbol,o=t.geometry;return(0,r.Wi)(o)?null:"2d"===this.view.type?this._intersectDistance2D(this.view,e,o,s):this._intersectDistance3D(this.view,e,t)}attach(){this.attachSymbolChanged(),(0,r.pC)(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),(0,r.pC)(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(e=>{(0,r.pC)(e)&&e!==this.focusedSymbol&&e!==this._originalSymbol&&(this._originalSymbol=e,this._focused&&(0,r.pC)(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))}),!0)}detachSymbolChanged(){(0,r.pC)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&(0,r.pC)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(e,t,i,s){if(s=s||(0,m.js)(i),(0,r.Wi)(s))return null;let o=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==s.type)return(0,v.D)(t,i,e)?1:null;if((0,r.Wi)(o)||!o.originalPoint.equals(i)){const t=i,r=e.spatialReference;if((0,p.Up)(t.spatialReference,r)){const e=(0,p.iV)(t,r);o={originalPoint:t.clone(),mapPoint:e,radiusPx:(0,h.F2)(s.size)},this._circleCollisionCache=o}}if((0,r.pC)(o)){const i=(0,h.md)(t,S),r=e.toScreen(o.mapPoint),n=o.radiusPx,l=r.x+(0,h.F2)(s.xoffset),a=r.y-(0,h.F2)(s.yoffset);return(0,_.j)(i,[l,a])<n*n?1:null}return null}_intersectDistance3D(e,t,i){const s=e.toMap(t,{include:[i]});return s&&(0,p.KC)(s,w,e.renderSpatialReference)?(0,u.k)(w,e.state.camera.eye):null}};(0,s._)([(0,n.Cb)({constructOnly:!0,nonNullable:!0})],f.prototype,"graphic",null),(0,s._)([(0,n.Cb)({readOnly:!0,dependsOn:["graphic"]})],f.prototype,"elevationInfo",null),(0,s._)([(0,n.Cb)({constructOnly:!0,nonNullable:!0})],f.prototype,"view",void 0),(0,s._)([(0,n.Cb)({value:null})],f.prototype,"focusedSymbol",null),(0,s._)([(0,n.Cb)({constructOnly:!0})],f.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"interactive",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"selectable",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"grabbable",void 0),(0,s._)([(0,n.Cb)({value:!1})],f.prototype,"grabbing",null),(0,s._)([(0,n.Cb)()],f.prototype,"dragging",void 0),(0,s._)([(0,n.Cb)()],f.prototype,"hovering",null),(0,s._)([(0,n.Cb)({value:!1})],f.prototype,"selected",null),(0,s._)([(0,n.Cb)()],f.prototype,"cursor",void 0),f=(0,s._)([(0,l.j)("esri.views.interactive.GraphicManipulator")],f);const w=(0,c.c)(),S=(0,h.s1)()},37694:(e,t,i)=>{"use strict";i.d(t,{K:()=>l,D:()=>a});var s=i(59472),r=i(52937),o=(i(36348),i(93533)),n=i(83873);function l(e,t,i,n=new r.Z){let l;if("2d"===i.type)l=t*i.resolution;else if("3d"===i.type){const r=i.overlayPixelSizeInMapUnits(e),n=i.basemapSpatialReference;l=(0,s.pC)(n)&&!n.equals(i.spatialReference)?(0,o.c9)(n)/(0,o.c9)(i.spatialReference):t*r}const a=e.x-l,d=e.y-l,h=e.x+l,c=e.y+l,{spatialReference:u}=i;return n.xmin=Math.min(a,h),n.ymin=Math.min(d,c),n.xmax=Math.max(a,h),n.ymax=Math.max(d,c),n.spatialReference=u,n}function a(e,t,i){const r=i.toMap(e);return!(0,s.Wi)(r)&&l(r,(0,n.k)(),i,d).intersects(t)}const d=new r.Z},51067:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>K});var s=i(56140),r=(i(95830),i(36544)),o=(i(68055),i(79881)),n=i(51894),l=i(87566),a=(i(10923),i(57002),i(86035),i(39105)),d=i(93533),h=(i(40450),i(24258)),c=i(9200),u=i(90846),p=i(19401),y=i(90806),m=i(59691),_=i(80621),b=i(65867),v=i(19539),g=i(73032),f=i(61106),w=i(93833),S=(i(36348),i(3766)),C=i(82314),M=i(49170),D=i(14071),L=(i(89771),i(88083)),O=i(44190),x=(i(54734),i(15988)),A=i(17333),j=i(56888),U=i(98675),Z=i(70642),k=i(94394),I=i(19647),E=i(53640),T=i(76916),G=i(70573),R=i(65865);let z=class extends T.m{constructor(){super(...arguments),this._drawActive=!1,this._handles=new m.Z,this._polylineLayer=new k.default,this._manipulatorLayer=new k.default,this._groupLayer=new I.default({layers:[this._polylineLayer,this._manipulatorLayer],listMode:"hide",visible:!1}),this._vertices=[],this.deferCreation=!0,this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null}initialize(){(0,D.ME)("esri/core/t9n/Units").then((e=>{this.messages=e})),this._handles.add((0,S.qe)((async()=>{this.messages=await(0,D.ME)("esri/core/t9n/Units")})))}destroy(){this.detach(),this._draw&&(this._draw.destroy(),this._draw=null),this._handles&&(this._handles.destroy(),this._handles=null),this._polylineLayer&&(this._polylineLayer.destroy(),this._polylineLayer=null),this._manipulatorLayer&&(this._manipulatorLayer.destroy(),this._manipulatorLayer=null)}set editable(e){this._set("editable",e),e||this._draw.reset()}activate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onAttach(){const e=this.view;this._draw=new G.Z({view:e}),e.map.add(this._groupLayer),e.focus(),this._handles.add([(0,_.init)(this,["unit","geodesicDistanceThreshold","palette","messages"],(()=>{this._vertices.length>0&&this._updatePolylines()})),(0,_.init)(this,"view.spatialReference",(e=>{P(e)&&!(0,A.kR)()&&(0,A.zD)()}))]),this.create()}onDetach(){const{map:e}=this.view;this._draw.view=null,this._draw.destroy(),this._draw=null,e.remove(this._groupLayer),this._handles.removeAll(),this._polylineLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null)}onShow(){this._groupLayer.visible=!0}onHide(){this._groupLayer.visible=!1}reset(){this._vertices=[],this._polylineLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1,this._updateSketch([])}onInputEvent(e){"pointer-move"===e.type&&this._updateCursor()}_startSketch(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(e=>this._updateSketch(e.vertices))),e.on("draw-complete",(()=>{this._stopSketch()}))}_stopSketch(){this.manipulators.forEach((e=>{e.manipulator.interactive=!0})),this._drawActive=!1,this.complete()}_updateSketch(e){if(P(this.view.spatialReference)&&!(0,A.kR)())return;if(e.length<2)return this._vertices=[],this.manipulators.removeAll(),void this._polylineLayer.removeAll();this.create();const{spatialReference:t}=this.view;for(;this._vertices.length>e.length;){const{manipulatorId:e}=this._vertices.pop();this.manipulators.remove(e)}for(let i=this._vertices.length;i<e.length;i++){const[s,r]=e[i],o=N(new f.Z({x:s,y:r,spatialReference:t}),this.view,this._manipulatorLayer,this.palette),n=this.manipulators.add(o);(0,E.Xd)(o,((e,t)=>{t.next((0,E.Cf)(this.view)).next((0,E.a9)(e.graphic)).next((()=>{const t=e.graphic.geometry;this._vertices[i].coord=[t.x,t.y],this._updatePolylines()}))})),this._vertices.push({manipulatorId:n,coord:[s,r]})}const i=this._vertices.length-1,s=this._vertices[i],[r,o]=e[i];if(s.coord[0]!==r||s.coord[1]!==o){s.coord=[r,o];const e=new f.Z({x:r,y:o,spatialReference:t});this.manipulators.findById(s.manipulatorId).graphic.geometry=e}const n=this._drawActive?this._vertices[i].manipulatorId:null;this.manipulators.forEach((e=>{e.manipulator.interactive=null==n||e.id!==n})),this._updatePolylines()}_updateCursor(){this.cursor=this._drawActive?"crosshair":null}_updatePolylines(){const e=this._vertices.map((e=>e.coord)),{measurement:t,drawing:i,original:s}=function(e,t,i){const s=new w.Z({paths:[e],spatialReference:t});let r,o;if(t.isGeographic)if((0,U.isSupported)(t))r=(0,U.geodesicLengths)([s],"meters")[0],o=(0,U.geodesicDensify)(s,1e5);else{const e=(0,A.iV)(s,g.Z.WGS84),i=(0,U.geodesicDensify)(e,1e5);r=(0,U.geodesicLengths)([e],"meters")[0],o=(0,A.iV)(i,t)}else if(t.isWebMercator)r=(0,Z.geodesicLength)(s,"meters"),o=(0,Z.geodesicDensify)(s,1e5,"meters");else{const e=(0,Z.planarLength)(s,"meters");if(e>=i){const e=(0,A.iV)(s,g.Z.WGS84),i=(0,U.geodesicDensify)(e,1e5);r=(0,U.geodesicLengths)([e],"meters")[0],o=(0,A.iV)(i,t)}else r=e,o=s}return{measurement:{geometry:o,length:r},original:s,drawing:o}}(e,this.view.spatialReference,this.geodesicDistanceThreshold);this._set("measurement",t);const r=function(e,t,i){if(!t||!e)return null;switch(i){case"metric":return(0,j.Rd)(e,t.length,"meters");case"imperial":return(0,j.Ud)(e,t.length,"meters");default:return(0,j.VG)(e,(0,d.En)(t.length,"meters",i),i)}}(this.messages,t,this.unit);this._set("measurementLabel",r);const{pathPrimaryColor:o,pathSecondaryColor:n,pathWidth:l}=this.palette;this._polylineLayer.removeAll(),this._polylineLayer.addMany([new x.default({geometry:i,symbol:new C.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[14,12],lineDashEnding:"FullGap",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",width:l-1.5,color:n},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",width:l,color:o}]}}})}),new x.default({geometry:s.extent.center,symbol:new O.default({color:[255,255,255,1],haloColor:[0,0,0,.5],haloSize:2,font:new M.Z({size:14,family:"sans-serif"}),text:r})})])}};function N(e,t,i,s){const r=new L.Z({style:"circle",color:s.handleColor,size:s.handleWidth,outline:{type:"simple-line",width:0}}),o=new L.Z({style:"circle",color:s.handleColor,size:1.5*s.handleWidth,outline:{type:"simple-line",width:0}}),n=new x.default({geometry:e,symbol:r});return new R.L({view:t,layer:i,graphic:n,focusedSymbol:o})}function P(e){if(!e)return!1;const{isGeographic:t,isWebMercator:i,isWGS84:s}=e;return t&&!s&&!(0,U.isSupported)(e)||!t&&!i}(0,s._)([(0,o.Cb)()],z.prototype,"cursor",void 0),(0,s._)([(0,o.Cb)({value:!0})],z.prototype,"editable",null),(0,s._)([(0,o.Cb)({type:Number})],z.prototype,"geodesicDistanceThreshold",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],z.prototype,"measurement",void 0),(0,s._)([(0,o.Cb)({readOnly:!0})],z.prototype,"measurementLabel",void 0),(0,s._)([(0,o.Cb)()],z.prototype,"messages",void 0),(0,s._)([(0,o.Cb)()],z.prototype,"palette",void 0),(0,s._)([(0,o.Cb)()],z.prototype,"unit",void 0),(0,s._)([(0,o.Cb)({constructOnly:!0})],z.prototype,"view",void 0),z=(0,s._)([(0,l.j)("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],z);const W=z,V={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:5,pathPrimaryColor:[255,128,0,255],pathSecondaryColor:[255,255,255,255]},B=r.Z.getLogger("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel");let F=class extends v.V{constructor(e){super(e),this.supportedViewType="2d",this._handles=new m.Z,this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null,this.palette=V,this.tool=null}initialize(){this._handles.add([(0,_.init)(this,["unit","palette","geodesicDistanceThreshold"],((e,t,i)=>{this.tool&&(this.tool[i]=e)}))])}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}get state(){var e;return this.isDisabled?"disabled":function(e){return null!=e&&(!P(e)||(0,A.Gb)())}(null==(e=this.view)?void 0:e.spatialReference)?this.tool&&this.measurement?this.tool.active?"measuring":"measured":"ready":"disabled"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){void 0!==e?this._override("unit",this._validateUnit(e)):this._clearOverride("unit")}get unitOptions(){return d.oD}set unitOptions(e){void 0!==e?this._override("unitOptions",this._validateUnits(e)):this._clearOverride("unitOptions")}start(){return this.createTool()}clear(){this.removeTool()}newMeasurement(){(0,a.ignoreAbortErrors)(this.start())}clearMeasurement(){this.clear()}createToolParams(){return{toolConstructor:W,constructorArguments:()=>({geodesicDistanceThreshold:this.geodesicDistanceThreshold,palette:this.palette,unit:this.unit})}}logUnsupportedError(){B.error("DistanceMeasurement2D widget is not implemented for SceneView")}logError(...e){B.error(...e)}_validateUnit(e){return-1!==this.unitOptions.indexOf(e)?e:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]}_validateUnits(e=[]){const t=e.filter((e=>-1!==d.oD.indexOf(e)));return 0===t.length?d.oD.slice():t}};(0,s._)([(0,o.Cb)(b.Y)],F.prototype,"defaultUnit",void 0),(0,s._)([(0,o.Cb)({type:Number})],F.prototype,"geodesicDistanceThreshold",void 0),(0,s._)([(0,o.Cb)({readOnly:!0,aliasOf:"tool.measurement"})],F.prototype,"measurement",void 0),(0,s._)([(0,o.Cb)({readOnly:!0,aliasOf:"tool.measurementLabel"})],F.prototype,"measurementLabel",void 0),(0,s._)([(0,o.Cb)()],F.prototype,"palette",void 0),(0,s._)([(0,o.Cb)({dependsOn:["isDisabled","measurement","tool.active","view.spatialReference"],readOnly:!0})],F.prototype,"state",null),(0,s._)([(0,o.Cb)({constructOnly:!0,readOnly:!0})],F.prototype,"tool",void 0),(0,s._)([(0,o.Cb)({type:String,dependsOn:["unitOptions","defaultUnit"]})],F.prototype,"unit",null),(0,s._)([(0,o.Cb)({type:[String]})],F.prototype,"unitOptions",null),F=(0,s._)([(0,l.j)("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],F);const H=F,q="esri-distance-measurement-2d__measurement-item",J="esri-distance-measurement-2d__measurement-item-title";let $=class extends y.default{constructor(e,t){super(e,t),this.iconClass="esri-icon-measure-line",this.label=void 0,this.messages=null,this.messagesUnits=null,this.unit=null,this.unitOptions=null,this.view=null,this.viewModel=new H}render(){const{id:e,messages:t,messagesUnits:i,viewModel:s,visible:r}=this,{active:o,isSupported:n,measurementLabel:l,state:a,unit:h,unitOptions:c}=s,u="disabled"===a,y="measuring"===a||"measured"===a,m=o&&"ready"===a?(0,p.j)("section",{key:"hint",class:"esri-distance-measurement-2d__hint"},(0,p.j)("p",{class:"esri-distance-measurement-2d__hint-text"},t.hint)):null,_=n?null:(0,p.j)("section",{key:"unsupported",class:"esri-distance-measurement-2d__panel--error"},(0,p.j)("p",null,t.unsupported)),b=y?(0,p.j)("section",{key:"measurement",class:"esri-distance-measurement-2d__measurement"},((e,t,i)=>t?(0,p.j)("div",{key:`${i}-enabled`,class:q},(0,p.j)("span",{class:J},e),(0,p.j)("span",{class:"esri-distance-measurement-2d__measurement-item-value"},t)):(0,p.j)("div",{key:`${i}-disabled`,class:this.classes(q,"esri-distance-measurement-2d__measurement-item--disabled"),"aria-disabled":"true"},(0,p.j)("span",{class:J},e)))(t.distance,l,"distance")):null,v=`${e}-units`,g=y?(0,p.j)("section",{key:"units",class:"esri-distance-measurement-2d__units"},(0,p.j)("label",{class:"esri-distance-measurement-2d__units-label",for:v},t.unit),(0,p.j)("div",{class:"esri-distance-measurement-2d__units-select-wrapper"},(0,p.j)("select",{class:"esri-distance-measurement-2d__units-select esri-select",id:v,onchange:this._changeUnit,bind:this,value:h},c.map((e=>{var t;return(0,p.j)("option",{key:e,value:e},(0,d.ZO)(e)?i.systems[e]:null==(t=i.units[e])?void 0:t.pluralCapitalized)}))))):null,f=y?(0,p.j)("div",{key:"settings",class:"esri-distance-measurement-2d__settings"},g):null,w=!n||o&&!y?null:(0,p.j)("div",{class:"esri-distance-measurement-2d__actions"},(0,p.j)("button",{disabled:u,class:this.classes("esri-button esri-button--secondary","esri-distance-measurement-2d__clear-button",u&&"esri-button--disabled"),bind:this,onclick:this._newMeasurement,title:t.newMeasurement,"aria-label":t.newMeasurement,type:"button"},t.newMeasurement)),S=r?(0,p.j)("div",{class:"esri-distance-measurement-2d__container"},_,m,f,b,w):null;return(0,p.j)("div",{class:this.classes("esri-distance-measurement-2d","esri-widget","esri-widget--panel")},S)}_newMeasurement(){(0,a.ignoreAbortErrors)(this.viewModel.start())}_changeUnit(e){const t=e.target,i=t.options[t.selectedIndex];i&&(this.viewModel.unit=i.value)}};(0,s._)([(0,n.B)("viewModel.active"),(0,u.G)()],$.prototype,"active",void 0),(0,s._)([(0,o.Cb)()],$.prototype,"iconClass",void 0),(0,s._)([(0,o.Cb)({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],$.prototype,"label",void 0),(0,s._)([(0,o.Cb)(),(0,u.G)(),(0,c.H)("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],$.prototype,"messages",void 0),(0,s._)([(0,o.Cb)(),(0,u.G)(),(0,c.H)("esri/core/t9n/Units")],$.prototype,"messagesUnits",void 0),(0,s._)([(0,n.B)("viewModel.unit")],$.prototype,"unit",void 0),(0,s._)([(0,n.B)("viewModel.unitOptions")],$.prototype,"unitOptions",void 0),(0,s._)([(0,n.B)("viewModel.view")],$.prototype,"view",void 0),(0,s._)([(0,o.Cb)({type:H}),(0,u.G)(["viewModel.state","viewModel.unitOptions","viewModel.unit","viewModel.measurementLabel"])],$.prototype,"viewModel",void 0),(0,s._)([(0,n.B)("viewModel.visible"),(0,u.G)()],$.prototype,"visible",void 0),(0,s._)([(0,h.h)()],$.prototype,"_newMeasurement",null),(0,s._)([(0,h.h)()],$.prototype,"_changeUnit",null),$=(0,s._)([(0,l.j)("esri.widgets.DistanceMeasurement2D")],$);const K=$},19539:(e,t,i)=>{"use strict";i.d(t,{V:()=>u});var s=i(56140),r=(i(95830),i(36544),i(68055),i(79881)),o=i(87566),n=i(32656),l=(i(10923),i(57002),i(86035),i(39105)),a=i(82677),d=i(59691),h=i(80621),c=i(17519);let u=class extends a.default{constructor(e){super(e),this.tool=null,this._baseHandles=new d.Z,this._loggedUnsupportedErrorOnce=!1,this._creationAbortController=null,e&&null!=e.visible&&(this.visible=e.visible)}initialize(){this._baseHandles.add((0,h.init)(this,["view.ready","isSupported"],(()=>{this.view&&this.view.ready&&!this.isSupported?this._loggedUnsupportedErrorOnce||(this.logUnsupportedError(),this._loggedUnsupportedErrorOnce=!0):this._loggedUnsupportedErrorOnce=!1})))}destroy(){this.removeTool(),this.view=null,this._baseHandles.destroy(),this._baseHandles=null}get isSupported(){return!this.view||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(e){if(e===this.view)return;this.removeTool(),this._set("view",e);const t="tools";this._baseHandles.remove(t),e&&this._baseHandles.add(e.tools.on("change",(e=>{if(this.tool)for(const t of e.removed)if(this.tool===t){t.destroyed||t.destroy(),this._set("tool",null);break}})),t)}set visible(e){this._set("visible",e),this.tool&&(this.tool.visible=e),!e&&this._creationAbortController&&(this._creationAbortController.abort(),this._creationAbortController=null)}get active(){return null!=this._creationAbortController||null!=this.tool&&this.tool.active}get isDisabled(){return!this.view||!this.view.ready||!this.isSupported}get creatingTool(){return!!this._creationAbortController}async createTool(){if(this.removeTool(),!this.isSupported)return(0,l.reject)(new n.Z("tool:create","The view does not support the tool"));const e=this.createToolParams(),t=()=>{const t=(0,c.J1)(e.constructorArguments);return{visible:this.visible,...t}},i=new AbortController,s=i.signal;this._creationAbortController=i;const r=()=>{i===this._creationAbortController&&(this._creationAbortController=null)};try{const i=await this.view.createTool(e.toolConstructor,t,{signal:s});this._set("tool",i),r()}catch(e){throw r(),e}}removeTool(){this._creationAbortController&&this._creationAbortController.abort(),this._creationAbortController=null;const e=this.tool;e&&(this.view&&this.view.tools&&this.view.tools.remove(e),e.destroyed||e.destroy(),this._set("tool",null))}};(0,s._)([(0,r.Cb)({constructOnly:!0})],u.prototype,"tool",void 0),(0,s._)([(0,r.Cb)({dependsOn:["view.type"]})],u.prototype,"isSupported",null),(0,s._)([(0,r.Cb)({value:null})],u.prototype,"view",null),(0,s._)([(0,r.Cb)({type:Boolean,value:!0})],u.prototype,"visible",null),(0,s._)([(0,r.Cb)({dependsOn:["_creationAbortController","tool.active"]})],u.prototype,"active",null),(0,s._)([(0,r.Cb)({dependsOn:["view","view.ready","isSupported"]})],u.prototype,"isDisabled",null),(0,s._)([(0,r.Cb)()],u.prototype,"_creationAbortController",void 0),(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["_creationAbortController"]})],u.prototype,"creatingTool",null),u=(0,s._)([(0,o.j)("esri.widgets.support.InteractiveToolViewModel")],u)}}]);
//# sourceMappingURL=2209.js.map