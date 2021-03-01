(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[7521,6194],{94588:(e,t,n)=>{"use strict";n.d(t,{Bg:()=>r,sM:()=>i});n(95830);function r(e){}function i(e){return()=>e}},91535:(e,t,n)=>{"use strict";n.d(t,{aX:()=>T,or:()=>z});var r=n(34926),i=n(59472),s=n(36544),o=n(32656),a=n(39105),l=n(27780),u=n(73032),c=n(41241),p=n(53817),f=n(93833),d=n(10923),y=n(56885),m=(n(36348),n(54721));async function h(e,t,n){const r="string"==typeof e?(0,d.mN)(e):e,i=t[0].spatialReference,s=(0,y.Ji)(t[0]),o={...n,query:{...r.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify((a=t,{geometryType:(0,y.Ji)(a[0]),geometries:a.map((e=>e.toJSON()))}))}};var a;return function(e,t,n){const r=(0,y.q9)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=n,t}))}((await(0,m.default)(r.path+"/simplify",o)).data,s,i)}const g=s.Z.getLogger("esri.geometry.support.normalizeUtils"),v={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new f.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator}),minus180Line:new f.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new f.Z({paths:[[[180,-180],[180,180]]],spatialReference:u.Z.WGS84}),minus180Line:new f.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:u.Z.WGS84})}};function b(e){return"polygon"===e.type}function x(e){return"polyline"===e[0].type}function w(e){return b(e)?e.rings:e.paths}function S(e,t){return Math.ceil((e-t)/(2*t))}function V(e,t){const n=w(e);for(const e of n)for(const n of e)n[0]+=t;return e}function C(e,t,n){if(t){const t=function(e,t){if(!(e instanceof f.Z||e instanceof p.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw g.error(e),new o.Z(e)}const n=w(e),r=[];for(const e of n){const n=[];r.push(n),n.push([e[0][0],e[0][1]]);for(let r=0;r<e.length-1;r++){const i=e[r][0],s=e[r][1],o=e[r+1][0],a=e[r+1][1],l=Math.sqrt((o-i)*(o-i)+(a-s)*(a-s)),u=(a-s)/l,c=(o-i)/l,p=l/t;if(p>1){for(let e=1;e<=p-1;e++){const r=e*t,o=c*r+i,a=u*r+s;n.push([o,a])}const e=(l+Math.floor(p-1)*t)/2,r=c*e+i,o=u*e+s;n.push([r,o])}n.push([o,a])}}return b(e)?new p.Z({rings:r,spatialReference:e.spatialReference}):new f.Z({paths:r,spatialReference:e.spatialReference})}(e,1e6);e=(0,c.Sx)(t,!0)}return n&&(e=V(e,n)),e}function F(e,t,n){if(Array.isArray(e)){const r=e[0];if(r>t){const n=S(r,t);e[0]=r+n*(-2*t)}else if(r<n){const t=S(r,n);e[0]=r+t*(-2*n)}}else{const r=e.x;if(r>t){const n=S(r,t);e=e.clone().offset(n*(-2*t),0)}else if(r<n){const t=S(r,n);e=e.clone().offset(t*(-2*n),0)}}return e}async function T(e,t,n){if(!Array.isArray(e))return T([e],t);const s=t?t.url:r.Z.geometryServiceUrl;let o,u,g,b,z,N,R,_,O=0;const q=[],M=[];for(const t of e)if((0,i.Wi)(t))M.push(t);else if(o||(o=t.spatialReference,u=(0,l.C5)(o),g=o.isWebMercator,N=g?102100:4326,b=v[N].maxX,z=v[N].minX,R=v[N].plus180Line,_=v[N].minus180Line),u)if("mesh"===t.type)M.push(t);else if("point"===t.type)M.push(F(t.clone(),b,z));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>F(e,b,z))),M.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,u);M.push(e.rings?new p.Z(e):e)}else if(t.extent){const e=t.extent,n=S(e.xmin,z)*(2*b);let r=0===n?t.clone():V(t.clone(),n);e.offset(n,0),e.intersects(R)&&e.xmax!==b?(O=e.xmax>O?e.xmax:O,r=C(r,g),q.push(r),M.push("cut")):e.intersects(_)&&e.xmin!==z?(O=e.xmax*(2*b)>O?e.xmax*(2*b):O,r=C(r,g,360),q.push(r),M.push("cut")):M.push(r)}else M.push(t.clone());else M.push(t);let k=S(O,b),E=-90;const D=k,J=new f.Z;for(;k>0;){const e=360*k-180;J.addPath([[e,E],[e,-1*E]]),E*=-1,k--}if(q.length>0&&D>0){const t=function(e,t){let n=-1;for(let r=0;r<t.cutIndexes.length;r++){const i=t.cutIndexes[r],s=t.geometries[r],o=w(s);for(let e=0;e<o.length;e++){const t=o[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const r=t[e][0];n=r>n?r:n}n=Number(n.toFixed(9));const r=-360*S(n,180);for(let n=0;n<t.length;n++){const t=s.getPoint(e,n);s.setPoint(e,n,t.clone().offset(r,0))}return!0}}))}if(i===n){if("polygon"===e[0].type)for(const t of w(s))e[i]=e[i].addRing(t);else if(x(e))for(const t of w(s))e[i]=e[i].addPath(t)}else n=i,e[i]=s}return e}(q,await async function(e,t,n,r){const i="string"==typeof e?(0,d.mN)(e):e,s=t[0].spatialReference,o={...r,query:{...i.query,f:"json",sr:JSON.stringify(s),target:JSON.stringify({geometryType:(0,y.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},a=await(0,m.default)(i.path+"/cut",o),{cutIndexes:l,geometries:u=[]}=a.data;return{cutIndexes:l,geometries:u.map((e=>{const t=(0,y.im)(e);return t.spatialReference=s,t}))}}(s,q,J,n)),r=[],o=[];for(let n=0;n<M.length;n++){const s=M[n];if("cut"!==s)o.push(s);else{const s=t.shift(),a=e[n];(0,i.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&s.rings.length>=a.rings.length?(r.push(s),o.push("simplify")):o.push(g?(0,c.$)(s):s)}}if(!r.length)return o;const a=await h(s,r,n),l=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?l.push(t):l.push(g?(0,c.$)(a.shift()):a.shift())}return l}const Z=[];for(let e=0;e<M.length;e++){const t=M[e];if("cut"!==t)Z.push(t);else{const e=q.shift();Z.push(!0===g?(0,c.$)(e):e)}}return(0,a.resolve)(Z)}function z(e,t){const n=(0,l.C5)(t);if(n){const[t,r]=n.valid,i=r-t;if(e<t)for(;e<t;)e+=i;if(e>r)for(;e>r;)e-=i}return e}},70834:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r,i=n(56140),s=(n(95830),n(36544),n(68055)),o=n(79881),a=n(56274),l=n(9870),u=n(30590),c=n(87566),p=(n(10923),n(57002),n(86035),n(58385)),f=n(6585),d=n(88210);const y=new a.Xn({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=r=class extends p.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?n.value:null}readValueType(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?y.fromJSON(n.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,i._)([(0,o.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,i._)([(0,o.Cb)()],m.prototype,"description",void 0),(0,i._)([(0,u.r)("description")],m.prototype,"readDescription",null),(0,i._)([(0,o.Cb)({types:f.V5,json:{read:{reader:f.im},write:!0}})],m.prototype,"domain",void 0),(0,i._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,i._)([(0,o.Cb)({type:s.z8,json:{write:!0}})],m.prototype,"length",void 0),(0,i._)([(0,o.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,i._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,i._)([(0,l.J)(d.v)],m.prototype,"type",void 0),(0,i._)([(0,o.Cb)()],m.prototype,"valueType",void 0),(0,i._)([(0,u.r)("valueType",["description"])],m.prototype,"readValueType",null),m=r=(0,i._)([(0,c.j)("esri.layers.support.Field")],m);const h=m},88210:(e,t,n)=>{"use strict";n.d(t,{v:()=>r});const r=new(n(56274).Xn)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},2961:(e,t,n)=>{"use strict";n.d(t,{a:()=>s});var r=n(49840),i=n(93533);const s={inches:(0,i.En)(1,"meters","inches"),feet:(0,i.En)(1,"meters","feet"),"us-feet":(0,i.En)(1,"meters","us-feet"),yards:(0,i.En)(1,"meters","yards"),miles:(0,i.En)(1,"meters","miles"),"nautical-miles":(0,i.En)(1,"meters","nautical-miles"),millimeters:(0,i.En)(1,"meters","millimeters"),centimeters:(0,i.En)(1,"meters","centimeters"),decimeters:(0,i.En)(1,"meters","decimeters"),meters:(0,i.En)(1,"meters","meters"),kilometers:(0,i.En)(1,"meters","kilometers"),"decimal-degrees":1/(0,i.ty)(1,"meters",r.sv.radius)}},95005:(e,t,n)=>{"use strict";function r(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function i(e){return null!=e&&!isNaN(e)&&isFinite(e)}function s(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function o(e,t){const n=t||s(e),r=e.valueUnit||"unknown";return"unknown"===n?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===r?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}n.d(t,{PS:()=>s,QW:()=>o,iY:()=>r,qh:()=>i})},5328:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getAllSizes:()=>C,getColor:()=>y,getOpacity:()=>m,getRotationAngle:()=>h,getSize:()=>g,getSizeForValue:()=>x,getSizeFromNumberOrVariable:()=>v,getSizeRangeAtScale:()=>w,getVisualVariableValues:()=>S,viewScaleRE:()=>d});var r=n(94588),i=n(59472),s=n(36544),o=n(78745),a=n(15988),l=n(2961),u=n(95005);const c=s.Z.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),p=new a.default,f=Math.PI,d=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function y(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.ColorVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const s="number"==typeof t,a=s?null:t,l=a&&a.attributes;let u=s?t:null;const p=r.field,{ipData:f,hasExpression:d}=r.cache;let y=r.cache.compiledFunc;if(!p&&!d){const e=r.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(d){if(!(0,i.pC)(n)||!(0,i.pC)(n.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},t=n.arcade.arcadeUtils,s=t.getViewInfo(e),o=t.createExecContext(a,s);if(!y){const e=t.createSyntaxTree(r.valueExpression);y=t.createFunction(e),r.cache.compiledFunc=y}u=t.executeFunction(y,o)}else l&&(u=l[p]);const m=r.normalizationField,h=l?parseFloat(l[m]):void 0;if(null!=u&&(!m||s||!isNaN(h)&&0!==h)){isNaN(h)||s||(u/=h);const e=V(u,f);if(e){const t=e[0],s=e[1],a=t===s?r.stops[t].color:o.default.blendColors(r.stops[t].color,r.stops[s].color,e[2],(0,i.pC)(n)?n.color:void 0);return new o.default(a)}}}function m(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.OpacityVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const s="number"==typeof t,o=s?null:t,a=o&&o.attributes;let l=s?t:null;const u=r.field,{ipData:p,hasExpression:f}=r.cache;let d=r.cache.compiledFunc;if(!u&&!f){const e=r.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(f){if((0,i.Wi)(n)||(0,i.Wi)(n.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},t=n.arcade.arcadeUtils,s=t.getViewInfo(e),a=t.createExecContext(o,s);if(!d){const e=t.createSyntaxTree(r.valueExpression);d=t.createFunction(e),r.cache.compiledFunc=d}l=t.executeFunction(d,a)}else a&&(l=a[u]);const y=r.normalizationField,m=a?parseFloat(a[y]):void 0;if(null!=l&&(!y||s||!isNaN(m)&&0!==m)){isNaN(m)||s||(l/=m);const e=V(l,p);if(e){const t=e[0],n=e[1];if(t===n)return r.stops[t].opacity;{const i=r.stops[t].opacity;return i+(r.stops[n].opacity-i)*e[2]}}}}function h(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.RotationVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const s=r.axis||"heading",o="heading"===s&&"arithmetic"===r.rotationType?90:0,a="heading"===s&&"arithmetic"===r.rotationType?-1:1,l="number"==typeof t?null:t,u=l&&l.attributes,p=r.field,{hasExpression:f}=r.cache;let d=r.cache.compiledFunc,y=0;if(!p&&!f)return y;if(f){if((0,i.Wi)(n)||(0,i.Wi)(n.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},t=n.arcade.arcadeUtils,s=t.getViewInfo(e),o=t.createExecContext(l,s);if(!d){const e=t.createSyntaxTree(r.valueExpression);d=t.createFunction(e),r.cache.compiledFunc=d}y=t.executeFunction(d,o)}else u&&(y=u[p]||0);return y="number"!=typeof y||isNaN(y)?null:o+a*y,y}function g(e,t,n){const r="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!r)return;if("esri.renderers.visualVariables.SizeVariable"!==r.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const s=x(function(e,t,n){const r="number"==typeof t,s=r?null:t,o=s&&s.attributes;let a=r?t:null;const{isScaleDriven:l}=e.cache;let p=e.cache.compiledFunc;if(l){const t=(0,i.pC)(n)?n.scale:void 0,r=(0,i.pC)(n)?n.view:void 0;a=null==t||"3d"===r?function(e){let t=null,n=null;const r=e.stops;return r?(t=r[0].value,n=r[r.length-1].value):(t=e.minDataValue||0,n=e.maxDataValue||0),(t+n)/2}(e):t}else if(!r)switch(e.inputValueType){case"expression":{if((0,i.Wi)(n)||(0,i.Wi)(n.arcade))return void c.error("Use of arcade expressions requires an arcade context");const t={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},r=n.arcade.arcadeUtils,o=r.getViewInfo(t),l=r.createExecContext(s,o);if(!p){const t=r.createSyntaxTree(e.valueExpression);p=r.createFunction(t),e.cache.compiledFunc=p}a=r.executeFunction(p,l);break}case"field":o&&(a=o[e.field]);break;case"unknown":a=null}if(!(0,u.qh)(a))return null;if(r||!e.normalizationField)return a;const f=o?parseFloat(o[e.normalizationField]):null;return(0,u.qh)(f)&&0!==f?a/f:null}(r,t,n),r,t,n,r.cache.ipData);return null==s||isNaN(s)?0:s}function v(e,t,n){return null==e?null:(0,u.iY)(e)?g(e,t,n):(0,u.qh)(e)?e:null}function b(e,t,n){return(0,u.qh)(n)&&e>n?n:(0,u.qh)(t)&&e<t?t:e}function x(e,t,n,r,s){switch(t.transformationType){case"additive":return function(e,t,n,r){return e+(v(t.minSize,n,r)||t.minDataValue)}(e,t,n,r);case"constant":return function(e,t,n){const r=e.stops;let i=r&&r.length&&r[0].size;return null==i&&(i=e.minSize),v(i,t,n)}(t,n,r);case"clamped-linear":return function(e,t,n,r){const s=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),o=v(t.minSize,n,r),a=v(t.maxSize,n,r),l=(0,i.pC)(r)?r.shape:void 0;if(e<=t.minDataValue)return o;if(e>=t.maxDataValue)return a;if("area"===t.scaleBy&&l){const e="circle"===l,t=e?f*Math.pow(o/2,2):o*o,n=t+s*((e?f*Math.pow(a/2,2):a*a)-t);return e?2*Math.sqrt(n/f):Math.sqrt(n)}return o+s*(a-o)}(e,t,n,r);case"proportional":return function(e,t,n,r){const s=(0,i.pC)(r)?r.shape:void 0,o=e/t.minDataValue,a=v(t.minSize,n,r),l=v(t.maxSize,n,r);let u=null;return u="circle"===s?2*Math.sqrt(o*Math.pow(a/2,2)):"square"===s||"diamond"===s||"image"===s?Math.sqrt(o*Math.pow(a,2)):o*a,b(u,a,l)}(e,t,n,r);case"stops":return function(e,t,n,r,i){const[s,o,a]=V(e,i);if(s===o)return v(t.stops[s].size,n,r);{const e=v(t.stops[s].size,n,r);return e+(v(t.stops[o].size,n,r)-e)*a}}(e,t,n,r,s);case"real-world-size":return function(e,t,n,r){const s=((0,i.pC)(r)&&r.resolution?r.resolution:1)*l.a[t.valueUnit],o=v(t.minSize,n,r),a=v(t.maxSize,n,r),{valueRepresentation:u}=t;let c=null;return c="area"===u?2*Math.sqrt(e/f)/s:"radius"===u||"distance"===u?2*e/s:e/s,b(c,o,a)}(e,t,n,r);case"identity":return e;case"unknown":return null}}function w(e,t,n){const{isScaleDriven:r}=e.cache;if(!(r&&"3d"===n||t))return null;const i={scale:t,view:n};let s=v(e.minSize,p,i),o=v(e.maxSize,p,i);if(null!=s||null!=o){if(s>o){const e=o;o=s,s=e}return{minSize:s,maxSize:o}}}function S(e,t,n){if(!e.visualVariables)return;const r=[],i=[],s=[],o=[],a=[];for(const t of e.visualVariables)switch(t.type){case"color":i.push(t);break;case"opacity":s.push(t);break;case"rotation":a.push(t);break;case"size":o.push(t)}return i.forEach((e=>{const i=y(e,t,n);r.push({variable:e,value:i})})),s.forEach((e=>{const i=m(e,t,n);r.push({variable:e,value:i})})),a.forEach((e=>{const i=h(e,t,n);r.push({variable:e,value:i})})),o.forEach((e=>{const i=g(e,t,n);r.push({variable:e,value:i})})),r.filter((e=>null!=e.value))}function V(e,t){if(!t)return;let n=0,r=t.length-1;return t.some(((t,i)=>e<t?(r=i,!0):(n=i,!1))),[n,r,(e-t[n])/(t[r]-t[n])]}function C(e,t,n){const i=["proportional","proportional","proportional"];for(const s of e){const e=s.useSymbolValue?"symbol-value":g(s,t,n);switch(s.axis){case"width":i[0]=e;break;case"depth":i[1]=e;break;case"height":i[2]=e;break;case"width-and-depth":i[0]=e,i[1]=e;break;case"all":case void 0:case null:i[0]=e,i[1]=e,i[2]=e;break;default:(0,r.Bg)(s.axis)}}return i}},95986:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(56140),i=(n(95830),n(36544),n(68055),n(79881)),s=n(87566),o=n(10923),a=(n(57002),n(86035),n(82677));let l=class extends a.default{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,o.mN)(e):null}_encode(e,t,n){const r={};for(const i in e){if("declaredClass"===i)continue;const s=e[i];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){r[i]=[];for(let e=0;e<s.length;e++)r[i][e]=this._encode(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(n&&n[i]);r[i]=t?e:JSON.stringify(e)}else r[i]=t?s:JSON.stringify(s);else r[i]=s}return r}};(0,r._)([(0,i.Cb)({readOnly:!0,dependsOn:["url"]})],l.prototype,"parsedUrl",null),(0,r._)([(0,i.Cb)()],l.prototype,"requestOptions",void 0),(0,r._)([(0,i.Cb)({type:String})],l.prototype,"url",void 0),l=(0,r._)([(0,s.j)("esri.tasks.Task")],l);const u=l},76194:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(56140),i=(n(95830),n(59472)),s=(n(36544),n(68055),n(79881)),o=n(56274),a=n(30590),l=n(87566),u=n(60538),c=(n(10923),n(57002),n(86035),n(58385)),p=n(73032),f=n(56885),d=n(36348),y=n(15988),m=n(70834);const h=new o.Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let g=class extends c.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const n=p.Z.fromJSON(t.spatialReference),r=[];for(let t=0;t<e.length;t++){const s=e[t],o=y.default.fromJSON(s),a=s.geometry&&s.geometry.spatialReference;(0,i.pC)(o.geometry)&&!a&&(o.geometry.spatialReference=n),r.push(o)}return r}writeGeometryType(e,t,n,r){if(e)return void h.write(e,t,n,r);const{features:s}=this;if(s)for(const e of s)if(e&&(0,i.pC)(e.geometry))return void h.write(e.geometry.type,t,n,r)}readQueryGeometry(e,t){if(!e)return null;const n=!!e.spatialReference,r=(0,f.im)(e);return!n&&t.spatialReference&&(r.spatialReference=p.Z.fromJSON(t.spatialReference)),r}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:n}=this;if(n)for(const e of n)e&&(0,i.pC)(e.geometry)&&e.geometry.spatialReference&&(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let n=0;n<t.features.length;n++){const r=t.features[n];if(r.geometry){const t=e&&e[n];r.geometry=t&&t.toJSON()||r.geometry}}return t}quantize(e){const{scale:[t,n],translate:[r,s]}=e,o=this.features,a=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-r)/t)),(e=>Math.round((s-e)/n)));for(let e=0,t=o.length;e<t;e++)a((0,i.Wg)(o[e].geometry))||(o.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:n}=this;if(!n)return this;const{translate:[r,s],scale:[o,a]}=n,l=this._getHydrationFunction(e,(e=>e*o+r),(e=>s-e*a));for(const{geometry:e}of t)(0,i.pC)(e)&&l(e);return this.transform=null,this}_quantizePoints(e,t,n){let r,i;const s=[];for(let o=0,a=e.length;o<a;o++){const a=e[o];if(o>0){const e=t(a[0]),o=n(a[1]);e===r&&o===i||(s.push([e-r,o-i]),r=e,i=o)}else r=t(a[0]),i=n(a[1]),s.push([r,i])}return s.length>0?s:null}_getQuantizationFunction(e,t,n){return"point"===e?e=>(e.x=t(e.x),e.y=n(e.y),e):"polyline"===e||"polygon"===e?e=>{const r=(0,f.oU)(e)?e.rings:e.paths,i=[];for(let e=0,s=r.length;e<s;e++){const s=r[e],o=this._quantizePoints(s,t,n);o&&i.push(o)}return i.length>0?((0,f.oU)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{let r;return r=this._quantizePoints(e.points,t,n),r.length>0?(e.points=r,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,n){return"point"===e?e=>{e.x=t(e.x),e.y=n(e.y)}:"polyline"===e||"polygon"===e?e=>{const r=(0,f.oU)(e)?e.rings:e.paths;let i,s;for(let e=0,o=r.length;e<o;e++){const o=r[e];for(let e=0,r=o.length;e<r;e++){const r=o[e];e>0?(i+=r[0],s+=r[1]):(i=r[0],s=r[1]),r[0]=t(i),r[1]=n(s)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=n(e.ymin),e.xmax=t(e.xmax),e.ymax=n(e.ymax)}:"multipoint"===e?e=>{const r=e.points;let i,s;for(let e=0,o=r.length;e<o;e++){const o=r[e];e>0?(i+=o[0],s+=o[1]):(i=o[0],s=o[1]),o[0]=t(i),o[1]=n(s)}}:void 0}};(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],g.prototype,"displayFieldName",void 0),(0,r._)([(0,s.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"exceededTransferLimit",void 0),(0,r._)([(0,s.Cb)({type:[y.default],json:{write:!0}})],g.prototype,"features",void 0),(0,r._)([(0,a.r)("features")],g.prototype,"readFeatures",null),(0,r._)([(0,s.Cb)({type:[m.Z],json:{write:!0}})],g.prototype,"fields",void 0),(0,r._)([(0,s.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],g.prototype,"geometryType",void 0),(0,r._)([(0,u.c)("geometryType")],g.prototype,"writeGeometryType",null),(0,r._)([(0,s.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasM",void 0),(0,r._)([(0,s.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasZ",void 0),(0,r._)([(0,s.Cb)({types:d.qM,json:{write:!0}})],g.prototype,"queryGeometry",void 0),(0,r._)([(0,a.r)("queryGeometry")],g.prototype,"readQueryGeometry",null),(0,r._)([(0,s.Cb)({type:p.Z,json:{write:!0}})],g.prototype,"spatialReference",void 0),(0,r._)([(0,u.c)("spatialReference")],g.prototype,"writeSpatialReference",null),(0,r._)([(0,s.Cb)({json:{write:!0}})],g.prototype,"transform",void 0),g=(0,r._)([(0,l.j)("esri.tasks.support.FeatureSet")],g),g.prototype.toJSON.isDefaultToJSON=!0,g||(g={});const v=g}}]);
//# sourceMappingURL=7521.js.map