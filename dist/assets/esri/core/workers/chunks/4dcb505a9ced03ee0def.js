self.webpackChunkRemoteClient([78],{122:function(e,t,n){"use strict";var i,r=n(18),a=(n(7),n(3),n(4)),o=n(20),s=n(54),u=n(53),l=n(52),d=n(19),c=(n(24),n(34),n(35),n(50)),p=n(142),h=n(245);const m=new s.a({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let y=i=class extends c.a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?n.value:null}readValueType(e,{description:t}){let n;try{n=JSON.parse(t)}catch(e){}return n?m.fromJSON(n.fieldValueType):null}clone(){return new i({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};Object(r.a)([Object(o.b)({type:String,json:{write:!0}})],y.prototype,"alias",void 0),Object(r.a)([Object(o.b)({type:[String,Number],json:{write:{allowNull:!0}}})],y.prototype,"defaultValue",void 0),Object(r.a)([Object(o.b)()],y.prototype,"description",void 0),Object(r.a)([Object(l.a)("description")],y.prototype,"readDescription",null),Object(r.a)([Object(o.b)({types:p.d,json:{read:{reader:p.b},write:!0}})],y.prototype,"domain",void 0),Object(r.a)([Object(o.b)({type:Boolean,json:{write:!0}})],y.prototype,"editable",void 0),Object(r.a)([Object(o.b)({type:a.a,json:{write:!0}})],y.prototype,"length",void 0),Object(r.a)([Object(o.b)({type:String,json:{write:!0}})],y.prototype,"name",void 0),Object(r.a)([Object(o.b)({type:Boolean,json:{write:!0}})],y.prototype,"nullable",void 0),Object(r.a)([Object(u.a)(h.a)],y.prototype,"type",void 0),Object(r.a)([Object(o.b)()],y.prototype,"valueType",void 0),Object(r.a)([Object(l.a)("valueType",["description"])],y.prototype,"readValueType",null),y=i=Object(r.a)([Object(d.a)("esri.layers.support.Field")],y);var b=y;t.a=b},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(61),r=(n(59),n(130)),a=n(104),o=n(316);let s=0;class u{constructor(e){this.type="FeatureSetReader",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._xmin=-1,this._xmax=0,this._ymin=0,this._ymax=0,this._joined=[],this.instance=e}static createInstance(){return s++,s=s>65535?0:s,s}get _hasFilter(){return-1!==this._xmin}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(e){return this.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this.setComputedNumericAtIndex(t,0)}getComputedString(e){return this.getComputedStringAtIndex(0)}setComputedString(e,t){return this.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}setComputedNumericAtIndex(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t)}getComputedStringAtIndex(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}setComputedStringAtIndex(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}transform(e,t){const n=this.copy();return n._tx=e,n._ty=t,n}extent(e,t,n,i){const r=this.copy();return r._xmin=e,r._xmax=n,r._ymin=t,r._ymax=i,r}hasFilter(){return this._hasFilter}readAttribute(e,t=!1){const n=this._readAttribute(e,t);if(void 0!==n)return n;for(const n of this._joined){n.setIndex(this.getIndex());const i=n._readAttribute(e,t);if(void 0!==i)return i}}readAttributes(){return this._readAttributes()}joinAttributes(e){this._joined.push(e)}readArcadeFeature(){return this}geometry(){const e=this.readHydratedGeometry(),t=Object(a.h)(e,this.geometryType,this.hasZ,this.hasM),n=Object(i.a)(t);return n.spatialReference=this._arcadeSpatialReference,n}field(e){return this.readAttribute(e,!0)}hasField(e){return!0}setField(e,t){}keys(){return[]}castToText(){return""}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const e=this.readUnquantizedGeometry();if(!e||e.hasIndeterminateRingOrder)return null;const t=this.getQuantizationTransform();return Object(o.a)(new r.a,e,this.hasM,this.hasZ,t)}copyInto(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._xmin=this._xmin,e._xmax=this._xmax,e._ymin=this._ymin,e._ymax=this._ymax}}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p}));var i,r,a,o=n(0);let s;const u=null!=(i=null==(r=o.a.esriConfig)?void 0:r.locale)?i:null==(a=o.a.dojoConfig)?void 0:a.locale;function l(){var e,t;return null!=(e=null!=u?u:null==(t=o.a.navigator)?void 0:t.language)?e:"en"}function d(){return void 0===s&&(s=l()),s}const c=[];function p(e){return c.push(e),{remove(){c.splice(c.indexOf(e),1)}}}const h=[];function m(e){return h.push(e),{remove(){c.splice(h.indexOf(e),1)}}}null==o.a.addEventListener||o.a.addEventListener("languagechange",(function(){const e=null!=undefined?undefined:l();s!==e&&(s=e,[...h].forEach((t=>{t.call(null,e)})),[...c].forEach((t=>{t.call(null,e)})))}))},96:function(e,t,n){"use strict";function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function r(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function o(e,t){const n=t||a(e),i=e.valueUnit||"unknown";return"unknown"===n?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r}))}});