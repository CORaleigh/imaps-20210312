(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[9424],{90011:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(95830),n=r(38035);const o=(0,s.Z)("esri-text-decoder")?new TextDecoder("utf-8"):null,i=(0,s.Z)("safari")||(0,s.Z)("ios")?6:(0,s.Z)("ff")?12:32;class a{constructor(e,t,r=0,s=(e?e.byteLength:0)){this._tag=0,this._dataType=99,this.init(e,t,r,s)}init(e,t,r,s){this._data=e,this._dataView=t,this._pos=r,this._end=s}clone(){return new a(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getUint32(t+4,!0);return this._skip(8),r}getSFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getInt32(t+4,!0);return this._skip(8),r}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}getBytes(){const e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,s){const n=this.getMessage(),o=e(n,t,r,s);return n.release(),o}processMessage(e){const t=this.getMessage(),r=e(t);return t.release(),r}getMessage(){const e=this._getLength(),t=a.pool.acquire();return t.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){a.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t,r=this._pos,s=0;if(this._end-r>=10)do{if(t=e[r++],s|=127&t,0==(128&t))break;if(t=e[r++],s|=(127&t)<<7,0==(128&t))break;if(t=e[r++],s|=(127&t)<<14,0==(128&t))break;if(t=e[r++],s|=(127&t)<<21,0==(128&t))break;if(t=e[r++],s+=268435456*(127&t),0==(128&t))break;if(t=e[r++],s+=34359738368*(127&t),0==(128&t))break;if(t=e[r++],s+=4398046511104*(127&t),0==(128&t))break;if(t=e[r++],s+=562949953421312*(127&t),0==(128&t))break;if(t=e[r++],s+=72057594037927940*(127&t),0==(128&t))break;if(t=e[r++],s+=0x8000000000000000*(127&t),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;r!==this._end&&(t=e[r],0!=(128&t));)++r,s+=(127&t)*n,n*=128;if(r===this._end)throw new Error("Varint overrun!");++r,s+=t*n}return this._pos=r,s}_decodeSVarint(){const e=this._decodeVarint();return e%2?-(e+1)/2:e/2}_getLength(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>i&&o){const s=e.subarray(t,r);return o.decode(s)}let s="",n="";for(let o=t;o<r;++o){const t=e[o];128&t?n+="%"+t.toString(16):(s+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(s+=decodeURIComponent(n)),s}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}a.pool=new n.Z(a,null,(e=>{e._data=null,e._dataView=null}));const c=a},44195:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});class s{constructor(e=null,t={},r,s){this.displayId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),r&&(this.centroid=r),null!=s&&(this.objectId=s)}get hasGeometry(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)}weakClone(){const e=new s(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashIndexed=this.geohashIndexed,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}const n=s},60151:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new s;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}const n=s},73127:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});class s{constructor(e=[],t=[],r=!1){this.lengths=null!=e?e:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=r}get isPoint(){return 0===this.lengths.length}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];for(let r=0;r<s;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=s}}clone(){return new s(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}const n=s},31036:(e,t,r)=>{"use strict";r.d(t,{XA:()=>W,h_:()=>K,Yn:()=>z,GH:()=>$,E7:()=>O,ks:()=>D,Uy:()=>B,u0:()=>L,EI:()=>Y,cn:()=>Q,di:()=>J,Iv:()=>S,fQ:()=>w,eG:()=>A,J6:()=>v,oB:()=>le,zj:()=>te,$:()=>ne,lz:()=>ce,RZ:()=>H,Nh:()=>ee,Jd:()=>m,IN:()=>b,hY:()=>ie,$g:()=>oe});var s=r(36544),n=r(32656),o=r(56885),i=r(44195),a=r(60151),c=r(73127);function l(e,t){return e?t?4:3:t?3:2}const u=s.Z.getLogger("esri.tasks.support.optimizedFeatureSet"),h={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},d=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o},f=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+2]},g=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+3]},p=(e,t,r,s,n,o)=>{e[r]=n,e[r+1]=o,e[r+2]=t[s+2],e[r+3]=t[s+3]};function y(e,t,r,s){if(e){if(r)return t&&s?p:f;if(t&&s)return g}else if(t&&s)return f;return d}function m({scale:e,translate:t},r){return Math.round((r-t[0])/e[0])}function b({scale:e,translate:t},r){return Math.round((t[1]-r)/e[1])}function k({scale:e,translate:t},r){return r*e[0]+t[0]}function _({scale:e,translate:t},r){return t[1]-r*e[1]}function w(e,t,r){return e?t?r?P(e):G(e):r?Z(e):T(e):null}function T(e){const t=e.coords;return{x:t[0],y:t[1]}}function I(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function G(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function Z(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function M(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function P(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function q(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function x(e,t){return e&&t?q:e?F:t?M:I}function R(e,t,r,s,n){const o=x(r,s);for(const r of t){const{geometry:t,attributes:s}=r;let a;t&&(a=o(new c.Z,t)),e.push(new i.Z(a,s,null,s[n]))}return e}function S(e,t,r){if(!e)return null;const s=l(t,r),n=[];for(let t=0;t<e.coords.length;t+=s){const r=[];for(let n=0;n<s;n++)r.push(e.coords[t+n]);n.push(r)}return t?r?{points:n,hasZ:t,hasM:r}:{points:n,hasZ:t}:r?{points:n,hasM:r}:{points:n}}function N(e,t,r,s,n){const o=l(r,s);for(const r of t){const t=r.geometry,s=r.attributes;let a;t&&(a=C(new c.Z,t,o)),e.push(new i.Z(a,s,null,s[n]))}return e}function C(e,t,r=l(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const s=e.coords;let n=0;for(const e of t.points)for(let t=0;t<r;t++)s[n++]=e[t];return e}function v(e,t,r){if(!e)return null;const s=l(t,r),{coords:n,lengths:o}=e,i=[];let a=0;for(const e of o){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<s;t++)e.push(n[a++]);t.push(e)}i.push(t)}return t?r?{paths:i,hasZ:t,hasM:r}:{paths:i,hasZ:t}:r?{paths:i,hasM:r}:{paths:i}}function V(e,t,r,s,n){const o=l(r,s);for(const r of t){const t=r.geometry,s=r.attributes;let a;t&&(a=L(new c.Z,t,o)),e.push(new i.Z(a,s,null,s[n]))}return e}function L(e,t,r=l(t.hasZ,t.hasM)){const{lengths:s,coords:n}=e;let o=0;for(const e of t.paths){for(const t of e)for(let e=0;e<r;e++)n[o++]=t[e];s.push(e.length)}return e}function A(e,t,r){if(!e)return null;const s=l(t,r),{coords:n,lengths:o}=e,i=[];let a=0;for(const e of o){const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<s;t++)e.push(n[a++]);t.push(e)}i.push(t)}return t?r?{rings:i,hasZ:t,hasM:r}:{rings:i,hasZ:t}:r?{rings:i,hasM:r}:{rings:i}}function U(e,t,r,s,n){for(const o of t){const t=o.geometry,a=o.centroid,l=o.attributes;let u;t&&(u=B(new c.Z,t,r,s)),a?e.push(new i.Z(u,l,I(new c.Z,a),l[n])):e.push(new i.Z(u,l,null,l[n]))}return e}function B(e,t,r=t.hasZ,s=t.hasM){return D(e,t.rings,r,s),e}function D(e,t,r,s){const n=l(r,s),{lengths:o,coords:i}=e;let a=0;o.length=i.length=0;for(const e of t){for(const t of e)for(let e=0;e<n;e++)i[a++]=t[e];o.push(e.length)}return e}const E=[],j=[];function W(e,t,r,s,n){E[0]=e;const[o]=z(j,E,t,r,s,n);return E.length=j.length=0,o}function z(e,t,r,s,o,a){if(e.length=0,!r){for(const r of t){const t=r.attributes[a];e.push(new i.Z(null,r.attributes,null,t))}return e}switch(r){case"esriGeometryPoint":return R(e,t,s,o,a);case"esriGeometryMultipoint":return N(e,t,s,o,a);case"esriGeometryPolyline":return V(e,t,s,o,a);case"esriGeometryPolygon":return U(e,t,s,o,a);default:u.error("convertToFeatureSet:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${r}'`)),e.length=0}return e}function O(e,t,r,s,o,i){const a=e.length;switch(r){case"esriGeometryPoint":R(e,t,s,o,i);break;case"esriGeometryMultipoint":N(e,t,s,o,i);break;case"esriGeometryPolyline":V(e,t,s,o,i);break;case"esriGeometryPolygon":U(e,t,s,o,i);break;default:u.error("convertToFeatureSet:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${r}'`))}for(let s=0;s<t.length;s++)e[s+a].geometryType=r,e[s+a].insertAfter=t[s].insertAfter,e[s+a].groupId=t[s].groupId;return e}function Y(e,t,r,s){j[0]=e,X(E,j,t,r,s);const n=E[0];return E.length=j.length=0,n}function $(e,t,r){if(!e)return null;const s=new c.Z;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==r&&(r=e.hasM),(0,o.wp)(e)?x(null!=t?t:null!=e.z,null!=r?r:null!=e.m)(s,e):(0,o.oU)(e)?B(s,e,t,r):(0,o.l9)(e)?L(s,e,l(t,r)):(0,o.aW)(e)?C(s,e,l(t,r)):void u.error("convertFromGeometry:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${e}'`))}function J(e,t,r,s){const o=e&&("coords"in e?e:e.geometry);if(!o)return null;switch(t){case"esriGeometryPoint":{let e=T;return r&&s?e=P:r?e=G:s&&(e=Z),e(o)}case"esriGeometryMultipoint":return S(o,r,s);case"esriGeometryPolyline":return v(o,r,s);case"esriGeometryPolygon":return A(o,r,s);default:return void u.error("convertToGeometry:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${t}'`))}}function X(e,t,r,s,o){switch(e.length=0,r){case"esriGeometryPoint":return function(e,t,r,s){let n=T;r&&s?n=P:r?n=G:s&&(n=Z);for(const r of t){const{geometry:t,attributes:s}=r,o=t?n(t):null;e.push({attributes:s,geometry:o})}return e}(e,t,s,o);case"esriGeometryMultipoint":return function(e,t,r,s){for(const n of t){const{geometry:t,attributes:o}=n;let i;t&&(i=S(t,r,s)),e.push({attributes:o,geometry:i})}return e}(e,t,s,o);case"esriGeometryPolyline":return function(e,t,r,s){for(const n of t){const{geometry:t,attributes:o}=n;let i;t&&(i=v(t,r,s)),e.push({attributes:o,geometry:i})}return e}(e,t,s,o);case"esriGeometryPolygon":return function(e,t,r,s){for(const n of t){const{geometry:t,attributes:o,centroid:i}=n;let a;if(t&&(a=A(t,r,s)),i){const t=T(i);e.push({attributes:o,centroid:t,geometry:a})}else e.push({attributes:o,geometry:a})}return e}(e,t,s,o);default:u.error("convertToFeatureSet:unknown-geometry",new n.Z(`Unable to parse unknown geometry type '${r}'`))}return e}function Q(e){const{objectIdFieldName:t,spatialReference:r,transform:s,fields:n,hasM:o,hasZ:i,features:a,geometryType:c,exceededTransferLimit:l,uniqueIdField:u,queryGeometry:h,queryGeometryType:d}=e,f={features:X([],a,c,i,o),fields:n,geometryType:c,objectIdFieldName:t,spatialReference:r,uniqueIdField:u,queryGeometry:J(h,d,!1,!1)};return s&&(f.transform=s),l&&(f.exceededTransferLimit=l),o&&(f.hasM=o),i&&(f.hasZ=i),f}function K(e,t){const r=new a.Z,{hasM:s,hasZ:o,features:i,objectIdFieldName:c,spatialReference:l,geometryType:h,exceededTransferLimit:d,transform:f,fields:g}=e;return g&&(r.fields=g),r.geometryType=h,r.objectIdFieldName=c||t,r.spatialReference=l,r.objectIdFieldName?(i&&z(r.features,i,h,o,s,r.objectIdFieldName),d&&(r.exceededTransferLimit=d),s&&(r.hasM=s),o&&(r.hasZ=o),f&&(r.transform=f),r):(u.error(new n.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),r)}function H(e,t){const{geometryType:r,features:s,hasM:n,hasZ:o}=t;if(!e)return t;for(let t=0;t<s.length;t++){const i=s[t],a=i.weakClone();a.geometry=new c.Z,ee(a.geometry,i.geometry,n,o,r,e),i.centroid&&(a.centroid=new c.Z,ee(a.centroid,i.centroid,n,o,"esriGeometryPoint",e)),s[t]=a}return t.transform=e,t}function ee(e,t,r,s,n,o,i=r,a=s){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const c=h[n],{coords:u,lengths:d}=t,f=l(r,s),g=l(r&&i,s&&a),p=y(r,s,i,a);if(!d.length)return p(e.coords,u,0,0,m(o,u[0]),b(o,u[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;let k,_,w,T,I=0,G=0,F=G;for(const t of d){if(t<c)continue;let r=0;G=F,w=k=m(o,u[I]),T=_=b(o,u[I+1]),p(e.coords,u,G,I,w,T),r++,I+=f,G+=g;for(let s=1;s<t;s++,I+=f)w=m(o,u[I]),T=b(o,u[I+1]),w===k&&T===_||(p(e.coords,u,G,I,w-k,T-_),G+=g,r++,k=w,_=T);r>=c&&(e.lengths.push(r),F=G)}return e.coords.length=F,e.coords.length?e:null}function te(e,t,r,s,n,o,i=r,a=s){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!t||!t.coords.length)return null;const c=h[n],{coords:u,lengths:d}=t,f=l(r,s),g=l(r&&i,s&&a),p=y(r,s,i,a);if(!d.length)return p(e.coords,u,0,0,u[0],u[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;let m=0;const b=o*o;for(const t of d){if(t<c){m+=t*f;continue}const r=e.coords.length/g,s=m,n=m+(t-1)*f;p(e.coords,u,e.coords.length,s,u[s],u[s+1]),se(e.coords,u,f,b,p,s,n),p(e.coords,u,e.coords.length,n,u[n],u[n+1]);const o=e.coords.length/g-r;o>=c?e.lengths.push(o):e.coords.length=r*g,m+=t*f}return e.coords.length?e:null}function re(e,t,r,s){const n=e[t],o=e[t+1],i=e[r],a=e[r+1],c=e[s],l=e[s+1];let u=i,h=a,d=c-u,f=l-h;if(0!==d||0!==f){const e=((n-u)*d+(o-h)*f)/(d*d+f*f);e>1?(u=c,h=l):e>0&&(u+=d*e,h+=f*e)}return d=n-u,f=o-h,d*d+f*f}function se(e,t,r,s,n,o,i){let a,c=s,l=0;for(let e=o+r;e<i;e+=r)a=re(t,e,o,i),a>c&&(l=e,c=a);c>s&&(l-o>r&&se(e,t,r,s,n,o,l),n(e,t,e.length,l,t[l],t[l+1]),i-l>r&&se(e,t,r,s,n,l,i))}function ne(e,t,r,s){if(!t||!t.coords||!t.coords.length)return null;const n=l(r,s);let o=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=n){const r=e[t],s=e[t+1];o=Math.min(o,r),a=Math.max(a,r),i=Math.min(i,s),c=Math.max(c,s)}}return e[0]=o,e[1]=i,e[2]=a,e[3]=c,e}function oe(e,t,r,s,n){const{coords:o,lengths:i}=t,a=r?s?p:f:s?f:d,c=l(r,s);if(!o.length)return e!==t&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return a(e.coords,o,0,0,k(n,o[0]),_(n,o[1])),e!==t&&(e.lengths.length=0,e.coords.length=c),e;const[u,h]=n.scale;let g=0;for(let t=0;t<i.length;t++){const r=i[t];e.lengths[t]=r;let s=k(n,o[g]),l=_(n,o[g+1]);a(e.coords,o,g,g,s,l),g+=c;for(let t=1;t<r;t++,g+=c)s+=o[g]*u,l-=o[g+1]*h,a(e.coords,o,g,g,s,l)}return e!==t&&(e.lengths.length=i.length,e.coords.length=o.length),e}function ie(e,t,r,s,n,o){const i=l(r,s),a=y(r,s,n,o),c=t.coords;e.coords.length=0,e.lengths.length=0,e.lengths.push(...t.lengths);for(let t=0;t<c.length;t+=i)a(e.coords,c,e.coords.length,t,c[t],c[t+1]);return e}function ae(e,t,r,s){let n=0,o=e[s*t],i=e[s*(t+1)];for(let a=1;a<r;a++){const r=o+e[s*(t+a)],c=i+e[s*(t+a)+1],l=(r-o)*(c+i);o=r,i=c,n+=l}return.5*n}function ce(e,t){const{coords:r,lengths:s}=e;let n=0,o=0;for(let e=0;e<s.length;e++)o+=ae(r,n,s[e],t),n+=e;return Math.abs(o)}function le(e,t){const r=e.clone(),s=e.coords,n=e.lengths;let o=0;for(let e=0;e<n.length;e++){const i=n[e];let a=s[t*o],c=s[t*o+1];for(let e=1;e<i;e++){const n=a+s[t*(o+e)],i=c+s[t*(o+e)+1];r.coords[t*(o+e)]=n,r.coords[t*(o+e)+1]=i,a=n,c=i}o+=i}return r}},42162:(e,t,r)=>{"use strict";r.d(t,{K9:()=>x,O7:()=>f,G$:()=>F});var s=r(59472),n=r(36544),o=r(32656),i=r(73127),a=r(90011),c=r(95157);const l=n.Z.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),u=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],h=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],d=["upperLeft","lowerLeft"];function f(e){return e>=u.length?null:u[e]}function g(e){return e>=d.length?null:d[e]}function p(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function y(e,t,r){const s=t.createPointGeometry(r);for(;e.next();)switch(e.tag()){case 3:{const r=e.getUInt32(),n=e.pos()+r;let o=0;for(;e.pos()<n;)t.addCoordinatePoint(s,e.getSInt64(),o++);break}case 1:case 2:default:e.skip()}return s}function m(e,t,r){const s=t.createGeometry(r),n=2+(r.hasZ?1:0)+(r.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),n=e.pos()+r;let o=0;for(;e.pos()<n;)t.addLength(s,e.getUInt32(),o++);break}case 3:{const r=e.getUInt32(),o=e.pos()+r;let i=0;for(;e.pos()<o;)t.addCoordinate(s,e.getSInt64(),i),i++,i===n&&(i=0);break}case 1:default:e.skip()}return s}function b(e){const t=new i.Z;let r="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.lengths.push(e.getUInt32());break}case 3:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.coords.push(e.getSInt64());break}case 1:r=c.A[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:r}}function k(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function _(e){const t={type:f(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=f(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=(r=e.getEnum())>=h.length?null:h[r];break;case 5:try{t.domain=JSON.parse(e.getString())}catch(e){l.error(new o.Z("query:parsing-pbf","Failed to parse domain",{error:e})),t.domain=null}break;case 6:t.defaultValue=e.getString();break;default:e.skip()}var r;return t}function w(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.isSystemMaintained=e.getBool();break;default:e.skip()}return t}function T(e,t,r,s){const n=t.createFeature(r);let o=0;for(;e.next();)switch(e.tag()){case 1:{const t=s[o++].name;n.attributes[t]=e.processMessage(k);break}case 2:n.geometry=e.processMessageWithArgs(m,t,r);break;case 4:n.centroid=e.processMessageWithArgs(y,t,r);break;default:e.skip()}return n}function I(e){const t=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function G(e){const t=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function F(e){const t={originPosition:g(0)};for(;e.next();)switch(e.tag()){case 1:t.originPosition=g(e.getEnum());break;case 2:t.scale=e.processMessage(I);break;case 3:t.translate=e.processMessage(G);break;default:e.skip()}return t}function Z(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function M(e,t){const r=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function P(e,t){const r=t.createFeatureResult();r.geometryType=p(t,0);let s=!1;for(;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString();break;case 3:r.globalIdFieldName=e.getString();break;case 4:r.geohashFieldName=e.getString();break;case 5:r.geometryProperties=e.processMessage(Z);break;case 7:r.geometryType=p(t,e.getEnum());break;case 8:r.spatialReference=e.processMessageWithArgs(M,t);break;case 10:r.hasZ=e.getBool();break;case 11:r.hasM=e.getBool();break;case 12:r.transform=e.processMessage(F);break;case 9:{const t=e.getBool();r.exceededTransferLimit=t;break}case 13:t.addField(r,e.processMessage(_));break;case 15:s||(t.prepareFeatures(r),s=!0),t.addFeature(r,e.processMessageWithArgs(T,t,r,r.fields));break;case 2:r.uniqueIdField=e.processMessage(w);break;case 6:default:e.skip()}return t.finishFeatureResult(r),r}function q(e,t){const r={};let n=null;for(;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(b);break;case 1:r.featureResult=e.processMessageWithArgs(P,t);break;case 2:case 3:default:e.skip()}return(0,s.pC)(n)&&r.featureResult&&t.addQueryGeometry(r,n),r}function x(e,t){try{const r=2,s=new a.Z(new Uint8Array(e),new DataView(e)),n={};for(;s.next();)switch(s.tag()){case r:n.queryResult=s.processMessageWithArgs(q,t);break;default:s.skip()}return n}catch(e){throw new o.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},95157:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,J:()=>l});var s=r(27780),n=r(93533),o=r(44195),i=r(60151),a=r(73127);const c=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class l{constructor(e){this.options=e,this.geometryTypes=c}createFeatureResult(){return new i.Z}prepareFeatures(){}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||(0,s.fS)(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,n._R)(this.options.sourceSpatialReference)/(0,n._R)(e.spatialReference);if(1!==t)for(const r of e.features){if(!r.geometry||!r.geometry.coords)continue;const e=r.geometry.coords;for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new o.Z}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.Z}addField(e,t){e.fields.push(t)}addCoordinate(e,t){e.coords.push(t)}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.Z}}},91814:(e,t,r)=>{"use strict";r.d(t,{C:()=>n});var s=r(42162);function n(e,t){const r=(0,s.K9)(e,t),n=r.queryResult.featureResult,o=r.queryResult.queryGeometry,i=r.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=o,n.queryGeometryType=i),n}},72094:(e,t,r)=>{"use strict";r.d(t,{k:()=>i,P:()=>c});var s=r(59472),n=r(27780),o=r(93533);function i(e,t,r){if((0,s.Wi)(t)||(0,s.Wi)(r)||r.vcsWkid||(0,n.fS)(t,r))return null;const i=(0,o._R)(t)/(0,o._R)(r);if(1===i)return null;switch(e){case"point":case"esriGeometryPoint":return e=>{return r=i,void((t=e)&&null!=t.z&&(t.z*=r));var t,r};case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,i);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,i);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,i);default:return null}}function a(e,t,r){if(null==e.hasM||e.hasZ)for(const e of t)for(const t of e)t.length>2&&(t[2]*=r)}function c(e,t,r){if(!e&&!t||!r)return;const s=(0,o._R)(r);l(e,r,s),l(t,r,s)}function l(e,t,r){if(e)for(const s of e)u(s.geometry,t,r)}function u(e,t,r){if(!e||!e.spatialReference||(0,n.fS)(e.spatialReference,t))return;const s=(0,o._R)(e.spatialReference)/r;if(1!==s)if("x"in e)null!=e.z&&(e.z*=s);else if("rings"in e)a(e,e.rings,s);else if("paths"in e)a(e,e.paths,s);else if("points"in e&&(null==e.hasM||e.hasZ))for(const t of e.points)t.length>2&&(t[2]*=s)}},29424:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var s=r(39105),n=r(91814),o=r(94588),i=r(73032),a=r(32366),c=r(70834),l=r(31036),u=r(72094),h=r(1586);function d(e,t){return t}function f(e,t,r,s){switch(r){case 0:return m(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?m(e,t+s,1):function({translate:e,scale:t},r,s){return e[s]-r*t[s]}(e,t+s,1)}}function g(e,t,r,s){switch(r){case 2:return m(e,t,2);default:return f(e,t,r,s)}}function p(e,t,r,s){switch(r){case 2:return m(e,t,3);default:return f(e,t,r,s)}}function y(e,t,r,s){switch(r){case 3:return m(e,t,3);default:return g(e,t,r,s)}}function m({translate:e,scale:t},r,s){return e[s]+r*t[s]}class b{constructor(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=d,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new h.Pj}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=(0,u.k)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return new i.Z}addField(e,t){e.fields.push(c.Z.fromJSON(t));const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const e in t.attributes){const s=t.attributes[e];"string"==typeof s&&s.length>r&&(t.attributes[e]="")}e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,n=(0,l.$g)(r.clone(),r,!1,!1,this.transform),o=(0,l.di)(n,s,!1,!1);let i=null;switch(s){case"esriGeometryPoint":i="point";break;case"esriGeometryPolygon":i="polygon";break;case"esriGeometryPolyline":i="polyline";break;case"esriGeometryMultipoint":i="multipoint"}o.type=i,e.queryGeometryType=s,e.queryGeometry=o}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;default:(0,o.Bg)(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,new h.Wh((0,a.D)(),null,new this.AttributesConstructor)}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){if(null===this.coordinateBuffer){const e=this.lengths.reduce(((e,t)=>e+t),0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension)}0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),n=e[e.length-1];0===r&&n.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?y:t?g:r?p:f}}class k{_parseFeatureQuery(e){const t=(0,n.C)(e.buffer,new b(e.options)),r={...t,spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map((e=>e.toJSON())):void 0};return(0,s.resolve)(r)}}const _=function(){return new k}}}]);
//# sourceMappingURL=9424.js.map