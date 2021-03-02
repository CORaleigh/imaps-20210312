self.webpackChunkRemoteClient([56],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u})),n(4);var i,r,s=n(128),a=n(141),o=n(139),l=n(140);function u(e,t){switch(e.type){case"range":{const n="range"in e?e.range[0]:e.minValue,r="range"in e?e.range[1]:e.maxValue;if(+t<n||+t>r)return i.VALUE_OUT_OF_RANGE;break}case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every((e=>null==e||e.code!==t)))return i.INVALID_CODED_VALUE}return null}(r=i||(i={})).VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",r.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value";const d={key:"type",base:s.a,typeMap:{range:l.a,"coded-value":a.a,inherited:o.a}};function c(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}}function f(e){if(!e||!e.type)return null;switch(e.type){case"range":return l.a.fromJSON(e);case"codedValue":return a.a.fromJSON(e);case"inherited":return o.a.fromJSON(e)}return null}},128:function(e,t,n){"use strict";var i=n(14),r=(n(4),n(2),n(5),n(15)),s=n(55),a=n(56),o=n(18),l=(n(25),n(35),n(36),n(52));const u=new s.a({inherited:"inherited",codedValue:"coded-value",range:"range"});let d=class extends l.a{constructor(e){super(e),this.name=null,this.type=null}};Object(i.a)([Object(r.b)({type:String,json:{write:!0}})],d.prototype,"name",void 0),Object(i.a)([Object(a.a)(u)],d.prototype,"type",void 0),d=Object(i.a)([Object(o.a)("esri.layers.support.Domain")],d);var c=d;t.a=c},139:function(e,t,n){"use strict";var i,r=n(14),s=(n(4),n(2),n(5),n(15),n(56)),a=n(18),o=(n(25),n(35),n(36),n(128));let l=i=class extends o.a{constructor(e){super(e),this.type="inherited"}clone(){return new i}};Object(r.a)([Object(s.a)({inherited:"inherited"})],l.prototype,"type",void 0),l=i=Object(r.a)([Object(a.a)("esri.layers.support.InheritedDomain")],l);var u=l;t.a=u},140:function(e,t,n){"use strict";var i,r=n(14),s=(n(4),n(2),n(5),n(15)),a=n(56),o=n(18),l=(n(25),n(35),n(36),n(128));let u=i=class extends l.a{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new i({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};Object(r.a)([Object(s.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],u.prototype,"maxValue",void 0),Object(r.a)([Object(s.b)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],u.prototype,"minValue",void 0),Object(r.a)([Object(a.a)({range:"range"})],u.prototype,"type",void 0),u=i=Object(r.a)([Object(o.a)("esri.layers.support.RangeDomain")],u);var d=u;t.a=d},141:function(e,t,n){"use strict";var i,r=n(14),s=(n(4),n(6)),a=(n(2),n(5),n(15)),o=n(56),l=n(18),u=(n(25),n(35),n(36),n(52));let d=i=class extends u.a{constructor(e){super(e),this.name=null,this.code=null}clone(){return new i({name:this.name,code:this.code})}};Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],d.prototype,"name",void 0),Object(r.a)([Object(a.b)({type:[String,Number],json:{write:!0}})],d.prototype,"code",void 0),d=i=Object(r.a)([Object(l.a)("esri.layers.support.CodedValue")],d);var c,f=d,h=n(128);let y=c=class extends h.a{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some((e=>(String(e.code)===n&&(t=e.name),!!t)))}return t}clone(){return new c({codedValues:Object(s.a)(this.codedValues),name:this.name})}};Object(r.a)([Object(a.b)({type:[f],json:{write:!0}})],y.prototype,"codedValues",void 0),Object(r.a)([Object(o.a)({codedValue:"coded-value"})],y.prototype,"type",void 0),y=c=Object(r.a)([Object(l.a)("esri.layers.support.CodedValueDomain")],y);var p=y;t.a=p},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return u}));const i=[252,146,31,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},s={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},o={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},d={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return a}));var i=n(0),r=n(57);let s;async function a(){return s||(s=(async()=>{const e=await Promise.all([n.e(14),n.e(83)]).then(n.bind(null,437));return await e.arcade.load(),{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),s}n(59);const o=(e,t,n)=>d.create(e,t,n,null,["$feature"]),l=(e,t,n)=>d.create(e,t,n,null,["$feature","$view"]),u=(e,t,n,i)=>d.create(e,t,n,i,["$feature","$view"]);class d{constructor(e,t,n,i,r,s,a,o){this.script=e,this.evaluate=r,this.fields=a,this._syntaxTree=i,this._arcade=t,this._arcadeDictionary=n,this._arcadeFeature=s,this._spatialReference=o,this._referencesGeometry=t.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(e,t,n,s,o,l){const{arcade:u,Feature:c,Dictionary:f}=await a(),h=r.a.fromJSON(t),y=u.parseScript(e,l),p=o.reduce(((e,t)=>({...e,[t]:null})),{});let m=null;Object(i.h)(s)&&(m=new f(s),m.immutable=!0,p.$config=null);const b=u.scriptUsesGeometryEngine(y)&&u.enableGeometrySupport(),g=u.scriptUsesFeatureSet(y)&&u.enableFeatureSetSupport(),_=u.scriptIsAsync(y)&&u.enableAsyncSupport(),I={vars:p,spatialReference:h,useAsync:!!_},j=new f;j.immutable=!1,j.setField("scale",0);const F=u.compileScript(y,I);return await Promise.all([b,g,_]),new d(e,u,f,y,(e=>("$view"in e&&e.$view&&(j.setField("scale",e.$view.scale),e.$view=j),m&&(e.$config=m),F({vars:e,spatialReference:h}))),new c,n,h)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}repurposeAdapter(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)}}},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=new(n(55).a)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return a}));var i=n(4),r=n(6),s=n(177);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.a:"esriGeometryPolyline"===e?s.c:s.b}}}function o(e,t){if(Object(i.a)("csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${t.indexOf(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const i=new Function(n);return()=>new i}catch(n){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(r.a)(e)}}]}},317:function(e,t,n){"use strict";var i=n(0),r=n(2),s=n(16),a=n(111),o=n(145),l=n(217),u=n(137),d=n(4),c=n(298);const f={minX:0,minY:0,maxX:0,maxY:0};class h{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=Object(c.a)(9,Object(d.a)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex();for(const n of function(e,t){return f.minX=t[0],f.minY=t[1],f.maxX=t[2],f.maxY=t[3],e.search(f)}(this._index,e))t(this._idByBounds.get(n))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}var y=n(201),p=n(154),m=n(299);const b={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new y.a(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(m.a)(new p.a,e.geometry,t.hasZ,t.hasM)),e.centroid)};t.a=class{constructor(e){this.geometryInfo=e,this._boundsStore=new h,this._featuresById=new Map,this._markedIds=new Set,this.events=new a.a,this.featureAdapter=b}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(o.c)(o.a);return this._featuresById.forEach((t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t(Object(l.h)(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.a("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let a;if(this._markedIds.add(t),n?(e.displayId=n.displayId,a=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(i.h)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);a=Object(u.o)(a||Object(o.c)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,a),this._featuresById.set(t,e)}_remove(e){return Object(i.h)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return y}));var i=n(93),r=n(68);class s{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new s,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function o(e){return new a(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function u(e){return new l(e)}const d=new Set;function c(e,t,n,i,s=!1,a){d.clear();for(const t in i){const l=e.get(t);if(!l)continue;const u=i[t],c=f(l,u);if(c!==u&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:l,originalValue:u,sanitizedValue:c}}),d.add(l.name),l&&(s||l.editable)){const e=Object(r.o)(l,c);if(e)return o(Object(r.p)(e,l,c));n[l.name]=c}}for(const e of t)if(!d.has(e.name))return o(`missing required field "${e.name}"`);return null}function f(e,t){let n=t;return"string"==typeof t&&Object(r.l)(e)?n=parseFloat(t):null!=t&&Object(r.m)(e)&&"string"!=typeof t&&(n=String(t)),Object(r.n)(n)}let h;function y(e,t){if(!e||!Object(i.i)(t))return e;if("rings"in e||"paths"in e){if(!h)throw new TypeError("geometry engine not loaded");return h.simplify(t,e)}return e}async function p(e,t){!Object(i.i)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return h||(h=await Promise.all([n.e(8),n.e(21)]).then(n.bind(null,521)),h)}()}},546:function(e,t,n){"use strict";n.r(t);var i=n(16),r=n(93),s=n(63),a=n(68),o=n(239),l=n(137),u=n(136),d=n(262),c=n(317),f=n(300),h=n(389),y=n(455);const p=r.a,m={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:r.a},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function g(e){return Object(s.f)(e)?null!=e.z:!!e.hasZ}function _(e){return Object(s.f)(e)?null!=e.m:!!e.hasM}t.default=class{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:n}=e,r=this._inferLayerProperties(n,e.fields),s=e.fields||[],l=null!=e.hasM?e.hasM:r.hasM,y=null!=e.hasZ?e.hasZ:r.hasZ,g=!e.spatialReference&&!r.spatialReference,_=g?p:e.spatialReference||r.spatialReference,I=g?m:null,j=e.geometryType||r.geometryType,F=!j;let O=e.objectIdField||r.objectIdField,v=e.timeInfo;if(!F&&(g&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!j))throw new i.a("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!O)throw new i.a("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&O!==r.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${O}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),O=r.objectIdField),O&&!r.objectIdField){let e=null;s.some((t=>t.name===O&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):s.unshift({alias:O,name:O,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of s){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new i.a("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===O&&(e.type="esriFieldTypeOID"),-1===o.a.jsonValues.indexOf(e.type))throw new i.a("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}const S={};this._requiredFields=[];for(const e of s)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable;const t=Object(a.j)(e);e.nullable||void 0!==t?S[e.name]=t:this._requiredFields.push(e)}if(this._fieldsIndex=new u.a(s),this._createDefaultAttributes=Object(d.a)(S,O),v){if(v.startTimeField){const e=this._fieldsIndex.get(v.startTimeField);e?(v.startTimeField=e.name,e.type="esriFieldTypeDate"):v.startTimeField=null}if(v.endTimeField){const e=this._fieldsIndex.get(v.endTimeField);e?(v.endTimeField=e.name,e.type="esriFieldTypeDate"):v.endTimeField=null}if(v.trackIdField){const e=this._fieldsIndex.get(v.trackIdField);e?v.trackIdField=e.name:(v.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:v}}))}v.startTimeField||v.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:v}}),v=null)}const x={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:Object(d.c)(j),templates:Object(d.b)(S),extent:I,geometryType:j,objectIdField:O,fields:s,hasZ:!!y,hasM:!!l,timeInfo:v},assignedObjectIds:{}};if(this._queryEngine=new h.a({fields:s,geometryType:j,hasM:l,hasZ:y,objectIdField:O,spatialReference:_,featureStore:new c.a({geometryType:j,hasM:l,hasZ:y}),timeInfo:v}),!n||!n.length)return this._nextObjectId=1,x;const T=n.reduce(((e,t)=>{const n=t.attributes&&t.attributes[O];return null==n||isNaN(n)||!isFinite(n)?e:Math.max(e,n)}),0);return this._nextObjectId=1+T,await Object(f.a)(n,_),this._loadInitialFeatures(x,n)}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([Object(y.c)(t,n),Object(f.a)(e.adds,t),Object(f.a)(e.updates,t)]),this._applyEdits(e)}async queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}_inferLayerProperties(e,t){let n,i,r=null,a=null,o=null;for(const t of e){const e=t.geometry;if(e&&(r||(r=Object(s.c)(e)),a||(a=e.spatialReference),null==n&&(n=g(e)),null==i&&(i=_(e)),r&&a&&null!=n&&null!=i))break}if(t&&t.length){let e=null;t.some((t=>{const n="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,n||i}))&&(o=e.name)}return{geometryType:r,spatialReference:a,objectIdField:o,hasM:i,hasZ:n}}_loadInitialFeatures(e,t){const{geometryType:n,hasM:i,hasZ:r,objectIdField:a,spatialReference:o,featureStore:u}=this._queryEngine,d=[];for(const i of t){if(null!=i.uid&&(e.assignedObjectIds[i.uid]=-1),i.geometry&&n!==Object(s.c)(i.geometry)){e.featureErrors.push(Object(y.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=Object(y.d)(this._fieldsIndex,this._requiredFields,t,i.attributes,!0,e.warnings);r?e.featureErrors.push(r):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,null!=i.uid&&(e.assignedObjectIds[i.uid]=i.attributes[a]),i.geometry&&(i.geometry=Object(f.b)(i.geometry,i.geometry.spatialReference,o)),d.push(i))}if(u.addMany(Object(l.c)([],d,n,r,i,a)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:n}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),n&&n.length&&this._applyUpdateEdits(r,n),i&&i.length){for(const e of i)r.deleteResults.push(Object(y.b)(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:r,hasZ:a,objectIdField:o,spatialReference:u,featureStore:d}=this._queryEngine,c=[];for(const r of t){if(r.geometry&&i!==Object(s.c)(r.geometry)){n.push(Object(y.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=Object(y.d)(this._fieldsIndex,this._requiredFields,t,r.attributes);if(a)n.push(a);else{if(this._assignObjectId(t,r.attributes),r.attributes=t,null!=r.uid){const t=r.attributes[o];e.uidToObjectId[r.uid]=t}r.geometry&&(r.geometry=Object(f.b)(Object(y.e)(r.geometry,u),r.geometry.spatialReference,u)),c.push(r),n.push(Object(y.b)(r.attributes[o]))}}d.addMany(Object(l.c)([],c,i,a,r,o))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:r,objectIdField:a,spatialReference:o,featureStore:u}=this._queryEngine;for(const d of t){const{attributes:t,geometry:c}=d,h=t&&t[a];if(null==h){e.push(Object(y.a)(`Identifier field ${a} missing`));continue}if(!u.has(h)){e.push(Object(y.a)(`Feature with object id ${h} missing`));continue}const p=Object(l.f)(u.getFeature(h),n,r,i);if(c){if(n!==Object(s.c)(c)){e.push(Object(y.a)("Incorrect geometry type."));continue}p.geometry=Object(f.b)(Object(y.e)(c,o),c.spatialReference,o)}if(t){const n=Object(y.d)(this._fieldsIndex,this._requiredFields,p.attributes,t);if(n){e.push(n);continue}}u.add(Object(l.a)(p,n,r,i,a)),e.push(Object(y.b)(h))}}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;n&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(15),r=n(55);function s(e,t={ignoreUnknown:!0}){const n=e instanceof r.a?e:new r.a(e,t),s={type:null!=t&&t.ignoreUnknown?n.apiValues:String,readOnly:null==t?void 0:t.readOnly,json:{type:n.jsonValues,read:(null==t||!t.readOnly)&&{reader:n.read},write:{writer:n.write}}};return void 0!==(null==t?void 0:t.default)&&(s.json.default=t.default),Object(i.b)(s)}},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return U})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return _})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return B})),n.d(t,"m",(function(){return D})),n.d(t,"n",(function(){return R})),n.d(t,"o",(function(){return M})),n.d(t,"p",(function(){return k}));var i=n(9),r=n(0),s=(n(16),n(124)),a=n(202);const o=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],l=["field","normalizationField"];function u(e,t){if(null!=e&&null!=t)for(const n of Array.isArray(e)?e:[e])if(d(o,n,t),"visualVariables"in n&&n.visualVariables)for(const e of n.visualVariables)d(l,e,t)}function d(e,t,n){if(e)for(const r of e){const e=Object(i.b)(r,t),s=e&&"function"!=typeof e&&m(n,e);s&&Object(i.c)(r,s.name,t)}}function c(e,t){if(null!=e&&null!=t)if("startField"in e){const n=m(t,e.startField),i=m(t,e.endField);e.startField=n&&n.name||null,e.endField=i&&i.name||null}else{const n=m(t,e.startTimeField),i=m(t,e.endTimeField);e.startTimeField=n&&n.name||null,e.endTimeField=i&&i.name||null}}const f=new Set;function h(e,t){return e&&t?(f.clear(),y(f,e,t),Array.from(f).sort()):[]}function y(e,t,n){if(n)if(t&&t.length)if(n.includes("*"))for(const{name:n}of t)e.add(n);else for(const i of n)p(e,t,i);else{if(n.includes("*"))return e.clear(),void e.add("*");for(const t of n)e.add(t)}}function p(e,t,n){if(t&&t.length){const i=m(t,n);i&&e.add(i.name)}else"string"==typeof n&&e.add(n)}function m(e,t){if("string"!=typeof t)return null;if(null!=e){t=t.toLowerCase();for(const n of e)if(n&&n.name.toLowerCase()===t)return n}return null}function b(e,t){if(!e||!t||"string"!=typeof t)return!1;t=t.toLowerCase();for(const n of e)if(n&&n.name.toLowerCase()===t)return!0;return!1}async function g(e,t,n){if(!n)return;const{arcadeUtils:i}=await Object(a.e)(),r=i.extractFieldNames(n);for(const n of r)p(e,t,n)}function _({displayField:e,fields:t}){return e||(t&&t.length?I(t,"name-or-title")||I(t,"unique-identifier")||I(t,"type-or-category")||function(e){for(const t of e){if(!t||!t.name)continue;const e=t.name.toLowerCase();if(e.indexOf("name")>-1||e.indexOf("title")>-1)return t.name}return null}(t):null)}function I(e,t){for(const n of e)if(n&&n.valueType&&n.valueType===t)return n.name;return null}function j(e){const t=e.defaultValue;return void 0!==t&&E(e,t)?t:e.nullable?null:void 0}function F(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function O(e){return null===e||F(e)}const v="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;function S(e){return null===e||v(e)}function x(e){return null!=e&&"string"==typeof e}function T(e){return null===e||x(e)}function w(){return!0}function E(e,t){let n;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":n=e.nullable?S:v;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":n=e.nullable?O:F;break;case"string":case"esriFieldTypeString":n=e.nullable?T:x;break;default:n=w}return 1===arguments.length?n:n(t)}const V=new Set(["integer","small-integer","single","double","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]);function B(e){return null!=e&&V.has(e.type)}function D(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)}var A,L;function R(e){return null==e||"number"==typeof e&&isNaN(e)?null:e}function M(e,t){return e.nullable&&null===t?null:B(e)&&!function(e,t){const n="string"==typeof e?N(e):e;return!!n&&(n.isInteger?v(t)&&t>=n.min&&t<=n.max:t>=n.min&&t<=n.max)}(e.type,Number(t))?A.OUT_OF_RANGE:E(e,t)?e.domain?Object(s.e)(e.domain,t):null:L.INVALID_TYPE}function N(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return $;case"esriFieldTypeInteger":case"integer":return q;case"esriFieldTypeSingle":case"single":return C;case"esriFieldTypeDouble":case"double":return G}}(A||(A={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range",function(e){e.INVALID_TYPE="type-validation-error::invalid-type"}(L||(L={}));const $={min:-32768,max:32767,isInteger:!0},q={min:-2147483648,max:2147483647,isInteger:!0},C={min:-34e37,max:12e37,isInteger:!1},G={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};function k(e,t,n){switch(e){case s.a.INVALID_CODED_VALUE:return`Value ${n} is not in the coded domain - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case s.a.VALUE_OUT_OF_RANGE:return`Value ${n} is out of the range of valid values - field: ${t.name}, domain: ${JSON.stringify(t.domain)}`;case L.INVALID_TYPE:return`Value ${n} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;case A.OUT_OF_RANGE:{const{min:e,max:i}=N(t.type);return`Value ${n} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${i}`}}}function U(e,t){return!function(e,t,n){if(!t||!t.attributes||!e){if(Object(r.h)(n))for(const t of e)n.add(t);return!0}const i=t.attributes;let s=!1;for(const t of e)if(!(t in i)){if(s=!0,!Object(r.h)(n))break;n.add(t)}return s}(e,t,null)}}});