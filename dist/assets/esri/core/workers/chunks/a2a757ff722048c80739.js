self.webpackChunkRemoteClient([69],{168:function(t,e,r){"use strict";var a=r(14),s=(r(4),r(2),r(5),r(15)),n=r(18),o=r(25),i=(r(35),r(36),r(23));let u=class extends i.a{constructor(...t){super(...t),this.requestOptions=null,this.url=null}normalizeCtorArgs(t,e){return"string"!=typeof t?t:{url:t,...e}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(t){return t?Object(o.I)(t):null}_encode(t,e,r){const a={};for(const s in t){if("declaredClass"===s)continue;const n=t[s];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){a[s]=[];for(let t=0;t<n.length;t++)a[s][t]=this._encode(n[t])}else if("object"==typeof n)if(n.toJSON){const t=n.toJSON(r&&r[s]);a[s]=e?t:JSON.stringify(t)}else a[s]=e?n:JSON.stringify(n);else a[s]=n}return a}};Object(a.a)([Object(s.b)({readOnly:!0})],u.prototype,"parsedUrl",null),Object(a.a)([Object(s.b)()],u.prototype,"requestOptions",void 0),Object(a.a)([Object(s.b)({type:String})],u.prototype,"url",void 0),u=Object(a.a)([Object(n.a)("esri.tasks.Task")],u);var c=u;e.a=c},228:function(t,e,r){"use strict";var a,s=r(14),n=(r(4),r(2),r(5)),o=r(15),i=r(18),u=(r(25),r(35),r(36),r(52));const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let l=a=class extends u.a{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,e=function(t){const{exifInfo:e,exifName:r,tagName:a}=t;if(!e||!r||!a)return null;const s=e.find((t=>t.name===r));return s?function(t){const{tagName:e,tags:r}=t;if(!r||!e)return null;const a=r.find((t=>t.name===e));return a&&a.value||null}({tagName:a,tags:s.tags}):null}({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return c[e]||null}clone(){return new a({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};Object(s.a)([Object(o.b)({type:String})],l.prototype,"contentType",void 0),Object(s.a)([Object(o.b)()],l.prototype,"exifInfo",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],l.prototype,"orientationInfo",null),Object(s.a)([Object(o.b)({type:n.a})],l.prototype,"id",void 0),Object(s.a)([Object(o.b)({type:String})],l.prototype,"globalId",void 0),Object(s.a)([Object(o.b)({type:String})],l.prototype,"keywords",void 0),Object(s.a)([Object(o.b)({type:String})],l.prototype,"name",void 0),Object(s.a)([Object(o.b)({json:{read:!1}})],l.prototype,"parentGlobalId",void 0),Object(s.a)([Object(o.b)({json:{read:!1}})],l.prototype,"parentObjectId",void 0),Object(s.a)([Object(o.b)({type:n.a})],l.prototype,"size",void 0),Object(s.a)([Object(o.b)({json:{read:!1}})],l.prototype,"url",void 0),l=a=Object(s.a)([Object(i.a)("esri.layers.support.AttachmentInfo")],l);var d=l;e.a=d},233:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c}));var a=r(25),s=r(104),n=r(58),o=r(195),i=r(228);function u(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function c(t,e){const r={};for(const n of t){const{parentObjectId:t,parentGlobalId:o,attachmentInfos:u}=n;for(const n of u){const{id:u}=n,c=Object(a.b)(Object(s.a)(`${e}/${t}/attachments/${u}`)),l=i.a.fromJSON(n);l.set({url:c,parentObjectId:t,parentGlobalId:o}),r[t]?r[t].push(l):r[t]=[l]}}return r}function l(t,e,r){let a={query:Object(o.a)({...t.query,f:"json",...u(e)})};return r&&(a={...r,...a,query:{...r.query,...a.query}}),Object(n.default)(t.path+"/queryAttachments",a)}},250:function(t,e,r){"use strict";var a=r(14),s=r(4),n=r(0),o=(r(2),r(5),r(15)),i=r(18),u=(r(25),r(35),r(36),r(60)),c=(r(59),r(72)),l=r(113),d=r(144),h=r(105),y=r(138),p=r(168),f=r(95),m=r(137),b=r(150);function O(t,e){return e}function j(t,e,r,a){switch(r){case 0:return F(t,e+a,0);case 1:return"lowerLeft"===t.originPosition?F(t,e+a,1):function({translate:t,scale:e},r,a){return t[a]-r*e[a]}(t,e+a,1)}}function g(t,e,r,a){switch(r){case 2:return F(t,e,2);default:return j(t,e,r,a)}}function I(t,e,r,a){switch(r){case 2:return F(t,e,3);default:return j(t,e,r,a)}}function R(t,e,r,a){switch(r){case 3:return F(t,e,3);default:return g(t,e,r,a)}}function F({translate:t,scale:e},r,a){return t[a]+r*e[a]}class S{constructor(t){this.options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=O,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=Object(b.a)(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return{}}addField(t,e){t.fields.push(e);const r=t.fields.map((t=>t.name));this.AttributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){t.features.push(e)}prepareFeatures(t){switch(this.transform=t.transform,this.options.applyTransform&&t.transform&&(this.applyTransform=this.deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"esriGeometryPoint":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"esriGeometryPolygon":this.addCoordinate=(t,e,r)=>this.addCoordinatePolygon(t,e,r),this.createGeometry=t=>this.createPolygonGeometry(t);break;case"esriGeometryPolyline":this.addCoordinate=(t,e,r)=>this.addCoordinatePolyline(t,e,r),this.createGeometry=t=>this.createPolylineGeometry(t);break;case"esriGeometryMultipoint":this.addCoordinate=(t,e,r)=>this.addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this.createMultipointGeometry(t);break;default:Object(f.a)(t.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this.AttributesConstructor}}addLength(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:a}=e,s=Object(m.w)(r.clone(),r,!1,!1,this.transform),n=Object(m.h)(s,a,!1,!1);t.queryGeometryType=a,t.queryGeometry={...n}}createPointGeometry(t){const e={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(e.z=0),t.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:"z"in t?t.z=e:t.m=e;break;case 3:t.m=e}}transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)}addCoordinatePolyline(t,e,r){this.dehydratedAddPointsCoordinate(t.paths,e,r)}addCoordinatePolygon(t,e,r){this.dehydratedAddPointsCoordinate(t.rings,e,r)}addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const a=this.transformPathLikeValue(e,r);t.points[t.points.length-1].push(a)}createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const a=this.transformPathLikeValue(e,r),s=t[t.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),s.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=a}deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?R:e?g:r?I:j}}var q=r(203),v=r(233),x=r(58),w=r(195);function _(t,e){const r=t.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),!r.outFields||null!=e&&e.returnCountOnly?delete r.outFields:-1!==r.outFields.indexOf("*")?r.outFields="*":r.outFields=r.outFields.join(","),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function P(t,e,r={},a){const s=Object(w.a)({...t.query,f:"json",...a,..._(e,a)});return Object(x.default)(t.path+"/queryRelatedRecords",{...r,query:{...r.query,...s}})}let A=class extends p.a{constructor(t){super(t),this.dynamicDataSource=null,this.format="json",this.gdbVersion=null,this.sourceSpatialReference=null}execute(t,e){return this.executeJSON(t,e).then((t=>c.default.fromJSON(t)))}async executeJSON(t,e){var r;const a={...this.requestOptions,...e},n=this._normalizeQuery(t),o=null!=(null==(r=t.outStatistics)?void 0:r[0]),i=Object(s.a)("featurelayer-pbf-statistics"),u=!o||i;let c;if("pbf"===this.format&&u){const e=!n.quantizationParameters;try{c=(await Object(q.executeQueryPBF)(this.parsedUrl,n,new S({sourceSpatialReference:this.sourceSpatialReference,applyTransform:e}),a)).data}catch(t){if("query:parsing-pbf"!==t.name)throw t;this.format="json"}}return"json"!==this.format&&u||(c=(await Object(q.executeQuery)(this.parsedUrl,n,this.sourceSpatialReference,a)).data),this._normalizeFields(c.fields),c}executeForCount(t,e){return Object(q.executeQueryForCount)(this.parsedUrl,this._normalizeQuery(t),{...this.requestOptions,...e}).then((t=>t.data.count))}executeForExtent(t,e){return Object(q.executeQueryForExtent)(this.parsedUrl,this._normalizeQuery(t),{...this.requestOptions,...e}).then((t=>({count:t.data.count,extent:u.a.fromJSON(t.data.extent)})))}executeForIds(t,e){return Object(q.executeQueryForIds)(this.parsedUrl,this._normalizeQuery(t),{...this.requestOptions,...e}).then((t=>t.data.objectIds))}executeRelationshipQuery(t,e){return t=y.a.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),async function(t,e,r){const a=await P(t,e,r),s=a.data,n=s.geometryType,o=s.spatialReference,i={};for(const t of s.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:n,spatialReference:o,hasZ:!!s.hasZ,hasM:!!s.hasM,features:t.relatedRecords};if(null!=t.objectId)i[t.objectId]=e;else for(const r in t)t.hasOwnProperty(r)&&"relatedRecords"!==r&&(i[t[r]]=e)}return{...a,data:i}}(this.parsedUrl,t,{...this.requestOptions,...e}).then((t=>{const e=t.data,r={};return Object.keys(e).forEach((t=>r[t]=c.default.fromJSON(e[t]))),r}))}executeRelationshipQueryForCount(t,e){return t=y.a.from(t),(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),async function(t,e,r){const a=await P(t,e,r,{returnCountOnly:!0}),s=a.data,n={};for(const t of s.relatedRecordGroups)null!=t.objectId&&(n[t.objectId]=t.count);return{...a,data:n}}(this.parsedUrl,t,{...this.requestOptions,...e}).then((t=>t.data))}executeAttachmentQuery(t,e){return Object(v.a)(this.parsedUrl,d.a.from(t),{...this.requestOptions,...e}).then((t=>Object(v.b)(t.data.attachmentGroups,this.parsedUrl.path)))}_normalizeQuery(t){const e=h.a.from(t);if(!this.gdbVersion&&!this.dynamicDataSource)return e;const r=e===t?e.clone():e;return r.gdbVersion=t.gdbVersion||this.gdbVersion,r.dynamicDataSource=t.dynamicDataSource?l.a.from(t.dynamicDataSource):this.dynamicDataSource,r}_normalizeFields(t){if(Object(n.h)(this.fieldsIndex)&&Object(n.h)(t))for(const e of t){const t=this.fieldsIndex.get(e.name);t&&Object.assign(e,t.toJSON())}}};Object(a.a)([Object(o.b)({type:l.a})],A.prototype,"dynamicDataSource",void 0),Object(a.a)([Object(o.b)()],A.prototype,"fieldsIndex",void 0),Object(a.a)([Object(o.b)()],A.prototype,"format",void 0),Object(a.a)([Object(o.b)()],A.prototype,"gdbVersion",void 0),Object(a.a)([Object(o.b)()],A.prototype,"sourceSpatialReference",void 0),A=Object(a.a)([Object(i.a)("esri.tasks.QueryTask")],A);var T=A;e.a=T},262:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return o}));var a=r(4),s=r(6),n=r(177);function o(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?n.a:"esriGeometryPolyline"===t?n.c:n.b}}}function i(t,e){if(Object(a.a)("csp-restrictions"))return()=>({[e]:null,...t});try{let r=`this.${e} = null;`;for(const e in t)r+=`this${e.indexOf(".")?`["${e}"]`:"."+e} = ${JSON.stringify(t[e])};`;const a=new Function(r);return()=>new a}catch(r){return()=>({[e]:null,...t})}}function u(t={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(s.a)(t)}}]}},622:function(t,e,r){"use strict";r.r(e);var a=r(14),s=r(4),n=r(6),o=r(9),i=r(0),u=(r(2),r(5),r(15)),c=r(18),l=r(16),d=r(25),h=(r(35),r(36),r(60)),y=r(58),p=r(80),f=r(84),m=r(150),b=r(233),O=r(250),j=r(262);const g=new Set(["Feature Layer","Table"]);let I=class extends p.a{constructor(){super(...arguments),this.type="feature-layer"}load(t){const e=Object(i.h)(t)?t.signal:null;return this.addResolvingPromise(this._fetchService(e)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:t}},parsedUrl:e,dynamicDataSource:r,gdbVersion:a,spatialReference:n,fieldsIndex:o}=this.layer,i=Object(s.a)("featurelayer-pbf")&&t?"pbf":"json";return new O.a({url:e.path,format:i,fieldsIndex:o,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:n})}async addAttachment(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+r+"/addAttachment",s=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(e,s.query);try{const t=await Object(y.default)(a,{body:n});return this._createFeatureEditResult(t.data.addAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(r,t)}}async updateAttachment(t,e,r){await this.load();const a=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(r,n.query);try{const t=await Object(y.default)(s,{body:o});return this._createFeatureEditResult(t.data.updateAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(a,t)}}async applyEdits(t,e){await this.load();const r=t.addFeatures.map(this._serializeFeature,this),a=t.updateFeatures.map(this._serializeFeature,this),s=this._getFeatureIds(t.deleteFeatures);Object(m.b)(r,a,this.layer.spatialReference);const n=[],o=[],i=[...t.deleteAttachments];for(const e of t.addAttachments)n.push(await this._serializeAttachment(e));for(const e of t.updateAttachments)o.push(await this._serializeAttachment(e));const u=n.length||o.length||i.length?{adds:n,updates:o,deletes:i}:null,c=this._getLayerRequestOptions({method:"post",query:{adds:r.length?JSON.stringify(r):null,updates:a.length?JSON.stringify(a):null,deletes:s.length?s.join(","):null,gdbVersion:null==e?void 0:e.gdbVersion,rollbackOnFailure:null==e?void 0:e.rollbackOnFailureEnabled,useGlobalIds:null==e?void 0:e.globalIdUsed,attachments:u&&JSON.stringify(u)}}),l=await Object(y.default)(this.layer.parsedUrl.path+"/applyEdits",c);return this._createEditsResult(l)}async deleteAttachments(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await Object(y.default)(a,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(t){throw this._createAttachmentErrorResult(r,t)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then((async()=>{const e=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:r,url:a}=this.layer,{data:s}=await Object(y.default)(`${a}/${r}`,e),{id:n,extent:o,fullExtent:i,timeExtent:u}=s,c=o||i;return{id:n,fullExtent:c&&h.a.fromJSON(c),timeExtent:u&&f.a.fromJSON({start:u[0],end:u[1]})}}))}async queryAttachments(t,e={}){const{parsedUrl:r}=this.layer,a=r.path;await this.load();const s=this._getLayerRequestOptions(e);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:e}=t,r=[];for(const t of e){const e=a+"/"+t+"/attachments";r.push(Object(y.default)(e,s))}return Promise.all(r).then((t=>e.map(((e,r)=>({parentObjectId:e,attachmentInfos:t[r].data.attachmentInfos}))))).then((t=>Object(b.b)(t,a)))}return this.queryTask.executeAttachmentQuery(t,s)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:{...this.layer.customParameters,...null==e?void 0:e.query}})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:{...this.layer.customParameters,...null==e?void 0:e.query}})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:{...this.layer.customParameters,...null==e?void 0:e.query}})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:{...this.layer.customParameters,...null==e?void 0:e.query}})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:{...this.layer.customParameters,...null==e?void 0:e.query}})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:{...this.layer.customParameters,...null==e?void 0:e.query}})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:{...this.layer.customParameters,...null==e?void 0:e.query}})}async _fetchService(t){let e=this.layer.sourceJSON;if(!e){const{data:r}=await Object(y.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:Object(s.a)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));e=r}this.sourceJSON=this._patchServiceJSON(e);const r=e.type;if(!g.has(r))throw new l.a("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(t){var e;if("Table"!==t.type&&t.geometryType&&(null==t||null==(e=t.drawingInfo)||!e.renderer)&&!t.defaultSymbol){const e=Object(j.c)(t.geometryType).renderer;Object(o.c)("drawingInfo.renderer",e,t)}return t}_serializeFeature(t){const{geometry:e,attributes:r}=t;return Object(i.g)(e)?{attributes:r}:"mesh"===e.type||"extent"===e.type?null:{geometry:e.toJSON(),attributes:r}}async _serializeAttachment(t){const{feature:e,attachment:r}=t,{globalId:a,name:s,contentType:n,data:o,uploadId:i}=r,u={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(u.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),i)u.uploadId=i;else if(o){const t=await async function(t){return"string"==typeof t?Object(d.i)(t)||{data:t}:new Promise(((e,r)=>{const a=new FileReader;a.readAsDataURL(t),a.onload=()=>e(Object(d.i)(a.result)),a.onerror=t=>r(t)}))}(o);u.contentType=t.mediaType,u.data=t.data,o instanceof File&&(u.name=o.name)}return s&&(u.name=s),n&&(u.contentType=n),u}_getFeatureIds(t){const e=t[0];return e?"objectId"in e?this._getIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map((t=>t.attributes&&t.attributes[e]))}_getIdsFromFeatureIdentifier(t){return t.map((t=>t.objectId))}_createEditsResult(t){const e=t.data,r=t.data&&t.data.attachments;return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:r&&r.addResults?r.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:r&&r.updateResults?r.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:r&&r.deleteResults?r.deleteResults.map(this._createFeatureEditResult,this):[]}}_createFeatureEditResult(t){const e=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new l.a("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const r=e.details.messages&&e.details.messages[0]||e.message,a=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new l.a("feature-layer-source:attachment-failure",r,{code:a})}}_getFormDataForAttachment(t,e){const r=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(r)for(const t in e){const a=e[t];null!=a&&(r.set?r.set(t,a):r.append(t,a))}return r}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:r,dynamicDataSource:a}=this.layer;return{...t,query:Object(n.c)({gdbVersion:r,layer:a?JSON.stringify({source:a}):void 0,...e.query,f:"json",...this.layer.customParameters,...null==t?void 0:t.query}),responseType:"json"}}};Object(a.a)([Object(u.b)()],I.prototype,"type",void 0),Object(a.a)([Object(u.b)({constructOnly:!0})],I.prototype,"layer",void 0),Object(a.a)([Object(u.b)({readOnly:!0})],I.prototype,"queryTask",null),I=Object(a.a)([Object(c.a)("esri.layers.graphics.sources.FeatureLayerSource")],I);var R=I;e.default=R}});