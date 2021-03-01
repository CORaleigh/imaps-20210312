(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[7415,1012,995],{71012:(e,t,i)=>{"use strict";i.d(t,{b:()=>r,c:()=>n,g:()=>s});"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return r(null==t&&i.path)}},i.exports),i.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},77142:(e,t,i)=>{"use strict";i.d(t,{Z:()=>_});var s=i(59472),n=i(36544),r=i(32656),a=i(35470),d=i(50897),o=i(31036),l=i(69996),u=i(95830),h=i(96233);const c={minX:0,minY:0,maxX:0,maxY:0};class y{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=(0,h.r)(9,(0,u.Z)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((i,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex();for(const i of function(e,t){return c.minX=t[0],c.minY=t[1],c.maxX=t[2],c.maxY=t[3],e.search(c)}(this._index,e))t(this._idByBounds.get(i))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}var f=i(44195),p=i(73127),m=i(24179);const g={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new f.Z(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=(0,m.Y)(new p.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)},_=class{constructor(e){this.geometryInfo=e,this._boundsStore=new y,this._featuresById=new Map,this._markedIds=new Set,this.events=new a.Z,this.featureAdapter=g}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=(0,d.Ue)(d.Gv);return this._featuresById.forEach((t=>{const i=this._boundsStore.get(t.objectId);i&&(e[0]=Math.min(i[0],e[0]),e[1]=Math.min(i[1],e[1]),e[2]=Math.max(i[2],e[2]),e[3]=Math.max(i[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,i){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t((0,l.JR)(i,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void n.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let a;if(this._markedIds.add(t),i?(e.displayId=i.displayId,a=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,s.pC)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);a=(0,o.$)(a||(0,d.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,a),this._featuresById.set(t,e)}_remove(e){return(0,s.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},69308:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>F});var s=i(32656),n=i(39105),r=i(27780),a=i(56885),d=i(4665),o=i(88210),l=i(31036),u=i(61121),h=i(71951),c=i(56471),y=i(77142),f=i(21895),p=i(73456);const m=r.Zn,g={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.Zn},_={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function I(e){return(0,a.wp)(e)?null!=e.z:!!e.hasZ}function b(e){return(0,a.wp)(e)?null!=e.m:!!e.hasM}const F=class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,n=this._inferLayerProperties(i,e.fields),r=e.fields||[],a=null!=e.hasM?e.hasM:n.hasM,l=null!=e.hasZ?e.hasZ:n.hasZ,p=!e.spatialReference&&!n.spatialReference,I=p?m:e.spatialReference||n.spatialReference,b=p?g:null,F=e.geometryType||n.geometryType,x=!F;let v=e.objectIdField||n.objectIdField,T=e.timeInfo;if(!x&&(p&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!F))throw new s.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!v)throw new s.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&v!==n.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${v}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),v=n.objectIdField),v&&!n.objectIdField){let e=null;r.some((t=>t.name===v&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):r.unshift({alias:v,name:v,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of r){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s.Z("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===v&&(e.type="esriFieldTypeOID"),-1===o.v.jsonValues.indexOf(e.type))throw new s.Z("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const B={};this._requiredFields=[];for(const e of r)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=(0,d.os)(e);e.nullable||void 0!==t?B[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new u.Z(r),this._createDefaultAttributes=(0,c.Dm)(B,v),T){if(T.startTimeField){const e=this._fieldsIndex.get(T.startTimeField);e?(T.startTimeField=e.name,e.type="esriFieldTypeDate"):T.startTimeField=null}if(T.endTimeField){const e=this._fieldsIndex.get(T.endTimeField);e?(T.endTimeField=e.name,e.type="esriFieldTypeDate"):T.endTimeField=null}if(T.trackIdField){const e=this._fieldsIndex.get(T.trackIdField);e?T.trackIdField=e.name:(T.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))}T.startTimeField||T.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:T}}),T=null)}const E={warnings:t,featureErrors:[],layerDefinition:{..._,drawingInfo:(0,c.bU)(F),templates:(0,c.Hq)(B),extent:b,geometryType:F,objectIdField:v,fields:r,hasZ:!!l,hasM:!!a,timeInfo:T},assignedObjectIds:{}};if(this._queryEngine=new f.Z({fields:r,geometryType:F,hasM:a,hasZ:l,objectIdField:v,spatialReference:I,featureStore:new y.Z({geometryType:F,hasM:a,hasZ:l}),timeInfo:T}),!i||!i.length)return this._nextObjectId=1,E;const w=i.reduce(((e,t)=>{const i=t.attributes&&t.attributes[v];return null==i||isNaN(i)||!isFinite(i)?e:Math.max(e,i)}),0);return this._nextObjectId=1+w,await(0,h._W)(i,I),this._loadInitialFeatures(E,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await(0,n.all)([(0,p.b)(t,i),(0,h._W)(e.adds,t),(0,h._W)(e.updates,t)]),this._applyEdits(e)}async queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_inferLayerProperties(e,t){let i,s,n=null,r=null,d=null;for(const t of e){const e=t.geometry;if(e&&(n||(n=(0,a.Ji)(e)),r||(r=e.spatialReference),null==i&&(i=I(e)),null==s&&(s=b(e)),n&&r&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(d=e.name)}return{geometryType:n,spatialReference:r,objectIdField:d,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:r,spatialReference:d,featureStore:o}=this._queryEngine,u=[];for(const s of t){if(null!=s.uid&&(e.assignedObjectIds[s.uid]=-1),s.geometry&&i!==(0,a.Ji)(s.geometry)){e.featureErrors.push((0,p.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=(0,p.O0)(this._fieldsIndex,this._requiredFields,t,s.attributes,!0,e.warnings);n?e.featureErrors.push(n):(this._assignObjectId(t,s.attributes,!0),s.attributes=t,null!=s.uid&&(e.assignedObjectIds[s.uid]=s.attributes[r]),s.geometry&&(s.geometry=(0,h.iV)(s.geometry,s.geometry.spatialReference,d)),u.push(s))}if(o.addMany((0,l.Yn)([],u,i,n,s,r)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push((0,p.d1)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:r,objectIdField:d,spatialReference:o,featureStore:u}=this._queryEngine,c=[];for(const n of t){if(n.geometry&&s!==(0,a.Ji)(n.geometry)){i.push((0,p.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=(0,p.O0)(this._fieldsIndex,this._requiredFields,t,n.attributes);if(r)i.push(r);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[d];e.uidToObjectId[n.uid]=t}n.geometry&&(n.geometry=(0,h.iV)((0,p.og)(n.geometry,o),n.geometry.spatialReference,o)),c.push(n),i.push((0,p.d1)(n.attributes[d]))}}u.addMany((0,l.Yn)([],c,s,r,n,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:r,spatialReference:d,featureStore:o}=this._queryEngine;for(const u of t){const{attributes:t,geometry:c}=u,y=t&&t[r];if(null==y){e.push((0,p.av)(`Identifier field ${r} missing`));continue}if(!o.has(y)){e.push((0,p.av)(`Feature with object id ${y} missing`));continue}const f=(0,l.EI)(o.getFeature(y),i,n,s);if(c){if(i!==(0,a.Ji)(c)){e.push((0,p.av)("Incorrect geometry type."));continue}f.geometry=(0,h.iV)((0,p.og)(c,d),c.spatialReference,d)}if(t){const i=(0,p.O0)(this._fieldsIndex,this._requiredFields,f.attributes,t);if(i){e.push(i);continue}}o.add((0,l.XA)(f,i,n,s,r)),e.push((0,p.d1)(y))}}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},73456:(e,t,i)=>{"use strict";i.d(t,{av:()=>d,d1:()=>l,b:()=>p,O0:()=>h,og:()=>f});var s=i(27780),n=i(4665);class r{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function d(e){return new a(e)}class o{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new o(e)}const u=new Set;function h(e,t,i,s,r=!1,a){u.clear();for(const t in s){const o=e.get(t);if(!o)continue;const l=s[t],h=c(o,l);if(h!==l&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:l,sanitizedValue:h}}),u.add(o.name),o&&(r||o.editable)){const e=(0,n.Qc)(o,h);if(e)return d((0,n.vP)(e,o,h));i[o.name]=h}}for(const e of t)if(!u.has(e.name))return d(`missing required field "${e.name}"`);return null}function c(e,t){let i=t;return"string"==typeof t&&(0,n.H7)(e)?i=parseFloat(t):null!=t&&(0,n.qN)(e)&&"string"!=typeof t&&(i=String(t)),(0,n.Pz)(i)}let y;function f(e,t){if(!e||!(0,s.JY)(t))return e;if("rings"in e||"paths"in e){if(!y)throw new TypeError("geometry engine not loaded");return y.simplify(t,e)}return e}async function p(e,t){!(0,s.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return y||(y=await Promise.all([i.e(5798),i.e(508)]).then(i.bind(i,93134)),y)}()}},88210:(e,t,i)=>{"use strict";i.d(t,{v:()=>s});const s=new(i(56274).Xn)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}}]);
//# sourceMappingURL=7415.js.map