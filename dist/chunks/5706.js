(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[5706],{18355:(e,t,s)=>{"use strict";s.d(t,{Q:()=>I,a:()=>v,b:()=>j,c:()=>G,d:()=>D,e:()=>T,g:()=>V,n:()=>C,t:()=>A});var i=s(59472),r=s(56274),n=s(32656),a=s(39105),u=s(27780),o=s(47005),l=s(80685),c=s(59933),h=s(56885),f=s(93533),d=s(91535),p=s(73127),y=s(31036),m=s(71951);function g(e,t){return e?t?4:3:t?3:2}function _(e,t,s,i,r,n){const a=g(r,n),{coords:u,lengths:o}=i;if(!o)return!1;for(let i=0,r=0;i<o.length;i++,r+=a)if(!w(e,t,s,u[r],u[r+1]))return!1;return!0}function w(e,t,s,i,r){if(!e)return!1;const n=g(t,s),{coords:a,lengths:u}=e;let o=!1,l=0;for(const e of u)o=x(o,a,n,l,e,i,r),l+=e*n;return o}function x(e,t,s,i,r,n,a){let u=e,o=i;for(let e=i,l=i+r*s;e<l;e+=s){o=e+s,o===l&&(o=i);const r=t[e],c=t[e+1],h=t[o],f=t[o+1];(c<a&&f>=a||f<a&&c>=a)&&r+(a-c)/(f-c)*(h-r)<n&&(u=!u)}return u}const S=new r.Xn({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),I=Object.freeze({}),R=new p.Z,F=new p.Z,b=new p.Z,Q={esriGeometryPoint:y.fQ,esriGeometryPolyline:y.J6,esriGeometryPolygon:y.eG,esriGeometryMultipoint:y.Iv};function A(e,t,s,i=e.hasZ,r=e.hasM){const n=e.hasZ&&i,a=e.hasM&&r;if(s){const u=(0,y.Nh)(b,t,e.hasZ,e.hasM,"esriGeometryPoint",s,i,r);return(0,y.fQ)(u,n,a)}return(0,y.fQ)(t,n,a)}function T(e,t,s,i,r,n,a=t,u=s){const o=t&&a,l=s&&u,c=i?"coords"in i?i:i.geometry:null;if(!c)return null;if(r){let i=(0,y.zj)(F,c,t,s,e,r,a,u);return n&&(i=(0,y.Nh)(b,i,o,l,e,n)),Q[e](i,o,l)}if(n){const i=(0,y.Nh)(b,c,t,s,e,n,a,u);return Q[e](i,o,l)}return(0,y.hY)(R,c,t,s,a,u),Q[e](R,o,l)}async function v(e,t,s){const{outFields:i,orderByFields:r,groupByFieldsForStatistics:n,outStatistics:a}=e;if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(r)for(let e=0;e<r.length;e++)r[e]=r[e].trim();if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(a)for(let e=0;e<a.length;e++)a[e].onStatisticField&&(a[e].onStatisticField=a[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),C(e,t,s)}async function C(e,t,s){if(!e)return null;let{where:r}=e;if(e.where=r=r&&r.trim(),(!r||/^1 *= *1$/.test(r)||t&&t===r)&&(e.where=null),!e.geometry)return e;let n=await async function(e){const{geometry:t,distance:s,units:i}=e;if(null==s||"vertexAttributes"in t)return t;const r=t.spatialReference,n=i?S.fromJSON(i):(0,f.qE)(r),a=r&&((0,u.sT)(r)||(0,u.sS)(r))?t:await(0,m._W)(r,u.Zn).then((()=>(0,m.iV)(t,u.Zn)));return(await O().then((e=>e.geodesicBuffer)))(a.spatialReference,a,s,n)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;n=(0,c.aO)(n),n.spatialReference=t}e.geometry=n,await(0,m._W)(n.spatialReference,s);const a=(await(0,d.aX)((0,h.im)(n)))[0];if((0,i.Wi)(a))throw I;const o=a.toJSON(),l=await(0,m.iV)(o,o.spatialReference,s);if(!l)throw I;return l.spatialReference=s,e.geometry=l,e}function G(e){return e&&M in e?JSON.parse(JSON.stringify(e,N)):e}const M="_geVersion",N=(e,t)=>e!==M?t:void 0,E={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},P={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},Z={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},q={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function O(){return s.e(508).then(s.bind(s,93134))}function V(e,t,s,i,r){if((0,h.oU)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,y.Uy)(new p.Z,t,!1,!1);return(0,a.resolve)((t=>function(e,t,s,i){return w(e,t,s,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if((0,h.oU)(t)&&"esriGeometryMultipoint"===s){const s=(0,y.Uy)(new p.Z,t,!1,!1);if("esriSpatialRelContains"===e)return(0,a.resolve)((e=>_(s,!1,!1,e,i,r)))}if((0,h.YX)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return(0,a.resolve)((e=>(0,o.aV)(t,T(s,i,r,e))));if((0,h.YX)(t)&&"esriGeometryMultipoint"===s&&"esriSpatialRelContains"===e)return(0,a.resolve)((e=>(0,o.lQ)(t,T(s,i,r,e))));if((0,h.YX)(t)&&"esriSpatialRelIntersects"===e){const e=(0,l.v$)(s);return(0,a.resolve)((n=>e(t,T(s,i,r,n))))}return O().then((n=>{const a=n[E[e]].bind(null,t.spatialReference,t);return e=>a(T(s,i,r,e))}))}async function D(e,t,s){const{spatialRel:i,geometry:r}=e;if(r){if(!0!==P[i])throw new n.Z("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if((0,u.JY)(r.spatialReference)&&(0,u.JY)(s)){if(!function(e){return!0===Z[(0,h.Ji)(e)]}(r))throw new n.Z("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===q[e]}(t))throw new n.Z("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});if(e.outSR)return(0,m._W)(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function j(e){if((0,h.YX)(e))return!0;if((0,h.oU)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},21895:(e,t,s)=>{"use strict";s.d(t,{Z:()=>U});var i=s(82550),r=s(59472),n=s(32656),a=s(39105),u=s(27780),o=s(6513),l=s(56885),c=s(93533),h=s(50897),f=s(92823),d=s(97873),p=s(61121),y=s(12850),m=s(69996),g=s(71951),_=s(65353),w=s(71063);const x=new class{constructor(e,t){this._cache=new _.Z(e),this._invalidCache=new _.Z(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(void 0!==this._invalidCache.get(s))return null;try{const i=w.WhereClause.create(e,t);return this._cache.put(s,i),i}catch{return this._invalidCache.put(s,null),null}}}(50,500),S="feature-store:unsupported-query",I=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function R(e,t){return e?x.get(e,t):null}function F(e,t,s,i=!0){const r=[];for(const s of t)if("*"!==s&&!e.has(s))if(i){const t=b(s);try{const s=R(t,e);if(!s)throw new n.Z(S,"invalid SQL expression",{where:t});if(!s.isStandardized)throw new n.Z(S,"expression is not standard",{clause:s});F(e,s.fieldNames,"expression contains missing fields")}catch(e){const t=e&&e.details;if(t&&(t.clause||t.where))throw e;t&&t.missingFields?r.push(...t.missingFields):r.push(s)}}else r.push(s);if(r.length)throw new n.Z(S,s,{missingFields:r})}function b(e){return e.split(" as ")[0]}function Q(e,t){const s=t.get(e);return!!s&&!I.has(s.type)}var A=s(18355),T=s(90440),v=s(31036),C=s(78712);const G=class{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&-1===i.indexOf("*")){this.outFields=i;let e=0;for(const t of i){const i=b(t),r=this.fieldsIndex.get(i),n=r?null:R(i,s),a=r?r.name:t.split(" as ")[1]||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:a,clause:n})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let r=null;return this._fieldDataCache.has(i)?r=this._fieldDataCache.get(i).clause:s||(r=R(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:r})),s?this.featureAdapter.getAttribute(e,i):r.calculateValue(e,this.featureAdapter)}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:R(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:R(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:t,clause:r}=this._fieldDataCache.get(i);s[t]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return s}_processAttributesForDistinctValues(e){if((0,r.Wi)(e)||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const i of t){const{alias:t}=this._fieldDataCache.get(i);s.push(e[t])}else for(const t in e)s.push(e[t]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let n=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++n),n>1?null:e}};function M(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function N(e,t,s){return(s?e>t:e<t)?-1:(s?e<t:e>t)?1:0}function E(e,t,s){return s?t-e:e-t}function P(e,t,s,i){if(s&&"esriFieldTypeDate"===s.type){const s=new Date(e).getTime(),r=new Date(t).getTime();if(!isNaN(s)&&!isNaN(r))return E(s,r,i)}if("number"==typeof e&&"number"==typeof t)return E(e,t,i);if("string"==typeof e&&"string"==typeof t){const r=e.toUpperCase(),n=t.toUpperCase();return!s||"esriFieldTypeGUID"!==s.type&&"esriFieldTypeGlobalID"!==s.type?N(r,n,i):N(M(r),M(n),i)}return i?1:-1}class Z{constructor(e,t,s){this.items=e,this.queryGeometry=t,this.definitionExpression=s.definitionExpression,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.fieldsIndex=s.fieldsIndex,this.timeInfo=s.timeInfo,this.featureAdapter=s.featureAdapter,this.aggregateAdapter=s.aggregateAdapter}get size(){return this.items.length}createQueryResponseForCount(e){const t=new G(e,this.featureAdapter,this.fieldsIndex);if(!e.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:s,having:i}=e;if(!(null==s?void 0:s.length))return 1;const r=new Map,n=new Map,a=new Set,u=e.outStatistics;for(const e of u){const{statisticType:u}=e,o="exceedslimit"!==u?e.onStatisticField:void 0;if(!n.has(o)){const e=[];for(const i of s){const s=this._getAttributeValues(t,i,r);e.push(s)}n.set(o,this._calculateUniqueValues(e))}const l=n.get(o);for(const e in l){const{data:s,items:r}=l[e],n=s.join(",");i&&!t.validateItems(r,i)||a.add(n)}}return a.size}createQueryResponse(e){let t;return t=e.outStatistics?e.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(e):this._createStatisticsQueryResponse(e):this._createFeatureQueryResponse(e),e.returnQueryGeometry&&((0,u.JY)(e.outSR)&&!(0,u.fS)(this.queryGeometry.spatialReference,e.outSR)?t.queryGeometry=(0,A.c)({spatialReference:e.outSR,...(0,g.iV)(this.queryGeometry,this.queryGeometry.spatialReference,e.outSR)}):t.queryGeometry=(0,A.c)({spatialReference:e.outSR,...this.queryGeometry})),t}executeAttributesQuery(e){const t=R(e.where,this.fieldsIndex);if(!t)return(0,a.resolve)(this);if(t.isStandardized){let s=0;const i=[];for(const e of this.items)t.testFeature(e,this.featureAdapter)&&(i[s++]=e);const r=new Z(i,this.queryGeometry,this);return r.definitionExpression=e.where,(0,a.resolve)(r)}return(0,a.reject)(new TypeError("Where clause is not standardized"))}executeAggregateIdsQuery(e){if(!e.aggregateIds||!e.aggregateIds.length||(0,r.Wi)(this.aggregateAdapter))return(0,a.resolve)(this);const t=new Set;for(const s of e.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(s).forEach((e=>t.add(e)));const s=this.featureAdapter.getObjectId;return(0,a.resolve)(new Z(this.items.filter((e=>t.has(s(e)))),this.queryGeometry,this))}executeObjectIdsQuery(e){if(!e.objectIds||!e.objectIds.length)return(0,a.resolve)(this);const t=new Set(e.objectIds),s=this.featureAdapter.getObjectId;return(0,a.resolve)(new Z(this.items.filter((e=>t.has(s(e)))),this.queryGeometry,this))}executeTimeQuery(e){const t=(0,T.y)(this.timeInfo,e.timeExtent,this.featureAdapter);if(!(0,r.pC)(t))return(0,a.resolve)(this);const s=this.items.filter(t);return(0,a.resolve)(new Z(s,this.queryGeometry,this))}filterLatest(){const{trackIdField:e,startTimeField:t,endTimeField:s}=this.timeInfo,i=s||t,r=new Map,n=this.featureAdapter.getAttribute;for(const t of this.items){const s=n(t,e),a=n(t,i),u=r.get(s);(!u||a>n(u,i))&&r.set(s,t)}const u=Array.from(r.values());return(0,a.resolve)(new Z(u,this.queryGeometry,this))}async project(e){if(!e||(0,u.fS)(this.spatialReference,e))return this;const t=this.featureAdapter,s=(await(0,g.oj)(this.items.map((e=>(0,A.e)(this.geometryType,this.hasZ,this.hasM,t.getGeometry(e)))),this.spatialReference,e)).map(((e,s)=>t.cloneWithGeometry(this.items[s],(0,v.GH)(e,this.hasZ,this.hasM))));return new Z(s,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:e,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const i of t.reverse()){const t=i.split(" "),r=t[0],n=this.fieldsIndex.get(r),a=t[1]&&"desc"===t[1].toLowerCase();e.sort(((e,t)=>P(s(e,r,n),s(t,r,n),n,a)))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:r,objectIdField:n,spatialReference:a}=this,{outFields:u,outSR:o,quantizationParameters:l,resultRecordCount:c,resultOffset:h,returnZ:f,returnM:d}=e,p=null!=c&&t.length>(h||0)+c,y=u&&(u.indexOf("*")>-1?[...this.fieldsIndex.fields]:u.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:p,features:this._createFeatures(e,t),fields:y,geometryType:s,hasM:i&&d,hasZ:r&&f,objectIdFieldName:n,spatialReference:(0,A.c)(o||a),transform:l&&(0,C.vY)(l)||null}}_createFeatures(e,t){const s=new G(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:r}=this,{orderByFields:n,quantizationParameters:a,returnGeometry:u,returnCentroid:o,maxAllowableOffset:l,resultOffset:c,resultRecordCount:h,returnZ:f=!1,returnM:d=!1}=e,p=r&&f,y=i&&d;let m=[],g=0;const _=[...t];if(this._sortFeatures(_,n,((e,t,i)=>s.getFieldValue(e,t,i))),u||o){const e=(0,C.vY)(a);if(u&&!o)for(const t of _)m[g++]={attributes:s.getAttributes(t),geometry:(0,A.e)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),l,e,p,y)};else if(!u&&o)for(const t of _)m[g++]={attributes:s.getAttributes(t),centroid:(0,A.t)(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of _)m[g++]={attributes:s.getAttributes(t),centroid:(0,A.t)(this,this.featureAdapter.getCentroid(t,this),e),geometry:(0,A.e)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),l,e,p,y)}}else for(const e of _){const t=s.getAttributes(e);t&&(m[g++]={attributes:t})}const w=c||0;if(null!=h){const e=w+h;m=m.slice(w,Math.min(m.length,e))}return m}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY;for(const t of e.outStatistics)if("exceedslimit"===t.statisticType){s=null!=t.maxPointCount?t.maxPointCount:Number.POSITIVE_INFINITY,i=null!=t.maxRecordCount?t.maxRecordCount:Number.POSITIVE_INFINITY,r=null!=t.maxVertexCount?t.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>s;else if(this.items.length>i)t=!0;else{const e=this.hasZ?this.hasM?4:3:this.hasM?3:2,s=this.featureAdapter;t=this.items.reduce(((e,t)=>{const i=s.getGeometry(t);return e+(i&&i.coords.length||0)}),0)/e>r}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}_createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,r=new Map,n=new Map,a=new Map,u=new G(e,this.featureAdapter,this.fieldsIndex),o=e.outStatistics,{groupByFieldsForStatistics:l,having:c,orderByFields:h}=e,f=l&&l.length,d=!!f,p=d&&l[0],y=d&&!this.fieldsIndex.get(p);for(const e of o){const{outStatisticFieldName:o,statisticType:h}=e,m=e,g="exceedslimit"!==h?e.onStatisticField:void 0,_="percentile_disc"===h||"percentile_cont"===h,w=d&&1===f&&(g===p||y)&&"count"===h;if(d){if(!n.has(g)){const e=[];for(const t of l){const s=this._getAttributeValues(u,t,i);e.push(s)}n.set(g,this._calculateUniqueValues(e))}const e=n.get(g);for(const t in e){const{count:s,data:r,items:n,itemPositions:h}=e[t],f=r.join(",");if(!c||u.validateItems(n,c)){const e=a.get(f)||{attributes:{}};let t=null;if(w)t=s;else{const e=this._getAttributeValues(u,g,i),s=h.map((t=>e[t]));t=_&&"statisticParameters"in m?this._getPercentileValue(m,s):this._getStatisticValue(m,s)}e.attributes[o]=t,l.forEach(((t,s)=>e.attributes[this.fieldsIndex.get(t)?t:`EXPR_${s+1}`]=r[s])),a.set(f,e)}}}else{const e=this._getAttributeValues(u,g,i);t.attributes[o]=_&&"statisticParameters"in m?this._getPercentileValue(m,e):this._getStatisticValue(m,e,r)}s.push({name:o,alias:o,type:"esriFieldTypeDouble"})}const m=d?Array.from(a.values()):[t];return this._sortFeatures(m,h,((e,t)=>e.attributes[t])),{fields:s,features:m}}_getStatisticValue(e,t,s){const{onStatisticField:i,statisticType:r}=e,n=s&&s.has(i)?s.get(i):this._calculateStatistics(t);return s&&s.set(i,n),n["var"===r?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:r}=e,{value:n,orderBy:a}=i,u="desc"===a,o=this.fieldsIndex.get(s),l=[...t].filter((e=>null!=e)).sort(((e,t)=>P(e,t,o,u)));return this._calculatePercentile(l,n,"percentile_disc"===r)}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),r=this.items.map((s=>e.getFieldValue(s,t,i)));return s.set(t,r),r}_calculateStatistics(e){let t=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,i=null,r=null,n=null,a=null;const u=[];let o=0;for(const r of e)"string"==typeof r?o++:null==r||isNaN(r)||(i+=r,t=Math.min(t,r),s=Math.max(s,r),u.push(r),o++);if(o){r=i/o;let e=0;for(const t of u)e+=Math.pow(t-r,2);a=o>1?e/(o-1):0,n=Math.sqrt(a)}else t=null,s=null;return{avg:r,count:o,max:s,min:t,stddev:n,sum:i,variance:a}}_calculateUniqueValues(e){const t={},s=this.items,i=s.length;for(let r=0;r<i;r++){const i=s[r],n=[];for(const t of e)n.push(t[r]);const a=n.join(",");null==t[a]?t[a]={count:1,data:n,items:[i],itemPositions:[r]}:(t[a].count++,t[a].items.push(i),t[a].itemPositions.push(r))}return t}_calculatePercentile(e,t,s){if(0===e.length)return null;if(t<=0)return e[0];if(t>=1)return e[e.length-1];const i=(e.length-1)*t,r=Math.floor(i),n=r+1,a=i%1,u=e[r],o=e[n];return n>=e.length||s||"string"==typeof u||"string"==typeof o?u:u*(1-a)+o*a}}const q=Z;const O=new Set,V=new f.WJ(2e6);let D=0;const j=(0,m.Ue)(),z=(0,m.Ue)(),U=class{constructor(e){this.capabilities={query:y.g},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new f.Xq(D+++"$$",V)),this.fieldsIndex=new p.Z(e.fields),e.scheduler&&e.task&&(this._frameQueue=new d.Z,this._frameTask=e.scheduler.registerTask(e.task,(e=>this._update(e)),(()=>this._frameQueue.length>0)))}destroy(){this._frameTask&&(this._frameTask.remove(),this._frameTask=null,this._frameQueue.cancelAll(),this._frameQueue=null),this.clearCache(),this._geometryQueryCache&&this._geometryQueryCache.destroy(),this._changeHandle&&(this._changeHandle.remove(),this._changeHandle=null),this.fieldsIndex.destroy()}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:(0,A.c)(this.spatialReference)}:null}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=(0,T.R)(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e={},t){let s,r=(0,i.d9)(e);try{r=await this._schedule((()=>(0,A.a)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),s=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(r)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(r)),t),s=await this._reschedule((()=>s.executeTimeQuery(r)),t),s=await this._reschedule((()=>s.executeAttributesQuery(r)),t)}catch(e){if(e!==A.Q)throw e;s=new q([],null,this)}return s.createQueryResponse(r)}async executeQueryForCount(e={},t){let s,r=(0,i.d9)(e);r.returnGeometry=!1,r.returnCentroid=!1,r.outSR=null;try{r=await this._schedule((()=>(0,A.a)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),s=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(r)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(r)),t),s=await this._reschedule((()=>s.executeTimeQuery(r)),t),s=await this._reschedule((()=>s.executeAttributesQuery(r)),t)}catch(e){if(e!==A.Q)throw e;return 0}return s.createQueryResponseForCount(r)}async executeQueryForExtent(e={},t){let s,r=(0,i.d9)(e);const n=r.outSR;try{r=await this._schedule((()=>(0,A.a)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),r.returnGeometry=!0,r.returnCentroid=!1,r.outSR=null,s=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(r)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(r)),t),s=await this._reschedule((()=>s.executeTimeQuery(r)),t),s=await this._reschedule((()=>s.executeAttributesQuery(r)),t);const e=s.size;if(!e)return{count:e,extent:null};(0,m.t8)(z,m.Gv),this.featureStore.forEachBounds(s.items,(e=>(0,m.TC)(z,e)),j);const i={xmin:z[0],ymin:z[1],xmax:z[3],ymax:z[4],spatialReference:(0,A.c)(this.spatialReference)};this.hasZ&&isFinite(z[2])&&isFinite(z[5])&&(i.zmin=z[2],i.zmax=z[5]);const a=(0,g.iV)(i,s.spatialReference,n);if(a.spatialReference=(0,A.c)(n||this.spatialReference),a.xmax-a.xmin==0){const e=(0,c.c9)(a.spatialReference);a.xmin-=e,a.xmax+=e}if(a.ymax-a.ymin==0){const e=(0,c.c9)(a.spatialReference);a.ymin-=e,a.ymax+=e}if(this.hasZ&&null!=a.zmin&&null!=a.zmax&&a.zmax-a.zmin==0){const e=(0,c.c9)(a.spatialReference);a.zmin-=e,a.zmax+=e}return{count:e,extent:a}}catch(e){if(e===A.Q)return{count:0,extent:null};throw e}}async executeQueryForIds(e={},t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e={},t){let s,r=(0,i.d9)(e);r.returnGeometry=!1,r.returnCentroid=!1,r.outSR=null;try{r=await this._schedule((()=>(0,A.a)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),s=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(r)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(r)),t),s=await this._reschedule((()=>s.executeTimeQuery(r)),t),s=await this._reschedule((()=>s.executeAttributesQuery(r)),t);const e=s.items,i=new Set;return await this._reschedule((()=>{for(const t of e)i.add(s.featureAdapter.getObjectId(t))}),t),i}catch(e){if(e===A.Q)return new Set;throw e}}async executeQueryForLatestObservations(e={},t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new n.Z("feature-store:unsupported-query","Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});let s,r=(0,i.d9)(e);try{r=await this._schedule((()=>(0,A.a)(r,this.definitionExpression,this.spatialReference)),t),r=await this._reschedule((()=>this._checkQuerySupport(r)),t),s=await this._reschedule((()=>this._executeGeometryQuery(r,t)),t),s=await this._reschedule((()=>s.executeAggregateIdsQuery(r)),t),s=await this._reschedule((()=>s.executeObjectIdsQuery(r)),t),s=await this._reschedule((()=>s.executeTimeQuery(r)),t),s=await this._reschedule((()=>s.executeAttributesQuery(r)),t),s=await this._reschedule((()=>s.filterLatest()),t)}catch(e){if(e!==A.Q)throw e;s=new q([],null,this)}return s.createQueryResponse(r)}async _schedule(e,t){return this._frameQueue?this._frameQueue.push(e,t):e()}async _reschedule(e,t){return this._frameQueue?this._frameQueue.unshift(e,t):e()}_update(e){for(this._budget=e;!e.done&&this._frameQueue&&this._frameQueue.process();)e.madeProgress();this._budget=null}_getAll(){if(!this._allItems){const e=[];this.featureStore.forEach((t=>e.push(t))),this._allItems=new q(e,null,this)}return this._allItems}async _executeGeometryQuery(e,t){const{geometry:s,outSR:i,spatialRel:n}=e,a=(0,u.JY)(i)&&!(0,u.fS)(this.spatialReference,i),o=this._geometryQueryCache?a?JSON.stringify({geometry:s,spatialRelationship:n,outSpatialReference:i}):JSON.stringify({geometry:s,spatialRelationship:n}):null;if(o){const e=this._geometryQueryCache.get(o);if(!(0,r.o8)(e))return e}const l=async t=>{if(a&&(e.returnGeometry||e.returnCentroid)){const e=await t.project(i);return o&&this._geometryQueryCache.put(o,e,e.size||1),e}return o&&this._geometryQueryCache.put(o,t,t.size||1),t};if(!s)return l(this._getAll());const c=this.featureAdapter;if("esriSpatialRelDisjoint"===n){const e=this._searchFeatures(this._getQueryBBoxes(s));if(!e.length)return l(this._getAll());let i,r;const a=new Set;for(const t of e)a.add(c.getObjectId(t));return await this._reschedule((()=>{let e=0;i=new Array(a.size),this.featureStore.forEach((t=>i[e++]=t)),r=a}),t),l(await this._reschedule((async()=>{const e=await(0,A.g)(n,s,this.geometryType,this.hasZ,this.hasM);return new q(await this._runSpatialFilter(i,(t=>!r.has(c.getObjectId(t))||e(c.getGeometry(t))),t),s,this)}),t))}const h=this._searchFeatures(this._getQueryBBoxes(s));if(!h.length){const e=new q([],s,this);return o&&this._geometryQueryCache.put(o,e,e.size||1),e}if(this._canExecuteSoloPass(s,e))return l(new q(h,s,this));const f=await(0,A.g)(n,s,this.geometryType,this.hasZ,this.hasM),d=await this._runSpatialFilter(h,(e=>f(c.getGeometry(e))),t);return l(new q(d,s,this))}async _runSpatialFilter(e,t,s){if(!t)return e;if(!this._budget)return e.filter((e=>t(e)));let i=0;const r=new Array,n=async()=>{for(;i<e.length;){const a=e[i];t(a)&&r.push(a),this._budget.done&&await this._reschedule((()=>n()),s),++i}};return this._reschedule((()=>n()),s).then((()=>r))}_canExecuteSoloPass(e,t){const{geometryType:s}=this,{spatialRel:i}=t;return(0,A.b)(e)&&("esriSpatialRelEnvelopeIntersects"===i||"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===i||"esriSpatialRelContains"===i||"esriSpatialRelWithin"===i))}_getQueryBBoxes(e){if((0,A.b)(e)){if((0,l.YX)(e))return[(0,h.al)(e.xmin,e.ymin,e.xmax,e.ymax)];if((0,l.oU)(e))return e.rings.map((e=>(0,h.al)(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[(0,o.$P)((0,h.Ue)(),e)]}_searchFeatures(e){for(const t of e)this.featureStore.forEachInBounds(t,(e=>{O.add(e)}));const t=new Array(O.size);let s=0;return O.forEach((e=>t[s++]=e)),O.clear(),t}async _checkQuerySupport(e){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new n.Z("feature-store:unsupported-query","Unsupported query options",{query:e});return(0,a.all)([this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),(0,A.d)(e,this.geometryType,this.spatialReference),(0,g._W)(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:i,outStatistics:r}=e,a=r?r.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())):[];if(s&&s.length>0){const e=" asc",t=" desc",i=s.map((s=>{const i=s.toLowerCase();return i.indexOf(e)>-1?i.split(e)[0]:i.indexOf(t)>-1?i.split(t)[0]:s})).filter((e=>-1===a.indexOf(e)));F(this.fieldsIndex,i,"orderByFields contains missing fields")}if(t&&t.length>0)F(this.fieldsIndex,t,"outFields contains missing fields");else if(i)throw new n.Z("feature-store:unsupported-query","outFields should be specified for returnDistinctValues",{query:e});!function(e,t){if(!t)return!0;const s=x.get(t,e);if(!s)throw new n.Z(S,"invalid SQL expression",{where:t});if(!s.isStandardized)throw new n.Z(S,"where clause is not standard",{where:t});F(e,s.fieldNames,"where clause contains missing fields")}(this.fieldsIndex,e.where)}async _checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:i}=e,r=s&&s.length,a=t&&t.length;if(i){if(!r||!a)throw new n.Z("feature-store:unsupported-query","outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});!function(e,t,s){if(!t)return!0;const i=x.get(t,e);if(!i)throw new n.Z(S,"invalid SQL expression",{having:t});if(!i.isAggregate)throw new n.Z(S,"having does not contain a valid aggregate function",{having:t});const r=i.fieldNames;if(F(e,r,"having contains missing fields"),!i.getExpressions().every((t=>{const{aggregateType:i,field:r}=t,n=e.has(r)&&e.get(r).name;return s.some((t=>{const{onStatisticField:s,statisticType:r}=t;return(e.has(s)&&e.get(s).name)===n&&r.toLowerCase().trim()===i}))})))throw new n.Z(S,"expressions in having should also exist in outStatistics",{having:t})}(this.fieldsIndex,i,t)}if(a){if(!function(e){return e.every((e=>"exceedslimit"!==e.statisticType))}(t))return;const i=t.map((e=>e.onStatisticField));F(this.fieldsIndex,i,"onStatisticFields contains missing fields"),r&&F(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const s of t){const{onStatisticField:t,statisticType:i}=s;if("percentile_disc"!==i&&"percentile_cont"!==i||!("statisticParameters"in s)){if("count"!==i&&t&&Q(t,this.fieldsIndex))throw new n.Z("feature-store:unsupported-query","outStatistics contains non-numeric fields",{definition:s,query:e})}else{const{statisticParameters:t}=s;if(!t)throw new n.Z("feature-store:unsupported-query","statisticParamters should be set for percentile type",{definition:s,query:e})}}}}}},12850:(e,t,s)=>{"use strict";s.d(t,{g:()=>i});const i={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},90440:(e,t,s)=>{"use strict";function i(e,t){if(!e)return null;const s=t.featureAdapter,{startTimeField:i,endTimeField:r}=e;let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&r)t.forEach((e=>{const t=s.getAttribute(e,i),u=s.getAttribute(e,r);null==t||isNaN(t)||(n=Math.min(n,t)),null==u||isNaN(u)||(a=Math.max(a,u))}));else{const e=i||r;t.forEach((t=>{const i=s.getAttribute(t,e);null==i||isNaN(i)||(n=Math.min(n,i),a=Math.max(a,i))}))}return{start:n,end:a}}function r(e,t,s){if(!t||!e)return null;const{startTimeField:i,endTimeField:r}=e;if(!i&&!r)return null;const{start:n,end:a}=t;return null===n&&null===a?null:void 0===n&&void 0===a?()=>!1:i&&r?function(e,t,s,i,r){return null!=i&&null!=r?n=>{const a=e.getAttribute(n,t),u=e.getAttribute(n,s);return(null==a||a<=r)&&(null==u||u>=i)}:null!=i?t=>{const r=e.getAttribute(t,s);return null==r||r>=i}:null!=r?s=>{const i=e.getAttribute(s,t);return null==i||i<=r}:void 0}(s,i,r,n,a):function(e,t,s,i){return null!=s&&null!=i&&s===i?i=>e.getAttribute(i,t)===s:null!=s&&null!=i?r=>{const n=e.getAttribute(r,t);return n>=s&&n<=i}:null!=s?i=>e.getAttribute(i,t)>=s:null!=i?s=>e.getAttribute(s,t)<=i:void 0}(s,i||r,n,a)}s.d(t,{R:()=>i,y:()=>r})},56471:(e,t,s)=>{"use strict";s.d(t,{Dm:()=>u,Hq:()=>o,bU:()=>a});var i=s(95830),r=s(82550),n=s(7767);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}function u(e,t){if((0,i.Z)("csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const i=new Function(s);return()=>new i}catch(s){return()=>({[t]:null,...e})}}function o(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,r.d9)(e)}}]}}}]);
//# sourceMappingURL=5706.js.map