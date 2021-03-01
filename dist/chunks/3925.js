(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[3925],{43925:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>S});var i,r=s(56140),o=(s(95830),s(82550)),n=s(59472),l=s(88263),a=s(36544),c=(s(68055),s(79881)),u=s(87566),p=s(60538),h=s(32656),f=(s(10923),s(57002),s(86035),s(39105)),d=s(30927),y=s(4665),m=s(78745),b=s(82314),g=s(54721),_=s(71598),w=s(19540),v=s(40365);const x=a.Z.getLogger("esri.renderers.DictionaryRenderer");let C=i=class extends((0,w.W)(_.Z)){constructor(e){super(e),this._ongoingRequests=new Map,this._symbolCache=new v.Z(100),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,s,i){null!=i&&i.origin||super.writeVisualVariables(e,t,s,i)}clone(){return new i({config:(0,o.d9)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:(0,o.d9)(this.fieldMap),url:(0,o.d9)(this.url),visualVariables:(0,o.d9)(this.visualVariables)})}async getSymbolAsync(e,t){let s;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t));try{s=await this._dictionaryPromise}catch(e){if((0,f.isAbortError)(e))return this._dictionaryPromise=null,null}const i={};if(this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t];if(s&&null!==e.attributes[s]&&void 0!==e.attributes[s]){const r=""+e.attributes[s];i[t]=r}else i[t]=""}const r=s(i,t);if(!r||"string"!=typeof r)return null;const o=(0,l.hP)(r).toString(),n=this._symbolCache.get(o);if(n)return n.catch((()=>{this._symbolCache.pop(o)})),n;const a=r.split(";"),c=[],u=[];for(const e of a)if(e&&0!==e.length)if(-1===e.indexOf("po:"))if(-1!==e.indexOf("|"))for(const t of e.split("|"))this._itemNames.has(t)&&c.push(t);else this._itemNames.has(e)&&c.push(e);else{const t=e.substr(3).split("|");if(3===t.length){const e=t[0],s=t[1];let i=t[2];if("DashTemplate"===s)i=i.split(" ").map((e=>Number(e)));else if("Color"===s){const e=new m.default(i).toRgba();i=[e[0],e[1],e[2],255*e[3]]}else i=Number(i);u.push({primitiveName:e,propertyName:s,value:i})}}const p=this._cimPartsToCIMSymbol(c,u,t);return this._symbolCache.put(o,p,1),p}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await(0,y.io)(e,t,this.scaleExpression);const s=t.map((e=>e.name));for(const t in this.fieldMap)s.indexOf(this.fieldMap[t])<0||e.add(this.fieldMap[t])}get arcadeRequired(){return!0}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void x.error("no valid URL!");const t=(0,n.pC)(e)?e.abortOptions:null,s=(0,g.default)(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...t}),[{data:i}]=await(0,f.all)([s,(0,d.LC)()]);if(!i)throw this._dictionaryPromise=null,new h.Z("esri.renderers.DictionaryRenderer","Bad dictionary data!");const r=i.expression,o=i.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=new Set(i.itemsNames),this._symbolFields=o.symbol;const l={};if(this.config){const e=this.config;for(const t in e)l[t]=e[t]}for(const e of o.configuration)l.hasOwnProperty(e.name)||(l[e.name]=e.value);const a=[];if((0,n.pC)(e)&&e.fields&&this.fieldMap)for(const t of this._symbolFields){const s=this.fieldMap[t],i=e.fields.filter((e=>e.name===s));i.length>0&&a.push({...i[0],name:t})}return this._dictionaryPromise=(0,d.pp)(r,(0,n.pC)(e)?e.spatialReference:null,a,l).then((e=>{const t={scale:0};return(s,i)=>{const r=e.repurposeFeature({geometry:null,attributes:s});return t.scale=(0,n.pC)(i)?i.scale:void 0,e.evaluate({$feature:r,$view:t})}})).catch((e=>(x.error("Creating dictinoary expression failed:",e),null))),this._dictionaryPromise}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._symbolFields}async _getSymbolPart(e,t){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const s=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=(0,g.default)(s,{responseType:"json",query:{f:"json"},...t});this._ongoingRequests.set(e,i);try{return(await i).data}catch(t){return this._ongoingRequests.delete(e),(0,f.reject)(t)}}_combineSymbolParts(e,t){if(!e||0===e.length)return null;if(1===e.length)return{type:"CIMSymbolReference",symbol:e[0],primitiveOverrides:t};const s={...e[0]};s.symbolLayers=[];for(const t of e){const e=t;s.symbolLayers.unshift(...e.symbolLayers)}return{type:"CIMSymbolReference",symbol:s,primitiveOverrides:t}}async _cimPartsToCIMSymbol(e,t,s){const i=new Array(e.length);for(let t=0;t<e.length;t++)i[t]=this._getSymbolPart(e[t],s);const r=await(0,f.all)(i);return new b.Z({data:this._combineSymbolParts(r,t)})}};(0,r._)([(0,c.Cb)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],C.prototype,"config",void 0),(0,r._)([(0,c.Cb)({type:Object,json:{write:!0}})],C.prototype,"fieldMap",void 0),(0,r._)([(0,c.Cb)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],C.prototype,"scaleExpression",void 0),(0,r._)([(0,p.c)("scaleExpression")],C.prototype,"writeData",null),(0,r._)([(0,c.Cb)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],C.prototype,"scaleExpressionTitle",void 0),(0,r._)([(0,c.Cb)({type:String,json:{write:!0}})],C.prototype,"url",void 0),(0,r._)([(0,p.c)("visualVariables")],C.prototype,"writeVisualVariables",null),C=i=(0,r._)([(0,u.j)("esri.renderers.DictionaryRenderer")],C);const S=C}}]);
//# sourceMappingURL=3925.js.map