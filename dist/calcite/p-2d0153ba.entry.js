import{r as e,h as t,g as r,H as a}from"./p-0f61cfe6.js";import{g as i,c as o}from"./p-fbd3d700.js";import{C as s}from"./p-28355066.js";const l=class{constructor(t){e(this,t),this.detached=!1,this.heightScale="s",this.position="end"}render(){const{el:e}=this,r="rtl"===i(e),l=t("div",{class:{content:!0,[s.rtl]:r}},t("slot",null)),n=o(e,"action-bar"),c=[n?t("div",{class:{"action-bar-container":!0,[s.rtl]:r}},t("slot",{name:"action-bar"})):null,l];return"end"===(null==n?void 0:n.position)&&c.reverse(),t(a,null,c)}get el(){return r(this)}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;overflow:hidden;-webkit-transition:height 150ms ease-in-out;transition:height 150ms ease-in-out;background-color:transparent;border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3);--calcite-shell-center-row-height-small:33%;--calcite-shell-center-row-height-medium:70%;--calcite-shell-center-row-height-large:100%;--calcite-shell-center-row-border:1px solid var(--calcite-ui-border-3)}.content{display:-ms-flexbox;display:flex;-ms-flex:1 0 0px;flex:1 0 0;height:100%;margin:0;overflow:hidden;width:100%}.action-bar-container{display:-ms-flexbox;display:flex}:host([detached]){border-width:0;border-radius:0.25rem;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);margin-top:0.5rem;margin-bottom:1.5rem;margin-left:0.5rem;margin-right:0.5rem;-webkit-animation:in-up 300ms ease-in-out;animation:in-up 300ms ease-in-out}:host([position=end]){-ms-flex-item-align:end;align-self:flex-end}:host([position=start]){-ms-flex-item-align:start;align-self:flex-start}:host([height-scale=s]){height:var(--calcite-shell-center-row-height-small)}:host([height-scale=m]){height:var(--calcite-shell-center-row-height-medium)}:host([height-scale=l]){height:var(--calcite-shell-center-row-height-large)}:host([height-scale=l][detached]){height:calc(var(--calcite-shell-center-row-height-large) - var(--calcite-spacing-double))}::slotted(calcite-panel){width:100%;height:100%}::slotted(calcite-action-bar){border-right:var(--calcite-shell-center-row-border)}::slotted(calcite-action-bar[position=end]){border-right:none;border-left:var(--calcite-shell-center-row-border)}.calcite--rtl ::slotted(calcite-action-bar){border-right:none;border-left:var(--calcite-shell-center-row-border)}.calcite--rtl ::slotted(calcite-action-bar[position=end]){border-left:none;border-right:var(--calcite-shell-center-row-border)}";export{l as calcite_shell_center_row};