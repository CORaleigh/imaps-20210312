(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[4926],{69308:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>F});var s=i(32656),n=i(27780),r=i(56885),a=i(4665),l=i(88210),d=i(31036),u=i(61121),o=i(56471),p=i(77142),y=i(71951),f=i(21895),c=i(73456);const h=n.Zn,m={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:n.Zn},g={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function b(e){return(0,r.wp)(e)?null!=e.z:!!e.hasZ}function I(e){return(0,r.wp)(e)?null!=e.m:!!e.hasM}const F=class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,n=this._inferLayerProperties(i,e.fields),r=e.fields||[],d=null!=e.hasM?e.hasM:n.hasM,c=null!=e.hasZ?e.hasZ:n.hasZ,b=!e.spatialReference&&!n.spatialReference,I=b?h:e.spatialReference||n.spatialReference,F=b?m:null,_=e.geometryType||n.geometryType,E=!_;let T=e.objectIdField||n.objectIdField,j=e.timeInfo;if(!E&&(b&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new s.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!T)throw new s.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&T!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${T}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),T=n.objectIdField),T&&!n.objectIdField){let e=null;r.some((t=>t.name===T&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:T,name:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of r){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===T&&(e.type="esriFieldTypeOID"),-1===l.v.jsonValues.indexOf(e.type))throw new s.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const x={};this._requiredFields=[];for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=(0,a.os)(e);e.nullable||void 0!==t?x[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new u.Z(r),this._createDefaultAttributes=(0,o.Dm)(x,T),j){if(j.startTimeField){const e=this._fieldsIndex.get(j.startTimeField);e?(j.startTimeField=e.name,e.type="esriFieldTypeDate"):j.startTimeField=null}if(j.endTimeField){const e=this._fieldsIndex.get(j.endTimeField);e?(j.endTimeField=e.name,e.type="esriFieldTypeDate"):j.endTimeField=null}if(j.trackIdField){const e=this._fieldsIndex.get(j.trackIdField);e?j.trackIdField=e.name:(j.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:j}}))}j.startTimeField||j.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:j}}),j=null)}const q={warnings:t,featureErrors:[],layerDefinition:{...g,drawingInfo:(0,o.bU)(_),templates:(0,o.Hq)(x),extent:F,geometryType:_,objectIdField:T,fields:r,hasZ:!!c,hasM:!!d,timeInfo:j},assignedObjectIds:{}};if(this._queryEngine=new f.Z({fields:r,geometryType:_,hasM:d,hasZ:c,objectIdField:T,spatialReference:I,featureStore:new p.Z({geometryType:_,hasM:d,hasZ:c}),timeInfo:j}),!i||!i.length)return this._nextObjectId=1,q;const R=i.reduce(((e,t)=>{const i=t.attributes&&t.attributes[T];return null==i||isNaN(i)||!isFinite(i)?e:Math.max(e,i)}),0);return this._nextObjectId=1+R,await(0,y._W)(i,I),this._loadInitialFeatures(q,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([(0,c.b)(t,i),(0,y._W)(e.adds,t),(0,y._W)(e.updates,t)]),this._applyEdits(e)}async queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_inferLayerProperties(e,t){let i,s,n=null,a=null,l=null;for(const t of e){const e=t.geometry;if(e&&(n||(n=(0,r.Ji)(e)),a||(a=e.spatialReference),null==i&&(i=b(e)),null==s&&(s=I(e)),n&&a&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(l=e.name)}return{geometryType:n,spatialReference:a,objectIdField:l,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:a,spatialReference:l,featureStore:u}=this._queryEngine,o=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&i!==(0,r.Ji)(s.geometry)){e.featureErrors.push((0,c.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=(0,c.O0)(this._fieldsIndex,this._requiredFields,t,s.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[a]),s.geometry&&(s.geometry=(0,y.iV)(s.geometry,s.geometry.spatialReference,l)),o.push(s))}if(u.addMany((0,d.Yn)([],o,i,n,s,a)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push((0,c.d1)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:a,objectIdField:l,spatialReference:u,featureStore:o}=this._queryEngine,p=[];for(const n of t){if(n.geometry&&s!==(0,r.Ji)(n.geometry)){i.push((0,c.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,c.O0)(this._fieldsIndex,this._requiredFields,t,n.attributes);if(a)i.push(a);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[l];e.uidToObjectId[n.uid]=t}n.geometry&&(n.geometry=(0,y.iV)((0,c.og)(n.geometry,u),n.geometry.spatialReference,u)),p.push(n),i.push((0,c.d1)(n.attributes[l]))}}o.addMany((0,d.Yn)([],p,s,a,n,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:a,spatialReference:l,featureStore:u}=this._queryEngine;for(const o of t){const{attributes:t,geometry:p}=o,f=t&&t[a];if(null==f){e.push((0,c.av)(`Identifier field ${a} missing`));continue}if(!u.has(f)){e.push((0,c.av)(`Feature with object id ${f} missing`));continue}const h=(0,d.EI)(u.getFeature(f),i,n,s);if(p){if(i!==(0,r.Ji)(p)){e.push((0,c.av)("Incorrect geometry type."));continue}h.geometry=(0,y.iV)((0,c.og)(p,l),p.spatialReference,l)}if(t){const i=(0,c.O0)(this._fieldsIndex,this._requiredFields,h.attributes,t);if(i){e.push(i);continue}}u.add((0,d.XA)(h,i,n,s,a)),e.push((0,c.d1)(f))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}}}]);
//# sourceMappingURL=4926.js.map