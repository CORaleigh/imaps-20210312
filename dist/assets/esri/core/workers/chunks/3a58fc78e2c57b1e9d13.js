self.webpackChunkRemoteClient([156],{168:function(t,e,r){"use strict";var o=r(14),s=(r(4),r(2),r(5),r(15)),i=r(18),n=r(25),a=(r(35),r(36),r(23));let c=class extends a.a{constructor(...t){super(...t),this.requestOptions=null,this.url=null}normalizeCtorArgs(t,e){return"string"!=typeof t?t:{url:t,...e}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(t){return t?Object(n.I)(t):null}_encode(t,e,r){const o={};for(const s in t){if("declaredClass"===s)continue;const i=t[s];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){o[s]=[];for(let t=0;t<i.length;t++)o[s][t]=this._encode(i[t])}else if("object"==typeof i)if(i.toJSON){const t=i.toJSON(r&&r[s]);o[s]=e?t:JSON.stringify(t)}else o[s]=e?i:JSON.stringify(i);else o[s]=i}return o}};Object(o.a)([Object(s.b)({readOnly:!0})],c.prototype,"parsedUrl",null),Object(o.a)([Object(s.b)()],c.prototype,"requestOptions",void 0),Object(o.a)([Object(s.b)({type:String})],c.prototype,"url",void 0),c=Object(o.a)([Object(i.a)("esri.tasks.Task")],c);var l=c;e.a=l},477:function(t,e,r){"use strict";var o=r(14),s=(r(4),r(2),r(5),r(15)),i=r(18),n=(r(25),r(35),r(36),r(52)),a=r(63);let c=class extends n.a{constructor(t){super(t),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const t=this.geometries.map((function(t){return t.toJSON()})),e=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(a.c)(e),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};Object(o.a)([Object(s.b)()],c.prototype,"geometries",void 0),Object(o.a)([Object(s.b)({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),Object(o.a)([Object(s.b)()],c.prototype,"transformation",void 0),Object(o.a)([Object(s.b)()],c.prototype,"transformForward",void 0),c=Object(o.a)([Object(i.a)("esri.tasks.support.ProjectParameters")],c);var l=c;e.a=l}});