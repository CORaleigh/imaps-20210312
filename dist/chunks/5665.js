(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[5665,6194],{42738:(e,t,n)=>{"use strict";n.d(t,{a:()=>o,b:()=>c,f:()=>f,i:()=>i,m:()=>s,r:()=>a,s:()=>l,t:()=>u});var r=n(60418);function i(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function o(e,t){const n=t[0],r=t[1],i=t[2],o=t[3],s=t[4],a=t[5];let l=n*o-r*i;return l?(l=1/l,e[0]=o*l,e[1]=-r*l,e[2]=-i*l,e[3]=n*l,e[4]=(i*a-o*s)*l,e[5]=(r*s-n*a)*l,e):null}function s(e,t,n){const r=t[0],i=t[1],o=t[2],s=t[3],a=t[4],l=t[5],u=n[0],c=n[1],f=n[2],p=n[3],h=n[4],y=n[5];return e[0]=r*u+o*c,e[1]=i*u+s*c,e[2]=r*f+o*p,e[3]=i*f+s*p,e[4]=r*h+o*y+a,e[5]=i*h+s*y+l,e}function a(e,t,n){const r=t[0],i=t[1],o=t[2],s=t[3],a=t[4],l=t[5],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c+o*u,e[1]=i*c+s*u,e[2]=r*-u+o*c,e[3]=i*-u+s*c,e[4]=a,e[5]=l,e}function l(e,t,n){const r=t[0],i=t[1],o=t[2],s=t[3],a=t[4],l=t[5],u=n[0],c=n[1];return e[0]=r*u,e[1]=i*u,e[2]=o*c,e[3]=s*c,e[4]=a,e[5]=l,e}function u(e,t,n){const r=t[0],i=t[1],o=t[2],s=t[3],a=t[4],l=t[5],u=n[0],c=n[1];return e[0]=r,e[1]=i,e[2]=o,e[3]=s,e[4]=r*u+o*c+a,e[5]=i*u+s*c+l,e}function c(e,t){const n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e[4]=0,e[5]=0,e}function f(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function p(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e}let h=s,y=p;Object.freeze({__proto__:null,copy:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},identity:i,set:function(e,t,n,r,i,o,s){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=o,e[5]=s,e},invert:o,determinant:function(e){return e[0]*e[3]-e[1]*e[2]},multiply:s,rotate:a,scale:l,translate:u,fromRotation:c,fromScaling:f,fromTranslation:function(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e},str:function(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"},frob:function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)},add:function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e},subtract:p,multiplyScalar:function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e},multiplyScalarAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e},exactEquals:function(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]},equals:function(e,t){const n=e[0],i=e[1],o=e[2],s=e[3],a=e[4],l=e[5],u=t[0],c=t[1],f=t[2],p=t[3],h=t[4],y=t[5];return Math.abs(n-u)<=r.E*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(i-c)<=r.E*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(o-f)<=r.E*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(s-p)<=r.E*Math.max(1,Math.abs(s),Math.abs(p))&&Math.abs(a-h)<=r.E*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(l-y)<=r.E*Math.max(1,Math.abs(l),Math.abs(y))},mul:h,sub:y})},87561:(e,t,n)=>{"use strict";function r(){const e=new Float32Array(6);return e[0]=1,e[3]=1,e}function i(e,t,n,r){const i=t[r],o=t[r+1];e[r]=n[0]*i+n[2]*o+n[4],e[r+1]=n[1]*i+n[3]*o+n[5]}function o(e,t,n,r=0,o=0,s=2){const a=o||t.length/s;for(let o=r;o<a;o++)i(e,t,n,o*s)}n.d(t,{c:()=>r,t:()=>o});Object.freeze({__proto__:null,create:r,clone:function(e){const t=new Float32Array(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},fromValues:function(e,t,n,r,i,o){const s=new Float32Array(6);return s[0]=e,s[1]=t,s[2]=n,s[3]=r,s[4]=i,s[5]=o,s},createView:function(e,t){return new Float32Array(e,t,6)},transform:i,transformMany:o})},19048:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r,i=n(56140),o=(n(95830),n(36544),n(68055),n(79881)),s=n(56274),a=n(30590),l=n(15307),u=n(87566),c=n(60538),f=(n(10923),n(57002),n(86035),n(19677)),p=n(58385),h=n(93533);const y=(0,s.wY)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),d=y.jsonValues.slice();(0,f.e$)(d,"orthometric");const g=(0,s.wY)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=r=class extends p.wq{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,n){return y.write(e,t,n)}readHeightModel(e,t,n){return y.read(e)||(n&&n.messages&&n.messages.push(function(e,t){return new l.Z("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(e,{context:n})),null)}readHeightUnit(e,t,n){return g.read(e)||(n&&n.messages&&n.messages.push(w(e,{context:n})),null)}readHeightUnitService(e,t,n){return(0,h.$C)(e)||g.read(e)||(n&&n.messages&&n.messages.push(w(e,{context:n})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new r({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const n=(0,h.cM)(t);return new r({heightModel:e.heightModel,heightUnit:n,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new r;return t.read(e,{origin:"web-scene"}),t}};function w(e,t){return new l.Z("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}(0,i._)([(0,o.Cb)({type:y.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:d,default:"ellipsoidal"}}}})],m.prototype,"heightModel",void 0),(0,i._)([(0,c.c)("web-scene","heightModel")],m.prototype,"writeHeightModel",null),(0,i._)([(0,a.r)(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),(0,i._)([(0,o.Cb)({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:g.write}}}})],m.prototype,"heightUnit",void 0),(0,i._)([(0,a.r)("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),(0,i._)([(0,a.r)("service","heightUnit")],m.prototype,"readHeightUnitService",null),(0,i._)([(0,o.Cb)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),(0,i._)([(0,a.r)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=r=(0,i._)([(0,u.j)("esri.geometry.HeightModelInfo")],m);const v=m},91535:(e,t,n)=>{"use strict";n.d(t,{aX:()=>C,or:()=>I});var r=n(34926),i=n(59472),o=n(36544),s=n(32656),a=n(39105),l=n(27780),u=n(73032),c=n(41241),f=n(53817),p=n(93833),h=n(10923),y=n(56885),d=(n(36348),n(54721));async function g(e,t,n){const r="string"==typeof e?(0,h.mN)(e):e,i=t[0].spatialReference,o=(0,y.Ji)(t[0]),s={...n,query:{...r.query,f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify((a=t,{geometryType:(0,y.Ji)(a[0]),geometries:a.map((e=>e.toJSON()))}))}};var a;return function(e,t,n){const r=(0,y.q9)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=n,t}))}((await(0,d.default)(r.path+"/simplify",s)).data,o,i)}const m=o.Z.getLogger("esri.geometry.support.normalizeUtils"),w={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new p.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator}),minus180Line:new p.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new p.Z({paths:[[[180,-180],[180,180]]],spatialReference:u.Z.WGS84}),minus180Line:new p.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:u.Z.WGS84})}};function v(e){return"polygon"===e.type}function b(e){return"polyline"===e[0].type}function x(e){return v(e)?e.rings:e.paths}function _(e,t){return Math.ceil((e-t)/(2*t))}function S(e,t){const n=x(e);for(const e of n)for(const n of e)n[0]+=t;return e}function M(e,t,n){if(t){const t=function(e,t){if(!(e instanceof p.Z||e instanceof f.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m.error(e),new s.Z(e)}const n=x(e),r=[];for(const e of n){const n=[];r.push(n),n.push([e[0][0],e[0][1]]);for(let r=0;r<e.length-1;r++){const i=e[r][0],o=e[r][1],s=e[r+1][0],a=e[r+1][1],l=Math.sqrt((s-i)*(s-i)+(a-o)*(a-o)),u=(a-o)/l,c=(s-i)/l,f=l/t;if(f>1){for(let e=1;e<=f-1;e++){const r=e*t,s=c*r+i,a=u*r+o;n.push([s,a])}const e=(l+Math.floor(f-1)*t)/2,r=c*e+i,s=u*e+o;n.push([r,s])}n.push([s,a])}}return v(e)?new f.Z({rings:r,spatialReference:e.spatialReference}):new p.Z({paths:r,spatialReference:e.spatialReference})}(e,1e6);e=(0,c.Sx)(t,!0)}return n&&(e=S(e,n)),e}function O(e,t,n){if(Array.isArray(e)){const r=e[0];if(r>t){const n=_(r,t);e[0]=r+n*(-2*t)}else if(r<n){const t=_(r,n);e[0]=r+t*(-2*n)}}else{const r=e.x;if(r>t){const n=_(r,t);e=e.clone().offset(n*(-2*t),0)}else if(r<n){const t=_(r,n);e=e.clone().offset(t*(-2*n),0)}}return e}async function C(e,t,n){if(!Array.isArray(e))return C([e],t);const o=t?t.url:r.Z.geometryServiceUrl;let s,u,m,v,I,R,j,E,N=0;const Z=[],q=[];for(const t of e)if((0,i.Wi)(t))q.push(t);else if(s||(s=t.spatialReference,u=(0,l.C5)(s),m=s.isWebMercator,R=m?102100:4326,v=w[R].maxX,I=w[R].minX,j=w[R].plus180Line,E=w[R].minus180Line),u)if("mesh"===t.type)q.push(t);else if("point"===t.type)q.push(O(t.clone(),v,I));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>O(e,v,I))),q.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,u);q.push(e.rings?new f.Z(e):e)}else if(t.extent){const e=t.extent,n=_(e.xmin,I)*(2*v);let r=0===n?t.clone():S(t.clone(),n);e.offset(n,0),e.intersects(j)&&e.xmax!==v?(N=e.xmax>N?e.xmax:N,r=M(r,m),Z.push(r),q.push("cut")):e.intersects(E)&&e.xmin!==I?(N=e.xmax*(2*v)>N?e.xmax*(2*v):N,r=M(r,m,360),Z.push(r),q.push("cut")):q.push(r)}else q.push(t.clone());else q.push(t);let J=_(N,v),k=-90;const P=J,U=new p.Z;for(;J>0;){const e=360*J-180;U.addPath([[e,k],[e,-1*k]]),k*=-1,J--}if(Z.length>0&&P>0){const t=function(e,t){let n=-1;for(let r=0;r<t.cutIndexes.length;r++){const i=t.cutIndexes[r],o=t.geometries[r],s=x(o);for(let e=0;e<s.length;e++){const t=s[e];t.some((n=>{if(n[0]<180)return!0;{let n=0;for(let e=0;e<t.length;e++){const r=t[e][0];n=r>n?r:n}n=Number(n.toFixed(9));const r=-360*_(n,180);for(let n=0;n<t.length;n++){const t=o.getPoint(e,n);o.setPoint(e,n,t.clone().offset(r,0))}return!0}}))}if(i===n){if("polygon"===e[0].type)for(const t of x(o))e[i]=e[i].addRing(t);else if(b(e))for(const t of x(o))e[i]=e[i].addPath(t)}else n=i,e[i]=o}return e}(Z,await async function(e,t,n,r){const i="string"==typeof e?(0,h.mN)(e):e,o=t[0].spatialReference,s={...r,query:{...i.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:(0,y.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},a=await(0,d.default)(i.path+"/cut",s),{cutIndexes:l,geometries:u=[]}=a.data;return{cutIndexes:l,geometries:u.map((e=>{const t=(0,y.im)(e);return t.spatialReference=o,t}))}}(o,Z,U,n)),r=[],s=[];for(let n=0;n<q.length;n++){const o=q[n];if("cut"!==o)s.push(o);else{const o=t.shift(),a=e[n];(0,i.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&o.rings.length>=a.rings.length?(r.push(o),s.push("simplify")):s.push(m?(0,c.$)(o):o)}}if(!r.length)return s;const a=await g(o,r,n),l=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?l.push(t):l.push(m?(0,c.$)(a.shift()):a.shift())}return l}const A=[];for(let e=0;e<q.length;e++){const t=q[e];if("cut"!==t)A.push(t);else{const e=Z.shift();A.push(!0===m?(0,c.$)(e):e)}}return(0,a.resolve)(A)}function I(e,t){const n=(0,l.C5)(t);if(n){const[t,r]=n.valid,i=r-t;if(e<t)for(;e<t;)e+=i;if(e>r)for(;e>r;)e-=i}return e}},18152:(e,t,n)=>{"use strict";n.d(t,{qG:()=>w,PV:()=>y,iR:()=>f,rn:()=>h,Oh:()=>g,bT:()=>m,C_:()=>c,Lx:()=>d,YI:()=>u,HQ:()=>p});var r=n(65575),i=n(37704),o=n(65131),s=n(3277),a=n(87864),l=n(79710);const u={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(e,t){if(null!=t.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return t.screenSizePerspective;(0,r.vw)(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,t,n,r){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||(0,o.df)(this,"screenSizePerspectiveEnabled",{},r))&&(t[n]=e)}}}}}},c={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,n){t[n]=!e}}}},f={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},p={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:i.w}}},h={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},y={value:null,type:l.Z,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function d(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const g={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},m={...g,json:{...g.json,origins:{"web-document":{...g.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,n)=>n&&"service"!==n.origin||!t.drawingInfo||void 0===t.drawingInfo.transparency?t.layerDefinition&&t.layerDefinition.drawingInfo&&void 0!==t.layerDefinition.drawingInfo.transparency?(0,s.b)(t.layerDefinition.drawingInfo.transparency):void 0:(0,s.b)(t.drawingInfo.transparency)}}},w={type:a.Z,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get(){var e,t;if(null==(e=this.layer)||!e.timeInfo)return null;const n=null==(t=this.view)?void 0:t.timeExtent,r=this.layer.timeExtent,i=this.layer.useViewTime?n&&r?n.intersection(r):n||r:r;if(!i||i.isEmpty)return i;const o=this.layer.timeOffset,s=o?i.offset(-o.value,o.unit):i,a=this._get("timeExtent");return s.equals(a)?a:s}}},24681:(e,t,n)=>{"use strict";function r(e,t,n){return t.flatten((({sublayers:e})=>e)).length!==e.length||(!!e.some((e=>e.originIdOf("minScale")>n||e.originIdOf("maxScale")>n||e.originIdOf("renderer")>n||e.originIdOf("labelingInfo")>n||e.originIdOf("opacity")>n||e.originIdOf("labelsVisible")>n||e.originIdOf("source")>n))||!o(e,t))}function i(e,t,n){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===n.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!o(e,t)}function o(e,t){if(!e||!e.length)return!0;const n=t.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>n.length)return!1;let r=0;const i=n.length;for(const{id:t}of e){for(;r<i&&n[r]!==t;)r++;if(r>=i)return!1}return!0}function s(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}n.d(t,{FN:()=>i,ac:()=>s,QV:()=>r})},99322:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>p,JN:()=>c,$o:()=>f});var r=n(56140),i=(n(95830),n(36544),n(68055),n(79881)),o=n(87566),s=(n(10923),n(57002),n(86035),n(83477)),a=n(32105),l=n(15988);const u=s.Z.ofType(l.default);let c=class extends u{constructor(e){super(e),this.on("before-add",(e=>{e.item||e.preventDefault()})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(({item:e})=>{e.layer=null}))}destroy(){this._unownAll()}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._unownAll(),this._set("owner",e),this._ownAll())}_createNewInstance(e){return new u(e)}_ownAll(){this.items.forEach((e=>this._own(e)))}_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_unownAll(){this.items.forEach((e=>this._unown(e)))}_unown(e){e.layer===this.owner&&(e.layer=null)}};(0,r._)([(0,i.Cb)()],c.prototype,"owner",null),c=(0,r._)([(0,o.j)("esri.support.GraphicsCollection")],c);const f=(e="graphics")=>({type:c,cast:a.R,set(t){const n=(0,a.Z)(t,this._get(e),c);n.owner=this,this._set(e,n)}});const p=c},79710:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r,i=n(56140),o=(n(95830),n(59472)),s=(n(36544),n(68055),n(79881)),a=n(56274),l=n(30590),u=n(87566),c=n(60538),f=(n(10923),n(57002),n(86035),n(58385)),p=n(4665);let h=r=class extends f.wq{async collectRequiredFields(e,t){return(0,p.io)(e,t,this.expression)}clone(){return new r({expression:this.expression,title:this.title})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"expression",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"title",void 0),h=r=(0,i._)([(0,u.j)("esri.layers.support.FeatureExpressionInfo")],h);const y=h;var d,g=n(98160);const m=(0,a.wY)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),w=new a.Xn({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let v=d=class extends f.wq{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,n,r){t[n]=e.write(null,r),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){return this._isOverridden("mode")?this._get("mode"):(0,o.pC)(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new d({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};(0,i._)([(0,s.Cb)({type:y,json:{write:!0}})],v.prototype,"featureExpressionInfo",void 0),(0,i._)([(0,l.r)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],v.prototype,"readFeatureExpressionInfo",null),(0,i._)([(0,c.c)("featureExpressionInfo",{featureExpressionInfo:{type:y},"featureExpression.value":{type:[0]}})],v.prototype,"writeFeatureExpressionInfo",null),(0,i._)([(0,s.Cb)({type:m.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],v.prototype,"mode",null),(0,i._)([(0,s.Cb)({type:Number,json:{write:!0}})],v.prototype,"offset",void 0),(0,i._)([(0,s.Cb)({type:g.f9,json:{type:String,read:w.read,write:w.write}})],v.prototype,"unit",null),v=d=(0,i._)([(0,u.j)("esri.layers.support.ElevationInfo")],v);const b=v},98160:(e,t,n)=>{"use strict";n.d(t,{Z7:()=>o,f9:()=>s,lt:()=>i});var r=n(2961);function i(e){return null!=r.a[e]}function o(e){return 1/(r.a[e]||1)}const s=function(){const e=Object.keys(r.a);return e.sort(),e}()},95986:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(56140),i=(n(95830),n(36544),n(68055),n(79881)),o=n(87566),s=n(10923),a=(n(57002),n(86035),n(82677));let l=class extends a.default{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,s.mN)(e):null}_encode(e,t,n){const r={};for(const i in e){if("declaredClass"===i)continue;const o=e[i];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){r[i]=[];for(let e=0;e<o.length;e++)r[i][e]=this._encode(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(n&&n[i]);r[i]=t?e:JSON.stringify(e)}else r[i]=t?o:JSON.stringify(o);else r[i]=o}return r}};(0,r._)([(0,i.Cb)({readOnly:!0,dependsOn:["url"]})],l.prototype,"parsedUrl",null),(0,r._)([(0,i.Cb)()],l.prototype,"requestOptions",void 0),(0,r._)([(0,i.Cb)({type:String})],l.prototype,"url",void 0),l=(0,r._)([(0,o.j)("esri.tasks.Task")],l);const u=l},76194:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(56140),i=(n(95830),n(59472)),o=(n(36544),n(68055),n(79881)),s=n(56274),a=n(30590),l=n(87566),u=n(60538),c=(n(10923),n(57002),n(86035),n(58385)),f=n(73032),p=n(56885),h=n(36348),y=n(15988),d=n(70834);const g=new s.Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let m=class extends c.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const n=f.Z.fromJSON(t.spatialReference),r=[];for(let t=0;t<e.length;t++){const o=e[t],s=y.default.fromJSON(o),a=o.geometry&&o.geometry.spatialReference;(0,i.pC)(s.geometry)&&!a&&(s.geometry.spatialReference=n),r.push(s)}return r}writeGeometryType(e,t,n,r){if(e)return void g.write(e,t,n,r);const{features:o}=this;if(o)for(const e of o)if(e&&(0,i.pC)(e.geometry))return void g.write(e.geometry.type,t,n,r)}readQueryGeometry(e,t){if(!e)return null;const n=!!e.spatialReference,r=(0,p.im)(e);return!n&&t.spatialReference&&(r.spatialReference=f.Z.fromJSON(t.spatialReference)),r}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:n}=this;if(n)for(const e of n)e&&(0,i.pC)(e.geometry)&&e.geometry.spatialReference&&(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let n=0;n<t.features.length;n++){const r=t.features[n];if(r.geometry){const t=e&&e[n];r.geometry=t&&t.toJSON()||r.geometry}}return t}quantize(e){const{scale:[t,n],translate:[r,o]}=e,s=this.features,a=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-r)/t)),(e=>Math.round((o-e)/n)));for(let e=0,t=s.length;e<t;e++)a((0,i.Wg)(s[e].geometry))||(s.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:n}=this;if(!n)return this;const{translate:[r,o],scale:[s,a]}=n,l=this._getHydrationFunction(e,(e=>e*s+r),(e=>o-e*a));for(const{geometry:e}of t)(0,i.pC)(e)&&l(e);return this.transform=null,this}_quantizePoints(e,t,n){let r,i;const o=[];for(let s=0,a=e.length;s<a;s++){const a=e[s];if(s>0){const e=t(a[0]),s=n(a[1]);e===r&&s===i||(o.push([e-r,s-i]),r=e,i=s)}else r=t(a[0]),i=n(a[1]),o.push([r,i])}return o.length>0?o:null}_getQuantizationFunction(e,t,n){return"point"===e?e=>(e.x=t(e.x),e.y=n(e.y),e):"polyline"===e||"polygon"===e?e=>{const r=(0,p.oU)(e)?e.rings:e.paths,i=[];for(let e=0,o=r.length;e<o;e++){const o=r[e],s=this._quantizePoints(o,t,n);s&&i.push(s)}return i.length>0?((0,p.oU)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{let r;return r=this._quantizePoints(e.points,t,n),r.length>0?(e.points=r,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,n){return"point"===e?e=>{e.x=t(e.x),e.y=n(e.y)}:"polyline"===e||"polygon"===e?e=>{const r=(0,p.oU)(e)?e.rings:e.paths;let i,o;for(let e=0,s=r.length;e<s;e++){const s=r[e];for(let e=0,r=s.length;e<r;e++){const r=s[e];e>0?(i+=r[0],o+=r[1]):(i=r[0],o=r[1]),r[0]=t(i),r[1]=n(o)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=n(e.ymin),e.xmax=t(e.xmax),e.ymax=n(e.ymax)}:"multipoint"===e?e=>{const r=e.points;let i,o;for(let e=0,s=r.length;e<s;e++){const s=r[e];e>0?(i+=s[0],o+=s[1]):(i=s[0],o=s[1]),s[0]=t(i),s[1]=n(o)}}:void 0}};(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],m.prototype,"displayFieldName",void 0),(0,r._)([(0,o.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],m.prototype,"exceededTransferLimit",void 0),(0,r._)([(0,o.Cb)({type:[y.default],json:{write:!0}})],m.prototype,"features",void 0),(0,r._)([(0,a.r)("features")],m.prototype,"readFeatures",null),(0,r._)([(0,o.Cb)({type:[d.Z],json:{write:!0}})],m.prototype,"fields",void 0),(0,r._)([(0,o.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],m.prototype,"geometryType",void 0),(0,r._)([(0,u.c)("geometryType")],m.prototype,"writeGeometryType",null),(0,r._)([(0,o.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],m.prototype,"hasM",void 0),(0,r._)([(0,o.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],m.prototype,"hasZ",void 0),(0,r._)([(0,o.Cb)({types:h.qM,json:{write:!0}})],m.prototype,"queryGeometry",void 0),(0,r._)([(0,a.r)("queryGeometry")],m.prototype,"readQueryGeometry",null),(0,r._)([(0,o.Cb)({type:f.Z,json:{write:!0}})],m.prototype,"spatialReference",void 0),(0,r._)([(0,u.c)("spatialReference")],m.prototype,"writeSpatialReference",null),(0,r._)([(0,o.Cb)({json:{write:!0}})],m.prototype,"transform",void 0),m=(0,r._)([(0,l.j)("esri.tasks.support.FeatureSet")],m),m.prototype.toJSON.isDefaultToJSON=!0,m||(m={});const w=m}}]);
//# sourceMappingURL=5665.js.map