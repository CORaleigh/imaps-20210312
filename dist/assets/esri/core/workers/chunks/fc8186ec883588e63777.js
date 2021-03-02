self.webpackChunkRemoteClient([82,161],{450:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e(75),r=Object(i.b)((function(t){var n;void 0!==(n=function(){function t(e,i,r,a,o){for(;a>r;){if(a-r>600){var s=a-r+1,h=i-r+1,l=Math.log(s),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(s-c)/s)*(h-s/2<0?-1:1);t(e,i,Math.max(r,Math.floor(i-h*c/s+u)),Math.min(a,Math.floor(i+(s-h)*c/s+u)),o)}var m=e[i],d=r,f=a;for(n(e,r,i),o(e[a],m)>0&&n(e,r,a);d<f;){for(n(e,d,f),d++,f--;o(e[d],m)<0;)d++;for(;o(e[f],m)>0;)f--}0===o(e[r],m)?n(e,r,f):n(e,++f,a),f<=i&&(r=f+1),i<=f&&(a=f-1)}}function n(t,n,e){var i=t[n];t[n]=t[e],t[e]=i}function e(t,n){return t<n?-1:t>n?1:0}return function(n,i,r,a,o){t(n,i,r||0,a||n.length-1,o||e)}}())&&(t.exports=n)}))},680:function(t,n,e){"use strict";e.r(n),e.d(n,"ElevationSamplerWorker",(function(){return j}));var i=e(4),r=e(0),a=e(24),o=e(20),s=e(450);class h{constructor(t=9,n){this.compareMinX=m,this.compareMinY=d,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),B.prune(),_.prune(),w.prune(),b.prune()}all(t){this._all(this.data,t)}search(t,n){let e=this.data;const i=this.toBBox;if(X(t,e))for(B.clear();e;){for(let r=0,a=e.children.length;r<a;r++){const a=e.children[r],o=e.leaf?i(a):a;X(t,o)&&(e.leaf?n(a):g(t,o)?this._all(a,n):B.push(a))}e=B.pop()}}collides(t){let n=this.data;const e=this.toBBox;if(!X(t,n))return!1;for(B.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],a=n.leaf?e(r):r;if(X(t,a)){if(n.leaf||g(t,a))return!0;B.push(r)}}n=B.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new y([]),this}remove(t){if(!t)return this;let n,e=this.data,i=null,o=0,s=!1;const h=this.toBBox(t);for(w.clear(),b.clear();e||w.length>0;){var l;if(e||(e=Object(r.c)(w.pop()),i=w.data[w.length-1],o=null!=(l=b.pop())?l:0,s=!0),e.leaf&&(n=Object(a.d)(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),w.push(e),this._condense(w),this;s||e.leaf||!g(e,h)?i?(o++,e=i.children[o],s=!1):e=null:(w.push(e),b.push(o),o=0,i=e,e=e.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){let e=t;for(_.clear();e;){var i;if(!0===e.leaf)for(const t of e.children)n(t);else _.pushArray(e.children);e=null!=(i=_.pop())?i:null}}_build(t,n,e,i){const r=e-n+1;let a=this._maxEntries;if(r<=a){const i=new y(t.slice(n,e+1));return l(i,this.toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/a**(i-1)));const o=new O([]);o.height=i;const s=Math.ceil(r/a),h=s*Math.ceil(Math.sqrt(a));Y(t,n,e,h,this.compareMinX);for(let r=n;r<=e;r+=h){const n=Math.min(r+h-1,e);Y(t,r,n,s,this.compareMinY);for(let e=r;e<=n;e+=s){const r=Math.min(e+s-1,n);o.children.push(this._build(t,e,r,i-1))}}return l(o,this.toBBox),o}_chooseSubtree(t,n,e,i){for(;i.push(n),!0!==n.leaf&&i.length-1!==e;){let e,i=1/0,r=1/0;for(let a=0,o=n.children.length;a<o;a++){const o=n.children[a],s=f(o),h=p(t,o)-s;h<r?(r=h,i=s<i?s:i,e=o):h===r&&s<i&&(i=s,e=o)}n=e||n.children[0]}return n}_insert(t,n,e){const i=this.toBBox,r=e?t:i(t);w.clear();const a=this._chooseSubtree(r,this.data,n,w);for(a.children.push(t),u(a,r);n>=0&&w.data[n].children.length>this._maxEntries;)this._split(w,n),n--;this._adjustParentBBoxes(r,w,n)}_split(t,n){const e=t.data[n],i=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,i);const a=this._chooseSplitIndex(e,r,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=e.children.splice(a,e.children.length-a),s=e.leaf?new y(o):new O(o);s.height=e.height,l(e,this.toBBox),l(s,this.toBBox),n?t.data[n-1].children.push(s):this._splitRoot(e,s)}_splitRoot(t,n){this.data=new O([t,n]),this.data.height=t.height+1,l(this.data,this.toBBox)}_chooseSplitIndex(t,n,e){let i,r,a;i=r=1/0;for(let o=n;o<=e-n;o++){const n=c(t,0,o,this.toBBox),s=c(t,o,e,this.toBBox),h=M(n,s),l=f(n)+f(s);h<i?(i=h,a=o,r=l<r?l:r):h===i&&l<r&&(r=l,a=o)}return a}_chooseSplitAxis(t,n,e){const i=t.leaf?this.compareMinX:m,r=t.leaf?this.compareMinY:d;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,r)&&t.children.sort(i)}_allDistMargin(t,n,e,i){t.children.sort(i);const r=this.toBBox,a=c(t,0,n,r),o=c(t,e-n,e,r);let s=x(a)+x(o);for(let i=n;i<e-n;i++){const n=t.children[i];u(a,t.leaf?r(n):n),s+=x(a)}for(let i=e-n-1;i>=n;i--){const n=t.children[i];u(o,t.leaf?r(n):n),s+=x(o)}return s}_adjustParentBBoxes(t,n,e){for(let i=e;i>=0;i--)u(n.data[i],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const i=t.data[n-1],r=i.children;r.splice(Object(a.d)(r,e,r.length,i.indexHint),1)}else this.clear();else l(e,this.toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(t,n){c(t,0,t.children.length,n,t)}function c(t,n,e,i,r){r||(r=new y([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let a,o=n;o<e;o++)a=t.children[o],u(r,t.leaf?i(a):a);return r}function u(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function m(t,n){return t.minX-n.minX}function d(t,n){return t.minY-n.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function x(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function M(t,n){const e=Math.max(t.minX,n.minX),i=Math.max(t.minY,n.minY),r=Math.min(t.maxX,n.maxX),a=Math.min(t.maxY,n.maxY);return Math.max(0,r-e)*Math.max(0,a-i)}function g(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function X(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function Y(t,n,e,i,a){const o=[n,e];for(;o.length;){const n=Object(r.c)(o.pop()),e=Object(r.c)(o.pop());if(n-e<=i)continue;const h=e+Math.ceil((n-e)/i/2)*i;Object(s.a)(t,h,e,n,a),o.push(e,h,h,n)}}const B=new o.a,_=new o.a,w=new o.a,b=new o.a({deallocator:void 0});class v extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new a.a}}class y extends v{constructor(t){super(),this.children=t,this.leaf=!0}}class O extends v{constructor(t){super(),this.children=t,this.leaf=!1}}class j{async createIndex(t,n){const e=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new h;const i=this.createMeshData(t),a=Object(r.h)(n)?await n.invoke("createIndexThread",i,{transferList:e}):this.createIndexThread(i).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(t){const n=new Float64Array(t.position),e=this.createPooledRBush();return t.components?this.createIndexComponentsThread(e,n,t.components.map((t=>new Uint32Array(t)))):this.createIndexAllThread(e,n)}createIndexAllThread(t,n){const e=new Array(n.length/9);let i=0;for(let t=0;t<n.length;t+=9)e[i++]=A(n,t+0,t+3,t+6);return t.load(e),{result:t.toJSON()}}createIndexComponentsThread(t,n,e){let i=0;for(const t of e)i+=t.length/3;const r=new Array(i);let a=0;for(const t of e)for(let e=0;e<t.length;e+=3)r[a++]=A(n,3*t[e+0],3*t[e+1],3*t[e+2]);return t.load(r),{result:t.toJSON()}}createMeshData(t){const n=t.vertexAttributes.position.buffer;return!t.components||t.components.some((t=>!t.faces))?{position:n}:{position:n,components:t.components.map((t=>t.faces))}}createPooledRBush(){return new h(9,Object(i.a)("csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function A(t,n,e,i){return{minX:Math.min(t[n+0],t[e+0],t[i+0]),maxX:Math.max(t[n+0],t[e+0],t[i+0]),minY:Math.min(t[n+1],t[e+1],t[i+1]),maxY:Math.max(t[n+1],t[e+1],t[i+1]),p0:[t[n+0],t[n+1],t[n+2]],p1:[t[e+0],t[e+1],t[e+2]],p2:[t[i+0],t[i+1],t[i+2]]}}n.default=j},75:function(t,n,e){"use strict";(function(t){function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return a(null==n&&e.path)}},e.exports),e.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self}).call(this,e(49))}});