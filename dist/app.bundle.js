(()=>{"use strict";var n,e,t,r,o,a,i,s,c,A,u,p,l,f,d={904:(n,e,t)=>{t.d(e,{c:()=>s});var r=t(648),o=t.n(r),a=t(312),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap);"]),i.push([n.id,'* {\n  font-family: "Sixtyfour", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  font-variation-settings: "BLED" 0, "SCAN" 0;\n\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.menu{\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    \n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n\n    background-color: white;\n\n    pointer-events: none;\n\n    opacity: 0;\n    transform: translateY(-20px);\n\n    transition: opacity 100ms ease-in-out,transform 100ms ease-in-out;\n}\n\n.active{\n    pointer-events: auto;\n\n    opacity: 1;\n    transform: translateY(0px);\n}\n\n.menu-icon, .close{\n    width: 30px;\n    height: 30px;\n}\n\nheader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem;\n}\n\np{\n    padding: .5rem;\n}\n\na{\n    text-decoration: none;\n    color: black;\n}',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAEA;EACE,oCAAoC;EACpC,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,2CAA2C;;EAE3C,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;;IAEnB,uBAAuB;;IAEvB,oBAAoB;;IAEpB,UAAU;IACV,4BAA4B;;IAE5B,iEAAiE;AACrE;;AAEA;IACI,oBAAoB;;IAEpB,UAAU;IACV,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap");\r\n\r\n* {\r\n  font-family: "Sixtyfour", sans-serif;\r\n  font-optical-sizing: auto;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-variation-settings: "BLED" 0, "SCAN" 0;\r\n\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.menu{\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n\r\n    text-align: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: white;\r\n\r\n    pointer-events: none;\r\n\r\n    opacity: 0;\r\n    transform: translateY(-20px);\r\n\r\n    transition: opacity 100ms ease-in-out,transform 100ms ease-in-out;\r\n}\r\n\r\n.active{\r\n    pointer-events: auto;\r\n\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n}\r\n\r\n.menu-icon, .close{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\nheader{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 1rem;\r\n}\r\n\r\np{\r\n    padding: .5rem;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color: black;\r\n}'],sourceRoot:""}]);const s=i},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var A=0;A<n.length;A++){var u=[].concat(n[A]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},648:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],A=r.base?c[0]+r.base:c[0],u=a[A]||0,p="".concat(A," ").concat(u);a[A]=u+1;var l=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var d=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:d,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),A=0;A<a.length;A++){var u=t(a[A]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function v(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return d[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(596),e=v.n(n),t=v(520),r=v.n(t),o=v(176),a=v.n(o),i=v(120),s=v.n(i),c=v(808),A=v.n(c),u=v(936),p=v.n(u),l=v(904),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=A(),e()(l.c,f),l.c&&l.c.locals&&l.c.locals,function(){const n=document.querySelector(".menu-icon"),e=document.querySelector(".close"),t=document.querySelector(".menu");n.addEventListener("click",(function(){t.classList.add("active")})),e.addEventListener("click",(function(){t.classList.remove("active")}))}()})();
//# sourceMappingURL=app.bundle.js.map