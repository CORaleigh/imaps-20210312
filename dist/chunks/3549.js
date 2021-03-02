(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[3549,5836],{50897:(e,t,i)=>{"use strict";i.d(t,{Gv:()=>w,SO:()=>p,d9:()=>o,r3:()=>v,BD:()=>m,Qn:()=>f,Zm:()=>y,jE:()=>d,Ue:()=>s,cS:()=>T,Ho:()=>c,oJ:()=>a,al:()=>l,Cb:()=>h,kK:()=>x,HH:()=>r,bf:()=>u});i(95830);var n=i(52937);function s(e=g){return[e[0],e[1],e[2],e[3]]}function o(e){return[e[0],e[1],e[2],e[3]]}function l(e,t,i,n,o=s()){return o[0]=e,o[1]=t,o[2]=i,o[3]=n,o}function a(e,t=s()){return t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax,t}function r(e,t){return new n.Z({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:t})}function c(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[2]&&(e[2]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[3]&&(e[3]=t[1])}function u(e){return e[0]>=e[2]?0:e[2]-e[0]}function h(e){return e[1]>=e[3]?0:e[3]-e[1]}function p(e){return u(e)*h(e)}function m(e,t){return d(e,t[0],t[1])}function f(e,t){return d(e,t.x,t.y)}function d(e,t,i){return t>=e[0]&&i>=e[1]&&t<=e[2]&&i<=e[3]}function y(e,t,i){return t[0]>=e[0]-i&&t[1]>=e[1]-i&&t[0]<=e[2]+i&&t[1]<=e[3]+i}function x(e,t){return Math.max(t[0],e[0])<=Math.min(t[2],e[2])&&Math.max(t[1],e[1])<=Math.min(t[3],e[3])}function v(e,t){return t[0]>=e[0]&&t[2]<=e[2]&&t[1]>=e[1]&&t[3]<=e[3]}function T(e){return e?function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}(e,w):s(w)}const w=[1/0,1/0,-1/0,-1/0],g=[0,0,0,0]},93549:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ElevationQuery:()=>q,GeometryDescriptor:()=>I,default:()=>F,getFinestLodIndex:()=>Z});var n=i(59472),s=i(32656),o=i(39105),l=i(61106),a=i(3470),r=i(93833),c=i(59351),u=i(93533),h=i(50897),p=i(17333),m=(i(95830),i(36544)),f=i(41241),d=i(47005);i(36348);const y=m.Z.getLogger("esri.layers.support.ElevationSampler");class x{queryElevation(e){return function(e,t){const i=w(e,t.spatialReference);if(!i)return null;switch(e.type){case"point":!function(e,t,i){e.z=(0,n.Pt)(i.elevationAt(t),0)}(e,i,t);break;case"polyline":!function(e,t,i){g.spatialReference=t.spatialReference;const s=e.hasM&&!e.hasZ;for(let o=0;o<e.paths.length;o++){const l=e.paths[o],a=t.paths[o];for(let e=0;e<l.length;e++){const t=l[e],o=a[e];g.x=o[0],g.y=o[1],s&&(t[3]=t[2]),t[2]=(0,n.Pt)(i.elevationAt(g),0)}}e.hasZ=!0}(e,i,t);break;case"multipoint":!function(e,t,i){g.spatialReference=t.spatialReference;const s=e.hasM&&!e.hasZ;for(let o=0;o<e.points.length;o++){const l=e.points[o],a=t.points[o];g.x=a[0],g.y=a[1],s&&(l[3]=l[2]),l[2]=(0,n.Pt)(i.elevationAt(g),0)}e.hasZ=!0}(e,i,t)}return e}(e.clone(),this)}on(){return R}projectIfRequired(e,t){return w(e,t)}}class v extends x{constructor(e,t,i){super(),this.tile=e,this.noDataValue=i,this.extent=(0,h.HH)(e.tile.extent,t.spatialReference);const n=(0,u.c9)(t.spatialReference),s=t.lodAt(e.tile.level).resolution*n;this.demResolution={min:s,max:s}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return(0,d.aV)(this.extent,t)}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;if(!this.contains(e)){const t=this.extent,i=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;y.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${i})`)}return this.tile.sample(t.x,t.y)}}class T extends x{constructor(e,t,i){let n;super(),"number"==typeof t?(this.noDataValue=t,n=null):(n=t,this.noDataValue=i),this.samplers=n?e.map((e=>new v(e,n,this.noDataValue))):e;const s=this.samplers[0];if(s){this.extent=s.extent.clone();const{min:e,max:t}=s.demResolution;this.demResolution={min:e,max:t};for(let e=1;e<this.samplers.length;e++){const t=this.samplers[e];this.extent.union(t.extent),this.demResolution.min=Math.min(this.demResolution.min,t.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,t.demResolution.max)}}else this.extent=(0,h.HH)((0,h.Ue)(),n.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const e of this.samplers)if(e.contains(t))return e.elevationAt(t);return y.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),null}}function w(e,t){const i=e.spatialReference;return i.equals(t)?e:(0,f.Q8)(i,t)?(0,f.iV)(e,t):(y.error(`Cannot project geometry spatial reference (wkid:${i.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),null)}const g=new l.Z,R={remove(){}};class _{constructor(e,t){if(this.tile=e,!t)return void(this.samplerData=null);const i=this.tile.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}sample(e,t){if(this.samplerData)return E(this.samplerData,e,t)}}function E(e,t,i){const{safeWidth:n,width:s,pixelData:o,noDataValue:l}=e,a=A(e.dy*(e.y1-i),0,n),r=A(e.dx*(t-e.x0),0,n),c=Math.floor(a),u=Math.floor(r),h=c*s+u,p=h+s,m=o[h],f=o[p],d=o[h+1],y=o[p+1];if(m!==l&&f!==l&&d!==l&&y!==l){const e=r-u,t=m+(d-m)*e;return t+(f+(y-f)*e-t)*(a-c)}}function A(e,t,i){return e<t?t:e>i?i:e}class q{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const n=I.fromGeometry(t);let o=!1;i&&i.returnSampleInfo||(o=!0);const l={...b,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],n,l),r=await this._queryAllContinue(e,a,l);return r.geometry=r.geometry.export(),o&&delete r.sampleInfo,r}async query(e,t,i){if(!e)throw new s.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof I)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new s.Z("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const n={...b,...i},o=new C(e,t.spatialReference,n),l=n.signal;return await e.load({signal:l}),await this._createGeometryDescriptor(o,t,l),await this._selectTiles(o,l),await this._populateElevationTiles(o,l),this._sampleGeometryWithElevation(o),this._createQueryResult(o,l)}async createSampler(e,t,i){if(!e)throw new s.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s.Z("elevation-query:invalid-extent","Invalid or undefined extent");const n={...b,...i};return this._createSampler(e,t,n)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s.Z("elevation-query:invalid-extent","Invalid or undefined extent");const n={...b,...i,returnSampleInfo:!0},o=await this._createSampler(e[e.length-1],t,n);return this._createSamplerAllContinue(e,t,o,n)}async _createSampler(e,t,i,n){const s=i.signal;await e.load({signal:s});const o=t.spatialReference,l=e.tileInfo.spatialReference;o.equals(l)||(await(0,p.iQ)([{source:o,dest:l}],{signal:s}),t=(0,p.iV)(t,l));const a=new M(e,t,i,n);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new T(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,n){if(e.pop(),!e.length)return i;const s=i.samplers.map((e=>(0,h.oJ)(e.extent))),o=await this._createSampler(e[e.length-1],t,n,s);if(0===o.samplers.length)return i;const l=i.samplers.concat(o.samplers),a=new T(l,n.noDataValue);return this._createSamplerAllContinue(e,t,a,n)}async _queryAllContinue(e,t,i){const n=e.pop(),s=t.geometry.coordinates,o=[],l=[];for(let i=0;i<s.length;i++){const a=t.sampleInfo[i];a.demResolution>=0?a.source||(a.source=n):e.length&&(o.push(s[i]),l.push(i))}if(!e.length||0===o.length)return t;const a=t.geometry.clone(o),r=await this.query(e[e.length-1],a,i);return l.forEach(((e,i)=>{s[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}async _createGeometryDescriptor(e,t,i){let n;const o=e.layer.tileInfo.spatialReference;if(t instanceof I?n=await t.project(o,i):(await(0,p.iQ)([{source:t.spatialReference,dest:o}],{signal:i}),n=(0,p.iV)(t,o)),!n)throw new s.Z("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${o.wkid}'`);e.geometry=I.fromGeometry(n)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new s.Z("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){const t=new _(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const n=e.x,s=e.y;(n<i.xmin||n>i.xmax||s<i.ymin||s>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/(0,u.c9)(e.spatialReference);let n=e.lods[0],s=0;for(let t=1;t<e.lods.length;t++){const o=e.lods[t];Math.abs(o.resolution-i)<Math.abs(n.resolution-i)&&(n=o,s=t)}return s}async _selectTilesFinestContiguous(e,t){const i=Z(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const l=n.tilemapCache,a=e.getTilesToFetch();try{if(l)await(0,o.whenOrAbort)(Promise.all(a.map((e=>l.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new s.Z("elevation-query:has-unavailable-tiles")}catch(n){(0,o.throwIfAbortError)(n),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),s={},l=e.options.cache,a=e.options.noDataValue,r=i.map((async i=>{const o=`${e.layer.uid}:${i.id}:${a}`,r=(0,n.pC)(l)?l.get(o):null,c=(0,n.pC)(r)?r:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:a,signal:t});(0,n.pC)(l)&&l.put(o,c),s[i.id]=new _(i,c)}));await(0,o.whenOrAbort)((0,o.eachAlways)(r),t),e.populateElevationTiles(s)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const n=e.getTilesToFetch(),s={},l=n.map((async e=>{const n={id:null,level:0,row:0,col:0,extent:(0,h.Ue)()},l=await(0,c.q6)(i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:t}));!1===l.ok?(0,o.throwIfAbortError)(l.error):s[e.id]=n}));await(0,o.whenOrAbort)(Promise.all(l),t),e.remapTiles(s)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const n={},s=e=>{e.id in n?n[e.id]++:(n[e.id]=1,i++)},o=e=>{const t=n[e.id];1===t?(delete n[e.id],i--):n[e.id]=t-1};e.forEachTileToFetch(s,o);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch((n=>{i<=e.options.maximumAutoTileRequests||(o(n),t.upsampleTile(n)&&(l=!0),s(n))}),o),l););}_selectTilesAutoFinest(e){const t=Z(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?n=!0:t()})),n&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);void 0!==e?n=e:t.elevationTile=null}t.z=n}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=(0,u.c9)(t.spatialReference);return e.geometry.coordinates.map((n=>{let s=-1;return n.elevationTile&&n.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(n.elevationTile.tile.level).resolution*i),{demResolution:s}}))}}class I{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new I;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await(0,p.iQ)([{source:this.spatialReference,dest:e}],{signal:t});const i=new a.Z({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),n=(0,p.iV)(i,e);if(!n)return null;const s=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),s=n.points[t];return i.x=s[0],i.y=s[1],i})),o=this.clone(s);return o.spatialReference=e,o}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new I;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof I)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const n=e.clone(t);return n.spatialReference=i,n};else switch(e.type){case"point":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?[{x:i.x,y:i.y,z:i.z,m:i.m}]:n?[{x:i.x,y:i.y,z:i.z}]:s?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new l.Z(t[0].x,t[0].y,t[0].z,t[0].m,i):new l.Z(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):n?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):s?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new a.Z({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new a.Z(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,n=[],s=[],{hasZ:o,hasM:l}=e;let a=0;for(const e of i.paths)if(s.push([a,a+e.length]),a+=e.length,o&&l)for(const t of e)n.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(o)for(const t of e)n.push({x:t[0],y:t[1],z:t[2]});else if(l)for(const t of e)n.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)n.push({x:t[0],y:t[1]});t.coordinates=n,t._exporter=(t,i)=>{const n=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),o=s.map((e=>n.slice(e[0],e[1])));return new r.Z({paths:o,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class D{constructor(e,t){this.layer=e,this.options=t}}class C extends D{constructor(e,t,i){super(e,i),this.type="geometry",this.outSpatialReference=t}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const n=i.tile;i.elevationTile||!i.tile||e[n.id]||(e[n.id]=n,t.push(n))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))}}class M extends D{constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=n}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;for(let n=t.lods.length-1;n>=0;n--){const s=t.lods[n],o=s.resolution*t.size[0],l=s.resolution*t.size[1];if(Math.ceil(i.width/o)*Math.ceil(i.height/l)<=e)return n}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,(()=>n=!0)),n?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},n=[];for(const s of e)i[s.id]?t&&t(s):(i[s.id]=s,n.push(s));const s=n.sort(((e,t)=>e.level-t.level));return s.filter(((e,i)=>{for(let n=0;n<i;n++)if((0,h.r3)(s[n].extent,e.extent))return t&&t(e),!1;return!0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.layer.tileInfo,i=t.lods[e],n=this.extent,s=t.tileAt(i.level,n.xmin,n.ymin),o=i.resolution*t.size[0],l=i.resolution*t.size[1],a=Math.ceil((n.xmax-s.extent[0])/o),r=Math.ceil((n.ymax-s.extent[1])/l);for(let e=0;e<r;e++)for(let i=0;i<a;i++){const n={id:null,level:s.level,row:s.row-e,col:s.col+i};t.updateTileInfo(n),this._tileIsMasked(n)||this.candidateTiles.push(n)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>(0,h.r3)(t,e.extent)))}}function Z(e,t){let i=e.lods.length-1;if(t>0){const n=e.lods.findIndex((e=>e.resolution<t));0===n?i=0:n>0&&(i=n-1)}return i}const b={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0},F=q}}]);
//# sourceMappingURL=3549.js.map