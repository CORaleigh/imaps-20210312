(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[6194],{76194:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});var r=o(56140),n=(o(95830),o(59472)),i=(o(36544),o(68055),o(79881)),s=o(56274),l=o(30590),a=o(87566),p=o(60538),y=(o(10923),o(57002),o(86035),o(58385)),u=o(73032),f=o(56885),c=o(36348),m=o(15988),h=o(70834);const d=new s.Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let g=class extends y.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=u.Z.fromJSON(t.spatialReference),r=[];for(let t=0;t<e.length;t++){const i=e[t],s=m.default.fromJSON(i),l=i.geometry&&i.geometry.spatialReference;(0,n.pC)(s.geometry)&&!l&&(s.geometry.spatialReference=o),r.push(s)}return r}writeGeometryType(e,t,o,r){if(e)return void d.write(e,t,o,r);const{features:i}=this;if(i)for(const e of i)if(e&&(0,n.pC)(e.geometry))return void d.write(e.geometry.type,t,o,r)}readQueryGeometry(e,t){if(!e)return null;const o=!!e.spatialReference,r=(0,f.im)(e);return!o&&t.spatialReference&&(r.spatialReference=u.Z.fromJSON(t.spatialReference)),r}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:o}=this;if(o)for(const e of o)e&&(0,n.pC)(e.geometry)&&e.geometry.spatialReference&&(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let o=0;o<t.features.length;o++){const r=t.features[o];if(r.geometry){const t=e&&e[o];r.geometry=t&&t.toJSON()||r.geometry}}return t}quantize(e){const{scale:[t,o],translate:[r,i]}=e,s=this.features,l=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-r)/t)),(e=>Math.round((i-e)/o)));for(let e=0,t=s.length;e<t;e++)l((0,n.Wg)(s[e].geometry))||(s.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:o}=this;if(!o)return this;const{translate:[r,i],scale:[s,l]}=o,a=this._getHydrationFunction(e,(e=>e*s+r),(e=>i-e*l));for(const{geometry:e}of t)(0,n.pC)(e)&&a(e);return this.transform=null,this}_quantizePoints(e,t,o){let r,n;const i=[];for(let s=0,l=e.length;s<l;s++){const l=e[s];if(s>0){const e=t(l[0]),s=o(l[1]);e===r&&s===n||(i.push([e-r,s-n]),r=e,n=s)}else r=t(l[0]),n=o(l[1]),i.push([r,n])}return i.length>0?i:null}_getQuantizationFunction(e,t,o){return"point"===e?e=>(e.x=t(e.x),e.y=o(e.y),e):"polyline"===e||"polygon"===e?e=>{const r=(0,f.oU)(e)?e.rings:e.paths,n=[];for(let e=0,i=r.length;e<i;e++){const i=r[e],s=this._quantizePoints(i,t,o);s&&n.push(s)}return n.length>0?((0,f.oU)(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?e=>{let r;return r=this._quantizePoints(e.points,t,o),r.length>0?(e.points=r,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,o){return"point"===e?e=>{e.x=t(e.x),e.y=o(e.y)}:"polyline"===e||"polygon"===e?e=>{const r=(0,f.oU)(e)?e.rings:e.paths;let n,i;for(let e=0,s=r.length;e<s;e++){const s=r[e];for(let e=0,r=s.length;e<r;e++){const r=s[e];e>0?(n+=r[0],i+=r[1]):(n=r[0],i=r[1]),r[0]=t(n),r[1]=o(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=o(e.ymin),e.xmax=t(e.xmax),e.ymax=o(e.ymax)}:"multipoint"===e?e=>{const r=e.points;let n,i;for(let e=0,s=r.length;e<s;e++){const s=r[e];e>0?(n+=s[0],i+=s[1]):(n=s[0],i=s[1]),s[0]=t(n),s[1]=o(i)}}:void 0}};(0,r._)([(0,i.Cb)({type:String,json:{write:!0}})],g.prototype,"displayFieldName",void 0),(0,r._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"exceededTransferLimit",void 0),(0,r._)([(0,i.Cb)({type:[m.default],json:{write:!0}})],g.prototype,"features",void 0),(0,r._)([(0,l.r)("features")],g.prototype,"readFeatures",null),(0,r._)([(0,i.Cb)({type:[h.Z],json:{write:!0}})],g.prototype,"fields",void 0),(0,r._)([(0,i.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:d.read}}})],g.prototype,"geometryType",void 0),(0,r._)([(0,p.c)("geometryType")],g.prototype,"writeGeometryType",null),(0,r._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasM",void 0),(0,r._)([(0,i.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasZ",void 0),(0,r._)([(0,i.Cb)({types:c.qM,json:{write:!0}})],g.prototype,"queryGeometry",void 0),(0,r._)([(0,l.r)("queryGeometry")],g.prototype,"readQueryGeometry",null),(0,r._)([(0,i.Cb)({type:u.Z,json:{write:!0}})],g.prototype,"spatialReference",void 0),(0,r._)([(0,p.c)("spatialReference")],g.prototype,"writeSpatialReference",null),(0,r._)([(0,i.Cb)({json:{write:!0}})],g.prototype,"transform",void 0),g=(0,r._)([(0,a.j)("esri.tasks.support.FeatureSet")],g),g.prototype.toJSON.isDefaultToJSON=!0,g||(g={});const _=g}}]);
//# sourceMappingURL=6194.js.map