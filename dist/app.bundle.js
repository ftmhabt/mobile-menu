(()=>{"use strict";var n,r,e,t,o,i,a,A,s,c,l,p,d,u,f={904:(n,r,e)=>{e.d(r,{c:()=>A});var t=e(648),o=e.n(t),i=e(312),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap);"]),a.push([n.id,':root{\n  --speed-dir:-100%;\n}\n\n* {\n  font-family: "Sixtyfour", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  font-variation-settings: "BLED" 0, "SCAN" 0;\n\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\np{\n  padding: .5rem;\n}\n\n.menu{\n  display: none;\n}\n\n\n.mobile-menu {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  \n  overflow: hidden;\n\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n\n  background-color: white;\n\n  pointer-events: none;\n\n  opacity: 0;\n  transform: translateY(-20px);\n\n  transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;\n}\n\n.active {\n  pointer-events: auto;\n\n  opacity: 1;\n  transform: translateY(0px);\n}\n\n.menu-icon,\n.close {\n  width: 30px;\n  height: 30px;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n.scroller {\n  display: flex;\n  font-size: 3rem;\n  white-space: nowrap;\n}\n\n.scroller-item{\n  animation: scroll 8s linear infinite;\n}\n\n.to-right{ \n  --speed-dir:100%;\n}\n\n.to-left{ \n  --speed-dir:-100%;\n}\n\n.scroller div {\n  display: inline-block;\n  color: rgb(202, 202, 202);\n}\n\n.scroller a {\n  text-decoration: none;\n  color: black;\n}\n\n@keyframes scroll {\n  from {\n    transform: translate(0%);\n  }\n  to {\n    transform: translate(var(--speed-dir));\n  }\n}\n\n@media (min-width: 600px){\n\n  .menu-icon{\n    display: none;\n  }\n\n  .mobile-menu{\n    display: none;\n  }\n\n  body{\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n  }\n\n  p{\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  .menu{\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    padding: 1rem;\n  }\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,2CAA2C;;EAE3C,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;;AAGA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;;AAGA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,gBAAgB;;EAEhB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;;EAEnB,uBAAuB;;EAEvB,oBAAoB;;EAEpB,UAAU;EACV,4BAA4B;;EAE5B,kEAAkE;AACpE;;AAEA;EACE,oBAAoB;;EAEpB,UAAU;EACV,0BAA0B;AAC5B;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE;IACE,wBAAwB;EAC1B;EACA;IACE,sCAAsC;EACxC;AACF;;AAEA;;EAEE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;EACf;AACF",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap");\r\n\r\n:root{\r\n  --speed-dir:-100%;\r\n}\r\n\r\n* {\r\n  font-family: "Sixtyfour", sans-serif;\r\n  font-optical-sizing: auto;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-variation-settings: "BLED" 0, "SCAN" 0;\r\n\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n\r\np{\r\n  padding: .5rem;\r\n}\r\n\r\n.menu{\r\n  display: none;\r\n}\r\n\r\n\r\n.mobile-menu {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 100vh;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  \r\n  overflow: hidden;\r\n\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  background-color: white;\r\n\r\n  pointer-events: none;\r\n\r\n  opacity: 0;\r\n  transform: translateY(-20px);\r\n\r\n  transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;\r\n}\r\n\r\n.active {\r\n  pointer-events: auto;\r\n\r\n  opacity: 1;\r\n  transform: translateY(0px);\r\n}\r\n\r\n.menu-icon,\r\n.close {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.scroller {\r\n  display: flex;\r\n  font-size: 3rem;\r\n  white-space: nowrap;\r\n}\r\n\r\n.scroller-item{\r\n  animation: scroll 8s linear infinite;\r\n}\r\n\r\n.to-right{ \r\n  --speed-dir:100%;\r\n}\r\n\r\n.to-left{ \r\n  --speed-dir:-100%;\r\n}\r\n\r\n.scroller div {\r\n  display: inline-block;\r\n  color: rgb(202, 202, 202);\r\n}\r\n\r\n.scroller a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n@keyframes scroll {\r\n  from {\r\n    transform: translate(0%);\r\n  }\r\n  to {\r\n    transform: translate(var(--speed-dir));\r\n  }\r\n}\r\n\r\n@media (min-width: 600px){\r\n\r\n  .menu-icon{\r\n    display: none;\r\n  }\r\n\r\n  .mobile-menu{\r\n    display: none;\r\n  }\r\n\r\n  body{\r\n    display: grid;\r\n    grid-template-columns: 4fr 1fr;\r\n  }\r\n\r\n  p{\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n\r\n  .menu{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 1rem;\r\n  }\r\n}\r\n'],sourceRoot:""}]);const A=a},312:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},648:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},596:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],c=t.base?s[0]+t.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var d=e(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(u);else{var f=o(u,t);t.byIndex=A,r.splice(A,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=e(i[a]);r[A].references--}for(var s=t(n,o),c=0;c<i.length;c++){var l=e(i[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},176:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},808:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},120:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},936:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},m={};function E(n){var r=m[n];if(void 0!==r)return r.exports;var e=m[n]={id:n,exports:{}};return f[n](e,e.exports,E),e.exports}E.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return E.d(r,{a:r}),r},E.d=(n,r)=>{for(var e in r)E.o(r,e)&&!E.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},E.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),E.nc=void 0,n=E(596),r=E.n(n),e=E(520),t=E.n(e),o=E(176),i=E.n(o),a=E(120),A=E.n(a),s=E(808),c=E.n(s),l=E(936),p=E.n(l),d=E(904),(u={}).styleTagTransform=p(),u.setAttributes=A(),u.insert=i().bind(null,"head"),u.domAPI=t(),u.insertStyleElement=c(),r()(d.c,u),d.c&&d.c.locals&&d.c.locals,function(){const n=document.querySelector(".menu-icon"),r=document.querySelector(".close"),e=document.querySelector(".mobile-menu");n.addEventListener("click",(function(){e.classList.add("active")})),r.addEventListener("click",(function(){e.classList.remove("active")}))}()})();
//# sourceMappingURL=app.bundle.js.map