var __spreadArrays=this&&this.__spreadArrays||function(){for(var r=0,t=0,n=arguments.length;t<n;t++)r+=arguments[t].length;var e=Array(r),u=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,u++)e[u]=o[i];return e};System.register([],(function(r){"use strict";return{execute:function(){function t(r,t,n,e){void 0===e&&(e=!1);var u="["+t+"]",o=e?function(r,t){void 0===t&&(t=this);function n(t){if(!t||t===document||t===window)return null;var e=t.closest(r);return e||n(t.getRootNode().host)}return n(t)}(u,r):r.closest(u);return o?o.getAttribute(t):n}r({a:function(r){return t(r,"theme","light")},b:t,c:function(r,t,n){var e='[slot="'+t+'"]';if(null==n?void 0:n.all)return function(r,t,n){var e=Array.from(r.querySelectorAll(t));e=n&&!1===n.direct?e:e.filter((function(t){return t.parentElement===r}));var u=null==n?void 0:n.selector;return u?e.map((function(r){return Array.from(r.querySelectorAll(u))})).reduce((function(r,t){return __spreadArrays(r,t)}),[]).filter((function(r){return!!r})):e}(r,e,n);return function(r,t,n){var e=r.querySelector(t);e=n&&!1===n.direct||(null==e?void 0:e.parentElement)===r?e:null;var u=null==n?void 0:n.selector;return u?e.querySelector(u):e}(r,e,n)},d:function(r,t){var n=null==r?void 0:r.getAttribute(t);return n&&document.getElementById(n)||null},e:function(r,t){return Array.from(r.children).filter((function(r){return r.matches(t)}))},f:function(r){if(!r)return;"function"==typeof r.setFocus?r.setFocus():r.focus()},g:function(r){return t(r,"dir","ltr")},h:function(r,t){return r.contains(t)},n:function(r){return Array.isArray(r)?r:Array.from(r)},s:function(r,t,n){if("string"==typeof t&&""!==t)return t;if(""===t)return r[n]}})}}}));