(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[5138,6854],{75138:(e,t,r)=>{"use strict";r.r(t),r.d(t,{create:()=>s,projectGeometry:()=>l});var o=r(34926),i=r(32656),a=r(32797),n=r(52411);async function s(e=null,t){if(o.Z.geometryServiceUrl)return new(0,(await r.e(5393).then(r.bind(r,88201))).default)({url:o.Z.geometryServiceUrl});if(!e)throw new i.Z("internal:geometry-service-url-not-configured");let n;if(n="portal"in e?e.portal||a.Z.getDefault():e,await n.load({signal:t}),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url)return new(0,(await r.e(5393).then(r.bind(r,88201))).default)({url:n.helperServices.geometry.url});throw new i.Z("internal:geometry-service-url-not-configured")}async function l(e,t,r=null,o){const a=await s(r,o),l=new n.Z;l.geometries=[e],l.outSpatialReference=t;const u=await a.project(l,{signal:o});if(u&&Array.isArray(u)&&1===u.length)return u[0];throw new i.Z("internal:geometry-service-projection-failed")}},52411:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var o=r(56140),i=(r(95830),r(36544)),a=(r(68055),r(79881)),n=r(87566),s=(r(10923),r(57002),r(86035),r(58385)),l=r(56885);const u=i.Z.getLogger("esri.tasks.support.ProjectParameters");let c=class extends s.wq{constructor(e){super(e),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}get outSR(){return u.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference}set outSR(e){u.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference=e}toJSON(){const e=this.geometries.map((function(e){return e.toJSON()})),t=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:(0,l.Ji)(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};(0,o._)([(0,a.Cb)()],c.prototype,"geometries",void 0),(0,o._)([(0,a.Cb)({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),(0,o._)([(0,a.Cb)({json:{read:!1}})],c.prototype,"outSR",null),(0,o._)([(0,a.Cb)()],c.prototype,"transformation",void 0),(0,o._)([(0,a.Cb)()],c.prototype,"transformForward",void 0),c=(0,o._)([(0,n.j)("esri.tasks.support.ProjectParameters")],c);const p=c}}]);
//# sourceMappingURL=5138.js.map