(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[7440],{37440:(e,t,n)=>{"use strict";n.r(t),n.d(t,{destroyContext:()=>m,dracoDecompressPointCloudData:()=>b,filterObbsForModifications:()=>y,filterObbsForModificationsSync:()=>w,initialize:()=>L,interpretObbModificationResults:()=>g,process:()=>l,setLegacySchema:()=>h,setModifications:()=>d,setModificationsSync:()=>E,test:()=>_});var r=n(6962),o=n(59472),s=n(39105),i=n(12973);function f(e){return(0,i.V)(`esri/libs/i3s/${e}`)}let a,c,u;async function l(e){await L();const t=[e.geometryBuffer];return{result:p(e,t),transferList:t}}async function b(e){var t;await L();const n=[e.geometryBuffer],{geometryBuffer:o}=e,s=o.byteLength,i=u._malloc(s),f=new Uint8Array(u.HEAPU8.buffer,i,s);f.set(new Uint8Array(o));const a=u.dracoDecompressPointCloudData(i,f.byteLength);if(u._free(i),a.error.length>0)throw`i3s.wasm: ${a.error}`;const c=(null==(t=a.featureIds)?void 0:t.length)>0?(0,r.tP)(a.featureIds):null,l=(0,r.tP)(a.positions);return c&&n.push(c.buffer),n.push(l.buffer),{result:{positions:l,featureIds:c},transferList:n}}async function y(e){await L(),w(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function d(e){await L(),E(e)}async function h(e){await L(),u.setLegacySchema(e.context,e.jsonSchema)}function m(e){P(e)}function E(e){const t=e.modifications,n=u._malloc(8*t.length),r=new Float64Array(u.HEAPU8.buffer,n,t.length);for(let e=0;e<t.length;++e)r[e]=t[e];u.setModifications(e.context,n,t.length,e.isGeodetic),u._free(n)}function p(e,t){if(!u)return null;const{context:n,localOrigin:s,globalTrafo:i,mbs:f,obb:a,elevationOffset:c,geometryBuffer:l,geometryDescriptor:b,indexToVertexProjector:y,vertexToRenderProjector:d}=e,h=u._malloc(l.byteLength),m=u._malloc(33*Float64Array.BYTES_PER_ELEMENT),E=new Uint8Array(u.HEAPU8.buffer,h,l.byteLength);E.set(new Uint8Array(l));const p=new Float64Array(u.HEAPU8.buffer,m,33);A(p,s);let g=p.byteOffset+3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g);A(w,i),g+=16*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),A(w,f),g+=4*p.BYTES_PER_ELEMENT,(0,o.pC)(a)&&(w=new Float64Array(p.buffer,g),A(w,a.center),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),A(w,a.halfSize),g+=3*p.BYTES_PER_ELEMENT,w=new Float64Array(p.buffer,g),A(w,a.quaternion));const P=b,L={isDraco:!1,isLegacy:!1,color:e.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:e.needNormals&&e.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:e.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:e.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:P.featureIndex},_=u.process(n,!!e.obb,h,E.byteLength,P,L,m,c,y,d,e.normalReferenceFrame);if(u._free(m),u._free(h),_.error.length>0)throw`i3s.wasm: ${_.error}`;if(_.discarded)return null;const T=_.componentOffsets.length>0?(0,r.tP)(_.componentOffsets):null,I=_.featureIds.length>0?(0,r.tP)(_.featureIds):null,F=(0,r.tP)(_.interleavedVertedData).buffer,M=1===_.indicesType?(0,r.tP)(new Uint16Array(_.indices.buffer,_.indices.byteOffset,_.indices.byteLength/2)):(0,r.tP)(new Uint32Array(_.indices.buffer,_.indices.byteOffset,_.indices.byteLength/4)),B=(0,r.tP)(_.positions),O=1===_.positionIndicesType?(0,r.tP)(new Uint16Array(_.positionIndices.buffer,_.positionIndices.byteOffset,_.positionIndices.byteLength/2)):(0,r.tP)(new Uint32Array(_.positionIndices.buffer,_.positionIndices.byteOffset,_.positionIndices.byteLength/4)),U={layout:e.layouts[0],interleavedVertexData:F,indices:M,hasColors:_.hasColors,hasModifications:_.hasModifications,positionData:{data:B,indices:O}};return I&&t.push(I.buffer),T&&t.push(T.buffer),t.push(F),t.push(M.buffer),t.push(B.buffer),t.push(O.buffer),{componentOffsets:T,featureIds:I,transformedGeometry:U,obb:_.obb}}function g(e){return 0===e?0:1===e?1:2===e?2:3}function w(e){const{context:t,buffer:n}=e,r=u._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(u.HEAPU8.buffer,r,o),i=new Float64Array(n);s.set(i),u.filterOBBs(t,r,o),i.set(s),u._free(r)}function P(e){u&&u.destroy(e)}function A(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function L(){return u?(0,s.DB)():(c||(c=(a||(a=(0,s.Ue)((e=>n.e(3155).then(n.bind(n,23155)).then((function(e){return e.i})).then((({default:t})=>{const n=t({locateFile:f,onRuntimeInitialized:()=>e(n)});delete n.then})))).catch((e=>(0,s.d1)(e)))),a).then((e=>{u=e,c=null}))),c)}const _={transform:p,destroy:P}}}]);
//# sourceMappingURL=7440.js.map