self.webpackChunkRemoteClient([66,161],{163:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return s}));var n=r(55);function i(t){return"point"===t||"multipoint"===t||"polyline"===t||"polygon"===t}const o=Object(n.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),s=Object(n.b)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},547:function(t,e,r){"use strict";r.r(e);var n=r(60),i=(r(59),r(255)),o=r(438),s=r(288),a=r(494);e.default=class{async decode(t){const e=await Object(o.a)(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.a.fromJSON(t.pixelBlock),t.extent=t.extent?n.a.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(e&&e.toJSON())}async updateSymbolizer(t){var e;this.symbolizer=a.a.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===(null==(e=this.symbolizer)?void 0:e.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=t.histograms)}stretch(t){const e=this.symbolizer.simpleStretch(i.a.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(e&&e.toJSON())}estimateStatisticsHistograms(t){const e=Object(s.f)(i.a.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=Object(s.l)(i.a.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach(((t,r)=>{e.set(r,null==t?void 0:t.toJSON())})),Promise.resolve(e)}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map((t=>t?new i.a(t):null)),r=Object(s.i)(e,t.srcMosaicSize);if(!t.coefs)return r&&r.toJSON();const n=Object(s.a)(r,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation);return n&&n.toJSON()}}},59:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(5),i=(r(57),r(162)),o=r(71),s=r(60),a=r(183),l=r(114),u=r(135);r(163),r(63);const c={base:i.a,key:"type",typeMap:{extent:s.a,multipoint:a.a,point:o.a,polyline:u.a,polygon:l.a}};Object(n.k)(c)},62:function(t,e,r){"use strict";var n=r(0),i=r(5);const o={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,5,10]};function s(t,e,r){r<0&&++r,r>1&&--r;const n=6*r;return n<1?t+(e-t)*n:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}var a=r(99);function l(t){return Object(a.c)(Object(i.e)(t),0,255)}function u(t,e,r){return t=Number(t),isNaN(t)?r:t<e?e:t>r?r:t}class c{constructor(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t)}static blendColors(t,e,r,n=new c){return n.r=Math.round(t.r+(e.r-t.r)*r),n.g=Math.round(t.g+(e.g-t.g)*r),n.b=Math.round(t.b+(e.b-t.b)*r),n.a=t.a+(e.a-t.a)*r,n._sanitize()}static fromRgb(t,e){const r=t.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(r){const t=r[2].split(/\s*,\s*/),n=r[1];if("rgb"===n&&3===t.length||"rgba"===n&&4===t.length){const r=t[0];if("%"===r.charAt(r.length-1)){const r=t.map((t=>2.56*parseFloat(t)));return 4===t.length&&(r[3]=parseFloat(t[3])),c.fromArray(r,e)}return c.fromArray(t.map((t=>parseFloat(t))),e)}if("hsl"===n&&3===t.length||"hsla"===n&&4===t.length)return c.fromArray(function(t,e,r,n=1){const i=(t%360+360)%360/360,o=r<=.5?r*(e+1):r+e-r*e,a=2*r-o;return[Math.round(256*s(a,o,i+1/3)),Math.round(256*s(a,o,i)),Math.round(256*s(a,o,i-1/3)),n]}(parseFloat(t[0]),parseFloat(t[1])/100,parseFloat(t[2])/100,parseFloat(t[3])),e)}return null}static fromHex(t,e=new c){if(4!==t.length&&7!==t.length||"#"!==t[0])return null;const r=4===t.length?4:8,n=(1<<r)-1;let i=Number("0x"+t.substr(1));return isNaN(i)?null:(["b","g","r"].forEach((t=>{const o=i&n;i>>=r,e[t]=4===r?17*o:o})),e.a=1,e)}static fromArray(t,e=new c){return e._set(Number(t[0]),Number(t[1]),Number(t[2]),Number(t[3])),isNaN(e.a)&&(e.a=1),e._sanitize()}static fromString(t,e){const r=function(t){var e;return null!=(e=o[t.toLowerCase()])?e:null}(t);return r&&c.fromArray(r,e)||c.fromRgb(t,e)||c.fromHex(t,e)}static fromJSON(t){return t&&new c([t[0],t[1],t[2],t[3]/255])}static toUnitRGB(t){return Object(n.h)(t)?[t.r/255,t.g/255,t.b/255]:null}static toUnitRGBA(t){return Object(n.h)(t)?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(t){if("string"==typeof t)c.fromString(t,this);else if(Array.isArray(t))c.fromArray(t,this);else{var e,r,n,i;this._set(null!=(e=t.r)?e:0,null!=(r=t.g)?r:0,null!=(n=t.b)?n:0,null!=(i=t.a)?i:1),t instanceof c||this._sanitize()}return this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(){const t=this.r.toString(16),e=this.g.toString(16),r=this.b.toString(16);return`#${t.length<2?"0"+t:t}${e.length<2?"0"+e:e}${r.length<2?"0"+r:r}`}toCss(t=!1){const e=this.r+", "+this.g+", "+this.b;return t?`rgba(${e}, ${this.a})`:`rgb(${e})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(t=0){const e=l(this.r),r=l(this.g),n=l(this.b);return 0===t||1!==this.a?[e,r,n,l(255*this.a)]:[e,r,n]}clone(){return new c(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}_sanitize(){return this.r=Math.round(u(this.r,0,255)),this.g=Math.round(u(this.g,0,255)),this.b=Math.round(u(this.b,0,255)),this.a=u(this.a,0,1),this}_set(t,e,r,n){this.r=t,this.g=e,this.b=r,this.a=n}}c.prototype.declaredClass="esri.Color",e.a=c},63:function(t,e,r){"use strict";r.d(e,"a",(function(){return g})),r.d(e,"b",(function(){return b})),r.d(e,"c",(function(){return f})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return c})),r.d(e,"f",(function(){return h})),r.d(e,"g",(function(){return m})),r.d(e,"h",(function(){return d}));var n=r(162),i=r(71),o=r(60),s=r(183),a=r(114),l=r(135);function u(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function c(t){return void 0!==t.points}function h(t){return void 0!==t.x&&void 0!==t.y}function d(t){return void 0!==t.paths}function m(t){return void 0!==t.rings}function g(t){return t?t instanceof n.a?t:h(t)?i.a.fromJSON(t):d(t)?l.a.fromJSON(t):m(t)?a.a.fromJSON(t):c(t)?s.a.fromJSON(t):u(t)?o.a.fromJSON(t):null:null}function f(t){return t?h(t)?"esriGeometryPoint":d(t)?"esriGeometryPolyline":m(t)?"esriGeometryPolygon":u(t)?"esriGeometryEnvelope":c(t)?"esriGeometryMultipoint":null:null}const y={esriGeometryPoint:i.a,esriGeometryPolyline:l.a,esriGeometryPolygon:a.a,esriGeometryEnvelope:o.a,esriGeometryMultipoint:s.a};function b(t){return t&&y[t]||null}},75:function(t,e,r){"use strict";(function(t){function n(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return o(null==e&&r.path)}},r.exports),r.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return n})),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self}).call(this,r(49))},99:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return g})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return h})),r.d(e,"e",(function(){return s})),r.d(e,"f",(function(){return a})),r.d(e,"g",(function(){return c})),r.d(e,"h",(function(){return u})),r.d(e,"i",(function(){return i})),r.d(e,"j",(function(){return l})),r.d(e,"k",(function(){return d}));const n=new Float32Array(1);function i(t){--t;for(let e=1;e<32;e<<=1)t|=t>>e;return t+1}function o(t,e,r){return t<e?e:t>r?r:t}function s(t,e,r){return Math.min(Math.max(t,e),r)}function a(t){return 0==(t&t-1)}function l(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}Number.isFinite,Number.isNaN,Math.sign;const u=Math.log2||function(t){return Math.log(t)/Math.LN2};function c(t,e,r){return t+(e-t)*r}function h(t){return t*Math.PI/180}function d(t){return 180*t/Math.PI}function m(t){return Math.acos(o(t,-1,1))}function g(t){return Math.asin(o(t,-1,1))}!function(t){n[0]=t,n[0]}(34028234663852886e22)}});