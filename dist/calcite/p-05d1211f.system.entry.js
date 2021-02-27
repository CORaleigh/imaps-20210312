System.register(["./p-4105a996.system.js","./p-2c235db8.system.js"],(function(t){"use strict";var a,n,r,e;return{setters:[function(t){a=t.r,n=t.h,r=t.g},function(t){e=t.g}],execute:function(){function i(t){return t<0?-1:1}function s(t,a,n){var r=a[0]-t[0],e=n[0]-a[0],s=(a[1]-t[1])/(r||e<0&&0),o=(n[1]-a[1])/(e||r<0&&0),h=(s*e+o*r)/(r+e);return(i(s)+i(o))*Math.min(Math.abs(s),Math.abs(o),.5*Math.abs(h))||0}function o(t,a,n){var r=a[0]-t[0],e=a[1]-t[1];return r?(3*e/r-n)/2:n}function h(t,a,n,r,e){var i=t[0],s=t[1],o=a[0],h=a[1],c=(o-i)/3;return"C "+e([i+c,s+c*n]).join(",")+" "+e([o-c,h-c*r]).join(",")+" "+e([o,h]).join(",")}function c(t){var a=t.data,n=t.min,r=t.max,e=t.t;if(0===a.length)return"";var i,c,m,p=e(a[0]),l=p[0],f=p[1],u=e(n),d=u[0],g=u[1],y=e(r)[0],k=a.reduce((function(t,n,r){if(c=a[r-2],m=a[r-1],r>1){var p=s(c,m,n),l=void 0===i?o(c,m,p):i,f=h(c,m,l,p,e);return i=p,t+" "+f}return t}),"M "+d+","+g+" L "+d+","+f+" L "+l+","+f),w=a[a.length-1];return k+" "+h(m,w,i,o(m,w,i),e)+" L "+y+","+g+" Z"}t("calcite_graph",function(){function t(t){a(this,t),this.data=[],this.width=300,this.height=100,this.maskId="calcite-graph-mask-"+e()}return t.prototype.render=function(){var t=this,a=t.data,r=t.width,e=t.height,i=t.highlightMax,s=t.highlightMin,o=this.maskId;if(!a||0===a.length)return n("svg",{class:"svg",height:e,preserveAspectRatio:"none",viewBox:"0 0 "+r+" "+e,width:r});var h=function(t){var a=t[0],n=a[0],r=a[1],e=[n,r],i=[n,r];return t.reduce((function(t,a){var n=t.min,r=t.max,e=a[0],i=a[1];return{min:[Math.min(n[0],e),Math.min(n[1],i)],max:[Math.max(r[0],e),Math.max(r[1],i)]}}),{min:e,max:i})}(a),m=h.min,p=h.max,l=function(t){var a=t.width,n=t.height,r=t.min,e=t.max,i=e[0]-r[0],s=e[1]-r[1];return function(t){return[t[0]/i*a,n-t[1]/s*n]}}({min:m,max:p,width:r,height:e}),f=l([s,p[1]])[0],u=l([i,p[1]])[0],d=c({data:a,min:m,max:p,t:l});return n("svg",{class:"svg",height:e,preserveAspectRatio:"none",viewBox:"0 0 "+r+" "+e,width:r},void 0!==s?n("svg",{class:"svg",height:e,preserveAspectRatio:"none",viewBox:"0 0 "+r+" "+e,width:r},n("mask",{height:"100%",id:o+"1",width:"100%",x:"0%",y:"0%"},n("path",{d:"\n              M 0,0\n              L "+(f-1)+",0\n              L "+(f-1)+","+e+"\n              L 0,"+e+"\n              Z\n            ",fill:"white"})),n("mask",{height:"100%",id:o+"2",width:"100%",x:"0%",y:"0%"},n("path",{d:"\n              M "+(f+1)+",0\n              L "+(u-1)+",0\n              L "+(u-1)+","+e+"\n              L "+(f+1)+", "+e+"\n              Z\n            ",fill:"white"})),n("mask",{height:"100%",id:o+"3",width:"100%",x:"0%",y:"0%"},n("path",{d:"\n                  M "+(u+1)+",0\n                  L "+r+",0\n                  L "+r+","+e+"\n                  L "+(u+1)+", "+e+"\n                  Z\n                ",fill:"white"})),n("path",{class:"graph-path",d,mask:"url(#"+o+"1)"}),n("path",{class:"graph-path--highlight",d,mask:"url(#"+o+"2)"}),n("path",{class:"graph-path",d,mask:"url(#"+o+"3)"})):n("path",{class:"graph-path",d}))},Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}.svg{fill:currentColor;stroke:transparent;margin:0;padding:0;display:block}"}}}));