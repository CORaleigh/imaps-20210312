(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[8650],{58807:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(56140),s=(n(95830),n(36544),n(68055),n(79881)),a=n(87566),i=(n(10923),n(57002),n(86035),n(82677)),l=n(59691),o=n(18152),u=n(48609);const c={visible:"visibleSublayers"},d=[102100,3857,102113,900913],p=[3395,54004];let h=class extends i.default{constructor(){super(...arguments),this._layerHandles=new l.Z,this.extent=null,this._scale=null,this.view=null}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new l.Z),this._layerHandles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(c[e.propertyName])))])))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){return(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,{sublayers:n}=e,r=[],s=e=>{const{minScale:n,maxScale:a,sublayers:i,visible:l}=e;l&&(0===t||(0===n||t<=n)&&(0===a||t>=a))&&(i?i.forEach(s):r.unshift(e))};return null==n||n.forEach(s),r}get wkid(){const{extent:e,layer:t}=this,n=t.spatialReferences;let r=e.spatialReference&&e.spatialReference.wkid;n&&-1===n.indexOf(r)&&e.spatialReference.latestWkid&&(r=e.spatialReference.latestWkid);const s=d.some((e=>e===r));if(!n)return r;if(s){const e=[];n.forEach((t=>{d.indexOf(t)>-1&&e.push(t)})),e.length||n.forEach((t=>{p.indexOf(t)>-1&&e.push(t)})),r=e.length>0?e[0]:d[0]}return r}toJSON(){const{extent:e,layer:t,layers:n}=this,{imageFormat:r,imageTransparency:s,spatialReferences:a,version:i}=t;let{wkid:l}=this;a&&-1===a.indexOf(l)&&e.spatialReference.latestWkid&&(l=e.spatialReference.latestWkid);const{xmin:o,ymin:c,xmax:d,ymax:p}=e,h={bbox:"1.3.0"===t.version&&(0,u.QZ)(l)?`${c},${o},${p},${d}`:`${o},${c},${d},${p}`,format:r,request:"GetMap",service:"WMS",styles:"",transparent:s,version:i};return isNaN(l)||("1.3.0"===i?h.crs="EPSG:"+l:h.srs="EPSG:"+l),{...h,layers:n}}};(0,r._)([(0,s.Cb)()],h.prototype,"extent",void 0),(0,r._)([(0,s.Cb)()],h.prototype,"layer",null),(0,r._)([(0,s.Cb)({readOnly:!0,dependsOn:["visibleSublayers"]})],h.prototype,"layers",null),(0,r._)([(0,s.Cb)({type:Number,dependsOn:["view.scale"]})],h.prototype,"scale",null),(0,r._)([(0,s.Cb)(o.qG)],h.prototype,"timeExtent",void 0),(0,r._)([(0,s.Cb)({type:Number,dependsOn:["layers","layer.imageTransparency","timeExtent"],readOnly:!0})],h.prototype,"version",null),(0,r._)([(0,s.Cb)()],h.prototype,"view",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],h.prototype,"visibleSublayers",null),(0,r._)([(0,s.Cb)({dependsOn:[],autoTracked:!1})],h.prototype,"wkid",null),h=(0,r._)([(0,a.j)("esri.layers.support.ExportWMSImageParameters")],h);const m=h},48609:(e,t,n)=>{"use strict";n.d(t,{QZ:()=>c,xX:()=>d,V4:()=>u,Y6:()=>I});var r=n(32656),s=n(10923),a=n(73032),i=n(52937);const l=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],o={84:4326,83:4269,27:4267};function u(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const n=e.documentElement;if("ServiceExceptionReport"===n.nodeName){const e=Array.prototype.slice.call(n.childNodes).map((e=>e.textContent)).join("\r\n");throw new r.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const s=m("Capability",n),a=m("Service",n),l=m("Request",s);if(!s||!a||!l)return null;const o=m("Layer",s);if(!o)return null;const u="WMS_Capabilities"===n.nodeName||"WMT_MS_Capabilities"===n.nodeName?n.getAttribute("version"):"1.3.0",c=y("Title",a,"")||y("Name",a,""),d=y("AccessConstraints",a,""),h=y("Abstract",a,""),f=parseInt(y("MaxWidth",a,"5000"),10),x=parseInt(y("MaxHeight",a,"5000"),10),N=b(l,"GetMap"),v=g(l,"GetMap"),S=w(o,u,t);let E,C,M,A,I=0;if(Array.prototype.slice.call(s.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===I?E=e:1===I?(S.name&&(S.name="",S.sublayers.push(w(E,u,t))),S.sublayers.push(w(e,u,t))):S.sublayers.push(w(e,u,t)),I++)})),!S)return null;const O=S.fullExtents;if(C=S.sublayers,C||(C=[]),0===C.length&&C.push(S),M=S.extent,!M){const e=new i.Z(C[0].extent);S.extent=e.toJSON(),M=S.extent}if(A=S.spatialReferences,!A.length&&C.length>0){const e=t=>{let n=[];return t.sublayers.forEach((t=>{!n.length&&t.spatialReferences.length&&(n=t.spatialReferences||e(t))})),n};C.forEach((t=>{A.length||(A=t.spatialReferences||e(t))}))}const F=g(l,"GetFeatureInfo");let R;if(F){const e=b(l,"GetFeatureInfo");e.indexOf("text/html")>-1?R="text/html":e.indexOf("text/plain")>-1&&(R="text/plain")}if(!R){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(S)}const L=p(C),T=S.minScale||0,W=S.maxScale||0,V=S.dimensions,P=L.reduce(((e,t)=>e.concat(t.dimensions)),[]),Z=V.concat(P).filter(_);let k=null;if(Z.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;Z.forEach((n=>{const{extent:r}=n;var s;s=r,Array.isArray(s)&&s.length>0&&s[0]instanceof Date?r.forEach((n=>{e=Math.min(e,n.getTime()),t=Math.max(t,n.getTime())})):r.forEach((n=>{e=Math.min(e,n.min.getTime()),t=Math.max(t,n.max.getTime())}))})),k={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:d,description:h,dimensions:V,extent:M,fullExtents:O,featureInfoFormat:R,featureInfoUrl:F,mapUrl:v,maxWidth:f,maxHeight:x,maxScale:W,minScale:T,layers:L,spatialReferences:A,supportedImageFormatTypes:N,timeInfo:k,title:c,version:u}}function c(e){return l.some((t=>{const n=t[0],r=t[1];return e>=n&&e<=r}))}function d(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}function p(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(p(e.sublayers)),delete e.sublayers)})),t}function h(e,t,n){var r;return null!=(r=t.getAttribute(e))?r:n}function m(e,t){for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];if(v(r)&&r.nodeName===e)return r}return null}function f(e,t){const n=[];for(let r=0;r<t.childNodes.length;r++){const s=t.childNodes[r];v(s)&&s.nodeName===e&&n.push(s)}return n}function y(e,t,n){const r=m(e,t);return r?r.textContent:n}function x(e,t,n){if(!e)return null;const r=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let u,c,d,p;n?(u=isNaN(s)?-Number.MAX_VALUE:s,c=isNaN(r)?-Number.MAX_VALUE:r,d=isNaN(o)?Number.MAX_VALUE:o,p=isNaN(l)?Number.MAX_VALUE:l):(u=isNaN(r)?-Number.MAX_VALUE:r,c=isNaN(s)?-Number.MAX_VALUE:s,d=isNaN(l)?Number.MAX_VALUE:l,p=isNaN(o)?Number.MAX_VALUE:o);const h=new a.Z({wkid:t});return new i.Z({xmin:u,ymin:c,xmax:d,ymax:p,spatialReference:h})}function g(e,t){const n=m(t,e);if(n){const e=m("DCPType",n);if(e){const t=m("HTTP",e);if(t){const e=m("Get",t);if(e){let t=function(e,t,n,r){const s=m("OnlineResource",n);return s?h("xlink:href",s,null):null}(0,0,e);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const n=[],r=(0,s.mN)(e);for(const e in r.query)r.query.hasOwnProperty(e)&&-1===t.indexOf(e.toLowerCase())&&n.push(e+"="+r.query[e]);return r.path+(n.length?"?"+n.join("&"):"")}(t,["service","request"])}}}}return null}function b(e,t){const n=f("Operation",e);if(0===n.length)return f("Format",m(t,e)).map((e=>e.textContent));const r=[];return n.forEach((e=>{e.getAttribute("name")===t&&f("Format",e).forEach((e=>{r.push(e.textContent)}))})),r}function N(e,t,n){const r=m(t,e);if(!r)return n;const{textContent:s}=r;if(null==s||""===s)return n;const a=Number(s);return isNaN(a)?n:a}function w(e,t,n){var r;if(!e)return null;const s={id:n.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},l=m("LatLonBoundingBox",e),u=m("EX_GeographicBoundingBox",e);let d=null;l&&(d=x(l,4326)),u&&(d=new i.Z(0,0,0,0,new a.Z({wkid:4326})),d.xmin=parseFloat(y("westBoundLongitude",u,"0")),d.ymin=parseFloat(y("southBoundLatitude",u,"0")),d.xmax=parseFloat(y("eastBoundLongitude",u,"0")),d.ymax=parseFloat(y("northBoundLatitude",u,"0"))),l||u||(d=new i.Z(-180,-90,180,90,new a.Z({wkid:4326}))),s.minScale=N(e,"MaxScaleDenominator",0),s.maxScale=N(e,"MinScaleDenominator",0);const p=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)s.name=e.textContent||"";else if("Title"===e.nodeName)s.title=e.textContent||"";else if("Abstract"===e.nodeName)s.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const n=e.getAttribute(p);if(n&&0===n.indexOf("EPSG:")){const r=parseInt(n.substring(5),10);0===r||isNaN(r)||d||(d="1.3.0"===t?x(e,r,c(r)):x(e,r))}const r=n&&n.indexOf(":");if(r&&r>-1){let a=parseInt(n.substring(r+1,n.length),10);0===a||isNaN(a)||(a=o[a]?o[a]:a);const i="1.3.0"===t?x(e,a,c(a)):x(e,a);s.fullExtents.push(i)}}else if(e.nodeName===p)e.textContent.split(" ").forEach((e=>{0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(o[e]&&(e=o[e]),-1===s.spatialReferences.indexOf(e)&&s.spatialReferences.push(e))}));else if("Style"!==e.nodeName||s.legendURL){if("Layer"===e.nodeName){const r=w(e,t,n);r&&(r.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(r))}}else{const t=m("LegendURL",e);if(t){const e=m("OnlineResource",t);e&&(s.legendURL=e.getAttribute("xlink:href"))}}})),s.extent=null==(r=d)?void 0:r.toJSON(),s.dimensions=f("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),n=e.getAttribute("units"),r=e.textContent,s=e.getAttribute("unitSymbol"),a=e.getAttribute("default"),i="0"!==h("default",e,"0"),l="0"!==h("nearestValue",e,"0"),o="0"!==h("current",e,"0");return/^time$/i.test(t)&&/^ISO8601$/i.test(n)?{name:"time",units:"ISO8601",extent:C(r),default:C(a),multipleValues:i,nearestValue:l,current:o}:/^elevation$/i.test(t)?{name:"elevation",units:n,extent:S(r),unitSymbol:s,default:S(a),multipleValues:i,nearestValue:l}:{name:t,units:n,extent:E(r),unitSymbol:s,default:E(a),multipleValues:i,nearestValue:l}})),s}function v(e){return e.nodeType===Node.ELEMENT_NODE}function _(e){return"time"===e.name}function S(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):n.map((e=>parseFloat(e)))}function E(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):n}function C(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?M(t[2]):void 0}})).filter((e=>e)):n.map((e=>new Date(e)))}function M(e){const t=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return t?{years:A(t[1]),months:A(t[2]),days:A(t[3]),hours:A(t[4]),minutes:A(t[5]),seconds:A(t[6])}:null}function A(e){if(!e)return 0;const t=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!t)return 0;const n=t[0].replace(",",".");return Number(n)}function I(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}},18650:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(56140),s=(n(95830),n(36544)),a=(n(68055),n(79881)),i=n(87566),l=n(32656),o=(n(10923),n(57002),n(86035),n(39105)),u=n(52937),c=n(12421),d=n(58807),p=n(48164);const h=e=>{let t=class extends e{async fetchPopupFeatures(e){const{layer:t}=this;if(!e)return(0,o.d1)(new l.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:n}=t;if(!n)return(0,o.d1)(new l.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}));const r=this.createFetchPopupFeaturesQuery(e),{extent:s,width:a,height:i,x:u,y:c}=r;if(!(s&&a&&i))throw new l.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:a,height:i});const d=t.fetchFeatureInfo(s,a,i,u,c);return d?d.then((e=>[e])):(0,o.DB)([])}};return(0,r._)([(0,a.Cb)()],t.prototype,"layer",void 0),t=(0,r._)([(0,i.j)("esri.layers.mixins.WMSLayerView")],t),t};var m=n(28511),f=n(81558),y=n(81186);const x=s.Z.getLogger("esri.views.2d.layers.WMSLayerView2D");let g=class extends(h((0,c.y)((0,f.y)(p.Z)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise((0,o.d1)(new l.Z("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{(0,o.D_)(e)||x.error(e)}))}attach(){const{layer:e,view:t}=this,{imageMaxHeight:n,imageMaxWidth:r}=e;this._bitmapContainer=new m.c,this.container.addChild(this._bitmapContainer),this.strategy=new y.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:n,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new d.Z({layer:e,view:t}),this.handles.add(this._exportWMSImageParameters.watch("version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),"wms")}detach(){this.handles.remove("wms"),this.strategy.destroy(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,n=this._bitmapContainer,{x:r,y:s}=e,{spatialReference:a}=t;let i=null,l=0,o=0;n.children.some((e=>{const{width:t,height:n,resolution:c,x:d,y:p}=e,h=d+c*t,m=p-c*n;return r>=d&&r<=h&&s<=p&&s>=m&&(i=new u.Z({xmin:d,ymin:m,xmax:h,ymax:p,spatialReference:a}),l=t,o=n,!0)}));const c=i.width/l,d=Math.round((r-i.xmin)/c),p=Math.round((i.ymax-s)/c);return{extent:i,width:l,height:o,x:d,y:p}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,n,r){return this.layer.fetchImage(e,t,n,{timeExtent:this._exportWMSImageParameters.timeExtent,timestamp:this.refreshTimestamp,...r})}};(0,r._)([(0,a.Cb)()],g.prototype,"strategy",void 0),(0,r._)([(0,a.Cb)({dependsOn:["strategy.updating"]})],g.prototype,"updating",void 0),g=(0,r._)([(0,i.j)("esri.views.2d.layers.WMSLayerView2D")],g);const b=g}}]);
//# sourceMappingURL=8650.js.map