(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[9263,192],{43072:(e,t,r)=>{"use strict";r.d(t,{R:()=>v,w:()=>w});var i=r(56140),o=r(65575),s=r(87566),a=r(9678),n=r(82677),l=r(65131),p=r(59472),d=r(17771),c=r(82550);class u{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(a.kk),this._values=new Map}clone(e){const t=new u,r=this._originStores[0];r&&r.forEach(((e,r)=>{t.set(r,(0,c.d9)(e),0)}));for(let r=2;r<a.kk;r++){const i=this._originStores[r];i&&i.forEach(((i,o)=>{e&&e.has(o)||t.set(o,(0,c.d9)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||(0,p.j0)(this._propertyOriginMap.get(e))<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=6){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r&&r.get(e),o=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),o!==i}originOf(e){return this._propertyOriginMap.get(e)||0}forEach(e){this._values.forEach(e)}}const h=u,m=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,p.j0)((0,o.vw)(this)),r=t.metadatas,i=t.store,s=new h;t.store=s,i.keys().forEach((e=>{s.set(e,i.get(e),0)})),Object.keys(r).forEach((e=>{t.internalGet(e)&&s.set(e,t.internalGet(e),0)}))}read(e,t){(0,d.ij)(this,e,t)}getAtOrigin(e,t){const r=y(this),i=(0,a.M9)(t);if("string"==typeof e)return r.get(e,i);const o={};return e.forEach((e=>{o[e]=r.get(e,i)})),o}originOf(e){return(0,a.x3)(this.originIdOf(e))}originIdOf(e){return y(this).originOf(e)}revert(e,t){const r=y(this),i=(0,a.M9)(t),s=(0,o.vw)(this);let n;n="string"==typeof e?"*"===e?r.keys(i):[e]:e,n.forEach((e=>{s.propertyInvalidated(e),r.revert(e,i),s.propertyCommitted(e)}))}};return t=(0,i._)([(0,s.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function y(e){return(0,o.vw)(e).store}let g=class extends(m(n.default)){};g=(0,i._)([(0,s.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],g);const b=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return f(this).delete(e,(0,a.M9)(t))}write(e={},t){return(0,l.cW)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,o.vw)(this).setAtOrigin(e,t,(0,a.M9)(r))}removeOrigin(e){const t=f(this),r=(0,a.M9)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),6)}updateOrigin(e,t){const r=f(this),i=(0,a.M9)(t),o=this.get(e);for(let t=i+1;t<a.kk;++t)r.delete(e,t);r.set(e,o,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,s.j)("esri.core.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function f(e){return(0,o.vw)(e).store}const v=e=>{let t=class extends(b(m(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,s.j)("esri.core.MultiOriginJSONSupport")],t),t};let w=class extends(v(n.default)){};w=(0,i._)([(0,s.j)("esri.core.MultiOriginJSONSupport")],w)},56700:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var i=r(56140),o=(r(95830),r(34926)),s=r(36544),a=(r(68055),r(79881)),n=r(87566),l=r(32656),p=r(10923),d=(r(57002),r(86035),r(73032)),c=r(52937),u=(r(36348),r(35470)),h=r(35326),m=r(54721),y=r(809);let g=0;const b=s.Z.getLogger("esri.layers.Layer");let f=class extends(u.Z.EventedMixin((0,h.I)(y.Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new c.Z(-180,-90,180,90,d.Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+g++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=d.Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e,i=await r.e(956).then(r.bind(r,50956));try{return await i.fromUrl(t)}catch(e){throw b.error("#fromArcGISServerUrl({ url: '"+t.url+"'})","Failed to create layer from arcgis server url",e),e}}static async fromPortalItem(e){const t="portalItem"in e?e:{portalItem:e},i=await r.e(1204).then(r.bind(r,1204));try{return await i.fromItem(t)}catch(e){const r=t&&t.portalItem,i=r&&r.id||"unset",s=r&&r.portal&&r.portal.url||o.Z.portalUrl;throw b.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+i+"')",e),e}}initialize(){this.when().catch((e=>{var t,r;s.Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${null!=(t=this.title)?t:"no title"}', id: '${null!=(r=this.id)?r:"no id"}')`,{error:e})}))}destroy(){if(this.parent){const e=this,t=this.parent;"layers"in t&&t.layers.includes(e)?t.layers.remove(e):"tables"in t&&t.tables.includes(e)?t.tables.remove(e):"baseLayers"in t&&t.baseLayers.includes(e)?t.baseLayers.remove(e):"baseLayers"in t&&t.referenceLayers.includes(e)&&t.referenceLayers.remove(e)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const e=this.url;return e?(0,p.mN)(e):null}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,m.default)(e,{query:{f:"json"},responseType:"json"})).data;throw new l.Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,i._)([(0,a.Cb)({type:String})],f.prototype,"attributionDataUrl",void 0),(0,i._)([(0,a.Cb)({type:c.Z})],f.prototype,"fullExtent",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,dependsOn:["attributionDataUrl"]})],f.prototype,"hasAttributionData",null),(0,i._)([(0,a.Cb)({type:String})],f.prototype,"id",void 0),(0,i._)([(0,a.Cb)({type:Boolean,nonNullable:!0})],f.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)({type:["show","hide","hide-children"]})],f.prototype,"listMode",void 0),(0,i._)([(0,a.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],f.prototype,"opacity",void 0),(0,i._)([(0,a.Cb)()],f.prototype,"parent",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,dependsOn:["url"]})],f.prototype,"parsedUrl",null),(0,i._)([(0,a.Cb)({type:Boolean})],f.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:Boolean})],f.prototype,"attributionVisible",void 0),(0,i._)([(0,a.Cb)({type:d.Z})],f.prototype,"spatialReference",void 0),(0,i._)([(0,a.Cb)({type:String})],f.prototype,"title",void 0),(0,i._)([(0,a.Cb)({type:String,readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0),(0,i._)([(0,a.Cb)()],f.prototype,"url",void 0),(0,i._)([(0,a.Cb)({type:Boolean,nonNullable:!0})],f.prototype,"visible",void 0),f=(0,i._)([(0,n.j)("esri.layers.Layer")],f);const v=f},80192:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U});var i=r(56140),o=(r(95830),r(82550)),s=r(59472),a=r(36544),n=r(68055),l=r(79881),p=r(30590),d=r(87566),c=r(32656),u=r(10923),h=(r(57002),r(86035),r(39105)),m=r(58385),y=r(52937),g=r(12973),b=r(809),f=r(32797),v=r(60263),w=r(82677);const _=a.Z.getLogger("esri.portal.PortalItemResource");let O=class extends w.default{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e&&e.portalItem&&e.path?{...e,path:this.normalizePath(e.path,e.portalItem)}:e}set path(e){(0,s.pC)(e)&&(0,u.YP)(e)?_.error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return this.normalizePath(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(e="json",t){const r=this.url;if((0,s.Wi)(r))throw new c.Z("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal._request(r,{responseType:e,signal:(0,s.U2)(t,"signal")})}async update(e,t){return(await r.e(5510).then(r.bind(r,85510))).addOrUpdateResource(this,"update",e,t)}hasPath(){return(0,s.pC)(this.path)}normalizePath(e,t){return(0,s.Wi)(e)?e:(e=e.replace(/^\/+/,""),(0,s.pC)(t)&&(0,u.YP)(e)&&(e=(0,u.PF)(e,t.itemUrl)),e.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}};(0,i._)([(0,l.Cb)()],O.prototype,"portalItem",void 0),(0,i._)([(0,l.Cb)({type:String,value:null})],O.prototype,"path",null),(0,i._)([(0,v.p)("path")],O.prototype,"_castPath",null),(0,i._)([(0,l.Cb)({type:String,readOnly:!0,dependsOn:["portalItem","path"]})],O.prototype,"url",null),(0,i._)([(0,l.Cb)({type:String,readOnly:!0,dependsOn:["portalItem","path"]})],O.prototype,"itemRelativeUrl",null),O=(0,i._)([(0,d.j)("esri.portal.PortalItemResource")],O);const C=O;let x=class extends w.default{constructor(e){super(e),this.created=null,this.rating=null}};(0,i._)([(0,l.Cb)()],x.prototype,"created",void 0),(0,i._)([(0,l.Cb)()],x.prototype,"rating",void 0),x=(0,i._)([(0,d.j)("esri.portal.PortalRating")],x);const S=x;var k;let I=k=class extends((0,m.eC)(b.Z)){constructor(e){super(e),this.access=null,this.accessInformation=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}static from(e){return(0,n.TJ)(k,e)}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let r=e;return"Feature Service"===e||"Feature Collection"===e?r=t.indexOf("Table")>-1?"Table":t.indexOf("Route Layer")>-1?"Route Layer":t.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===e?r=t.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":t.indexOf("Tiled Imagery")>-1?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e&&this.portal&&this.portal.isPortal?r=t.indexOf("Web Tool")>-1?"Tool":"Geoprocessing Service":"Geocoding Service"===e?r="Locator":"Geoenrichment Service"===e?r="GeoEnrichment Service":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=-1===t.indexOf("Spatiotemporal")&&(t.indexOf("Hosted Service")>-1||t.indexOf("Tiled")>-1)&&-1===t.indexOf("Relational")?"Tile Layer":"Map Image Layer":e&&e.toLowerCase().indexOf("add in")>-1?r=e.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e&&(r="Tile Package (tpkx)"),r}readExtent(e){return e&&e.length?new y.Z(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type&&this.type.toLowerCase()||"",t=this.typeKeywords||[];let r,i=!1,o=!1,s=!1,a=!1,n=!1,l=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(i=t.indexOf("Hosted Service")>-1,"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(o=t.indexOf("Table")>-1,s=t.indexOf("Route Layer")>-1,a=t.indexOf("Markup")>-1,n=-1!==t.indexOf("Spatiotemporal"),l=-1!==t.indexOf("UtilityNetwork"),r=n&&o?"spatiotemporaltable":o?"table":s?"routelayer":a?"markup":n?"spatiotemporal":i?"featureshosted":l?"utilitynetwork":"features"):r="map service"===e||"wms"===e||"wmts"===e?i||t.indexOf("Tiled")>-1||"wmts"===e?"maptiles":"mapimages":"scene service"===e?t.indexOf("Line")>-1?"sceneweblayerline":t.indexOf("3DObject")>-1?"sceneweblayermultipatch":t.indexOf("Point")>-1?"sceneweblayerpoint":t.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":t.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":t.indexOf("Polygon")>-1?"sceneweblayerpolygon":t.indexOf("Building")>-1?"sceneweblayerbuilding":"sceneweblayer":"image service"===e?t.indexOf("Elevation 3D Layer")>-1?"elevationlayer":t.indexOf("Tiled Imagery")>-1?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"geoprocessing service"===e?t.indexOf("Web Tool")>-1&&this.portal&&this.portal.isPortal?"tool":"layers":"knowledge graph service"===e?"knowledgegraph":"layers"):r="web map"===e||"cityengine web scene"===e?"maps":"web scene"===e?t.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?"apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.indexOf("ArcGIS Pro")>-1||"explorer map"===e&&t.indexOf("Explorer Document")?"mapsgray":"service definition"===e||"csv"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"360 vr experience"===e||"netcdf"===e||"administrative report"===e?"datafiles":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?"appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?"addindesktop":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"form"===e||"document link"===e||"operations dashboard add in"===e||"rules package"===e||"image"===e||"workflow manager package"===e||"explorer map"===e&&t.indexOf("Explorer Mapping Application")>-1||t.indexOf("Document")>-1?"datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?"toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?"layersgray":"scene package"===e?"scenepackage":"mobile scene package"===e?"mobilescenepackage":"tile package"===e||"compact tile package"===e?"tilepackage":"task file"===e?"taskfile":"report template"===e?"report-template":"statistical data collection"===e?"statisticaldatacollection":"insights workbook"===e?"workbook":"insights model"===e?"insightsmodel":"insights page"===e?"insightspage":"insights theme"===e?"insightstheme":"hub initiative"===e?"hubinitiative":"hubpage"===e?"hubpage":"hub event"===e?"hubevent":"hub site application"===e?"hubsite":"relational database connection"===e?"relationaldatabaseconnection":"big data file share"===e?"datastorecollection":"image collection"===e?"imagecollection":"style"===e?"style":"desktop style"===e?"desktopstyle":"dashboard"===e?"dashboard":"raster function template"===e?"rasterprocessingtemplate":"vector tile package"===e?"vectortilepackage":"ortho mapping project"===e?"orthomappingproject":"ortho mapping template"===e?"orthomappingtemplate":"solution"===e?"solutions":"geopackage"===e?"geopackage":"deep learning package"===e?"deeplearningpackage":"real time analytic"===e?"realtimeanalytics":"big data analytic"===e?"bigdataanalytics":"feed"===e?"feed":"excalibur imagery project"===e?"excaliburimageryproject":"notebook"===e?"notebook":"storymap"===e?"storymap":"survey123 add in"===e?"survey123addin":"mission"===e?"mission":"mission report"===e?"missionreport":"quickcapture project"===e?"quickcaptureproject":"pro report"===e?"proreport":"urban model"===e?"urbanmodel":"web experience"===e?"experiencebuilder":"web experience template"===e?"webexperiencetemplate":"workflow"===e?"workflow":"insights script"===e?"insightsscript":"kernel gateway connection"===e?"kernelgatewayconnection":"hub initiative template"===e?"hubinitiativetemplate":"storymap theme"===e?"storymaptheme":"maps",r?(0,g.V)("esri/images/portal/"+r+"16.png"):null}get isLayer(){return["Map Service","Feature Service","Feature Collection","Scene Service","Image Service","Stream Service","Vector Tile Service","WMTS","WMS"].indexOf(this.type)>-1}get itemUrl(){const e=this.get("portal.restUrl");return e?e+"/content/items/"+this.id:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal._normalizeUrl(`${e}/info/${t}?f=json`):null}get userItemUrl(){const e=this.get("portal.restUrl");if(!e)return null;const t=this.owner||this.get("portal.user.username");return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){this.portal||(this.portal=f.Z.getDefault());const t=this.portal.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?this.portal._request(this.itemUrl,{signal:(0,s.pC)(e)?e.signal:null}):{})).then((e=>{this.sourceJSON=e,this.read(e)}));return this.addResolvingPromise(t),(0,h.resolve)(this)}addRating(e){const t={method:"post",query:{}};return e instanceof S&&(e=e.rating),isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal._request(this.itemUrl+"/addRating",t).then((()=>new S({rating:e,created:new Date})))}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:(0,o.d9)(this.applicationProxies),avgRating:this.avgRating,categories:(0,o.d9)(this.categories),created:(0,o.d9)(this.created),culture:this.culture,description:this.description,extent:(0,o.d9)(this.extent),groupCategories:(0,o.d9)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:(0,o.d9)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:(0,o.d9)(this.screenshots),size:this.size,snippet:this.snippet,tags:(0,o.d9)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,o.d9)(this.typeKeywords),url:this.url};return this.loaded&&(e.loadStatus="loaded"),new k({sourceJSON:this.sourceJSON}).set(e)}createPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}deleteRating(){return this.portal._request(this.itemUrl+"/deleteRating",{method:"post"}).then((()=>{}))}fetchData(e="json",t){return this.portal._request(this.itemUrl+"/data",{responseType:e,...t})}fetchRating(e){return this.portal._request(this.itemUrl+"/rating",e).then((e=>null!=e.rating?(e.created=new Date(e.created),new S(e)):null))}fetchRelatedItems(e,t){return this.portal._requestToTypedArray(this.itemUrl+"/relatedItems",{query:e,...t},k)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal._request(this.itemUrl,{cacheBust:!0}).then((e=>(this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e&&e.data,r={method:"post"};r.query=this.createPostQuery();for(const e in r.query)null===r.query[e]&&(r.query[e]="");return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal._request(`${this.userItemUrl}/update`,r).then((()=>this.reload()))})):(0,h.reject)(new c.Z("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}updateThumbnail(e){return this.id?this.load().then((()=>this.portal._signIn())).then((()=>{const t=e.thumbnail,r=e.filename,i={method:"post"};if("string"==typeof t)(0,u.HK)(t)?i.query={data:t}:i.query={url:(0,u.hF)(t)},(0,s.pC)(r)&&(i.query.filename=r);else{const e=new FormData;(0,s.pC)(r)?e.append("file",t,r):e.append("file",t),i.body=e}return this.portal._request(`${this.userItemUrl}/updateThumbnail`,i).then((()=>this.reload()))})):(0,h.reject)(new c.Z("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){return(await r.e(5510).then(r.bind(r,85510))).fetchResources(this,e,t)}async addResource(e,t,i){const o=await r.e(5510).then(r.bind(r,85510));return e.portalItem=this,o.addOrUpdateResource(e,"add",t,i)}async removeResource(e,t){const i=await r.e(5510).then(r.bind(r,85510));if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new c.Z("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return i.removeResource(this,e,t)}async removeAllResources(e){return(await r.e(5510).then(r.bind(r,85510))).removeAllResources(this,e)}resourceFromPath(e){return new C({portalItem:this,path:e})}toJSON(){const e=this.extent,t={created:this.created&&this.created.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,modified:this.modified&&this.modified.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,tags:this.tags,thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:this.typeKeywords,url:this.url};return(0,o.yd)(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new k({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};(0,i._)([(0,l.Cb)({type:["private","shared","org","public"]})],I.prototype,"access",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"accessInformation",void 0),(0,i._)([(0,l.Cb)({json:{read:{source:"appProxies"}}})],I.prototype,"applicationProxies",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"avgRating",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"categories",void 0),(0,i._)([(0,l.Cb)({type:Date})],I.prototype,"created",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"culture",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"description",void 0),(0,i._)([(0,l.Cb)({dependsOn:["type","typeKeywords"],readOnly:!0})],I.prototype,"displayName",null),(0,i._)([(0,l.Cb)({type:y.Z})],I.prototype,"extent",void 0),(0,i._)([(0,p.r)("extent")],I.prototype,"readExtent",null),(0,i._)([(0,l.Cb)()],I.prototype,"groupCategories",void 0),(0,i._)([(0,l.Cb)({dependsOn:["type","typeKeywords"],readOnly:!0})],I.prototype,"iconUrl",null),(0,i._)([(0,l.Cb)()],I.prototype,"id",void 0),(0,i._)([(0,l.Cb)({dependsOn:["type"],readOnly:!0})],I.prototype,"isLayer",null),(0,i._)([(0,l.Cb)()],I.prototype,"itemControl",void 0),(0,i._)([(0,l.Cb)({dependsOn:["portal.restUrl","id"],readOnly:!0})],I.prototype,"itemUrl",null),(0,i._)([(0,l.Cb)()],I.prototype,"licenseInfo",void 0),(0,i._)([(0,l.Cb)({type:Date})],I.prototype,"modified",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"name",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"numComments",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"numRatings",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"numViews",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"owner",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"ownerFolder",void 0),(0,i._)([(0,l.Cb)({type:f.Z})],I.prototype,"portal",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"screenshots",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"size",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"snippet",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"sourceJSON",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"tags",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"thumbnail",void 0),(0,i._)([(0,l.Cb)({dependsOn:["itemUrl","thumbnail","portal.credential.token"],readOnly:!0})],I.prototype,"thumbnailUrl",null),(0,i._)([(0,l.Cb)()],I.prototype,"title",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"type",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"typeKeywords",void 0),(0,i._)([(0,l.Cb)()],I.prototype,"url",void 0),(0,i._)([(0,l.Cb)({dependsOn:["portal.restUrl","portal.user.username","owner","ownerFolder","id"],readOnly:!0})],I.prototype,"userItemUrl",null),I=k=(0,i._)([(0,d.j)("esri.portal.PortalItem")],I);const U=I},43551:(e,t,r)=>{"use strict";r.d(t,{eZ:()=>c});var i=r(4665),o=(r(4529),r(67472)),s=(r(97948),r(99217)),a=r(20628),n=r(38173),l=(r(16839),r(75107),r(58484));const p=["oid","global-id"],d=["oid","global-id","guid"];function c({displayField:e,editFieldsInfo:t,fields:r,objectIdField:s,title:a},p){if(!r)return null;const d=b({editFieldsInfo:t,fields:r,objectIdField:s},p);if(!d.length)return null;const c=function(e){const t=(0,i.O5)(e),{titleBase:r}=e;return t?`${r}: {${t.trim()}}`:r}({titleBase:a,fields:r,displayField:e}),u=[new n.Z,new o.Z];return new l.default({title:c,content:u,fieldInfos:d})}const u=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],h=(e,{editFieldsInfo:t,objectIdField:r,visibleFieldNames:i})=>i?i.has(e.name):!(y(e.name,t)||r&&e.name===r||p.indexOf(e.type)>-1||u.some((t=>t.test(e.name))));function m(e,t){return"oid"===e.type?-1:"oid"===t.type?1:v(e)?-1:v(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function y(e,t){if(!e||!t)return!1;const{creationDateField:r,creatorField:i,editDateField:o,editorField:s}=t;return-1!==[r&&r.toLowerCase(),i&&i.toLowerCase(),o&&o.toLowerCase(),s&&s.toLowerCase()].indexOf(e.toLowerCase())}function g(e,t){return e.editable&&-1===d.indexOf(e.type)&&!y(e.name,t)}function b({editFieldsInfo:e,fields:t,objectIdField:r},i){return function(e,t){const r=e;return t&&(e=e.filter((e=>-1===t.indexOf(e.type)))),e===r&&(e=e.slice()),e.sort(m),e}(t,(null==i?void 0:i.ignoreFieldTypes)||w).map((t=>new a.Z({fieldName:t.name,isEditable:g(t,e),label:t.alias,format:f(t),visible:h(t,{editFieldsInfo:e,objectIdField:r,visibleFieldNames:null==i?void 0:i.visibleFieldNames})})))}function f(e){switch(e.type){case"small-integer":case"integer":case"single":return new s.Z({digitSeparator:!0,places:0});case"double":return new s.Z({digitSeparator:!0,places:2});case"date":return new s.Z({dateFormat:"long-month-day-year"});default:return null}}function v(e){return"name"===(e.name&&e.name.toLowerCase())||("name"===(e.alias&&e.alias.toLowerCase())||void 0)}const w=["geometry","blob","raster","guid","xml"]}}]);
//# sourceMappingURL=9263.js.map