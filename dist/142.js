(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[142,3925],{40365:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var i=s(92823);const r=class{constructor(e,t){this._storage=new i.WJ,this._storage.maxSize=e,t&&this._storage.registerRemoveFunc("",t)}put(e,t,s){this._storage.put(e,t,s,1)}pop(e){return this._storage.pop(e)}get(e){return this._storage.get(e)}clear(){this._storage.clearAll()}destroy(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}}},43925:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>j});var i,r=s(56140),o=(s(95830),s(82550)),n=s(59472),l=s(88263),a=s(36544),u=(s(68055),s(79881)),p=s(87566),d=s(60538),c=s(32656),h=(s(10923),s(57002),s(86035),s(39105)),y=s(30927),b=s(4665),f=s(78745),m=s(82314),g=s(36654),_=s(71598),v=s(19540),w=s(40365);const S=a.Z.getLogger("esri.renderers.DictionaryRenderer"),C={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};let x=i=class extends((0,v.W)(_.Z)){constructor(e){super(e),this._ongoingRequests=new Map,this._symbolCache=new w.Z(100),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,s,i){null!=i&&i.origin||super.writeVisualVariables(e,t,s,i)}clone(){return new i({config:(0,o.d9)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:(0,o.d9)(this.fieldMap),url:(0,o.d9)(this.url),visualVariables:(0,o.d9)(this.visualVariables)})}async getSymbolAsync(e,t){let s;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{s=await this._dictionaryPromise}catch(e){if((0,h.isAbortError)(e))return this._dictionaryPromise=null,null}const i={};if(this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t];if(s&&null!==e.attributes[s]&&void 0!==e.attributes[s]){const r=""+e.attributes[s];i[t]=r}else i[t]=""}const r=s(i,t);if(!r||"string"!=typeof r)return null;const o=(0,l.hP)(r).toString(),a=this._symbolCache.get(o);if(a)return a.catch((()=>{this._symbolCache.pop(o)})),a;const u=r.split(";"),p=[],d=[];for(const e of u)if(e&&0!==e.length)if(-1===e.indexOf("po:"))if(-1!==e.indexOf("|"))for(const t of e.split("|"))this._itemNames.has(t)&&p.push(t);else this._itemNames.has(e)&&p.push(e);else{const t=e.substr(3).split("|");if(3===t.length){const e=t[0],s=t[1];let i=t[2];if("DashTemplate"===s)i=i.split(" ").map((e=>Number(e)));else if("Color"===s){const e=new f.default(i).toRgba();i=[e[0],e[1],e[2],255*e[3]]}else i=Number(i);d.push({primitiveName:e,propertyName:s,value:i})}}const c=!(0,n.pC)(e.geometry)||!e.geometry.hasZ&&"point"===e.geometry.type,y=this._cimPartsToCIMSymbol(p,d,c,t);return this._symbolCache.put(o,y,1),y}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await(0,b.io)(e,t,this.scaleExpression);const s=t.map((e=>e.name));for(const t in this.fieldMap)s.indexOf(this.fieldMap[t])<0||e.add(this.fieldMap[t])}get arcadeRequired(){return!0}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void S.error("no valid URL!");const t=(0,n.pC)(e)?e.abortOptions:null,s=(0,g.default)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...t}),[{data:i}]=await Promise.all([s,(0,y.LC)()]);if(!i)throw this._dictionaryPromise=null,new c.Z("esri.renderers.DictionaryRenderer","Bad dictionary data!");const r=i.expression,o=i.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=new Set(i.itemsNames),this._symbolFields=o.symbol;const l={};if(this.config){const e=this.config;for(const t in e)l[t]=e[t]}for(const e of o.configuration)l.hasOwnProperty(e.name)||(l[e.name]=e.value);const a=[];if((0,n.pC)(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],i=e.fields.filter((e=>e.name===s));i.length>0&&a.push({...i[0],name:t})}return this._dictionaryPromise=(0,y.pp)(r,(0,n.pC)(e)?e.spatialReference:null,a,l).then((e=>{const t={scale:0};return(s,i)=>{const r=e.repurposeFeature({geometry:null,attributes:s});return t.scale=(0,n.pC)(i)?i.scale:void 0,e.evaluate({$feature:r,$view:t})}})).catch((e=>(S.error("Creating dictinoary expression failed:",e),null))),this._dictionaryPromise}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._symbolFields}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const s=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=(0,g.default)(s,{responseType:"json",query:{f:"json"},...t});this._ongoingRequests.set(e,i);try{return(await i).data}catch(t){return this._ongoingRequests.delete(e),Promise.reject(t)}}_combineSymbolParts(e,t,s){if(!e||0===e.length)return null;const i={...e[0]};if(e.length>1){i.symbolLayers=[];for(const t of e){const e=t;i.symbolLayers.unshift(...e.symbolLayers)}}return s&&(i.callout=C),{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}}async _cimPartsToCIMSymbol(e,t,s,i){const r=new Array(e.length);for(let t=0;t<e.length;t++)r[t]=this._getSymbolPart(e[t],i);const o=await Promise.all(r);return new m.Z({data:this._combineSymbolParts(o,t,s)})}};(0,r._)([(0,u.Cb)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],x.prototype,"config",void 0),(0,r._)([(0,u.Cb)({type:Object,json:{write:!0}})],x.prototype,"fieldMap",void 0),(0,r._)([(0,u.Cb)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],x.prototype,"scaleExpression",void 0),(0,r._)([(0,d.c)("scaleExpression")],x.prototype,"writeData",null),(0,r._)([(0,u.Cb)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],x.prototype,"scaleExpressionTitle",void 0),(0,r._)([(0,u.Cb)({type:String,json:{write:!0}})],x.prototype,"url",void 0),(0,r._)([(0,d.c)("visualVariables")],x.prototype,"writeVisualVariables",null),x=i=(0,r._)([(0,p.j)("esri.renderers.DictionaryRenderer")],x);const j=x},3642:(e,t,s)=>{"use strict";s.d(t,{Z:()=>E});var i,r=s(56140),o=(s(95830),s(82550)),n=s(36544),l=s(68055),a=s(79881),u=s(51894),p=s(9870),d=s(87566),c=(s(10923),s(57002),s(86035),s(4665)),h=s(78745),y=s(48142),b=s(5674),f=s(71598),m=s(19540),g=s(60263),_=s(58385);const v=n.Z.getLogger("esri.renderers.support.AttributeColorInfo");let w=i=class extends _.wq{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return null==e?e:"function"==typeof e?(v.error(".field: field must be a string value"),null):(0,l.Zs)(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new i({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,r._)([(0,a.Cb)({type:h.default,json:{type:[Number],write:!0}})],w.prototype,"color",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],w.prototype,"field",void 0),(0,r._)([(0,g.p)("field")],w.prototype,"castField",null),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],w.prototype,"label",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],w.prototype,"valueExpression",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],w.prototype,"valueExpressionTitle",void 0),w=i=(0,r._)([(0,d.j)("esri.renderers.support.AttributeColorInfo")],w);const S=w;var C;let x=C=class extends _.wq{constructor(){super(...arguments),this.unit=null}clone(){return new C({unit:this.unit})}};(0,r._)([(0,a.Cb)({type:String,json:{write:!0}})],x.prototype,"unit",void 0),x=C=(0,r._)([(0,d.j)("esri.renderers.support.DotDensityLegendOptions")],x);const j=x;var R;let V=R=class extends((0,m.W)(f.Z)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new h.default([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new y.Z,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new b.default({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new R({attributes:(0,o.d9)(this.attributes),backgroundColor:(0,o.d9)(this.backgroundColor),dotBlendingEnabled:(0,o.d9)(this.dotBlendingEnabled),dotShape:(0,o.d9)(this.dotShape),dotSize:(0,o.d9)(this.dotSize),dotValue:(0,o.d9)(this.dotValue),legendOptions:(0,o.d9)(this.legendOptions),outline:(0,o.d9)(this.outline),referenceScale:(0,o.d9)(this.referenceScale),visualVariables:(0,o.d9)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return`${this.attributes.map((e=>e.field||e.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes)s.valueExpression&&await(0,c.io)(e,t,s.valueExpression),s.field&&e.add(s.field)}};(0,r._)([(0,a.Cb)({type:[S],json:{write:!0}})],V.prototype,"attributes",void 0),(0,r._)([(0,a.Cb)({type:h.default,json:{write:!0}})],V.prototype,"backgroundColor",void 0),(0,r._)([(0,a.Cb)({type:Boolean}),(0,u.B)("dotBlendingEnabled")],V.prototype,"blendDots",void 0),(0,r._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],V.prototype,"dotBlendingEnabled",void 0),(0,r._)([(0,a.Cb)({type:String,json:{write:!1}})],V.prototype,"dotShape",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{write:!1}})],V.prototype,"dotSize",void 0),(0,r._)([(0,a.Cb)({type:j,json:{write:!0}})],V.prototype,"legendOptions",void 0),(0,r._)([(0,a.Cb)({type:y.Z,json:{default:null,write:!0}})],V.prototype,"outline",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{write:!0}})],V.prototype,"dotValue",void 0),(0,r._)([(0,a.Cb)({type:Number}),(0,u.B)("dotValue")],V.prototype,"referenceDotValue",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{write:!0}})],V.prototype,"referenceScale",void 0),(0,r._)([(0,a.Cb)({type:Number,json:{write:!0}})],V.prototype,"seed",void 0),(0,r._)([(0,p.J)({dotDensity:"dot-density"})],V.prototype,"type",void 0),V=R=(0,r._)([(0,d.j)("esri.renderers.DotDensityRenderer")],V);const E=V},81882:(e,t,s)=>{"use strict";s.d(t,{Z:()=>y});var i,r=s(56140),o=(s(95830),s(82550)),n=(s(36544),s(68055),s(79881)),l=s(9870),a=s(87566),u=(s(10923),s(57002),s(86035),s(4665)),p=s(78745),d=s(71598),c=s(95505);let h=i=class extends d.Z{constructor(e){super(e),this.blurRadius=10,this.colorStops=[new c.Z({ratio:0,color:new p.default("rgba(255, 140, 0, 0)")}),new c.Z({ratio:.75,color:new p.default("rgba(255, 140, 0, 1)")}),new c.Z({ratio:.9,color:new p.default("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.maxPixelIntensity=100,this.minPixelIntensity=0,this.type="heatmap"}async collectRequiredFields(e,t){const s=this.field;s&&"string"==typeof s&&(0,u.AB)(e,t,s)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new i({blurRadius:this.blurRadius,colorStops:(0,o.d9)(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})}};(0,r._)([(0,n.Cb)({type:Number,json:{write:!0}})],h.prototype,"blurRadius",void 0),(0,r._)([(0,n.Cb)({type:[c.Z],json:{write:!0}})],h.prototype,"colorStops",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],h.prototype,"field",void 0),(0,r._)([(0,n.Cb)({type:Number,json:{write:{overridePolicy:(e,t,s)=>({enabled:null==s})}}})],h.prototype,"fieldOffset",void 0),(0,r._)([(0,n.Cb)({type:Number,json:{write:!0}})],h.prototype,"maxPixelIntensity",void 0),(0,r._)([(0,n.Cb)({type:Number,json:{write:!0}})],h.prototype,"minPixelIntensity",void 0),(0,r._)([(0,l.J)({heatmap:"heatmap"})],h.prototype,"type",void 0),h=i=(0,r._)([(0,a.j)("esri.renderers.HeatmapRenderer")],h);const y=h},4037:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var i,r=s(56140),o=(s(95830),s(82550)),n=(s(36544),s(68055),s(79881)),l=s(9870),a=s(87566),u=(s(10923),s(57002),s(86035),s(71598)),p=s(19540),d=s(92723);let c=i=class extends((0,p.W)(u.Z)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map((s=>s.collectRequiredFields(e,t))))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,t)=>e+JSON.stringify(t)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new i({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:(0,o.d9)(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,r._)([(0,n.Cb)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,r._)([(0,n.Cb)(d.G)],c.prototype,"symbol",void 0),(0,r._)([(0,l.J)({simple:"simple"})],c.prototype,"type",void 0),c=i=(0,r._)([(0,a.j)("esri.renderers.SimpleRenderer")],c);const h=c},95505:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var i,r=s(56140),o=(s(95830),s(36544),s(68055),s(79881)),n=s(87566),l=(s(10923),s(57002),s(86035),s(58385)),a=s(78745);let u=i=class extends l.wq{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new i({color:this.color,ratio:this.ratio})}};(0,r._)([(0,o.Cb)({type:a.default,json:{write:!0}})],u.prototype,"color",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],u.prototype,"ratio",void 0),u=i=(0,r._)([(0,n.j)("esri.renderers.support.HeatmapColorStop")],u);const p=u},142:(e,t,s)=>{"use strict";s.d(t,{im:()=>u,ij:()=>d,cW:()=>a});s(95830);var i=s(10103),r=s(15307),o=s(84300),n=s(32656),l=s(89772);function a(e,t,s,r){const o=function(e,t){return e?function(e,t){if(!t||"web-scene"!==t.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;case"heatmap":case"dictionary":case"dot-density":default:return!1}}(e,t)?e.write({},t):(t.messages&&t.messages.push(new n.Z("renderer:unsupported",`Renderer of type '${e.declaredClass}' are not supported in scenes.`,{renderer:e,context:t})),null):null}(e,r);o&&(0,i.RB)(s,o,t)}function u(e,t){return d(e,null,t)}const p=(0,o.d)({types:l.A});function d(e,t,s){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(s&&s.messages&&s.messages.push(new r.Z("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:s})),null):p(e,t,s):null}},89772:(e,t,s)=>{"use strict";s.d(t,{A:()=>p,o:()=>d});var i=s(71598),r=s(38474),o=s(42952),n=s(43925),l=s(3642),a=s(81882),u=s(4037);const p={key:"type",base:i.Z,typeMap:{heatmap:a.Z,simple:u.Z,"unique-value":o.Z,"class-breaks":r.Z,"dot-density":l.Z,dictionary:n.default},errorContext:"renderer"},d={key:"type",base:i.Z,typeMap:{simple:u.Z,"unique-value":o.Z,"class-breaks":r.Z},errorContext:"renderer"}}}]);
//# sourceMappingURL=142.js.map