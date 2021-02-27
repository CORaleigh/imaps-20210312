System.register(["./p-4105a996.system.js","./p-466a0799.system.js","./p-ca2edda0.system.js"],(function(t){"use strict";var e,r,a,i,n,s,c,o;return{setters:[function(t){e=t.r,r=t.h,a=t.g,i=t.H},function(t){n=t.g,s=t.a},function(t){c=t.h,o=t.i}],execute:function(){function l(t){return function(t){var e=t.r,r=t.g,a=t.b;e/=255,r/=255,a/=255;var i=Math.max(e,r,a),n=Math.min(e,r,a),s=i-n;if(i===n)return 0;var c=(i+n)/2;switch(i){case e:c=(r-a)/s+(r<a?6:0);break;case r:c=(a-e)/s+2;break;case a:c=(e-r)/s+4}return Math.round(60*c)}(c(t))}t("calcite_avatar",function(){function t(t){e(this,t),this.scale="m",this.error=!1}return t.prototype.render=function(){var t=n(this.el),e=this.determineContent();return r(i,{dir:t},e)},t.prototype.determineContent=function(){var t=this;if(this.thumbnail&&!this.error)return r("img",{alt:"",class:"thumbnail",onError:function(){return t.error=!0},src:this.thumbnail});var e=this.generateInitials(),a=this.generateFillColor();return r("span",{class:"background",style:{backgroundColor:a}},e?r("span",{"aria-hidden":"true",class:"initials"},e):r("calcite-icon",{class:"icon",icon:"user",scale:this.scale,theme:this.theme}))},t.prototype.generateFillColor=function(){var t=this,e=t.userId,r=t.username,a=t.fullName,i=s(this.el),n=e&&"#"+e.substr(e.length-6),c=r||a||"",f=n&&o(n)?n:function(t){for(var e=0,r=0;r<t.length;r++)e=t.charCodeAt(r)+((e<<5)-e);for(var a="#",i=0;i<3;i++)a+=("00"+(e>>8*i&255).toString(16)).substr(-2);return a}(c);return(e||c)&&o(f)?"hsl("+l(f)+", 60%, "+("dark"===i?20:90)+"%)":"var(--calcite-ui-foreground-2)"},t.prototype.generateInitials=function(){var t=this.fullName,e=this.username;return t?t.trim().split(" ").map((function(t){return t.substring(0,1)})).join(""):!!e&&e.substring(0,2)},Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-brand:#009AF2;--calcite-ui-brand-hover:#007AC2;--calcite-ui-brand-press:#00619B;--calcite-ui-background:#353535;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#202020;--calcite-ui-foreground-3:#151515;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-text-inverse:#151515;--calcite-ui-text-link:#00A0FF;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-input:#757575;--calcite-ui-info:#00A0FF;--calcite-ui-success:#36DA43;--calcite-ui-warning:#FFC900;--calcite-ui-danger:#FE583E;--calcite-ui-danger-hover:#FF0015;--calcite-ui-danger-press:#D90012}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden}:host([scale=s]){width:1.5rem;height:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){width:2rem;height:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){width:2.5rem;height:2.5rem;font-size:var(--calcite-font-size--1)}.icon{display:-ms-flexbox;display:flex}.background{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{width:100%;height:100%;border-radius:50%}"}}}));