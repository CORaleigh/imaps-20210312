var __awaiter=this&&this.__awaiter||function(t,e,i,a){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function s(t){try{l(a.next(t))}catch(t){r(t)}}function o(t){try{l(a.throw(t))}catch(t){r(t)}}function l(t){t.done?i(t.value):n(t.value).then(s,o)}l((a=a.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var i,a,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(t){return function(e){return l([t,e])}}function l(r){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,a&&(n=2&r[0]?a.return:r[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,r[1])).done)return n;switch(a=0,n&&(r=[2&r[0],n.value]),r[0]){case 0:case 1:n=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,a=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){s.label=r[1];break}if(6===r[0]&&s.label<n[1]){s.label=n[1],n=r;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(r);break}n[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],a=0}finally{i=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};System.register(["./p-4105a996.system.js","./p-466a0799.system.js"],(function(t){"use strict";var e,i,a,n,r,s;return{setters:[function(t){e=t.r,i=t.c,a=t.h,n=t.H,r=t.g},function(t){s=t.g}],execute:function(){var o="page",l="is-selected",c="previous",u="next",p="is-disabled",h="ellipsis",f="ellipsis--start",d="ellipsis--end",m="next",b="previous";t("calcite_pagination",function(){function t(t){var a=this;e(this,t),this.calcitePaginationUpdate=i(this,"calcitePaginationUpdate",7),this.calcitePaginationChange=i(this,"calcitePaginationChange",7),this.num=20,this.start=1,this.total=0,this.textLabelNext=m,this.textLabelPrevious=b,this.scale="m",this.previousClicked=function(){a.previousPage().then(),a.emitUpdate()},this.nextClicked=function(){a.nextPage(),a.emitUpdate()}}return t.prototype.nextPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.start=Math.min(this.getLastStart(),this.start+this.num),[2]}))}))},t.prototype.previousPage=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.start=Math.max(1,this.start-this.num),[2]}))}))},t.prototype.getLastStart=function(){var t=this.total,e=this.num;return(t%e==0?t-e:Math.floor(t/e)*e)+1},t.prototype.showLeftEllipsis=function(){return Math.floor(this.start/this.num)>3},t.prototype.showRightEllipsis=function(){return(this.total-this.start)/this.num>3},t.prototype.emitUpdate=function(){var t={start:this.start,total:this.total,num:this.num};this.calcitePaginationChange.emit(t),this.calcitePaginationUpdate.emit(t)},t.prototype.renderPages=function(){var t,e,i=this,a=this.getLastStart();this.total/this.num<=5?(e=1+this.num,t=a-this.num):this.start/this.num<4?(e=1+this.num,t=1+4*this.num):this.start+3*this.num>=this.total?(e=a-4*this.num,t=a-this.num):(e=this.start-this.num,t=this.start+this.num);for(var n=[];e<=t;)n.push(e),e+=this.num;return n.map((function(t){return i.renderPage(t)}))},t.prototype.renderPage=function(t){var e,i=this,n=Math.floor(t/this.num)+(1===this.num?0:1);return a("button",{class:(e={},e[o]=!0,e[l]=t===this.start,e),onClick:function(){i.start=t,i.emitUpdate()}},n)},t.prototype.renderLeftEllipsis=function(t){if(this.total/this.num>5&&this.showLeftEllipsis())return a("span",{class:h+" "+f},a("calcite-icon",{icon:"ellipsis",scale:t}))},t.prototype.renderRightEllipsis=function(t){if(this.total/this.num>5&&this.showRightEllipsis())return a("span",{class:h+" "+d},a("calcite-icon",{icon:"ellipsis",scale:t}))},t.prototype.render=function(){var t,e,i=s(this.el),r=this,o=r.total,l=r.num,h=r.start,f="l"===this.scale?"m":"s",d=1===l?h<=l:h<l,m=h+l>o;return a(n,{dir:i},a("button",{"aria-label":this.textLabelPrevious,class:(t={},t[c]=!0,t[p]=d,t),disabled:d,onClick:this.previousClicked},a("calcite-icon",{dir:i,flipRtl:!0,icon:"chevronLeft",scale:f})),o>l?this.renderPage(1):null,this.renderLeftEllipsis(f),this.renderPages(),this.renderRightEllipsis(f),this.renderPage(this.getLastStart()),a("button",{"aria-label":this.textLabelNext,class:(e={},e[u]=!0,e[p]=m,e),disabled:m,onClick:this.nextClicked},a("calcite-icon",{dir:i,flipRtl:!0,icon:"chevronRight",scale:f})))},Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host([scale=s]){--calcite-pagination-spacing:4px 8px}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{font-size:12px}:host([scale=m]){--calcite-pagination-spacing:8px 12px}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{font-size:16px}:host([scale=l]){--calcite-pagination-spacing:12px 16px}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{font-size:20px}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-writing-mode:lr-tb;-webkit-writing-mode:horizontal-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:transparent;border:none;border-top:3px solid transparent;border-bottom:3px solid transparent;font-family:inherit;font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-3);cursor:pointer}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:500;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-brand)}.previous,.next{padding:var(--calcite-pagination-spacing)}.previous:hover,.next:hover{color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-2)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{background-color:transparent;pointer-events:none}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}.next{margin-right:0}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}"}}}));