self.webpackChunkRemoteClient([84],{234:function(e,n,a){"use strict";a.r(n),a.d(n,"fromUrl",(function(){return u}));var r=a(0),t=a(16),l=a(58),i=a(91),s=a(249);async function u(e){const n=await async function(e){const n=Object(i.e)(e);if(Object(r.g)(n))throw new t.a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:a,sublayer:l}=n;let u;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":u=null!=l?"FeatureLayer":async function(e){return(await y(e)).tileInfo}(e).then((e=>e?"TileLayer":"MapImageLayer"));break;case"ImageServer":u=y(e).then((e=>{const n=e.tileInfo&&e.tileInfo.format;return e.tileInfo?!n||"LERC"!==n.toUpperCase()||e.cacheType&&"elevation"!==e.cacheType.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"}));break;case"SceneServer":u=y(n.url.path).then((e=>{const n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){const a=e.layers[0].layerType;if(null!=n[a])return n[a]}return"SceneLayer"}));break;default:u=o[a]}const d="FeatureServer"===a,f={parsedUrl:n,Constructor:null,layerOrTableId:d?l:null,sublayerIds:null,tableIds:null},b=await u;if({FeatureLayer:!0,SceneLayer:!0}[b]&&null==l){const n=await c(e,a);if(d&&(f.sublayerInfos=n.layerInfos,f.tableInfos=n.tableInfos),1!==n.layerIds.length+n.tableIds.length)f.sublayerIds=n.layerIds,f.tableIds=n.tableIds;else if(d){var h,w;f.layerOrTableId=null!=(h=n.layerIds[0])?h:n.tableIds[0],f.sourceJSON=null!=(w=n.layerInfos[0])?w:n.tableInfos[0]}}return f.Constructor=await async function(e){return(0,s.a[e])()}(b),f}(e.url),l={...e.properties,url:e.url};if(!n.sublayerIds)return null!=n.layerOrTableId&&(l.layerId=n.layerOrTableId,l.sourceJSON=n.sourceJSON),new n.Constructor(l);const u=new(0,(await a.e(59).then(a.bind(null,314))).default)({title:n.parsedUrl.title});return function(e,n,a){function t(e,t){const l={...a,layerId:e,sublayerTitleMode:"service-name"};return Object(r.h)(t)&&(l.sourceJSON=t),new n.Constructor(l)}n.sublayerIds.forEach((a=>{const r=t(a,o(n.sublayerInfos,a));e.add(r)})),n.tableIds.forEach((a=>{const r=t(a,o(n.tableInfos,a));e.tables.add(r)}))}(u,n,l),u}function o(e,n){return e?e.find((e=>e.id===n)):null}async function c(e,n){var a,r;let t,l=!1;if("FeatureServer"===n){const n=await async function(e){var n,a;let r=await y(e);r=r||{},r.layers=(null==(n=r.layers)?void 0:n.filter(d))||[];const t={serviceJSON:r};if(r.currentVersion<10.5)return t;const l=await y(e+"/layers");return t.layersJSON={layers:(null==l||null==(a=l.layers)?void 0:a.filter(d))||[],tables:(null==l?void 0:l.tables)||[]},t}(e);l=!!n.layersJSON,t=n.layersJSON||n.serviceJSON}else t=await y(e);const i=null==(a=t)?void 0:a.layers,s=null==(r=t)?void 0:r.tables;return{layerIds:(null==i?void 0:i.map((e=>e.id)).reverse())||[],tableIds:(null==s?void 0:s.map((e=>e.id)).reverse())||[],layerInfos:l?i:[],tableInfos:l?s:[]}}function d(e){return!e.type||"Feature Layer"===e.type}async function y(e){return(await Object(l.default)(e,{responseType:"json",query:{f:"json"}})).data}},249:function(e,n,a){"use strict";a.d(n,"a",(function(){return r}));const r={BingMapsLayer:async()=>(await a.e(58).then(a.bind(null,397))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(35)]).then(a.bind(null,384))).default,CSVLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(39)]).then(a.bind(null,398))).default,ElevationLayer:async()=>(await a.e(15).then(a.bind(null,393))).default,FeatureLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(41)]).then(a.bind(null,134))).default,GroupLayer:async()=>(await a.e(53).then(a.bind(null,314))).default,GeoRSSLayer:async()=>(await a.e(63).then(a.bind(null,370))).default,ImageryLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(11),a.e(37)]).then(a.bind(null,385))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(11),a.e(42)]).then(a.bind(null,383))).default,IntegratedMeshLayer:async()=>(await a.e(50).then(a.bind(null,391))).default,KMLLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(51)]).then(a.bind(null,395))).default,MapImageLayer:async()=>(await Promise.all([a.e(13),a.e(1),a.e(2),a.e(3),a.e(32)]).then(a.bind(null,341))).default,MapNotesLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(38)]).then(a.bind(null,371))).default,OpenStreetMapLayer:async()=>(await Promise.all([a.e(10),a.e(203)]).then(a.bind(null,372))).default,PointCloudLayer:async()=>(await Promise.all([a.e(1),a.e(46)]).then(a.bind(null,387))).default,RouteLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(40)]).then(a.bind(null,373))).default,SceneLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(36)]).then(a.bind(null,399))).default,StreamLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(48)]).then(a.bind(null,400))).default,TileLayer:async()=>(await Promise.all([a.e(1),a.e(2),a.e(3),a.e(4),a.e(45)]).then(a.bind(null,374))).default,UnknownLayer:async()=>(await a.e(74).then(a.bind(null,375))).default,UnsupportedLayer:async()=>(await a.e(75).then(a.bind(null,376))).default,VectorTileLayer:async()=>(await Promise.all([a.e(20),a.e(47)]).then(a.bind(null,386))).default,WebTileLayer:async()=>(await a.e(10).then(a.bind(null,315))).default,WMSLayer:async()=>(await Promise.all([a.e(1),a.e(49)]).then(a.bind(null,392))).default,WMTSLayer:async()=>(await Promise.all([a.e(10),a.e(204)]).then(a.bind(null,390))).default}},91:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return f})),a.d(n,"d",(function(){return I})),a.d(n,"e",(function(){return c})),a.d(n,"f",(function(){return b})),a.d(n,"g",(function(){return h})),a.d(n,"h",(function(){return y})),a.d(n,"i",(function(){return w}));var r=a(0),t=a(25),l=a(76);const i=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],s=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${i.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${i.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i");function o(e){return!!s.test(e)}function c(e){const n=Object(t.I)(e),a=n.path.match(s)||n.path.match(u);if(!a)return null;const[,r,l,i,o]=a,c=l.indexOf("/");return{title:d(-1!==c?l.slice(c+1):l),serverType:i,sublayer:null!=o&&""!==o?parseInt(o,10):null,url:{path:r}}}function d(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function y(e,n){const a=[];if(e){const n=c(e);Object(r.h)(n)&&n.title&&a.push(n.title)}if(n){const e=d(n);a.push(e)}if(2===a.length){if(-1!==a[0].toLowerCase().indexOf(a[1].toLowerCase()))return a[0];if(-1!==a[1].toLowerCase().indexOf(a[0].toLowerCase()))return a[1]}return a.join(" - ")}function f(e){if(!e)return!1;const n=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),a=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return n&&a}function b(e,n){return e?Object(t.G)(Object(t.F)(e,n)):e}function h(e,n,a){if(!n)return{url:n};n=Object(t.F)(n,a);const l=c(Object(t.I)(n).path);let i;return Object(r.h)(l)&&(null!=l.sublayer&&null==e.layerId&&(i=l.sublayer),n=l.url.path),{url:Object(t.G)(n),layerId:i}}function w(e,n,a,r,i){Object(l.f)(n,r,"url",i),r.url&&null!=e.layerId&&(r.url=Object(t.x)(r.url,a,e.layerId.toString()))}function I(e){if(!e)return!1;const n=e.toLowerCase(),a=-1!==n.indexOf("/services/"),r=-1!==n.indexOf("/mapserver/wmsserver"),t=-1!==n.indexOf("/imageserver/wmsserver"),l=-1!==n.indexOf("/wmsserver");return a&&(r||t||l)}}});