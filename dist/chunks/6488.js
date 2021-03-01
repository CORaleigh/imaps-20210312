(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[6488],{20365:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var s=a(56140),r=a(95830),n=a(82550),l=a(10103),u=a(59472),i=(a(36544),a(68055),a(79881)),o=a(87566),d=a(32656),c=a(10923),h=(a(57002),a(86035),a(39105)),y=a(52937),p=a(54721),m=a(809),f=a(87864),g=a(72094),b=a(31060),F=a(92551),R=a(56471);const _=new Set(["Feature Layer","Table"]);let q=class extends m.Z{constructor(){super(...arguments),this.type="feature-layer"}load(e){const t=(0,u.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),(0,h.resolve)(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:a,gdbVersion:s,spatialReference:n,fieldsIndex:l}=this.layer,u=(0,r.Z)("featurelayer-pbf")&&e?"pbf":"json";return new F.Z({url:t.path,format:u,fieldsIndex:l,dynamicDataSource:a,gdbVersion:s,sourceSpatialReference:n})}async addAttachment(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/addAttachment",r=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,r.query);try{const e=await(0,p.default)(s,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}async updateAttachment(e,t,a){await this.load();const s=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),l=this._getFormDataForAttachment(a,n.query);try{const e=await(0,p.default)(r,{body:l});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(s,e)}}async applyEdits(e,t){await this.load();const a=e.addFeatures.map(this._serializeFeature,this),s=e.updateFeatures.map(this._serializeFeature,this),r=this._getFeatureIds(e.deleteFeatures);(0,g.P)(a,s,this.layer.spatialReference);const n=[],l=[],u=[...e.deleteAttachments];for(const t of e.addAttachments)n.push(await this._serializeAttachment(t));for(const t of e.updateAttachments)l.push(await this._serializeAttachment(t));const i=n.length||l.length||u.length?{adds:n,updates:l,deletes:u}:null,o=this._getLayerRequestOptions({method:"post",query:{adds:a.length?JSON.stringify(a):null,updates:s.length?JSON.stringify(s):null,deletes:r.length?r.join(","):null,gdbVersion:null==t?void 0:t.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,attachments:i&&JSON.stringify(i)}}),d=await(0,p.default)(this.layer.parsedUrl.path+"/applyEdits",o);return this._createEditsResult(d)}async deleteAttachments(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await(0,p.default)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:s}=this.layer,{data:r}=await(0,p.default)(`${s}/${a}`,t),{id:n,extent:l,fullExtent:u,timeExtent:i}=r,o=l||u;return{id:n,fullExtent:o&&y.Z.fromJSON(o),timeExtent:i&&f.Z.fromJSON({start:i[0],end:i[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:a}=this.layer,s=a.path;await this.load();const r=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,a=[];for(const e of t){const t=s+"/"+e+"/attachments";a.push((0,p.default)(t,r))}return(0,h.all)(a).then((e=>t.map(((t,a)=>({parentObjectId:t,attachmentInfos:e[a].data.attachmentInfos}))))).then((e=>(0,b.O)(e,s)))}return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async _fetchService(e){let t=this.layer.sourceJSON;if(!t){const{data:a}=await(0,p.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,r.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=a}this.sourceJSON=this._patchServiceJSON(t);const a=t.type;if(!_.has(a))throw new d.Z("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=(0,R.bU)(e.geometryType).renderer;(0,l.RB)("drawingInfo.renderer",t,e)}return e}_serializeFeature(e){const{geometry:t,attributes:a}=e;return(0,u.Wi)(t)?{attributes:a}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:a}}async _serializeAttachment(e){const{feature:t,attachment:a}=e,{globalId:s,name:r,contentType:n,data:l,uploadId:u}=a,i={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(i.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),u)i.uploadId=u;else if(l){const e=await async function(e){return"string"==typeof e?(0,c.sJ)(e)||{data:e}:(0,h.create)(((t,a)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t((0,c.sJ)(s.result)),s.onerror=e=>a(e)}))}(l);i.contentType=e.mediaType,i.data=e.data,l instanceof File&&(i.name=l.name)}return r&&(i.name=r),n&&(i.contentType=n),i}_getFeatureIds(e){const t=e[0];return t?"objectId"in t?this._getIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_getIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_createEditsResult(e){const t=e.data,a=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:a&&a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:a&&a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:a&&a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new d.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const a=t.details.messages&&t.details.messages[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new d.Z("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const e in t){const s=t[e];null!=s&&(a.set?a.set(e,s):a.append(e,s))}return a}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:a,dynamicDataSource:s}=this.layer;return{...e,query:(0,n.yd)({gdbVersion:a,layer:s?JSON.stringify({source:s}):void 0,...t.query,f:"json",...this.layer.customParameters,...null==e?void 0:e.query}),responseType:"json"}}};(0,s._)([(0,i.Cb)()],q.prototype,"type",void 0),(0,s._)([(0,i.Cb)({constructOnly:!0})],q.prototype,"layer",void 0),(0,s._)([(0,i.Cb)({readOnly:!0,dependsOn:["layer.parsedUrl","layer.gdbVersion","layer.dynamicDataSource","layer.fieldsIndex"]})],q.prototype,"queryTask",null),q=(0,s._)([(0,o.j)("esri.layers.graphics.sources.FeatureLayerSource")],q);const I=q},95986:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(56140),r=(a(95830),a(36544),a(68055),a(79881)),n=a(87566),l=a(10923),u=(a(57002),a(86035),a(82677));let i=class extends u.default{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,l.mN)(e):null}_encode(e,t,a){const s={};for(const r in e){if("declaredClass"===r)continue;const n=e[r];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){s[r]=[];for(let e=0;e<n.length;e++)s[r][e]=this._encode(n[e])}else if("object"==typeof n)if(n.toJSON){const e=n.toJSON(a&&a[r]);s[r]=t?e:JSON.stringify(e)}else s[r]=t?n:JSON.stringify(n);else s[r]=n}return s}};(0,s._)([(0,r.Cb)({readOnly:!0,dependsOn:["url"]})],i.prototype,"parsedUrl",null),(0,s._)([(0,r.Cb)()],i.prototype,"requestOptions",void 0),(0,s._)([(0,r.Cb)({type:String})],i.prototype,"url",void 0),i=(0,s._)([(0,n.j)("esri.tasks.Task")],i);const o=i}}]);
//# sourceMappingURL=6488.js.map