function n(t){return Array.isArray(t)?t:Array.from(t)}function t(t){return u(t,"dir","ltr")}function r(t){return u(t,"theme","light")}function u(t,n,e,r=!1){const o=`[${n}]`,u=r?function(t,n=this){return function n(e){return e&&e!==document&&e!==window?e.closest(t)||n(e.getRootNode().host):null}(n)}(o,t):t.closest(o);return u?u.getAttribute(n):e}function o(t){t&&("function"==typeof t.setFocus?t.setFocus():t.focus())}function i(t,n,e){const r=`[slot="${n}"]`;return(null==e?void 0:e.all)?function(t,n,e){let r=Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter((n=>n.parentElement===t));const o=null==e?void 0:e.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):r}(t,r,e):function(t,n,e){let r=t.querySelector(n);r=e&&!1===e.direct||(null==r?void 0:r.parentElement)===t?r:null;const o=null==e?void 0:e.selector;return o?r.querySelector(o):r}(t,r,e)}function c(t,n){return Array.from(t.children).filter((t=>t.matches(n)))}function e(t,n){const e=null==t?void 0:t.getAttribute(n);return e&&document.getElementById(e)||null}function l(t,n){return t.contains(n)}function s(t,n,e){return"string"==typeof n&&""!==n?n:""===n?t[e]:void 0}export{r as a,u as b,i as c,e as d,c as e,o as f,t as g,l as h,n,s};