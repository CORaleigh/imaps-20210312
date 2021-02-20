(self.webpackChunkimaps=self.webpackChunkimaps||[]).push([[7431,2756],{83873:(t,e,i)=>{"use strict";function s(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function r(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){let e=0,i=0;for(let s=0;s<t.length;s++){const r=t[s].size;"number"==typeof r&&(e+=r,i++)}return e/i}(t.stops):e}function a(t){const e=t&&t.renderer,i="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!e)return i;const a="visualVariables"in e?function(t,e){if(!e)return t;const i=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:i,minSize:s}=e;return(r(i,t)+r(s,t))/2}));let s=0;const a=i.length;if(0===a)return t;for(let t=0;t<a;t++)s+=i[t];const h=Math.floor(s/a);return Math.max(h,t)}(i,e.visualVariables):i;if("simple"===e.type)return s(a,e.symbol);if("unique-value"===e.type){let t=a;return e.uniqueValueInfos.forEach((e=>{t=s(t,e.symbol)})),t}if("class-breaks"===e.type){let t=a;return e.classBreakInfos.forEach((e=>{t=s(t,e.symbol)})),t}return e.type,a}i.d(e,{k:()=>a})},77431:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>U});var s=i(56140),r=(i(95830),i(59472)),a=(i(36544),i(68055),i(79881)),h=i(87566),o=(i(10923),i(57002),i(86035),i(61106)),n=i(92232),c=i(6513),l=i(53817),p=i(93833),d=(i(36348),i(35470)),u=i(48142),v=i(5674),g=i(88083),_=i(15988),y=i(59691),f=i(80621),m=i(50897),b=i(70778),G=i(24591),w=i(3470);function x(t){let e=0,i=0;const s=t.length;let r,a=t[i];for(i=0;i<s-1;i++)r=t[i+1],e+=(r[0]-a[0])*(r[1]+a[1]),a=r;return e>=0}function S(t,e,i,s){const r=[];for(const a of t){const t=a.slice(0);r.push(t);const h=e*(a[0]-s.x)-i*(a[1]-s.y)+s.x,o=i*(a[0]-s.x)+e*(a[1]-s.y)+s.y;t[0]=h,t[1]=o}return r}const C=function(t,e,i){const s=t.spatialReference,r=e*Math.PI/180,a=Math.cos(r),h=Math.sin(r);var n,c;if("xmin"in t&&(i=null!=(n=i)?n:t.center,t=new l.Z({spatialReference:s,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){var d;i=null!=(d=i)?d:t.extent.center;const e=[];for(const s of t.paths)e.push(S(s,a,h,i));return new p.Z({spatialReference:s,paths:e})}if("rings"in t){var u;i=null!=(u=i)?u:t.extent.center;const e=[];for(const s of t.rings){const t=x(s),r=S(s,a,h,i);x(r)!==t&&r.reverse(),e.push(r)}return new l.Z({spatialReference:s,rings:e})}if("x"in t){var v;i=null!=(v=i)?v:t;const e=new o.Z({x:a*(t.x-i.x)-h*(t.y-i.y)+i.x,y:h*(t.x-i.x)+a*(t.y-i.y)+i.y,spatialReference:s});return null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}return"points"in t?(i=null!=(c=i)?c:t.extent.center,new w.Z({points:S(t.points,a,h,i),spatialReference:s})):null};var k=i(32756),O=i(44883);class M{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-start"}}class R{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move"}}class E{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-stop"}}class I{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start"}}class D{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate"}}class P{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop"}}class z{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-start"}}class L{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale"}}class Z{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-stop"}}const H=O.X.transformGraphics,A={centerIndicator:new g.Z({style:"cross",size:H.center.size,color:H.center.color}),fill:{default:new v.default({color:H.fill.color,outline:{color:H.fill.outlineColor,join:"round",width:1}}),active:new v.default({color:H.fill.stagedColor,outline:{color:H.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new g.Z({style:"square",size:H.vertex.size,color:H.vertex.color,outline:{color:H.vertex.outlineColor,width:1}}),hover:new g.Z({style:"square",size:H.vertex.hoverSize,color:H.vertex.hoverColor,outline:{color:H.vertex.hoverOutlineColor,width:1}})},rotator:{default:new g.Z({style:"circle",size:H.vertex.size,color:H.vertex.color,outline:{color:H.vertex.outlineColor,width:1}}),hover:new g.Z({style:"circle",size:H.vertex.hoverSize,color:H.vertex.hoverColor,outline:{color:H.vertex.hoverOutlineColor,width:1}})},rotatorLine:new u.Z({color:H.line.color,width:1})};let T=class extends d.Z.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._handles=new y.Z,this._mover=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.centerGraphic=null,this.backgroundGraphic=null,this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.handleGraphics=[],this.layer=null,this.preserveAspectRatio=!1,this.rotateGraphic=null,this.showCenterGraphic=!0,this.view=null,this._getBounds=(()=>{const t=(0,m.Ue)();return(e,i)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const s of i){if(!s)continue;let i,r,a,h;if("point"===s.type)i=a=s.x,r=h=s.y;else if("multipoint"===s.type){const e=(0,n.nA)(s);[i,r,a,h]=(0,c.C6)(t,[e])}else if("extent"===s.type)[i,r,a,h]=[s.xmin,s.ymin,s.xmax,s.ymax];else{const e=(0,n.nA)(s);[i,r,a,h]=(0,c.C6)(t,e)}e[0]=Math.min(i,e[0]),e[1]=Math.min(r,e[1]),e[2]=Math.max(a,e[2]),e[3]=Math.max(h,e[3])}return e}})()}initialize(){this._setup(),this._handles.add([(0,f.whenOnce)(this,"view.ready",(()=>{const{layer:t,view:e}=this;(0,G.p)(e,t)})),(0,f.pausable)(this,"preserveAspectRatio",(()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics())})),(0,f.pausable)(this,"view.scale",(()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()})),(0,f.pausable)(this,"graphics",(()=>this.refresh())),(0,f.pausable)(this,"layer",((t,e)=>{e&&this._resetGraphics(e),this.refresh()}))])}destroy(){this._reset(),this._handles&&(this._handles.removeAll(),this._handles=null)}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{centerIndicator:e=A.centerIndicator,fill:i=A.fill,handles:s=A.handles,rotator:r=A.rotator,rotatorLine:a=A.rotatorLine}=t||{};this._set("symbols",{centerIndicator:e,fill:i,handles:s,rotator:r,rotatorLine:a})}isUIGraphic(t){let e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=(0,b.e7)(s,t,e,this.view);i.geometry=r}this.refresh(),this._emitMoveStopEvent(t,e,null)}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=(0,b.bA)(s,t,e);i.geometry=r}this.refresh(),this._emitScaleStopEvent(t,e,null)}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const t=this.handleGraphics[1].geometry.x,i=this.handleGraphics[3].geometry.y;e=new o.Z(t,i,this.view.spatialReference)}for(const i of this.graphics){const s=i.geometry,r=C(s,t,e);i.geometry=r}this.refresh(),this._emitRotateStopEvent(t,null)}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){const e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(const t of this.handleGraphics)t.destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}_setupMover(){let t=[].concat(this.handleGraphics);this.enableMovement&&(t=t.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&t.push(this.rotateGraphic),this.showCenterGraphic&&t.push(this.centerGraphic),this._mover=new k.default({enableMoveAllGraphics:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_getStartInfo(t){const[e,i,s,r]=this._getBoxBounds((0,m.Ue)()),a=Math.abs(s-e),h=Math.abs(r-i),o=(s+e)/2,n=(r+i)/2,{x:c,y:l}=t.geometry;return{width:a,height:h,centerX:o,centerY:n,startX:c,startY:l,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}_getGraphicInfos(){return this.graphics.map((t=>this._getGraphicInfo(t)))}_getGraphicInfo(t){const e=t.geometry,[i,s,r,a]=this._getBounds((0,m.Ue)(),[e]);return{width:Math.abs(r-i),height:Math.abs(a-s),centerX:(r+i)/2,centerY:(a+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,backgroundGraphic:r,handleGraphics:a,rotateGraphic:h,symbols:o}=this,n=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=o.fill.active,this._startInfo=this._getStartInfo(n),n===h?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,n)):a.includes(n)?(this._activeHandleGraphic=n,this._emitScaleStartEvent(i,s,n)):this._emitMoveStartEvent(t.dx,t.dy,n)}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else{const i=t.dx,s=t.dy;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._emitMoveEvent(i,s,e)}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:r,_xScale:a,_yScale:h,backgroundGraphic:o,handleGraphics:n,rotateGraphic:c,symbols:l}=this;this._updateGraphics(),this._showGraphicsAfterUpdate(),o.symbol=l.fill.default,e===c?(this.view.cursor="pointer",this._emitRotateStopEvent(i,e)):n.includes(e)?this._emitScaleStopEvent(a,h,e):this._emitMoveStopEvent(s,r,e),this._resetGraphicStateVars()}_onGraphicPointerOverCallback(t){const{backgroundGraphic:e,handleGraphics:i,graphics:s,rotateGraphic:r,symbols:a,view:h}=this,o=t.graphic;if(o===r)return r.symbol=a.rotator.hover,void(h.cursor="pointer");if(s.includes(o)||o===e)return void(h.cursor="move");if(!i.includes(o))return void(h.cursor="pointer");t.graphic.symbol=a.handles.hover;const n=h.rotation;let c,l=t.index;switch(l<8&&(n>=0&&n<45?l%=8:l=n>=45&&n<90?(l+1)%8:n>=90&&n<135?(l+2)%8:n>=135&&n<180?(l+3)%8:n>=180&&n<225?(l+4)%8:n>=225&&n<270?(l+5)%8:n>=270&&n<315?(l+6)%8:(l+7)%8),l){case 0:c="nwse-resize";break;case 1:c="ns-resize";break;case 2:c="nesw-resize";break;case 3:c="ew-resize";break;case 4:c="nwse-resize";break;case 5:c="ns-resize";break;case 6:c="nesw-resize";break;case 7:c="ew-resize";break;default:c="pointer"}h.cursor=c}_onGraphicPointerOutCallback(t){const{handleGraphics:e,rotateGraphic:i,symbols:s,view:r}=this;t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),r.cursor="default"}_scaleGraphic(t){const{_startInfo:e,handleGraphics:i,preserveAspectRatio:s,view:r}=this,{centerX:a,centerY:h,startX:n,startY:c}=e,{resolution:l,transform:p}=r.state,d=i.indexOf(t);1!==d&&5!==d||this._updateX(t,a),3!==d&&7!==d||this._updateY(t,h);const{x:u,y:v}=t.geometry,g=p[0]*u+p[2]*v+p[4],_=p[1]*u+p[3]*v+p[5],y=e.graphicInfos.map((t=>t.geometry));if(s){const t=p[0]*a+p[2]*h+p[4],e=p[1]*a+p[3]*h+p[5],i=p[0]*n+p[2]*c+p[4],s=p[1]*n+p[3]*c+p[5];this._xScale=this._yScale=(0,b.Ru)(t,e,i,s,g,_);for(const t of y){const e=y.indexOf(t);this.graphics[e].geometry=(0,b.bA)(t,this._xScale,this._yScale,[a,h])}this._updateBackgroundGraphic()}else{const{width:t,height:i}=e;let s=u-n,p=c-v;if(1===d||5===d?s=0:3!==d&&7!==d||(p=0),0===s&&0===p)return;const g=t+(n>a?s:-1*s),_=i+(c<h?p:-1*p),f=a+s/2,m=h+p/2;this._xScale=g/t||1,this._yScale=_/i||1,1===d||5===d?this._xScale=1:3!==d&&7!==d||(this._yScale=1);const G=(f-a)/l,w=(m-h)/l,x=(0,b.bA)(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=(0,b.e7)(x,G,w,r,!0);const{centerX:S,centerY:C}=this._getGraphicInfo(this.backgroundGraphic),k=(S-a)/l,O=-1*(C-h)/l;for(const t of y){const e=y.indexOf(t),i=(0,b.bA)(t,this._xScale,this._yScale,[a,h]);this.graphics[e].geometry=(0,b.e7)(i,k,O,r,!0)}this.centerGraphic.geometry=new o.Z(S,C,r.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s,startY:r,box:a,rotate:h}=this._startInfo,{x:n,y:c}=t.geometry,l=new o.Z(e,i,this.view.spatialReference);this._angleOfRotation=(0,b.cM)(e,i,s,r,n,c);const p=this._startInfo.graphicInfos.map((t=>t.geometry));for(const t of p){const e=p.indexOf(t),i=C(t,this._angleOfRotation,l);this.graphics[e].geometry=i}this.backgroundGraphic.geometry=C(a,this._angleOfRotation,l),this.rotateGraphic.geometry=C(h,this._angleOfRotation,l)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=(0,b.e7)(s,e,i,this.view);for(const s of this.graphics)s!==t&&(s.geometry=(0,b.e7)(s.geometry,e,i,this.view))}else if(t===this.centerGraphic){const t=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=(0,b.e7)(t,e,i,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic)for(const t of this.graphics)t.geometry=(0,b.e7)(t.geometry,e,i,this.view)}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._set("centerGraphic",new _.default(null,e.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new _.default(null,e.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new _.default(null,e.rotatorLine,t),this._set("rotateGraphic",new _.default(null,e.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(let i=0;i<8;i++)this.handleGraphics.push(new _.default(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach((t=>t.visible=!1))}_showGraphicsAfterUpdate(){this.enableRotation&&(this._rotateLineGraphic.visible=!0,this.rotateGraphic.visible=!0),this.showCenterGraphic&&(this.centerGraphic.visible=!0),this.enableScaling&&this.handleGraphics.forEach((t=>t.visible=!0))}_updateHandleGraphics(){const t=this._getCoordinates(!0);this.handleGraphics.forEach(((e,i)=>{const[s,r]=t[i];this._updateXY(e,s,r)}))}_updateBackgroundGraphic(){const t=this._getCoordinates();this.backgroundGraphic.geometry=new l.Z({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds((0,m.Ue)()),r=(i+t)/2,a=(s+e)/2;this.centerGraphic.geometry=new o.Z(r,a,this.view.spatialReference)}_updateRotateGraphic(){if(!this.handleGraphics.length)return;const{x:t,y:e}=this.handleGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new o.Z(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this.handleGraphics.length||!this.rotateGraphic||!this.rotateGraphic.geometry)return;const t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new p.Z({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new o.Z(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new o.Z(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new o.Z(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some((t=>t&&(0,r.pC)(t.geometry)&&"extent"===t.geometry.type))}_getBoxBounds(t){const e=this.graphics.map((t=>t.geometry));return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,r]=this._getBoxBounds((0,m.Ue)());if(t){const t=(e+s)/2,a=(r+i)/2;return[[e,r],[t,r],[s,r],[s,a],[s,i],[t,i],[e,i],[e,a]]}return[[e,r],[s,r],[s,i],[e,i]]}_emitMoveStartEvent(t,e,i){const s=new M(this.graphics,i,t,e);this.emit("move-start",s),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(s)}_emitMoveEvent(t,e,i){const s=new R(this.graphics,i,t,e);this.emit("move",s),this.callbacks.onMove&&this.callbacks.onMove(s)}_emitMoveStopEvent(t,e,i){const s=new E(this.graphics,i,t,e);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitRotateStartEvent(t,e){const i=new I(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)}_emitRotateEvent(t,e){const i=new D(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)}_emitRotateStopEvent(t,e){const i=new P(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)}_emitScaleStartEvent(t,e,i){const s=new z(this.graphics,i,t,e);this.emit("scale-start",s),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(s)}_emitScaleEvent(t,e,i){const s=new L(this.graphics,i,t,e);this.emit("scale",s),this.callbacks.onScale&&this.callbacks.onScale(s)}_emitScaleStopEvent(t,e,i){const s=new Z(this.graphics,i,t,e);this.emit("scale-stop",s),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(s)}};(0,s._)([(0,a.Cb)()],T.prototype,"_rotateLineGraphic",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],T.prototype,"type",void 0),(0,s._)([(0,a.Cb)()],T.prototype,"callbacks",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],T.prototype,"centerGraphic",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],T.prototype,"backgroundGraphic",void 0),(0,s._)([(0,a.Cb)()],T.prototype,"enableMovement",void 0),(0,s._)([(0,a.Cb)()],T.prototype,"enableRotation",void 0),(0,s._)([(0,a.Cb)()],T.prototype,"enableScaling",void 0),(0,s._)([(0,a.Cb)()],T.prototype,"graphics",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],T.prototype,"handleGraphics",void 0),(0,s._)([(0,a.Cb)()],T.prototype,"layer",void 0),(0,s._)([(0,a.Cb)()],T.prototype,"preserveAspectRatio",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],T.prototype,"rotateGraphic",void 0),(0,s._)([(0,a.Cb)()],T.prototype,"showCenterGraphic",void 0),(0,s._)([(0,a.Cb)({dependsOn:["view.ready","graphics.length","layer"],readOnly:!0})],T.prototype,"state",null),(0,s._)([(0,a.Cb)({value:A})],T.prototype,"symbols",null),(0,s._)([(0,a.Cb)()],T.prototype,"view",void 0),T=(0,s._)([(0,h.j)("esri.views.draw.support.Box")],T);const U=T},32756:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>C});var s=i(56140),r=(i(95830),i(82550)),a=i(59472),h=(i(36544),i(68055),i(79881)),o=i(87566),n=(i(10923),i(57002),i(86035),i(35470)),c=i(59691),l=i(80621),p=i(69948),d=i(2887),u=i(70778),v=i(65865);class g{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-click"}}class _{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-double-click"}}class y{constructor(t,e,i,s,r,a,h,o,n,c){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=r,this.dx=a,this.dy=h,this.totalDx=o,this.totalDy=n,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class f{constructor(t,e,i,s,r,a,h,o,n,c){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=r,this.dx=a,this.dy=h,this.totalDx=o,this.totalDy=n,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class m{constructor(t,e,i,s,r,a,h,o,n,c){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=r,this.dx=a,this.dy=h,this.totalDx=o,this.totalDy=n,this.viewEvent=c,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class b{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-pointer-over"}}class G{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-pointer-out"}}class w{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-pointer-down"}}class x{constructor(t,e,i,s,r){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=r,this.type="graphic-pointer-up"}}let S=class extends n.Z.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._dragEvent=null,this._handles=new c.Z,this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new c.Z,this._manipulators=[],this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.view=null}initialize(){this._setUpManipulators(),this._handles.add([(0,l.watch)(this,["graphics","graphics.length"],(()=>{this._setUpManipulators()})),(0,l.whenOnce)(this,"view.ready",(()=>{this._viewHandles.add([this.view.on("immediate-click",(t=>this._clickHandler(t)),p.f.TOOL),this.view.on("double-click",(t=>this._doubleClickHandler(t)),p.f.TOOL),this.view.on("pointer-down",(t=>this._pointerDownHandler(t)),p.f.TOOL),this.view.on("pointer-move",(t=>this._pointerMoveHandler(t)),p.f.TOOL),this.view.on("pointer-up",(t=>this._pointerUpHandler(t)),p.f.TOOL),this.view.on("drag",(t=>this._dragHandler(t)),p.f.TOOL),this.view.on("key-down",(t=>this._keyDownHandler(t)),p.f.TOOL)])}))])}destroy(){this.reset(),this._manipulators.forEach((t=>t.destroy())),this._manipulators=null,this._viewHandles.removeAll(),this._handles.removeAll()}get state(){const t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}updateGeometry(t,e){const i=this.graphics[t];i&&i.set("geometry",e)}_clickHandler(t){const e=this._findTargetGraphic((0,d.vT)(t));if(e){const i=new g(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}_doubleClickHandler(t){const e=this._findTargetGraphic((0,d.vT)(t));if(e){const i=new _(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}_pointerDownHandler(t){const e=this._findTargetGraphic((0,d.vT)(t));if(e){this._activeGraphic=e;const{x:i,y:s}=t,r=new w(e,this.graphics.indexOf(e),i,s,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._activeGraphic),r=new x(this._activeGraphic,s,e,i,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}_pointerMoveHandler(t){if(this._dragEvent)return;const e=this._findTargetGraphic((0,d.vT)(t));if(e){const{x:i,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===e)return;const r=this.graphics.indexOf(this._hoverGraphic),a=new G(this.graphics[r],r,i,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}const r=this.graphics.indexOf(e),a=new b(e,r,i,s,t);return this._hoverGraphic=e,this.emit("graphic-pointer-over",a),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(a))}if(this._hoverGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._hoverGraphic),r=new G(this.graphics[s],s,e,i,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;t.stopPropagation();const{action:e,x:i,y:s}=t,a=this.graphics.indexOf(this._activeGraphic),h=this._activeGraphic.geometry,o=this._dragEvent?i-this._dragEvent.x:0,n=this._dragEvent?s-this._dragEvent.y:0,c=i-t.origin.x,l=s-t.origin.y;if(this._activeGraphic.geometry=(0,u.e7)(h,o,n,this.view),this.enableMoveAllGraphics&&this.graphics.forEach((t=>{t!==this._activeGraphic&&(t.geometry=(0,u.e7)(t.geometry,o,n,this.view))})),this._dragEvent=t,"start"===e){this._initialDragGeometry=(0,r.d9)(h);const e=new y(this._activeGraphic,this.graphics,a,i,s,o,n,c,l,t);this.emit("graphic-move-start",e),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(e),e.defaultPrevented&&this._activeGraphic.set("geometry",h)}else if("update"===e){const e=new f(this._activeGraphic,this.graphics,a,i,s,o,n,c,l,t);this.emit("graphic-move",e),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(e),e.defaultPrevented&&this._activeGraphic.set("geometry",h)}else{const e=new m(this._activeGraphic,this.graphics,a,i,s,o,n,c,l,t);this._dragEvent=null,this._activeGraphic=null,this.emit("graphic-move-stop",e),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(e),e.defaultPrevented&&this.graphics[a].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){let e=null,i=Number.MAX_VALUE;return this._manipulators.forEach((s=>{const r=s.intersectionDistance(t);(0,a.pC)(r)&&r<i&&(i=r,e=s.graphic)})),e}_setUpManipulators(){const{graphics:t,view:e}=this;this._manipulators.forEach((t=>t.destroy())),this._manipulators=null!=t&&t.length?t.map((t=>new v.L({graphic:t,view:e}))):[]}};(0,s._)([(0,h.Cb)()],S.prototype,"_activeGraphic",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],S.prototype,"type",void 0),(0,s._)([(0,h.Cb)()],S.prototype,"callbacks",void 0),(0,s._)([(0,h.Cb)()],S.prototype,"enableMoveAllGraphics",void 0),(0,s._)([(0,h.Cb)()],S.prototype,"graphics",void 0),(0,s._)([(0,h.Cb)({dependsOn:["view.ready","graphics.length","_activeGraphic"],readOnly:!0})],S.prototype,"state",null),(0,s._)([(0,h.Cb)()],S.prototype,"view",void 0),S=(0,s._)([(0,o.j)("esri.views.draw.support.GraphicMover")],S);const C=S},44883:(t,e,i)=>{"use strict";i.d(e,{X:()=>p});var s=i(78745);const r={main:new s.default([255,127,0]),selected:new s.default([255,255,255]),outline:new s.default([0,0,0,.5]),selectedOutline:new s.default([255,255,255]),hoverOutline:new s.default([255,255,255]),secondary:new s.default([255,255,255]),secondaryOutline:new s.default([100,100,100]),transparent:new s.default([0,0,0,0])};function a(t,e){if(e)for(const i in e)t[i]=e[i]}class h{constructor(t){this.size=8,this.hoverSize=10,this.color=r.main,this.hoverColor=r.main,this.outlineColor=r.outline,this.hoverOutlineColor=r.hoverOutline,a(this,t)}}class o{constructor(t){this.color=r.secondary,this.hoverColor=r.main,a(this,t)}}class n{constructor(t){this.color=r.transparent,this.hoverColor=r.transparent,this.outlineColor=r.main,this.hoverOutlineColor=r.main,this.stagedColor=r.transparent,this.stagedOutlineColor=r.secondary,a(this,t)}}class c{constructor(t){this.vertex=new h,this.midpoint=new h({color:r.secondary,outlineColor:r.secondaryOutline,size:6}),this.selected=new h({color:r.selected,hoverColor:r.selected,hoverOutlineColor:r.hoverOutline}),a(this,t)}}class l{constructor(t){this.center=new h({color:r.secondaryOutline}),this.fill=new n,this.line=new o,this.vertex=new h({color:r.selected,outlineColor:r.main,hoverColor:r.selected,hoverOutlineColor:r.secondaryOutline}),a(this,t)}}const p=new class{constructor(t){this.reshapeGraphics=new c,this.transformGraphics=new l,a(this,t)}}},65865:(t,e,i)=>{"use strict";i.d(e,{L:()=>b});var s=i(56140),r=(i(95830),i(59472)),a=i(36544),h=(i(68055),i(79881)),o=i(87566),n=(i(10923),i(57002),i(86035),i(79152)),c=i(35470),l=i(96071),p=i(77625),d=i(17387),u=i(28449),v=i(79710),g=i(5684),_=i(14286),y=i(46970),f=i(37694);const m=a.Z.getLogger("esri.views.interactive.GraphicManipulator");let b=class extends n.default{constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new c.Z.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(t){"mesh"!==(0,r.U2)(t.geometry,"type")?(this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()):m.error("Mesh geometries are not supported")}get elevationInfo(){const t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,e=(0,y.vu)(this.graphic),i=t?t.offset:0;return new v.Z({mode:e,offset:i})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const e=this._get("graphic");if(!1===e.visible)return null;const i=this._get("focusedSymbol"),s=(0,r.pC)(i)?i:e.symbol,a=e.geometry;return(0,r.Wi)(a)?null:"2d"===this.view.type?this._intersectDistance2D(this.view,t,a,s):this._intersectDistance3D(this.view,t,e)}attach(){this.attachSymbolChanged(),(0,r.pC)(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),(0,r.pC)(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",(t=>{(0,r.pC)(t)&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&(0,r.pC)(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))}),!0)}detachSymbolChanged(){(0,r.pC)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&(0,r.pC)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,e,i,s){if(s=s||(0,g.js)(i),(0,r.Wi)(s))return null;let a=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==s.type)return(0,f.D)(e,i,t)?1:null;if((0,r.Wi)(a)||!a.originalPoint.equals(i)){const e=i,r=t.spatialReference;if((0,u.Up)(e.spatialReference,r)){const t=(0,u.iV)(e,r);a={originalPoint:e.clone(),mapPoint:t,radiusPx:(0,l.F2)(s.size)},this._circleCollisionCache=a}}if((0,r.pC)(a)){const i=(0,l.md)(e,w),r=t.toScreen(a.mapPoint),h=a.radiusPx,o=r.x+(0,l.F2)(s.xoffset),n=r.y-(0,l.F2)(s.yoffset);return(0,_.j)(i,[o,n])<h*h?1:null}return null}_intersectDistance3D(t,e,i){const s=t.toMap(e,{include:[i]});return s&&(0,u.KC)(s,G,t.renderSpatialReference)?(0,d.k)(G,t.state.camera.eye):null}};(0,s._)([(0,h.Cb)({constructOnly:!0,nonNullable:!0})],b.prototype,"graphic",null),(0,s._)([(0,h.Cb)({readOnly:!0,dependsOn:["graphic"]})],b.prototype,"elevationInfo",null),(0,s._)([(0,h.Cb)({constructOnly:!0,nonNullable:!0})],b.prototype,"view",void 0),(0,s._)([(0,h.Cb)({value:null})],b.prototype,"focusedSymbol",null),(0,s._)([(0,h.Cb)({constructOnly:!0})],b.prototype,"layer",void 0),(0,s._)([(0,h.Cb)()],b.prototype,"interactive",void 0),(0,s._)([(0,h.Cb)()],b.prototype,"selectable",void 0),(0,s._)([(0,h.Cb)()],b.prototype,"grabbable",void 0),(0,s._)([(0,h.Cb)({value:!1})],b.prototype,"grabbing",null),(0,s._)([(0,h.Cb)()],b.prototype,"dragging",void 0),(0,s._)([(0,h.Cb)()],b.prototype,"hovering",null),(0,s._)([(0,h.Cb)({value:!1})],b.prototype,"selected",null),(0,s._)([(0,h.Cb)()],b.prototype,"cursor",void 0),b=(0,s._)([(0,o.j)("esri.views.interactive.GraphicManipulator")],b);const G=(0,p.c)(),w=(0,l.s1)()},37694:(t,e,i)=>{"use strict";i.d(e,{K:()=>o,D:()=>n});var s=i(59472),r=i(52937),a=(i(36348),i(93533)),h=i(83873);function o(t,e,i,h=new r.Z){let o;if("2d"===i.type)o=e*i.resolution;else if("3d"===i.type){const r=i.overlayPixelSizeInMapUnits(t),h=i.basemapSpatialReference;o=(0,s.pC)(h)&&!h.equals(i.spatialReference)?(0,a.c9)(h)/(0,a.c9)(i.spatialReference):e*r}const n=t.x-o,c=t.y-o,l=t.x+o,p=t.y+o,{spatialReference:d}=i;return h.xmin=Math.min(n,l),h.ymin=Math.min(c,p),h.xmax=Math.max(n,l),h.ymax=Math.max(c,p),h.spatialReference=d,h}function n(t,e,i){const r=i.toMap(t);return!(0,s.Wi)(r)&&o(r,(0,h.k)(),i,c).intersects(e)}const c=new r.Z}}]);
//# sourceMappingURL=7431.js.map