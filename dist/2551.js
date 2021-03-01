(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[2551],{90011:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(95830),n=r(38035);const i=(0,s.Z)("esri-text-decoder")?new TextDecoder("utf-8"):null,a=(0,s.Z)("safari")||(0,s.Z)("ios")?6:(0,s.Z)("ff")?12:32;class o{constructor(e,t,r=0,s=(e?e.byteLength:0)){this._tag=0,this._dataType=99,this.init(e,t,r,s)}init(e,t,r,s){this._data=e,this._dataView=t,this._pos=r,this._end=s}clone(){return new o(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getUint32(t+4,!0);return this._skip(8),r}getSFixed64(){const e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getInt32(t+4,!0);return this._skip(8),r}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r}getBytes(){const e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,r,s){const n=this.getMessage(),i=e(n,t,r,s);return n.release(),i}processMessage(e){const t=this.getMessage(),r=e(t);return t.release(),r}getMessage(){const e=this._getLength(),t=o.pool.acquire();return t.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){o.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t,r=this._pos,s=0;if(this._end-r>=10)do{if(t=e[r++],s|=127&t,0==(128&t))break;if(t=e[r++],s|=(127&t)<<7,0==(128&t))break;if(t=e[r++],s|=(127&t)<<14,0==(128&t))break;if(t=e[r++],s|=(127&t)<<21,0==(128&t))break;if(t=e[r++],s+=268435456*(127&t),0==(128&t))break;if(t=e[r++],s+=34359738368*(127&t),0==(128&t))break;if(t=e[r++],s+=4398046511104*(127&t),0==(128&t))break;if(t=e[r++],s+=562949953421312*(127&t),0==(128&t))break;if(t=e[r++],s+=72057594037927940*(127&t),0==(128&t))break;if(t=e[r++],s+=0x8000000000000000*(127&t),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;r!==this._end&&(t=e[r],0!=(128&t));)++r,s+=(127&t)*n,n*=128;if(r===this._end)throw new Error("Varint overrun!");++r,s+=t*n}return this._pos=r,s}_decodeSVarint(){const e=this._decodeVarint();return e%2?-(e+1)/2:e/2}_getLength(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,r){if((r=Math.min(this._end,r))-t>a&&i){const s=e.subarray(t,r);return i.decode(s)}let s="",n="";for(let i=t;i<r;++i){const t=e[i];128&t?n+="%"+t.toString(16):(s+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(s+=decodeURIComponent(n)),s}_toBytes(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)}}o.pool=new n.Z(o,null,(e=>{e._data=null,e._dataView=null}));const u=o},82905:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s,n=r(56140),i=(r(95830),r(36544),r(68055)),a=r(79881),o=r(87566),u=(r(10923),r(57002),r(86035),r(58385));const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let d=s=class extends u.wq{constructor(e){super(e),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:e}=this,t=function(e){const{exifInfo:t,exifName:r,tagName:s}=e;if(!t||!r||!s)return null;const n=t.find((e=>e.name===r));return n?function(e){const{tagName:t,tags:r}=e;if(!r||!t)return null;const s=r.find((e=>e.name===t));return s&&s.value||null}({tagName:s,tags:n.tags}):null}({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:e});return c[t]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,n._)([(0,a.Cb)({type:String})],d.prototype,"contentType",void 0),(0,n._)([(0,a.Cb)()],d.prototype,"exifInfo",void 0),(0,n._)([(0,a.Cb)({readOnly:!0,dependsOn:["exifInfo"]})],d.prototype,"orientationInfo",null),(0,n._)([(0,a.Cb)({type:i.z8})],d.prototype,"id",void 0),(0,n._)([(0,a.Cb)({type:String})],d.prototype,"globalId",void 0),(0,n._)([(0,a.Cb)({type:String})],d.prototype,"keywords",void 0),(0,n._)([(0,a.Cb)({type:String})],d.prototype,"name",void 0),(0,n._)([(0,a.Cb)({json:{read:!1}})],d.prototype,"parentGlobalId",void 0),(0,n._)([(0,a.Cb)({json:{read:!1}})],d.prototype,"parentObjectId",void 0),(0,n._)([(0,a.Cb)({type:i.z8})],d.prototype,"size",void 0),(0,n._)([(0,a.Cb)({json:{read:!1}})],d.prototype,"url",void 0),d=s=(0,n._)([(0,o.j)("esri.layers.support.AttachmentInfo")],d);const l=d},92551:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var s=r(56140),n=r(95830),i=r(59472),a=(r(36544),r(68055),r(79881)),o=r(87566),u=(r(10923),r(57002),r(86035),r(52937)),c=(r(36348),r(76194)),d=r(60853),l=r(7354),h=r(31518),p=r(11047),y=r(95986),f=r(94588),g=r(31036),m=r(72094);function b(e,t){return t}function _(e,t,r,s){switch(r){case 0:return x(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?x(e,t+s,1):function({translate:e,scale:t},r,s){return e[s]-r*t[s]}(e,t+s,1)}}function k(e,t,r,s){switch(r){case 2:return x(e,t,2);default:return _(e,t,r,s)}}function S(e,t,r,s){switch(r){case 2:return x(e,t,3);default:return _(e,t,r,s)}}function I(e,t,r,s){switch(r){case 3:return x(e,t,3);default:return k(e,t,r,s)}}function x({translate:e,scale:t},r,s){return e[s]+r*t[s]}class w{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=b,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=(0,m.k)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){e.fields.push(t);const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;default:(0,f.Bg)(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this.AttributesConstructor}}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,n=(0,g.$g)(r.clone(),r,!1,!1,this.transform),i=(0,g.di)(n,s,!1,!1);e.queryGeometryType=s,e.queryGeometry={...i}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),n=e[e.length-1];0===r&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),n.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?I:t?k:r?S:_}}var F=r(21561),T=r(31060),C=r(54721),q=r(20892);function R(e,t){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),!r.outFields||null!=t&&t.returnCountOnly?delete r.outFields:-1!==r.outFields.indexOf("*")?r.outFields="*":r.outFields=r.outFields.join(","),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function G(e,t,r={},s){const n=(0,q.A)({...e.query,f:"json",...s,...R(t,s)});return(0,C.default)(e.path+"/queryRelatedRecords",{...r,query:{...r.query,...n}})}let O=class extends y.Z{constructor(e){super(e),this.dynamicDataSource=null,this.format="json",this.gdbVersion=null,this.sourceSpatialReference=null}execute(e,t){return this.executeJSON(e,t).then((e=>c.default.fromJSON(e)))}async executeJSON(e,t){var r;const s={...this.requestOptions,...t},i=this._normalizeQuery(e),a=null!=(null==(r=e.outStatistics)?void 0:r[0]),o=(0,n.Z)("featurelayer-pbf-statistics"),u=!a||o;let c;if("pbf"===this.format&&u){const t=!i.quantizationParameters;try{c=(await(0,F.executeQueryPBF)(this.parsedUrl,i,new w({sourceSpatialReference:this.sourceSpatialReference,applyTransform:t}),s)).data}catch(e){if("query:parsing-pbf"!==e.name)throw e;this.format="json"}}return"json"!==this.format&&u||(c=(await(0,F.executeQuery)(this.parsedUrl,i,this.sourceSpatialReference,s)).data),this._normalizeFields(c.fields),c}executeForCount(e,t){return(0,F.executeQueryForCount)(this.parsedUrl,this._normalizeQuery(e),{...this.requestOptions,...t}).then((e=>e.data.count))}executeForExtent(e,t){return(0,F.executeQueryForExtent)(this.parsedUrl,this._normalizeQuery(e),{...this.requestOptions,...t}).then((e=>({count:e.data.count,extent:u.Z.fromJSON(e.data.extent)})))}executeForIds(e,t){return(0,F.executeQueryForIds)(this.parsedUrl,this._normalizeQuery(e),{...this.requestOptions,...t}).then((e=>e.data.objectIds))}executeRelationshipQuery(e,t){return e=p.Z.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),async function(e,t,r){const s=await G(e,t,r),n=s.data,i=n.geometryType,a=n.spatialReference,o={};for(const e of n.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:i,spatialReference:a,hasZ:!!n.hasZ,hasM:!!n.hasM,features:e.relatedRecords};if(null!=e.objectId)o[e.objectId]=t;else for(const r in e)e.hasOwnProperty(r)&&"relatedRecords"!==r&&(o[e[r]]=t)}return{...s,data:o}}(this.parsedUrl,e,{...this.requestOptions,...t}).then((e=>{const t=e.data,r={};return Object.keys(t).forEach((e=>r[e]=c.default.fromJSON(t[e]))),r}))}executeRelationshipQueryForCount(e,t){return e=p.Z.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),async function(e,t,r){const s=await G(e,t,r,{returnCountOnly:!0}),n=s.data,i={};for(const e of n.relatedRecordGroups)null!=e.objectId&&(i[e.objectId]=e.count);return{...s,data:i}}(this.parsedUrl,e,{...this.requestOptions,...t}).then((e=>e.data))}executeAttachmentQuery(e,t){return(0,T.X)(this.parsedUrl,l.Z.from(e),{...this.requestOptions,...t}).then((e=>(0,T.O)(e.data.attachmentGroups,this.parsedUrl.path)))}_normalizeQuery(e){const t=h.Z.from(e);if(!this.gdbVersion&&!this.dynamicDataSource)return t;const r=t===e?t.clone():t;return r.gdbVersion=e.gdbVersion||this.gdbVersion,r.dynamicDataSource=e.dynamicDataSource?d.D.from(e.dynamicDataSource):this.dynamicDataSource,r}_normalizeFields(e){if((0,i.pC)(this.fieldsIndex)&&(0,i.pC)(e))for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}};(0,s._)([(0,a.Cb)({type:d.D})],O.prototype,"dynamicDataSource",void 0),(0,s._)([(0,a.Cb)()],O.prototype,"fieldsIndex",void 0),(0,s._)([(0,a.Cb)()],O.prototype,"format",void 0),(0,s._)([(0,a.Cb)()],O.prototype,"gdbVersion",void 0),(0,s._)([(0,a.Cb)()],O.prototype,"sourceSpatialReference",void 0),O=(0,s._)([(0,o.j)("esri.tasks.QueryTask")],O);const P=O},42162:(e,t,r)=>{"use strict";r.d(t,{K9:()=>G,O7:()=>p,G$:()=>F});var s=r(59472),n=r(36544),i=r(32656),a=r(73127),o=r(90011),u=r(95157);const c=n.Z.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),d=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],l=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],h=["upperLeft","lowerLeft"];function p(e){return e>=d.length?null:d[e]}function y(e){return e>=h.length?null:h[e]}function f(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function g(e,t,r){const s=t.createPointGeometry(r);for(;e.next();)switch(e.tag()){case 3:{const r=e.getUInt32(),n=e.pos()+r;let i=0;for(;e.pos()<n;)t.addCoordinatePoint(s,e.getSInt64(),i++);break}case 1:case 2:default:e.skip()}return s}function m(e,t,r){const s=t.createGeometry(r),n=2+(r.hasZ?1:0)+(r.hasM?1:0);for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),n=e.pos()+r;let i=0;for(;e.pos()<n;)t.addLength(s,e.getUInt32(),i++);break}case 3:{const r=e.getUInt32(),i=e.pos()+r;let a=0;for(;e.pos()<i;)t.addCoordinate(s,e.getSInt64(),a),a++,a===n&&(a=0);break}case 1:default:e.skip()}return s}function b(e){const t=new a.Z;let r="esriGeometryPoint";for(;e.next();)switch(e.tag()){case 2:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.lengths.push(e.getUInt32());break}case 3:{const r=e.getUInt32(),s=e.pos()+r;for(;e.pos()<s;)t.coords.push(e.getSInt64());break}case 1:r=u.A[e.getEnum()];break;default:e.skip()}return{queryGeometry:t,queryGeometryType:r}}function _(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function k(e){const t={type:p(0)};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=p(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=(r=e.getEnum())>=l.length?null:l[r];break;case 5:try{t.domain=JSON.parse(e.getString())}catch(e){c.error(new i.Z("query:parsing-pbf","Failed to parse domain",{error:e})),t.domain=null}break;case 6:t.defaultValue=e.getString();break;default:e.skip()}var r;return t}function S(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.isSystemMaintained=e.getBool();break;default:e.skip()}return t}function I(e,t,r,s){const n=t.createFeature(r);let i=0;for(;e.next();)switch(e.tag()){case 1:{const t=s[i++].name;n.attributes[t]=e.processMessage(_);break}case 2:n.geometry=e.processMessageWithArgs(m,t,r);break;case 4:n.centroid=e.processMessageWithArgs(g,t,r);break;default:e.skip()}return n}function x(e){const t=[1,1,1,1];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function w(e){const t=[0,0,0,0];for(;e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function F(e){const t={originPosition:y(0)};for(;e.next();)switch(e.tag()){case 1:t.originPosition=y(e.getEnum());break;case 2:t.scale=e.processMessage(x);break;case 3:t.translate=e.processMessage(w);break;default:e.skip()}return t}function T(e){const t={};for(;e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function C(e,t){const r=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:r.latestWkid=e.getUInt32();break;case 3:r.vcsWkid=e.getUInt32();break;case 4:r.latestVcsWkid=e.getUInt32();break;default:e.skip()}return r}function q(e,t){const r=t.createFeatureResult();r.geometryType=f(t,0);let s=!1;for(;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString();break;case 3:r.globalIdFieldName=e.getString();break;case 4:r.geohashFieldName=e.getString();break;case 5:r.geometryProperties=e.processMessage(T);break;case 7:r.geometryType=f(t,e.getEnum());break;case 8:r.spatialReference=e.processMessageWithArgs(C,t);break;case 10:r.hasZ=e.getBool();break;case 11:r.hasM=e.getBool();break;case 12:r.transform=e.processMessage(F);break;case 9:{const t=e.getBool();r.exceededTransferLimit=t;break}case 13:t.addField(r,e.processMessage(k));break;case 15:s||(t.prepareFeatures(r),s=!0),t.addFeature(r,e.processMessageWithArgs(I,t,r,r.fields));break;case 2:r.uniqueIdField=e.processMessage(S);break;case 6:default:e.skip()}return t.finishFeatureResult(r),r}function R(e,t){const r={};let n=null;for(;e.next();)switch(e.tag()){case 4:n=e.processMessageWithArgs(b);break;case 1:r.featureResult=e.processMessageWithArgs(q,t);break;case 2:case 3:default:e.skip()}return(0,s.pC)(n)&&r.featureResult&&t.addQueryGeometry(r,n),r}function G(e,t){try{const r=2,s=new o.Z(new Uint8Array(e),new DataView(e)),n={};for(;s.next();)switch(s.tag()){case r:n.queryResult=s.processMessageWithArgs(R,t);break;default:s.skip()}return n}catch(e){throw new i.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},95157:(e,t,r)=>{"use strict";r.d(t,{A:()=>u,J:()=>c});var s=r(27780),n=r(93533),i=r(44195),a=r(60151),o=r(73127);const u=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class c{constructor(e){this.options=e,this.geometryTypes=u}createFeatureResult(){return new a.Z}prepareFeatures(){}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this.options.sourceSpatialReference||!e.spatialReference||(0,s.fS)(e.spatialReference,this.options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,n._R)(this.options.sourceSpatialReference)/(0,n._R)(e.spatialReference);if(1!==t)for(const r of e.features){if(!r.geometry||!r.geometry.coords)continue;const e=r.geometry.coords;for(let r=2;r<e.length;r+=3)e[r]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new i.Z}createSpatialReference(){return{wkid:0}}createGeometry(){return new o.Z}addField(e,t){e.fields.push(t)}addCoordinate(e,t){e.coords.push(t)}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new o.Z}}},91814:(e,t,r)=>{"use strict";r.d(t,{C:()=>n});var s=r(42162);function n(e,t){const r=(0,s.K9)(e,t),n=r.queryResult.featureResult,i=r.queryResult.queryGeometry,a=r.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=i,n.queryGeometryType=a),n}},21561:(e,t,r)=>{"use strict";r.r(t),r.d(t,{executeQuery:()=>p,executeQueryForCount:()=>m,executeQueryForExtent:()=>b,executeQueryForIds:()=>g,executeQueryPBF:()=>y,executeQueryPBFBuffer:()=>f,queryToQueryStringParameters:()=>h,runQuery:()=>_});var s=r(59472),n=r(10923),i=r(39105),a=r(56885),o=r(54721),u=r(91535),c=r(89867),d=r(91814),l=r(20892);function h(e,t){const r=e.geometry,n=e.toJSON(),i=n;if((0,s.pC)(r)&&(i.geometry=JSON.stringify(r),i.geometryType=(0,a.Ji)(r),i.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(i.objectIds=n.objectIds.join(",")),n.orderByFields&&(i.orderByFields=n.orderByFields.join(",")),!n.outFields||!n.returnDistinctValues&&(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?delete i.outFields:-1!==n.outFields.indexOf("*")?i.outFields="*":i.outFields=n.outFields.join(","),n.outSR?i.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(i.outSR=i.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(i.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(i.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(i.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.parameterValues&&(i.parameterValues=JSON.stringify(n.parameterValues)),n.rangeValues&&(i.rangeValues=JSON.stringify(n.rangeValues)),n.dynamicDataSource&&(i.layer=JSON.stringify({source:n.dynamicDataSource}),delete n.dynamicDataSource),n.timeExtent){const e=n.timeExtent,{start:t,end:r}=e;null==t&&null==r||(i.time=t===r?t:`${null==t?"null":t},${null==r?"null":r}`),delete n.timeExtent}return i}async function p(e,t,r,n){const i=(0,s.pC)(t.timeExtent)&&t.timeExtent.isEmpty?{data:{features:[]}}:await _(e,t,"json",n);return(0,c.p)(t,r,i.data),i}async function y(e,t,r,n){if((0,s.pC)(t.timeExtent)&&t.timeExtent.isEmpty)return(0,i.resolve)({data:r.createFeatureResult()});const a=await f(e,t,n),o=a;return o.data=(0,d.C)(a.data,r),o}function f(e,t,r){return _(e,t,"pbf",r)}function g(e,t,r){return(0,s.pC)(t.timeExtent)&&t.timeExtent.isEmpty?(0,i.resolve)({data:{objectIds:[]}}):_(e,t,"json",r,{returnIdsOnly:!0})}function m(e,t,r){return(0,s.pC)(t.timeExtent)&&t.timeExtent.isEmpty?(0,i.resolve)({data:{count:0}}):_(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function b(e,t,r){return(0,s.pC)(t.timeExtent)&&t.timeExtent.isEmpty?(0,i.resolve)({data:{count:0,extent:null}}):_(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error("Layer does not support extent calculation.");if(t.hasOwnProperty("count"))throw new Error("Layer does not support extent calculation.");return e}))}function _(e,t,r,i={},a){const c="string"==typeof e?(0,n.mN)(e):e,d=t.geometry?[t.geometry]:[];return i.responseType="pbf"===r?"array-buffer":"json",(0,u.aX)(d,null,i).then((e=>{const u=e&&e[0];(0,s.pC)(u)&&((t=t.clone()).geometry=u);const d=(0,l.A)({...c.query,f:r,...a,...h(t,a)});return(0,o.default)((0,n.v_)(c.path,"query"),{...i,query:{...d,...i.query}})}))}},31060:(e,t,r)=>{"use strict";r.d(t,{X:()=>d,O:()=>c});var s=r(10923),n=r(23838),i=r(54721),a=r(20892),o=r(82905);function u(e){const t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function c(e,t){const r={};for(const i of e){const{parentObjectId:e,parentGlobalId:a,attachmentInfos:u}=i;for(const i of u){const{id:u}=i,c=(0,s.qg)((0,n.Dp)(`${t}/${e}/attachments/${u}`)),d=o.Z.fromJSON(i);d.set({url:c,parentObjectId:e,parentGlobalId:a}),r[e]?r[e].push(d):r[e]=[d]}}return r}function d(e,t,r){let s={query:(0,a.A)({...e.query,f:"json",...u(t)})};return r&&(s={...r,...s,query:{...r.query,...s.query}}),(0,i.default)(e.path+"/queryAttachments",s)}},20892:(e,t,r)=>{"use strict";function s(e){const t={};for(const r in e){if("declaredClass"===r)continue;const n=e[r];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){t[r]=[];for(let e=0;e<n.length;e++)t[r][e]=s(n[e])}else"object"==typeof n?n.toJSON&&(t[r]=JSON.stringify(n)):t[r]=n}return t}r.d(t,{A:()=>s})}}]);
//# sourceMappingURL=2551.js.map