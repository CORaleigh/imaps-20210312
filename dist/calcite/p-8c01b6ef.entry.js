import{r as e,h as a,H as r,g as t}from"./p-0f61cfe6.js";import{g as s}from"./p-a4e6e35b.js";const i=class{constructor(a){e(this,a),this.active=!1,this.inline=!1,this.scale="m",this.value=0,this.text=""}render(){const{el:e,inline:t,label:i,scale:o,text:n,type:l,value:m}=this,d=e.id||s(),f=t?this.getInlineSize(o):this.getSize(o),c=.45*f,k=`0 0 ${f} ${f}`,h="determinate"===l,p=2*c*Math.PI,b=m/100*p,g=p-b,y=Math.floor(m),w={r:c,cx:f/2,cy:f/2},v={"stroke-dasharray":`${b} ${g}`};return a(r,Object.assign({"aria-label":i,id:d,role:"progressbar"},h?{"aria-valuenow":y,"aria-valuemin":0,"aria-valuemax":100,complete:100===y}:{}),a("div",{class:"loader__svgs"},a("svg",{class:"loader__svg loader__svg--1",viewBox:k},a("circle",Object.assign({},w))),a("svg",{class:"loader__svg loader__svg--2",viewBox:k},a("circle",Object.assign({},w))),a("svg",Object.assign({class:"loader__svg loader__svg--3",viewBox:k},h?{style:v}:{}),a("circle",Object.assign({},w)))),n&&a("div",{class:"loader__text"},n),h&&a("div",{class:"loader__percentage"},m))}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}get el(){return t(this)}};i.style='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;display:none;padding-bottom:4rem;padding-top:4rem;margin-left:auto;margin-right:auto;min-height:var(--loader-size);stroke:var(--calcite-ui-brand);stroke-width:3;fill:none;opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1);animation:loader-color-shift 6s alternate-reverse infinite linear}:host([scale=s]){--loader-size:33px;--loader-size-inline:13px;font-size:0.8125rem;line-height:1.5}:host([scale=s]) .loader__percentage{font-size:0.625rem}:host([scale=m]){--loader-size:57px;--loader-size-inline:17px;font-size:0.875rem;line-height:1.5}:host([scale=m]) .loader__percentage{font-size:0.875rem}:host([scale=l]){--loader-size:81px;--loader-size-inline:21px;font-size:0.9375rem;line-height:1.5}:host([scale=l]) .loader__percentage{font-size:1.25rem}:host([no-padding]){padding-top:0;padding-bottom:0}:host([active]){display:-ms-flexbox;display:flex}.loader__text{display:block;margin-top:calc(var(--loader-size) + 3rem);text-align:center}.loader__percentage{display:block;width:var(--loader-size);position:absolute;top:4rem;left:50%;margin-left:calc(var(--loader-size) / 2 * -1);margin-top:calc(var(--loader-size) / 2);text-align:center;color:var(--calcite-ui-text-1);line-height:0.25;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svgs{width:var(--loader-size);height:var(--loader-size);position:absolute;top:4rem;left:50%;margin-left:calc(var(--loader-size) / 2 * -1);overflow:visible;opacity:1;-webkit-transform:scale(1, 1);transform:scale(1, 1)}.loader__svg{width:var(--loader-size);height:var(--loader-size);position:absolute;top:0;left:0;overflow:visible;-webkit-transform-origin:center;transform-origin:center;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:loader-clockwise;animation-name:loader-clockwise}@supports (display: grid){.loader__svg--1{-webkit-animation-name:loader-offset-1;animation-name:loader-offset-1}.loader__svg--2{-webkit-animation-name:loader-offset-2;animation-name:loader-offset-2}.loader__svg--3{-webkit-animation-name:loader-offset-3;animation-name:loader-offset-3}}:host([type=determinate]){stroke:var(--calcite-ui-border-3);-webkit-animation:none;animation:none}:host([type=determinate]) .loader__svg--3{stroke:var(--calcite-ui-brand);stroke-dasharray:157.0795;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-animation:none;animation:none;-webkit-transition:all 100ms linear;transition:all 100ms linear}:host([inline]){stroke:currentColor;stroke-width:2;-webkit-animation:none;animation:none;margin:0;padding-bottom:0;padding-top:0;position:relative;height:var(--loader-size-inline);min-height:var(--loader-size-inline);width:var(--loader-size-inline);margin-right:var(--loader-size-inline)/2;vertical-align:-var(--loader-size-inline)/5}:host([inline][dir=rtl]){margin-left:var(--loader-size-inline)/2;margin-right:0}:host([active][inline]){display:inline-block}:host([inline]) .loader__svgs{top:0;left:0;margin:0;width:var(--loader-size-inline);height:var(--loader-size-inline)}:host([inline]) .loader__svg{width:var(--loader-size-inline);height:var(--loader-size-inline)}:host([complete]){opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms;transition:opacity 200ms linear 1000ms, transform 200ms linear 1000ms, -webkit-transform 200ms linear 1000ms}:host([complete]) .loader__svgs{opacity:0;-webkit-transform:scale(0.75, 0.75);transform:scale(0.75, 0.75);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, -webkit-transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms;transition:opacity 180ms linear 800ms, transform 180ms linear 800ms, -webkit-transform 180ms linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-ui-brand);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, -webkit-transform 200ms linear;transition:color 200ms linear, transform 200ms linear;transition:color 200ms linear, transform 200ms linear, -webkit-transform 200ms linear}.loader__svg--1{stroke-dasharray:28.0499107143% 140.2495535714%;-webkit-animation-duration:0.72s;animation-duration:0.72s}@-webkit-keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}100%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}@keyframes loader-offset-1{0%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-84.1497321429%}100%{stroke-dasharray:28.0499107143% 252.4491964286%;stroke-dashoffset:-280.4991071429%}}.loader__svg--2{stroke-dasharray:56.0998214286% 140.2495535714%;-webkit-animation-duration:0.96s;animation-duration:0.96s}@-webkit-keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}100%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}@keyframes loader-offset-2{0%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-98.1746875%}100%{stroke-dasharray:56.0998214286% 224.3992857143%;stroke-dashoffset:-280.4991071429%}}.loader__svg--3{stroke-dasharray:14.0249553571% 140.2495535714%;-webkit-animation-duration:1.16s;animation-duration:1.16s}@-webkit-keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}100%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}@keyframes loader-offset-3{0%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:0}50%{stroke-dasharray:140.2495535714% 140.2495535714%;stroke-dashoffset:-77.1372544643%}100%{stroke-dasharray:14.0249553571% 266.4741517857%;stroke-dashoffset:-280.4991071429%}}@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@keyframes loader-color-shift{0%{stroke:var(--calcite-ui-brand)}33%{stroke:var(--calcite-ui-brand-press)}66%{stroke:var(--calcite-ui-brand-hover)}100%{stroke:var(--calcite-ui-brand)}}@-webkit-keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}';export{i as calcite_loader}