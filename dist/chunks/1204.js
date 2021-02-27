(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[1204],{6357:(e,a,t)=>{"use strict";t.d(a,{T:()=>r});const r={BingMapsLayer:async()=>(await t.e(2081).then(t.bind(t,42081))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(8201),t.e(1318)]).then(t.bind(t,31318))).default,CSVLayer:async()=>(await t.e(4479).then(t.bind(t,54479))).default,ElevationLayer:async()=>(await Promise.resolve().then(t.bind(t,87790))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,76603))).default,GroupLayer:async()=>(await t.e(9647).then(t.bind(t,19647))).default,GeoRSSLayer:async()=>(await t.e(2303).then(t.bind(t,32303))).default,ImageryLayer:async()=>(await Promise.all([t.e(4464),t.e(6399),t.e(2803),t.e(928)]).then(t.bind(t,20928))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(4464),t.e(6399),t.e(2803),t.e(9866)]).then(t.bind(t,69866))).default,IntegratedMeshLayer:async()=>(await t.e(9640).then(t.bind(t,69640))).default,KMLLayer:async()=>(await t.e(6184).then(t.bind(t,66184))).default,MapImageLayer:async()=>(await t.e(2933).then(t.bind(t,62933))).default,MapNotesLayer:async()=>(await t.e(2386).then(t.bind(t,42386))).default,OpenStreetMapLayer:async()=>(await t.e(8742).then(t.bind(t,68742))).default,PointCloudLayer:async()=>(await t.e(8342).then(t.bind(t,78342))).default,RouteLayer:async()=>(await t.e(3504).then(t.bind(t,53504))).default,SceneLayer:async()=>(await Promise.all([t.e(8201),t.e(3687)]).then(t.bind(t,93687))).default,StreamLayer:async()=>(await t.e(5034).then(t.bind(t,65034))).default,TileLayer:async()=>(await Promise.resolve().then(t.bind(t,66416))).default,UnknownLayer:async()=>(await t.e(2095).then(t.bind(t,32095))).default,UnsupportedLayer:async()=>(await t.e(1983).then(t.bind(t,51983))).default,VectorTileLayer:async()=>(await Promise.resolve().then(t.bind(t,57680))).default,WebTileLayer:async()=>(await t.e(6601).then(t.bind(t,16601))).default,WMSLayer:async()=>(await t.e(5612).then(t.bind(t,5612))).default,WMTSLayer:async()=>(await t.e(5155).then(t.bind(t,65155))).default}},1204:(e,a,t)=>{"use strict";t.r(a),t.d(a,{fromItem:()=>y,selectLayerClassPath:()=>o});var r=t(59472),n=t(32656),l=t(39105),i=t(54721),s=t(80192),c=t(62646),u=t(6357);function y(e){return!e.portalItem||e.portalItem instanceof s.default||(e={...e,portalItem:new s.default(e.portalItem)}),(a=e.portalItem,a.load().then(o).then(d)).then((a=>{const t={portalItem:e.portalItem,...a.properties},r=a.constructor;return(0,l.resolve)(new r(t))}));var a}function o(e){switch(e.type){case"Map Service":return function(e){return function(e){return h(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function(e){return f(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){return await e.load(),(0,c._$)(e,"Map Notes")?{className:"MapNotesLayer"}:(0,c._$)(e,"Route Layer")?{className:"RouteLayer"}:1===p(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return f(e).then((a=>{if("object"==typeof a){const t={};let r;if(null!=a.id?(t.layerId=a.id,r=`${e.url}/layers/${a.id}`):r=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(a))if(-1!==e.typeKeywords.indexOf(t))return{className:a[t]}}return h(r).then((e=>{let a="SceneLayer";const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&r[e.layerType]&&(a=r[e.layerType]),{className:a,properties:t}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var a,t,r;await e.load();const n=null!=(a=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),i=null==l?void 0:l.layerType;if("ArcGISTiledImageServiceLayer"===i)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===i)return{className:"ImageryLayer"};return"map"===(null==(r=(await h(e.url)).cacheType)?void 0:r.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return(0,l.reject)(new n.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,u.T[e.className])().then((a=>({constructor:a,properties:e.properties})))}function f(e){return!e.url||e.url.match(/\/\d+$/)?(0,l.resolve)({}):e.load().then((()=>e.fetchData())).then((a=>p(a)>0?L(a):h(e.url).then(L)))}function L(e){return 1===p(e)&&{id:(0,r.Wg)(m(e))}}function m(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function p(e){var a,t,r,n;return(null!=(a=null==e||null==(t=e.layers)?void 0:t.length)?a:0)+(null!=(r=null==e||null==(n=e.tables)?void 0:n.length)?r:0)}function h(e){return(0,i.default)(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}}}]);
//# sourceMappingURL=1204.js.map