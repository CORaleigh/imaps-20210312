(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[5836],{35836:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Oe});var a=r(56140),i=(r(95830),r(82550)),s=r(36544),n=(r(68055),r(79881)),o=r(56274),l=r(87566),u=r(32656),c=r(10923),p=(r(57002),r(86035),r(39105)),y=r(53817),d=r(96071),h=r(23838),m=r(54721),f=r(5328),g=r(31518),b=r(95986),S=r(94588),v=r(73032),_=r(52937),w=r(91535),P=r(70834),L=r(76194),O=r(21544),J=r(58385);let x=class extends J.wq{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};(0,a._)([(0,n.Cb)({type:_.Z})],x.prototype,"extent",void 0),(0,a._)([(0,n.Cb)()],x.prototype,"height",void 0),(0,a._)([(0,n.Cb)()],x.prototype,"href",void 0),(0,a._)([(0,n.Cb)()],x.prototype,"opacity",void 0),(0,a._)([(0,n.Cb)()],x.prototype,"rotation",void 0),(0,a._)([(0,n.Cb)()],x.prototype,"scale",void 0),(0,a._)([(0,n.Cb)()],x.prototype,"visible",void 0),(0,a._)([(0,n.Cb)()],x.prototype,"width",void 0),x=(0,a._)([(0,l.j)("esri.layer.support.MapImage")],x);const M=x;let N=class extends J.wq{constructor(e){super(e),this.itemId=null,this.url=null}};(0,a._)([(0,n.Cb)({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],N.prototype,"itemId",void 0),(0,a._)([(0,n.Cb)({type:String,json:{write:!0}})],N.prototype,"url",void 0),N=(0,a._)([(0,l.j)("esri.tasks.support.DataFile")],N);const G=N,D=new o.Xn({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let I=class extends J.wq{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null}};(0,a._)([(0,n.Cb)()],I.prototype,"jobId",void 0),(0,a._)([(0,n.Cb)({json:{read:D.read}})],I.prototype,"jobStatus",void 0),(0,a._)([(0,n.Cb)({type:[O.Z]})],I.prototype,"messages",void 0),I=(0,a._)([(0,l.j)("esri.tasks.support.JobInfo")],I);const T=I,V=new o.Xn({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let C=class extends J.wq{constructor(e){super(e),this.distance=0,this.units=null}};(0,a._)([(0,n.Cb)({json:{write:!0}})],C.prototype,"distance",void 0),(0,a._)([(0,n.Cb)({json:{read:V.read,write:V.write}})],C.prototype,"units",void 0),C=(0,a._)([(0,l.j)("esri/tasks/support/LinearUnit")],C);const F=C,k=new o.Xn({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let R=class extends J.wq{constructor(e){super(e),this.dataType=null,this.value=null}};(0,a._)([(0,n.Cb)({json:{read:k.read,write:k.write}})],R.prototype,"dataType",void 0),(0,a._)([(0,n.Cb)()],R.prototype,"value",void 0),R=(0,a._)([(0,l.j)("esri.tasks.support.ParameterValue")],R);const j=R;let E=class extends J.wq{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};(0,a._)([(0,n.Cb)()],E.prototype,"format",void 0),(0,a._)([(0,n.Cb)({json:{read:{source:"itemID"},write:{target:"itemID"}}})],E.prototype,"itemId",void 0),(0,a._)([(0,n.Cb)()],E.prototype,"url",void 0),E=(0,a._)([(0,l.j)("esri/tasks/support/RasterData")],E);const A=E;let U=class extends b.Z{constructor(e){super(e),this._timers=new Map,this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}destroy(){this._timers.forEach((e=>{clearInterval(e)}))}cancelJob(e,t){const{path:r}=this.parsedUrl,a={...this.requestOptions,...t,query:{f:"json"}};return this._clearTimer(e),(0,m.default)(`${r}/jobs/${e}/cancel`,a).then((e=>T.fromJSON(e.data)))}checkJobStatus(e,t){const{path:r}=this.parsedUrl,a={...this.requestOptions,...t,query:{f:"json"}};return(0,m.default)(`${r}/jobs/${e}`,a).then((e=>T.fromJSON(e.data)))}execute(e,t){return this._constructRequest("execute",e,t).then((e=>{const t=e.data.results||[],r=e.data.messages||[];return{results:t.map(this._decode),messages:r.map((e=>O.Z.fromJSON(e)))}}))}getResultData(e,t,r){const{returnFeatureCollection:a,returnM:i,returnZ:s,outSpatialReference:n,parsedUrl:o}=this,{path:l}=o,u={returnFeatureCollection:a||void 0,returnM:i||void 0,returnZ:s||void 0,outSR:n,returnType:"data",f:"json"},c=this._gpEncode(u,null),p={...this.requestOptions,...r,query:c};return(0,m.default)(`${l}/jobs/${e}/results/${t}`,p).then((e=>this._decode(e.data)))}getResultImage(e,t,r,a){const{path:i}=this.parsedUrl,s={...r.toJSON(),f:"json"},n=this._gpEncode(s),o={...this.requestOptions,...a,query:n};return(0,m.default)(`${i}/jobs/${e}/results/${t}`,o).then((e=>this._decode(e.data)))}async getResultMapImageLayer(e){const{path:t}=this.parsedUrl,a=t.indexOf("/GPServer/"),i=`${t.substring(0,a)}/MapServer/jobs/${e}`;return new(0,(await r.e(2933).then(r.bind(r,62933))).default)({url:i})}submitJob(e,t){return this._constructRequest("submitJob",e,t).then((e=>T.fromJSON(e.data)))}waitForJobCompletion(e,t={}){const{interval:r=1e3,signal:a,statusCallback:i}=t;return(0,p.Ue)(((t,s)=>{(0,p.fu)(a,(()=>{this._clearTimer(e),s((0,p.zE)())})),this._clearTimer(e);const n=setInterval((()=>{this._timers.has(e)||s((0,p.zE)()),this._getJobStatus(e,this.requestOptions).then((r=>{const{jobStatus:a}=r;switch(a){case"job-succeeded":this._clearTimer(e),t(r);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":i&&i(r);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(e),s(r);break;default:(0,S.Bg)(a)}}))}),r);this._timers.set(e,n)}))}_clearTimer(e){this._timers.has(e)&&(clearInterval(this._timers.get(e)),this._timers.delete(e))}_constructRequest(e,t,r){const a={},i={},s=[];return this._collectGeometries(t,s,a),(0,w.aX)(s).then((s=>{const{outSpatialReference:n,parsedUrl:o,processExtent:l,processSpatialReference:u,returnFeatureCollection:c,returnM:p,returnZ:y}=this,{path:d}=o;for(const e in a){const t=a[e];i[e]=s.slice(t[0],t[1])}const h=n?n.wkid||n:null,f=u?u.wkid||u:null,g="execute"===e?{returnFeatureCollection:c||void 0,returnM:p||void 0,returnZ:y||void 0}:null,b={...l?{context:{extent:l,outSR:h,processSR:f}}:{"env:outSR":h,"env:processSR":f},...t,...g,f:"json"},S=this._gpEncode(b,null,i),v={...this.requestOptions,...r,query:S};return(0,m.default)(`${d}/${e}`,v)}))}_collectGeometries(e,t,r){for(const a in e){const i=e[a];if(i&&"object"==typeof i&&i instanceof L.default){const{features:e}=i;r[a]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}}}_decode(e){const t=e.dataType,r=j.fromJSON(e);switch(t){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return r;case"GPDate":r.value=new Date(r.value);break;case"GPDataFile":r.value=G.fromJSON(r.value);break;case"GPLinearUnit":r.value=F.fromJSON(r.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const t=e.value.url;r.value=t?G.fromJSON(r.value):L.default.fromJSON(r.value);break}case"GPRasterData":case"GPRasterDataLayer":{const t=e.value.mapImage;r.value=t?M.fromJSON(t):A.fromJSON(r.value);break}case"GPField":r.value=P.Z.fromJSON(r.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return r;case"GPMultiValue:GPDate":{const e=r.value;r.value=e.map((e=>new Date(e)));break}case"GPMultiValue:GPDataFile":r.value=r.value.map((e=>G.fromJSON(e)));break;case"GPMultiValue:GPLinearUnit":r.value=r.value.map((e=>F.fromJSON(e)));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":r.value=r.value.map((e=>L.default.fromJSON(e)));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":r.value=r.value.map((e=>e?M.fromJSON(e):A.fromJSON(r.value)));break;case"GPMultiValue:GPField":r.value=r.value.map((e=>P.Z.fromJSON(e)))}return r}_gpEncode(e,t,r){for(const t in e){const r=e[t];Array.isArray(r)?e[t]=JSON.stringify(r.map((e=>this._gpEncode({item:e},!0).item),this)):r instanceof Date&&(e[t]=r.getTime())}return this._encode(e,t,r)}_getJobStatus(e,t){const{path:r}=this.parsedUrl,a=`${r}/jobs/${e}`,i={...this.requestOptions,...t,query:{f:"json"}};return(0,m.default)(a,i).then((e=>T.fromJSON(e.data)))}};(0,a._)([(0,n.Cb)({type:v.Z})],U.prototype,"outSpatialReference",void 0),(0,a._)([(0,n.Cb)({type:_.Z})],U.prototype,"processExtent",void 0),(0,a._)([(0,n.Cb)({type:v.Z})],U.prototype,"processSpatialReference",void 0),(0,a._)([(0,n.Cb)({nonNullable:!0})],U.prototype,"returnFeatureCollection",void 0),(0,a._)([(0,n.Cb)({nonNullable:!0})],U.prototype,"returnM",void 0),(0,a._)([(0,n.Cb)({nonNullable:!0})],U.prototype,"returnZ",void 0),U=(0,a._)([(0,l.j)("esri/tasks/Geoprocessor")],U);const q=U,z=new o.Xn({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),$=(z.fromJSON.bind(z),z.toJSON.bind(z)),W=new o.Xn({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),Z=(W.fromJSON.bind(W),W.toJSON.bind(W));function B(e,t){const{graphic:r,renderer:a,symbol:i}=t,s=i.type;if("text"===s||"shield-label-symbol"===s||!("visualVariables"in a)||!a.visualVariables)return;const n=a.getVisualVariablesForType("size"),o=a.getVisualVariablesForType("color"),l=a.getVisualVariablesForType("opacity"),u=a.getVisualVariablesForType("rotation"),c=n&&n[0],p=o&&o[0],y=l&&l[0],h=u&&u[0];if(c){const t="simple-marker"===s?i.style:null,a=(0,f.getSize)(c,r,{shape:t});null!=a&&("simple-marker"===s?e.size=(0,d.Wz)(a):"picture-marker"===s?(e.width=(0,d.Wz)(a),e.height=(0,d.Wz)(a)):"simple-line"===s?e.width=(0,d.Wz)(a):e.outline&&(e.outline.width=(0,d.Wz)(a)))}if(p){const t=(0,f.getColor)(p,r);(t&&"simple-marker"===s||"simple-line"===s||"simple-fill"===s)&&(e.color=t?t.toJSON():void 0)}if(y){const t=(0,f.getOpacity)(y,r);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}h&&(e.angle=-(0,f.getRotationAngle)(a,r))}function X(e){return e&&"bing-maps"===e.type}function K(e){return e&&"csv"===e.type}function Q(e){return e&&"feature"===e.type}function Y(e){return e&&"geojson"===e.type}function H(e){return e&&"graphics"===e.type}function ee(e){return e&&"group"===e.type}function te(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function re(e){return e&&"imagery"===e.type}function ae(e){return e&&"kml"===e.type}function ie(e){return e&&"map-image"===e.type}function se(e){return e&&"map-notes"===e.type}function ne(e){return e&&"open-street-map"===e.type}function oe(e){return e&&"stream"===e.type}function le(e){return e&&"tile"===e.type}function ue(e){return e&&"vector-tile"===e.type}function ce(e){return e&&"web-tile"===e.type}function pe(e){return e&&"wms"===e.type}function ye(e){return e&&"wmts"===e.type}var de=r(87765),he=r(82677);const me=s.Z.getLogger("esri.tasks.support.PrintTemplate");function fe(){(0,de.Mr)(me,"preserveScale",{replacement:"scalePreserved",version:"4.16"})}let ge=class extends he.default{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}get preserveScale(){return fe(),this.scalePreserved}set preserveScale(e){fe(),this.scalePreserved=e}};(0,a._)([(0,n.Cb)()],ge.prototype,"attributionVisible",void 0),(0,a._)([(0,n.Cb)()],ge.prototype,"exportOptions",void 0),(0,a._)([(0,n.Cb)()],ge.prototype,"forceFeatureAttributes",void 0),(0,a._)([(0,n.Cb)()],ge.prototype,"format",void 0),(0,a._)([(0,n.Cb)()],ge.prototype,"label",void 0),(0,a._)([(0,n.Cb)()],ge.prototype,"layout",void 0),(0,a._)([(0,n.Cb)()],ge.prototype,"layoutOptions",void 0),(0,a._)([(0,n.Cb)()],ge.prototype,"outScale",void 0),(0,a._)([(0,n.Cb)({dependsOn:["scalePreserved"]})],ge.prototype,"preserveScale",null),(0,a._)([(0,n.Cb)()],ge.prototype,"scalePreserved",void 0),(0,a._)([(0,n.Cb)()],ge.prototype,"showLabels",void 0),ge=(0,a._)([(0,l.j)("esri.tasks.support.PrintTemplate")],ge);const be=ge,Se={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},ve=new o.Xn({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),_e=new o.Xn({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),we=new g.Z({returnGeometry:!0});function Pe(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}let Le=class extends b.Z{constructor(...e){super(...e),this._ssExtent=null,this._legendLayers=[],this._legendLayerNameMap={},this._gpServerUrl=null,this._cimVersion=null,this._is11xService=!1,this._gpMetadata=null,this.updateDelay=1e3}get _geoprocessor(){return new q({url:this.url})}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?_e.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,t){let r=this.url;const a=r.lastIndexOf("/GPServer/");return a>0&&(r=r.slice(0,a+9)),(0,p.DB)().then((()=>this._gpServerUrl===r?{data:this._gpMetadata}:(this._gpServerUrl=r,(0,m.default)(r,{query:{f:"json"}})))).then((t=>(this._gpMetadata=t.data,this._cimVersion=this._gpMetadata.cimVersion,this._is11xService=!!this._cimVersion,this._getGpPrintParams(e)))).then((e=>{const r=e=>"sync"===this.mode?e.results&&e.results[0]&&e.results[0].value:this._geoprocessor.getResultData(e.jobId,"Output_File",t).then((e=>e.value));return"async"===this.mode?this._geoprocessor.submitJob(e,t).then((e=>this._geoprocessor.waitForJobCompletion(e.jobId,{interval:this.updateDelay}).then(r))):this._geoprocessor.execute(e,t).then(r)}))}async _createOperationalLayers(e,t){const r=[],a={layerView:null,printTemplate:t,view:e};let i=0;t.scalePreserved&&(i=t.outScale||e.scale);const s=function(e,t){const r=e.allLayerViews.items;if(t===e.scale)return r.filter((e=>!e.suspended));const a=new Array;for(const e of r)te(e.parent)&&!a.includes(e.parent)||!e.visible||t&&"isVisibleAtScale"in e&&!e.isVisibleAtScale(t)||a.push(e);return a}(e,i);for(const e of s){const t=e.layer;if(!t.loaded||ee(t))continue;let i;a.layerView=e,i=X(t)?this._createBingMapsLayerJSON(t):K(t)?await this._createCSVLayerJSON(t,a):Q(t)?await this._createFeatureLayerJSON(t,a):Y(t)?await this._createGeoJSONLayer(t,a):H(t)?await this._createGraphicsLayerJSON(t,a):re(t)?this._createImageryLayerJSON(t):ae(t)?await this._createKMLLayerJSON(t,a):ie(t)?this._createMapImageLayerJSON(t,a):se(t)?await this._createMapNotesLayerJSON(a):ne(t)?this._createOpenStreetMapLayerJSON():oe(t)?await this._createStreamLayerJSON(t,a):le(t)?this._createTileLayerJSON(t):ue(t)?await this._createVectorTileLayerJSON(t,a):ce(t)?this._createWebTileLayerJSON(t):pe(t)?this._createWMSLayerJSON(t):ye(t)?this._createWMTSLayerJSON(t):await this._createScreenshotJSON(t,a),i&&(Array.isArray(i)?r.push(...i):(i.id=t.id,i.title=this._legendLayerNameMap[t.id]||t.title,i.opacity=t.opacity,i.minScale=t.minScale||0,i.maxScale=t.maxScale||0,r.push(i)))}if(i&&r.forEach((e=>{e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.length){const a=await this._createFeatureCollectionJSON(null,e.graphics,t);a&&r.push(a)}return r}_createBingMapsLayerJSON(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async _createCSVLayerJSON(e,{layerView:t,printTemplate:r}){let a;if(this._legendLayers&&this._legendLayers.push({id:e.id}),!this._is11xService){const a=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,a,r)}return a={type:"CSV"},e.write(a,{origin:"web-map"}),delete a.popupInfo,delete a.layerType,a.showLabels=r.showLabels&&e.labelsVisible,a}async _createFeatureCollectionJSON(e,t,r){let a;const i={layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}},s={layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}},n={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}},o={layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}},l={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}};if(l.layerDefinition.name="textLayer",delete l.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?i.layerDefinition.name=s.layerDefinition.name=n.layerDefinition.name=o.layerDefinition.name=this._legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();i.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,n.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t}if(r.showLabels&&e.labelsVisible&&"function"==typeof e.write){var u,c;const t=null==(u=e.write({},{origin:"web-map"}).layerDefinition)||null==(c=u.drawingInfo)?void 0:c.labelingInfo;t&&(a=!0,i.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,n.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t)}}let p;null!=e&&e.renderer||a||(delete i.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete n.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo);const d=e&&e.fields,h=e&&e.renderer;if(d&&h&&"function"==typeof h.collectRequiredFields){const e=new Set;await h.collectRequiredFields(e,d),p=Array.from(e)}if(d){const e=d.map((e=>e.toJSON()));i.layerDefinition.fields=e,s.layerDefinition.fields=e,n.layerDefinition.fields=e,o.layerDefinition.fields=e}const m=t&&t.length;let f;for(let a=0;a<m;a++){const u=t[a]||t.getItemAt(a);if(!1===u.visible||!u.geometry)continue;if(f=u.toJSON(),f.hasOwnProperty("popupTemplate")&&delete f.popupTemplate,f.geometry&&f.geometry.z&&delete f.geometry.z,f.symbol&&f.symbol.outline&&"esriCLS"===f.symbol.outline.type&&!this._is11xService)continue;!this._is11xService&&f.symbol&&f.symbol.outline&&f.symbol.outline.color&&f.symbol.outline.color[3]&&(f.symbol.outline.color[3]=255);const c=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!f.symbol&&e&&e.renderer&&c&&!this._is11xService){const t=e.renderer,r=await t.getSymbolAsync(u);if(!r)continue;f.symbol=r.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&B(f.symbol,{renderer:t,graphic:u,symbol:r})}if(f.symbol&&(f.symbol.angle||delete f.symbol.angle,Pe(f.symbol)?f.symbol=await this._convertSvgToPictureMarkerSymbolJson(f.symbol):f.symbol.text&&delete f.attributes),(!r||!r.forceFeatureAttributes)&&p&&p.length){const e={};p.forEach((t=>{f.attributes&&f.attributes.hasOwnProperty(t)&&(e[t]=f.attributes[t])})),f.attributes=e}"polygon"===u.geometry.type?i.featureSet.features.push(f):"polyline"===u.geometry.type?s.featureSet.features.push(f):"point"===u.geometry.type?f.symbol&&f.symbol.text?l.featureSet.features.push(f):n.featureSet.features.push(f):"multipoint"===u.geometry.type?o.featureSet.features.push(f):"extent"===u.geometry.type&&(f.geometry=y.Z.fromExtent(u.geometry).toJSON(),i.featureSet.features.push(f))}const g=[i,s,o,n,l].filter((e=>e.featureSet.features.length>0));for(const e of g){const t=e.featureSet.features.every((e=>e.symbol));!t||r&&r.forceFeatureAttributes||e.featureSet.features.forEach((e=>{delete e.attributes})),t&&delete e.layerDefinition.drawingInfo,e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.renderer&&await this._convertSvgRenderer(e.layerDefinition.drawingInfo.renderer)}return g.length?{featureCollection:{layers:g},showLabels:a}:null}async _createFeatureLayerJSON(e,t){var r,a;let i;this._legendLayers&&this._legendLayers.push({id:e.id});const s=e.renderer;if(e.featureReduction||s&&"dot-density"===s.type&&(!this._is11xService||parseFloat(this._cimVersion)<2.6))return this._createScreenshotJSON(e,t);const{layerView:n,printTemplate:o,view:l}=t,u=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),c="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(a=e.source)?void 0:a.type);if(!this._is11xService&&u||e.featureReduction||c||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await this._getGraphics(n);i=await this._createFeatureCollectionJSON(e,t,o)}else{var p,y;if(i={id:(d=e.write()).id,title:d.title,opacity:d.opacity,minScale:d.minScale,maxScale:d.maxScale,url:d.url,layerDefinition:d.layerDefinition},i.showLabels=o.showLabels&&e.labelsVisible,this._setURLandToken(i,e),null!=(p=i.layerDefinition)&&null!=(y=p.drawingInfo)&&y.renderer&&(delete i.layerDefinition.minScale,delete i.layerDefinition.maxScale,await this._convertSvgRenderer(i.layerDefinition.drawingInfo.renderer),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=(0,f.getSizeRangeAtScale)(e,l.scale);i.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,i.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}}var d;return i}async _createGeoJSONLayer(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const a=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,a,r)}async _createGraphicsLayerJSON(e,{printTemplate:t}){return this._createFeatureCollectionJSON(e,null,t)}_createImageryLayerJSON(e){this._legendLayers&&this._legendLayers.push({id:e.id});const t={bandIds:e.bandIds,compressionQuality:e.compressionQuality,format:e.format,interpolation:e.interpolation};if((e.mosaicRule||e.definitionExpression)&&(t.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(this._is11xService)e.renderingRule&&(t.renderingRule=e.renderingRule.toJSON()),e.renderer&&(t.layerDefinition=t.layerDefinition||{},t.layerDefinition.drawingInfo=t.layerDefinition.drawingInfo||{},t.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const r=e.exportImageServiceParameters.combineRendererWithRenderingRule();r&&(t.renderingRule=r.toJSON())}return this._setURLandToken(t,e),t}async _createKMLLayerJSON(e,t){const r=t.printTemplate;if(this._is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=(0,c.Fv)(e.url),t}{const a=[],i=t.layerView;i.allVisibleMapImages.forEach(((t,r)=>{const i={id:`${e.id}_image${r}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?i.imageData=t.href.substr(22):i.url=t.href,a.push(i)}));const s=[...i.allVisiblePoints.items,...i.allVisiblePolylines.items,...i.allVisiblePolygons.items],n={id:e.id,...await this._createFeatureCollectionJSON(null,s,r)};return a.push(n),a}}_createMapImageLayerJSON(e,{view:t}){let r;const a={id:e.id,subLayerIds:[]};let i=[];const s=t.scale,n=e=>{const t=0===s,r=0===e.minScale||s<=e.minScale,o=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||r&&o))if(e.sublayers)e.sublayers.forEach(n);else{const t=e.toExportImageJSON(),r={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};i.unshift(r),a.subLayerIds.push(e.id)}};return e.sublayers&&e.sublayers.forEach(n),i.length&&(i=i.map((({id:e,name:t,layerDefinition:r})=>({id:e,name:t,layerDefinition:r}))),r={layers:i,visibleLayers:a.subLayerIds},this._setURLandToken(r,e),this._legendLayers.push(a)),r}async _createMapNotesLayerJSON({layerView:e,printTemplate:t}){const r=[];for(const a of e.graphicsViews()){const e=await this._createFeatureCollectionJSON(a,a.graphics,t);e&&r.push(...e.featureCollection.layers)}return{featureCollection:{layers:r}}}_createOpenStreetMapLayerJSON(){return{type:"OpenStreetMap"}}async _createScreenshotJSON(e,{printTemplate:t,view:r}){const a={type:"image"},i={format:"png",ignoreBackground:!0,layers:[e],rotation:0},s=this._ssExtent||r.extent.clone();let n=96,o=!0,l=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(n=e.dpi),e.width>0&&(o=e.width%2==r.width%2),e.height>0&&(l=e.height%2==r.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===r.scale)&&96===n&&(!o||!l)&&(i.area={x:0,y:0,width:r.width,height:r.height},o||(i.area.width-=1),l||(i.area.height-=1),!this._ssExtent)){const e=r.toMap((0,d.vW)(i.area.width,i.area.height));s.ymin=e.y,s.xmax=e.x,this._ssExtent=s}a.extent=s.clone()._normalize(!0).toJSON();const u=await r.takeScreenshot(i),p=(0,c.sJ)(u.dataUrl);return a.imageData=p.data,a}async _createStreamLayerJSON(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const a=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,a,r)}_createTileLayerJSON(e){const t={customParameters:e.customParameters};return this._setURLandToken(t,e),t}async _createVectorTileLayerJSON(e,t){if(this._is11xService&&e.serviceUrl&&e.styleUrl){const t=h.id&&h.id.findCredential(e.styleUrl),r=h.id&&h.id.findCredential(e.serviceUrl);if(!t&&!r||"2.1.0"!==this._cimVersion){const a={type:"VectorTileLayer"};return a.styleUrl=(0,c.Fv)(e.styleUrl),t&&(a.token=t.token),r&&r.token!==a.token&&(a.additionalTokens=[{url:e.serviceUrl,token:r.token}]),a}}return this._createScreenshotJSON(e,t)}_createWebTileLayerJSON(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}_createWMSLayerJSON(e){let t;const r=[],a=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(a):e.name&&r.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(a),r.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:r,url:(0,c.Fv)(e.url),version:e.version}),t}_createWMTSLayerJSON(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:(0,c.Fv)(e.url)}}_setURLandToken(e,t){var r;if(!t.url)return;e.url=(0,c.Fv)(e.url||t.url);const a=null==(r=h.id)?void 0:r.findCredential(t.url);a&&(e.token=a.token)}async _convertSvgToPictureMarkerSymbolJson(e){this._canvas||(this._canvas=document.createElement("canvas"));const t=1024;this._canvas.width=t,this._canvas.height=t;const r=this._canvas.getContext("2d");let a,i;if(e.path){var s;const n=new Path2D(e.path);n.closePath(),r.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",r.fill(n);const o=function(e,t=15){const r=e.canvas.width,a=e.canvas.height,i=e.getImageData(0,0,r,a).data;let s,n,o,l,u,c;e:for(n=a;n--;)for(s=r;s--;)if(i[4*(r*n+s)+3]>t){c=n;break e}if(!c)return null;e:for(s=r;s--;)for(n=c+1;n--;)if(i[4*(r*n+s)+3]>t){u=s;break e}e:for(s=0;s<=u;++s)for(n=c+1;n--;)if(i[4*(r*n+s)+3]>t){o=s;break e}e:for(n=0;n<=c;++n)for(s=o;s<=u;++s)if(i[4*(r*n+s)+3]>t){l=n;break e}return{x:o,y:l,width:u-o,height:c-l}}(r);if(!o)return null;r.clearRect(0,0,t,t);const l=(0,d.F2)(e.size)/Math.max(o.width,o.height);r.scale(l,l);const u=t/l,c=u/2-o.width/2-o.x,p=u/2-o.height/2-o.y;if(r.translate(c,p),Array.isArray(e.color)&&r.fill(n),null!=(s=e.outline)&&s.width&&Array.isArray(e.outline.color)){const t=e.outline;r.lineWidth=(0,d.F2)(t.width)/l,r.lineJoin="round",r.strokeStyle=`rgba(${t.color[0]},${t.color[1]},${t.color[2]},${t.color[3]/255})`,r.stroke(n),o.width+=r.lineWidth,o.height+=r.lineWidth}o.width*=l,o.height*=l;const y=r.getImageData(512-o.width/2,512-o.height/2,Math.ceil(o.width),Math.ceil(o.height));a=y.width,i=y.height,r.canvas.width=a,r.canvas.height=i,r.putImageData(y,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,s=(await(0,m.default)(t,{responseType:"image"})).data;a=(0,d.F2)(e.width),i=(0,d.F2)(e.height),r.canvas.width=a,r.canvas.height=i,r.drawImage(s,0,0,r.canvas.width,r.canvas.height)}return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:(0,d.Wz)(i),width:(0,d.Wz)(a),xoffset:e.xoffset,yoffset:e.yoffset}}async _convertSvgRenderer(e){const t=e.type;if("simple"===t&&Pe(e.symbol))e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol);else if("uniqueValue"===t||"classBreaks"===t){Pe(e.defaultSymbol)&&(e.defaultSymbol=await this._convertSvgToPictureMarkerSymbolJson(e.defaultSymbol));const r=e["uniqueValue"===t?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)Pe(e.symbol)&&(e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol))}}_getGraphics(e){return e.queryFeatures(we).then((e=>e.features))}async _getPrintDefinition(e,t){const r=e.view;let a=r.spatialReference;const i={operationalLayers:await this._createOperationalLayers(r,t)};let s=this._ssExtent||e.extent||r.extent;return a&&a.isWrappable&&(s=s.clone()._normalize(!0),a=s.spatialReference),i.mapOptions={extent:s&&s.toJSON(),spatialReference:a&&a.toJSON(),showAttribution:t.attributionVisible},this._ssExtent=null,r.background&&(i.background=r.background.toJSON()),r.rotation&&(i.mapOptions.rotation=-r.rotation),t.scalePreserved&&(i.mapOptions.scale=t.outScale||r.scale),i}async _getGpPrintParams(e){const t=e.template||new be;null==t.showLabels&&(t.showLabels=!0);const r=t.exportOptions;let a;const s=Z(t.layout);if(r&&(a={dpi:r.dpi},"map_only"===s.toLowerCase()||""===s)){const e=r.width,t=r.height;a.outputSize=[e,t]}const n=t.layoutOptions;let o;if(n){let e,t;"Miles"===n.scalebarUnit||"Kilometers"===n.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==n.scalebarUnit&&"Feet"!==n.scalebarUnit||(e="Meters",t="Feet"),o={titleText:n.titleText,authorText:n.authorText,copyrightText:n.copyrightText,customTextElements:n.customTextElements,scaleBarOptions:{metricUnit:ve.toJSON(e),metricLabel:Se[e],nonMetricUnit:ve.toJSON(t),nonMetricLabel:Se[t]}}}let l=null;n&&n.legendLayers&&(l=n.legendLayers.map((e=>{this._legendLayerNameMap[e.layerId]=e.title;const t={id:e.layerId};return e.subLayerIds&&(t.subLayerIds=e.subLayerIds),t})));const c=await this._getPrintDefinition(e,t);if(c.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),t=/[\u0600-\u06FF]/,r=r=>{const a=r.text,i=r.font,s=i&&i.family&&i.family.toLowerCase();a&&i&&("arial"===s||"arial unicode ms"===s)&&(i.family=e.test(a)?"Arial Unicode MS":"Arial","normal"!==i.style&&t.test(a)&&(i.family="Arial Unicode MS"))},a=()=>{throw new u.Z("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};c.operationalLayers.forEach((e=>{var t,i,s;null!=(t=e.featureCollection)&&t.layers?e.featureCollection.layers.forEach((e=>{var t,i,s,n;if(null!=(t=e.layerDefinition)&&null!=(i=t.drawingInfo)&&null!=(s=i.renderer)&&s.symbol){const t=e.layerDefinition.drawingInfo.renderer;"esriTS"===t.symbol.type?r(t.symbol):"CIMSymbolReference"!==t.symbol.type||this._is11xService||a()}null!=(n=e.featureSet)&&n.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?r(e.symbol):"CIMSymbolReference"!==e.symbol.type||this._is11xService||a())}))})):!this._is11xService&&null!=(i=e.layerDefinition)&&null!=(s=i.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&a()}))}e.outSpatialReference&&(c.mapOptions.spatialReference=e.outSpatialReference.toJSON()),(0,i.jB)(c,{exportOptions:a,layoutOptions:o}),(0,i.jB)(c.layoutOptions,{legendOptions:{operationalLayers:null!=l?l:this._legendLayers.slice()}}),this._legendLayers.length=0;const p={Web_Map_as_JSON:JSON.stringify(c),Format:$(t.format),Layout_Template:s};return e.extraParameters&&(0,i.jB)(p,e.extraParameters),p}};(0,a._)([(0,n.Cb)({dependsOn:["url"]})],Le.prototype,"_geoprocessor",null),(0,a._)([(0,n.Cb)()],Le.prototype,"_gpMetadata",void 0),(0,a._)([(0,n.Cb)({dependsOn:["_gpMetadata"],readOnly:!0})],Le.prototype,"mode",null),(0,a._)([(0,n.Cb)()],Le.prototype,"updateDelay",void 0),Le=(0,a._)([(0,l.j)("esri.tasks.PrintTask")],Le);const Oe=Le},21544:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(56140),i=(r(95830),r(36544),r(68055),r(79881)),s=r(56274),n=r(87566),o=(r(10923),r(57002),r(86035),r(58385));const l=new s.Xn({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let u=class extends o.wq{constructor(e){super(e),this.description=null,this.type=null}};(0,a._)([(0,i.Cb)({type:String,json:{write:!0}})],u.prototype,"description",void 0),(0,a._)([(0,i.Cb)({type:String,json:{read:l.read,write:l.write}})],u.prototype,"type",void 0),u=(0,a._)([(0,n.j)("esri.tasks.support.GPMessage")],u);const c=u}}]);
//# sourceMappingURL=5836.js.map