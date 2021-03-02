(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[9150],{19150:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var i=n(32656),s=n(27780),r=n(56885),o=n(4665),l=n(36654),a=n(88210),u=n(31036),d=n(61121),c=n(52877),y=n(56471),p=n(77142),f=n(71951),h=n(21895),g=n(73456);const m={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};const b=class{constructor(){this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[];await this._checkProjection(e.spatialReference);let n=null;e.url&&(n=(await(0,l.default)(e.url,{responseType:"json"})).data,await(0,c.O3)(n));const r=(0,c.my)(n,{geometryType:e.geometryType}),g=e.fields||r.fields||[],b=null!=e.hasZ?e.hasZ:r.hasZ,I=r.geometryType,F=e.objectIdField||("number"===r.objectIdFieldType?r.objectIdFieldName:"OBJECTID")||"OBJECTID",_=e.spatialReference||s.Zn;let j=e.timeInfo;if(!I)throw new i.Z("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if("string"===r.objectIdFieldType&&t.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),g===r.fields&&r.unknownFields.length>0&&t.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}}),F){let e=null;g.some((t=>t.name===F&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):g.unshift({alias:F,name:F,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of g){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new i.Z("geojson-layer:invalid-field-name","field name is missing",{field:e});if(e.name===F&&(e.type="esriFieldTypeOID"),-1===a.v.jsonValues.indexOf(e.type))throw new i.Z("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const E={};this._requiredFields=[];for(const e of g)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=(0,o.os)(e);e.nullable||void 0!==t?E[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new d.Z(g),j){if(j.startTimeField){const e=this._fieldsIndex.get(j.startTimeField);e?(j.startTimeField=e.name,e.type="esriFieldTypeDate"):j.startTimeField=null}if(j.endTimeField){const e=this._fieldsIndex.get(j.endTimeField);e?(j.endTimeField=e.name,e.type="esriFieldTypeDate"):j.endTimeField=null}if(j.trackIdField){const e=this._fieldsIndex.get(j.trackIdField);e?j.trackIdField=e.name:(j.trackIdField=null,t.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:j}}))}j.startTimeField||j.endTimeField||(t.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:j}}),j=null)}const T={warnings:t,featureErrors:[],layerDefinition:{...m,drawingInfo:(0,y.bU)(I),templates:(0,y.Hq)(E),extent:null,geometryType:I,objectIdField:F,fields:g,hasZ:!!b,timeInfo:j}};this._queryEngine=new h.Z({fields:g,geometryType:I,hasM:!1,hasZ:b,objectIdField:F,spatialReference:_,timeInfo:j,featureStore:new p.Z({geometryType:I,hasM:!1,hasZ:b})}),this._createDefaultAttributes=(0,y.Dm)(E,F),this._nextObjectId=r.maxObjectId+1;const w=(0,c.lG)(n,{geometryType:I,hasZ:b,objectIdFieldName:"number"===r.objectIdFieldType?F:null});if(!(0,s.fS)(_,s.Zn))for(const e of w)e.geometry&&(e.geometry=(0,u.GH)((0,f.iV)((0,u.di)(e.geometry,I,b,!1),s.Zn,_)));return this._loadInitialFeatures(T,w),T}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,g.b)(t,n),(0,f._W)(e.adds,t),(0,f._W)(e.updates,t)]),this._applyEdits(e)}async queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_loadInitialFeatures(e,t){const{featureStore:n,objectIdField:i}=this._queryEngine,s=[];for(const n of t){const t=this._createDefaultAttributes(),r=(0,g.O0)(this._fieldsIndex,this._requiredFields,t,n.attributes,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,n.attributes,!0),n.attributes=t,n.objectId=t[i],s.push(n))}if(n.addMany(s),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:n}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),n&&n.length&&this._applyUpdateEdits(s,n),i&&i.length){for(const e of i)s.deleteResults.push((0,g.d1)(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:o,objectIdField:l,spatialReference:a,featureStore:d}=this._queryEngine,c=[];for(const s of t){if(s.geometry&&i!==(0,r.Ji)(s.geometry)){n.push((0,g.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),o=(0,g.O0)(this._fieldsIndex,this._requiredFields,t,s.attributes);if(o)n.push(o);else{if(this._assignObjectId(t,s.attributes),s.attributes=t,null!=s.uid){const t=s.attributes[l];e.uidToObjectId[s.uid]=t}s.geometry&&(s.geometry=(0,f.iV)((0,g.og)(s.geometry,a),s.geometry.spatialReference,a)),c.push(s),n.push((0,g.d1)(s.attributes[l]))}}d.addMany((0,u.Yn)([],c,i,o,s,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:s,objectIdField:o,spatialReference:l,featureStore:a}=this._queryEngine;for(const d of t){const{attributes:t,geometry:c}=d,y=t&&t[o];if(null==y){e.push((0,g.av)(`Identifier field ${o} missing`));continue}if(!a.has(y)){e.push((0,g.av)(`Feature with object id ${y} missing`));continue}const p=(0,u.EI)(a.getFeature(y),n,s,i);if(c){if(n!==(0,r.Ji)(c)){e.push((0,g.av)("Incorrect geometry type."));continue}p.geometry=(0,f.iV)((0,g.og)(c,l),c.spatialReference,l)}if(t){const n=(0,g.O0)(this._fieldsIndex,this._requiredFields,p.attributes,t);if(n){e.push(n);continue}}a.add((0,u.XA)(p,n,s,i,o)),e.push((0,g.d1)(y))}}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;n&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}async _checkProjection(e){try{await(0,f._W)(s.Zn,e)}catch{throw new i.Z("geojson-layer","Projection not supported")}}}},52877:(e,t,n)=>{"use strict";n.d(t,{lG:()=>j,my:()=>_,O3:()=>F});var i=n(32656),s=n(44195),r=n(73127);function o(e){const t=[];return e.forEach((e=>t.push(e))),t}const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function*a(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*u(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function d(e){for(;;){const{value:t,done:n}=e.next();if(n)return!1;if(t.length>2)return!0}}function c(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function y(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function p(e,t,n){switch(t.type){case"LineString":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const i of t.coordinates)g(e,i,n);return e}(e,t,n);case"MultiPoint":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const i of t.coordinates){f(e,i[0],n);for(let t=1;t<i.length;t++)h(e,i[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const i=t.coordinates;f(e,i[0],n);for(let t=1;t<i.length;t++)h(e,i[t],n);return e}(e,t,n)}}function f(e,t,n){const i=y(t);!function(e){return!c(e)}(i)?g(e,i,n):m(e,i,n)}function h(e,t,n){const i=y(t);!function(e){return c(e)}(i)?g(e,i,n):m(e,i,n)}function g(e,t,n){for(const i of t)b(e,i,n);e.lengths.push(t.length)}function m(e,t,n){for(let i=t.length-1;i>=0;i--)b(e,t[i],n);e.lengths.push(t.length)}function b(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function I(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function F(e){if(!e)throw new i.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:null,s=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!s.test(n))throw new i.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function _(e,t={}){const n=a(e),i=[],s=new Set,r=new Set;let c,y=!1,p=Number.NEGATIVE_INFINITY,f=null,h=!1,{geometryType:g=null}=t,m=!1;for(;;){const{value:e,done:t}=n.next();if(t){const e=f&&1===f.length&&f[0]||null;if(e)for(const t of i)t.name===e&&(t.type="esriFieldTypeOID");return{fields:i,geometryType:g,hasZ:y,maxObjectId:Math.max(0,p),objectIdFieldName:e,objectIdFieldType:c,unknownFields:o(r)}}const{geometry:a,properties:b,id:F}=e;if((!a||(g||(g=l[a.type]),l[a.type]===g))&&(y||(y=d(u(a))),h||(h=null!=F,h&&(c=typeof F,"number"===c&&(f=Object.keys(b).filter((e=>b[e]===F))))),h&&"number"===c&&null!=F&&(p=Math.max(p,F),f.length>1?f=f.filter((e=>b[e]===F)):1===f.length&&(f=b[f[0]]===F?f:[])),!m&&b)){let e=!0;for(const t in b){if(s.has(t))continue;const n=b[t];if(null==n){e=!1,r.add(t);continue}const o=I(n);"unknown"!==o?(r.delete(t),s.add(t),i.push({name:t,alias:t,type:o})):r.add(t)}m=e}}}function j(e,t){return function(e){const t=[];for(;;){const{value:n,done:i}=e.next();if(i)return t;t.push(n)}}(function*(e,t={}){const{geometryType:n,objectIdFieldName:i}=t;for(;;){const{value:o,done:a}=e.next();if(a)return;const{geometry:u,properties:d,id:c}=o;if(u&&l[u.type]!==n)continue;const y=d||{};i&&null!=c&&!y[i]&&(y[i]=c);const f=new s.Z(u?p(new r.Z,u,t):null,y);yield f}}(a(e),t))}}}]);
//# sourceMappingURL=9150.js.map