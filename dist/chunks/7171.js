(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[7171],{11426:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(19546),a=i(90169),o=i(36889),n=i(71108);const s=class{dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,i){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[i,r,a]=o.fN.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t);return{size:[r,a],image:new Uint32Array(i.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){const[t,i,r]=o.fN.rasterizeSimpleLine(e.style,e.cap);return{size:[i,r],image:new Uint32Array(t.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let r,s,l;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(r=o.B$.fromSimpleMarker(e),l=(0,n.Fp)(r)):"CIMHatchFill"===e.type?(r=o.B$.fromCIMHatchFill(e),s=new a.Z(r.frame.xmin,-r.frame.ymax,r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin)):e.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type?(r=o.B$.fromCIMInsidePolygon(e),s=new a.Z(r.frame.xmin,-r.frame.ymax,r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin)):(r=e,l=(0,n.Fp)(r)),l&&!i){const[e,t,i]=(0,n.RL)(l);return e?{size:[t,i],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[c,f,m,h,u]=o.B$.rasterize(this._rasterizationCanvas,r,s,!i);return c?{size:[f,m],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:h,anchorY:u}:null}rasterizeImageResource(e,t,i,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const o=this._rasterizationCanvas.getContext("2d");i instanceof ImageData?o.putImageData(i,0,0):(i.setAttribute("width",`${e}px`),i.setAttribute("height",`${t}px`),o.drawImage(i,0,0,e,t));const n=o.getImageData(0,0,e,t),s=new Uint8Array(n.data);if(a)for(const e of a)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[t,i,r,a]=e.oldColor,[o,n,l,c]=e.newColor;if(t===o&&i===n&&r===l&&a===c)continue;for(let e=0;e<s.length;e+=4)t===s[e]&&i===s[e+1]&&r===s[e+2]&&a===s[e+3]&&(s[e]=o,s[e+1]=n,s[e+2]=l,s[e+3]=c)}let l;for(let e=0;e<s.length;e+=4)l=s[e+3]/255,s[e]=s[e]*l,s[e+1]=s[e+1]*l,s[e+2]=s[e+2]*l;let c=s,f=e,m=t;const h=512;if(f>=h||m>=h){const i=f/m;i>1?(f=h,m=Math.round(h/i)):(m=h,f=Math.round(h*i)),c=new Uint8Array(4*f*m);const a=new Uint8ClampedArray(c.buffer);(0,r.TT)(s,e,t,a,f,m,!1)}return{size:[e,t],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},71108:(e,t,i)=>{"use strict";i.d(t,{RL:()=>f,bk:()=>l,Fp:()=>n,UV:()=>c});var r=i(56885),a=i(90169),o=i(69688);function n(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":{const t=e.symbolLayers;return t&&1===t.length?n(t[0]):null}case"CIMVectorMarker":{const t=e.markerGraphics;if(!t||1!==t.length)return null;const i=t[0];if(!i)return null;const r=i.geometry;if(!r)return null;const a=i.symbol;return!a||"CIMPolygonSymbol"!==a.type&&"CIMLineSymbol"!==a.type?null:{geom:r,asFill:"CIMPolygonSymbol"===a.type}}case"sdf":return{geom:e.geom,asFill:e.asFill}}return null}function s(e){let t=1/0,i=-1/0,r=1/0,a=-1/0;for(const o of e)for(const e of o)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<r&&(r=e[1]),e[1]>a&&(a=e[1]);return[t,r,i,a]}function l(e){return e?e.rings?s(e.rings):e.paths?s(e.paths):(0,r.YX)(e)?[e.xmin,e.ymin,e.xmax,e.ymax]:null:null}function c(e,t,i,r,a){const[o,n,s,l]=e;if(s<o||l<n)return[0,0,0];const c=s-o,f=l-n,m=Math.floor(31.5),h=(128-2*(m+1))/Math.max(c,f),u=Math.round(c*h)+2*m,y=Math.round(f*h)+2*m;let g=1;t&&(g=y/h/(t.ymax-t.ymin));let d=0,p=0;if(r)if(a){if(t&&i&&t.ymax-t.ymin>0){const e=(t.xmax-t.xmin)/(t.ymax-t.ymin);d=r.x/(i*e),p=r.y/i}}else d=r.x,p=r.y;return d=.5*(t.xmax+t.xmin)+d*(t.xmax-t.xmin),p=.5*(t.ymax+t.ymin)+p*(t.ymax-t.ymin),d-=o,p-=n,d*=h,p*=h,d+=m,p+=m,[g,d/u-.5,-(p/y-.5)]}function f(e){const t=(i=e.geom)?i.rings?i.rings:i.paths?i.paths:void 0!==i.xmin&&void 0!==i.ymin&&void 0!==i.xmax&&void 0!==i.ymax?[[[i.xmin,i.ymin],[i.xmin,i.ymax],[i.xmax,i.ymax],[i.xmax,i.ymin],[i.xmin,i.ymin]]]:null:null;var i;const r=function(e){let t=1/0,i=-1/0,r=1/0,o=-1/0;for(const a of e)for(const e of a)e[0]<t&&(t=e[0]),e[0]>i&&(i=e[0]),e[1]<r&&(r=e[1]),e[1]>o&&(o=e[1]);return new a.Z(t,r,i-t,o-r)}(t),o=Math.floor(31.5),n=(128-2*(o+1))/Math.max(r.width,r.height),s=Math.round(r.width*n)+2*o,l=Math.round(r.height*n)+2*o,c=[];for(const i of t)if(i&&i.length>1){const t=[];for(const e of i){let[i,a]=e;i-=r.x,a-=r.y,i*=n,a*=n,i+=o-.5,a+=o-.5,t.push([i,a])}if(e.asFill){const e=t.length-1;t[0][0]===t[e][0]&&t[0][1]===t[e][1]||t.push(t[0])}c.push(t)}const f=function(e,t,i,r){const a=t*i,o=new Array(a),n=r*r+1;for(let e=0;e<a;++e)o[e]=n;for(const a of e){const e=a.length;for(let n=1;n<e;++n){const e=a[n-1],s=a[n];let l,c,f,m;e[0]<s[0]?(l=e[0],c=s[0]):(l=s[0],c=e[0]),e[1]<s[1]?(f=e[1],m=s[1]):(f=s[1],m=e[1]);let h=Math.floor(l)-r,u=Math.floor(c)+r,y=Math.floor(f)-r,g=Math.floor(m)+r;h<0&&(h=0),u>t&&(u=t),y<0&&(y=0),g>i&&(g=i);const d=s[0]-e[0],p=s[1]-e[1],S=d*d+p*p;for(let r=h;r<u;r++)for(let a=y;a<g;a++){let n,l,c=(r-e[0])*d+(a-e[1])*p;c<0?(n=e[0],l=e[1]):c>S?(n=s[0],l=s[1]):(c/=S,n=e[0]+c*d,l=e[1]+c*p);const f=(r-n)*(r-n)+(a-l)*(a-l),m=(i-a-1)*t+r;f<o[m]&&(o[m]=f)}}}for(let e=0;e<a;++e)o[e]=Math.sqrt(o[e]);return o}(c,s,l,o);return e.asFill&&function(e,t,i,r,a){for(const o of e){const e=o.length;for(let n=1;n<e;++n){const e=o[n-1],s=o[n];let l,c,f,m;e[0]<s[0]?(l=e[0],c=s[0]):(l=s[0],c=e[0]),e[1]<s[1]?(f=e[1],m=s[1]):(f=s[1],m=e[1]);let h=Math.floor(l),u=Math.floor(c)+1,y=Math.floor(f),g=Math.floor(m)+1;h<r&&(h=r),u>t-r&&(u=t-r),y<r&&(y=r),g>i-r&&(g=i-r);for(let o=y;o<g;++o){if(e[1]>o==s[1]>o)continue;const n=(i-o-1)*t;for(let t=h;t<u;++t)t<(s[0]-e[0])*(o-e[1])/(s[1]-e[1])+e[0]&&(a[n+t]=-a[n+t]);for(let e=r;e<h;++e)a[n+e]=-a[n+e]}}}}(c,s,l,o,f),[m(f,o),s,l]}function m(e,t){const i=2*t,r=e.length,a=new Uint8Array(4*r);for(let t=0;t<r;++t){const r=.5-e[t]/i;(0,o.I)(r,a,4*t)}return a}},93318:(e,t,i)=>{"use strict";i.d(t,{S:()=>Y,c:()=>v});var r=i(88263),a=i(36544),o=i(39105),n=i(30927),s=i(78745),l=i(96071),c=i(19546),f=i(49723),m=i(36889),h=i(71108);const u=a.Z.getLogger("esri.symbols.cim.cimAnalyzer");function y(e){switch(e){case"Butt":return 0;case"Square":return 2;case"Round":default:return 1}}function g(e){switch(e){case"Bevel":return 0;case"Miter":return 2;case"Round":default:return 1}}function d(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function p(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function S(e,t,i,r){let a;e[t]?a=e[t]:(a={},e[t]=a),a[i]=r}function C(e){const t=e.markerPlacement;return t&&t.angleToLine?1:0}async function v(e,t,i,r){const a=i||[];if(!e)return a;let s,l;const c={};if("CIMSymbolReference"!==e.type)return u.error("Expect cim type to be 'CIMSymbolReference'"),a;if(s=e.symbol,l=e.primitiveOverrides,l){const e=[];for(const i of l){const r=i.valueExpressionInfo;if(r&&t){const a=r.expression,o=(0,n.Yi)(a,t.spatialReference,t.fields).then((e=>{e&&S(c,i.primitiveName,i.propertyName,e)}));e.push(o)}else null!=i.value&&S(c,i.primitiveName,i.propertyName,i.value)}await(0,o.$6)(e)}switch(s.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":!function(e,t,i,r,a,o){if(!e)return;const n=e.symbolLayers;if(!n)return;let s;const l=m.B$.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(s=1);let c=n.length;for(;c--;){const f=n[c];if(!f||!1===f.enable)continue;const h=[];switch(m.E0.findApplicableOverrides(f,t,h),f.type){case"CIMSolidFill":x(f,i,h,r,a);break;case"CIMPictureFill":M(f,i,h,r,a);break;case"CIMHatchFill":b(f,i,h,r,a);break;case"CIMGradientFill":P(f,i,h,r,a);break;case"CIMSolidStroke":k(f,i,h,r,a,"CIMPolygonSymbol"===e.type,l);break;case"CIMPictureStroke":w(f,i,h,r,a,"CIMPolygonSymbol"===e.type,l);break;case"CIMGradientStroke":z(f,i,h,r,a,"CIMPolygonSymbol"===e.type,l);break;case"CIMCharacterMarker":if(I(f,i,h,r,a))break;break;case"CIMPictureMarker":if(I(f,i,h,r,a))break;"CIMLineSymbol"===e.type&&(s=C(f)),N(f,i,h,r,a,s,l);break;case"CIMVectorMarker":if(I(f,i,h,r,a))break;"CIMLineSymbol"===e.type&&(s=C(f)),O(f,i,h,r,a,s,l,o);break;default:u.error("Cannot analyze CIM layer",f.type)}}}(s,l,c,t,a,r)}return a}function x(e,t,i,a,o){const n=e.primitiveName,s=(0,c.NO)(e.color),l=(0,r.hP)(JSON.stringify(e)).toString();o.push({type:"fill",templateHash:l,materialHash:0===i.length?l:()=>l,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:H(n,t,"Color",a,s,X),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:e.effects})}function M(e,t,i,a,o){const n=e.primitiveName,s=e.tintColor?(0,c.NO)(e.tintColor):{r:255,g:255,b:255,a:1},l=(0,r.hP)(JSON.stringify(e)).toString(),f=(0,r.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();o.push({type:"fill",templateHash:l,materialHash:0===i.length?f:()=>f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:H(n,t,"TintColor",a,s,X),height:H(n,t,"Height",a,e.height),scaleX:H(n,t,"ScaleX",a,e.scaleX),angle:H(n,t,"Rotation",a,e.rotation),offsetX:H(n,t,"OffsetX",a,e.offsetX),offsetY:H(n,t,"OffsetY",a,e.offsetY)})}function b(e,t,i,a,o){const n=["Rotation","OffsetX","OffsetY"],s=i.filter((t=>t.primitiveName!==e.primitiveName&&-1===n.indexOf(t.propertyName))),l=e.primitiveName,c=(0,r.hP)(JSON.stringify(e)).toString(),f=(0,r.hP)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();o.push({type:"fill",templateHash:c,materialHash:0===i.length?f:A(f,t,s,a),cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:H(l,t,"Separation",a,e.separation),scaleX:1,angle:H(l,t,"Rotation",a,e.rotation),offsetX:H(l,t,"OffsetX",a,e.offsetX),offsetY:H(l,t,"OffsetY",a,e.offsetY)})}function P(e,t,i,a,o){const n=(0,r.hP)(JSON.stringify(e)).toString();o.push({type:"fill",templateHash:n,materialHash:0===i.length?n:A(n,t,i,a),cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function k(e,t,i,a,o,n,s){const l=(0,r.hP)(JSON.stringify(e)).toString(),f=e.primitiveName,m=(0,c.NO)(e.color),h=void 0!==e.width?e.width:4,u=y(e.capStyle),d=g(e.joinStyle),p=e.miterLimit;o.push({type:"line",templateHash:l,materialHash:0===i.length?l:()=>l,cim:e,materialOverrides:null,isOutline:n,colorLocked:e.colorLocked,effects:e.effects,color:H(f,t,"Color",a,m,X),width:H(f,t,"Width",a,h),cap:H(f,t,"CapStyle",a,u),join:H(f,t,"JoinStyle",a,d),miterLimit:H(f,t,"MiterLimit",a,p),referenceWidth:s,zOrder:_(e.name),isDashed:!1})}function w(e,t,i,a,o,n,s){const l=(0,r.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=(0,c.NO)(e.tintColor),h=void 0!==e.width?e.width:4,u=y(e.capStyle),d=g(e.joinStyle),p=e.miterLimit,S=(0,r.hP)(JSON.stringify(e)).toString();o.push({type:"line",templateHash:S,materialHash:0===i.length?l:()=>l,cim:e,materialOverrides:null,isOutline:n,colorLocked:e.colorLocked,effects:e.effects,color:H(f,t,"TintColor",a,m,X),width:H(f,t,"Width",a,h),cap:H(f,t,"CapStyle",a,u),join:H(f,t,"JoinStyle",a,d),miterLimit:H(f,t,"MiterLimit",a,p),referenceWidth:s,zOrder:_(e.name),isDashed:!1})}function z(e,t,i,a,o,n,s){const l=e.primitiveName,c=void 0!==e.width?e.width:4,f=y(e.capStyle),m=g(e.joinStyle),h=e.miterLimit,u=(0,r.hP)(JSON.stringify(e)).toString();o.push({type:"line",templateHash:u,materialHash:0===i.length?u:A(u,t,i,a),cim:e,materialOverrides:null,isOutline:n,colorLocked:e.colorLocked,effects:e.effects,color:{r:128,g:128,b:128,a:1},width:H(l,t,"Width",a,c),cap:H(l,t,"CapStyle",a,f),join:H(l,t,"JoinStyle",a,m),miterLimit:H(l,t,"MiterLimit",a,h),referenceWidth:s,zOrder:_(e.name),isDashed:!1})}function I(e,t,i,a,o){const n=e.markerPlacement;if(!n||"CIMMarkerPlacementInsidePolygon"!==n.type)return!1;const s=n,l=["Rotation","OffsetX","OffsetY"],c=i.filter((t=>t.primitiveName!==e.primitiveName&&-1===l.indexOf(t.propertyName))),f=(0,r.hP)(JSON.stringify(e)).toString();return o.push({type:"fill",templateHash:f,materialHash:0===i.length?f:A(f,t,c,a),cim:e,materialOverrides:c,colorLocked:e.colorLocked,effects:e.effects,color:{r:255,g:255,b:255,a:1},height:H(s.primitiveName,t,"StepY",a,s.stepY),scaleX:1,angle:H(s.primitiveName,t,"GridAngle",a,s.gridAngle),offsetX:H(s.primitiveName,t,"OffsetX",a,s.offsetX),offsetY:H(s.primitiveName,t,"OffsetY",a,s.offsetY)}),!0}function N(e,t,i,a,o,n,s){const l=e.primitiveName,f=e.size,m=e.scaleX,h=e.rotation,u=e.offsetX,y=e.offsetY,g=(0,c.NO)(e.tintColor),d=(0,r.hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();let p=!1,S="";for(const e of i)e.primitiveName===l&&(void 0!==e.value?S+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(p=!0));o.push({type:"marker",templateHash:(0,r.hP)(JSON.stringify(e)+S).toString(),materialHash:p?()=>d:d,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:!1,alignment:n,size:H(l,t,"Size",a,f),scaleX:H(l,t,"ScaleX",a,m),rotation:H(l,t,"Rotation",a,h),offsetX:H(l,t,"OffsetX",a,u),offsetY:H(l,t,"OffsetY",a,y),color:H(l,t,"TintColor",a,g,X),anchorPoint:e.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:s,sizeRatio:1,markerPlacement:e.markerPlacement})}function O(e,t,i,r,a,o,n,s){const l=e.markerGraphics;if(!l)return;let c=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(c=t.ymax-t.ymin)}for(const f of l)if(f){const l=f.symbol;if(!l)continue;switch(l.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":F(e,f,i,t,r,a,o,n,c,s);break;case"CIMTextSymbol":L(e,f,t,i,r,a,o,n,c)}}}function L(e,t,i,a,o,n,s,l,f){m.E0.findApplicableOverrides(t,a,[]);const h=t.geometry;if(!("x"in h)||!("y"in h))return;const u=t.symbol,y=(g=u).underline?"underline":g.strikethrough?"line-through":"none";var g;const S=function(e){let t="normal",i="normal";if(e){const r=e.toLowerCase();-1!==r.indexOf("italic")?t="italic":-1!==r.indexOf("oblique")&&(t="oblique"),-1!==r.indexOf("bold")?i="bold":-1!==r.indexOf("light")&&(i="lighter")}return{style:t,weight:i}}(u.fontStyleName);u.font={family:u.fontFamilyName,decoration:y,...S};const C=e.frame,v=h.x-.5*(C.xmin+C.xmax),x=h.y-.5*(C.ymin+C.ymax),M=e.size/f,b=e.primitiveName,P=(u.height||0)*M,k=u.angle||0,w=((u.offsetX||0)+v)*M,z=((u.offsetY||0)+x)*M,I=(0,c.NO)(m.B$.getFillColor(u));let N=(0,c.NO)(m.B$.getStrokeColor(u)),O=m.B$.getStrokeWidth(u);O||(N=(0,c.NO)(m.B$.getFillColor(u.haloSymbol)),O=u.haloSize*M);let L="";for(const e of a)e.primitiveName===b&&void 0!==e.value&&(L+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const F=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),R=(0,r.hP)(JSON.stringify(t)+F+L).toString();n.push({type:"text",templateHash:R,materialHash:()=>(0,r.hP)(JSON.stringify(u.font)).toString(),cim:u,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,alignment:s,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:u.fontFamilyName,decoration:"none",weight:"normal",style:"normal",size:H(b,i,"Size",o,P),angle:H(b,i,"Rotation",o,k),offsetX:H(b,i,"OffsetX",o,w),offsetY:H(b,i,"OffsetY",o,z),horizontalAlignment:d(u.horizontalAlignment),verticalAlignment:p(u.verticalAlignment),text:H(t.primitiveName,i,"TextString",o,t.textString,c.X3,u.textCase),color:I,outlineColor:N,outlineSize:O,referenceSize:l,sizeRatio:1,markerPlacement:e.markerPlacement})}function F(e,t,i,a,o,n,s,l,f,u){const y=t.symbol,g=t.geometry;if(!g)return;const d=y.symbolLayers;if(!d)return;if(u)return void R(e,t,a,i,o,n,s,l,f);let p=d.length;for(;p--;){const u=d[p];if(u&&!1!==u.enable)switch(u.type){case"CIMSolidFill":case"CIMSolidStroke":{const y=(0,h.bk)(g);if(!y)continue;const[d,p,S]=(0,h.UV)(y,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),C="CIMSolidFill"===u.type,v={type:"sdf",geom:g,asFill:C},x=e.primitiveName,M=e.size,b=e.rotation||0,P=e.offsetX,k=e.offsetY,w=u.primitiveName,z=(0,c.NO)(C?m.B$.getFillColor(u):m.B$.getStrokeColor(u)),I=C?{r:0,g:0,b:0,a:0}:(0,c.NO)(m.B$.getStrokeColor(u)),N=m.B$.getStrokeWidth(u);if(!C&&!N)break;let O=!1,L="";for(const e of i)e.primitiveName!==w&&e.primitiveName!==x||(void 0!==e.value?L+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(O=!0));const F=JSON.stringify({...e,markerGraphics:null}),R=(0,r.hP)(JSON.stringify(v)).toString(),_={type:"marker",templateHash:(0,r.hP)(JSON.stringify(t)+JSON.stringify(u)+F+L).toString(),materialHash:O?()=>R:R,cim:v,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:s,anchorPoint:{x:p,y:S},isAbsoluteAnchorPoint:!1,size:H(e.primitiveName,a,"Size",o,M),rotation:H(e.primitiveName,a,"Rotation",o,b),offsetX:H(e.primitiveName,a,"OffsetX",o,P),offsetY:H(e.primitiveName,a,"OffsetY",o,k),scaleX:1,frameHeight:f,rotateClockwise:e.rotateClockwise,referenceSize:l,sizeRatio:d,color:H(w,a,"Color",o,z,X),outlineColor:H(w,a,"Color",o,I,X),outlineWidth:H(w,a,"Width",o,N),markerPlacement:e.markerPlacement};n.push(_);break}default:R(e,t,a,i,o,n,s,l,f)}}}function R(e,t,i,a,o,n,s,c,f){const h=function(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath,effects:e.effects}}(e,t);let u=[];const y=["Rotation","OffsetX","OffsetY"];u=a.filter((t=>t.primitiveName!==e.primitiveName||-1===y.indexOf(t.propertyName)));let g="";for(const e of a)void 0!==e.value&&(g+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`);const[d,p,S]=m.B$.getTextureAnchor(h),C=e.primitiveName,v=e.rotation||0,x=e.offsetX||0,M=e.offsetY||0,b=(0,r.hP)(JSON.stringify(h)+g).toString(),P={type:"marker",templateHash:b,materialHash:0===u.length?b:A(b,i,u,o),cim:h,materialOverrides:u,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:s,anchorPoint:{x:d,y:p},isAbsoluteAnchorPoint:!1,size:e.size,rotation:H(C,i,"Rotation",o,v),offsetX:H(C,i,"OffsetX",o,x),offsetY:H(C,i,"OffsetY",o,M),color:{r:0,g:0,b:0,a:0},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:f,rotateClockwise:e.rotateClockwise,referenceSize:c,sizeRatio:S/(0,l.F2)(e.size),markerPlacement:e.markerPlacement};n.push(P)}function _(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function X(e){if(!e||0===e.length)return null;const t=new s.default(e).toRgba();return{r:t[0],g:t[1],b:t[2],a:t[3]}}function H(e,t,i,r,a,o,s){const l=t[e];if(l){const e=l[i];if("string"==typeof e||"number"==typeof e||e instanceof Array)return o?o.call(null,e,s):e;if(null!=e&&e instanceof n.mz)return(t,i,n)=>{let l=(0,f.Z)(e,t,{$view:n},r.geometryType,i);return null!==l&&o&&(l=o.call(null,l,s)),null!==l?l:a}}return a}function A(e,t,i,a){for(const e of i)if(e.valueExpressionInfo){const i=t[e.primitiveName]&&t[e.primitiveName][e.propertyName];i instanceof n.mz&&(e.fn=(e,t,r)=>(0,f.Z)(i,e,{$view:r},a.geometryType,t))}return(t,a,o)=>{for(const e of i)e.fn&&(e.value=e.fn(t,a,o));return(0,r.hP)(e+m.E0.buildOverrideKey(i)).toString()}}function Y(e,t){if(!t||0===t.length)return e;const i=JSON.parse(JSON.stringify(e));return m.E0.applyOverrides(i,t),i}},47171:(e,t,i)=>{"use strict";i.r(t),i.d(t,{previewCIMSymbol:()=>x});var r=i(96071),a=i(14020),o=i(88263),n=i(39105),s=i(56885),l=i(99178),c=i(54721),f=i(19546),m=i(93318),h=i(11426);class u{constructor(){}rasterizeText(e,t){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));const i=this._textRasterizationCanvas,r=i.getContext("2d");this.setFontProperties(r,t),this.parameters=t,this.textLines=e.split(/\r?\n/),this.lineHeight=this.computeLineHeight();const a=this.computeTextWidth(r,t),o=this.lineHeight*this.textLines.length;var n;i.width=a,i.height=o,this.renderedLineHeight=Math.round(this.lineHeight*t.pixelRatio),this.renderedHaloSize=t.halo.size*t.pixelRatio,this.renderedWidth=a*t.pixelRatio,this.renderedHeight=o*t.pixelRatio,this.fillStyle=`rgba(${(n=t.color).slice(0,3).toString()},${n[3]})`,this.haloStyle=function(e){return`rgb(${e.slice(0,3).toString()})`}(t.halo.color);const s=this.renderedLineHeight,l=this.renderedHaloSize;this.setFontProperties(r,t);const c=function(e,t){return"center"===e?.5*t:"right"===e?t:0}(r.textAlign,this.renderedWidth)+l,f=l;let m=0,h=0;l>0&&this.renderHalo(r,c,f,m,h,t),h+=f,m+=c;for(const e of this.textLines)r.globalCompositeOperation="destination-out",r.fillStyle="rgb(0, 0, 0)",r.fillText(e,m,h),r.globalCompositeOperation="source-over",r.fillStyle=this.fillStyle,r.fillText(e,m,h),h+=s;const u=r.getImageData(0,0,this.renderedWidth,this.renderedHeight),y=new Uint8Array(u.data);if(t.premultiplyColors){let e;for(let t=0;t<y.length;t+=4)e=y[t+3]/255,y[t]=y[t]*e,y[t+1]=y[t+1]*e,y[t+2]=y[t+2]*e}return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(y.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}renderHalo(e,t,i,r,a,o){const n=this.renderedWidth,s=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=n,this._haloRasterizationCanvas.height=s;const l=this._haloRasterizationCanvas,c=l.getContext("2d");c.clearRect(0,0,n,s),this.setFontProperties(c,o),c.fillStyle=this.haloStyle,c.strokeStyle=this.haloStyle;const f=this.renderedHaloSize<3;c.lineJoin=f?"miter":"round",f?this.renderHaloEmulated(c,t,i):this.renderHaloNative(c,t,i),e.globalAlpha=this.parameters.halo.color[3],e.drawImage(l,0,0,n,s,r,a,n,s),e.globalAlpha=1}renderHaloEmulated(e,t,i){const r=this.renderedLineHeight,a=this.renderedHaloSize;for(const o of this.textLines){for(const[r,n]of y)e.fillText(o,t+a*r,i+a*n);i+=r}}renderHaloNative(e,t,i){const r=this.renderedLineHeight,a=this.renderedHaloSize;for(const o of this.textLines){const n=2*a,s=5,l=.1;for(let r=0;r<s;r++){const a=1-(s-1)*l+r*l;e.lineWidth=a*n,e.strokeText(o,t,i)}i+=r}}setFontProperties(e,t){const i=t.font,a=`${i.style} ${i.weight} ${(0,r.F2)(t.size*t.pixelRatio)}px ${i.family}, sans-serif`;let o;switch(e.font=a,e.textBaseline="top",t.horizontalAlignment){case"left":o="left";break;case"right":o="right";break;case"center":o="center";break;default:o="left"}e.textAlign=o}computeTextWidth(e,t){let i=0;for(const t of this.textLines)i=Math.max(i,e.measureText(t).width);const r=t.font;return("italic"===r.style||"oblique"===r.style||"string"==typeof r.weight&&("bold"===r.weight||"bolder"===r.weight)||"number"==typeof r.weight&&r.weight>600)&&(i+=.3*e.measureText("A").width),i+=2*this.parameters.halo.size,Math.round(i)}computeLineHeight(){const e=1.275*this.parameters.size;return Math.round(e+2*this.parameters.halo.size)}}const y=[];{const e=16;for(let t=0;t<360;t+=360/e)y.push([Math.cos(Math.PI*t/180),Math.sin(Math.PI*t/180)])}var g,d;(d=g||(g={})).Legend="legend",d.Preview="preview";const p=(e,t,i)=>{if(e&&e.targetSize){let a;if(i){const t=Math.max(i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin);a=e.targetSize/(0,r.F2)(t)}else a=e.targetSize/t.referenceSize;return a}return e&&e.scaleFactor?e.scaleFactor:1},S={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};function C(e,t,i,r){let a,o;return"function"==typeof e.materialHash?(a=(0,e.materialHash)(t,i,r),o=(0,m.S)(e.cim,e.materialOverrides)):(a=e.materialHash,o=e.cim),{analyzedCIM:o,hash:a}}const v=new class{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._rasterizer=new h.Z,this._textRasterizer=new u,this._pictureMarkerCache=new Map}async rasterizeCIMSymbolAsync(e,t,i,r,a,o,n,l){r=r||(t?null!=t.centroid?"esriGeometryPolygon":(0,s.Ji)(t.geometry):null)||function(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}(e);const c=await this.analyzeCIMSymbol(e,t?function(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}(t.attributes):null,i,r,l);return this.rasterizeCIMSymbol(c,t,r,a,o,n)}async analyzeCIMSymbol(e,t,i,r,a){const o=[],s=t?{geometryType:r,spatialReference:this._spatialReference,fields:t}:null;let l;await(0,m.c)(e.data,s,o,this._avoidSDF),(0,n.k_)(a);for(const e of o)"CIMPictureMarker"!==e.cim.type&&"CIMPictureFill"!==e.cim.type&&"CIMPictureStroke"!==e.cim.type||(l||(l=[]),l.push(this.fetchPictureMarkerResource(e,a))),i&&"text"===e.type&&"string"==typeof e.text&&e.text.indexOf("[")>-1&&(e.text=(0,f.Qs)(i,e.text,e.cim.textCase));return l&&await(0,n.$6)(l),o}async fetchPictureMarkerResource(e,t){const i=e.materialHash;if(!this._pictureMarkerCache.get(i)){const r=(await(0,c.default)(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(i,r)}}rasterizeCIMSymbol(e,t,i,r,a,o){const n=[];for(const s of e){r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,a,o));const e=this._getRasterizedResource(s,t,i,r,a,o);if(!e)continue;let l=0,c=e.anchorX||0,m=e.anchorY||0,h=!1,u=0,y=0;if("esriGeometryPoint"===i){const e=p(r,s,null);if(u=(0,f.hf)(s.offsetX,t,a,o)*e||0,y=(0,f.hf)(s.offsetY,t,a,o)*e||0,"marker"===s.type)l=(0,f.hf)(s.rotation,t,a,o)||0,h=!!s.rotateClockwise&&s.rotateClockwise;else if("text"===s.type){if(l=(0,f.hf)(s.angle,t,a,o)||0,void 0!==s.horizontalAlignment)switch(s.horizontalAlignment){case"left":c=-.5;break;case"right":c=.5;break;default:c=0}if(void 0!==s.verticalAlignment)switch(s.verticalAlignment){case"top":m=.5;break;case"bottom":m=-.5;break;case"baseline":m=-.25;break;default:m=0}}}null!=e&&n.push({angle:l,rotateClockWise:h,anchorX:c,anchorY:m,offsetX:u,offsetY:y,rasterizedResource:e})}return this.getSymbolImage(n)}getSymbolImage(e){const t=document.createElement("canvas"),i=t.getContext("2d");let a=0,o=0,n=0,s=0;const c=[];for(let t=0;t<e.length;t++){const l=e[t],f=l.rasterizedResource;if(!f)continue;const m=f.size,h=l.offsetX,u=l.offsetY,y=l.anchorX,g=l.anchorY,d=l.rotateClockWise||!1;let p=l.angle,S=(0,r.F2)(h)-m[0]*(.5+y),C=(0,r.F2)(u)-m[1]*(.5+g),v=S+m[0],x=C+m[1];if(p){d&&(p=-p);const e=Math.sin(p*Math.PI/180),t=Math.cos(p*Math.PI/180),i=S*t-C*e,r=S*e+C*t,a=S*t-x*e,o=S*e+x*t,n=v*t-x*e,s=v*e+x*t,l=v*t-C*e,c=v*e+C*t;S=Math.min(i,a,n,l),C=Math.min(r,o,s,c),v=Math.max(i,a,n,l),x=Math.max(r,o,s,c)}a=S<a?S:a,o=C<o?C:o,n=v>n?v:n,s=x>s?x:s;const M=i.createImageData(f.size[0],f.size[1]);M.data.set(new Uint8ClampedArray(f.image.buffer));const b={offsetX:h,offsetY:u,rotateClockwise:d,angle:p,rasterizedImage:M,anchorX:y,anchorY:g};c.push(b)}t.width=n-a,t.height=s-o;const f=-a,m=s;for(let e=0;e<c.length;e++){const t=c[e],a=this._imageDataToCanvas(t.rasterizedImage),o=t.rasterizedImage.width,n=t.rasterizedImage.height,s=f-o*(.5+t.anchorX),l=m-n*(.5-t.anchorY);if(t.angle){const e=(360-t.angle)*Math.PI/180;i.save(),i.translate((0,r.F2)(t.offsetX),-(0,r.F2)(t.offsetY)),i.translate(f,m),i.rotate(e),i.translate(-f,-m),i.drawImage(a,s,l),i.restore()}else i.drawImage(a,s+(0,r.F2)(t.offsetX),l-(0,r.F2)(t.offsetY))}const h=new l.Z({x:f/t.width-.5,y:m/t.height-.5});return{imageData:0!==t.width&&0!==t.height?i.getImageData(0,0,t.width,t.height):i.createImageData(1,1),anchorPosition:h}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,i=t.getContext("2d");return t.width=e.width,t.height=e.height,i.putImageData(e,0,0),t}_imageTo32Array(e,t,i){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const r=this._imageDataCanvas,a=r.getContext("2d");return r.width=t,r.height=i,a.drawImage(e,0,0,t,i),new Uint32Array(a.getImageData(0,0,t,i).data.buffer)}_getRasterizedResource(e,t,i,r,n,s){let l,c,m,h;if("esriGeometryPolyline"===i||"esriGeometryPolygon"===i){const a=r&&r.style?r.style:g.Legend,h="esriGeometryPolyline"===i?S.stroke[a]:S.fill[a];if("line"===e.type){if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){const i=(0,f.hf)(e.width,t,n,s);let r,a,o;return({image:r,width:a,height:o}=this._getPictureResource(e,i)),this._rasterizePictureResource(e,r,a,o,h,i)}return null}({analyzedCIM:l,hash:m}=C(e,t,n,s)),c=this._embedCIMLayerInVectorMarker(l,h)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type)return null;if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,f.hf)(e.offsetX,t,n,s),e.cim.offsetY=(0,f.hf)(e.offsetY,t,n,s),e.cim.rotation=(0,f.hf)(e.rotation,t,n,s),e.cim.markerPlacement=e.markerPlacement,({analyzedCIM:l}=C(e,t,n,s)),m=(0,o.hP)(JSON.stringify(l)).toString(),c=this._embedCIMLayerInVectorMarker(l,h)}else{if("text"===e.type)return null;if("fill"===e.type){if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){const i=e.cim.size||e.cim.height;let r,a,o;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type)({image:r,width:a,height:o}=this._getPictureResource(e,i));else{({analyzedCIM:l,hash:m}=C(e,t,n,s));const i=this._rasterizer.rasterizeJSONResource(l,1,this._avoidSDF);r=i.image,a=i.size[0],o=i.size[1]}return this._rasterizePictureResource(e,r,a,o,h,null)}if("CIMSolidFill"!==e.cim.type)return null;({analyzedCIM:l,hash:m}=C(e,t,n,s)),c=this._embedCIMLayerInVectorMarker(l,h)}}}else{if("text"===e.type)return h=this._rasterizeTextResource(e,t,r,n,s),h;({analyzedCIM:l,hash:m}=C(e,t,n,s));const i=p(r,e,null);if("CIMPictureMarker"===e.cim.type){const r=(0,f.hf)(e.size,t,n,s)*i,{image:a,width:o,height:l}=this._getPictureResource(e,r);return h={image:a,size:[o,l],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},h}(0,a.FW)(l,i,{preserveOutlineWidth:!1}),c=l}m+=i,r&&(m+=JSON.stringify(r));const u=this._resourceCache;return u.has(m)?u.get(m):(h=this._rasterizer.rasterizeJSONResource(c,window.devicePixelRatio||1,this._avoidSDF),u.set(m,h),h)}_rasterizeTextResource(e,t,i,r,a){const o=p(i,e,null),n=(0,f.hf)(e.text,t,r,a);if(!n||0===n.length)return null;const s=(0,f.hf)(e.fontName,t,r,a),l=(0,f.hf)(e.style,t,r,a),c=(0,f.hf)(e.weight,t,r,a),m=(0,f.hf)(e.decoration,t,r,a),h=(0,f.hf)(e.size,t,r,a)*o,u=(0,f.hf)(e.horizontalAlignment,t,r,a),y=(0,f.hf)(e.verticalAlignment,t,r,a),g=(0,f.nn)((0,f.hf)(e.color,t,r,a)),d=(0,f.nn)((0,f.hf)(e.outlineColor,t,r,a)),S={color:g,size:h,horizontalAlignment:u,verticalAlignment:y,font:{family:s,style:l,weight:c,decoration:m},halo:{size:(0,f.hf)(e.outlineSize,t,r,a)||0,color:d,style:l},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(n,S)}_rasterizePictureResource(e,t,i,a,o,n){const l=document.createElement("canvas"),c=l.getContext("2d");l.height=(0,r.F2)(Math.max(Math.abs(o.frame.ymax-o.frame.ymin),n)),l.width=(0,r.F2)(Math.abs(o.frame.xmax-o.frame.xmin));const f=c.createImageData(i,a);f.data.set(new Uint8ClampedArray(t.buffer));const m=this._imageDataToCanvas(f),h=c.createPattern(m,"repeat"),u=Math.cos((-e.cim.rotation||0)*Math.PI/180),y=Math.sin((-e.cim.rotation||0)*Math.PI/180);h.setTransform({m11:u,m12:y,m21:-y,m22:u,m41:(0,r.F2)(e.cim.offsetX)||0,m42:(0,r.F2)(e.cim.offsetY)||0});const g=o.canvasPaths;let d,p,S;(0,s.oU)(g)?(d=g.rings,c.fillStyle=h,p=c.fill,S=["evenodd"]):(0,s.l9)(g)&&(d=g.paths,c.strokeStyle=h,c.lineWidth=n,p=c.stroke,d[0][0][1]=l.height/2,d[0][1][1]=l.height/2),c.beginPath();for(const e of d){const t=e?e.length:0;if(t>1){let i=e[0];c.moveTo((0,r.F2)(i[0]),(0,r.F2)(i[1]));for(let a=1;a<t;++a)i=e[a],c.lineTo((0,r.F2)(i[0]),(0,r.F2)(i[1]));c.closePath()}}p.apply(c,S);const C=c.getImageData(0,0,l.width,l.height),v=new Uint8Array(C.data);return{size:[l.width,l.height],image:new Uint32Array(v.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,t){const i=this._pictureMarkerCache.get(e.materialHash);if(!i)return null;const a=i.height/i.width,o=t?a>1?(0,r.F2)(t):(0,r.F2)(t)/a:i.width,n=t?a>1?(0,r.F2)(t)*a:(0,r.F2)(t):i.height;return{image:this._imageTo32Array(i,o,n),width:o,height:n}}_embedCIMLayerInVectorMarker(e,t){const i=(0,s.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol";return{type:"CIMVectorMarker",frame:t.frame,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:i,symbolLayers:[e]}}]}}}(null,!0);async function x(e,t={}){const{size:i,maxSize:o,feature:n,fieldMap:s,geometryType:l,style:c,node:f,opacity:m}=t,h=(0,a.kW)(e),u=Math.min(null!=i?i:h,null!=o?o:(0,r.Wz)(120));u!==h&&(e=e.clone(),(0,a.PI)(e,u,{preserveOutlineWidth:!0}));let y=3;e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(y=1);const g=await v.rasterizeCIMSymbolAsync(e,n,s,l,{scaleFactor:y,style:c}),d=document.createElement("canvas");d.width=g.imageData.width,d.height=g.imageData.height,d.getContext("2d").putImageData(g.imageData,0,0);let p=d.width/y,S=d.height/y;if(null!=i&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale))){const e=p/S;p=e<=1?Math.ceil(u*e):u,S=e<=1?u:Math.ceil(u/e)}const C=new Image(p,S);return C.src=d.toDataURL(),null!=m&&(C.style.opacity=`${m}`),f&&f.appendChild(C),C}},49723:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(36544),a=i(32656),o=i(78712);const n=new Map,s=function(e,t,i,s,l){const c=e.referencesGeometry()&&l?function(e,t,i){const{transform:s,hasZ:l,hasM:c}=i;n.has(t)||n.set(t,function(e){const t={};switch(e){case"esriGeometryPoint":return(e,i,r,a)=>(0,o.U1)(i,t,e,r,a);case"esriGeometryPolygon":return(e,i,r,a)=>(0,o.Ie)(i,t,e,r,a);case"esriGeometryPolyline":return(e,i,r,a)=>(0,o.G6)(i,t,e,r,a);case"esriGeometryMultipoint":return(e,i,r,a)=>(0,o.J9)(i,t,e,r,a);default:return r.Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new a.Z("mapview-arcade",`Unable to handle geometryType: ${e}`)),e=>e}}(t));const f=n.get(t)(e.geometry,s,l,c);return{...e,geometry:f}}(t,s,l):t,f=e.repurposeFeature(c);try{return e.evaluate({...i,$feature:f})}catch(e){return r.Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}}}}]);
//# sourceMappingURL=7171.js.map