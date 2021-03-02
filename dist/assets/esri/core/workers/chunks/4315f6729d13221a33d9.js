self.webpackChunkRemoteClient([60,210],{129:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a}));var s=r(25);function o(e,t){let r={query:e};return t&&(r={...t,...r},r.query={...r.query,...t.query}),r}function a(e){return"string"==typeof e?Object(s.I)(e):e}function i(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const a=e[o];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){s[o]=[];for(let e=0;e<a.length;e++)s[o][e]=i(a[e])}else if("object"==typeof a)if(a.toJSON){const e=a.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?a:JSON.stringify(a);else s[o]=a}return s}},168:function(e,t,r){"use strict";var s=r(14),o=(r(4),r(2),r(5),r(15)),a=r(18),i=r(25),n=(r(35),r(36),r(23));let l=class extends n.a{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?Object(i.I)(e):null}_encode(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const a=e[o];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){s[o]=[];for(let e=0;e<a.length;e++)s[o][e]=this._encode(a[e])}else if("object"==typeof a)if(a.toJSON){const e=a.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?a:JSON.stringify(a);else s[o]=a}return s}};Object(s.a)([Object(o.b)({readOnly:!0})],l.prototype,"parsedUrl",null),Object(s.a)([Object(o.b)()],l.prototype,"requestOptions",void 0),Object(s.a)([Object(o.b)({type:String})],l.prototype,"url",void 0),l=Object(s.a)([Object(a.a)("esri.tasks.Task")],l);var c=l;t.a=c},290:function(e,t,r){"use strict";var s=r(14),o=(r(4),r(2),r(5),r(15)),a=r(55),i=r(18),n=(r(25),r(35),r(36),r(52));const l=new a.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends n.a{constructor(e){super(e),this.description=null,this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.GPMessage")],c);var u=c;t.a=u},307:function(e,t,r){"use strict";var s=r(14),o=(r(4),r(2),r(5),r(15)),a=r(55),i=r(18),n=(r(25),r(35),r(36),r(290));const l=new a.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends n.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.NAMessage")],c);var u=c;t.a=u},330:function(e,t,r){"use strict";var s=r(14),o=(r(4),r(0)),a=(r(2),r(5),r(15)),i=r(54),n=r(18),l=(r(25),r(35),r(36),r(57)),c=r(71),u=r(60),p=r(135),y=(r(59),r(65)),b=r(72);let d=class extends b.default{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){(e||[]).forEach((e=>{this._decompressFeatureGeometry(e,t.summary.envelope.spatialReference)}));const r=l.a.fromJSON(t.spatialReference);return e.map((e=>{const t=y.a.fromJSON(e),s=e.geometry&&e.geometry.spatialReference;return t.geometry&&!s&&(Object(o.n)(t.geometry).spatialReference=r),t.strings=e.strings,t.events=(e.events||[]).map((t=>{const r=new y.a({geometry:new c.a({x:t.point.x,y:t.point.y,z:t.point.z,hasZ:void 0!==t.point.z,spatialReference:e.geometry&&e.geometry.spatialReference}),attributes:{ETA:t.ETA,arriveTimeUTC:t.arriveTimeUTC}});return r.strings=t.strings,r})),t}))}get mergedGeometry(){if(!this.features)return null;const e=this.features.map((({geometry:e})=>Object(o.n)(e))),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map((({strings:e})=>e))}_decompressFeatureGeometry(e,t){e.geometry=this._decompressGeometry(e.compressedGeometry,t)}_decompressGeometry(e,t){let r=0,s=0,o=0,a=0;const i=[];let n,l,c,u,p,y,b,d,f=0,h=0,O=0;if(p=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),p||(p=[]),0===parseInt(p[f],32)){f=2;const e=parseInt(p[f],32);f++,y=parseInt(p[f],32),f++,1&e&&(h=p.indexOf("|")+1,b=parseInt(p[h],32),h++),2&e&&(O=p.indexOf("|",h)+1,d=parseInt(p[O],32),O++)}else y=parseInt(p[f],32),f++;for(;f<p.length&&"|"!==p[f];){n=parseInt(p[f],32)+r,f++,r=n,l=parseInt(p[f],32)+s,f++,s=l;const e=[n/y,l/y];h&&(u=parseInt(p[h],32)+o,h++,o=u,e.push(u/b)),O&&(c=parseInt(p[O],32)+a,O++,a=c,e.push(c/d)),i.push(e)}return{paths:[i],hasZ:h>0,hasM:O>0,spatialReference:t}}_mergePolylinesToSinglePath(e,t){let r=[];(e||[]).forEach((e=>{e.paths.forEach((e=>{r=r.concat(e)}))}));const s=[];let o=[0,0];return r.forEach((e=>{e[0]===o[0]&&e[1]===o[1]||(s.push(e),o=e)})),new p.a({paths:[s]},t)}};Object(s.a)([Object(a.b)({type:u.a,json:{read:{source:"summary.envelope"}}})],d.prototype,"extent",void 0),Object(s.a)([Object(a.b)()],d.prototype,"features",void 0),Object(s.a)([Object(i.a)("features")],d.prototype,"readFeatures",null),Object(s.a)([Object(a.b)()],d.prototype,"geometryType",void 0),Object(s.a)([Object(a.b)({readOnly:!0})],d.prototype,"mergedGeometry",null),Object(s.a)([Object(a.b)()],d.prototype,"routeId",void 0),Object(s.a)([Object(a.b)()],d.prototype,"routeName",void 0),Object(s.a)([Object(a.b)({value:null,readOnly:!0})],d.prototype,"strings",null),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalDriveTime"}}})],d.prototype,"totalDriveTime",void 0),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalLength"}}})],d.prototype,"totalLength",void 0),Object(s.a)([Object(a.b)({json:{read:{source:"summary.totalTime"}}})],d.prototype,"totalTime",void 0),d=Object(s.a)([Object(n.a)("esri.tasks.support.DirectionsFeatureSet")],d);var f=d;t.a=f},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach((e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,a="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=a&&(r[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else r[e]=t[e]}),this),r}}function o(e){return new s(e)}},360:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var s=r(14),o=(r(4),r(9)),a=r(0),i=(r(2),r(5),r(15),r(18)),n=r(16),l=r(25),c=(r(35),r(36),r(58)),u=r(168);const p=e=>{let t=class extends e{async getServiceDescription(){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise}async _fetchServiceDescription(){if(!this.url||!this.parsedUrl)throw new n.a("network-service:missing-url","Url to Network service is missing");const e=this.url,{data:t}=await Object(c.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new n.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await Object(c.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),s=Object(o.b)("helperServices.routingUtilities.url",r);if(!s)return{supportedTravelModes:[],defaultTravelMode:null};const a=Object(l.I)(e),i=/\/solveClosestFacility$/.test(a.path)?"Route":/\/solveClosestFacility$/.test(a.path)?"ClosestFacility":"ServiceAreas",n=await Object(c.default)(s+("/"===s[s.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i}}),u=[];let p=null;if(n&&n.data&&n.data.results&&n.data.results.length){const e=n.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);u.push(t)}}else"defaultTravelMode"===t.paramName&&(p=t.value)}return{supportedTravelModes:u,defaultTravelMode:p}}(e),{defaultTravelMode:s,supportedTravelModes:a}=await r;return t.defaultTravelMode=s,t.supportedTravelModes=a,t}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a.h)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],t),t};let y=class extends(p(u.a)){};y=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],y)},394:function(e,t,r){"use strict";r.d(t,"a",(function(){return T})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return N})),r.d(t,"d",(function(){return M})),r.d(t,"e",(function(){return S}));var s=r(9),o=r(0),a=r(16),i=r(58),n=r(129),l=r(14),c=(r(4),r(2),r(5),r(15)),u=r(54),p=r(18),y=(r(25),r(35),r(36),r(52)),b=r(65),d=r(72),f=r(307),h=r(330);let O=class extends y.a{constructor(e){super(e),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(l.a)([Object(c.b)({type:h.a,json:{write:!0}})],O.prototype,"directions",void 0),Object(l.a)([Object(c.b)({type:b.a,json:{write:!0}})],O.prototype,"route",void 0),Object(l.a)([Object(c.b)({type:String,json:{write:!0}})],O.prototype,"routeName",void 0),Object(l.a)([Object(c.b)({type:[b.a],json:{write:!0}})],O.prototype,"stops",void 0),O=Object(l.a)([Object(p.a)("esri.tasks.support.RouteResult")],O);var j=O;function m(e){return e&&d.default.fromJSON(e).features.map((e=>e))}let g=class extends y.a{constructor(e){super(e),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(e,t){return m(t.barriers||t.pointBarriers)}readPolylineBarriers(e){return m(e)}readPolygonBarriers(e){return m(e)}};Object(l.a)([Object(c.b)({aliasOf:"pointBarriers"})],g.prototype,"barriers",void 0),Object(l.a)([Object(c.b)({type:[f.a]})],g.prototype,"messages",void 0),Object(l.a)([Object(c.b)({type:[b.a]})],g.prototype,"pointBarriers",void 0),Object(l.a)([Object(u.a)("pointBarriers",["barriers","pointBarriers"])],g.prototype,"readPointBarriers",null),Object(l.a)([Object(c.b)({type:[b.a]})],g.prototype,"polylineBarriers",void 0),Object(l.a)([Object(u.a)("polylineBarriers")],g.prototype,"readPolylineBarriers",null),Object(l.a)([Object(c.b)({type:[b.a]})],g.prototype,"polygonBarriers",void 0),Object(l.a)([Object(u.a)("polygonBarriers")],g.prototype,"readPolygonBarriers",null),Object(l.a)([Object(c.b)({type:[j]})],g.prototype,"routeResults",void 0),g=Object(l.a)([Object(p.a)("esri.tasks.support.RouteResultsContainer")],g);var v=g;function T(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach((e=>{t.push(e.geometry)}))}function w(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function M(e){const t=[],r=[],{directions:s=[],routes:{features:o=[],spatialReference:a=null}={},stops:{features:i=[],spatialReference:n=null}={},barriers:l,polygonBarriers:c,polylineBarriers:u,messages:p}=e.data,y="esri.tasks.RouteTask.NULL_ROUTE_NAME";let b,d,f=!0;const h=o&&a||i&&n||l&&l.spatialReference||c&&c.spatialReference||u&&u.spatialReference;s.forEach((e=>{t.push(b=e.routeName),r[b]={directions:e}})),o.forEach((e=>{-1===t.indexOf(b=e.attributes.Name)&&(t.push(b),r[b]={}),e.geometry&&(e.geometry.spatialReference=h),r[b].route=e})),i.forEach((e=>{d=e.attributes,-1===t.indexOf(b=d.RouteName||y)&&(t.push(b),r[b]={}),b!==y&&(f=!1),e.geometry&&(e.geometry.spatialReference=h),null==r[b].stops&&(r[b].stops=[]),r[b].stops.push(e)})),i.length>0&&!0===f&&(r[t[0]].stops=r[y].stops,delete r[y],t.splice(t.indexOf(y),1));const O=t.map((e=>(r[e].routeName=e===y?null:e,r[e])));return v.fromJSON({routeResults:O,pointBarriers:l,polygonBarriers:c,polylineBarriers:u,messages:p})}function S(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(o.h)(e)&&e.hasZ)return!0}return!1}async function N(e){if(!e)throw new a.a("network-service:missing-url","Url to Network service is missing");const{data:t}=await Object(i.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(i.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new a.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await Object(i.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(i.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),o=Object(s.b)("helperServices.routingUtilities.url",r);if(!o)return{supportedTravelModes:[],defaultTravelMode:null};const a=Object(n.c)(e),l=/\/solve$/.test(a.path)?"Route":/\/solveClosestFacility$/.test(a.path)?"ClosestFacility":"ServiceAreas",c=await Object(i.default)(o+("/"===o[o.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:l}}),u=[];let p=null;if(c&&c.data&&c.data.results&&c.data.results.length){const e=c.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);u.push(t)}}else"defaultTravelMode"===t.paramName&&(p=t.value)}return{supportedTravelModes:u,defaultTravelMode:p}}(e),{defaultTravelMode:o,supportedTravelModes:l}=await r;return t.defaultTravelMode=o,t.supportedTravelModes=l,t}},65:function(e,t,r){"use strict";var s,o=r(14),a=(r(4),r(6)),i=r(0),n=(r(2),r(5),r(15)),l=r(18),c=(r(25),r(35),r(36),r(52)),u=r(63),p=r(59),y=r(79),b=r(81),d=r(96);let f=s=class extends c.a{constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:Object(d.a)(),configurable:!0})}normalizeCtorArgs(e,t,r,s){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:r,popupTemplate:s}}set attributes(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){return this.popupTemplate?this.popupTemplate:this.sourceLayer?"popupTemplate"in this.sourceLayer&&this.sourceLayer.popupTemplate?this.sourceLayer.popupTemplate:e&&"defaultPopupTemplate"in this.sourceLayer&&Object(i.h)(this.sourceLayer.defaultPopupTemplate)?this.sourceLayer.defaultPopupTemplate:null:null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const r=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",r,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{geometry:Object(i.h)(this.geometry)?this.geometry.toJSON():null,symbol:Object(i.h)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}clone(){return new s(this.cloneProperties())}cloneProperties(){return{attributes:Object(a.a)(this.attributes),geometry:Object(a.a)(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:Object(a.a)(this.symbol),visible:this.visible}}_notifyLayer(e,t,r,s){if(!this.layer||!("graphicChanged"in this.layer))return;const o={graphic:this,property:e,oldValue:t,newValue:r};"attributes"===e&&(o.attributeName=s),this.layer.graphicChanged(o)}};Object(o.a)([Object(n.b)({value:null})],f.prototype,"attributes",null),Object(o.a)([Object(n.b)({value:null,types:p.a,json:{read:u.a}})],f.prototype,"geometry",null),Object(o.a)([Object(n.b)({type:Boolean})],f.prototype,"isAggregate",void 0),Object(o.a)([Object(n.b)()],f.prototype,"layer",void 0),Object(o.a)([Object(n.b)({type:y.a})],f.prototype,"popupTemplate",void 0),Object(o.a)([Object(n.b)()],f.prototype,"sourceLayer",void 0),Object(o.a)([Object(n.b)({value:null,types:b.i})],f.prototype,"symbol",null),Object(o.a)([Object(n.b)({type:Boolean,value:!0})],f.prototype,"visible",null),f=s=Object(o.a)([Object(l.a)("esri.Graphic")],f),(f||(f={})).generateUID=d.a;var h=f;t.a=h},677:function(e,t,r){"use strict";r.r(t);var s=r(14),o=(r(4),r(2),r(5),r(15)),a=r(18),i=(r(25),r(35),r(36),r(168)),n=r(58),l=r(216),c=r(359),u=r(129),p=r(394),y=r(0),b=r(54),d=r(52),f=r(57),h=r(71),O=r(114),j=r(135),m=(r(59),r(65)),g=r(72),v=r(307),T=r(330);function w(e){return g.default.fromJSON(e).features.map((e=>e.geometry))}let M=class extends d.a{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return w(e)}readIncidents(e){return w(e)}readPointBarriers(e,t){return w(t.barriers)}readPolylineBarriers(e){return w(e)}readPolygonBarriers(e){return w(e)}readRoutes(e){return function(e){return e.features.map((t=>{const r=f.a.fromJSON(e.spatialReference),s=m.a.fromJSON(t);return Object(y.h)(s.geometry)&&(s.geometry.spatialReference=r),s}))}(e)}};Object(s.a)([Object(o.b)({type:[T.a]})],M.prototype,"directions",void 0),Object(s.a)([Object(o.b)({type:[h.a]})],M.prototype,"facilities",void 0),Object(s.a)([Object(b.a)("facilities")],M.prototype,"readFacilities",null),Object(s.a)([Object(o.b)({type:[h.a]})],M.prototype,"incidents",void 0),Object(s.a)([Object(b.a)("incidents")],M.prototype,"readIncidents",null),Object(s.a)([Object(o.b)({type:[v.a]})],M.prototype,"messages",void 0),Object(s.a)([Object(o.b)({type:[h.a]})],M.prototype,"pointBarriers",void 0),Object(s.a)([Object(b.a)("pointBarriers",["barriers"])],M.prototype,"readPointBarriers",null),Object(s.a)([Object(o.b)({type:[j.a]})],M.prototype,"polylineBarriers",void 0),Object(s.a)([Object(b.a)("polylineBarriers")],M.prototype,"readPolylineBarriers",null),Object(s.a)([Object(o.b)({type:[O.a]})],M.prototype,"polygonBarriers",void 0),Object(s.a)([Object(b.a)("polygonBarriers")],M.prototype,"readPolygonBarriers",null),Object(s.a)([Object(o.b)({type:[m.a]})],M.prototype,"routes",void 0),Object(s.a)([Object(b.a)("routes")],M.prototype,"readRoutes",null),M=Object(s.a)([Object(a.a)("esri.tasks.support.ClosestFacilitySolveResult")],M);var S=M;const N=Object(c.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});var B=r(360);let R=class extends(Object(B.a)(i.a)){constructor(e){super(e),this.url=null}solve(e,t){return async function(e,t,r){const s=[],o=[],a={},i={},c=Object(u.c)(e);return t.incidents&&t.incidents.features&&Object(p.a)(t.incidents.features,o,"incidents.features",a),t.facilities&&t.facilities.features&&Object(p.a)(t.facilities.features,o,"facilities.features",a),t.pointBarriers&&t.pointBarriers.features&&Object(p.a)(t.pointBarriers.features,o,"pointBarriers.features",a),t.polylineBarriers&&t.polylineBarriers.features&&Object(p.a)(t.polylineBarriers.features,o,"polylineBarriers.features",a),t.polygonBarriers&&t.polygonBarriers.features&&Object(p.a)(t.polygonBarriers.features,o,"polygonBarriers.features",a),Object(l.a)(o).then((e=>{for(const t in a){const r=a[t];s.push(t),i[t]=e.slice(r[0],r[1])}return Object(p.e)(i,s)?Object(p.c)(c.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||Object(p.b)(i,s);for(const e in i)i[e].forEach(((r,s)=>{t.get(e)[s].geometry=r}));let o={query:{...c.query,f:"json",...N.toQueryParams(t)}};return r&&(o={...r,...o}),Object(n.default)(c.path+"/solveClosestFacility",o)})).then((e=>S.fromJSON(e.data)))}(this.url,e,t)}};Object(s.a)([Object(o.b)()],R.prototype,"url",void 0),R=Object(s.a)([Object(a.a)("esri.tasks.ClosestFacilityTask")],R);var x=R;t.default=x},72:function(e,t,r){"use strict";r.r(t);var s=r(14),o=(r(4),r(0)),a=(r(2),r(5),r(15)),i=r(55),n=r(54),l=r(18),c=r(53),u=(r(25),r(35),r(36),r(52)),p=r(57),y=r(63),b=r(59),d=r(65),f=r(82);const h=new i.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let O=class extends u.a{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=p.a.fromJSON(t.spatialReference),s=[];for(let t=0;t<e.length;t++){const a=e[t],i=d.a.fromJSON(a),n=a.geometry&&a.geometry.spatialReference;Object(o.h)(i.geometry)&&!n&&(i.geometry.spatialReference=r),s.push(i)}return s}writeGeometryType(e,t,r,s){if(e)return void h.write(e,t,r,s);const{features:a}=this;if(a)for(const e of a)if(e&&Object(o.h)(e.geometry))return void h.write(e.geometry.type,t,r,s)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,s=Object(y.a)(e);return!r&&t.spatialReference&&(s.spatialReference=p.a.fromJSON(t.spatialReference)),s}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)e&&Object(o.h)(e.geometry)&&e.geometry.spatialReference&&(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const s=t.features[r];if(s.geometry){const t=e&&e[r];s.geometry=t&&t.toJSON()||s.geometry}}return t}quantize(e){const{scale:[t,r],translate:[s,a]}=e,i=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-s)/t)),(e=>Math.round((a-e)/r)));for(let e=0,t=i.length;e<t;e++)n(Object(o.n)(i[e].geometry))||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[s,a],scale:[i,n]}=r,l=this._getHydrationFunction(e,(e=>e*i+s),(e=>a-e*n));for(const{geometry:e}of t)Object(o.h)(e)&&l(e);return this.transform=null,this}_quantizePoints(e,t,r){let s,o;const a=[];for(let i=0,n=e.length;i<n;i++){const n=e[i];if(i>0){const e=t(n[0]),i=r(n[1]);e===s&&i===o||(a.push([e-s,i-o]),s=e,o=i)}else s=t(n[0]),o=r(n[1]),a.push([s,o])}return a.length>0?a:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const s=Object(y.g)(e)?e.rings:e.paths,o=[];for(let e=0,a=s.length;e<a;e++){const a=s[e],i=this._quantizePoints(a,t,r);i&&o.push(i)}return o.length>0?(Object(y.g)(e)?e.rings=o:e.paths=o,e):null}:"multipoint"===e?e=>{const s=this._quantizePoints(e.points,t,r);return s.length>0?(e.points=s,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const s=Object(y.g)(e)?e.rings:e.paths;let o,a;for(let e=0,i=s.length;e<i;e++){const i=s[e];for(let e=0,s=i.length;e<s;e++){const s=i[e];e>0?(o+=s[0],a+=s[1]):(o=s[0],a=s[1]),s[0]=t(o),s[1]=r(a)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const s=e.points;let o,a;for(let e=0,i=s.length;e<i;e++){const i=s[e];e>0?(o+=i[0],a+=i[1]):(o=i[0],a=i[1]),i[0]=t(o),i[1]=r(a)}}:void 0}};Object(s.a)([Object(a.b)({type:String,json:{write:!0}})],O.prototype,"displayFieldName",void 0),Object(s.a)([Object(a.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],O.prototype,"exceededTransferLimit",void 0),Object(s.a)([Object(a.b)({type:[d.a],json:{write:!0}})],O.prototype,"features",void 0),Object(s.a)([Object(n.a)("features")],O.prototype,"readFeatures",null),Object(s.a)([Object(a.b)({type:[f.a],json:{write:!0}})],O.prototype,"fields",void 0),Object(s.a)([Object(a.b)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],O.prototype,"geometryType",void 0),Object(s.a)([Object(c.a)("geometryType")],O.prototype,"writeGeometryType",null),Object(s.a)([Object(a.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],O.prototype,"hasM",void 0),Object(s.a)([Object(a.b)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],O.prototype,"hasZ",void 0),Object(s.a)([Object(a.b)({types:b.a,json:{write:!0}})],O.prototype,"queryGeometry",void 0),Object(s.a)([Object(n.a)("queryGeometry")],O.prototype,"readQueryGeometry",null),Object(s.a)([Object(a.b)({type:p.a,json:{write:!0}})],O.prototype,"spatialReference",void 0),Object(s.a)([Object(c.a)("spatialReference")],O.prototype,"writeSpatialReference",null),Object(s.a)([Object(a.b)({json:{write:!0}})],O.prototype,"transform",void 0),O=Object(s.a)([Object(l.a)("esri.tasks.support.FeatureSet")],O),O.prototype.toJSON.isDefaultToJSON=!0,O||(O={});var j=O;t.default=j},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));let s=0;function o(){return++s}}});