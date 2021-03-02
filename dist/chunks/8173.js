(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[8173],{91535:(e,t,r)=>{"use strict";r.d(t,{aX:()=>R,or:()=>q});var s=r(34926),n=r(59472),o=r(36544),i=r(32656),a=r(27780),l=r(41241),u=r(53817),c=r(93833),h=r(49573),d=r(10923),f=r(56885),y=(r(36348),r(36654));async function p(e,t,r){const s="string"==typeof e?(0,d.mN)(e):e,n=t[0].spatialReference,o=(0,f.Ji)(t[0]),i={...r,query:{...s.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify(m(t))}};return function(e,t,r){const s=(0,f.q9)(t);return e.map((e=>{const t=s.fromJSON(e);return t.spatialReference=r,t}))}((await(0,y.default)(s.path+"/simplify",i)).data,o,n)}function m(e){return{geometryType:(0,f.Ji)(e[0]),geometries:e.map((e=>e.toJSON()))}}const g=o.Z.getLogger("esri.geometry.support.normalizeUtils");function b(e){return"polygon"===e[0].type}function I(e){return"polyline"===e[0].type}function w(e,t,r){if(t){const t=function(e,t){if(!(e instanceof c.Z||e instanceof u.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw g.error(e),new i.Z(e)}const r=(0,h.x3)(e),s=[];for(const e of r){const r=[];s.push(r),r.push([e[0][0],e[0][1]]);for(let s=0;s<e.length-1;s++){const n=e[s][0],o=e[s][1],i=e[s+1][0],a=e[s+1][1],l=Math.sqrt((i-n)*(i-n)+(a-o)*(a-o)),u=(a-o)/l,c=(i-n)/l,h=l/t;if(h>1){for(let e=1;e<=h-1;e++){const s=e*t,i=c*s+n,a=u*s+o;r.push([i,a])}const e=(l+Math.floor(h-1)*t)/2,s=c*e+n,i=u*e+o;r.push([s,i])}r.push([i,a])}}return function(e){return"polygon"===e.type}(e)?new u.Z({rings:s,spatialReference:e.spatialReference}):new c.Z({paths:s,spatialReference:e.spatialReference})}(e,1e6);e=(0,l.Sx)(t,!0)}return r&&(e=(0,h.Sy)(e,r)),e}function F(e,t,r){if(Array.isArray(e)){const s=e[0];if(s>t){const r=(0,h.XZ)(s,t);e[0]=s+r*(-2*t)}else if(s<r){const t=(0,h.XZ)(s,r);e[0]=s+t*(-2*r)}}else{const s=e.x;if(s>t){const r=(0,h.XZ)(s,t);e=e.clone().offset(r*(-2*t),0)}else if(s<r){const t=(0,h.XZ)(s,r);e=e.clone().offset(t*(-2*r),0)}}return e}function Z(e,t){let r=-1;for(let s=0;s<t.cutIndexes.length;s++){const n=t.cutIndexes[s],o=t.geometries[s],i=(0,h.x3)(o);for(let e=0;e<i.length;e++){const t=i[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const s=t[e][0];r=s>r?s:r}r=Number(r.toFixed(9));const s=-360*(0,h.XZ)(r,180);for(let r=0;r<t.length;r++){const t=o.getPoint(e,r);o.setPoint(e,r,t.clone().offset(s,0))}return!0}}))}if(n===r){if(b(e))for(const t of(0,h.x3)(o))e[n]=e[n].addRing(t);else if(I(e))for(const t of(0,h.x3)(o))e[n]=e[n].addPath(t)}else r=n,e[n]=o}return e}async function R(e,t,r){if(!Array.isArray(e))return R([e],t);const o=t?t.url:s.default.geometryServiceUrl;let i,m,g,b,I,q,x,N,_=0;const T=[],S=[];for(const t of e)if((0,n.Wi)(t))S.push(t);else if(i||(i=t.spatialReference,m=(0,a.C5)(i),g=i.isWebMercator,q=g?102100:4326,b=h.UZ[q].maxX,I=h.UZ[q].minX,x=h.UZ[q].plus180Line,N=h.UZ[q].minus180Line),m)if("mesh"===t.type)S.push(t);else if("point"===t.type)S.push(F(t.clone(),b,I));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>F(e,b,I))),S.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,m);S.push(e.rings?new u.Z(e):e)}else if(t.extent){const e=t.extent,r=(0,h.XZ)(e.xmin,I)*(2*b);let s=0===r?t.clone():(0,h.Sy)(t.clone(),r);e.offset(r,0),e.intersects(x)&&e.xmax!==b?(_=e.xmax>_?e.xmax:_,s=w(s,g),T.push(s),S.push("cut")):e.intersects(N)&&e.xmin!==I?(_=e.xmax*(2*b)>_?e.xmax*(2*b):_,s=w(s,g,360),T.push(s),S.push("cut")):S.push(s)}else S.push(t.clone());else S.push(t);let O=(0,h.XZ)(_,b),v=-90;const G=O,P=new c.Z;for(;O>0;){const e=360*O-180;P.addPath([[e,v],[e,-1*v]]),v*=-1,O--}if(T.length>0&&G>0){const t=Z(T,await async function(e,t,r,s){const n="string"==typeof e?(0,d.mN)(e):e,o=t[0].spatialReference,i={...s,query:{...n.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:(0,f.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},a=await(0,y.default)(n.path+"/cut",i),{cutIndexes:l,geometries:u=[]}=a.data;return{cutIndexes:l,geometries:u.map((e=>{const t=(0,f.im)(e);return t.spatialReference=o,t}))}}(o,T,P,r)),s=[],i=[];for(let r=0;r<S.length;r++){const o=S[r];if("cut"!==o)i.push(o);else{const o=t.shift(),a=e[r];(0,n.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&o.rings.length>=a.rings.length?(s.push(o),i.push("simplify")):i.push(g?(0,l.$)(o):o)}}if(!s.length)return i;const a=await p(o,s,r),u=[];for(let e=0;e<i.length;e++){const t=i[e];"simplify"!==t?u.push(t):u.push(g?(0,l.$)(a.shift()):a.shift())}return u}const A=[];for(let e=0;e<S.length;e++){const t=S[e];if("cut"!==t)A.push(t);else{const e=T.shift();A.push(!0===g?(0,l.$)(e):e)}}return Promise.resolve(A)}function q(e,t){const r=(0,a.C5)(t);if(r){const[t,s]=r.valid,n=s-t;if(e<t)for(;e<t;)e+=n;if(e>s)for(;e>s;)e-=n}return e}},49573:(e,t,r)=>{"use strict";r.d(t,{UZ:()=>i,x3:()=>u,uS:()=>c,XZ:()=>a,Sy:()=>l});var s=r(73032),n=r(93833),o=r(56885);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:s.Z.WebMercator}),minus180Line:new n.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:s.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n.Z({paths:[[[180,-180],[180,180]]],spatialReference:s.Z.WGS84}),minus180Line:new n.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:s.Z.WGS84})}};function a(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const r=u(e);for(const e of r)for(const r of e)r[0]+=t;return e}function u(e){return(0,o.oU)(e)?e.rings:e.paths}function c(e){const t=(null==e?void 0:e.isWebMercator)?102100:4326;return[i[t].minX,i[t].maxX]}},44195:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});class s{constructor(e=null,t={},r,s){this.displayId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),r&&(this.centroid=r),null!=s&&(this.objectId=s)}get hasGeometry(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}weakClone(){const e=new s(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashIndexed=this.geohashIndexed,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}const n=s},60151:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new s;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}const n=s},73127:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});class s{constructor(e=[],t=[],r=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=r}get isPoint(){return 0===this.lengths.length}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];for(let r=0;r<s;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=s}}clone(){return new s(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}const n=s},31036:(e,t,r)=>{"use strict";r.d(t,{XA:()=>z,h_:()=>H,Yn:()=>$,GH:()=>W,E7:()=>D,ks:()=>L,Uy:()=>U,u0:()=>j,EI:()=>V,cn:()=>B,di:()=>Y,Iv:()=>G,fQ:()=>F,eG:()=>E,J6:()=>M,oB:()=>ce,zj:()=>re,$:()=>oe,lz:()=>ue,RZ:()=>ee,Nh:()=>te,Jd:()=>g,IN:()=>b,hY:()=>ae,lM:()=>K,$g:()=>ie});var s=r(36544),n=r(32656),o=r(56885),i=r(44195),a=r(60151),l=r(73127);function u(e,t){return e?t?4:3:t?3:2}const c=s.Z.getLogger("esri.tasks.support.optimizedFeatureSet"),h={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},d=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o},f=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+2]},y=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+3]},p=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+2],e[r+3]=t[s+3]};function m(e,t,r,s){if(e){if(r)return t&&s?p:f;if(t&&s)return y}else if(t&&s)return f;return d}function g({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function b({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}function I({scale:e,translate:t},r){return r*e[0]+t[0]}function w({scale:e,translate:t},r){return t[1]-r*e[1]}function F(e,t,r){return e?t?r?T(e):q(e):r?N(e):Z(e):null}function Z(e){const t=e.coords;return{x:t[0],y:t[1]}}function R(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function q(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function x(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function N(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function _(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function T(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function S(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function O(e,t){return e&&t?S:e?x:t?_:R}function v(e,t,r,s,n){const o=O(r,s);for(const r of t){const{geometry:t,attributes:s}=r;let a;t&&(a=o(new l.Z,t)),e.push(new i.Z(a,s,null,s[n]))}return e}function G(e,t,r){if(!e)return null;const s=u(t,r),n=[];for(let t=0;t<e.coords.length;t+=s){const r=[];for(let n=0;n<s;n++)r.push(e.coords[t+n]);n.push(r)}return t?r?{points:n,hasZ:t,hasM:r}:{points:n,hasZ:t}:r?{points:n,hasM:r}:{points:n}}function P(e,t,r,s,n){const o=u(r,s);for(const r of t){const t=r.geometry,s=r.attributes;let a;t&&(a=A(new l.Z,t,o)),e.push(new i.Z(a,s,null,s[n]))}return e}function A(e,t,r=u(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const s=e.coords;let n=0;for(const e of t.points)for(let t=0;t<r;t++)s[n++]=e[t];return e}function M(e,t,r){if(!e)return null;const s=u(t,r),{coords:n,lengths:o}=e,i=[];let a=0;for(const e of o){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<s;t++)e.push(n[a++]);t.push(e)}i.push(t)}return t?r?{paths:i,hasZ:t,hasM:r}:{paths:i,hasZ:t}:r?{paths:i,hasM:r}:{paths:i}}function k(e,t,r,s,n){const o=u(r,s);for(const r of t){const t=r.geometry,s=r.attributes;let a;t&&(a=j(new l.Z,t,o)),e.push(new i.Z(a,s,null,s[n]))}return e}function j(e,t,r=u(t.hasZ,t.hasM)){const{lengths:s,coords:n}=e;let o=0;for(const e of t.paths){for(const t of e)for(let e=0;e<r;e++)n[o++]=t[e];s.push(e.length)}return e}function E(e,t,r){if(!e)return null;const s=u(t,r),{coords:n,lengths:o}=e,i=[];let a=0;for(const e of o){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<s;t++)e.push(n[a++]);t.push(e)}i.push(t)}return t?r?{rings:i,hasZ:t,hasM:r}:{rings:i,hasZ:t}:r?{rings:i,hasM:r}:{rings:i}}function J(e,t,r,s,n){for(const o of t){const t=o.geometry,a=o.centroid,u=o.attributes;let c;t&&(c=U(new l.Z,t,r,s)),a?e.push(new i.Z(c,u,R(new l.Z,a),u[n])):e.push(new i.Z(c,u,null,u[n]))}return e}function U(e,t,r=t.hasZ,s=t.hasM){return L(e,t.rings,r,s),e}function L(e,t,r,s){const n=u(r,s),{lengths:o,coords:i}=e;let a=0;o.length=i.length=0;for(const e of t){for(const t of e)for(let e=0;e<n;e++)i[a++]=t[e];o.push(e.length)}return e}const C=[],X=[];function z(e,t,r,s,n){C[0]=e;const[o]=$(X,C,t,r,s,n);return C.length=X.length=0,o}function $(e,t,r,s,o,a){if(e.length=0,!r){for(const r of t){const t=r.attributes[a];e.push(new i.Z(null,r.attributes,null,t))}return e}switch(r){case"esriGeometryPoint":return v(e,t,s,o,a);case"esriGeometryMultipoint":return P(e,t,s,o,a);case"esriGeometryPolyline":return k(e,t,s,o,a);case"esriGeometryPolygon":return J(e,t,s,o,a);default:c.error("convertToFeatureSet:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${r}'`)),e.length=0}return e}function D(e,t,r,s,o,i){const a=e.length;switch(r){case"esriGeometryPoint":v(e,t,s,o,i);break;case"esriGeometryMultipoint":P(e,t,s,o,i);break;case"esriGeometryPolyline":k(e,t,s,o,i);break;case"esriGeometryPolygon":J(e,t,s,o,i);break;default:c.error("convertToFeatureSet:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${r}'`))}for(let s=0;s<t.length;s++)e[s+a].geometryType=r,e[s+a].insertAfter=t[s].insertAfter,e[s+a].groupId=t[s].groupId;return e}function V(e,t,r,s){X[0]=e,Q(C,X,t,r,s);const n=C[0];return C.length=X.length=0,n}function W(e,t,r){if(!e)return null;const s=new l.Z;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==r&&(r=e.hasM),(0,o.wp)(e)?O(null!=t?t:null!=e.z,null!=r?r:null!=e.m)(s,e):(0,o.oU)(e)?U(s,e,t,r):(0,o.l9)(e)?j(s,e,u(t,r)):(0,o.aW)(e)?A(s,e,u(t,r)):void c.error("convertFromGeometry:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${e}'`))}function Y(e,t,r,s){const o=e&&("coords"in e?e:e.geometry);if(!o)return null;switch(t){case"esriGeometryPoint":{let e=Z;return r&&s?e=T:r?e=q:s&&(e=N),e(o)}case"esriGeometryMultipoint":return G(o,r,s);case"esriGeometryPolyline":return M(o,r,s);case"esriGeometryPolygon":return E(o,r,s);default:return void c.error("convertToGeometry:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${t}'`))}}function Q(e,t,r,s,o){switch(e.length=0,r){case"esriGeometryPoint":return function(e,t,r,s){let n=Z;r&&s?n=T:r?n=q:s&&(n=N);for(const r of t){const{geometry:t,attributes:s}=r,o=t?n(t):null;e.push({attributes:s,geometry:o})}return e}(e,t,s,o);case"esriGeometryMultipoint":return function(e,t,r,s){for(const n of t){const{geometry:t,attributes:o}=n;let i;t&&(i=G(t,r,s)),e.push({attributes:o,geometry:i})}return e}(e,t,s,o);case"esriGeometryPolyline":return function(e,t,r,s){for(const n of t){const{geometry:t,attributes:o}=n;let i;t&&(i=M(t,r,s)),e.push({attributes:o,geometry:i})}return e}(e,t,s,o);case"esriGeometryPolygon":return function(e,t,r,s){for(const n of t){const{geometry:t,attributes:o,centroid:i}=n;let a;if(t&&(a=E(t,r,s)),i){const t=Z(i);e.push({attributes:o,centroid:t,geometry:a})}else e.push({attributes:o,geometry:a})}return e}(e,t,s,o);default:c.error("convertToFeatureSet:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${r}'`))}return e}function B(e){const{objectIdFieldName:t,spatialReference:r,transform:s,fields:n,hasM:o,hasZ:i,features:a,geometryType:l,exceededTransferLimit:u,uniqueIdField:c,queryGeometry:h,queryGeometryType:d}=e,f={features:Q([],a,l,i,o),fields:n,geometryType:l,objectIdFieldName:t,spatialReference:r,uniqueIdField:c,queryGeometry:Y(h,d,!1,!1)};return s&&(f.transform=s),u&&(f.exceededTransferLimit=u),o&&(f.hasM=o),i&&(f.hasZ=i),f}function H(e,t){const r=new a.Z,{hasM:s,hasZ:o,features:i,objectIdFieldName:l,spatialReference:u,geometryType:h,exceededTransferLimit:d,transform:f,fields:y}=e;return y&&(r.fields=y),r.geometryType=h,r.objectIdFieldName=l||t,r.spatialReference=u,r.objectIdFieldName?(i&&$(r.features,i,h,o,s,r.objectIdFieldName),d&&(r.exceededTransferLimit=d),s&&(r.hasM=s),o&&(r.hasZ=o),f&&(r.transform=f),r):(c.error(new n.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),r)}function K(e){const{transform:t,features:r,hasM:s,hasZ:n}=e;if(!t)return e;for(const e of r)e.geometry&&ie(e.geometry,e.geometry,s,n,t),e.centroid&&ie(e.centroid,e.centroid,s,n,t);return e.transform=null,e}function ee(e,t){const{geometryType:r,features:s,hasM:n,hasZ:o}=t;if(!e)return t;for(let t=0;t<s.length;t++){const i=s[t],a=i.weakClone();a.geometry=new l.Z,te(a.geometry,i.geometry,n,o,r,e),i.centroid&&(a.centroid=new l.Z,te(a.centroid,i.centroid,n,o,"esriGeometryPoint",e)),s[t]=a}return t.transform=e,t}function te(e,t,r,s,n,o,i=r,a=s){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const l=h[n],{coords:c,lengths:d}=t,f=u(r,s),y=u(r&&i,s&&a),p=m(r,s,i,a);if(!d.length)return p(e.coords,c,0,0,g(o,c[0]),b(o,c[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;let I,w,F,Z,R=0,q=0,x=q;for(const t of d){if(t<l)continue;let r=0;q=x,F=I=g(o,c[R]),Z=w=b(o,c[R+1]),p(e.coords,c,q,R,F,Z),r++,R+=f,q+=y;for(let s=1;s<t;s++,R+=f)F=g(o,c[R]),Z=b(o,c[R+1]),F===I&&Z===w||(p(e.coords,c,q,R,F-I,Z-w),q+=y,r++,I=F,w=Z);r>=l&&(e.lengths.push(r),x=q)}return e.coords.length=x,e.coords.length?e:null}function re(e,t,r,s,n,o,i=r,a=s){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const l=h[n],{coords:c,lengths:d}=t,f=u(r,s),y=u(r&&i,s&&a),p=m(r,s,i,a);if(!d.length)return p(e.coords,c,0,0,c[0],c[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;let g=0;const b=o*o;for(const t of d){if(t<l){g+=t*f;continue}const r=e.coords.length/y,s=g,n=g+(t-1)*f;p(e.coords,c,e.coords.length,s,c[s],c[s+1]),ne(e.coords,c,f,b,p,s,n),p(e.coords,c,e.coords.length,n,c[n],c[n+1]);const o=e.coords.length/y-r;o>=l?e.lengths.push(o):e.coords.length=r*y,g+=t*f}return e.coords.length?e:null}function se(e,t,r,s){const n=e[t],o=e[t+1],i=e[r],a=e[r+1],l=e[s],u=e[s+1];let c=i,h=a,d=l-c,f=u-h;if(0!==d||0!==f){const e=((n-c)*d+(o-h)*f)/(d*d+f*f);e>1?(c=l,h=u):e>0&&(c+=d*e,h+=f*e)}return d=n-c,f=o-h,d*d+f*f}function ne(e,t,r,s,n,o,i){let a,l=s,u=0;for(let e=o+r;e<i;e+=r)a=se(t,e,o,i),a>l&&(u=e,l=a);l>s&&(u-o>r&&ne(e,t,r,s,n,o,u),n(e,t,e.length,u,t[u],t[u+1]),i-u>r&&ne(e,t,r,s,n,u,i))}function oe(e,t,r,s){if(!t||!t.coords||!t.coords.length)return null;const n=u(r,s);let o=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=n){const r=e[t],s=e[t+1];o=Math.min(o,r),a=Math.max(a,r),i=Math.min(i,s),l=Math.max(l,s)}}return e[0]=o,e[1]=i,e[2]=a,e[3]=l,e}function ie(e,t,r,s,n){const{coords:o,lengths:i}=t,a=r?s?p:f:s?f:d,l=u(r,s);if(!o.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return a(e.coords,o,0,0,I(n,o[0]),w(n,o[1])),e!==t&&(e.lengths.length=0,e.coords.length=l),e;const[c,h]=n.scale;let y=0;for(let t=0;t<i.length;t++){const r=i[t];e.lengths[t]=r;let s=I(n,o[y]),u=w(n,o[y+1]);a(e.coords,o,y,y,s,u),y+=l;for(let t=1;t<r;t++,y+=l)s+=o[y]*c,u-=o[y+1]*h,a(e.coords,o,y,y,s,u)}return e!==t&&(e.lengths.length=i.length,e.coords.length=o.length),e}function ae(e,t,r,s,n,o){const i=u(r,s),a=m(r,s,n,o),l=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let t=0;t<l.length;t+=i)a(e.coords,l,e.coords.length,t,l[t],l[t+1]);return e}function le(e,t,r,s){let n=0,o=e[s*t],i=e[s*(t+1)];for(let a=1;a<r;a++){const r=o+e[s*(t+a)],l=i+e[s*(t+a)+1],u=(r-o)*(l+i);o=r,i=l,n+=u}return.5*n}function ue(e,t){const{coords:r,lengths:s}=e;let n=0,o=0;for(let e=0;e<s.length;e++)o+=le(r,n,s[e],t),n+=e;return Math.abs(o)}function ce(e,t){const r=e.clone(),s=e.coords,n=e.lengths;let o=0;for(let e=0;e<n.length;e++){const i=n[e];let a=s[t*o],l=s[t*o+1];for(let e=1;e<i;e++){const n=a+s[t*(o+e)],i=l+s[t*(o+e)+1];r.coords[t*(o+e)]=n,r.coords[t*(o+e)+1]=i,a=n,l=i}o+=i}return r}},20365:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var s=r(56140),n=r(95830),o=r(82550),i=r(10103),a=r(59472),l=(r(36544),r(68055),r(79881)),u=r(87566),c=r(32656),h=r(10923),d=(r(57002),r(86035),r(52937)),f=r(36654),y=r(809),p=r(87864),m=r(72094),g=r(31060),b=r(92551),I=r(56471);const w=new Set(["Feature Layer","Table"]);let F=class extends y.Z{constructor(){super(...arguments),this.type="feature-layer"}load(e){const t=(0,a.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:r,gdbVersion:s,spatialReference:o,fieldsIndex:i}=this.layer,a=(0,n.Z)("featurelayer-pbf")&&e?"pbf":"json";return new b.Z({url:t.path,format:a,fieldsIndex:i,dynamicDataSource:r,gdbVersion:s,sourceSpatialReference:o})}async addAttachment(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",n=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,n.query);try{const e=await(0,f.default)(s,{body:o});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}async updateAttachment(e,t,r){await this.load();const s=e.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),i=this._getFormDataForAttachment(r,o.query);try{const e=await(0,f.default)(n,{body:i});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){await this.load();const r=e.addFeatures.map(this._serializeFeature,this),s=e.updateFeatures.map(this._serializeFeature,this),n=this._getFeatureIds(e.deleteFeatures);(0,m.P)(r,s,this.layer.spatialReference);const o=[],i=[],a=[...e.deleteAttachments];for(const t of e.addAttachments)o.push(await this._serializeAttachment(t));for(const t of e.updateAttachments)i.push(await this._serializeAttachment(t));const l=o.length||i.length||a.length?{adds:o,updates:i,deletes:a}:null,u=this._getLayerRequestOptions({method:"post",query:{adds:r.length?JSON.stringify(r):null,updates:s.length?JSON.stringify(s):null,deletes:n.length?n.join(","):null,gdbVersion:null==t?void 0:t.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,attachments:l&&JSON.stringify(l)}}),c=await(0,f.default)(this.layer.parsedUrl.path+"/applyEdits",u);return this._createEditsResult(c)}async deleteAttachments(e,t){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await(0,f.default)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:s}=this.layer,{data:n}=await(0,f.default)(`${s}/${r}`,t),{id:o,extent:i,fullExtent:a,timeExtent:l}=n,u=i||a;return{id:o,fullExtent:u&&d.Z.fromJSON(u),timeExtent:l&&p.Z.fromJSON({start:l[0],end:l[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:r}=this.layer,s=r.path;await this.load();const n=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,r=[];for(const e of t){const t=s+"/"+e+"/attachments";r.push((0,f.default)(t,n))}return Promise.all(r).then((e=>t.map(((t,r)=>({parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}))))).then((e=>(0,g.O)(e,s)))}return this.queryTask.executeAttachmentQuery(e,n)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async _fetchService(e){let t=this.layer.sourceJSON;if(!t){const{data:r}=await(0,f.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,n.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=r}this.sourceJSON=this._patchServiceJSON(t);const r=t.type;if(!w.has(r))throw new c.Z("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=(0,I.bU)(e.geometryType).renderer;(0,i.RB)("drawingInfo.renderer",t,e)}return e}_serializeFeature(e){const{geometry:t,attributes:r}=e;return(0,a.Wi)(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}}async _serializeAttachment(e){const{feature:t,attachment:r}=e,{globalId:s,name:n,contentType:o,data:i,uploadId:a}=r,l={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(l.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),a)l.uploadId=a;else if(i){const e=await async function(e){if("string"==typeof e)return(0,h.sJ)(e)||{data:e};return new Promise(((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t((0,h.sJ)(s.result)),s.onerror=e=>r(e)}))}(i);l.contentType=e.mediaType,l.data=e.data,i instanceof File&&(l.name=i.name)}return n&&(l.name=n),o&&(l.contentType=o),l}_getFeatureIds(e){const t=e[0];return t?"objectId"in t?this._getIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_getIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_createEditsResult(e){const t=e.data,r=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:r&&r.addResults?r.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:r&&r.updateResults?r.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:r&&r.deleteResults?r.deleteResults.map(this._createFeatureEditResult,this):[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new c.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const r=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new c.Z("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const e in t){const s=t[e];null!=s&&(r.set?r.set(e,s):r.append(e,s))}return r}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:r,dynamicDataSource:s}=this.layer;return{...e,query:(0,o.yd)({gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this.layer.customParameters,...null==e?void 0:e.query}),responseType:"json"}}};(0,s._)([(0,l.Cb)()],F.prototype,"type",void 0),(0,s._)([(0,l.Cb)({constructOnly:!0})],F.prototype,"layer",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],F.prototype,"queryTask",null),F=(0,s._)([(0,u.j)("esri.layers.graphics.sources.FeatureLayerSource")],F);const Z=F},56471:(e,t,r)=>{"use strict";r.d(t,{Dm:()=>a,Hq:()=>l,bU:()=>i});var s=r(95830),n=r(82550),o=r(7767);function i(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}function a(e,t){if((0,s.Z)("csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const s=new Function(r);return()=>new s}catch(r){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(e)}}]}},95986:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(56140),n=(r(95830),r(36544),r(68055),r(79881)),o=r(87566),i=r(10923),a=(r(57002),r(86035),r(82677));let l=class extends a.default{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,i.mN)(e):null}_encode(e,t,r){const s={};for(const n in e){if("declaredClass"===n)continue;const o=e[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){s[n]=[];for(let e=0;e<o.length;e++)s[n][e]=this._encode(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[n]);s[n]=t?e:JSON.stringify(e)}else s[n]=t?o:JSON.stringify(o);else s[n]=o}return s}};(0,s._)([(0,n.Cb)({readOnly:!0})],l.prototype,"parsedUrl",null),(0,s._)([(0,n.Cb)()],l.prototype,"requestOptions",void 0),(0,s._)([(0,n.Cb)({type:String})],l.prototype,"url",void 0),l=(0,s._)([(0,o.j)("esri.tasks.Task")],l);const u=l}}]);
//# sourceMappingURL=8173.js.map