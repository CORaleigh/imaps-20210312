(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[4199],{1434:(e,t,o)=>{"use strict";o.d(t,{Z:()=>g});var r,n=o(56140),i=(o(95830),o(82550)),l=(o(36544),o(68055)),s=o(79881),a=o(9870),u=o(87566),c=(o(10923),o(57002),o(86035),o(92768)),d=o(50560),f=o(58385),p=o(78745);let y=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.d9)(this.color)})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,n._)([(0,s.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),(0,n._)([(0,s.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),(0,n._)([(0,s.Cb)({type:p.default,json:{type:[l.z8],write:!0}})],y.prototype,"color",void 0),y=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);const b=y;var h;let w=h=class extends c.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.d9)(this.colorClassBreakInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],w.prototype,"type",void 0),(0,n._)([(0,s.Cb)({json:{write:!0},type:String})],w.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:d.Z,json:{write:!0}})],w.prototype,"legendOptions",void 0),(0,n._)([(0,s.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],w.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.Cb)({type:[b],json:{write:!0}})],w.prototype,"colorClassBreakInfos",void 0),w=h=(0,n._)([(0,u.j)("esri.renderers.PointCloudClassBreaksRenderer")],w);const g=w},92768:(e,t,o)=>{"use strict";o.d(t,{Z:()=>I});var r,n=o(56140),i=(o(95830),o(82550)),l=(o(36544),o(68055),o(79881)),s=o(56274),a=o(87566),u=(o(10923),o(57002),o(86035),o(58385));let c=r=class extends u.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,n._)([(0,l.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),(0,n._)([(0,l.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=r=(0,n._)([(0,a.j)("esri.renderers.support.pointCloud.ColorModulation")],c);const d=c,f=new s.Xn({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let p=class extends u.wq{};(0,n._)([(0,l.Cb)({type:f.apiValues,readOnly:!0,nonNullable:!0,json:{type:f.jsonValues,read:!1,write:f.write}})],p.prototype,"type",void 0),p=(0,n._)([(0,a.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],p);const y=p;var b,h=o(9870);let w=b=class extends y{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new b({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,n._)([(0,h.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],w.prototype,"type",void 0),(0,n._)([(0,l.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],w.prototype,"size",void 0),(0,n._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],w.prototype,"useRealWorldSymbolSizes",void 0),w=b=(0,n._)([(0,a.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],w);const g=w;var m;let C=m=class extends y{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new m({scaleFactor:this.scaleFactor})}};(0,n._)([(0,h.J)({pointCloudSplatAlgorithm:"splat"})],C.prototype,"type",void 0),(0,n._)([(0,l.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],C.prototype,"scaleFactor",void 0),C=m=(0,n._)([(0,a.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],C);const v={key:"type",base:y,typeMap:{"fixed-size":g,splat:C}},T=(0,s.wY)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let U=class extends u.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,i.d9)(this.pointSizeAlgorithm),colorModulation:(0,i.d9)(this.colorModulation),pointsPerInch:(0,i.d9)(this.pointsPerInch)}}};(0,n._)([(0,l.Cb)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],U.prototype,"type",void 0),(0,n._)([(0,l.Cb)({types:v,json:{write:!0}})],U.prototype,"pointSizeAlgorithm",void 0),(0,n._)([(0,l.Cb)({type:d,json:{write:!0}})],U.prototype,"colorModulation",void 0),(0,n._)([(0,l.Cb)({json:{write:!0},nonNullable:!0,type:Number})],U.prototype,"pointsPerInch",void 0),U=(0,n._)([(0,a.j)("esri.renderers.PointCloudRenderer")],U),(U||(U={})).fieldTransformTypeKebabDict=new s.Xn({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const I=U},81751:(e,t,o)=>{"use strict";o.d(t,{Z:()=>g});var r,n=o(56140),i=(o(95830),o(82550)),l=(o(36544),o(68055)),s=o(79881),a=o(9870),u=o(87566),c=(o(10923),o(57002),o(86035),o(92768)),d=o(50560),f=o(58385),p=o(78745);let y=r=class extends f.wq{constructor(){super(...arguments),this.label=null,this.value=0,this.color=null}clone(){return new r({label:this.label,value:this.value,color:(0,i.d9)(this.color)})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,n._)([(0,s.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"value",void 0),(0,n._)([(0,s.Cb)({type:p.default,json:{type:[l.z8],write:!0}})],y.prototype,"color",void 0),y=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.StopInfo")],y);const b=y;var h;let w=h=class extends c.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new h({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),stops:(0,i.d9)(this.stops),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],w.prototype,"type",void 0),(0,n._)([(0,s.Cb)({json:{write:!0},type:String})],w.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:d.Z,json:{write:!0}})],w.prototype,"legendOptions",void 0),(0,n._)([(0,s.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],w.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.Cb)({type:[b],json:{write:!0}})],w.prototype,"stops",void 0),w=h=(0,n._)([(0,u.j)("esri.renderers.PointCloudStretchRenderer")],w);const g=w},5041:(e,t,o)=>{"use strict";o.d(t,{Z:()=>g});var r,n=o(56140),i=(o(95830),o(82550)),l=(o(36544),o(68055)),s=o(79881),a=o(9870),u=o(87566),c=(o(10923),o(57002),o(86035),o(92768)),d=o(50560),f=o(58385),p=o(78745);let y=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,i.d9)(this.values),color:(0,i.d9)(this.color)})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,n._)([(0,s.Cb)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),(0,n._)([(0,s.Cb)({type:p.default,json:{type:[l.z8],write:!0}})],y.prototype,"color",void 0),y=r=(0,n._)([(0,u.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const b=y;var h;let w=h=class extends c.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,i.d9)(this.colorUniqueValueInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],w.prototype,"type",void 0),(0,n._)([(0,s.Cb)({json:{write:!0},type:String})],w.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:c.Z.fieldTransformTypeKebabDict.apiValues,json:{type:c.Z.fieldTransformTypeKebabDict.jsonValues,read:c.Z.fieldTransformTypeKebabDict.read,write:c.Z.fieldTransformTypeKebabDict.write}})],w.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.Cb)({type:[b],json:{write:!0}})],w.prototype,"colorUniqueValueInfos",void 0),(0,n._)([(0,s.Cb)({type:d.Z,json:{write:!0}})],w.prototype,"legendOptions",void 0),w=h=(0,n._)([(0,u.j)("esri.renderers.PointCloudUniqueValueRenderer")],w);const g=w},74199:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>D});var r=o(6962),n=o(59472),i=o(39105),l=o(73032),s=o(17387),a=o(17333),u=o(2847),c=o(69236);function d(){const e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:d,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,o,r){const n=new Float32Array(4);return n[0]=e,n[1]=t,n[2]=o,n[3]=r,n},createView:function(e,t){return new Float32Array(e,t,4)}});var f=o(1434),p=o(81751),y=o(5041),b=o(32656);function h(e,t,o){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,o+0,10)),version:t.getUint16(o+10,!0),checksum:t.getUint32(o+12,!0)}}function w(e,t,o){const r=[];t=g(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=g(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function g(e,t,o){const r=new DataView(e,t),n=r.getUint8(0),i=31&n,l=!!(32&n),s=(192&n)>>6;let a=0;if(0===s)a=r.getUint32(1,!0),t+=5;else if(1===s)a=r.getUint16(1,!0),t+=3;else{if(2!==s)throw new b.Z("lepcc-decode-error","Bad count type");a=r.getUint8(1),t+=2}if(l)throw new b.Z("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*i/8),c=new Uint8Array(e,t,u);let d=0,f=0,p=0;const y=-1>>>32-i;for(let e=0;e<a;e++){for(;f<i;)d|=c[p]<<f,f+=8,p+=1;o[e]=d&y,d>>>=i,f-=i,f+i>32&&(d|=c[p-1]>>8-f)}return t+p}var m=o(82550);const C=o(36544).Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function v(e,t,o){let r="",n=0;for(;n<o;){const i=e[t+n];if(i<128)r+=String.fromCharCode(i),n++;else if(i>=192&&i<224){if(n+1>=o)throw new b.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const l=(31&i)<<6|63&e[t+n+1];r+=String.fromCharCode(l),n+=2}else if(i>=224&&i<240){if(n+2>=o)throw new b.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(15&i)<<12|(63&e[t+n+1])<<6|63&e[t+n+2];r+=String.fromCharCode(l),n+=3}else{if(!(i>=240&&i<248))throw new b.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(n+3>=o)throw new b.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const l=(7&i)<<18|(63&e[t+n+1])<<12|(63&e[t+n+2])<<6|63&e[t+n+3];if(l>=65536){const e=55296+(l-65536>>10),t=56320+(1023&l);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(l);n+=4}}}return r}function T(e,t){const o={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let n=0;n<t.length;n++){const i=t[n],l=i.valueType||i.type,s=_[l];o.fields[i.property]=s(e,r),r+=Z[l].BYTES_PER_ELEMENT}return o.byteCount=r,o}function U(e,t){return new(0,Z[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function I(e,t,o){if(t!==e&&C.error(`Invalid ${o} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new b.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}const S={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function A(e,t,o){if("lepcc-rgb"===e.encoding)return function(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:n}=h(e,t,o);if(o+=16,"ClusterRGB"!==r)throw new b.Z("lepcc-decode-error","Bad identifier");if(n>1)throw new b.Z("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+0,!0),sizeHi:e.getUint32(t+4,!0),count:e.getUint32(t+8,!0),colorMapCount:e.getUint16(t+12,!0),lookupMethod:e.getUint8(t+14),compressionMethod:e.getUint8(t+15)}}(t,o);if(o+=16,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+o!==e.byteLength||i.colorMapCount>256)throw new b.Z("lepcc-decode-error","Bad count");const t=new Uint8Array(e,o,3*i.colorMapCount),r=new Uint8Array(e,o+3*i.colorMapCount,i.count),n=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const o=r[e];n[3*e]=t[3*o],n[3*e+1]=t[3*o+1],n[3*e+2]=t[3*o+2]}return n}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+o!==e.byteLength||0!==i.colorMapCount)throw new b.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,o).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(o+3!==e.byteLength||1!==i.colorMapCount)throw new b.Z("lepcc-decode-error","Bad count");const r=t.getUint8(o),n=t.getUint8(o+1),l=t.getUint8(o+2),s=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)s[3*e]=r,s[3*e+1]=n,s[3*e+2]=l;return s}throw new b.Z("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}(t);if("lepcc-intensity"===e.encoding)return function(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:n}=h(e,t,o);if(o+=16,"Intensity "!==r)throw new b.Z("lepcc-decode-error","Bad identifier");if(n>1)throw new b.Z("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+0,!0),sizeHi:e.getUint32(t+4,!0),count:e.getUint32(t+8,!0),scaleFactor:e.getUint16(t+12,!0),bitsPerPoint:e.getUint8(t+14),reserved:e.getUint8(t+15)}}(t,o);if(o+=16,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");const l=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+o!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");const t=new Uint8Array(e,o,i.count);for(let e=0;e<i.count;e++)l[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+o!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");const t=new Uint16Array(e,o,i.count);for(let e=0;e<i.count;e++)l[e]=t[e]*i.scaleFactor}else{const t=[];if(g(e,o,t)!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)l[e]=t[e]*i.scaleFactor}return l}(t);if(null!=e.encoding&&""!==e.encoding)throw new b.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(C.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(C.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=function(e,t,o){const r=null!=t.header?T(e,t.header):{byteOffset:0,byteCount:0,fields:{count:o}},n={header:r,byteOffset:r.byteCount,byteCount:0,entries:Object.create(null)};let i=r.byteCount;for(let e=0;e<t.ordering.length;e++){const o=t.ordering[e],l=(0,m.d9)(t[o]);if(l.count=r.fields.count,"String"===l.valueType){if(l.byteOffset=i,l.byteCount=r.fields[o+"ByteCount"],"UTF-8"!==l.encoding)throw new b.Z("unsupported-encoding","Unsupported String encoding.",{encoding:l.encoding})}else{if(!V(l.valueType))throw new b.Z("unsupported-value-type","Unsupported binary valueType",{valueType:l.valueType});{const e=j(l.valueType);i+=i%e!=0?e-i%e:0,l.byteOffset=i,l.byteCount=e*l.valuesPerElement*l.count}}i+=l.byteCount,n.entries[o]=l}return n.byteCount=i-n.byteOffset,n}(t,e,o);I(r.byteOffset+r.byteCount,t.byteLength,"attribute");const n=r.entries.attributeValues||r.entries.objectIds;if(n){if("String"===n.valueType){const e=r.entries.attributeByteCounts,o=U(t,e),i=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,n);return function(e,t,o){const r=[];let n,i,l=0;for(i=0;i<e;i+=1){if(n=t[i],n>0){if(r.push(v(o,l,n-1)),0!==o[l+n-1])throw new b.Z("string-array-error","Invalid string array: missing null termination.")}else r.push(null);l+=n}return r}(e.count,o,i)}return U(t,n)}throw new b.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const Z={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},_={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function V(e){return Z.hasOwnProperty(e)}function j(e){return V(e)?Z[e].BYTES_PER_ELEMENT:0}function M(e,t){if(null==e.encoding||""===e.encoding){const o=function(e,t){const o=T(e,t&&t.header);let r=o.byteCount;const n={isDraco:!1,header:o,byteOffset:o.byteCount,byteCount:0,vertexAttributes:{}},i=o.fields,l=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const o={...t.vertexAttributes[e],byteOffset:r,count:l},i=S[e]?S[e]:"_"+e;n.vertexAttributes[i]=o,r+=j(o.valueType)*o.valuesPerElement*l}const s=i.faceCount;if(t.faces&&s){n.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const o={...t.faces[e],byteOffset:r,count:s};n.faces[e]=o,r+=j(o.valueType)*o.valuesPerElement*s}}const a=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&a){n.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const o={...t.featureAttributes[e],byteOffset:r,count:a};n.featureAttributes[e]=o,r+=("UInt64"===o.valueType?8:j(o.valueType))*o.valuesPerElement*a}}return I(r,e.byteLength,"geometry"),n.byteCount=r-n.byteOffset,n}(t,e);if((0,n.Wi)(o.vertexAttributes.position))return;const r=U(t,o.vertexAttributes.position),i=o.header.fields,l=[i.offsetX,i.offsetY,i.offsetZ],s=[i.scaleX,i.scaleY,i.scaleZ],a=r.length/3,u=new Float64Array(3*a);for(let e=0;e<a;e++)u[3*e]=r[3*e]*s[0]+l[0],u[3*e+1]=r[3*e+1]*s[1]+l[1],u[3*e+2]=r[3*e+2]*s[2]+l[2];return u}if("lepcc-xyz"===e.encoding)return function(e){const t=new DataView(e,0);let o=0;const{identifier:r,version:n}=h(e,t,o);if(o+=16,"LEPCC     "!==r)throw new b.Z("lepcc-decode-error","Bad identifier");if(n>1)throw new b.Z("lepcc-decode-error","Unknown version");const i=function(e,t){return{sizeLo:e.getUint32(t+0,!0),sizeHi:e.getUint32(t+4,!0),minX:e.getFloat64(t+8,!0),minY:e.getFloat64(t+16,!0),minZ:e.getFloat64(t+24,!0),maxX:e.getFloat64(t+32,!0),maxY:e.getFloat64(t+40,!0),maxZ:e.getFloat64(t+48,!0),errorX:e.getFloat64(t+56,!0),errorY:e.getFloat64(t+64,!0),errorZ:e.getFloat64(t+72,!0),count:e.getUint32(t+80,!0),reserved:e.getUint32(t+84,!0)}}(t,o);if(o+=88,i.sizeHi*Math.pow(2,32)+i.sizeLo!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad size");const l=new Float64Array(3*i.count),s=[],a=[],u=[],c=[];if(o=w(e,o,s),o=w(e,o,a),o=w(e,o,u),o=w(e,o,c),o!==e.byteLength)throw new b.Z("lepcc-decode-error","Bad length");let d=0,f=0;for(let e=0;e<s.length;e++){f+=s[e];let t=0;for(let o=0;o<a[e];o++){t+=u[d];const e=c[d];l[3*d]=Math.min(i.maxX,i.minX+2*i.errorX*t),l[3*d+1]=Math.min(i.maxY,i.minY+2*i.errorY*f),l[3*d+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*e),d++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:l}}(t).result}function z(e,t,o){return(0,n.pC)(e)&&e.attributeInfo.useElevation?function(e,t){const o=new Float64Array(t);for(let r=0;r<t;r++)o[r]=e[3*r+2];return o}(t,o):(0,n.pC)(e)?A(e.attributeInfo.storageInfo,e.buffer,o):null}function x(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function O(e){let t=0;for(const o of e||[])t|=1<<o;return t}class F{transform(e){const t=this._transform(e),o=[t.points.buffer,t.rgb.buffer];(0,n.pC)(t.pointIdFilterMap)&&o.push(t.pointIdFilterMap.buffer);for(const e of t.attributes)"buffer"in e.values&&(0,r.eP)(e.values.buffer)&&e.values.buffer!==t.rgb.buffer&&o.push(e.values.buffer);return(0,i.DB)({result:t,transferList:o})}_transform(e){const t=M(e.schema,e.geometryBuffer);let o=t.length/3,r=null;const i=[],s=z(e.primaryAttributeData,t,o);(0,n.pC)(e.primaryAttributeData)&&s&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:s});const a=z(e.modulationAttributeData,t,o);(0,n.pC)(e.modulationAttributeData)&&a&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:a});let u=function(e,t,o,r){const{rendererJSON:n,isRGBRenderer:i}=e;let l=null,s=null;if(t&&i)l=t;else if(t&&"pointCloudUniqueValueRenderer"===n.type){s=y.Z.fromJSON(n);const e=s.colorUniqueValueInfos;l=new Uint8Array(3*r);const o=x(s.fieldTransformType);for(let n=0;n<r;n++){const r=(o?o(t[n]):t[n])+"";for(let t=0;t<e.length;t++)if(e[t].values.indexOf(r)>=0){l[3*n]=e[t].color.r,l[3*n+1]=e[t].color.g,l[3*n+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===n.type){s=p.Z.fromJSON(n);const e=s.stops;l=new Uint8Array(3*r);const o=x(s.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n],i=e.length-1;if(r<e[0].value)l[3*n]=e[0].color.r,l[3*n+1]=e[0].color.g,l[3*n+2]=e[0].color.b;else if(r>=e[i].value)l[3*n]=e[i].color.r,l[3*n+1]=e[i].color.g,l[3*n+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const o=(r-e[t-1].value)/(e[t].value-e[t-1].value);l[3*n]=e[t].color.r*o+e[t-1].color.r*(1-o),l[3*n+1]=e[t].color.g*o+e[t-1].color.g*(1-o),l[3*n+2]=e[t].color.b*o+e[t-1].color.b*(1-o);break}}}else if(t&&"pointCloudClassBreaksRenderer"===n.type){s=f.Z.fromJSON(n);const e=s.colorClassBreakInfos;l=new Uint8Array(3*r);const o=x(s.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){l[3*n]=e[t].color.r,l[3*n+1]=e[t].color.g,l[3*n+2]=e[t].color.b;break}}}else{l=new Uint8Array(3*r);for(let e=0;e<l.length;e++)l[e]=255}if(o&&s&&s.colorModulation){const e=s.colorModulation.minValue,t=s.colorModulation.maxValue,n=.3;for(let i=0;i<r;i++){const r=o[i],s=r>=t?1:r<=e?n:n+(1-n)*(r-e)/(t-e);l[3*i]=s*l[3*i],l[3*i+1]=s*l[3*i+1],l[3*i+2]=s*l[3*i+2]}}return l}(e.rendererInfo,s,a,o);if(e.filterInfo&&e.filterInfo.length>0&&(0,n.pC)(e.filterAttributesData)){const n=e.filterAttributesData.map((e=>{const r=z(e,t,o),n={attributeInfo:e.attributeInfo,values:r};return i.push(n),n}));r=new Uint32Array(o),o=function(e,t,o,r,n){const i=e.length/3;let l=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:t}=r[e],o=n[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;-1!==t.values.indexOf(o)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=O(t.requiredSetBits),r=O(t.requiredClearBits);(o&e)===e&&0==(o&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&o,r=o>>>4&15,n=r>1,l=1===e,s=e===r;let a=!1;for(const e of t.includedReturns)if("last"===e&&s||"firstOfMany"===e&&l&&n||"lastOfMany"===e&&s&&n||"single"===e&&!n){a=!0;break}a||(i=!1);break}}}i&&(o[l]=s,e[3*l]=e[3*s],e[3*l+1]=e[3*s+1],e[3*l+2]=e[3*s+2],t[3*l]=t[3*s],t[3*l+1]=t[3*s+1],t[3*l+2]=t[3*s+2],l++)}return l}(t,u,r,e.filterInfo,n)}for(const r of e.userAttributesData){const e=z(r,t,o);i.push({attributeInfo:r.attributeInfo,values:e})}3*o<u.length&&(u=new Uint8Array(u.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(t,o,e.elevationOffset);const c=this._transformCoordinates(t,o,e.obb,l.Z.fromJSON(e.inSR),l.Z.fromJSON(e.outSR));return{obb:e.obb,points:c,rgb:u,attributes:i,pointIdFilterMap:r}}_transformCoordinates(e,t,o,r,n){if(!(0,a.CM)(e,r,0,e,n,0,t))throw Error("Can't reproject");const i=(0,c.f)(o.center[0],o.center[1],o.center[2]),l=(0,c.c)(),d=(0,c.c)();(0,u.c)(B,o.quaternion);const f=new Float32Array(3*t);for(let r=0;r<t;r++)l[0]=e[3*r]-i[0],l[1]=e[3*r+1]-i[1],l[2]=e[3*r+2]-i[2],(0,s.q)(d,l,B),o.halfSize[0]=Math.max(o.halfSize[0],Math.abs(d[0])),o.halfSize[1]=Math.max(o.halfSize[1],Math.abs(d[1])),o.halfSize[2]=Math.max(o.halfSize[2],Math.abs(d[2])),f[3*r]=l[0],f[3*r+1]=l[1],f[3*r+2]=l[2];return f}_applyElevationOffsetInPlace(e,t,o){if(0!==o)for(let r=0;r<t;r++)e[3*r+2]+=o}}const B=d();const D=function(){return new F}}}]);
//# sourceMappingURL=4199.js.map