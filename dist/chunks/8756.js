(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[8756],{87254:(e,a,r)=>{"use strict";r.r(a),r.d(a,{populateOperationalLayers:()=>d});r(95830);var t=r(39105),n=r(28293),i=r(80192),y=r(79663),l=r(6357),s=r(62646);function c(e,a){return u(e,a,"notes","Map Notes")}function o(e,a){return u(e,a,"route","Route Layer")}async function u(e,a,r,t){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===r)return!0;if(e.itemId){const r=new i.default({id:e.itemId,portal:a});return await r.load(),"Feature Collection"===r.type&&(0,s._$)(r,t)}return!1}var L=r(1204);async function d(e,a,r){if(!a)return;const n=[];for(const e of a){const a=T(e,r);"GroupLayer"===e.layerType?n.push(b(a,e,r)):n.push(a)}const i=await(0,t.eachAlways)(n);for(const a of i)!a.value||r.filter&&!r.filter(a.value)||e.add(a.value)}const p={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},f={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},m={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},S={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},I={ArcGISFeatureLayer:"FeatureLayer"},g={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function T(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&w(a)&&await async function(e,a,r){const t=l.T.FeatureLayer,n=await t(),i=a.featureCollection,y=i.showLegend,s=i.layers.map((e=>{const a=new n;return a.read(e,r),null!=y&&a.read({showLegend:y},r),a}));e.layers.addMany(s)}(t,a,r.context),await(0,y.y)(t,r.context),t}(await async function(e,a){const r=a.context,t=M(r);let n=e.layerType||e.type;!n&&a&&a.defaultLayerType&&(n=a.defaultLayerType);const y=t[n];let s=y?l.T[y]:l.T.UnknownLayer;const u=r&&r.portal;if(h(e)){if(e.itemId){const a=new i.default({id:e.itemId,portal:u});await a.load();const r=(await(0,L.selectLayerClassPath)(a)).className||"UnknownLayer";s=l.T[r]}}else"ArcGISFeatureLayer"===n&&(await c(e,u)?s=l.T.MapNotesLayer:await o(e,u)?s=l.T.RouteLayer:w(e)&&(s=l.T.GroupLayer));return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(s=l.T.WMTSLayer),s()}(e,a),e,a)}function w(e){if("ArcGISFeatureLayer"!==e.layerType||h(e))return!1;const a=e.featureCollection;return!!(a&&a.layers&&a.layers.length>1)}function h(e){return"Feature Collection"===e.type}function M(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=m;break;case"ground":a=f;break;default:a=p}break;default:switch(e.layerContainerType){case"basemap":a=g;break;case"tables":a=I;break;default:a=S}}return a}async function b(e,a,r){const t=new n.Z,i=d(t,Array.isArray(a.layers)?a.layers:[],r),y=await e;if(await i,"group"===y.type)return y.layers.addMany(t),y}},6357:(e,a,r)=>{"use strict";r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await r.e(2081).then(r.bind(r,42081))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(2673),r.e(8834),r.e(3005),r.e(1518),r.e(6369),r.e(142),r.e(9632),r.e(9266),r.e(8390),r.e(1318)]).then(r.bind(r,31318))).default,CSVLayer:async()=>(await Promise.all([r.e(2673),r.e(8834),r.e(3005),r.e(1518),r.e(6369),r.e(142),r.e(9632),r.e(9158)]).then(r.bind(r,54479))).default,ElevationLayer:async()=>(await Promise.all([r.e(2673),r.e(9522)]).then(r.bind(r,29522))).default,FeatureLayer:async()=>(await Promise.all([r.e(2673),r.e(8834),r.e(3005),r.e(1518),r.e(6369),r.e(142),r.e(9632),r.e(6612)]).then(r.bind(r,89632))).default,GroupLayer:async()=>(await r.e(9647).then(r.bind(r,19647))).default,GeoRSSLayer:async()=>(await r.e(2303).then(r.bind(r,32303))).default,ImageryLayer:async()=>(await Promise.all([r.e(2673),r.e(8834),r.e(3005),r.e(1518),r.e(6369),r.e(2551),r.e(4464),r.e(6399),r.e(1163),r.e(1698)]).then(r.bind(r,53194))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(2673),r.e(8834),r.e(3005),r.e(8157),r.e(7333),r.e(4464),r.e(6399),r.e(1163),r.e(8967)]).then(r.bind(r,28967))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(8157),r.e(7333),r.e(9266),r.e(49)]).then(r.bind(r,69640))).default,KMLLayer:async()=>(await Promise.all([r.e(8834),r.e(3005),r.e(142),r.e(6332)]).then(r.bind(r,66184))).default,MapImageLayer:async()=>(await Promise.all([r.e(2673),r.e(8834),r.e(3005),r.e(1518),r.e(6369),r.e(142),r.e(9632),r.e(2551),r.e(2905),r.e(5666),r.e(2696),r.e(4288),r.e(6304),r.e(5089),r.e(7521)]).then(r.bind(r,62933))).default,MapNotesLayer:async()=>(await Promise.all([r.e(2673),r.e(8834),r.e(3005),r.e(1518),r.e(6369),r.e(142),r.e(9632),r.e(147)]).then(r.bind(r,42386))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(6601),r.e(8742)]).then(r.bind(r,68742))).default,PointCloudLayer:async()=>(await r.e(8342).then(r.bind(r,78342))).default,RouteLayer:async()=>(await Promise.all([r.e(2673),r.e(8834),r.e(3005),r.e(1518),r.e(6369),r.e(142),r.e(9632),r.e(1132)]).then(r.bind(r,53504))).default,SceneLayer:async()=>(await Promise.all([r.e(2673),r.e(8834),r.e(3005),r.e(1518),r.e(6369),r.e(142),r.e(9632),r.e(9266),r.e(8390),r.e(3687)]).then(r.bind(r,93687))).default,StreamLayer:async()=>(await Promise.all([r.e(8834),r.e(3005),r.e(1518),r.e(6369),r.e(142),r.e(127)]).then(r.bind(r,65034))).default,TileLayer:async()=>(await Promise.all([r.e(8834),r.e(3005),r.e(1518),r.e(142),r.e(6304),r.e(9164)]).then(r.bind(r,66416))).default,UnknownLayer:async()=>(await r.e(2095).then(r.bind(r,32095))).default,UnsupportedLayer:async()=>(await r.e(1983).then(r.bind(r,51983))).default,VectorTileLayer:async()=>(await Promise.all([r.e(6017),r.e(1754),r.e(2105)]).then(r.bind(r,57680))).default,WebTileLayer:async()=>(await r.e(6601).then(r.bind(r,16601))).default,WMSLayer:async()=>(await Promise.all([r.e(6369),r.e(8380)]).then(r.bind(r,5612))).default,WMTSLayer:async()=>(await Promise.all([r.e(6601),r.e(5155)]).then(r.bind(r,65155))).default}},1204:(e,a,r)=>{"use strict";r.r(a),r.d(a,{fromItem:()=>c,selectLayerClassPath:()=>o});var t=r(59472),n=r(32656),i=r(36654),y=r(80192),l=r(62646),s=r(6357);function c(e){return!e.portalItem||e.portalItem instanceof y.default||(e={...e,portalItem:new y.default(e.portalItem)}),function(e){return e.load().then(o).then(u)}(e.portalItem).then((a=>{const r={portalItem:e.portalItem,...a.properties},t=a.constructor;return Promise.resolve(new t(r))}))}function o(e){switch(e.type){case"Map Service":return function(e){return function(e){return m(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function(e){return L(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){return await e.load(),(0,l._$)(e,"Map Notes")?{className:"MapNotesLayer"}:(0,l._$)(e,"Route Layer")?{className:"RouteLayer"}:1===f(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return L(e).then((a=>{if("object"==typeof a){const r={};let t;if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const r of Object.keys(a))if(-1!==e.typeKeywords.indexOf(r))return{className:a[r]}}return m(t).then((e=>{let a="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(a=t[e.layerType]),{className:a,properties:r}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var a,r,t;await e.load();const n=null!=(a=null==(r=e.typeKeywords)?void 0:r.map((e=>e.toLowerCase())))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const i=await e.fetchData(),y=null==i?void 0:i.layerType;return"ArcGISTiledImageServiceLayer"===y?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===y?{className:"ImageryLayer"}:"map"===(null==(t=(await m(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new n.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function u(e){return(0,s.T[e.className])().then((a=>({constructor:a,properties:e.properties})))}function L(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((a=>f(a)>0?d(a):m(e.url).then(d)))}function d(e){return 1===f(e)&&{id:(0,t.Wg)(p(e))}}function p(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function f(e){var a,r,t,n;return(null!=(a=null==e||null==(r=e.layers)?void 0:r.length)?a:0)+(null!=(t=null==e||null==(n=e.tables)?void 0:n.length)?t:0)}function m(e){return(0,i.default)(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}},79663:(e,a,r)=>{"use strict";r.d(a,{y:()=>y});var t=r(15307),n=r(39105),i=r(59351);async function y(e,a,r){const y=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(y&&"unique-value"===y.type&&y.styleOrigin){const l=await(0,i.q6)(y.populateFromStyle());if((0,n.throwIfAborted)(r),!1===l.ok){const r=l.error;a&&a.messages&&a.messages.push(new t.Z("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:a})),e.clear("renderer",a.origin)}}}}}]);
//# sourceMappingURL=8756.js.map