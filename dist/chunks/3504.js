(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[3504],{53504:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var o=r(56140),l=(r(95830),r(36544),r(68055),r(79881)),n=r(30590),a=r(87566),s=(r(10923),r(57002),r(86035),r(39105)),i=r(83477),u=r(56700),c=r(43072),p=r(78910),d=r(33716),C=r(76603);let f=class extends((0,p.q)((0,d.I)((0,c.R)(u.Z)))){constructor(...e){super(...e),this.type="route"}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new C.default;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new C.default;return t.read(e,r),t}))}get fullExtent(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>e?e.union(t.fullExtent):t.fullExtent),null):null}get maxScale(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),null):0}set maxScale(e){this.featureCollections.forEach((t=>{t.maxScale=e})),this._set("maxScale",e)}get minScale(){return this.featureCollections?this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),null):0}set minScale(e){this.featureCollections.forEach((t=>{t.minScale=e})),this._set("minScale",e)}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),(0,s.DB)(this)}_getNamedFeatureLayer(e){if(this.featureCollections)return this.featureCollections.find((t=>t.title===e))}};(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"]})],f.prototype,"barrierLines",null),(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"]})],f.prototype,"barrierPoints",null),(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"]})],f.prototype,"barrierPolygons",null),(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"]})],f.prototype,"directionLines",null),(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"]})],f.prototype,"directionPoints",null),(0,o._)([(0,l.Cb)({type:i.Z.ofType(C.default)})],f.prototype,"featureCollections",void 0),(0,o._)([(0,n.r)("portal-item","featureCollections",["layers"])],f.prototype,"readFeatureCollectionsFromItem",null),(0,o._)([(0,n.r)("web-map","featureCollections",["featureCollection.layers"])],f.prototype,"readFeatureCollectionsFromWebMap",null),(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"],readOnly:!0})],f.prototype,"fullExtent",null),(0,o._)([(0,l.Cb)({type:["show","hide"]})],f.prototype,"listMode",void 0),(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"]})],f.prototype,"maxScale",null),(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"]})],f.prototype,"minScale",null),(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"]})],f.prototype,"routeInfo",null),(0,o._)([(0,l.Cb)({dependsOn:["featureCollections"]})],f.prototype,"stops",null),(0,o._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0),f=(0,o._)([(0,a.j)("esri.layers.RouteLayer")],f);const y=f}}]);
//# sourceMappingURL=3504.js.map