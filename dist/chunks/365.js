(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[365],{20365:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var r=a(56140),s=a(95830),n=a(82550),u=a(10103),i=a(59472),l=(a(36544),a(68055),a(79881)),o=a(87566),d=a(32656),c=a(10923),h=(a(57002),a(86035),a(39105)),y=a(52937),p=a(54721),m=a(809),f=a(87864),b=a(72094),g=a(31060),F=a(92551),R=a(56471);const q=new Set(["Feature Layer","Table"]);let _=class extends m.Z{constructor(){super(...arguments),this.type="feature-layer"}load(e){const t=(0,i.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),(0,h.resolve)(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:a,gdbVersion:r,spatialReference:n,fieldsIndex:u}=this.layer,i=(0,s.Z)("featurelayer-pbf")&&e?"pbf":"json";return new F.Z({url:t.path,format:i,fieldsIndex:u,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:n})}async addAttachment(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/addAttachment",s=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,s.query);try{const e=await(0,p.default)(r,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}async updateAttachment(e,t,a){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(a,n.query);try{const e=await(0,p.default)(s,{body:u});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(e){throw this._createAttachmentErrorResult(r,e)}}async applyEdits(e,t){await this.load();const a=e.addFeatures.map(this._serializeFeature,this),r=e.updateFeatures.map(this._serializeFeature,this),s=this._getFeatureIds(e.deleteFeatures);(0,b.P)(a,r,this.layer.spatialReference);const n=[],u=[],i=[...e.deleteAttachments];for(const t of e.addAttachments)n.push(await this._serializeAttachment(t));for(const t of e.updateAttachments)u.push(await this._serializeAttachment(t));const l=n.length||u.length||i.length?{adds:n,updates:u,deletes:i}:null,o=this._getLayerRequestOptions({method:"post",query:{adds:a.length?JSON.stringify(a):null,updates:r.length?JSON.stringify(r):null,deletes:s.length?s.join(","):null,gdbVersion:null==t?void 0:t.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,attachments:l&&JSON.stringify(l)}}),d=await(0,p.default)(this.layer.parsedUrl.path+"/applyEdits",o);return this._createEditsResult(d)}async deleteAttachments(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await(0,p.default)(r,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(e){throw this._createAttachmentErrorResult(a,e)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:s}=await(0,p.default)(`${r}/${a}`,t),{id:n,extent:u,fullExtent:i,timeExtent:l}=s,o=u||i;return{id:n,fullExtent:o&&y.Z.fromJSON(o),timeExtent:l&&f.Z.fromJSON({start:l[0],end:l[1]})}}))}async queryAttachments(e,t={}){const{parsedUrl:a}=this.layer,r=a.path;await this.load();const s=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,a=[];for(const e of t){const t=r+"/"+e+"/attachments";a.push((0,p.default)(t,s))}return(0,h.all)(a).then((e=>t.map(((t,a)=>({parentObjectId:t,attachmentInfos:e[a].data.attachmentInfos}))))).then((e=>(0,g.O)(e,r)))}return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async _fetchService(e){let t=this.layer.sourceJSON;if(!t){const{data:a}=await(0,p.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,s.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=a}this.sourceJSON=this._patchServiceJSON(t);const a=t.type;if(!q.has(a))throw new d.Z("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=(0,R.bU)(e.geometryType).renderer;(0,u.RB)("drawingInfo.renderer",t,e)}return e}_serializeFeature(e){const{geometry:t,attributes:a}=e;return(0,i.Wi)(t)?{attributes:a}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:a}}async _serializeAttachment(e){const{feature:t,attachment:a}=e,{globalId:r,name:s,contentType:n,data:u,uploadId:i}=a,l={globalId:r,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(l.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),i)l.uploadId=i;else if(u){const e=await async function(e){return"string"==typeof e?(0,c.sJ)(e)||{data:e}:(0,h.create)(((t,a)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t((0,c.sJ)(r.result)),r.onerror=e=>a(e)}))}(u);l.contentType=e.mediaType,l.data=e.data,u instanceof File&&(l.name=u.name)}return s&&(l.name=s),n&&(l.contentType=n),l}_getFeatureIds(e){const t=e[0];return t?"objectId"in t?this._getIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map((e=>e.attributes&&e.attributes[t]))}_getIdsFromFeatureIdentifier(e){return e.map((e=>e.objectId))}_createEditsResult(e){const t=e.data,a=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:a&&a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:a&&a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:a&&a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new d.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const a=t.details.messages&&t.details.messages[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new d.Z("feature-layer-source:attachment-failure",a,{code:r})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const e in t){const r=t[e];null!=r&&(a.set?a.set(e,r):a.append(e,r))}return a}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:a,dynamicDataSource:r}=this.layer;return{...e,query:(0,n.yd)({gdbVersion:a,layer:r?JSON.stringify({source:r}):void 0,...t.query,f:"json",...this.layer.customParameters,...null==e?void 0:e.query}),responseType:"json"}}};(0,r._)([(0,l.Cb)()],_.prototype,"type",void 0),(0,r._)([(0,l.Cb)({constructOnly:!0})],_.prototype,"layer",void 0),(0,r._)([(0,l.Cb)({readOnly:!0,dependsOn:["layer.parsedUrl","layer.gdbVersion","layer.dynamicDataSource","layer.fieldsIndex"]})],_.prototype,"queryTask",null),_=(0,r._)([(0,o.j)("esri.layers.graphics.sources.FeatureLayerSource")],_);const I=_},56471:(e,t,a)=>{"use strict";a.d(t,{Dm:()=>i,Hq:()=>l,bU:()=>u});var r=a(95830),s=a(82550),n=a(7767);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}function i(e,t){if((0,r.Z)("csp-restrictions"))return()=>({[t]:null,...e});try{let a=`this.${t} = null;`;for(const t in e)a+=`this${t.indexOf(".")?`["${t}"]`:`.${t}`} = ${JSON.stringify(e[t])};`;const r=new Function(a);return()=>new r}catch(a){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}}}]);
//# sourceMappingURL=365.js.map