/*! For license information please see index.js.LICENSE.txt */
(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[4826],{22696:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>M});var r,n=i(56140),s=(i(95830),i(82550)),o=i(59472),a=i(36544),l=(i(68055),i(79881)),c=i(87566),h=i(60538),u=i(10923),d=(i(57002),i(86035),i(39105)),p=i(58385),f=i(73032),y=i(83477),m=i(32105),g=i(809),v=i(32797),b=i(1721),_=i(80192),w=i(93776),x=i(87837);let C=0;const S=a.Z.getLogger("esri.Basemap");let A=r=class extends((0,p.eC)(g.Z)){constructor(e){super(e),this.id=null,this.portalItem=null,this.spatialReference=null,this.thumbnailUrl=null,this.title="Basemap",this.id=Date.now().toString(16)+"-basemap-"+C++,this.baseLayers=new y.Z,this.referenceLayers=new y.Z;const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"===e.type&&S.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`)},i=e=>{e.parent=null};this.baseLayers.on("after-add",(e=>t(e.item))),this.referenceLayers.on("after-add",(e=>t(e.item))),this.baseLayers.on("after-remove",(e=>i(e.item))),this.referenceLayers.on("after-remove",(e=>i(e.item)))}initialize(){this.when().catch((e=>{S.error("#load()",`Failed to load basemap (title: '${this.title}', id: '${this.id}')`,e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){var e;const t=this.baseLayers.removeAll();for(const e of t)e.destroy();const i=this.referenceLayers.removeAll();for(const e of i)e.destroy();this.baseLayers.destroy(),this.referenceLayers.destroy(),null==(e=this.portalItem)||e.destroy(),this.portalItem=null}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set baseLayers(e){this._set("baseLayers",(0,m.Z)(e,this._get("baseLayers")))}_writeBaseLayers(e,t,i){const r=[];e?(i={...i,layerContainerType:"basemap"},this.baseLayers.forEach((e=>{const t=(0,x.Nw)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);(0,o.pC)(t)&&r.push(t)})),this.referenceLayers.forEach((e=>{const t=(0,x.Nw)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);(0,o.pC)(t)&&(t.isReference=!0,r.push(t))})),t.baseMapLayers=r):t.baseMapLayers=r}set referenceLayers(e){this._set("referenceLayers",(0,m.Z)(e,this._get("referenceLayers")))}writeTitle(e,t){t.title=e||"Basemap"}load(e){return this.addResolvingPromise(this._loadFromSource(e)),(0,d.resolve)(this)}loadAll(){return(0,b.GZ)(this,(e=>{e(this.baseLayers,this.referenceLayers)}))}clone(){const e={id:this.id,title:this.title,portalItem:this.portalItem,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};return this.loaded&&(e.loadStatus="loaded"),new r({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}write(e,t){return e=e||{},t&&t.origin||(t={origin:"web-map",...t}),super.write(e,t),!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(e.baseMapLayers=this.resourceInfo.data.baseMapLayers.map((e=>{const t=(0,s.d9)(e);return t.url&&(0,u.oC)(t.url)&&(t.url=`https:${t.url}`),t.templateUrl&&(0,u.oC)(t.templateUrl)&&(t.templateUrl=`https:${t.templateUrl}`),t}))),e}async _loadFromSource(e){const{resourceInfo:t,portalItem:i}=this;(0,d.throwIfAborted)(e);const r=[];if(t){const i=t.context?t.context.url:null;if(r.push(this._loadLayersFromJSON(t.data,i,e)),t.data.id&&!t.data.title){const e=t.data.id;r.push((0,w.g)(e).then((e=>{e&&this.read({title:e},t.context)})))}}else i&&r.push(this._loadFromItem(i,e));await(0,d.all)(r)}async _loadLayersFromJSON(e,t,r){const n=this.resourceInfo&&this.resourceInfo.context,s=this.portalItem&&this.portalItem.portal||n&&n.portal||null,o=n&&"web-scene"===n.origin?"web-scene":"web-map",{populateOperationalLayers:a}=await i.e(7254).then(i.bind(i,87254)),l=[];if((0,d.throwIfAborted)(r),e.baseMapLayers&&Array.isArray(e.baseMapLayers)){const i={context:{origin:o,url:t,portal:s,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},r=a(this.baseLayers,e.baseMapLayers.filter((e=>!e.isReference)),i);l.push(r);const n=a(this.referenceLayers,e.baseMapLayers.filter((e=>e.isReference)),i);l.push(n)}await(0,d.eachAlways)(l)}async _loadFromItem(e,t){const i=await e.load(t),r=await i.fetchData("json",t),n=(0,u.mN)(e.itemUrl);return this._set("resourceInfo",{data:r.baseMap,context:{origin:"web-map",portal:e.portal||v.Z.getDefault(),url:n}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:r.spatialReference},this.resourceInfo.context),this.read({title:e.title,thumbnailUrl:e.thumbnailUrl},{origin:"portal-item",portal:e.portal||v.Z.getDefault(),url:n}),this._loadLayersFromJSON(this.resourceInfo.data,n,t)}static fromId(e){const t=w.s[e];return t?r.fromJSON(t):null}};(0,n._)([(0,l.Cb)({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer(e,t,i,r){this._writeBaseLayers(e,t,r)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:y.Z}},writer(e,t,i,r){this._writeBaseLayers(e,t,r)}}}}}})],A.prototype,"baseLayers",null),(0,n._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{write:!0}}}})],A.prototype,"id",void 0),(0,n._)([(0,l.Cb)({type:_.default})],A.prototype,"portalItem",void 0),(0,n._)([(0,l.Cb)()],A.prototype,"referenceLayers",null),(0,n._)([(0,l.Cb)({readOnly:!0})],A.prototype,"resourceInfo",void 0),(0,n._)([(0,l.Cb)({type:f.Z})],A.prototype,"spatialReference",void 0),(0,n._)([(0,l.Cb)()],A.prototype,"thumbnailUrl",void 0),(0,n._)([(0,l.Cb)({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],A.prototype,"title",void 0),(0,n._)([(0,h.c)("title")],A.prototype,"writeTitle",null),A=r=(0,n._)([(0,c.j)("esri.Basemap")],A);const M=A},78745:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var r=i(59472),n=i(68055),s=i(66039),o=i(33655);function a(e){return(0,o.uZ)((0,n.vU)(e),0,255)}function l(e,t,i){return e=Number(e),isNaN(e)?i:e<t?t:e>i?i:e}class c{constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}static blendColors(e,t,i,r=new c){return r.r=Math.round(e.r+(t.r-e.r)*i),r.g=Math.round(e.g+(t.g-e.g)*i),r.b=Math.round(e.b+(t.b-e.b)*i),r.a=e.a+(t.a-e.a)*i,r._sanitize()}static fromRgb(e,t){const i=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(i){const e=i[2].split(/\s*,\s*/),r=i[1];if("rgb"===r&&3===e.length||"rgba"===r&&4===e.length){const i=e[0];if("%"===i.charAt(i.length-1)){const i=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(i[3]=parseFloat(e[3])),c.fromArray(i,t)}return c.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===r&&3===e.length||"hsla"===r&&4===e.length)return c.fromArray((0,s.B7)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new c){const i=4===e.length?4:8,r=(1<<i)-1;let n=Number("0x"+e.substr(1));return isNaN(n)?null:(["b","g","r"].forEach((e=>{const s=n&r;n>>=i,t[e]=4===i?17*s:s})),t.a=1,t)}static fromArray(e,t=new c){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const i=(0,s.h$)(e);return i&&c.fromArray(i,t)||c.fromRgb(e,t)||c.fromHex(e,t)}static fromJSON(e){return e&&new c([e[0],e[1],e[2],e[3]/255])}static toUnitRGB(e){return(0,r.pC)(e)?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return(0,r.pC)(e)?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){if("string"==typeof e)c.fromString(e,this);else if(Array.isArray(e))c.fromArray(e,this);else{var t,i,r,n;this._set(null!=(t=e.r)?t:0,null!=(i=e.g)?i:0,null!=(r=e.b)?r:0,null!=(n=e.a)?n:1),e instanceof c||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const e=this.r.toString(16),t=this.g.toString(16),i=this.b.toString(16);return`#${e.length<2?"0"+e:e}${t.length<2?"0"+t:t}${i.length<2?"0"+i:i}`}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=0){const t=a(this.r),i=a(this.g),r=a(this.b);return 0===e||1!==this.a?[t,i,r,a(255*this.a)]:[t,i,r]}clone(){return new c(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}_sanitize(){return this.r=Math.round(l(this.r,0,255)),this.g=Math.round(l(this.g,0,255)),this.b=Math.round(l(this.b,0,255)),this.a=l(this.a,0,1),this}_set(e,t,i,r){this.r=e,this.g=t,this.b=i,this.a=r}}c.prototype.declaredClass="esri.Color";const h=c},15988:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>m});var r,n=i(56140),s=(i(95830),i(82550)),o=i(59472),a=(i(36544),i(68055),i(79881)),l=i(87566),c=(i(10923),i(57002),i(86035),i(58385)),h=i(56885),u=i(36348),d=i(58484),p=i(54734),f=i(32366);let y=r=class extends c.wq{constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:(0,f.D)(),configurable:!0})}normalizeCtorArgs(e,t,i,r){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:i,popupTemplate:r}}set attributes(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){return this.popupTemplate?this.popupTemplate:this.sourceLayer?"popupTemplate"in this.sourceLayer&&this.sourceLayer.popupTemplate?this.sourceLayer.popupTemplate:e&&"defaultPopupTemplate"in this.sourceLayer&&(0,o.pC)(this.sourceLayer.defaultPopupTemplate)?this.sourceLayer.defaultPopupTemplate:null:null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const i=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",i,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{geometry:(0,o.pC)(this.geometry)?this.geometry.toJSON():null,symbol:(0,o.pC)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}clone(){return new r(this.cloneProperties())}cloneProperties(){return{attributes:(0,s.d9)(this.attributes),geometry:(0,s.d9)(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:(0,s.d9)(this.symbol),visible:this.visible}}_notifyLayer(e,t,i,r){if(!this.layer||!("graphicChanged"in this.layer))return;const n={graphic:this,property:e,oldValue:t,newValue:i};"attributes"===e&&(n.attributeName=r),this.layer.graphicChanged(n)}};(0,n._)([(0,a.Cb)({value:null})],y.prototype,"attributes",null),(0,n._)([(0,a.Cb)({value:null,types:u.qM,json:{read:h.im}})],y.prototype,"geometry",null),(0,n._)([(0,a.Cb)({type:Boolean})],y.prototype,"isAggregate",void 0),(0,n._)([(0,a.Cb)()],y.prototype,"layer",void 0),(0,n._)([(0,a.Cb)({type:d.default})],y.prototype,"popupTemplate",void 0),(0,n._)([(0,a.Cb)()],y.prototype,"sourceLayer",void 0),(0,n._)([(0,a.Cb)({value:null,types:p.s})],y.prototype,"symbol",null),(0,n._)([(0,a.Cb)({type:Boolean,value:!0})],y.prototype,"visible",null),y=r=(0,n._)([(0,l.j)("esri.Graphic")],y),function(e){e.generateUID=f.D}(y||(y={}));const m=y},94850:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>V});var r,n=i(56140),s=(i(95830),i(36544)),o=i(79881),a=i(60263),l=i(87566),c=(i(10923),i(57002),i(86035),i(82677)),h=i(35470),u=i(22696),d=i(94588),p=i(82550),f=i(68055),y=i(60538),m=i(32656),g=i(39105),v=i(58385),b=i(83477),_=i(78745),w=i(3277),x=i(32105),C=i(809),S=i(1721),A=i(9870);let M=r=class extends v.wq{constructor(e){super(e),this.type="none"}clone(){return new r({type:this.type})}};var T;(0,n._)([(0,A.J)({none:"none",stayAbove:"stay-above"})],M.prototype,"type",void 0),M=r=(0,n._)([(0,l.j)("esri.ground.NavigationConstraint")],M);const I=s.Z.getLogger("esri.Ground");let E=T=class extends((0,v.eC)(C.Z)){constructor(e){super(e),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new b.Z;const t=e=>{e.parent&&e.parent!==this&&"remove"in e.parent&&e.parent.remove(e),e.parent=this,"elevation"!==e.type&&"base-elevation"!==e.type&&I.error(`Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)};this.layers.on("after-add",(e=>t(e.item))),this.layers.on("after-remove",(e=>{e.item.parent=null}))}initialize(){this.when().catch((e=>{I.error("#load()","Failed to load ground",e)})),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)t.destroy();this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",(0,x.Z)(e,this._get("layers")))}writeLayers(e,t,i,r){const n=[];e?(r={...r,layerContainerType:"ground"},e.forEach((e=>{if("write"in e){const t={};(0,d.sM)(e)().write(t,r)&&n.push(t)}else r&&r.messages&&r.messages.push(new m.Z("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted in the ground`,{layer:e}))})),t.layers=n):t.layers=n}load(e){return this.addResolvingPromise(this._loadFromSource(e)),(0,g.resolve)(this)}loadAll(){return(0,S.GZ)(this,(e=>{e(this.layers)}))}async queryElevation(e,t){await this.load({signal:null==t?void 0:t.signal});const{ElevationQuery:r}=await i.e(3549).then(i.bind(i,93549));(0,g.throwIfAborted)(t);const n=new r,s=this.layers.filter(O).toArray();return n.queryAll(s,e,t)}async createElevationSampler(e,t){await this.load({signal:null==t?void 0:t.signal});const{ElevationQuery:r}=await i.e(3549).then(i.bind(i,93549));(0,g.throwIfAborted)(t);const n=new r,s=this.layers.filter(O).toArray();return n.createSamplerAll(s,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:(0,p.d9)(this.surfaceColor),navigationConstraint:(0,p.d9)(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new T({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):(0,g.resolve)(null)}_loadLayersFromJSON(e,t,r){const n=t&&t.origin||"web-scene",s=t&&t.portal||null,o=t&&t.url||null;return i.e(7254).then(i.bind(i,87254)).then((({populateOperationalLayers:t})=>{(0,g.throwIfAborted)(r);const i=[];if(e.layers&&Array.isArray(e.layers)){const r={context:{origin:n,url:o,portal:s,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};i.push(t(this.layers,e.layers,r))}return(0,g.eachAlways)(i)})).then((()=>{}))}};function O(e){return"elevation"===e.type||function(e){return e&&"createElevationSampler"in e}(e)}(0,n._)([(0,o.Cb)({json:{read:!1}})],E.prototype,"layers",null),(0,n._)([(0,y.c)("layers")],E.prototype,"writeLayers",null),(0,n._)([(0,o.Cb)({readOnly:!0})],E.prototype,"resourceInfo",void 0),(0,n._)([(0,o.Cb)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:f.z8,read:{reader:w.b,source:"transparency"},write:{writer:(e,t)=>{t.transparency=(0,w.a)(e)},target:"transparency"}}})],E.prototype,"opacity",void 0),(0,n._)([(0,o.Cb)({type:_.default,json:{type:[f.z8],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],E.prototype,"surfaceColor",void 0),(0,n._)([(0,o.Cb)({type:M,json:{write:!0}})],E.prototype,"navigationConstraint",void 0),E=T=(0,n._)([(0,l.j)("esri.Ground")],E);const P=E;var k=i(78452),L=i(80882);const R=s.Z.getLogger("esri.support.groundUtils"),j={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};var D=i(90921),F=i(16137);const N=s.Z.getLogger("esri.Map");let z=class extends((0,F.Q)((0,D.K)(h.Z.EventedMixin(c.default)))){constructor(e){super(e),this.allLayers=new k.Z({root:this,rootCollectionNames:["basemap.baseLayers","ground.layers","layers","basemap.referenceLayers"],getChildrenFunction:e=>e.layers}),this.allTables=this._createTablesFlattener(this),this.basemap=null,this.ground=new P,this._basemapCache=(0,L.Df)()}destroy(){var e,t;this.allLayers.destroy(),this.allTables.destroy(),null==(e=this.ground)||e.destroy(),null==(t=this.basemap)||t.destroy(),(0,L.Bf)(this._basemapCache),this._basemapCache=null}castBasemap(e){return(0,L.se)(e,this._basemapCache)}castGround(e){return function(e){let t;return"string"==typeof e?e in j?t=new P({resourceInfo:{data:{layers:[j[e]]}}}):R.warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`):t=(0,f.se)(P,e),t}(e)||(N.error("Map.ground may not be set to null or undefined"),this._get("ground"))}findLayerById(e){return this.allLayers.find((t=>t.id===e))}findTableById(e){return this.allTables.find((t=>t.id===e))}_createTablesFlattener(e){return new k.Z({root:e,rootCollectionNames:["tables","layers"],getChildrenFunction:e=>e&&"group"===e.type?this._createTablesFlattener(e):null,itemFilterFunction:e=>this._isMapOrGroupLayer(e.parent)&&e.parent.tables.includes(e)})}_isMapOrGroupLayer(e){return e&&(e===this||this._isGroupLayer(e))}_isGroupLayer(e){return e&&"group"===e.type}};(0,n._)([(0,o.Cb)({readOnly:!0,dependsOn:[],autoTracked:!1})],z.prototype,"allLayers",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],z.prototype,"allTables",void 0),(0,n._)([(0,o.Cb)({type:u.default})],z.prototype,"basemap",void 0),(0,n._)([(0,a.p)("basemap")],z.prototype,"castBasemap",null),(0,n._)([(0,o.Cb)({type:P,nonNullable:!0})],z.prototype,"ground",void 0),(0,n._)([(0,a.p)("ground")],z.prototype,"castGround",null),z=(0,n._)([(0,l.j)("esri.Map")],z);const V=z},58484:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>U});var r=i(56140),n=(i(95830),i(82550)),s=i(36544),o=i(68055),a=i(79881),l=i(60263),c=i(30590),h=i(87566),u=i(60538),d=(i(10923),i(57002),i(86035),i(39105)),p=i(58385),f=i(83477),y=i(4665),m=i(4529),g=i(67472),v=i(97948),b=i(20628),_=i(38173),w=i(46761),x=i(16839),C=i(75107);const S={base:null,key:"type",typeMap:{attachment:g.Z,media:x.Z,text:C.Z,field:_.Z}};var A,M=i(7417);let T=A=class extends p.wq{constructor(e){super(e),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new A({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnTopmostRaster",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"showNoDataRecords",void 0),T=A=(0,r._)([(0,h.j)("esri.popup.LayerOptions")],T);const I=T;var E,O=i(84858);let P=E=class extends p.wq{constructor(e){super(e),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new E({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?(0,n.d9)(this.orderByFields):null})}};(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],P.prototype,"showRelatedRecords",void 0),(0,r._)([(0,a.Cb)({type:[O.Z],json:{write:!0}})],P.prototype,"orderByFields",void 0),P=E=(0,r._)([(0,h.j)("esri.popup.RelatedRecordsInfo")],P);const k=P;var L,R=i(89350),j=i(73186),D=i(59359);const F=f.Z.ofType({key:"type",defaultKeyValue:"button",base:R.Z,typeMap:{button:j.Z,toggle:D.Z}}),N={base:m.Z,key:"type",typeMap:{media:x.Z,custom:v.default,text:C.Z,attachments:g.Z,fields:_.Z}},z=s.Z.getLogger("esri.PopupTemplate"),V=["attachments","fields","media","text"];let B=L=class extends p.wq{constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title="",this.relatedRecordsInfo=null}castContent(e){return Array.isArray(e)?e.map((e=>(0,o.N7)(N,e))):"string"==typeof e||"function"==typeof e||e instanceof HTMLElement||(0,d.isPromiseLike)(e)?e:(z.error("content error","unsupported content value",{value:e}),null)}readContent(e,t){const{popupElements:i}=t;return Array.isArray(i)&&i.length>0?this._readPopupInfoElements(t):this._readPopupInfo(t)}writeContent(e,t){"string"!=typeof e?Array.isArray(e)&&(t.popupElements=e.filter((e=>-1!==V.indexOf(e.type))).map((e=>e&&e.toJSON())),t.popupElements.forEach((e=>{"attachments"===e.type?this._writeAttachmentContent(t):"media"===e.type?this._writeMediaContent(e,t):"text"===e.type&&this._writeTextContent(e,t)}))):t.description=e}writeFieldInfos(e,t){const{content:i}=this,r=Array.isArray(i)?i:null;if(e){const i=!!r&&r.some((e=>"fields"===e.type&&(!e.fieldInfos||0===e.fieldInfos.length)));t.fieldInfos=e.filter(Boolean).map((e=>{const t=e.toJSON();return i||(t.visible=!1),t}))}if(r)for(const e of r)"fields"===e.type&&this._writeFieldsContent(e,t)}writeLayerOptions(e,t){t.layerOptions=!e||null===e.showNoDataRecords&&null===e.returnTopmostRaster?null:e.toJSON()}writeTitle(e,t){t.title=e||""}clone(){const{actions:e}=this,t=e?(0,n.d9)(e.toArray()):[];return new L({actions:t,content:Array.isArray(this.content)?(0,n.d9)(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?(0,n.d9)(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?(0,n.d9)(this.fieldInfos):null,layerOptions:this.layerOptions?(0,n.d9)(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?(0,n.d9)(this.outFields):null,overwriteActions:this.overwriteActions,returnGeometry:this.returnGeometry,title:this.title,relatedRecordsInfo:this.relatedRecordsInfo?(0,n.d9)(this.relatedRecordsInfo):null})}async collectRequiredFields(e,t){await this._collectExpressionInfoFields(e,t,this.expressionInfos),(0,y.gd)(e,t,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(e){const t=new Set;return await this.collectRequiredFields(t,e),[...t].sort()}_writeFieldsContent(e,t){if(!Array.isArray(e.fieldInfos)||!e.fieldInfos.length)return;const i=(0,n.d9)(e.fieldInfos);Array.isArray(t.fieldInfos)?i.forEach((e=>{const i=t.fieldInfos.find((t=>t.fieldName.toLowerCase()===e.fieldName.toLowerCase()));i?i.visible=!0:t.fieldInfos.push(e)})):t.fieldInfos=i}_writeAttachmentContent(e){e.showAttachments||(e.showAttachments=!0)}_writeTextContent(e,t){!t.description&&e.text&&(t.description=e.text)}_writeMediaContent(e,t){if(!Array.isArray(e.mediaInfos)||!e.mediaInfos.length)return;const i=(0,n.d9)(e.mediaInfos);Array.isArray(t.mediaInfos)?t.mediaInfos=[...t.mediaInfos,...i]:t.mediaInfos=i}_readPopupInfoElements({description:e,mediaInfos:t,popupElements:i}){const r={description:!1,mediaInfos:!1};return i.map((i=>"media"===i.type?(i.mediaInfos||!t||r.mediaInfos||(i.mediaInfos=t,r.mediaInfos=!0),x.Z.fromJSON(i)):"text"===i.type?(i.text||!e||r.description||(i.text=e,r.description=!0),C.Z.fromJSON(i)):"attachments"===i.type?g.Z.fromJSON(i):"fields"===i.type?_.Z.fromJSON(i):void 0)).filter(Boolean)}_readPopupInfo({description:e,mediaInfos:t,showAttachments:i}){const r=[];return e?r.push(new C.Z({text:e})):r.push(new _.Z),Array.isArray(t)&&t.length&&r.push(x.Z.fromJSON({mediaInfos:t})),i&&r.push(g.Z.fromJSON({displayType:"list"})),r.length?r:e}_getContentElementFields(e){return e&&"attachments"!==e.type?"custom"===e.type?e.outFields||[]:"fields"===e.type?this._getFieldInfoFields(e.fieldInfos||this.fieldInfos):"media"===e.type?(e.mediaInfos||[]).reduce(((e,t)=>[...e,...this._getMediaInfoFields(t)]),[]):"text"===e.type?this._extractFieldNames(e.text):void 0:[]}_getMediaInfoFields(e){const{caption:t,title:i,value:r}=e,n=r||{},{fields:s=[],normalizeField:o,tooltipField:a,sourceURL:l,linkURL:c}=n,h=[...this._extractFieldNames(i),...this._extractFieldNames(t),...this._extractFieldNames(l),...this._extractFieldNames(c),...s];return o&&h.push(o),a&&h.push(a),h}_getContentFields(e){return"string"==typeof e?this._extractFieldNames(e):Array.isArray(e)?e.reduce(((e,t)=>[...e,...this._getContentElementFields(t)]),[]):[]}async _collectExpressionInfoFields(e,t,i){i&&await(0,d.all)(i.map((i=>(0,y.io)(e,t,i.expression))))}_getFieldInfoFields(e){return e?e.filter((e=>void 0===e.visible||!!e.visible)).map((e=>e.fieldName)).filter((e=>-1===e.indexOf("relationships/")&&-1===e.indexOf("expression/"))):[]}_getActionsFields(e){return e?e.toArray().reduce(((e,t)=>[...e,...this._getActionFields(t)]),[]):[]}_getActionFields(e){const{className:t,title:i,type:r}=e,n="button"===r||"toggle"===r?e.image:"";return[...this._extractFieldNames(i),...this._extractFieldNames(t),...this._extractFieldNames(n)]}_getTitleFields(e){return"string"==typeof e?this._extractFieldNames(e):[]}_extractFieldNames(e){if(!e||"string"!=typeof e)return[];const t=e.match(/{[^}]*}/g);if(!t)return[];const i=/\{(\w+):.+\}/,r=t.filter((e=>!(0===e.indexOf("{relationships/")||0===e.indexOf("{expression/")))).map((e=>e.replace(i,"{$1}")));return r?r.map((e=>e.slice(1,-1))):[]}};(0,r._)([(0,a.Cb)({type:F})],B.prototype,"actions",void 0),(0,r._)([(0,a.Cb)()],B.prototype,"content",void 0),(0,r._)([(0,l.p)("content")],B.prototype,"castContent",null),(0,r._)([(0,c.r)("content",["description","popupElements","mediaInfos","showAttachments"])],B.prototype,"readContent",null),(0,r._)([(0,u.c)("content",{popupElements:{type:f.Z.ofType(S)},showAttachments:{type:Boolean},mediaInfos:{type:f.Z.ofType(w.V)},description:{type:String}})],B.prototype,"writeContent",null),(0,r._)([(0,a.Cb)({type:[M.Z],json:{write:!0}})],B.prototype,"expressionInfos",void 0),(0,r._)([(0,a.Cb)({type:[b.Z]})],B.prototype,"fieldInfos",void 0),(0,r._)([(0,u.c)("fieldInfos")],B.prototype,"writeFieldInfos",null),(0,r._)([(0,a.Cb)({type:I})],B.prototype,"layerOptions",void 0),(0,r._)([(0,u.c)("layerOptions")],B.prototype,"writeLayerOptions",null),(0,r._)([(0,a.Cb)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],B.prototype,"lastEditInfoEnabled",void 0),(0,r._)([(0,a.Cb)()],B.prototype,"outFields",void 0),(0,r._)([(0,a.Cb)()],B.prototype,"overwriteActions",void 0),(0,r._)([(0,a.Cb)()],B.prototype,"returnGeometry",void 0),(0,r._)([(0,a.Cb)({json:{type:String}})],B.prototype,"title",void 0),(0,r._)([(0,u.c)("title")],B.prototype,"writeTitle",null),(0,r._)([(0,a.Cb)({type:k,json:{write:!0}})],B.prototype,"relatedRecordsInfo",void 0),B=L=(0,r._)([(0,h.j)("esri.PopupTemplate")],B);const U=B},87864:(e,t,i)=>{"use strict";i.d(t,{Z:()=>f});var r,n=i(56140),s=(i(95830),i(36544),i(68055),i(79881)),o=i(30590),a=i(87566),l=i(60538),c=(i(10923),i(57002),i(86035),i(58385)),h=i(98034);let u=r=class extends c.wq{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return d}static get empty(){return p}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new r({end:this.end,start:this.start})}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=this.start?(0,h.JE)(this.start,e):null,i=this.end?(0,h.Nm)((0,h.JE)(this.end,e),1,e):null;return new r({start:t,end:i})}intersection(e){var t,i,n,s,o,a,l,c;if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return r.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const h=null!=(t=null==(i=this.start)?void 0:i.getTime())?t:-1/0,u=null!=(n=null==(s=this.end)?void 0:s.getTime())?n:1/0,d=null!=(o=null==(a=e.start)?void 0:a.getTime())?o:-1/0,p=null!=(l=null==(c=e.end)?void 0:c.getTime())?l:1/0;let f,y;if(d>=h&&d<=u?f=d:h>=d&&h<=p&&(f=h),u>=d&&u<=p?y=u:p>=h&&p<=u&&(y=p),!isNaN(f)&&!isNaN(y)){const e=new r;return e.start=f===-1/0?null:new Date(f),e.end=y===1/0?null:new Date(y),e}return r.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const i=new r,{start:n,end:s}=this;return n&&(i.start=(0,h.Nm)(n,e,t)),s&&(i.end=(0,h.Nm)(s,e,t)),i}equals(e){if(!e)return!1;const t=this.start?this.start.getTime():this.start,i=this.end?this.end.getTime():this.end,r=e.start?e.start.getTime():e.start,n=e.end?e.end.getTime():e.end;return t===r&&i===n}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return d.clone();const t=this.start&&e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,i=this.end&&e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new r({start:t,end:i})}};(0,n._)([(0,s.Cb)({type:Date,json:{write:{allowNull:!0}}})],u.prototype,"end",void 0),(0,n._)([(0,o.r)("end")],u.prototype,"readEnd",null),(0,n._)([(0,l.c)("end")],u.prototype,"writeEnd",null),(0,n._)([(0,s.Cb)({dependsOn:["start","end"],readOnly:!0,json:{read:!1}})],u.prototype,"isAllTime",null),(0,n._)([(0,s.Cb)({dependsOn:["start","end"],readOnly:!0,json:{read:!1}})],u.prototype,"isEmpty",null),(0,n._)([(0,s.Cb)({type:Date,json:{write:{allowNull:!0}}})],u.prototype,"start",void 0),(0,n._)([(0,o.r)("start")],u.prototype,"readStart",null),(0,n._)([(0,l.c)("start")],u.prototype,"writeStart",null),u=r=(0,n._)([(0,a.j)("esri.TimeExtent")],u);const d=new u,p=new u({start:void 0,end:void 0});const f=u},40522:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var r,n=i(56140),s=(i(95830),i(36544),i(68055),i(79881)),o=i(87566),a=(i(10923),i(57002),i(86035),i(58385)),l=i(98034);let c=r=class extends a.wq{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return this.value*l.fM[this.unit]}clone(){return new r({value:this.value,unit:this.unit})}};(0,n._)([(0,s.Cb)({type:Number,json:{write:!0},nonNullable:!0})],c.prototype,"value",void 0),(0,n._)([(0,s.Cb)({type:l.vU.apiValues,json:{type:l.vU.jsonValues,read:l.vU.read,write:l.vU.write},nonNullable:!0})],c.prototype,"unit",void 0),c=r=(0,n._)([(0,o.j)("esri.TimeInterval")],c);const h=c},65984:(e,t,i)=>{"use strict";i.d(t,{Z:()=>C});var r,n=i(56140),s=(i(95830),i(59472)),o=(i(36544),i(79881)),a=i(60263),l=i(87566),c=(i(10923),i(57002),i(86035),i(58385)),h=i(56885),u=i(36348),d=i(68055),p=i(30590),f=i(60538),y=i(61106),m=i(33655),g=i(17154);let v=r=class extends c.wq{constructor(...e){super(...e),this.position=new y.Z([0,0,0]),this.heading=0,this.tilt=0,this.fov=55}normalizeCtorArgs(e,t,i,r){if(e&&"object"==typeof e&&("x"in e||Array.isArray(e))){const n={position:e};return null!=t&&(n.heading=t),null!=i&&(n.tilt=i),null!=r&&(n.fov=r),n}return e}writePosition(e,t,i,r){const n=e.clone();n.x=(0,d.q9)(e.x||0),n.y=(0,d.q9)(e.y||0),n.z=e.hasZ?(0,d.q9)(e.z||0):e.z,t[i]=n.write(null,r)}readPosition(e,t){const i=new y.Z;return i.read(e,t),i.x=(0,d.q9)(i.x||0),i.y=(0,d.q9)(i.y||0),i.z=i.hasZ?(0,d.q9)(i.z||0):i.z,i}equals(e){return!!e&&this.tilt===e.tilt&&this.heading===e.heading&&this.fov===e.fov&&this.position.equals(e.position)}clone(){return new r({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})}};(0,n._)([(0,o.Cb)({type:y.Z,json:{write:{isRequired:!0}}})],v.prototype,"position",void 0),(0,n._)([(0,f.c)("position")],v.prototype,"writePosition",null),(0,n._)([(0,p.r)("position")],v.prototype,"readPosition",null),(0,n._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,a.p)((e=>g.LU.normalize((0,d.q9)(e))))],v.prototype,"heading",void 0),(0,n._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,a.p)((e=>(0,m.uZ)((0,d.q9)(e),-180,180)))],v.prototype,"tilt",void 0),(0,n._)([(0,o.Cb)({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],v.prototype,"fov",void 0),v=r=(0,n._)([(0,l.j)("esri.Camera")],v);const b=v;var _;let w=_=class extends c.wq{constructor(e){super(e),this.rotation=0,this.scale=0,this.targetGeometry=null,this.camera=null}castRotation(e){return(e%=360)<0&&(e+=360),e}clone(){return new _({rotation:this.rotation,scale:this.scale,targetGeometry:(0,s.pC)(this.targetGeometry)?this.targetGeometry.clone():null,camera:(0,s.pC)(this.camera)?this.camera.clone():null})}};function x(){return{enabled:!this.camera}}(0,n._)([(0,o.Cb)({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:x}}}}})],w.prototype,"rotation",void 0),(0,n._)([(0,a.p)("rotation")],w.prototype,"castRotation",null),(0,n._)([(0,o.Cb)({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:x}}}}})],w.prototype,"scale",void 0),(0,n._)([(0,o.Cb)({types:u.qM,json:{read:h.im,write:!0,origins:{"web-scene":{read:h.im,write:{overridePolicy:x}}}}})],w.prototype,"targetGeometry",void 0),(0,n._)([(0,o.Cb)({type:b,json:{write:!0}})],w.prototype,"camera",void 0),w=_=(0,n._)([(0,l.j)("esri.Viewpoint")],w);const C=w},76910:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Ve});var r,n=i(56140),s=(i(95830),i(59472)),o=i(36544),a=i(68055),l=i(79881),c=i(30590),h=i(87566),u=i(60538),d=i(32656),p=i(10923),f=(i(57002),i(86035),i(19677)),y=i(39105),m=i(17771),g=i(73032),v=i(41241),b=i(83477),_=i(23838),w=i(75044),x=i(809),C=i(32797),S=i(1721),A=i(80192),M=i(87837),T=i(80882),I=i(94850),E=i(65984),O=i(43072),P=i(80621),k=i(28885),L=i(97849),R=i(62646),j=i(52411),D=i(82550),F=i(58385);let N=r=class extends F.wq{constructor(e){super(e),this.activeRange=null,this.currentRangeExtent=null,this.fullRangeExtent=null}clone(){return new r((0,D.d9)({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))}};(0,n._)([(0,l.Cb)({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],N.prototype,"activeRange",void 0),(0,n._)([(0,l.Cb)({type:[Number],json:{write:!0}})],N.prototype,"currentRangeExtent",void 0),(0,n._)([(0,l.Cb)({type:[Number],json:{write:!0}})],N.prototype,"fullRangeExtent",void 0),N=r=(0,n._)([(0,h.j)("esri.webdoc.RangeInfo")],N);const z=N;var V;const B=new(i(56274).Xn)({slider:"slider",picker:"picker"});let U=V=class extends F.wq{constructor(e){super(e),this.interactionMode=null,this.numStops=null,this.stopInterval=null}clone(){return new V({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})}};(0,n._)([(0,l.Cb)({type:B.apiValues,nonNullable:!0,json:{type:B.jsonValues,default:null,read:{reader:B.read},write:{isRequired:!0,writer:B.write}}})],U.prototype,"interactionMode",void 0),(0,n._)([(0,l.Cb)({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy(){const e=null!=this.stopInterval;return{enabled:!e,isRequired:!e}}}}})],U.prototype,"numStops",void 0),(0,n._)([(0,l.Cb)({type:Number,json:{write:{overridePolicy(){return{isRequired:null==this.numStops}}}}})],U.prototype,"stopInterval",void 0),U=V=(0,n._)([(0,h.j)("esri.webdoc.widgets.Range")],U);const G=U;var Z,q=i(10103),H=i(87864),W=i(40522);let $=Z=class extends F.wq{constructor(e){super(e),this.currentTimeExtent=null,this.fullTimeExtent=null,this.numStops=null,this.numThumbs=null,this.stopDelay=null,this.stopInterval=null}readCurrentTimeExtent(e){if(!e)return;const t=null!=e[0]?new Date(e[0]):null,i=null!=e[1]?new Date(e[1]):null;return new H.Z({start:t,end:i})}writeCurrentTimeExtent(e,t,i){e&&(0,q.RB)(i,[e.start?e.start.getTime():null,e.end?e.end.getTime():null],t)}readFullTimeExtent(e,t){const i=t.properties;if(!i)return;const r=null!=i.endTime?new Date(i.endTime):null,n=null!=i.startTime?new Date(i.startTime):null;return new H.Z({start:n,end:r})}writeFullTimeExtent(e,t){if(!e)return;const i=t.properties=t.properties||{},r=e.end,n=e.start;r&&(i.endTime=r?r.getTime():null),n&&(i.startTime=n?n.getTime():null)}readStopInterval(e,t,i){return e?W.Z.fromJSON({value:e.interval,unit:e.units},i):null}writeStopInterval(e,t,i,r){if(!e)return;const n=e.toJSON(r);(0,q.RB)(i,{interval:n.value,units:n.unit},t)}clone(){return new Z((0,D.d9)({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval}))}};(0,n._)([(0,l.Cb)({type:H.Z,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],$.prototype,"currentTimeExtent",void 0),(0,n._)([(0,c.r)("currentTimeExtent")],$.prototype,"readCurrentTimeExtent",null),(0,n._)([(0,u.c)("currentTimeExtent")],$.prototype,"writeCurrentTimeExtent",null),(0,n._)([(0,l.Cb)({type:H.Z,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],$.prototype,"fullTimeExtent",void 0),(0,n._)([(0,c.r)("fullTimeExtent")],$.prototype,"readFullTimeExtent",null),(0,n._)([(0,u.c)("fullTimeExtent")],$.prototype,"writeFullTimeExtent",null),(0,n._)([(0,l.Cb)({type:Number,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy(){const e=!!this.stopInterval;return{enabled:!e,isRequired:!e}}}}})],$.prototype,"numStops",void 0),(0,n._)([(0,l.Cb)({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],$.prototype,"numThumbs",void 0),(0,n._)([(0,l.Cb)({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],$.prototype,"stopDelay",void 0),(0,n._)([(0,l.Cb)({type:W.Z,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy(){return{isRequired:null==this.numStops}}}}})],$.prototype,"stopInterval",void 0),(0,n._)([(0,c.r)("stopInterval")],$.prototype,"readStopInterval",null),(0,n._)([(0,u.c)("stopInterval")],$.prototype,"writeStopInterval",null),$=Z=(0,n._)([(0,h.j)("esri.webdoc.widgets.TimeSlider")],$);const J=$;var X;let Y=X=class extends F.wq{constructor(e){super(e),this.range=null,this.timeSlider=null}clone(){return new X((0,D.d9)({range:this.range,timeSlider:this.timeSlider}))}};(0,n._)([(0,l.Cb)({type:G,json:{write:!0}})],Y.prototype,"range",void 0),(0,n._)([(0,l.Cb)({type:J,json:{write:!0}})],Y.prototype,"timeSlider",void 0),Y=X=(0,n._)([(0,h.j)("esri.webdoc.Widgets")],Y);const K=Y,Q={width:600,height:400};function ee(e){return{enabled:!(null==e||!e.length)}}var te,ie=i(9870),re=i(88210);let ne=te=class extends F.wq{constructor(e){super(e),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new te({exactMatch:this.exactMatch,type:this.type,name:this.name})}};(0,n._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],ne.prototype,"exactMatch",void 0),(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],ne.prototype,"name",void 0),(0,n._)([(0,ie.J)(re.v)],ne.prototype,"type",void 0),ne=te=(0,n._)([(0,h.j)("esri.webdoc.applicationProperties.SearchLayerField")],ne);const se=ne;var oe;let ae=oe=class extends F.wq{constructor(e){super(e),this.field=null,this.id=null,this.subLayer=null}clone(){return new oe((0,D.d9)({field:this.field,id:this.id,subLayer:this.subLayer}))}};(0,n._)([(0,l.Cb)({type:se,json:{write:{isRequired:!0}}})],ae.prototype,"field",void 0),(0,n._)([(0,l.Cb)({type:String,json:{write:{isRequired:!0}}})],ae.prototype,"id",void 0),(0,n._)([(0,l.Cb)({type:a.z8,json:{write:!0}})],ae.prototype,"subLayer",void 0),ae=oe=(0,n._)([(0,h.j)("esri.webdoc.applicationProperties.SearchLayer")],ae);const le=ae;var ce;let he=ce=class extends F.wq{constructor(e){super(e),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new ce({exactMatch:this.exactMatch,type:this.type,name:this.name})}};(0,n._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],he.prototype,"exactMatch",void 0),(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],he.prototype,"name",void 0),(0,n._)([(0,ie.J)(re.v)],he.prototype,"type",void 0),he=ce=(0,n._)([(0,h.j)("esri.webdoc.applicationProperties.SearchTableField")],he);const ue=he;var de;let pe=de=class extends F.wq{constructor(e){super(e),this.field=null,this.id=null}clone(){return new de((0,D.d9)({field:this.field,id:this.id}))}};(0,n._)([(0,l.Cb)({type:ue,json:{write:{isRequired:!0}}})],pe.prototype,"field",void 0),(0,n._)([(0,l.Cb)({type:String,json:{write:{isRequired:!0}}})],pe.prototype,"id",void 0),pe=de=(0,n._)([(0,h.j)("esri.webdoc.applicationProperties.SearchTable")],pe);const fe=pe;var ye;const me=b.Z.ofType(le),ge=b.Z.ofType(fe);let ve=ye=class extends F.wq{constructor(e){super(e),this.addressSearchEnabled=!0,this.enabled=!0,this.hintText=null,this.layers=new me,this.tables=new ge}readAddressSearchEnabled(e){return!e}writeAddressSearchEnabled(e,t,i){t[i]=!e}clone(){return new ye((0,D.d9)({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}};(0,n._)([(0,l.Cb)({type:Boolean,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder"},default:!0,origins:{"web-scene":{read:!1,write:!1}}}})],ve.prototype,"addressSearchEnabled",void 0),(0,n._)([(0,c.r)("addressSearchEnabled")],ve.prototype,"readAddressSearchEnabled",null),(0,n._)([(0,u.c)("addressSearchEnabled")],ve.prototype,"writeAddressSearchEnabled",null),(0,n._)([(0,l.Cb)({type:Boolean,json:{write:!0,default:!0}})],ve.prototype,"enabled",void 0),(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],ve.prototype,"hintText",void 0),(0,n._)([(0,l.Cb)({type:me,json:{write:{overridePolicy:ee},origins:{"web-scene":{write:{isRequired:!0}}}}})],ve.prototype,"layers",void 0),(0,n._)([(0,l.Cb)({type:ge,json:{read:!0,write:{overridePolicy:ee},origins:{"web-scene":{read:!1,write:!1}}}})],ve.prototype,"tables",void 0),ve=ye=(0,n._)([(0,h.j)("esri.webdoc.applicationProperties.Search")],ve);const be=ve;var _e;let we=_e=class extends F.wq{constructor(e){super(e),this.search=null}clone(){return new _e((0,D.d9)({search:this.search}))}};(0,n._)([(0,l.Cb)({type:be,json:{write:!0}})],we.prototype,"search",void 0),we=_e=(0,n._)([(0,h.j)("esri.webdoc.applicationProperties.Viewing")],we);const xe=we;var Ce;let Se=Ce=class extends F.wq{constructor(e){super(e),this.editing=null,this.offline=null,this.viewing=null}clone(){return new Ce((0,D.d9)({editing:this.editing,offline:this.offline,viewing:this.viewing}))}};(0,n._)([(0,l.Cb)({json:{write:!0}})],Se.prototype,"editing",void 0),(0,n._)([(0,l.Cb)({json:{write:!0}})],Se.prototype,"offline",void 0),(0,n._)([(0,l.Cb)({type:xe,json:{write:!0}})],Se.prototype,"viewing",void 0),Se=Ce=(0,n._)([(0,h.j)("esri.webmap.ApplicationProperties")],Se);const Ae=Se;var Me,Te=i(65892),Ie=i(29155),Ee=i(82677);let Oe=Me=class extends Ee.default{constructor(e){super(e),this.background=null,this.rangeInfo=null,this.spatialReference=null,this.viewpoint=null}clone(){return new Me((0,D.d9)({background:this.background,rangeInfo:this.rangeInfo,spatialReference:this.spatialReference,viewpoint:this.viewpoint}))}};(0,n._)([(0,l.Cb)({type:Ie.Z})],Oe.prototype,"background",void 0),(0,n._)([(0,l.Cb)({type:z})],Oe.prototype,"rangeInfo",void 0),(0,n._)([(0,l.Cb)({type:g.Z})],Oe.prototype,"spatialReference",void 0),(0,n._)([(0,l.Cb)({type:E.Z})],Oe.prototype,"viewpoint",void 0),Oe=Me=(0,n._)([(0,h.j)("esri.webmap.InitialViewProperties")],Oe);const Pe=Oe;var ke=i(34175);class Le extends ke.G{constructor(e,t){super(e,t,"webmap")}}const Re=new Le(2,19),je=b.Z.ofType(Te.Z),De=o.Z.getLogger("esri.WebMap"),Fe=new Map;Fe.set("image/jpeg","jpeg"),Fe.set("image/jpg","jpg"),Fe.set("image/png","png"),Fe.set("image/gif","gif");const Ne=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map((e=>e.toLowerCase()));let ze=class extends((0,O.R)(x.Z.LoadableMixin((0,w.v)(I.default)))){constructor(e){super(e),this.applicationProperties=null,this.bookmarks=new je,this.initialViewProperties=new Pe,this.portalItem=null,this.presentation=null,this.sourceVersion=null,this.widgets=null,this.authoringApp=this.authoringAppVersion=null,this._isAuthoringAppSetByUser=this._isAuthoringAppVersionSetByUser=!1}destroy(){const e=this.portalItem;this.portalItem=null,null==e||e.destroy()}initialize(){if(this.when().catch((e=>{De.error("#load()","Failed to load web map",e)})),this.resourceInfo){let e;try{e=this._validateJSON(this.resourceInfo)}catch(e){return void this.addResolvingPromise((0,y.reject)(e))}this.read(e)}}set authoringApp(e){this._isAuthoringAppSetByUser=!0,this._set("authoringApp",e)}writeAuthoringApp(e,t){e&&this._isAuthoringAppSetByUser?t.authoringApp=e:t.authoringApp="ArcGIS API for JavaScript"}set authoringAppVersion(e){this._isAuthoringAppVersionSetByUser=!0,this._set("authoringAppVersion",e)}writeAuthoringAppVersion(e,t){e&&this._isAuthoringAppVersionSetByUser?t.authoringAppVersion=e:t.authoringAppVersion=_.i8}readInitialViewProperties(e,t){const i=new Pe;return t.background&&(i.background=Ie.Z.fromJSON(t.background)),t.initialState&&t.initialState.viewpoint&&(i.viewpoint=E.Z.fromJSON(t.initialState.viewpoint)),t.mapRangeInfo&&(i.rangeInfo=z.fromJSON(t.mapRangeInfo)),t.spatialReference&&(i.spatialReference=g.Z.fromJSON(t.spatialReference)),i}writeInitialViewProperties(e,t,i,r){if(!e)return;const n=e.background;n&&n.color&&(t.background=n.write(null,r)),e.viewpoint&&(t.initialState={viewpoint:e.viewpoint.write(null,r)}),e.rangeInfo&&(t.mapRangeInfo=e.rangeInfo.toJSON(r)),e.spatialReference&&(t.spatialReference=e.spatialReference.write(null,r))}writeLayers(e,t,i,r){t[i]=this._writeLayers(e,r,"operational-layers")}readSourceVersion(e,t){const[i,r]=t.version.split(".");return new Le(parseInt(i,10),parseInt(r,10))}writeSourceVersion(e,t,i){t[i]=`${Re.major}.${Re.minor}`}writeTables(e,t,i,r){const n=this._writeLayers(e,r,"tables");n.length&&(t[i]=n)}get thumbnailUrl(){return this.portalItem&&this.portalItem.thumbnailUrl||null}set thumbnailUrl(e){e?(this._override("thumbnailUrl",e),this._thumbnailFilename=this._generateCustomThumbnailFilename(e)):this._clearThumbnailOverride()}load(e){return this.addResolvingPromise(this._loadFromSource()),(0,y.resolve)(this)}loadAll(){return(0,S.GZ)(this,(e=>{e(this.ground,this.basemap,this.layers,this.tables)}))}read(e,t){t={...t,origin:"web-map"};const i=this._getAuthoringPropsState();(0,m.$Z)(this,e,(t=>super.read(e,t)),t),this._restoreAuthoringPropsFromState(i)}write(e,t){if("loaded"!==this.loadStatus){const e=new d.Z("webmap:not-loaded","Web map must be loaded before it can be serialized");throw De.error("#toJSON()","Web map must be loaded before it can be serialized",this.loadError||this.loadStatus),e}return this._removeDanglingLayerRefs(),t={...t,origin:"web-map",restrictedWebMapWriting:!0,webmap:this},super.write(e,t)}async save(e){e=e||{},this._validateItem(),await this._updateFromPromise,await this.load(),await this._loadLayerContainers(),this._validateMap();const t=this.portalItem,i={origin:"web-map",messages:[],writtenProperties:[],url:t.itemUrl&&(0,p.mN)(t.itemUrl),portal:t.portal||C.Z.getDefault()},r=this.write(null,i);return this._validateJSONForWriting(i,e),await this._updateItemProperties(t),await this._updateItem(t,r,i),await this._updateItemThumbnail(),t}async saveAs(e,t){t=t||{};const i=this._getPortalItem(e);await this._updateFromPromise,await this.load(),await this._loadLayerContainers(),this._validateMap();const r={origin:"web-map",messages:[],writtenProperties:[],url:null,portal:i.portal},n=this.write(null,r);this._validateJSONForWriting(r,t),await this._updateItemPropertiesForSaveAs(i);const s=this._getThumbnailState();return await this._createItem(i,n,r,t),this._restoreThumbnailFromState(s),await this._updateItemThumbnail(),i}async updateFrom(e,t){const i=this._updateFromInternal(e,t);this._updateFromPromise=i,await i,i===this._updateFromPromise&&(this._updateFromPromise=null)}getLayerJSONFromResourceInfo(e){var t,i,r,n;const s=this.resourceInfo;return this._collectAllLayersJSON((0,f.xH)([null==s||null==(t=s.baseMap)?void 0:t.baseMapLayers,null==s?void 0:s.operationalLayers,null==(i=this.basemap)||null==(r=i.resourceInfo)||null==(n=r.data)?void 0:n.baseMapLayers])).find((t=>t.id===e.id))}_collectAllLayersJSON(e){return e.reduce(((e,t)=>(e.push(t),"GroupLayer"===t.layerType&&(e=e.concat(this._collectAllLayersJSON(t.layers||[]))),e)),[])}_writeLayers(e,t,i){return t={...t,layerContainerType:i},e.map((e=>(0,s.Wg)((0,M.Nw)(e,"tables"===i?null:this.getLayerJSONFromResourceInfo(e),t)))).filter(Boolean).toArray()}_loadFromSource(){return this.resourceInfo?this._loadFromJSON(this.resourceInfo,{origin:"web-map"}):this.portalItem&&this.portalItem.id?this._loadFromItem(this.portalItem):(0,y.resolve)(null)}_loadFromItem(e){return e.load().catch((e=>{throw new d.Z("webmap:load-portal-item","Failed to load portal item",{error:e})})).then((()=>{if("Web Map"!==e.type)throw new d.Z("webmap:invalid-portal-item","Invalid portal item type '${type}', expected 'Web Map'",{type:e.type})})).then((()=>e.fetchData())).then((t=>(this.resourceInfo=t,this._readAndLoadFromJSON(t,{origin:"web-map",portal:e.portal||C.Z.getDefault()})))).then((()=>this._computeInitialViewpoint()))}_readAndLoadFromJSON(e,t){const i=this._validateJSON(e);return this.read(i,t),this._loadFromJSON(i,t)}_validateJSON(e){const t=Le.parse(e.version||"","webmap");return Re.validate(t),e.version=`${t.major}.${t.minor}`,e}_loadFromJSON(e,t){const r={context:{...t,layerContainerType:"operational-layers"}};return this.portalItem&&(r.context.portal=this.portalItem.portal||C.Z.getDefault()),i.e(7254).then(i.bind(i,87254)).then((({populateOperationalLayers:t})=>{const i=[],n=e.operationalLayers;n&&n.length&&i.push(t(this.layers,n,r));const s={...r,context:{...r.context,layerContainerType:"tables"},defaultLayerType:"ArcGISFeatureLayer"},o=e.tables;return o&&o.length&&i.push(t(this.tables,o,s)),(0,y.eachAlways)(i).then((()=>{}))}))}async _computeInitialViewpoint(){var e,t;let i=this.initialViewProperties;if(null==(e=i)||null==(t=e.viewpoint)?void 0:t.targetGeometry)return;const r=await this._getExtentFromItem();r&&(i=i?i.clone():new Pe,i.viewpoint=new E.Z,i.viewpoint.targetGeometry=r,this.initialViewProperties=i)}async _getExtentFromItem(){var e,t;const r=null==(e=this.initialViewProperties)?void 0:e.spatialReference,n=null==(t=this.portalItem)?void 0:t.extent;return r&&n?r.isWGS84?n.clone():r.isWebMercator?(0,v.$)(n):(await Promise.resolve().then(i.bind(i,75138))).create(this.portalItem).then((e=>{const t=new j.Z;return t.geometries=[n],t.outSpatialReference=r,e.project(t)})).then((e=>e[0])).catch((e=>(De.error("Error projecting item's extent:",e),null))):null}_removeDanglingLayerRefs(){const e=this.applicationProperties,t=e&&e.viewing&&e.viewing.search,i=e=>!!this.allLayers.find((t=>t.id===e));t&&t.layers&&(t.layers=t.layers.filter((e=>i(e.id)))),t&&t.tables&&(t.tables=t.tables.filter((e=>!!this.tables.find((t=>t.id===e.id)))));const r=e&&e.editing&&e.editing.locationTracking;r&&r.info&&!i(r.info.layerId)&&(e.editing=null);const n=this.presentation&&this.presentation.slides;n&&n.forEach((e=>{e.visibleLayers&&(e.visibleLayers=e.visibleLayers.filter((e=>i(e.id))))}))}_validateMap(){if(!this.basemap||!this.basemap.baseLayers.length)throw new d.Z("webmap:save","Map does not have a valid basemap with a base layer.")}_validateItem(){if(!this.portalItem)throw De.error("save: requires the portalItem property to be set"),new d.Z("webmap:portal-item-not-set","Portal item to save to has not been set on the WebMap");this._validateItemType(this.portalItem)}_validateItemType(e){if("Web Map"!==e.type)throw new d.Z("webmap:portal-item-wrong-type",'Portal item needs to have type "Web Map"')}_loadLayerContainers(){const e=[];return this.basemap&&e.push(this.basemap.load()),this.ground&&e.push(this.ground.load()),(0,y.eachAlways)(e).then((()=>{}))}_loadAllLayers(){const e=this._getAllLayersAndTables().map((e=>e.load()));return(0,y.eachAlways)(e).then((()=>{}))}_getAllLayersAndTables(){return this.allLayers.concat(this.allTables)}_validateJSONForWriting(e,t){let i=e.messages.filter((e=>"error"===e.type)).map((e=>new d.Z(e.name,e.message,e.details)));if(t.ignoreUnsupported&&(i=i.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name))),i.length>0)throw new d.Z("webmap:save","Failed to save webmap due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}async _updateItemProperties(e){e.extent=await this._getWGS84Extent(this.initialViewProperties.viewpoint.targetGeometry),await this._updateTypeKeywords(e)}async _updateItemPropertiesForSaveAs(e){(0,R.ck)(e,"CollectorDisabled"),(0,R.ck)(e,"OfflineDisabled"),(0,R.ck)(e,"Workforce Project"),(0,R.ck)(e,"Workforce Worker"),(0,R.ck)(e,"Workforce Dispatcher"),(0,R.ck)(e,"Offline Map Areas"),(0,R.ck)(e,"FieldMapsDisabled"),await this._updateItemProperties(e)}async _getWGS84Extent(e){const t=e.clone().normalize();let i;if(t.length>1)for(const e of t)i?e.width>i.width&&(i=e):i=e;else i=t[0];return this._projectToWGS84(i)}async _projectToWGS84(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,v.Sx)(e);const r=await Promise.resolve().then(i.bind(i,75138)),n=await r.create(this.portalItem),s=new j.Z;return s.geometries=[e],s.outSpatialReference=g.Z.WGS84,(await n.project(s))[0]}async _updateTypeKeywords(e){(0,R.qj)(e,"ArcGIS API for JavaScript"),await this._loadAllLayers(),this._evalCollectorKeyword(e),this._evalDataEditingKeyword(e),this._evalOfflineKeyword(e),this._evalDeveloperBasemapKeyword(e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,i)=>i.indexOf(e)===t)))}_evalCollectorKeyword(e){(0,R._$)(e,"CollectorDisabled")||(0,R._$)(e,"Workforce Project")||(0,R._$)(e,"Workforce Worker")||(0,R._$)(e,"Workforce Dispatcher")||!this._hasEditableFeatureLayer()?(0,R.ck)(e,"Collector"):(0,R.qj)(e,"Collector")}_evalDataEditingKeyword(e){this._hasEditableFeatureLayer()?(0,R.qj)(e,"Data Editing"):(0,R.ck)(e,"Data Editing")}_evalOfflineKeyword(e){!(0,R._$)(e,"OfflineDisabled")&&this._isOfflineCapableMap()?(0,R.qj)(e,"Offline"):(0,R.ck)(e,"Offline")}_evalDeveloperBasemapKeyword(e){(0,T.zb)(this.basemap)?(0,R.qj)(e,"DeveloperBasemap"):(0,R.ck)(e,"DeveloperBasemap")}_hasEditableFeatureLayer(){return this._getAllLayersAndTables().some((e=>e.loaded&&this._isFeatureServiceLayer(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled))}_isFeatureServiceLayer(e){return!("feature"!==e.type||!e.source||"feature-layer"!==e.source.type)}_isOfflineCapableMap(){return this._getAllLayersAndTables().filter((e=>"group"!==e.type)).every((e=>e.loaded&&this._isOfflineCapableLayer(e)))}_isOfflineCapableLayer(e){return this._isFeatureServiceLayer(e)&&e.capabilities.operations.supportsSync||("tile"===e.type||"vector-tile"===e.type)&&(e.capabilities.operations.supportsExportTiles||this._isExportableAGOLTileLayer(e)||(0,T.aL)(e))&&e.spatialReference.equals(this.initialViewProperties.spatialReference)}_isExportableAGOLTileLayer(e){return"tile"===e.type&&(0,L.h3)(e.url)&&Ne.some((t=>e.url.toLowerCase().indexOf("/"+t+"/")>-1))}async _updateItem(e,t,i){await e.update({data:t}),this._syncUpInstanceWithItem(e,t,i)}async _createItem(e,t,i,r){const n=this.portalItem,s=!!(n&&n.id&&n.portal.user),o=e.portal;if(await o._signIn(),!await this._canCopyItem(n,s,o))throw new d.Z("webmap:save-as-copy-not-allowed","Owner of this map does not allow others to save a copy");await o.user.addItem({item:e,folder:r.folder,data:t}),this.portalItem=e,this._syncUpInstanceWithItem(e,t,i)}async _canCopyItem(e,t,i){return!((0,s.pC)(e)&&e.id&&e.typeKeywords&&e.typeKeywords.indexOf("useOnly")>-1)||e.portal.portalHostname===i.portalHostname&&(t||await e.reload(),"admin"===e.itemControl||"update"===e.itemControl)}_syncUpInstanceWithItem(e,t,i){O.w.prototype.read.call(this,{version:t.version,authoringApp:t.authoringApp,authoringAppVersion:t.authoringAppVersion},{origin:"web-map",ignoreDefaults:!0,url:e.itemUrl&&(0,p.mN)(e.itemUrl)}),(0,k.D)(i),this.resourceInfo=t}async _updateItemThumbnail(){this.thumbnailUrl&&this._isOverridden("thumbnailUrl")&&(await this.portalItem.updateThumbnail({thumbnail:this.thumbnailUrl,filename:this._thumbnailFilename}),this._clearThumbnailOverride())}_getPortalItem(e){let t=A.default.from(e);return t.id&&(t=t.clone(),t.id=null),t.type||(t.type="Web Map"),t.portal||(t.portal=C.Z.getDefault()),this._validateItemType(t),t}async _updateFromInternal(e,t){t=t||{},await(0,P.whenTrueOnce)(e,"ready"),this._updateInitialViewProperties(e,t),await this._updateThumbnailUrl(e,t)}_updateInitialViewProperties(e,t){var i;if(t.backgroundExcluded||(this.initialViewProperties.background=null==(i=e.background)?void 0:i.clone()),this.initialViewProperties.spatialReference=e.spatialReference.clone(),t.viewpointExcluded||(this.initialViewProperties.viewpoint=new E.Z({rotation:e.rotation,scale:t.scalePreserved?e.scale:null,targetGeometry:this._getViewExtent(e)})),!t.widgetsExcluded)for(const t of e.persistableViewModels)t.updateWebDocument(this)}_getViewExtent(e){const t=e.center.clone().normalize(),i=e.extent.clone(),r=i.width/2;return i.xmin=t.x-r,i.xmax=t.x+r,i}async _updateThumbnailUrl(e,t){if(t.thumbnailExcluded)return;const i=function(e,t){t=t||Q;let{width:i,height:r}=t;const n=i/r;return n<1.5?r=i/1.5:n>1.5&&(i=1.5*r),i>e.width&&(r*=e.width/i,i=e.width),r>e.height&&(i*=e.height/r,r=e.height),{width:Math.round(i),height:Math.round(r)}}(e,t.thumbnailSize),r=await e.takeScreenshot({format:"png",width:i.width,height:i.height});this._setAutoGeneratedThumbnail(r.dataUrl)}_setAutoGeneratedThumbnail(e){this.thumbnailUrl=e,this._thumbnailFilename=null}_clearThumbnailOverride(){this._clearOverride("thumbnailUrl"),this.clear("thumbnailUrl","user"),this._thumbnailFilename=null}_generateCustomThumbnailFilename(e){if((0,p.HK)(e)){const t=(0,p.sJ)(e),i=t&&t.mediaType,r=i&&Fe.get(i.toLowerCase())||null,n=`thumbnail${Date.now()}`;return r?`${n}.${r}`:n}return null}_getThumbnailState(){let e=this.thumbnailUrl;return e&&(e=this._isOverridden("thumbnailUrl")?e:(0,p.ZN)(e,"w","8192")),{thumbnailUrl:e,filename:this._thumbnailFilename}}_restoreThumbnailFromState(e){this.thumbnailUrl=e.thumbnailUrl,this._thumbnailFilename=e.filename}_getAuthoringPropsState(){return{authoringApp:this.authoringApp,authoringAppVersion:this.authoringAppVersion,isAuthoringAppSetByUser:this._isAuthoringAppSetByUser,isAuthoringAppVersionSetByUser:this._isAuthoringAppVersionSetByUser}}_restoreAuthoringPropsFromState(e){e.isAuthoringAppSetByUser?this.authoringApp=e.authoringApp:this._isAuthoringAppSetByUser=!1,e.isAuthoringAppVersionSetByUser?this.authoringAppVersion=e.authoringAppVersion:this._isAuthoringAppVersionSetByUser=!1}static fromJSON(e){const t=e;if(!t)throw new d.Z("webmap:empty-resource","Expected a JSON resource but got nothing");return new this({resourceInfo:t})}};ze.VERSION=Re,(0,n._)([(0,l.Cb)({type:Ae,json:{write:!0}})],ze.prototype,"applicationProperties",void 0),(0,n._)([(0,l.Cb)({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],ze.prototype,"authoringApp",null),(0,n._)([(0,u.c)("authoringApp")],ze.prototype,"writeAuthoringApp",null),(0,n._)([(0,l.Cb)({type:String,json:{write:{allowNull:!0,ignoreOrigin:!0}}})],ze.prototype,"authoringAppVersion",null),(0,n._)([(0,u.c)("authoringAppVersion")],ze.prototype,"writeAuthoringAppVersion",null),(0,n._)([(0,l.Cb)({json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],ze.prototype,"basemap",void 0),(0,n._)([(0,l.Cb)({type:je,json:{write:{overridePolicy:e=>({enabled:!!(e&&e.length>0),ignoreOrigin:!0})}}})],ze.prototype,"bookmarks",void 0),(0,n._)([(0,l.Cb)({type:Pe,nonNullable:!0,json:{read:{source:["background","initialState.viewpoint","mapRangeInfo","spatialReference"]},write:{ignoreOrigin:!0,target:{background:{type:Ie.Z},"initialState.viewpoint":{type:E.Z},mapRangeInfo:{type:z},spatialReference:{type:g.Z}}}}})],ze.prototype,"initialViewProperties",void 0),(0,n._)([(0,c.r)("initialViewProperties")],ze.prototype,"readInitialViewProperties",null),(0,n._)([(0,u.c)("initialViewProperties")],ze.prototype,"writeInitialViewProperties",null),(0,n._)([(0,l.Cb)({json:{write:{target:"operationalLayers",ignoreOrigin:!0}}})],ze.prototype,"layers",void 0),(0,n._)([(0,u.c)("layers")],ze.prototype,"writeLayers",null),(0,n._)([(0,l.Cb)({type:A.default})],ze.prototype,"portalItem",void 0),(0,n._)([(0,l.Cb)({json:{write:!0}})],ze.prototype,"presentation",void 0),(0,n._)([(0,l.Cb)()],ze.prototype,"resourceInfo",void 0),(0,n._)([(0,l.Cb)({readOnly:!0,type:Le,json:{read:{source:"version"},write:{allowNull:!0,ignoreOrigin:!0,target:"version",isRequired:!0}}})],ze.prototype,"sourceVersion",void 0),(0,n._)([(0,c.r)("sourceVersion")],ze.prototype,"readSourceVersion",null),(0,n._)([(0,u.c)("sourceVersion")],ze.prototype,"writeSourceVersion",null),(0,n._)([(0,l.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],ze.prototype,"tables",void 0),(0,n._)([(0,u.c)("tables")],ze.prototype,"writeTables",null),(0,n._)([(0,l.Cb)({dependsOn:["portalItem.thumbnailUrl"]})],ze.prototype,"thumbnailUrl",null),(0,n._)([(0,l.Cb)({type:K,json:{write:!0}})],ze.prototype,"widgets",void 0),ze=(0,n._)([(0,h.j)("esri.WebMap")],ze);const Ve=ze},12973:(e,t,i)=>{"use strict";i.d(t,{V:()=>s});var r=i(34926),n=i(10923);i(54721);function s(e){return(0,n.v_)(r.Z.assetsPath,e)}},93352:(e,t,i)=>{"use strict";i.d(t,{C:()=>p,b:()=>d});var r=i(85461),n=i(62213),s=i(51219),o=i(63230),a=i(61514),l=i(72023),c=i(34658),h=i(11823),u=i(83488);function d(e){const t=new s.kG,i=1===e.output;return t.include(n.w,{linearDepth:i}),t.include(h.c,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.attributes.add("position","vec3"),t.varyings.add("vpos","vec3"),i&&(t.include(u.F,e),t.vertex.uniforms.add("nearFar","vec2"),t.varyings.add("linearDepth","float")),t.vertex.code.add(r.H`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      gl_Position = ${i?r.H`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:r.H`transformPosition(proj, view, vpos);`}
    }
  `),t.include(a.p,e),t.fragment.include(o.Y),t.fragment.uniforms.add("eColor","vec4"),4===e.output&&t.include(l.b),t.fragment.code.add(r.H`
  void main() {
    discardBySlice(vpos);
    vec4 color = ${e.attributeColor?"vColor * eColor;":"eColor;"}

    if (color.a < ${r.H.float(c.bf)}) {
      discard;
    }

    ${7===e.output?r.H`gl_FragColor = vec4(color.a);`:""}

    ${0===e.output?r.H`gl_FragColor = highlightSlice(color, vpos); ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${4===e.output?r.H`outputHighlight();`:""};
    ${1===e.output?r.H`outputDepth(linearDepth);`:""};
  }
  `),t}var p=Object.freeze({__proto__:null,build:d})},60853:(e,t,i)=>{"use strict";i.d(t,{D:()=>k});var r,n=i(56140),s=(i(95830),i(36544),i(68055)),o=i(79881),a=i(60263),l=i(56274),c=i(9870),h=i(30590),u=i(84300),d=i(87566),p=(i(10923),i(57002),i(86035),i(58385)),f=i(70834),y=i(90013),m=i(73032),g=i(6635);i(36348);let v=r=class extends p.wq{constructor(e){super(e),this.type="query-table"}clone(){var e;const{workspaceId:t,query:i,oidFields:n,spatialReference:s,geometryType:o}=this,a={workspaceId:t,query:i,oidFields:n,spatialReference:null!=(e=null==s?void 0:s.clone())?e:void 0,geometryType:o};return new r(a)}};var b;(0,n._)([(0,c.J)({queryTable:"query-table"})],v.prototype,"type",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],v.prototype,"workspaceId",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],v.prototype,"query",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],v.prototype,"oidFields",void 0),(0,n._)([(0,o.Cb)({type:m.Z,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,n._)([(0,c.J)(g.Mk)],v.prototype,"geometryType",void 0),v=r=(0,n._)([(0,d.j)("esri.layers.support.source.QueryTableDataSource")],v);let _=b=class extends p.wq{constructor(e){super(e),this.type="raster"}clone(){const{workspaceId:e,dataSourceName:t}=this;return new b({workspaceId:e,dataSourceName:t})}};var w;(0,n._)([(0,c.J)({raster:"raster"})],_.prototype,"type",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],_.prototype,"dataSourceName",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],_.prototype,"workspaceId",void 0),_=b=(0,n._)([(0,d.j)("esri.layers.support.source.RasterDataSource")],_);let x=w=class extends p.wq{constructor(e){super(e),this.type="table"}clone(){const{workspaceId:e,gdbVersion:t,dataSourceName:i}=this;return new w({workspaceId:e,gdbVersion:t,dataSourceName:i})}};var C;(0,n._)([(0,c.J)({table:"table"})],x.prototype,"type",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],x.prototype,"workspaceId",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],x.prototype,"gdbVersion",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],x.prototype,"dataSourceName",void 0),x=w=(0,n._)([(0,d.j)("esri.layers.support.source.TableDataSource")],x);const S=(0,l.wY)()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let A=C=class extends p.wq{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,t,i){return T()(e,t,i)}castLeftTableSource(e){return(0,s.N7)(E(),e)}readRightTableSource(e,t,i){return T()(e,t,i)}castRightTableSource(e){return(0,s.N7)(E(),e)}clone(){var e,t;const{leftTableKey:i,rightTableKey:r,leftTableSource:n,rightTableSource:s,joinType:o}=this,a={leftTableKey:i,rightTableKey:r,leftTableSource:null!=(e=null==n?void 0:n.clone())?e:void 0,rightTableSource:null!=(t=null==s?void 0:s.clone())?t:void 0,joinType:o};return new C(a)}};(0,n._)([(0,c.J)({joinTable:"join-table"})],A.prototype,"type",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],A.prototype,"leftTableKey",void 0),(0,n._)([(0,o.Cb)({type:String,json:{write:!0}})],A.prototype,"rightTableKey",void 0),(0,n._)([(0,o.Cb)({json:{write:!0}})],A.prototype,"leftTableSource",void 0),(0,n._)([(0,h.r)("leftTableSource")],A.prototype,"readLeftTableSource",null),(0,n._)([(0,a.p)("leftTableSource")],A.prototype,"castLeftTableSource",null),(0,n._)([(0,o.Cb)({json:{write:!0}})],A.prototype,"rightTableSource",void 0),(0,n._)([(0,h.r)("rightTableSource")],A.prototype,"readRightTableSource",null),(0,n._)([(0,a.p)("rightTableSource")],A.prototype,"castRightTableSource",null),(0,n._)([(0,c.J)(S)],A.prototype,"joinType",void 0),A=C=(0,n._)([(0,d.j)("esri.layers.support.source.JoinTableDataSource")],A);let M=null;function T(){return M||(M=(0,u.d)({types:E()})),M}let I=null;function E(){return I||(I={key:"type",base:null,typeMap:{"data-layer":k,"map-layer":y.R}}),I}var O;const P={key:"type",base:null,typeMap:{"join-table":A,"query-table":v,raster:_,table:x}};let k=O=class extends p.wq{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:t}=this;return new O({fields:e,dataSource:t})}};(0,n._)([(0,c.J)({dataLayer:"data-layer"})],k.prototype,"type",void 0),(0,n._)([(0,o.Cb)({type:[f.Z],json:{write:!0}})],k.prototype,"fields",void 0),(0,n._)([(0,o.Cb)({types:P,json:{write:!0}})],k.prototype,"dataSource",void 0),k=O=(0,n._)([(0,d.j)("esri.layers.support.source.DataLayerSource")],k),k.from=(0,s.se)(k)},12528:(e,t,i)=>{"use strict";i.d(t,{H:()=>r,a:()=>x,b:()=>b,c:()=>_});var r,n=i(55735),s=i(38256),o=i(14286),a=i(85461),l=i(51219),c=i(63230),h=i(73192),u=i(61514),d=i(91930),p=i(2489),f=i(79431),y=i(72023),m=i(8681),g=i(34658),v=i(61017);function b(e){const t=new l.kG,i=e.signedDistanceFieldEnabled;if(t.include(h.H),t.include(p.R,e),t.include(u.p,e),6===e.output)return t.include(f.R,e),t;t.include(d.c),t.fragment.include(v.n),t.fragment.include(c.Y),t.include(m.k,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),t.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4"),i&&t.vertex.uniforms.add("outlineColor","vec4"),e.screenSizePerspectiveEnabled&&t.vertex.uniforms.add("screenSizePerspective","vec4"),(e.debugDrawBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add("uv0","vec2"),t.attributes.add("color","vec4"),t.attributes.add("size","vec2"),t.attributes.add("auxpos2","vec4"),t.vertex.code.add(a.H`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.screenSizePerspectiveEnabled?a.H`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:a.H`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const r=a.H`
      vec2 uv01 = floor(uv0);
      vec2 uv = uv0 - uv01;
      quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;
  `,n=e.pixelSnappingEnabled?i?a.H`
  posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:a.H`
  posProj += quadOffset;
  if (inputSize.x == size.x) {
    posProj = alignToPixelOrigin(posProj, viewport.zw);
  }`:a.H`posProj += quadOffset;`;t.vertex.code.add(a.H`
      ${e.occlusionTestEnabled?"if (visible) {":""}
      ${r}
      ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${a.H.float(g.bf)};
      ${i?`alphaDiscard = alphaDiscard && outlineColor.a < ${a.H.float(g.bf)};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${n}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${e.debugDrawBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${e.occlusionTestEnabled?a.H`} else { vtc = vec2(0.0);
        ${e.debugDrawBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `),t.fragment.uniforms.add("tex","sampler2D"),i&&(t.fragment.uniforms.add("outlineColor","vec4"),t.fragment.uniforms.add("outlineSize","float"));const s=e.debugDrawBorder?a.H`(isBorder > 0.0 ? 0.0 : ${a.H.float(g.F)})`:a.H.float(g.F),o=a.H`
    ${e.debugDrawBorder?a.H`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${i?a.H`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = 128.0;
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${s} ||
          fillPixelColor.a + outlinePixelColor.a < ${a.H.float(g.bf)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${s}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:a.H`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${s}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    ${e.debugDrawBorder?a.H`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);`:""}
  `;return 7===e.output&&t.fragment.code.add(a.H`
      void main() {
        ${o}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),0===e.output&&t.fragment.code.add(a.H`
    void main() {
      ${o}
      ${e.FrontFacePass?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),4===e.output&&(t.include(y.b),t.fragment.code.add(a.H`
    void main() {
      ${o}
      ${e.binaryHighlightOcclusionEnabled?a.H`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t}function _(e,t=w){var i,r,n;return e.textureIsSignedDistanceField?(i=e.anchorPos,r=e.distanceFieldBoundingBox,(n=t)[0]=i[0]*(r[2]-r[0])+r[0],n[1]=i[1]*(r[3]-r[1])+r[1]):(0,o.c)(t,e.anchorPos),t}!function(e){e.bindUniforms=function(e,t,i){e.setUniform4fv("materialColor",t.color),t.textureIsSignedDistanceField&&(t.outlineColor[3]<=0||t.outlineSize<=0?(e.setUniform4fv("outlineColor",s.Z),e.setUniform1f("outlineSize",0)):(e.setUniform4fv("outlineColor",t.outlineColor),e.setUniform1f("outlineSize",t.outlineSize))),e.setUniform2f("screenOffset",2*t.screenOffset[0]*i,2*t.screenOffset[1]*i),e.setUniform2fv("anchorPos",_(t))}}(r||(r={}));const w=(0,n.a)();var x=Object.freeze({__proto__:null,build:b,get HUDMaterial(){return r},calculateAnchorPosForRendering:_})},57086:(e,t,i)=>{"use strict";i.d(t,{L:()=>a,b:()=>o});var r=i(85461),n=i(51219),s=i(62692);function o(e){const t=new n.kG;return t.include(s.j,e),t.vertex.uniforms.add("uModelViewMatrix","mat4"),t.vertex.uniforms.add("uProjectionMatrix","mat4"),t.attributes.add("start","vec3"),t.attributes.add("end","vec3"),t.attributes.add("up","vec3"),t.attributes.add("extrude","vec2"),t.varyings.add("uv","vec2"),t.varyings.add("vViewStart","vec3"),t.varyings.add("vViewEnd","vec3"),t.varyings.add("vViewPlane","vec4"),t.vertex.uniforms.add("glowWidth","float"),t.vertex.uniforms.add("pixelToNDC","vec2"),t.vertex.code.add(r.H`
  void main() {
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = uModelViewMatrix * vec4(pos, 1);
    vec4 projPos = uProjectionMatrix * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    vec3 viewUp = (uModelViewMatrix * vec4(extrude.y * up, 0)).xyz;
    vec4 projPosUp = uProjectionMatrix * vec4(viewPos.xyz + viewUp, 1);
    vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
    ndcPos += length(lxy) * projExtrudeDir;

    vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
    vec3 viewPlaneNormal = (uModelViewMatrix * vec4(worldPlaneNormal, 0)).xyz;

    vViewStart = (uModelViewMatrix * vec4(start, 1)).xyz;
    vViewEnd = (uModelViewMatrix * vec4(end, 1)).xyz;
    vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));

    // Add enough padding in the X screen space direction for glow
    float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    uv = ndcPos * 0.5 + 0.5;
    gl_Position = vec4(ndcPos, 0, 1);
  }
  `),t.fragment.uniforms.add("globalAlpha","float"),t.fragment.uniforms.add("perScreenPixelRatio","float"),t.fragment.code.add(r.H`
  float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
    vec3 origin = mix(start, end, 0.5);
    vec3 basis = end - origin;
    vec3 posAtOrigin = pos - origin;

    float x = dot(normalize(basis), posAtOrigin);
    float y = dot(plane.xyz, posAtOrigin);

    float dx = max(abs(x) - length(basis), 0.0);
    float dy = y;

    float dist = length(vec2(dx, dy));

    float width = fwidth(y);
    float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
    float pixelDist = dist / min(width, maxPixelDistance);
    return abs(pixelDist);
  }

  void main() {
    vec3 pos;
    vec3 normal;
    float depthDiscontinuityAlpha;

    if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
      discard;
    }

    float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);

    vec4 color = laserlineProfile(distance);
    float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));

    gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
  }
  `),t}var a=Object.freeze({__proto__:null,build:o})},56396:(e,t,i)=>{"use strict";i.d(t,{L:()=>h,b:()=>c,d:()=>l});var r=i(33655),n=i(85461),s=i(51219),o=i(84444),a=i(62692);const l=(0,r.Vl)(6);function c(e){const t=new s.kG;return t.extensions.add("GL_OES_standard_derivatives"),t.include(o.k),t.include(a.j,e),t.fragment.uniforms.add("angleCutoff","vec2"),t.fragment.uniforms.add("globalAlpha","float"),e.heightManifoldEnabled&&t.fragment.uniforms.add("heightPlane","vec4"),e.pointDistanceEnabled&&t.fragment.uniforms.add("pointDistanceSphere","vec4"),e.lineVerticalPlaneEnabled&&t.fragment.uniforms.add("lineVerticalPlane","vec4").add("lineVerticalStart","vec3").add("lineVerticalEnd","vec3"),(e.heightManifoldEnabled||e.pointDistanceEnabled||e.lineVerticalPlaneEnabled)&&t.fragment.uniforms.add("maxPixelDistance","float"),e.intersectsLineEnabled&&t.fragment.uniforms.add("intersectsLineStart","vec3").add("intersectsLineEnd","vec3").add("intersectsLineDirection","vec3").add("intersectsLineRadius","float").add("perScreenPixelRatio","float"),(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)&&t.fragment.code.add(n.H`
      float planeDistancePixels(vec4 plane, vec3 pos) {
        float dist = dot(plane.xyz, pos) + plane.w;
        float width = fwidth(dist);
        dist /= min(width, maxPixelDistance);
        return abs(dist);
      }`),e.pointDistanceEnabled&&t.fragment.code.add(n.H`
    float sphereDistancePixels(vec4 sphere, vec3 pos) {
      float dist = distance(sphere.xyz, pos) - sphere.w;
      float width = fwidth(dist);
      dist /= min(width, maxPixelDistance);
      return abs(dist);
    }
    `),e.intersectsLineEnabled&&t.fragment.code.add(n.H`
    float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
      float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
      return abs(dist) - radius;
    }
    `),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&t.fragment.code.add(n.H`
    bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
      vec3 dir = end - start;
      float t2 = dot(dir, pos - start);
      float l2 = dot(dir, dir);
      return t2 >= 0.0 && t2 <= l2;
    }
    `),t.fragment.code.add(n.H`
  void main() {
    vec3 pos;
    vec3 normal;
    float depthDiscontinuityAlpha;

    if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
      discard;
    }

    vec4 color = vec4(0, 0, 0, 0);
  `),e.heightManifoldEnabled&&t.fragment.code.add(n.H`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
      vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `),e.pointDistanceEnabled&&t.fragment.code.add(n.H`
    {
      // distance to sphere
      float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
      vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
      float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));

      color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
    }
    `),e.lineVerticalPlaneEnabled&&t.fragment.code.add(n.H`
    {
      if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
        float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);

        vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
        float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));

        color = max(color, lineVerticalColor * lineVerticalAlpha);
      }
    }
    `),e.intersectsLineEnabled&&t.fragment.code.add(n.H`
    {
      if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
        float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
        vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
        float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));

        color = max(color, intersectsLineColor * intersectsLineAlpha);
      }
    }
    `),t.fragment.code.add(n.H`
    gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
  }
  `),t}var h=Object.freeze({__proto__:null,defaultAngleCutoff:l,build:c})},81632:(e,t,i)=>{"use strict";i.d(t,{R:()=>p,b:()=>d});var r=i(85461),n=i(51219),s=i(63230),o=i(61514),a=i(34658),l=i(83488),c=i(82768),h=i(93077),u=i(9295);function d(e){const t=new n.kG;t.extensions.add("GL_OES_standard_derivatives"),t.include(u.e),t.include(c.U,e),t.include(h.q,e),1===e.output&&t.include(l.F,e),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("nearFar","vec2").add("pixelRatio","float").add("miterLimit","float").add("screenSize","vec2"),t.attributes.add("position","vec3"),t.attributes.add("subdivisionFactor","float"),t.attributes.add("uv0","vec2"),t.attributes.add("auxpos1","vec3"),t.attributes.add("auxpos2","vec3"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("linearDepth","float");const i=e.falloffEnabled,d=e.innerColorEnabled;return d&&t.varyings.add("vLineDistance","float"),i&&t.varyings.add("vLineDistanceNorm","float"),e.falloffEnabled&&t.fragment.uniforms.add("falloff","float"),e.innerColorEnabled&&(t.fragment.uniforms.add("innerColor","vec4"),t.fragment.uniforms.add("innerWidth","float")),t.vertex.code.add(r.H`
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
`),t.vertex.code.add(r.H`
    vec4 projectAndScale(vec4 pos) {
      vec4 posNdc = proj * pos;

      // Note that posNdc is in -1:1, scaling by screenSize converts this to a coordinate system
      // that is twice scaled (going from -size:size).
      posNdc.xy *= screenSize / posNdc.w;
      return posNdc;
    }
`),t.vertex.code.add(r.H`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      //current pos behind ncp --> we need to clip
      if(pos.z > -nearFar[0]) {
        if (!isStartVertex) {
          //previous in front of ncp
          if(prev.z < -nearFar[0]) {
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
        //next in front of ncp
        if(isStartVertex) {
          if(next.z < -nearFar[0]) {
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        //previous behind ncp
        if (prev.z > -nearFar[0]) {
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        //next behind ncp
        if (next.z > -nearFar[0]) {
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      linearDepth = (-pos.z - nearFar[0]) / (nearFar[1] - nearFar[0]);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
`),t.vertex.code.add(r.H`
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
  `),e.stippleEnabled&&t.vertex.code.add(r.H`
      // uv0.x is either 0 or 1, depending on whether this is considered the start of a line segment
      // or the end. If start, then use pos->next, otherwise use prev->pos to define the line segment
      // vector
      vec4 stippleSegmentInfo = mix(vec4(pos.xy, right), vec4(prev.xy, left), uv0.x);
      vec2 stippleSegmentOrigin = stippleSegmentInfo.xy;

      // Scale s.t. it's in units of stipple pattern size.
      vec2 stippleSegmentDirection = stippleSegmentInfo.zw;
    `),t.vertex.code.add(r.H`
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
    `),e.roundJoins?t.vertex.code.add(r.H`
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
      `):t.vertex.code.add(r.H`
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
  `),t.vertex.code.add(r.H`
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
  `),e.roundCaps?t.vertex.code.add(r.H`
    float angle = subdivisionFactor*PI*0.5;
    joinDisplacementDir *= cos(angle);
    capDisplacementDir *= sin(angle);
    `):t.vertex.code.add(r.H`
    capDisplacementDir *= subdivisionFactor;
    `),t.vertex.code.add(r.H`
  }

  // Displacement (in pixels) caused by join/or cap
  vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

  ${i||d?r.H`float lineDist = lineWidth * sign(uv0.y) * pos.w;`:""}

  ${d?r.H`vLineDistance = lineDist;`:""}
  ${i?r.H`vLineDistanceNorm = lineDist / lineWidth;`:""}

  pos.xy += dpos;
  `),e.stippleEnabled&&(t.vertex.code.add(r.H`
    {
      // Compute the stipple pattern UV coordinate from the actual position, based on the origin
      // and direction of the line segment on which the stipple pattern is based.

      // Project the vector from the origin of the segment to the vertex onto the line segment.
      // Note the 0.5 factor due to projected positions being at twice the screen size scale (see projectAndScale)
      vec2 posVec = pos.xy - stippleSegmentOrigin;

      float stippleSegmentDirectionLength = length(stippleSegmentDirection);
    `),e.stippleIntegerRepeatsEnabled&&t.vertex.code.add(r.H`
      float numberOfPatternRepeats = stippleSegmentDirectionLength * 0.5 * stipplePatternPixelSizeInv;
      float roundedNumberOfPatternRepeats = floor(numberOfPatternRepeats);
      stipplePatternUvMax = roundedNumberOfPatternRepeats;
      `),t.vertex.code.add(r.H`
      if (stippleSegmentDirectionLength >= 0.001) {
        // Project the vertex position onto the line segment.
        float projectedLength = dot(stippleSegmentDirection, posVec) / stippleSegmentDirectionLength * 0.5;
     ${e.stippleIntegerRepeatsEnabled?"float wholeNumberOfRepeatsScale = roundedNumberOfPatternRepeats / numberOfPatternRepeats;":"float wholeNumberOfRepeatsScale = 1.0;"}
        stipplePatternUv = projectedLength * wholeNumberOfRepeatsScale * stipplePatternPixelSizeInv * pos.w;
        } else {
          stipplePatternUv = 1.0;
        }
      }
    `)),t.vertex.code.add(r.H`
      // Convert back into NDC
      pos.xy = pos.xy / screenSize * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      gl_Position = pos;
    }
  }
  `),t.include(o.p,e),t.fragment.uniforms.add("intrinsicColor","vec4"),t.fragment.include(s.Y),t.fragment.code.add(r.H`
  void main() {
    discardBySlice(vpos);
    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, STIPPLE_ALPHA_COLOR_DISCARD);

    vec4 color = intrinsicColor * vColor;
  `),e.innerColorEnabled&&(t.fragment.uniforms.add("pixelRatio","float"),t.fragment.code.add(r.H`
    float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
    float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
    float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
    color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);
    `)),t.fragment.code.add(r.H`
    vec4 finalColor = blendStipple(color, stippleAlpha);
  `),e.falloffEnabled&&t.fragment.code.add(r.H`
    finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);
    `),t.fragment.code.add(r.H`
    if (finalColor.a < ${r.H.float(a.bf)}) {
      discard;
    }

    ${7===e.output?r.H`gl_FragColor = vec4(finalColor.a);`:""}
    ${0===e.output?r.H`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${0===e.output&&e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${4===e.output?r.H`gl_FragColor = vec4(1.0);`:""}
    ${1===e.output?r.H`outputDepth(linearDepth);`:""}
  }
    vec3 reconstructPosition(vec2 fragCoord, float depth) {
      return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
    }
  `)}function o(e,t){e.extensions.add("GL_OES_standard_derivatives"),e.include(n.S),e.include(s),e.fragment.uniforms.add("glowColor","vec3"),e.fragment.uniforms.add("glowWidth","float"),e.fragment.uniforms.add("glowFalloff","float"),e.fragment.uniforms.add("innerColor","vec3"),e.fragment.uniforms.add("innerWidth","float"),e.fragment.uniforms.add("depthMap","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("frameColor","sampler2D"),t.contrastControlEnabled&&e.fragment.uniforms.add("globalAlphaContrastBoost","float"),e.fragment.code.add(r.H`
  vec4 blendPremultiplied(vec4 source, vec4 dest) {
    float oneMinusSourceAlpha = 1.0 - source.a;

    return vec4(
      source.rgb + dest.rgb * oneMinusSourceAlpha,
      source.a + dest.a * oneMinusSourceAlpha
    );
  }
  `),e.fragment.code.add(r.H`
  vec4 premultipliedColor(vec3 rgb, float alpha) {
    return vec4(rgb * alpha, alpha);
  }
  `),e.fragment.code.add(r.H`
  vec4 laserlineProfile(float dist) {
    if (dist > glowWidth) {
      return vec4(0.0);
    }

    float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
    float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);

    return blendPremultiplied(
      premultipliedColor(innerColor, innerAlpha),
      premultipliedColor(glowColor, glowAlpha)
    );
  }
  `),e.fragment.code.add(r.H`
  bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
    float depth = linearDepthFromTexture(depthMap, uv, nearFar);

    if (-depth == nearFar[0]) {
      return false;
    }

    pos = reconstructPosition(gl_FragCoord.xy, depth);
    normal = normalize(cross(dFdx(pos), dFdy(pos)));

    float ddepth = fwidth(depth);
    depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);

    return true;
  }
  `),t.contrastControlEnabled?e.fragment.code.add(r.H`
    float rgbToLuminance(vec3 color) {
      return dot(vec3(0.2126, 0.7152, 0.0722), color);
    }

    vec4 laserlineOutput(vec4 color) {
      float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
      float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);

      return color * alpha;
    }
    `):e.fragment.code.add(r.H`
    vec4 laserlineOutput(vec4 color) {
      return color * globalAlpha;
    }
    `)}},84444:(e,t,i)=>{"use strict";i.d(t,{k:()=>n});var r=i(85461);function n(e){e.attributes.add("position","vec2"),e.varyings.add("uv","vec2"),e.vertex.code.add(r.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      uv = position * 0.5 + vec2(0.5);
    }
  `)}},61514:(e,t,i)=>{"use strict";i.d(t,{p:()=>a});var r=i(59472),n=i(77625),s=i(17387),o=i(85461);function a(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=o.H`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,r=o.H`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,n=t.sliceHighlightDisabled?o.H`#define highlightSlice(_color_, _pos_) (_color_)`:o.H`
        ${r}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}else{const i=o.H`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i)}}!function(e){e.bindUniformsWithOrigin=function(t,i,r){e.bindUniforms(t,i,r.slicePlane,r.origin)},e.bindUniforms=function(e,t,i,o){t.slicePlaneEnabled&&((0,r.pC)(i)?(o?((0,s.f)(l,i.origin,o),e.setUniform3fv("slicePlaneOrigin",l)):e.setUniform3fv("slicePlaneOrigin",i.origin),e.setUniform3fv("slicePlaneBasis1",i.basis1),e.setUniform3fv("slicePlaneBasis2",i.basis2)):(e.setUniform3fv("slicePlaneBasis1",n.Z),e.setUniform3fv("slicePlaneBasis2",n.Z),e.setUniform3fv("slicePlaneOrigin",n.Z)))}}(a||(a={}));const l=(0,n.c)()},62213:(e,t,i)=>{"use strict";i.d(t,{w:()=>n});var r=i(85461);function n(e,t){t.linearDepth?e.vertex.code.add(r.H`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):e.vertex.code.add(r.H`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}},82768:(e,t,i)=>{"use strict";i.d(t,{U:()=>n});var r=i(85461);function n(e,t){e.vertex.uniforms.add("intrinsicWidth","float"),t.vvSize?(e.attributes.add("sizeFeatureAttribute","float"),e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.code.add(r.H`
    float getSize() {
      return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
    }
    `)):(e.attributes.add("size","float"),e.vertex.code.add(r.H`
    float getSize(){
      return intrinsicWidth * size;
    }
    `)),t.vvOpacity?(e.attributes.add("opacityFeatureAttribute","float"),e.vertex.defines.addInt("VV_OPACITY_N",8),e.vertex.code.add(r.H`
    uniform float vvOpacityValues[VV_OPACITY_N];
    uniform float vvOpacityOpacities[VV_OPACITY_N];

    float interpolateOpacity( float value ){
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < VV_OPACITY_N; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[VV_OPACITY_N - 1];
    }

    vec4 applyOpacity( vec4 color ){
      return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):e.vertex.code.add(r.H`
    vec4 applyOpacity( vec4 color ){
      return color;
    }
    `),t.vvColor?(e.attributes.add("colorFeatureAttribute","float"),e.vertex.defines.addInt("VV_COLOR_N",8),e.vertex.code.add(r.H`
    uniform float vvColorValues[VV_COLOR_N];
    uniform vec4 vvColorColors[VV_COLOR_N];

    vec4 interpolateColor( float value ) {
      if (value <= vvColorValues[0]) {
        return vvColorColors[0];
      }

      for (int i = 1; i < VV_COLOR_N; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return mix(vvColorColors[i-1], vvColorColors[i], f);
        }
      }

      return vvColorColors[VV_COLOR_N - 1];
    }

    vec4 getColor(){
      return applyOpacity(interpolateColor(colorFeatureAttribute));
    }
    `)):(e.attributes.add("color","vec4"),e.vertex.code.add(r.H`
    vec4 getColor(){
      return applyOpacity(color);
    }
    `))}},11823:(e,t,i)=>{"use strict";i.d(t,{c:()=>n});var r=i(85461);function n(e,t){t.attributeColor?(e.attributes.add("color","vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r.H`
      void forwardVertexColor() { vColor = color; }
    `),e.vertex.code.add(r.H`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):e.vertex.code.add(r.H`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}},76789:(e,t,i)=>{"use strict";i.d(t,{L:()=>s});var r=i(85461),n=i(91930);function s(e,t){const i=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(n.c),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(r.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===t.viewingMode?r.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:r.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?r.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:r.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(r.H`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}function o(e,t,i,r=a){return r.screenLength=e.screenLength,r.perDistance=Math.tan(.5*t)/(.5*i),r.minWorldLength=e.minWorldLength,r.maxWorldLength=e.maxWorldLength,r}!function(e){e.bindUniforms=function(e,t,i){if(!t.verticalOffset)return;const r=o(t.verticalOffset,i.camera.fovY,i.camera.fullViewport[3]),n=i.camera.pixelRatio||1;e.setUniform4f("verticalOffset",r.screenLength*n,r.perDistance,r.minWorldLength,r.maxWorldLength)}}(s||(s={}));const a={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},73192:(e,t,i)=>{"use strict";i.d(t,{H:()=>n});var r=i(85461);function n(e){const t=r.H`
    vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
      vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
      vec2 pixelSz = vec2(1.0) / widthHeight;
      vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
      return vec4(result, clipCoord.zw);
    }
  `,i=r.H`

    vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
      vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
      vec2 pixelSz = vec2(1.0) / widthHeight;
      vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
      vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
      return vec4(result, clipCoord.zw);
    }
  `;e.vertex.code.add(t),e.vertex.code.add(i),e.fragment.code.add(t),e.fragment.code.add(i)}},2489:(e,t,i)=>{"use strict";i.d(t,{R:()=>s});var r=i(85461),n=i(91930);function s(e,t){const i=e;i.include(n.c),i.attributes.add("position","vec3"),i.attributes.add("normal","vec3"),i.attributes.add("auxpos1","vec4"),i.vertex.uniforms.add("proj","mat4"),i.vertex.uniforms.add("view","mat4"),i.vertex.uniforms.add("viewNormal","mat4"),i.vertex.uniforms.add("viewport","vec4"),i.vertex.uniforms.add("camPos","vec3"),i.vertex.uniforms.add("polygonOffset","float"),i.vertex.uniforms.add("cameraGroundRelative","float"),i.vertex.uniforms.add("pixelRatio","float"),i.vertex.uniforms.add("perDistancePixelRatio","float"),i.vertex.uniforms.add("uRenderTransparentlyOccludedHUD","float"),t.verticalOffsetEnabled&&i.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&i.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4"),i.vertex.uniforms.add("hudVisibilityTexture","sampler2D"),i.vertex.defines.addFloat("SMALL_OFFSET_ANGLE",.984807753012208),i.vertex.code.add(r.H`
    struct ProjectHUDAux {
      vec3 posModel;
      vec3 posView;
      vec3 vnormal;

      float distanceToCamera;
      float absCosAngle;
    };
  `),i.vertex.code.add(r.H`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = sign(pointGroundDistance);

      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation
      // we take the absolute value because the sign that is dropped is
      // instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);

        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.isDraped||i.vertex.code.add(r.H`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `),i.vertex.code.add(r.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(camPos - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.screenSizePerspectiveEnabled&&(t.verticalOffsetEnabled||1===t.screenCenterOffsetUnitsEnabled)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.verticalOffsetEnabled?t.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.verticalOffsetEnabled?r.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${1!==t.screenCenterOffsetUnitsEnabled?r.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${1===t.screenCenterOffsetUnitsEnabled?t.screenSizePerspectiveEnabled?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${1===t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),i.vertex.code.add(r.H`
    bool testVisibilityHUD(vec4 posProj) {
      // For occlusion testing, use the nearest pixel center to avoid
      // subpixel filtering messing up the color we use to test for
      vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);

      // the red pixel here indicates that the occlusion pixel passed the depth test against solid geometry and was written
      // the green pixel stores transparency of transparent geometry (1.0 -> fully transparent)
      // note that we also check against green == 0.0, i.e. transparent geometry that has opaque parts

      // thus we render visible pixels that are occluded by semi-transparent (but not fully transparent!) geometry here
      if (uRenderTransparentlyOccludedHUD > 0.5) {
        // multiplying by uRenderTransparentlyOccludedHUD allows us to ignore the second condition if
        // uRenderTransparentlyOccludedHUD = 0.75
        return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * uRenderTransparentlyOccludedHUD < 1.0;
      }

      // and visible pixels that are not occluded by semi-transparent geometry here
      return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
    }
  `)}!function(e){e.bindUniforms=function(e,t){e.setUniform1f("uRenderTransparentlyOccludedHUD",0===t.renderTransparentlyOccludedHUD?1:1===t.renderTransparentlyOccludedHUD?0:.75)},e.bindVisibilityTexture=function(e,t,i){t.setUniform1i("hudVisibilityTexture",4),e.bindTexture(i.hudVisibilityTexture,4),e.setActiveTexture(0)}}(s||(s={}))},79431:(e,t,i)=>{"use strict";i.d(t,{A:()=>r,R:()=>s});var r,n=i(85461);function s(e){const t=e;t.vertex.code.add(n.H`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }
    }
    else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.fragment.uniforms.add("color","vec4"),t.fragment.code.add(n.H`
  void main() {
    gl_FragColor = color;
  }
  `)}!function(e){e.bindUniforms=function(e){e.setUniform4f("color",1,1,1,1)}}(r||(r={}))},83488:(e,t,i)=>{"use strict";i.d(t,{F:()=>s});var r=i(85461),n=i(61017);function s(e,t){e.fragment.include(n.n),3===t.output?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===t.output&&e.fragment.code.add(r.H`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}},72023:(e,t,i)=>{"use strict";i.d(t,{b:()=>n});var r=i(85461);function n(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.code.add(r.H`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
      else {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    }
  `)}!function(e){e.bindOutputHighlight=function(e,t,i){e.bindTexture(i.highlightDepthTexture,5),t.setUniform1i("depthTex",5),t.setUniform4f("highlightViewportPixelSz",0,0,i.inverseViewport[0],i.inverseViewport[1])}}(n||(n={}))},4071:(e,t,i)=>{"use strict";i.d(t,{S:()=>s});var r=i(85461),n=i(61017);function s(e){e.fragment.include(n.n),e.fragment.code.add(r.H`
    float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
      return -(rgba2float(texture2D(depthTex, uv)) * (nearFar[1] - nearFar[0]) + nearFar[0]);
    }
  `)}},93077:(e,t,i)=>{"use strict";i.d(t,{q:()=>n});var r=i(85461);function n(e,t){e.defines.addFloat("STIPPLE_ALPHA_COLOR_DISCARD",.001),e.defines.addFloat("STIPPLE_ALPHA_HIGHLIGHT_DISCARD",.5),t.stippleEnabled?function(e,t){e.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),t.stippleUVMaxEnabled&&e.varyings.add("stipplePatternUvMax","float"),e.varyings.add("stipplePatternUv","float"),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),t.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4"),e.fragment.code.add(r.H`
  float getStippleAlpha() {
    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;
    ${t.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":""}

    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;
  }`),t.stippleOffColorEnabled?e.fragment.code.add(r.H`
    #define discardByStippleAlpha(stippleAlpha, threshold) {}
    #define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)
    `):e.fragment.code.add(r.H`
    #define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
    #define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)
    `)}(e,t):function(e){e.fragment.code.add(r.H`
  float getStippleAlpha() { return 1.0; }

  #define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
  #define blendStipple(color, _stippleAlpha_) color
  `)}(e)}},9295:(e,t,i)=>{"use strict";i.d(t,{e:()=>n});var r=i(85461);function n(e){e.vertex.code.add(r.H`
    const float PI = 3.141592653589793;
  `),e.fragment.code.add(r.H`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}},8681:(e,t,i)=>{"use strict";i.d(t,{k:()=>n});var r=i(85461);function n(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add("instanceFeatureAttribute","vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(r.H`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),e.vertex.code.add(r.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?r.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(r.H`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),t.vvColor?(e.vertex.defines.addInt("VV_COLOR_N",8),e.vertex.code.add(r.H`
      uniform float vvColorValues[VV_COLOR_N];
      uniform vec4 vvColorColors[VV_COLOR_N];

      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < VV_COLOR_N; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[VV_COLOR_N - 1];
      }

      ${t.vvInstancingEnabled?r.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(r.H`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function t(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}e.bindUniforms=t,e.bindUniformsWithOpacity=function(e,i){t(e,i),i.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",i.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",i.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,i){t(e,i),i.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",i.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",i.vvSymbolRotationMatrix))}}(n||(n={}))},34658:(e,t,i)=>{"use strict";i.d(t,{sj:()=>o,F:()=>n,bf:()=>s});var r=i(85461);const n=.1,s=.001;function o(e,t){const i=e.fragment;switch(t.alphaDiscardMode){case 0:i.code.add(r.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${r.H.float(.001)}) { discard; } }
      `);break;case 1:i.code.add(r.H`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:i.uniforms.add("textureAlphaCutoff","float"),i.code.add(r.H`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(r.H`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}},63230:(e,t,i)=>{"use strict";i.d(t,{Y:()=>n});var r=i(85461);function n(e){e.code.add(r.H`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}},61017:(e,t,i)=>{"use strict";i.d(t,{n:()=>n});var r=i(85461);function n(e){e.code.add(r.H`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}},91930:(e,t,i)=>{"use strict";i.d(t,{c:()=>s});var r=i(85461),n=i(30090);function s(e){e.vertex.code.add(r.H`
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
  `),e.vertex.code.add(r.H`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),e.vertex.code.add(r.H`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),e.vertex.code.add(r.H`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),e.vertex.code.add(r.H`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),e.vertex.code.add(r.H`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),e.vertex.code.add(r.H`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius-s);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"]:not([empty]) {
        margin: 0.1875em 0.375em 0.1875em 0.875em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(qt.content);let Ht=0;const Wt=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=Ht++;return function(r){let n=r.__mixinSet;if(n&&n[i])return r;let s=t,o=s.get(r);if(!o){o=e(r),s.set(r,o);let t=Object.create(o.__mixinSet||n||null);t[i]=!0,o.__mixinSet=t}return o}},$t=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function Jt(e){return e.indexOf(".")>=0}function Xt(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function Yt(e,t){return 0===e.indexOf(t+".")}function Kt(e,t){return 0===t.indexOf(e+".")}function Qt(e,t,i){return t+i.slice(e.length)}function ei(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let r=e[i].toString().split(".");for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(".")}return e}function ti(e){return Array.isArray(e)?ei(e).split("."):e.toString().split(".")}function ii(e,t,i){let r=e,n=ti(t);for(let e=0;e<n.length;e++){if(!r)return;r=r[n[e]]}return i&&(i.path=n.join(".")),r}function ri(e,t,i){let r=e,n=ti(t),s=n[n.length-1];if(n.length>1){for(let e=0;e<n.length-1;e++)if(r=r[n[e]],!r)return;r[s]=i}else r[t]=i;return n.join(".")}const ni={},si=/-[a-z]/g,oi=/([A-Z])/g;function ai(e){return ni[e]||(ni[e]=e.indexOf("-")<0?e:e.replace(si,(e=>e[1].toUpperCase())))}function li(e){return ni[e]||(ni[e]=e.replace(oi,"-$1").toLowerCase())}let ci=0,hi=0,ui=[],di=0,pi=!1,fi=document.createTextNode("");new window.MutationObserver((function(){pi=!1;const e=ui.length;for(let t=0;t<e;t++){let i=ui[t];if(i)try{i()}catch(e){setTimeout((()=>{throw e}))}}ui.splice(0,e),hi+=e})).observe(fi,{characterData:!0});const yi={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},mi={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},gi={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},vi={run:e=>(pi||(pi=!0,fi.textContent=di++),ui.push(e),ci++),cancel(e){const t=e-hi;if(t>=0){if(!ui[t])throw new Error("invalid async handle: "+e);ui[t]=null}}},bi=vi,_i=Wt((e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let r=this.__data[e],n=this._shouldPropertyChange(e,t,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),n}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,bi.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,r){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,r)}_attributeToProperty(e,t,i){if(!this.__serializing){const r=this.__dataAttributes,n=r&&r[e]||e;this[n]=this._deserializeValue(t,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const r=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=$t(e)),void 0===r?e.removeAttribute(i):e.setAttribute(i,r)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),wi={};let xi=HTMLElement.prototype;for(;xi;){let e=Object.getOwnPropertyNames(xi);for(let t=0;t<e.length;t++)wi[e[t]]=!0;xi=Object.getPrototypeOf(xi)}const Ci=Wt((e=>{const t=_i(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(ai(e[t]))}static attributeNameForProperty(e){return li(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!wi[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),Si={"dom-if":!0,"dom-repeat":!0};let Ai=!1,Mi=!1;function Ti(e){let t=e.getAttribute("is");if(t&&Si[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function Ii(e,t){let i=t.parentInfo&&Ii(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}function Ei(e,t,i,r){r.id&&(t[r.id]=i)}function Oi(e,t,i){if(i.events&&i.events.length)for(let r,n=0,s=i.events;n<s.length&&(r=s[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function Pi(e,t,i,r){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=r)}const ki=Wt((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let r=!1,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,t,i)||r,function(e){(function(){if(!Ai){Ai=!0;const e=document.createElement("textarea");e.placeholder="a",Mi=e.placeholder===e.textContent}return Mi})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}(n),n.firstChild&&this._parseTemplateChildNodes(n,t,i),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,t,i)||r),r||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let r,n=e.firstChild,s=0;n;n=r){if("template"==n.localName&&(n=Ti(n)),r=n.nextSibling,n.nodeType===Node.TEXT_NODE){let i=r;for(;i&&i.nodeType===Node.TEXT_NODE;)n.textContent+=i.textContent,r=i.nextSibling,e.removeChild(i),i=r;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}let o={parentIndex:s,parentInfo:i};this._parseTemplateNode(n,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),n.parentNode&&s++}}static _parseTemplateNestedTemplate(e,t,i){let r=e,n=this._parseTemplate(r,t);return(n.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,i){let r=!1,n=Array.from(e.attributes);for(let s,o=n.length-1;s=n[o];o--)r=this._parseTemplateNodeAttribute(e,t,i,s.name,s.value)||r;return r}static _parseTemplateNodeAttribute(e,t,i,r,n){return"on-"===r.slice(0,3)?(e.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(i.id=n,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,r=t.content||e.content,n=document.importNode(r,!0);n.__noInsertionPoint=!t.hasInsertionPoint;let s=n.nodeList=new Array(i.length);n.$={};for(let e,r=0,o=i.length;r<o&&(e=i[r]);r++){let i=s[r]=Ii(n,e);Ei(0,n.$,i,e),Pi(0,i,e,t),Oi(this,i,e)}return n=n,n}_addMethodEventListenerToNode(e,t,i,r){let n=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||e,0,i);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}));let Li=0;const Ri=[],ji={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Di=/[A-Z]/;function Fi(e,t,i){let r=e[t];if(r){if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),i))for(let e in r){let t=r[e],i=r[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else r=e[t]={};return r}function Ni(e,t,i,r,n,s){if(t){let o=!1;const a=Li++;for(let l in i){let c=t[n?Xt(l):l];if(c)for(let t,h=0,u=c.length;h<u&&(t=c[h]);h++)t.info&&t.info.lastRun===a||n&&!Vi(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,i,r,t.info,n,s),o=!0)}return o}return!1}function zi(e,t,i,r,n,s,o,a){let l=!1,c=t[o?Xt(r):r];if(c)for(let t,h=0,u=c.length;h<u&&(t=c[h]);h++)t.info&&t.info.lastRun===i||o&&!Vi(r,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,r,n,s,t.info,o,a),l=!0);return l}function Vi(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!Yt(i,e))||!(!t.wildcard||!Kt(i,e))}return!0}function Bi(e,t,i,r,n){let s="string"==typeof n.method?e[n.method]:n.method,o=n.property;s?s.call(e,e.__data[o],r[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function Ui(e,t,i){let r=Xt(t);return r!==t&&(Gi(e,li(r)+"-changed",i[t],t),!0)}function Gi(e,t,i,r){let n={value:i,queueProperty:!0};r&&(n.path=r),$t(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function Zi(e,t,i,r,n,s){let o=(s?Xt(t):t)!=t?t:null,a=o?ii(e,o):e.__data[t];o&&void 0===a&&(a=i[t]),Gi(e,n.eventName,a,o)}function qi(e,t,i,r,n){let s=e.__data[t];ct&&(s=ct(s,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,s)}const Hi=(e,t,i)=>{let r=0,n=t.length-1,s=-1;for(;r<=n;){const o=r+n>>1,a=i.get(t[o].methodInfo)-i.get(e.methodInfo);if(a<0)r=o+1;else{if(!(a>0)){s=o;break}n=o-1}}s<0&&(s=n+1),t.splice(s,0,e)},Wi=(e,t,i,r,n)=>{const s=t[n?Xt(e):e];if(s)for(let t=0;t<s.length;t++){const o=s[t];o.info.lastRun===Li||n&&!Vi(e,o.trigger)||(o.info.lastRun=Li,Hi(o.info,i,r))}};function $i(e,t,i,r,n){let s=tr(e,t,i,r,n);if(s===Ri)return!1;let o=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function Ji(e,t,i,r,n,s,o){i.bindings=i.bindings||[];let a={kind:r,target:n,parts:s,literal:o,isCompound:1!==s.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||li(n)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let r=a.parts[i];r.compoundIndex=i,Xi(e,t,a,r,l)}}function Xi(e,t,i,r,n){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let s=r.dependencies,o={index:n,binding:i,part:r,evaluator:e};for(let i=0;i<s.length;i++){let r=s[i];"string"==typeof r&&(r=or(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Yi,info:o,trigger:r})}}}function Yi(e,t,i,r,n,s,o){let a=o[n.index],l=n.binding,c=n.part;if(s&&c.source&&t.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let r=i[t];t=Qt(c.source,l.target,t),a._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(a)}else{let o=n.evaluator._evaluateBinding(e,c,t,i,r,s);o!==Ri&&function(e,t,i,r,n){if(n=function(e,t,i,r){if(i.isCompound){let n=e.__dataCompoundStorage[i.target];n[r.compoundIndex]=t,t=n.join("")}return"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t)),t}(t,n,i,r),ct&&(n=ct(n,i.target,i.kind,t)),"attribute"==i.kind)e._valueToNodeAttribute(t,n,i.target);else{let r=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?t[ji.READ_ONLY]&&t[ji.READ_ONLY][r]||t._setPendingProperty(r,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,n)}}(e,a,l,c,o)}}function Ki(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,n=new Array(r.length);for(let e=0;e<r.length;e++)n[e]=r[e].literal;let s=t.target;i[s]=n,t.literal&&"property"==t.kind&&("className"===s&&(e=$t(e)),e[s]=t.literal)}}function Qi(e,t,i){if(i.listenerEvent){let r=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,r,n){let s,o=e.detail,a=o&&o.path;a?(r=Qt(i,r,a),s=o&&o.value):s=e.currentTarget[i],s=n?!s:s,t[ji.READ_ONLY]&&t[ji.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,s,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,i.target,r.source,r.negate)}))}}function er(e,t,i,r,n,s){s=t.static||s&&("object"!=typeof s||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:s};for(let n,s=0;s<t.args.length&&(n=t.args[s]);s++)n.literal||e._addPropertyEffect(n.rootProperty,i,{fn:r,info:o,trigger:n});return s&&e._addPropertyEffect(t.methodName,i,{fn:r,info:o}),o}function tr(e,t,i,r,n){let s=e._methodHost||e,o=s[n.methodName];if(o){let r=e._marshalArgs(n.args,t,i);return r===Ri?Ri:o.apply(s,r)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const ir=[],rr=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function nr(e){let t="";for(let i=0;i<e.length;i++)t+=e[i].literal||"";return t}function sr(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:ir};return t[2].trim()?function(e,t){return t.args=e.map((function(e){let i=or(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e):e}return null}function or(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=Xt(t),i.structured=Jt(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function ar(e,t,i){let r=ii(e,i);return void 0===r&&(r=t[i]),r}function lr(e,t,i,r){const n={indexSplices:r};mt&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(i+".splices",n),e.notifyPath(i+".length",t.length),mt&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function cr(e,t,i,r,n,s){lr(e,t,i,[{index:r,addedCount:n,removed:s,object:t,type:"splice"}])}const hr=Wt((e=>{const t=ki(Ci(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return ji}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ur.length){let e=ur[ur.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[ji.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==ji.READ_ONLY);let r=Fi(this,t,!0)[e];r||(r=this[t][e]=[]),r.push(i)}_removePropertyEffect(e,t,i){let r=Fi(this,t,!0)[e],n=r.indexOf(i);n>=0&&r.splice(n,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,ji.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,ji.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,ji.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,ji.COMPUTE)}_setPendingPropertyOrPath(e,t,i,r){if(r||Xt(Array.isArray(e)?e[0]:e)!==e){if(!r){let i=ii(this,e);if(!(e=ri(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let r=e.__dataLinkedPaths;if(r){let n;for(let s in r){let o=r[s];Kt(s,t)?(n=Qt(s,o,t),e._setPendingPropertyOrPath(n,i,!0,!0)):Kt(o,t)&&(n=Qt(o,s,t),e._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=$t(e)),e[t]=i)}_setPendingProperty(e,t,i){let r=this.__dataHasPaths&&Jt(e),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[ji.NOTIFY]&&this[ji.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[ji.READ_ONLY]&&this[ji.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let r,n=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,i,r){let n=e[ji.COMPUTE];if(n)if(gt){Li++;const s=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[ji.COMPUTE];let r,{counts:n,ready:s,total:o}=function(e){const t=e.__computeInfo,i={},r=e[ji.COMPUTE],n=[];let s=0;for(let e in t){const r=t[e];s+=i[e]=r.args.filter((e=>!e.literal)).length+(r.dynamicFn?1:0)}for(let e in r)t[e]||n.push(e);return{counts:i,ready:n,total:s}}(e);for(;r=s.shift();){t.set(r,t.size);const e=i[r];e&&e.forEach((e=>{const t=e.info.methodInfo;--o,0==--n[t]&&s.push(t)}))}if(0!==o){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),o=[];for(let e in t)Wi(e,n,o,s,r);let a;for(;a=o.shift();)$i(e,"",t,i,a)&&Wi(a.methodInfo,n,o,s,r);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;Ni(e,n,s,i,r);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}(this,t,i,n),r=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,n),this._flushClients(),Ni(this,this[ji.REFLECT],t,i,n),Ni(this,this[ji.OBSERVE],t,i,n),r&&function(e,t,i,r,n){let s,o,a=e[ji.NOTIFY],l=Li++;for(let o in t)t[o]&&(a&&zi(e,a,l,o,i,r,n)||n&&Ui(e,o,i))&&(s=!0);s&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,r,t,i,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[ji.PROPAGATE]&&Ni(this,this[ji.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,r){const n=(t,r)=>{Ni(this,e.propertyEffects,t,i,r,e.nodeList);for(let n=e.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,t,i,r)};e.runEffects?e.runEffects(n,t,r):n(t,r)}linkPaths(e,t){e=ei(e),t=ei(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=ei(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};lr(this,ii(this,e,i),i.path,t)}get(e,t){return ii(t||this,e)}set(e,t,i){i?ri(i,e,t):this[ji.READ_ONLY]&&this[ji.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},r=ii(this,e,i),n=r.length,s=r.push(...t);return t.length&&cr(this,r,i.path,n,t.length,[]),s}pop(e){let t={path:""},i=ii(this,e,t),r=Boolean(i.length),n=i.pop();return r&&cr(this,i,t.path,i.length,0,[n]),n}splice(e,t,i,...r){let n,s={path:""},o=ii(this,e,s);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?o.splice(t):o.splice(t,i,...r),(r.length||n.length)&&cr(this,o,s.path,t,r.length,n),n}shift(e){let t={path:""},i=ii(this,e,t),r=Boolean(i.length),n=i.shift();return r&&cr(this,i,t.path,0,0,[n]),n}unshift(e,...t){let i={path:""},r=ii(this,e,i),n=r.unshift(...t);return t.length&&cr(this,r,i.path,0,t.length,[]),n}notifyPath(e,t){let i;if(1==arguments.length){let r={path:""};t=ii(this,e,r),i=r.path}else i=Array.isArray(e)?ei(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,ji.READ_ONLY),t&&(this["_set"+function(e){return e[0].toUpperCase()+e.substring(1)}(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let r={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,ji.OBSERVE,{fn:Bi,info:r,trigger:{name:e}}),i&&this._addPropertyEffect(t,ji.OBSERVE,{fn:Bi,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let i=sr(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");er(this,i,ji.OBSERVE,tr,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,ji.NOTIFY,{fn:Zi,info:{eventName:li(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,ji.REFLECT,{fn:qi,info:{attrName:t}})}_createComputedProperty(e,t,i){let r=sr(t);if(!r)throw new Error("Malformed computed expression '"+t+"'");const n=er(this,r,ji.COMPUTE,$i,e,i);Fi(this,"__computeInfo")[e]=n}_marshalArgs(e,t,i){const r=this.__data,n=[];for(let s=0,o=e.length;s<o;s++){let{name:o,structured:a,wildcard:l,value:c,literal:h}=e[s];if(!h)if(l){const e=Kt(o,t),n=ar(r,i,e?t:o);c={path:e?t:o,value:n,base:e?ii(r,o):n}}else c=a?ar(r,i,o):r[o];if(mt&&!this._overrideLegacyUndefined&&void 0===c&&e.length>1)return Ri;n[s]=c}return n}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==i;if(!r)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=r,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=r,r?r.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let r=e.propertyEffects=e.propertyEffects||{};(r[t]=r[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),ur.push(this);let i=super._stampTemplate(e,t);if(ur.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let n=r[t],s=i[t],o=n.bindings;if(o)for(let t=0;t<o.length;t++){let i=o[t];Ki(s,i),Qi(s,e,i)}s.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:r,parent:n}=t;i?i.nextSibling=r:n&&(n.firstChild=r),r?r.previousSibling=i:n&&(n.lastChild=i),t.nextSibling=t.previousSibling=null;let s=t.childNodes;for(let e=0;e<s.length;e++){let t=s[e];$t($t(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,r){let n=t._parseTemplateNode.call(this,e,i,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=nr(t)||" ",Ji(this,i,r,"text","textContent",t),n=!0)}return n}static _parseTemplateNodeAttribute(e,i,r,n,s){let o=this._parseBindings(s,i);if(o){let t=n,s="property";Di.test(n)?s="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),s="attribute");let a=nr(o);return a&&"attribute"==s&&("class"==n&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(n)),e.setAttribute(n,a)),"attribute"==s&&"disable-upgrade$"==t&&e.setAttribute(n,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===s&&(n=ai(n)),Ji(this,i,r,s,n,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,r,n,s)}static _parseTemplateNestedTemplate(e,i,r){let n=t._parseTemplateNestedTemplate.call(this,e,i,r);const s=e.parentNode,o=r.templateInfo,a="dom-if"===s.localName,l="dom-repeat"===s.localName;vt&&(a||l)&&(s.removeChild(e),(r=r.parentInfo).templateInfo=o,r.noted=!0,n=!1);let c=o.hostProps;if(bt&&a)c&&(i.hostProps=Object.assign(i.hostProps||{},c),vt||(r.parentInfo.noted=!0));else{let e="{";for(let t in c)Ji(this,i,r,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}return n}static _parseBindings(e,t){let i,r=[],n=0;for(;null!==(i=rr.exec(e));){i.index>n&&r.push({literal:e.slice(n,i.index)});let s=i[1][0],o=Boolean(i[2]),a=i[3].trim(),l=!1,c="",h=-1;"{"==s&&(h=a.indexOf("::"))>0&&(c=a.substring(h+2),a=a.substring(0,h),l=!0);let u=sr(a),d=[];if(u){let{args:e,methodName:i}=u;for(let t=0;t<e.length;t++){let i=e[t];i.literal||d.push(i)}let r=t.dynamicFns;(r&&r[i]||u.static)&&(d.push(i),u.dynamicFn=!0)}else d.push(a);r.push({source:a,mode:s,negate:o,customEvent:l,signature:u,dependencies:d,event:c}),n=rr.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&r.push({literal:t})}return r.length?r:null}static _evaluateBinding(e,t,i,r,n,s){let o;return o=t.signature?tr(e,i,r,0,t.signature):i!=t.source?ii(e,t.source):s&&Jt(i)?ii(e,i):e.__data[i],t.negate&&(o=!o),o}}})),ur=[],dr=Wt((e=>{const t=_i(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=function(e){const t={};for(let i in e){const r=e[i];t[i]="function"==typeof r?{type:r}:r}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n})),pr=window.ShadyCSS&&window.ShadyCSS.cssBuild,fr=Wt((e=>{const t=dr(hr(e));function i(e,t,i,r){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,r)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,r[i.observer]),e._addPropertyToAttributeMap(t)}return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):pt||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let r=0;r<e.length;r++)i._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!ut||dt)&&(t=Tt.import(e,"template"),ut&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=st(e.url);else{const e=Tt.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=lt,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let r=t[i];"value"in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=r)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return nt(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;(function(e,t,i,r){if(!pr){const n=t.content.querySelectorAll("style"),s=kt(t),o=function(e){let t=It(e);return t?Lt(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<o.length;i++){let n=o[i];n.textContent=e._processStyleText(n.textContent,r),t.content.insertBefore(n,a)}let l=0;for(let t=0;t<s.length;t++){let i=s[t],o=n[l];o!==i?(i=i.cloneNode(!0),o.parentNode.insertBefore(i,o)):l++,i.textContent=e._processStyleText(i.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),xt&&pr&&at){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}})(this,t,e,i?rt(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=$t(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),yt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=rt(this.importPath)),rt(e,t)}static _parseTemplateContent(e,i,r){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,r)}static _addTemplatePropertyEffect(e,i,r){return!ft||i in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,r)}}})),yr=fr(HTMLElement);class mr{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,gr.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),gr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof mr?e._cancelAsync():e=new mr,e.setConfig(t,i),e}}let gr=new Set;const vr=function(e){gr.add(e)},br=function(){const e=Boolean(gr.size);return gr.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e};let _r="string"==typeof document.head.style.touchAction,wr="__polymerGestures",xr="__polymerGesturesHandled",Cr="__polymerGesturesTouchAction",Sr=["mousedown","mousemove","mouseup","click"],Ar=[0,1,4,2],Mr=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Tr(e){return Sr.indexOf(e)>-1}let Ir=!1;function Er(e){if(!Tr(e)&&"touchend"!==e)return _r&&Ir&&ht?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){Ir=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Or=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Pr=[],kr={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Lr={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Rr(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let r=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<r.length;e++)t.push(r[e])}}return t}let jr=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[xr]={skip:!0},"click"===e.type)){let t=!1,r=Br(e);for(let e=0;e<r.length;e++){if(r[e].nodeType===Node.ELEMENT_NODE)if("label"===r[e].localName)Pr.push(r[e]);else if(i=r[e],kr[i.localName]){let i=Rr(r[e]);for(let e=0;e<i.length;e++)t=t||Pr.indexOf(i[e])>-1}if(r[e]===Nr.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Dr(e){let t=Or?["click"]:Sr;for(let i,r=0;r<t.length;r++)i=t[r],e?(Pr.length=0,document.addEventListener(i,jr,!0)):document.removeEventListener(i,jr,!0)}function Fr(e){let t=e.type;if(!Tr(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Mr&&(t=Ar[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let Nr={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function zr(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Vr(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){Nr.mouse.mouseIgnoreJob||Dr(!0),Nr.mouse.target=Br(e)[0],Nr.mouse.mouseIgnoreJob=mr.debounce(Nr.mouse.mouseIgnoreJob,yi.after(2500),(function(){Dr(),Nr.mouse.target=null,Nr.mouse.mouseIgnoreJob=null}))}),!!Ir&&{passive:!0});const Br=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Ur={},Gr=[];function Zr(e){const t=Br(e);return t.length>0?t[0]:e.target}function qr(e){let t,i=e.type,r=e.currentTarget.__polymerGestures;if(!r)return;let n=r[i];if(n){if(!e[xr]&&(e[xr]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(Nr.touch.id=t.identifier),Nr.touch.id!==t.identifier)return;_r||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)Nr.touch.x=t.clientX,Nr.touch.y=t.clientY,Nr.touch.scrollDecided=!1;else if("touchmove"===i){if(Nr.touch.scrollDecided)return;Nr.touch.scrollDecided=!0;let i=function(e){let t="auto",i=Br(e);for(let e,r=0;r<i.length;r++)if(e=i[r],e[Cr]){t=e[Cr];break}return t}(e),r=!1,n=Math.abs(Nr.touch.x-t.clientX),s=Math.abs(Nr.touch.y-t.clientY);e.cancelable&&("none"===i?r=!0:"pan-x"===i?r=s>n:"pan-y"===i&&(r=n>s)),r?e.preventDefault():Xr("track")}}(e)}if(t=e[xr],!t.skip){for(let i,r=0;r<Gr.length;r++)i=Gr[r],n[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let r,s=0;s<Gr.length;s++)r=Gr[s],n[r.name]&&!t[r.name]&&(t[r.name]=!0,r[i](e))}}}function Hr(e,t,i){return!!Ur[t]&&(function(e,t,i){let r=Ur[t],n=r.deps,s=r.name,o=e[wr];o||(e[wr]=o={});for(let t,i,r=0;r<n.length;r++)t=n[r],Or&&Tr(t)&&"click"!==t||(i=o[t],i||(o[t]=i={_count:0}),0===i._count&&e.addEventListener(t,qr,Er(t)),i[s]=(i[s]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),r.touchAction&&$r(e,r.touchAction)}(e,t,i),!0)}function Wr(e){Gr.push(e);for(let t=0;t<e.emits.length;t++)Ur[e.emits[t]]=e}function $r(e,t){_r&&e instanceof HTMLElement&&vi.run((()=>{e.style.touchAction=t})),e[Cr]=t}function Jr(e,t,i){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,$t(e).dispatchEvent(r),r.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Xr(e){let t=function(e){for(let t,i=0;i<Gr.length;i++){t=Gr[i];for(let i,r=0;r<t.emits.length;r++)if(i=t.emits[r],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function Yr(e,t,i,r){t&&Jr(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(e){return Xr(e)}})}function Kr(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let r=Math.abs(e.x-t),n=Math.abs(e.y-i);return r>=5||n>=5}function Qr(e,t,i){if(!t)return;let r,n=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],o=s.x-e.x,a=s.y-e.y,l=0;n&&(r=s.x-n.x,l=s.y-n.y),Jr(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:o,dy:a,ddx:r,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),r=i;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let n=r;if(r=r.shadowRoot.elementFromPoint(e,t),n===r)break;r&&(i=r)}return i}(i.clientX,i.clientY)}})}function en(e,t,i){let r=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),s=Zr(i||t);!s||Lr[s.localName]&&s.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Zr(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),r=e.pageX,n=e.pageY;return!(r>=i.left&&r<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||Jr(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}Wr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Vr(this.info)},mousedown:function(e){if(!Fr(e))return;let t=Zr(e),i=this;zr(this.info,(function(e){Fr(e)||(Yr("up",t,e),Vr(i.info))}),(function(e){Fr(e)&&Yr("up",t,e),Vr(i.info)})),Yr("down",t,e)},touchstart:function(e){Yr("down",Zr(e),e.changedTouches[0],e)},touchend:function(e){Yr("up",Zr(e),e.changedTouches[0],e)}}),Wr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Vr(this.info)},mousedown:function(e){if(!Fr(e))return;let t=Zr(e),i=this,r=function(e){let r=e.clientX,n=e.clientY;Kr(i.info,r,n)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&Xr("tap"),i.info.addMove({x:r,y:n}),Fr(e)||(i.info.state="end",Vr(i.info)),t&&Qr(i.info,t,e),i.info.started=!0)};zr(this.info,r,(function(e){i.info.started&&r(e),Vr(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Zr(e),i=e.changedTouches[0],r=i.clientX,n=i.clientY;Kr(this.info,r,n)&&("start"===this.info.state&&Xr("tap"),this.info.addMove({x:r,y:n}),Qr(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Zr(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Qr(this.info,t,i))}}),Wr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Fr(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Fr(e)&&en(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){en(this.info,e.changedTouches[0],e)}});const tn=Wt((e=>class extends e{_addEventListenerToNode(e,t,i){Hr(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){(function(e,t,i){return!!Ur[t]&&(function(e,t,i){let r=Ur[t],n=r.deps,s=r.name,o=e[wr];if(o)for(let t,i,r=0;r<n.length;r++)t=n[r],i=o[t],i&&i[s]&&(i[s]=(i[s]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,qr,Er(t)));e.removeEventListener(t,i)}(e,t,i),!0)})(e,t,i)||super._removeEventListenerFromNode(e,t,i)}})),rn=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._setTheme(i)}},nn=e=>class extends(rn(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,i=Object.getPrototypeOf(this.prototype)._template;i&&!t&&Array.from(i.content.querySelectorAll("style[include]")).forEach((t=>{this._includeStyle(t.getAttribute("include"),e)})),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=Tt.prototype.modules;let i=!1;const r=this.is+"-default-theme";Object.keys(t).sort(((e,t)=>{const i=0===e.indexOf("vaadin-"),r=0===t.indexOf("vaadin-"),n=["lumo-","material-"],s=n.filter((t=>0===e.indexOf(t))).length>0,o=n.filter((e=>0===t.indexOf(e))).length>0;return i!==r?i?-1:1:s!==o?s?-1:1:0})).forEach((n=>{if(n!==r){const r=t[n].getAttribute("theme-for");r&&r.split(" ").forEach((t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(i=!0,this._includeStyle(n,e))}))}})),!i&&t[r]&&this._includeStyle(r,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const i=document.createElement("style");i.setAttribute("include",e),t.content.appendChild(i)}}},sn=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",(e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)})),this.addEventListener("focusout",(e=>this._setFocused(!1))),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",(e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout((()=>this._isShiftTabbing=!1),0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity="0",e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",(()=>this.parentNode.removeChild(e)))}}})),this.autofocus&&!this.disabled&&window.requestAnimationFrame((()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}},on=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=br()}while(e||t)};class an{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=1,0===e.scrollLeft&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,i){const{scrollLeft:r}=i;if("rtl"!==t||!e)return r;switch(e){case"negative":return i.scrollWidth-i.clientWidth+r;case"reverse":return i.scrollWidth-i.clientWidth-r}return r}static setNormalizedScrollLeft(e,t,i,r){if("rtl"===t&&e)switch(e){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+r;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-r;break;default:i.scrollLeft=r}else i.scrollLeft=r}}const ln=[];let cn;new MutationObserver((function(){const e=un();ln.forEach((t=>{hn(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const hn=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},un=function(){return document.documentElement.getAttribute("dir")},dn=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),cn||(cn=an.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),hn(this,un()))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"!==e)return;const r=i===un()&&-1===ln.indexOf(this),n=!i&&t&&-1===ln.indexOf(this),s=i!==un()&&t===un();r||n?(this.__subscribe(),hn(this,un())):s&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===ln.indexOf(this)&&ln.push(this):ln.indexOf(this)>-1&&ln.splice(ln.indexOf(this),1)}__getNormalizedScrollLeft(e){return an.getNormalizedScrollLeft(cn,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return an.setNormalizedScrollLeft(cn,this.getAttribute("dir")||"ltr",e,t)}},pn=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,fn=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function yn(e,t){if("function"!=typeof e)return;const i=pn.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};function mn(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(fn?!(fn&&Object.keys(fn).map((e=>fn[e])).filter((e=>e.productionMode)).length>0):!yn((function(){return!0})))}catch(e){return!1}}());const gn=function(){return function(e,t){if(window.Vaadin.developmentMode)return yn(e,t)}(mn)};let vn;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){gn&&gn()};const bn=new Set,_n=e=>class extends(dn(e)){static finalize(){super.finalize();const{is:e}=this;e&&!bn.has(e)&&(window.Vaadin.registrations.push(this),bn.add(e),window.Vaadin.developmentModeCallback&&(vn=mr.debounce(vn,gi,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),vr(vn)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};class wn extends(_n(sn(nn(tn(yr))))){static get template(){return Zt`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.3.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e))}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",(e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")})),this._addEventListenerToNode(this,"up",(()=>this.removeAttribute("active"))),this.addEventListener("keydown",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))})),this.addEventListener("keyup",(e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))}))}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(wn.is,wn);const xn=Zt`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      :host([dir="rtl"][theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      :host([dir="rtl"]) [last-frozen] {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid transparent;
      }

      :host([dir="rtl"][overflow~="right"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-left-color: var(--_lumo-grid-border-color);
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
    <style>
      :host {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        overflow: auto;
      }

      :host([passthrough]) {
        pointer-events: none;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-grid-outer-scroller"}static get properties(){return{scrollTarget:{type:Object},scrollHandler:{type:Object},passthrough:{type:Boolean,reflectToAttribute:!0,value:!0},outerScrolling:Boolean,noScrollbars:Boolean,_touchDevice:Boolean}}ready(){super.ready(),this.addEventListener("scroll",(()=>this._syncScrollTarget())),this.parentElement.addEventListener("mousemove",this._onMouseMove.bind(this)),this.style.webkitOverflowScrolling="touch",this.addEventListener("mousedown",(e=>this.outerScrolling=!0)),this.addEventListener("mouseup",(e=>{this.outerScrolling=!1,this.scrollHandler._scrollHandler()}))}_onMouseMove(e){this._touchDevice||(this.noScrollbars&&this.parentElement.hasAttribute("scroll-period")?this.passthrough=e.offsetY<=this.clientHeight-20&&e.offsetX<=this.clientWidth-20:this.passthrough=e.offsetY<=this.clientHeight&&e.offsetX<=this.clientWidth)}syncOuterScroller(){this.scrollTop=this.scrollTarget.scrollTop,this.scrollLeft=this.scrollTarget.scrollLeft}_syncScrollTarget(){requestAnimationFrame((()=>{this.scrollTarget.scrollTop=this.scrollTop,this.scrollTarget.scrollLeft=this.scrollLeft,this.scrollHandler._scrollHandler()}))}}customElements.define(ta.is,ta);const ia=document.createElement("dom-module");ia.appendChild(Zt`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: block;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: -2;
      position: relative;
      outline: none;
    }

    #header {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    #items {
      display: block;
      width: 100%;
      position: relative;
      z-index: -1;
    }

    #items,
    #outersizer,
    #fixedsizer {
      border-top: 0 solid transparent;
      border-bottom: 0 solid transparent;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    #outerscroller {
      /* Needed (at least) for Android Chrome */
      z-index: 0;
    }

    #scroller:not([safari]) #outerscroller {
      /* Needed for Android Chrome (#1020). Can't be applied to Safari
      since it would re-introduce the sub-pixel overflow bug (#853) */
      will-change: transform;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller,
    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller {
      pointer-events: none;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    :host([reordering]) #outerscroller {
      -webkit-overflow-scrolling: auto !important;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    .sizer {
      display: flex;
      position: relative;
      width: 100%;
      visibility: hidden;
    }

    .sizer [part~="details-cell"] {
      display: none !important;
    }

    .sizer [part~="cell"][hidden] {
      display: none !important;
    }

    .sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      margin-top: -1em;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
    }

    .sizer [part~="cell"]::before {
      content: "-";
    }

    .sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* Fixed mode (Tablet Edge) */
    #fixedsizer {
      position: absolute;
    }

    :not([edge][no-scrollbars]) #fixedsizer {
      display: none;
    }

    [edge][no-scrollbars] {
      /* Any value other than ‘none’ for the transform results in the creation of both a stacking context and
      a containing block. The object acts as a containing block for fixed positioned descendants. */
      transform: translateZ(0);
      overflow: hidden;
    }

    [edge][no-scrollbars] #header,
    [edge][no-scrollbars] #footer {
      position: fixed;
    }

    [edge][no-scrollbars] #items {
      position: fixed;
      width: 100%;
      will-change: transform;
    }

    /* RTL specific styles */

    :host([dir="rtl"]) [part~="reorder-ghost"] {
      left: auto;
      right: 0;
    }

    :host([dir="rtl"]) [part~="resize-handle"] {
      left: 0;
      right: auto;
    }

    :host([dir="rtl"]) [part~="resize-handle"]::before {
      transform: translateX(50%);
    }

    :host([dir="rtl"]) [last-column] [part~="resize-handle"]::before,
    :host([dir="rtl"]) [last-frozen] [part~="resize-handle"]::before {
      left: 0;
      right: auto;
    }
  </style>
`);const ra=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),na=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;if(ra||na){const e=document.createElement("style");e.textContent="\n    [scrolling][safari] #outerscroller,\n    [scrolling][firefox] #outerscroller {\n      pointer-events: auto;\n    }\n\n    [ios] #outerscroller {\n      pointer-events: auto;\n      z-index: -3;\n    }\n\n    [ios][scrolling] #outerscroller {\n      z-index: 0;\n    }\n\n    [ios] [frozen] {\n      will-change: auto;\n    }\n  ",ia.querySelector("template").content.appendChild(e)}ia.register("vaadin-grid-styles");const sa=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class oa extends(_n(nn(jo(ko(Do(Po(Bo(Uo(Go(Vo(Yo(Oo(No(Ko(Lo(Fo(Xo(Zo(Eo))))))))))))))))))){static get template(){return Zt`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" no-scrollbars\$="[[!_scrollbarWidth]]" wheel-scrolling\$="[[_wheelScrolling]]" safari\$="[[_safari]]" ios\$="[[_ios]]" loading\$="[[loading]]" edge\$="[[_edge]]" firefox\$="[[_firefox]]" ie\$="[[_ie]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="fixedsizer" class="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
      <vaadin-grid-outer-scroller id="outerscroller" _touch-device="[[_touchDevice]]" scroll-target="[[scrollTarget]]" scroll-handler="[[_this]]" no-scrollbars="[[!_scrollbarWidth]]">
        <div id="outersizer" class="sizer" part="row"></div>
      </vaadin-grid-outer-scroller>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`}static get is(){return"vaadin-grid"}static get version(){return"5.6.6"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_this:{type:Object,value:function(){return this}},_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_edge:{type:Boolean,value:"undefined"!=typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:sa},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.recalculateColumnWidths()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"dir"===e&&(this.__isRTL="rtl"===i,this._updateScrollerMeasurements())}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter((e=>e.clientHeight)).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(e){e.forEach((e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0})),e.forEach((e=>{e._currentWidth=0,e._allCells.forEach((t=>{const i=t.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,i)}))})),e.forEach((e=>{e.width=`${e._currentWidth}px`,e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0}))}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const e=this._getColumns().filter((e=>!e.hidden&&e.autoWidth));this._recalculateColumnWidths(e)}}_createScrollerRows(e){const t=[];for(var i=0;i<e;i++){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e)}var r;return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((e=>e.notifyPath&&e.notifyPath("_cells.*",e._cells))),this,r=()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation()},fs||gs(),ys.push([this,r,undefined]),t}_getRowTarget(){return this.$.items}_createCell(e){const t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",t);const r=document.createElement(e);r.id=t.replace("-content-","-"),r.setAttribute("tabindex","-1"),r.setAttribute("role","td"===e?"gridcell":"columnheader");const n=document.createElement("slot");return n.setAttribute("name",t),r.appendChild(n),r._content=i,i.addEventListener("mousedown",(()=>{if(window.chrome){const e=()=>{i.contains(this.getRootNode().activeElement)||r.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout((()=>{i.contains(this.getRootNode().activeElement)||r.focus()}))})),r}_updateRow(e,t,i,r,n){i=i||"body";const s=document.createDocumentFragment();Array.from(e.children).forEach((e=>e._vacant=!0)),e.innerHTML="","outersizer"!==e.id&&"fixedsizer"!==e.id&&(e.hidden=!0),t.filter((e=>!e.hidden)).forEach(((t,o,a)=>{let l;if("body"===i){if(t._cells=t._cells||[],l=t._cells.filter((e=>e._vacant))[0],l||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),o===a.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];const t=this._detailsCells.filter((e=>e._vacant))[0]||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||s.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),this._a11ySetRowDetailsCell(e,t),t._vacant=!1}t.notifyPath&&!n&&t.notifyPath("_cells.*",t._cells)}else{const n="header"===i?"th":"td";r||"vaadin-grid-column-group"===t.localName?(l=t[`_${i}Cell`]||this._createCell(n),l._column=t,e.appendChild(l),t[`_${i}Cell`]=l):(t._emptyCells=t._emptyCells||[],l=t._emptyCells.filter((e=>e._vacant))[0]||this._createCell(n),l._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||s.appendChild(l._content),l._vacant=!1,l._column=t})),this.appendChild(s),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter((t=>{const i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(i.headerRenderer||i._headerTemplate)return!0;if(null===i.header)return!1;if(i.path||void 0!==i.header)return!0}else if(i.footerRenderer||i._footerTemplate)return!0}));e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize())}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e,t){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach((t=>this._updateRow(t,e[e.length-1],null,!1,!0)));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach(((t,i)=>this._updateRow(t,e[i],"header",i===e.length-1))),Array.from(this.$.footer.children).forEach(((t,i)=>this._updateRow(t,e[e.length-1-i],"footer",0===i))),this._updateRow(this.$.outersizer,e[e.length-1],null,!1,!0),this._updateRow(this.$.fixedsizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_updateItem(e,t){e._item=t;const i=this.__getRowModel(e);this._toggleAttribute("selected",i.selected,e),this._a11yUpdateRowSelected(e,i.selected),this._a11yUpdateRowLevel(e,i.level),this._toggleAttribute("expanded",i.expanded,e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,i),this._filterDragAndDrop(e,i),Array.from(e.children).forEach((e=>{if(e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,i)}else e._instance&&(e._instance.__detailsOpened__=i.detailsOpened,e._instance.__selected__=i.selected,e._instance.__level__=i.level,e._instance.__expanded__=i.expanded,e._instance.setProperties(i))})),this._debouncerUpdateHeights=mr.debounce(this._debouncerUpdateHeights,yi.after(1),(()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize()}))}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateScrollerMeasurements(),this._updateHeaderFooterMetrics()}_updateHeaderFooterMetrics(){const e=this.$.header.clientHeight+"px",t=this.$.footer.clientHeight+"px";[this.$.outersizer,this.$.fixedsizer,this.$.items].forEach((i=>{i.style.borderTopWidth=e,i.style.borderBottomWidth=t})),bs(this.$.header,(()=>{this._pendingScrollToIndex&&this._scrollToIndex(this._pendingScrollToIndex)}))}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),this._updateHeaderFooterMetrics(),e.stopPropagation(),this.notifyResize(),this.__itemsReceived())}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach((e=>{e.forEach((e=>e._renderHeaderAndFooter()))})),this._update())}notifyResize(){super.notifyResize()}_heightByRowsChanged(e,t){(e||t)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=mr.debounce(this._debouncerForceReflow,mi,(()=>{this.$.scroller.style.overflow="hidden",setTimeout((()=>this.$.scroller.style.overflow=""))}))}}customElements.define(oa.is,oa);class aa extends ea{static get template(){return Zt`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox class="vaadin-grid-select-all-checkbox" aria-label="Select All" hidden\$="[[_selectAllHidden]]" on-checked-changed="_onSelectAllCheckedChanged" checked="[[_isChecked(selectAll, _indeterminate)]]" indeterminate="[[_indeterminate]]"></vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="{{selected}}"></vaadin-checkbox>
    </template>
`}static get is(){return"vaadin-grid-selection-column"}static get properties(){return{width:{type:String,value:"58px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},autoSelect:{type:Boolean,value:!1},_indeterminate:Boolean,_previousActiveItem:Object,_selectAllHidden:Boolean}}static get observers(){return["_onSelectAllChanged(selectAll)"]}_pathOrHeaderChanged(e,t,i,r,n,s,o,a,l){!n.value||void 0===e&&void 0===s||(this._bodyTemplate=a=void 0,this.__cleanCellsOfTemplateProperties(n.value)),!i||void 0===t&&void 0===o||(this._headerTemplate=l=void 0,this.__cleanCellsOfTemplateProperties([i])),super._pathOrHeaderChanged(e,t,i,r,n,s,o,a,l)}__cleanCellsOfTemplateProperties(e){e.forEach((e=>{e._content.innerHTML="",delete e._instance,delete e._template}))}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this._findTemplate(!0)||this.$.defaultHeaderTemplate);return e.templatizer.dataHost=e===this.$.defaultHeaderTemplate?this:this.dataHost,e}_prepareBodyTemplate(){const e=this._prepareTemplatizer(this._findTemplate()||this.$.defaultBodyTemplate);return e.templatizer.dataHost=e===this.$.defaultBodyTemplate?this:this.dataHost,e}constructor(){super(),this._boundOnActiveItemChanged=this._onActiveItemChanged.bind(this),this._boundOnDataProviderChanged=this._onDataProviderChanged.bind(this),this._boundOnSelectedItemsChanged=this._onSelectedItemsChanged.bind(this)}disconnectedCallback(){if(this._grid.removeEventListener("active-item-changed",this._boundOnActiveItemChanged),this._grid.removeEventListener("data-provider-changed",this._boundOnDataProviderChanged),this._grid.removeEventListener("filter-changed",this._boundOnSelectedItemsChanged),this._grid.removeEventListener("selected-items-changed",this._boundOnSelectedItemsChanged),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.ShadyDOM&&this.parentElement){const e=this.parentElement,t=this.nextElementSibling;e.removeChild(this),t?e.insertBefore(this,t):e.appendChild(this)}super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("active-item-changed",this._boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this._boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",this._boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this._boundOnSelectedItemsChanged))}_onSelectAllChanged(e){void 0!==e&&this._grid&&(this._selectAllChangeLock||(this._grid.selectedItems=e&&Array.isArray(this._grid.items)?this._grid._filter(this._grid.items):[]))}_arrayContains(e,t){for(var i=0;e&&t&&t[i]&&e.indexOf(t[i])>=0;i++);return i==t.length}_onSelectAllCheckedChanged(e){this.selectAll=this._indeterminate||e.target.checked}_isChecked(e,t){return t||e}_onActiveItemChanged(e){const t=e.detail.value;if(this.autoSelect){const e=t||this._previousActiveItem;e&&this._grid._toggleItem(e)}this._previousActiveItem=t}_onSelectedItemsChanged(e){this._selectAllChangeLock=!0,Array.isArray(this._grid.items)&&(this._grid.selectedItems.length?this._arrayContains(this._grid.selectedItems,this._grid._filter(this._grid.items))?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):(this.selectAll=!1,this._indeterminate=!1)),this._selectAllChangeLock=!1}_onDataProviderChanged(e){this._selectAllHidden=!Array.isArray(this._grid.items)}}customElements.define(aa.is,aa);const la=Zt`<dom-module id="lumo-grid-sorter" theme-for="vaadin-grid-sorter">
  <template>
    <style>
      :host {
        justify-content: flex-start;
        align-items: baseline;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="content"] {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="indicators"] {
        margin-left: var(--lumo-space-s);
      }

      :host(:not([direction])) [part="indicators"]::before {
        opacity: 0.2;
      }

      :host([direction]) {
        color: var(--lumo-primary-text-color);
      }

      [part="order"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="indicators"] {
        margin-right: var(--lumo-space-s);
        margin-left: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(la.content);const ca=document.createElement("template");ca.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(ca.content);class ha extends(nn(dn(yr))){static get template(){return Zt`
    <style>
      :host {
        display: inline-flex;
        cursor: pointer;
        max-width: 100%;
      }

      [part="content"] {
        flex: 1 1 auto;
      }

      [part="indicators"] {
        position: relative;
        align-self: center;
        flex: none;
      }

      [part="order"] {
        display: inline;
        vertical-align: super;
      }

      [part="indicators"]::before {
        font-family: 'vaadin-grid-sorter-icons';
        display: inline-block;
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: "\\e901";
      }

      :host([direction=asc]) [part="indicators"]::before {
        content: "\\e900";
      }

      :host([direction=desc]) [part="indicators"]::before {
        content: "\\e902";
      }
    </style>

    <div part="content">
      <slot></slot>
    </div>
    <div part="indicators">
      <span part="order">[[_getDisplayOrder(_order)]]</span>
    </div>
`}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,value:!1}}}static get observers(){return["_pathOrDirectionChanged(path, direction, _isConnected)","_directionOrOrderChanged(direction, _order)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_pathOrDirectionChanged(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&i&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}_directionOrOrderChanged(e,t){void 0!==e&&void 0!==t&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&this.root.querySelectorAll("*").forEach((function(e){e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""}))}}customElements.define(ha.is,ha);class ua extends ea{static get template(){return Zt`
    <template class="header" id="headerTemplate">
      <vaadin-grid-sorter path="[[path]]" direction="{{direction}}">[[_getHeader(header, path)]]</vaadin-grid-sorter>
    </template>
//# sourceMappingURL=index.js.map