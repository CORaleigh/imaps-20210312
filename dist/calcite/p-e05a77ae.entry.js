import{r as t,c as a,h as i,H as s,g as e}from"./p-0f61cfe6.js";import{h}from"./p-fbd3d700.js";import{g as l}from"./p-e75286c4.js";import{g as n}from"./p-a4e6e35b.js";const r=class{constructor(e){t(this,e),this.calciteSliderChange=a(this,"calciteSliderChange",7),this.calciteSliderUpdate=a(this,"calciteSliderUpdate",7),this.disabled=!1,this.min=0,this.max=100,this.value=null,this.snap=!1,this.step=1,this.hasHistogram=!1,this.guid=`calcite-slider-${n()}`,this.isRange=!1,this.tickValues=[],this.activeProp="value",this.minMaxValueRange=null,this.minValueDragRange=null,this.maxValueDragRange=null}histogramWatcher(t){this.hasHistogram=!!t}componentWillLoad(){this.isRange=!(!this.maxValue&&0!==this.maxValue),this.tickValues=this.generateTickValues(),this.value=this.bound(this.value),this.snap&&(this.value=this.getClosestStep(this.value)),this.histogram&&(this.hasHistogram=!0),this.emitChange()}componentDidRender(){this.labelHandles&&(this.adjustHostObscuredHandleLabel("value"),this.isRange&&(this.adjustHostObscuredHandleLabel("minValue"),this.precise&&this.isRange&&!this.hasHistogram||this.hyphenateCollidingRangeHandleLabels())),this.hideObscuredBoundingTickLabels()}render(){const t=this.el.id||this.guid,a=this.minValue||this.min,e=this.maxValue||this.value,l=this.isRange?"maxValue":"value",n=this[l],r=100*this.getUnitInterval(a)+"%",h=100-100*this.getUnitInterval(e)+"%",o=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===l},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=l,onMouseDown:()=>this.dragStart(l),onTouchStart:t=>this.dragStart(l,t),ref:t=>this.maxHandle=t,role:"slider",style:{right:h}},i("div",{class:"handle"})),c=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===l},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=l,onMouseDown:()=>this.dragStart(l),onTouchStart:t=>this.dragStart(l,t),ref:t=>this.maxHandle=t,role:"slider",style:{right:h}},i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},n?n.toLocaleString():n),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},n?n.toLocaleString():n),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},n?n.toLocaleString():n),i("div",{class:"handle"})),u=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===l},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=l,onMouseDown:()=>this.dragStart(l),onTouchStart:t=>this.dragStart(l,t),ref:t=>this.maxHandle=t,role:"slider",style:{right:h}},i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},n?n.toLocaleString():n),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},n?n.toLocaleString():n),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},n?n.toLocaleString():n)),d=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===l,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=l,onMouseDown:()=>this.dragStart(l),onTouchStart:t=>this.dragStart(l,t),ref:t=>this.maxHandle=t,role:"slider",style:{right:h}},i("div",{class:"handle"}),i("div",{class:"handle-extension"})),m=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===l,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=l,onMouseDown:()=>this.dragStart(l),onTouchStart:t=>this.dragStart(l,t),ref:t=>this.maxHandle=t,role:"slider",style:{right:h}},i("div",{class:"handle-extension"}),i("div",{class:"handle"})),b=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===l,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=l,onMouseDown:()=>this.dragStart(l),onTouchStart:t=>this.dragStart(l,t),ref:t=>this.maxHandle=t,role:"slider",style:{right:h}},i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},n?n.toLocaleString():n),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},n?n.toLocaleString():n),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},n?n.toLocaleString():n),i("div",{class:"handle"}),i("div",{class:"handle-extension"})),p=i("button",{"aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":n,class:{thumb:!0,"thumb--value":!0,"thumb--active":"minMaxValue"!==this.lastDragProp&&this.dragProp===l,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp=l,onMouseDown:()=>this.dragStart(l),onTouchStart:t=>this.dragStart(l,t),ref:t=>this.maxHandle=t,role:"slider",style:{right:h}},i("div",{class:"handle-extension"}),i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value"},n?n.toLocaleString():n),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value static"},n?n.toLocaleString():n),i("span",{"aria-hidden":"true",class:"handle__label handle__label--value transformed"},n?n.toLocaleString():n)),g=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onMouseDown:()=>this.dragStart("minValue"),onTouchStart:t=>this.dragStart("minValue",t),ref:t=>this.minHandle=t,role:"slider",style:{left:r}},i("div",{class:"handle"})),x=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onMouseDown:()=>this.dragStart("minValue"),onTouchStart:t=>this.dragStart("minValue",t),ref:t=>this.minHandle=t,role:"slider",style:{left:r}},i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()),i("div",{class:"handle"})),f=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onMouseDown:()=>this.dragStart("minValue"),onTouchStart:t=>this.dragStart("minValue",t),ref:t=>this.minHandle=t,role:"slider",style:{left:r}},i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString())),v=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onMouseDown:()=>this.dragStart("minValue"),onTouchStart:t=>this.dragStart("minValue",t),ref:t=>this.minHandle=t,role:"slider",style:{left:r}},i("div",{class:"handle-extension"}),i("div",{class:"handle"})),k=i("button",{"aria-label":this.minLabel,"aria-orientation":"horizontal","aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.minValue,class:{thumb:!0,"thumb--minValue":!0,"thumb--active":"minValue"===this.dragProp,"thumb--precise":!0},disabled:this.disabled,onBlur:()=>this.activeProp=null,onFocus:()=>this.activeProp="minValue",onMouseDown:()=>this.dragStart("minValue"),onTouchStart:t=>this.dragStart("minValue",t),ref:t=>this.minHandle=t,role:"slider",style:{left:r}},i("div",{class:"handle-extension"}),i("div",{class:"handle"}),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue static"},this.minValue&&this.minValue.toLocaleString()),i("span",{"aria-hidden":"true",class:"handle__label handle__label--minValue transformed"},this.minValue&&this.minValue.toLocaleString()));return i(s,{id:t,"is-range":this.isRange},this.renderGraph(),i("div",{class:"track"},i("div",{class:"track__range",onMouseDown:()=>this.dragStart("minMaxValue"),onTouchStart:t=>this.dragStart("minMaxValue",t),style:{left:r,right:h}}),i("div",{class:"ticks"},this.tickValues.map((t=>i("span",{class:{tick:!0,"tick--active":t>=a&&t<=e},style:{left:100*this.getUnitInterval(t)+"%"}},this.renderTickLabel(t)))))),!this.precise&&!this.labelHandles&&this.isRange&&g,!this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&x,this.precise&&!this.labelHandles&&this.isRange&&v,this.precise&&this.labelHandles&&this.isRange&&k,this.hasHistogram&&!this.precise&&this.labelHandles&&this.isRange&&f,!this.precise&&!this.labelHandles&&o,!this.hasHistogram&&!this.precise&&this.labelHandles&&c,!this.hasHistogram&&this.precise&&!this.labelHandles&&d,this.hasHistogram&&this.precise&&!this.labelHandles&&m,!this.hasHistogram&&this.precise&&this.labelHandles&&b,this.hasHistogram&&!this.precise&&this.labelHandles&&u,this.hasHistogram&&this.precise&&this.labelHandles&&p)}renderGraph(){return this.histogram?i("div",{class:"graph"},i("calcite-graph",{data:this.histogram,height:48,highlightMax:this.isRange?this.maxValue:this.value,highlightMin:this.isRange?this.minValue:this.min,width:300})):null}renderTickLabel(t){const a=t===this.min,e=t===this.max,s=i("span",{class:{tick__label:!0,"tick__label--min":a,"tick__label--max":e}},t.toLocaleString());return this.labelTicks&&!this.hasHistogram&&!this.isRange||this.labelTicks&&!this.hasHistogram&&this.isRange&&!this.precise&&!this.labelHandles||this.labelTicks&&!this.hasHistogram&&this.isRange&&!this.precise&&this.labelHandles||this.labelTicks&&!this.hasHistogram&&this.isRange&&this.precise&&(a||e)||this.labelTicks&&this.hasHistogram&&!this.precise&&!this.labelHandles||this.labelTicks&&this.hasHistogram&&this.precise&&!this.labelHandles&&(a||e)||this.labelTicks&&this.hasHistogram&&!this.precise&&this.labelHandles&&(a||e)||this.labelTicks&&this.hasHistogram&&this.precise&&this.labelHandles&&(a||e)?s:null}handleLabelFocus(t){t.detail.interactedEl!==this.el&&h(t.detail.labelEl,this.el)&&this.setFocus()}keyDownHandler(t){const a=this[this.activeProp];switch(l(t.key)){case"ArrowUp":case"ArrowRight":t.preventDefault(),this[this.activeProp]=this.bound(a+this.step,this.activeProp),this.emitChange();break;case"ArrowDown":case"ArrowLeft":t.preventDefault(),this[this.activeProp]=this.bound(a-this.step,this.activeProp),this.emitChange();break;case"PageUp":this.pageStep&&(t.preventDefault(),this[this.activeProp]=this.bound(a+this.pageStep,this.activeProp),this.emitChange());break;case"PageDown":this.pageStep&&(t.preventDefault(),this[this.activeProp]=this.bound(a-this.pageStep,this.activeProp),this.emitChange());break;case"Home":t.preventDefault(),this[this.activeProp]=this.bound(this.min,this.activeProp),this.emitChange();break;case"End":t.preventDefault(),this[this.activeProp]=this.bound(this.max,this.activeProp),this.emitChange()}}clickHandler(t){const a=this.translate(t.clientX||t.pageX);let e="value";switch(this.isRange&&(e="minMaxValue"===this.lastDragProp?"minMaxValue":Math.abs(this.maxValue-a)<Math.abs(this.minValue-a)?"maxValue":"minValue"),this[e]=this.bound(a,e),this.emitChange(),e){default:case"maxValue":this.maxHandle.focus();break;case"minValue":this.minHandle.focus();break;case"minMaxValue":}}async setFocus(){(this.minHandle?this.minHandle:this.maxHandle).focus()}generateTickValues(){const t=[];let a=this.min;for(;this.ticks&&a<this.max+this.ticks;)t.push(a),a+=this.ticks;return t}dragStart(t,a){a&&a.preventDefault(),this.dragListener&&this.dragEnd(),this.dragProp=t,this.lastDragProp=this.dragProp,this.activeProp=t,this.dragListener=this.dragListener||this.dragUpdate.bind(this),document.addEventListener("mousemove",this.dragListener),document.addEventListener("touchmove",this.dragListener,{capture:!1}),document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),!1),document.addEventListener("touchcancel",this.dragEnd.bind(this))}dragUpdate(t){if(t.preventDefault(),t.stopPropagation(),this.dragProp){const a=this.translate(t.clientX||t.pageX);if(this.isRange&&"minMaxValue"===this.dragProp)if(this.minValueDragRange&&this.maxValueDragRange&&this.minMaxValueRange){const t=a-this.minValueDragRange,e=a+this.maxValueDragRange;e<=this.max&&t>=this.min&&e-t===this.minMaxValueRange&&(this.minValue=this.bound(t,"minValue"),this.maxValue=this.bound(e,"maxValue"))}else this.minValueDragRange=a-this.minValue,this.maxValueDragRange=this.maxValue-a,this.minMaxValueRange=this.maxValue-this.minValue;else this[this.dragProp]=this.bound(a,this.dragProp);this.emitChange()}}emitChange(){this.calciteSliderChange.emit(),this.calciteSliderUpdate.emit()}dragEnd(){this.dragProp=null,document.removeEventListener("mousemove",this.dragListener),document.removeEventListener("touchmove",this.dragListener),this.minValueDragRange=null,this.maxValueDragRange=null,this.minMaxValueRange=null}bound(t,a){return t=Math.min(t,this.max),t=Math.max(t,this.min),"maxValue"===a&&(t=Math.max(t,this.minValue)),"minValue"===a&&(t=Math.min(t,this.maxValue)),t}translate(t){const a=this.max-this.min,{left:e,width:i}=this.el.getBoundingClientRect();let s=this.bound(this.min+a*((t-e)/i));return this.snap&&this.step&&(s=this.getClosestStep(s)),s}getClosestStep(t){if(t=this.bound(t),this.step){const a=Math.round(t/this.step)*this.step;t=this.bound(a)}return t}getFontSizeForElement(t){return Number(window.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)[0])}getUnitInterval(t){return((t=this.bound(t))-this.min)/(this.max-this.min)}adjustHostObscuredHandleLabel(t){const a=this.el.shadowRoot.querySelector(`.handle__label--${t}`),e=this.el.shadowRoot.querySelector(`.handle__label--${t}.static`),i=this.el.shadowRoot.querySelector(`.handle__label--${t}.transformed`),s=this.getHostOffset(e.getBoundingClientRect().left,e.getBoundingClientRect().right);a.style.transform=`translateX(${s}px)`,i.style.transform=`translateX(${s}px)`}hyphenateCollidingRangeHandleLabels(){const t=this.el.shadowRoot.querySelector(".handle__label--minValue"),a=this.el.shadowRoot.querySelector(".handle__label--minValue.static"),e=this.el.shadowRoot.querySelector(".handle__label--minValue.transformed"),i=this.getHostOffset(a.getBoundingClientRect().left,a.getBoundingClientRect().right),s=this.el.shadowRoot.querySelector(".handle__label--value"),l=this.el.shadowRoot.querySelector(".handle__label--value.static"),n=this.el.shadowRoot.querySelector(".handle__label--value.transformed"),r=this.getHostOffset(l.getBoundingClientRect().left,l.getBoundingClientRect().right),h=this.getFontSizeForElement(t),o=this.getRangeLabelOverlap(e,n);if(o>0)if(t.classList.add("hyphen"),0===r&&0===i){let a=o/2-h/2;a=-1===Math.sign(a)?Math.abs(a):-a;const i=this.getHostOffset(e.getBoundingClientRect().left+a-h/2,e.getBoundingClientRect().right+a-h/2);let l=o/2;const r=this.getHostOffset(n.getBoundingClientRect().left+l,n.getBoundingClientRect().right+l);0!==i&&(a+=i,l+=i),0!==r&&(a+=r,l+=r),t.style.transform=`translateX(${a}px)`,e.style.transform=`translateX(${a-h/2}px)`,s.style.transform=`translateX(${l}px)`,n.style.transform=`translateX(${l}px)`}else if(0===i||0!==Math.sign(r)&&1!==Math.sign(r)){if(0!==r){let a=Math.abs(i)+o-h/2;a=-1===Math.sign(a)?Math.abs(a):-a,t.style.transform=`translateX(${a}px)`,e.style.transform=`translateX(${a-h/2}px)`}}else t.style.transform=`translateX(${i+h/2}px)`,s.style.transform=`translateX(${o+r}px)`,n.style.transform=`translateX(${o+r}px)`;else t.classList.remove("hyphen"),t.style.transform=`translateX(${i}px)`,e.style.transform=`translateX(${i}px)`,s.style.transform=`translateX(${r}px)`,n.style.transform=`translateX(${r}px)`}hideObscuredBoundingTickLabels(){if(!(this.hasHistogram||this.isRange||this.labelHandles||this.precise))return;if(!this.hasHistogram&&!this.isRange&&this.labelHandles&&!this.precise)return;if(!this.hasHistogram&&!this.isRange&&!this.labelHandles&&this.precise)return;if(!this.hasHistogram&&!this.isRange&&this.labelHandles&&this.precise)return;if(!this.hasHistogram&&this.isRange&&!this.precise)return;if(this.hasHistogram&&!this.precise&&!this.labelHandles)return;const t=this.el.shadowRoot.querySelector(".thumb--minValue"),a=this.el.shadowRoot.querySelector(".thumb--value"),e=this.el.shadowRoot.querySelector(".tick__label--min"),i=this.el.shadowRoot.querySelector(".tick__label--max");!t&&a&&e&&i&&(e.style.opacity=this.isMinTickLabelObscured(e,a)?"0":"1",i.style.opacity=this.isMaxTickLabelObscured(i,a)?"0":"1"),t&&a&&e&&i&&(e.style.opacity=this.isMinTickLabelObscured(e,t)||this.isMinTickLabelObscured(e,a)?"0":"1",i.style.opacity=this.isMaxTickLabelObscured(i,t)||this.isMaxTickLabelObscured(i,a)&&this.hasHistogram?"0":"1")}getHostOffset(t,a){const e=this.el.getBoundingClientRect();return t+7<e.left?e.left-t-7:a-7>e.right?7-(a-e.right):0}getRangeLabelOverlap(t,a){const e=t.getBoundingClientRect(),i=a.getBoundingClientRect(),s=this.getFontSizeForElement(t),l=e.right+s-i.left;return l>0?l:0}isMinTickLabelObscured(t,a){const e=t.getBoundingClientRect();return a.getBoundingClientRect().left<e.right}isMaxTickLabelObscured(t,a){const e=t.getBoundingClientRect();return a.getBoundingClientRect().right>e.left}get el(){return e(this)}static get watchers(){return{histogram:["histogramWatcher"]}}};r.style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{display:block;padding:7px 0;margin:7px 0;position:relative}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) .graph .graph-path--highlight{fill:var(--calcite-ui-text-3)}:host([label-handles]),:host([precise]:not([precise=false])){margin-top:21px}:host([label-ticks]),:host([precise]:not([precise=false])[is-range]){margin-bottom:21px}:host([precise]:not([precise=false])[label-handles]){margin-top:35px}:host([precise]:not([precise=false])[label-handles][is-range]){margin-bottom:35px}.thumb{position:absolute;border:none;background:transparent;cursor:pointer;font-family:inherit;z-index:2;outline:none;padding:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-webkit-transform:translate(7px, -8px);transform:translate(7px, -8px)}.thumb .handle__label{font-size:0.75rem;line-height:1.5;font-weight:500;line-height:1;color:var(--calcite-ui-text-2);margin-bottom:5px}.thumb .handle__label.static,.thumb .handle__label.transformed{opacity:0;position:absolute;top:0;bottom:0}.thumb .handle__label--minValue.hyphen::after{content:"—";display:inline-block;width:1em}.thumb .handle{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;height:14px;width:14px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;-webkit-transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, -webkit-box-shadow 0.25s ease}.thumb .handle-extension{width:2px;height:7px;background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{-webkit-box-shadow:0 0 0 3px var(--calcite-ui-brand) inset;box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-brand);outline-offset:2px;outline-offset:2px}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb--minValue{-webkit-transform:translate(-7px, -8px);transform:translate(-7px, -8px)}:host([label-handles]) .thumb{-webkit-transform:translate(50%, -25px);transform:translate(50%, -25px)}:host([label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -25px);transform:translate(-50%, -25px)}:host([has-histogram][label-handles]) .thumb{-webkit-transform:translate(50%, -8px);transform:translate(50%, -8px)}:host([has-histogram][label-handles]) .thumb .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][label-handles]) .thumb--minValue{-webkit-transform:translate(-50%, -8px);transform:translate(-50%, -8px)}:host([precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -21px);transform:translate(7px, -21px)}:host([precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -2px);transform:translate(-7px, -2px)}:host([precise]:not([precise=false])) .thumb--minValue .handle__label{margin-bottom:unset;margin-top:5px}:host([has-histogram][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -2px);transform:translate(7px, -2px)}:host([has-histogram][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -20px);transform:translate(7px, -20px)}:host([ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-7px, -3px);transform:translate(-7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb{-webkit-transform:translate(7px, -3px);transform:translate(7px, -3px)}:host([has-histogram][ticks][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -38px);transform:translate(50%, -38px)}:host([label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -2px);transform:translate(50%, -2px)}:host([has-histogram][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -2px);transform:translate(-50%, -2px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -37px);transform:translate(50%, -37px)}:host([ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb{-webkit-transform:translate(50%, -3px);transform:translate(50%, -3px)}:host([has-histogram][ticks][label-handles][precise]:not([precise=false])) .thumb--minValue{-webkit-transform:translate(-50%, -3px);transform:translate(-50%, -3px)}.thumb:focus,.thumb--active{z-index:3}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{height:2px;border-radius:0;z-index:1;background-color:var(--calcite-ui-border-2);-webkit-transition:all 250ms ease-in;transition:all 250ms ease-in;position:relative}.track__range{position:absolute;top:0;height:2px;background-color:var(--calcite-ui-brand)}:host([is-range]) .track__range:hover{cursor:ew-resize}:host([is-range]) .track__range:after{content:"";position:absolute;top:-5px;width:100%;height:14px}.tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-ui-border-1-offset);margin-left:-2px;border:1px solid var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-border-1)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{position:absolute;font-size:0.75rem;line-height:1.5;font-weight:500;color:var(--calcite-ui-text-2);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.tick__label--min{left:0;margin:14px -3px;text-align:left;-webkit-transition:opacity 150ms;transition:opacity 150ms}.tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right;-webkit-transition:opacity 50ms;transition:opacity 50ms}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}:host([has-histogram][precise]:not([precise=false])) .tick__label--min,:host([has-histogram][precise]:not([precise=false])) .tick__label--max{margin:6px -3px;font-weight:300;color:var(--calcite-ui-text-3)}.graph{width:100%;height:48px;position:relative;color:var(--calcite-ui-foreground-2)}.graph svg{position:absolute;width:100%;height:48px}.graph .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.25}';export{r as calcite_slider};