(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[61],{87040:(e,t,n)=>{"use strict";n.d(t,{q:()=>i});var i=(0,n(71012).c)((function(e){var t;void 0!==(t=function(){function e(n,i,s,r,o){for(;r>s;){if(r-s>600){var a=r-s+1,l=i-s+1,u=Math.log(a),h=.5*Math.exp(2*u/3),d=.5*Math.sqrt(u*h*(a-h)/a)*(l-a/2<0?-1:1);e(n,i,Math.max(s,Math.floor(i-l*h/a+d)),Math.min(r,Math.floor(i+(a-l)*h/a+d)),o)}var c=n[i],f=s,m=r;for(t(n,s,i),o(n[r],c)>0&&t(n,s,r);f<m;){for(t(n,f,m),f++,m--;o(n[f],c)<0;)f++;for(;o(n[m],c)>0;)m--}0===o(n[s],c)?t(n,s,m):t(n,++m,r),m<=i&&(s=m+1),i<=m&&(r=m-1)}}function t(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function n(e,t){return e<t?-1:e>t?1:0}return function(t,i,s,r,o){e(t,i,s||0,r||t.length-1,o||n)}}())&&(e.exports=t)}))},96233:(e,t,n)=>{"use strict";n.d(t,{r:()=>s});var i=n(87040);function s(e,t){if(!(this instanceof s))return new s(e,t);this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}function r(e,t,n){if(!n)return t.indexOf(e);for(var i=0;i<t.length;i++)if(n(e,t[i]))return i;return-1}function o(e,t){a(e,0,e.children.length,t,e)}function a(e,t,n,i,s){s||(s=p(null)),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(var r,o=t;o<n;o++)r=e.children[o],l(s,e.leaf?i(r):r);return s}function l(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function u(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function d(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function c(e){return e.maxX-e.minX+(e.maxY-e.minY)}function f(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function m(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function p(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function g(e,t,n,s,r){for(var o,a=[t,n];a.length;)(n=a.pop())-(t=a.pop())<=s||(o=t+Math.ceil((n-t)/s/2)*s,(0,i.q)(e,o,t,n,r),a.push(t,o,o,n))}s.prototype={all:function(){return this._all(this.data,[])},search:function(e){var t=this.data,n=[],i=this.toBBox;if(!m(e,t))return n;for(var s,r,o,a,l=[];t;){for(s=0,r=t.children.length;s<r;s++)o=t.children[s],m(e,a=t.leaf?i(o):o)&&(t.leaf?n.push(o):f(e,a)?this._all(o,n):l.push(o));t=l.pop()}return n},collides:function(e){var t=this.data,n=this.toBBox;if(!m(e,t))return!1;for(var i,s,r,o,a=[];t;){for(i=0,s=t.children.length;i<s;i++)if(r=t.children[i],m(e,o=t.leaf?n(r):r)){if(t.leaf||f(e,o))return!0;a.push(r)}t=a.pop()}return!1},load:function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}var i=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var s=this.data;this.data=i,i=s}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(e){return e&&this._insert(e,this.data.height-1),this},clear:function(){return this.data=p([]),this},remove:function(e,t){if(!e)return this;for(var n,i,s,o,a=this.data,l=this.toBBox(e),u=[],h=[];a||u.length;){if(a||(a=u.pop(),i=u[u.length-1],n=h.pop(),o=!0),a.leaf&&-1!==(s=r(e,a.children,t)))return a.children.splice(s,1),u.push(a),this._condense(u),this;o||a.leaf||!f(a,l)?i?(n++,a=i.children[n],o=!1):a=null:(u.push(a),h.push(n),n=0,i=a,a=a.children[0])}return this},toBBox:function(e){return e},compareMinX:u,compareMinY:h,toJSON:function(){return this.data},fromJSON:function(e){return this.data=e,this},_all:function(e,t){for(var n=[];e;)e.leaf?t.push.apply(t,e.children):n.push.apply(n,e.children),e=n.pop();return t},_build:function(e,t,n,i){var s,r=n-t+1,a=this._maxEntries;if(r<=a)return o(s=p(e.slice(t,n+1)),this.toBBox),s;i||(i=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/Math.pow(a,i-1))),(s=p([])).leaf=!1,s.height=i;var l,u,h,d,c=Math.ceil(r/a),f=c*Math.ceil(Math.sqrt(a));for(g(e,t,n,f,this.compareMinX),l=t;l<=n;l+=f)for(g(e,l,h=Math.min(l+f-1,n),c,this.compareMinY),u=l;u<=h;u+=c)d=Math.min(u+c-1,h),s.children.push(this._build(e,u,d,i-1));return o(s,this.toBBox),s},_chooseSubtree:function(e,t,n,i){for(var s,r,o,a,l,u,h,c,f,m;i.push(t),!t.leaf&&i.length-1!==n;){for(h=c=1/0,s=0,r=t.children.length;s<r;s++)l=d(o=t.children[s]),f=e,m=o,(u=(Math.max(m.maxX,f.maxX)-Math.min(m.minX,f.minX))*(Math.max(m.maxY,f.maxY)-Math.min(m.minY,f.minY))-l)<c?(c=u,h=l<h?l:h,a=o):u===c&&l<h&&(h=l,a=o);t=a||t.children[0]}return t},_insert:function(e,t,n){var i=this.toBBox,s=n?e:i(e),r=[],o=this._chooseSubtree(s,this.data,t,r);for(o.children.push(e),l(o,s);t>=0&&r[t].children.length>this._maxEntries;)this._split(r,t),t--;this._adjustParentBBoxes(s,r,t)},_split:function(e,t){var n=e[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);var r=this._chooseSplitIndex(n,s,i),a=p(n.children.splice(r,n.children.length-r));a.height=n.height,a.leaf=n.leaf,o(n,this.toBBox),o(a,this.toBBox),t?e[t-1].children.push(a):this._splitRoot(n,a)},_splitRoot:function(e,t){this.data=p([e,t]),this.data.height=e.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},_chooseSplitIndex:function(e,t,n){var i,s,r,o,l,u,h,c,f,m,p,g,x,_;for(u=h=1/0,i=t;i<=n-t;i++)f=s=a(e,0,i,this.toBBox),m=r=a(e,i,n,this.toBBox),void 0,void 0,void 0,void 0,p=Math.max(f.minX,m.minX),g=Math.max(f.minY,m.minY),x=Math.min(f.maxX,m.maxX),_=Math.min(f.maxY,m.maxY),o=Math.max(0,x-p)*Math.max(0,_-g),l=d(s)+d(r),o<u?(u=o,c=i,h=l<h?l:h):o===u&&l<h&&(h=l,c=i);return c},_chooseSplitAxis:function(e,t,n){var i=e.leaf?this.compareMinX:u,s=e.leaf?this.compareMinY:h;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)},_allDistMargin:function(e,t,n,i){e.children.sort(i);var s,r,o=this.toBBox,u=a(e,0,t,o),h=a(e,n-t,n,o),d=c(u)+c(h);for(s=t;s<n-t;s++)r=e.children[s],l(u,e.leaf?o(r):r),d+=c(u);for(s=n-t-1;s>=t;s--)r=e.children[s],l(h,e.leaf?o(r):r),d+=c(h);return d},_adjustParentBBoxes:function(e,t,n){for(var i=n;i>=0;i--)l(t[i],e)},_condense:function(e){for(var t,n=e.length-1;n>=0;n--)0===e[n].children.length?n>0?(t=e[n-1].children).splice(t.indexOf(e[n]),1):this.clear():o(e[n],this.toBBox)},_initFormat:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}},87565:(e,t,n)=>{"use strict";n.d(t,{lt:()=>u,WU:()=>a,Qc:()=>h});var i=n(88263),s=n(3766);const r={ar:[".",","],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function o(e){e||(e=(0,s.Kd)());let t=e in r;if(!t){const n=e.split("-");n.length>1&&n[0]in r&&(e=n[0],t=!0),t||(e="en")}const[n,i,o="#,##0.###"]=r[e];return{decimal:n,group:i,pattern:o}}function a(e,t){const n=o((t={...t}).locale);t.customs=n;const i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){const i=(n=n||{}).customs.group,s=n.customs.decimal,r=t.split(";"),o=r[0];if(-1!==(t=r[e<0?1:0]||"-"+o).indexOf("%"))e*=100;else if(-1!==t.indexOf("‰"))e*=1e3;else{if(-1!==t.indexOf("¤"))throw new Error("currency notation not supported");if(-1!==t.indexOf("E"))throw new Error("exponential notation not supported")}const a=l,u=o.match(a);if(!u)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(a,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const i=t.split("."),s="string"==typeof n.places&&n.places.indexOf(",");let r=n.places;s?r=n.places.substring(s+1):r>=0||(r=(i[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(r))));const o=String(Math.abs(e)).split("."),a=o[1]||"";if(i[1]||n.places){s&&(n.places=n.places.substring(0,s));const e=void 0!==n.places?n.places:i[1]&&i[1].lastIndexOf("0")+1;e>a.length&&(o[1]=a.padEnd(Number(e),"0")),r<a.length&&(o[1]=a.substr(0,Number(r)))}else o[1]&&o.pop();const l=i[0].replace(",","");let u=l.indexOf("0");-1!==u&&(u=l.length-u,u>o[0].length&&(o[0]=o[0].padStart(u,"0")),-1===l.indexOf("#")&&(o[0]=o[0].substr(o[0].length-u)));let h,d,c=i[0].lastIndexOf(",");if(-1!==c){h=i[0].length-c-1;const e=i[0].substr(0,c);c=e.lastIndexOf(","),-1!==c&&(d=e.length-c-1)}const f=[];for(let e=o[0];e;){const t=e.length-h;f.push(t>0?e.substr(t):e),e=t>0?e.slice(0,t):"",d&&(h=d,d=void 0)}return o[0]=f.reverse().join(n.group||","),o.join(n.decimal||".")}(e,u[0],{decimal:s,group:i,places:n.places,round:n.round}))}(e,i,t)}const l=/[#0,]*[#0](?:\.0*#*)?/;function u(e){const t=o((e=e||{}).locale),n=e.pattern||t.pattern,s=t.group,r=t.decimal;let a=1;if(-1!==n.indexOf("%"))a/=100;else if(-1!==n.indexOf("‰"))a/=1e3;else if(-1!==n.indexOf("¤"))throw new Error("currency notation not supported");const u=n.split(";");return 1===u.length&&u.push("-"+u[0]),{regexp:c(u,(function(t){return(t="(?:"+(0,i.Qs)(t,".")+")").replace(l,(function(t){const n={signed:!1,separator:e.strict?s:[s,""],fractional:e.fractional,decimal:r,exponent:!1},i=t.split(".");let o=e.places;1===i.length&&1!==a&&(i[1]="###"),1===i.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?i[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(n.fractional=!0),!e.places&&o<i[1].length&&(o+=","+i[1].length),n.places=o);const l=i[0].split(",");return l.length>1&&(n.groupSize=l.pop().length,l.length>1&&(n.groupSize2=l.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=d(e),n=c(e.fractional,(function(t){let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let i=t+n;return n&&(i="(?:(?:"+i+")|(?:"+n+"))"),i+c(e.exponent,(function(t){return t?"([eE]"+d({signed:e.eSigned})+")":""}))}(n)+")"}))}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:r,factor:a}}function h(e,t){const n=u(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;let s=i[1];if(!i[1]){if(!i[2])return NaN;s=i[2],n.factor*=-1}return s=s.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(s)*n.factor}function d(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",c(e.signed,(function(e){return e?"[-+]":""}),!0)+c(e.separator,(function(t){if(!t)return"(?:\\d+)";" "===(t=(0,i.Qs)(t))?t="\\s":" "===t&&(t="\\s\\xa0");const n=e.groupSize,s=e.groupSize2;if(s){const e="(?:0|[1-9]\\d{0,"+(s-1)+"}(?:["+t+"]\\d{"+s+"})*["+t+"]\\d{"+n+"})";return n-s>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}const c=function(e,t,n){if(!(e instanceof Array))return t(e);const i=[];for(let n=0;n<e.length;n++)i.push(t(e[n]));return f(i.join("|"),n)},f=function(e,t){return"("+(t?"?:":"")+e+")"}},10165:(e,t,n)=>{"use strict";n.d(t,{N:()=>i});const i={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const i=new s(e.getPointX(t),e.getPointY(t),n),r=e.hasZ(t),o=e.hasM(t);return r&&(i.z=e.getPointZ(t)),o&&(i.m=e.getPointM(t)),i},exportPolygon:function(e,t,n){return new r(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new a(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const i=e.hasZ(t),s=e.hasM(t),r=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(i){const n=e.getZExtent(t);r.zmin=n.vmin,r.zmax=n.vmax}if(s){const n=e.getMExtent(t);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class s{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(e,t,n,i){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(e,t,n,i){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(e,t,n,i){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class l{constructor(e,t,n,i,s){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},24179:(e,t,n)=>{"use strict";function i(e,t){return e?t?4:3:t?3:2}function s(e,t,n,s,a){if(!t||!t.lengths.length)return null;const l="upperLeft"===(null==a?void 0:a.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const u=e.coords,h=[],d=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:f}=t,m=i(n,s);let p=0;for(const e of c){const t=r(d,f,p,e,n,s,l);t&&h.push(t),p+=e*m}if(h.sort(((e,t)=>{let i=l*e[2]-l*t[2];return 0===i&&n&&(i=e[4]-t[4]),i})),h.length){let e=6*h[0][2];u[0]=h[0][0]/e,u[1]=h[0][1]/e,n&&(e=6*h[0][4],u[2]=0!==e?h[0][3]/e:0),(u[0]<d[0]||u[0]>d[1]||u[1]<d[2]||u[1]>d[3]||n&&(u[2]<d[4]||u[2]>d[5]))&&(u.length=0)}if(!u.length){const e=t.lengths[0]?o(f,0,c[0],n,s):null;if(!e)return null;u[0]=e[0],u[1]=e[1],n&&e.length>2&&(u[2]=e[2])}return e}function r(e,t,n,s,r,o,a=1){const l=i(r,o);let u=n,h=n+l,d=0,c=0,f=0,m=0,p=0;for(let n=0,i=s-1;n<i;n++,u+=l,h+=l){const n=t[u],i=t[u+1],s=t[u+2],o=t[h],a=t[h+1],l=t[h+2];let g=n*a-o*i;m+=g,d+=(n+o)*g,c+=(i+a)*g,r&&(g=n*l-o*s,f+=(s+l)*g,p+=g),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),i<e[2]&&(e[2]=i),i>e[3]&&(e[3]=i),r&&(s<e[4]&&(e[4]=s),s>e[5]&&(e[5]=s))}if(m*a>0&&(m*=-1),p*a>0&&(p*=-1),!m)return null;const g=[d,c,.5*m];return r&&(g[3]=f,g[4]=.5*p),g}function o(e,t,n,s,r){const o=i(s,r);let d=t,c=t+o,f=0,m=0,p=0,g=0;for(let t=0,i=n-1;t<i;t++,d+=o,c+=o){const t=e[d],n=e[d+1],i=e[d+2],r=e[c],o=e[c+1],x=e[c+2],_=s?l(t,n,i,r,o,x):a(t,n,r,o);if(_)if(f+=_,s){const e=h(t,n,i,r,o,x);m+=_*e[0],p+=_*e[1],g+=_*e[2]}else{const e=u(t,n,r,o);m+=_*e[0],p+=_*e[1]}}return f>0?s?[m/f,p/f,g/f]:[m/f,p/f]:n>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function a(e,t,n,i){const s=n-e,r=i-t;return Math.sqrt(s*s+r*r)}function l(e,t,n,i,s,r){const o=i-e,a=s-t,l=r-n;return Math.sqrt(o*o+a*a+l*l)}function u(e,t,n,i){return[e+.5*(n-e),t+.5*(i-t)]}function h(e,t,n,i,s,r){return[e+.5*(i-e),t+.5*(s-t),n+.5*(r-n)]}n.d(t,{Y:()=>s})},77142:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var i=n(59472),s=n(36544),r=n(32656),o=n(35470),a=n(50897),l=n(31036),u=n(69996),h=n(95830),d=n(96233);const c={minX:0,minY:0,maxX:0,maxY:0};class f{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=(0,d.r)(9,(0,h.Z)("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex();for(const n of function(e,t){return c.minX=t[0],c.minY=t[1],c.maxX=t[2],c.maxY=t[3],e.search(c)}(this._index,e))t(this._idByBounds.get(n))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}var m=n(44195),p=n(73127),g=n(24179);const x={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new m.Z(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=(0,g.Y)(new p.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)},_=class{constructor(e){this.geometryInfo=e,this._boundsStore=new f,this._featuresById=new Map,this._markedIds=new Set,this.events=new o.Z,this.featureAdapter=x}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=(0,a.Ue)(a.Gv);return this._featuresById.forEach((t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t((0,u.JR)(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void s.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new r.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let o;if(this._markedIds.add(t),n?(e.displayId=n.displayId,o=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,i.pC)(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);o=(0,l.$)(o||(0,a.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,o),this._featuresById.set(t,e)}_remove(e){return(0,i.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},71951:(e,t,n)=>{"use strict";n.d(t,{_W:()=>c,iV:()=>p,oj:()=>x});var i=n(39105),s=n(27780),r=n(41241),o=n(28449),a=n(10165);const l=[0,0];function u(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,l),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,l),[n.xmax,n.ymax]=e(t.xmax,t.ymax,l),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:h(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:h(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:d(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function h(e,t){const n=[];for(const i of e)n.push(d(i,t));return n}function d(e,t){const n=[];for(const i of e){const e=t(i[0],i[1],[0,0]);n.push(e),i.length>2&&e.push(i[2]),i.length>3&&e.push(i[3])}return n}async function c(e,t){if(!t)return;const n=Array.isArray(e)?e.map((e=>{var t;return null==(t=e.geometry)?void 0:t.spatialReference})):[e];await(0,o.iQ)(n.map((e=>({source:e,dest:t}))))}const f=u.bind(null,r.hG),m=u.bind(null,r.R6);function p(e,t,n){return e?(n||(n=t,t=e.spatialReference),(0,s.JY)(t)&&(0,s.JY)(n)&&!(0,s.fS)(t,n)?(0,r.Q8)(t,n)?(0,s.sS)(n)?f(e):m(e):(0,o.oj)(a.N,[e],t,n,null)[0]:e):e}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,n){!e||!e.length||!t||!n||(0,s.fS)(t,n);const r={geometries:e,inSpatialReference:t,outSpatialReference:n,resolve:null};return this._jobs.push(r),(0,i.Ue)((e=>{r.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:n,outSpatialReference:i,resolve:l}=e;(0,r.Q8)(n,i)?(0,s.sS)(i)?l(t.map(f)):l(t.map(m)):l((0,o.oj)(a.N,t,n,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};async function x(e,t,n){return g.push(e,t,n)}},61:(e,t,n)=>{"use strict";n.r(t),n.d(t,{csvLatitudeFieldNames:()=>j,csvLongitudeFieldNames:()=>O,default:()=>q});var i=n(95830),s=n(82550),r=n(32656),o=n(10923),a=n(39105),l=n(27780),u=n(73032),h=n(41241),d=(n(36348),n(54721)),c=n(28449),f=n(87565),m=n(44195),p=n(73127),g=n(61121),x=n(10165),_=n(71951),y=n(56471),I=n(77142),b=n(21895);const v=/^\s*"([\S\s]*)"\s*$/,N=/""/g,F=[","," ",";","|","\t"];function M(e,t){const n={},i=e.length;for(let s=0;s<i;s++)n[e[s]]=t[s];return n}function*B(e,t,n){let i=0;for(;i<=e.length;){const s=e.indexOf(t,i),r=e.substring(i,s>-1?s:void 0);i+=r.length+1,n&&!r.trim()||(yield r)}}function E(e){const t=e.includes("\r\n")?"\r\n":"\n";return B(e,t,!0)}function T(e,t){return B(e,t,!1)}function w(e){const t=e.trim();let n=0,i="";for(const e of F){const s=t.split(e).length;s>n&&(n=s,i=e)}return""===i?null:i}function*S(e,t,n){let i="",s="",r=0,o=[];e:for(;;){const{value:a,done:l}=e.next();if(l)return;const u=T(a,n);t:for(;;){const{value:e,done:t}=u.next();if(t)break t;if(i+=s+e,s="",r+=Y(e),r%2==0){if(r>0){const e=v.exec(i);if(!e){o=[],i="",r=0;continue e}o.push(e[1].replace(N,'"'))}else o.push(i);i="",r=0}else s=n}0===r?(yield M(t,o),o=[]):s="\n"}}function Y(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}const Z=(0,y.bU)("esriGeometryPoint"),X=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],j=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],O=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],D=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,R=["csv"],k=[0,0];class C{constructor(e,t){this.x=e,this.y=t}}const P=function(){const e=(0,f.lt)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return function(s){const r=t.exec(s);if(e.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}(),V="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,q=class{constructor(){this._fieldsIndex=null,this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null}async load(e,t={}){const[n]=await(0,a.$6)([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),i=this._parse(n,e);if(this._queryEngine=this._createQueryEngine(n,i),i.layerDefinition.extent=this._queryEngine.fullExtent,i.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;i.layerDefinition.timeInfo.timeExtent=[e,t]}return i}async applyEdits(){throw new r.Z("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}async _fetch(e,t){if(!e)throw new r.Z("csv-source:invalid-source","url not defined");const n=(0,o.mN)(e);return(await(0,d.default)(n.path,{query:n.query,responseType:"text",signal:t.signal})).data}_parse(e,t){const n=t.parsing||{},i={columnDelimiter:n.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},a=E(e);let{value:l}=a.next();if(!l)throw new r.Z("csv","CSV is empty",{csv:e});if(l=l.trim(),!n.columnDelimiter){const e=w(l);if(!e)throw new r.Z("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");i.columnDelimiter=e}const u=l.split(i.columnDelimiter),h=i.layerDefinition={name:(0,o.vt)(t.url,R)||"csv",drawingInfo:Z,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=this._inferLocationInfo(u);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new r.Z("csv","Unable to identify latitudeField and/or longitudeField from CSV");i.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName}}const d=this._inferFields(a,i.columnDelimiter,u,i.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of d){const n=e.get(t.name.toLowerCase());if(n){const e=t.name;(0,s.jB)(t,n),t.name=e}}}if(h.fields=d,!h.fields.some((e=>"esriFieldTypeOID"===e.type&&(h.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};h.objectIdField=e.name,h.fields.unshift(e)}if(this._fieldsIndex=new g.Z(h.fields),h.timeInfo){const e=h.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(h.timeInfo=null)}return i}_inferLocationInfo(e){let t=null,n=null;const i=t=>e.find((e=>e.toLowerCase()===t));return O.some((e=>(t=i(e),!!t))),j.some((e=>(n=i(e),!!n))),{longitudeFieldName:t,latitudeFieldName:n}}_inferFields(e,t,n,i){const s=[],r=S(e,n,t),o=[];e:for(;o.length<10;){const{value:e,done:t}=r.next();if(t)break e;o.push(e)}for(const e of n)if(e===i.longitudeFieldName||e===i.latitudeFieldName)s.push({name:e,type:"esriFieldTypeDouble",alias:e});else{const t=o.map((t=>t[e])),n=this._inferFieldType(t),i={name:e,type:null,alias:e};switch(n){case"integer":i.type="esriFieldTypeInteger";break;case"double":i.type="esriFieldTypeDouble";break;case"date":i.type="esriFieldTypeDate",i.length=36;break;default:i.type="esriFieldTypeString",i.length=255}s.push(i)}return s}_inferFieldType(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let n=!1;if(""!==e){if(t.test(e))n=!0;else{let t=P(e);if(!isNaN(t))return/[.,]/.test(e)||!V(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return"string"}return"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}_isValidDate(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let n=!0;if((0,i.Z)("chrome")&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!D.test(e[i]),i++;n=!t}}return n}_createQueryEngine(e,t){const{latitudeFieldName:n,longitudeFieldName:i}=t.locationInfo,{objectIdField:s,fields:r,extent:o,timeInfo:a}=t.layerDefinition;let d=[];const f=[],g=new Set,_=new Set,y=[];for(const{name:e,type:t}of r)"esriFieldTypeDate"===t?g.add(e):X.indexOf(t)>-1&&_.add(e),e!==s&&y.push(e);let v=0;const N=E(e);N.next();const F=S(N,y,t.columnDelimiter);e:for(;;){const{value:e,done:t}=F.next();if(t)break e;const r=this._parseCoordinateValue(e[n]),o=this._parseCoordinateValue(e[i]);if(null!=o&&null!=r&&!isNaN(r)&&!isNaN(o)){e[n]=r,e[i]=o;for(const t in e)if(t!==n&&t!==i)if(g.has(t)){const n=new Date(e[t]);e[t]=this._isValidDate(n,e[t])?n.getTime():null}else if(_.has(t)){const n=P(e[t]);isNaN(n)?e[t]=null:e[t]=n}e[s]=v,v++,d.push(new C(o,r)),f.push(e)}}if(!(0,l.fS)({wkid:4326},o.spatialReference))if((0,l.sS)(o.spatialReference))for(const e of d)[e.x,e.y]=(0,h.hG)(e.x,e.y,k);else d=(0,c.oj)(x.N,d,u.Z.WGS84,o.spatialReference,null);const M=new I.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),B=new b.Z({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:a,objectIdField:s,spatialReference:o.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:M}),T=[];for(let e=0;e<d.length;e++){const{x:t,y:n}=d[e],i=f[e];i[s]=e+1,T.push(new m.Z(new p.Z([],[t,n]),i,null,i[s]))}return M.addMany(T),B}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=P(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await(0,_._W)(l.Zn,e)}catch{throw new r.Z("csv-layer","Projection not supported")}}}}}]);
//# sourceMappingURL=61.js.map