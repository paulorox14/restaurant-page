(()=>{"use strict";var e={498:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),l=new URL(t(864),t.b),d=c()(o()),p=s()(l);d.push([e.id,".aboutContainer {\n    text-align: center;\n    height: 100%;\n    background-color: black;\n    background-image: url("+p+");\n    background-size: 110%;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.aboutText {\n    width: 60%;\n    height: auto;\n    padding: 20px;\n    font-family: 'Poppins', sans-serif;\n    background: rgba(0, 0, 0, 0.7);\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\n.aboutTextText {\n    font-size: 36px;\n    color: white;\n    font-weight: 700;\n}\n\n.aboutLocation {\n    padding: 5px;\n    font-size: 14px;\n    color: white;\n    width: 60%;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.locations {\n    text-align: center;\n}\n\n.aboutTime {\n    font-size: 14px;\n    color: white;\n    width: 60%;\n    border-radius: 5px;\n    padding: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.times {\n    text-align: center;\n}",""]);const u=d},791:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),l=new URL(t(864),t.b),d=new URL(t(602),t.b),p=new URL(t(579),t.b),u=new URL(t(376),t.b),m=new URL(t(349),t.b),g=new URL(t(156),t.b),b=new URL(t(846),t.b),h=c()(o()),f=s()(l),y=s()(d),x=s()(p),v=s()(u),T=s()(m),w=s()(g),C=s()(b);h.push([e.id,".recipesContainer {\n    text-align: center;\n    height: 100%;\n    background-color: black;\n    background-image: url("+f+");\n    background-size: 110%;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\n.recipesText {\n    background: rgba(0, 0, 0, 0.7);\n    width: 40%;\n    padding: 1%;\n    margin-top: 3%;\n    height: 90%;\n    overflow: auto;\n    display: flex;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.recipesText::-webkit-scrollbar {\n    display: none;\n}\n.recipesTitle {\n    font-family: 'Poppins', sans-serif;\n    font-size: 36px;\n    color: white;\n}\n\n.actualRecipes {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 10px;\n}\n\n.recipeImage {\n    width: 200px;\n    height: 200px;\n    border: 1px solid white;\n}\n\n[class = \"recipeImage 0\"] {\n    background-image: url("+y+');\n    background-size: 100%;\n    background-position: center;\n}\n\n[class = "recipeImage 1"] {\n    background-image: url('+x+');\n    background-size: 100%;\n}\n\n[class = "recipeImage 2"] {\n    background-image: url('+v+');\n    background-size: 100%;\n}\n\n[class = "recipeImage 3"] {\n    background-image: url('+T+');\n    background-size: 100%;\n}\n\n[class = "recipeImage 4"] {\n    background-image: url('+w+');\n    background-size: 130%;\n}\n\n[class = "recipeImage 5"] {\n    background-image: url('+C+");\n    background-size: 100%;\n}\n\n.recipeDesc0,\n.recipeDesc1,\n.recipeDesc2,\n.recipeDesc3,\n.recipeDesc4,\n.recipeDesc5 {\n    width: 200px;\n    height: 200px;\n    font-family: 'Poppins', sans-serif;\n    color: white;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}",""]);const k=h},426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),l=new URL(t(572),t.b),d=c()(o()),p=s()(l);d.push([e.id,":root {\n    --background-colour: #fefae0;\n    --header-colour: #ccd5ae;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--background-colour);\n    height: 100vh;\n}\n\n.header {\n    background-color: var(--header-colour);\n    height: 100px;\n    width: 100%;\n    text-align: center;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.headerText {\n    font-family: 'Smooch', cursive;\n    font-size: 69px;\n    background: url("+p+");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 75px;\n}\n\n.tabs {\n    padding-top: 10px;\n    display: flex;\n    gap: 10px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--header-colour);\n}\n\n.about,\n.recipes,\n.contact {\n    font-family: 'Poppins', sans-serif;\n    padding: 5px;\n    padding-bottom: 0;\n    border-radius: 5px;\n}\n.about {\n    border-bottom: 3px solid black;\n    cursor: pointer;\n}\n\n.recipes,\n.contact {\n    cursor: pointer;\n    border-bottom: 3px solid var(--header-colour);\n}\n\n.recipesContainer,\n.contactContainer {\n    display: none;\n    text-align: center;\n}\n",""]);const u=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var g=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:g,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},349:(e,n,t)=>{e.exports=t.p+"d6b36da74c59869d35e7.jpg"},602:(e,n,t)=>{e.exports=t.p+"4bbc131c33887a1958aa.jpg"},156:(e,n,t)=>{e.exports=t.p+"14084575cce47c2872d4.jpg"},864:(e,n,t)=>{e.exports=t.p+"096519033656935b2382.jpg"},846:(e,n,t)=>{e.exports=t.p+"c1545082cfe854b6fde2.jpg"},376:(e,n,t)=>{e.exports=t.p+"39b30a156e5a66e0edd5.jpg"},572:(e,n,t)=>{e.exports=t.p+"4cb12acb4665bc947e74.png"},579:(e,n,t)=>{e.exports=t.p+"24222c15a4f262a4d5aa.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(426),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),n()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var b=t(498),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;var f=t(791),y={};y.styleTagTransform=u(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=d(),n()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals;const x=document.querySelector(".content");!function(){const e=document.createElement("div");e.className="header";const n=document.createElement("div");n.className="headerText",n.innerText="Eggcellence",e.appendChild(n),x.appendChild(e);const t=document.createElement("div");t.className="tabs",x.appendChild(t);const r=document.createElement("div");r.className="about",r.innerText="About",t.appendChild(r);const o=document.createElement("div");o.className="recipes",o.innerText="Menu",t.appendChild(o);const a=document.createElement("div");a.className="contact",a.innerText="Contact Us",t.appendChild(a)}(),(()=>{const e=document.querySelector(".content"),n=document.createElement("div");n.className="aboutContainer",e.appendChild(n)})(),(()=>{const e=document.querySelector(".aboutContainer"),n=document.createElement("div");n.className="aboutText",e.appendChild(n)})(),(()=>{const e=document.querySelector(".aboutText"),n=document.createElement("div");n.className="aboutTextText",n.innerText="From omelettes to souflés, we have the perfect egg dish for you!",e.appendChild(n)})(),(()=>{const e=document.querySelector(".aboutText"),n=document.createElement("div");n.className="aboutLocation",e.appendChild(n);const t=document.createElement("div");t.className="location material-symbols-outlined",t.innerText="pin_drop",n.appendChild(t);const r=document.createElement("div");r.className="locations",n.appendChild(r);const o=document.createElement("li");o.className="locationOne",o.innerText="556 Pennant Hills Rd, West Pennant Hills NSW 2125",r.appendChild(o);const a=document.createElement("li");a.className="locationTwo",a.innerText="Westfield Hornsby Shopping Centre Store 3014-3015, Level 3/236 Pacific Hwy, Hornsby NSW 2077",r.appendChild(a);const c=document.createElement("li");c.className="locationThree",c.innerText="Store Gr, 16 White Hart Dr, Rouse Hill NSW 2155",r.appendChild(c)})(),(()=>{const e=document.querySelector(".aboutText"),n=document.createElement("div");n.className="aboutTime",e.appendChild(n);const t=document.createElement("div");t.className="time material-symbols-outlined",t.innerText="schedule",n.appendChild(t);const r=document.createElement("div");r.className="times",n.appendChild(r);const o=document.createElement("li");o.className="timeOne",o.innerText="Mon - Fri: 7am - 10pm",r.appendChild(o);const a=document.createElement("li");a.className="timeTwo",a.innerText="Sat & Sun: 8am - 7pm",r.appendChild(a)})(),(()=>{const e=document.querySelector(".content"),n=document.createElement("div");n.className="recipesContainer",e.appendChild(n)})(),(()=>{const e=document.querySelector(".recipesContainer"),n=document.createElement("div");n.className="recipesText",e.appendChild(n)})(),(()=>{const e=document.querySelector(".recipesText"),n=document.createElement("div");n.className="recipesTitle",n.innerText="Menu",e.appendChild(n)})(),(()=>{const e=document.querySelector(".recipesText"),n=document.createElement("div");n.className="actualRecipes",e.appendChild(n);let t=0;for(;t<6;){let e=document.createElement("div");e.className=`recipeImage ${t}`,n.appendChild(e);let r=document.createElement("div");r.className=`recipeDesc${t}`,n.appendChild(r),t++}})(),document.querySelector(".recipeDesc0").innerHTML="Eggs and Pancake Stack <br /> $14.00",document.querySelector(".recipeDesc1").innerHTML="Boiled Eggs <br /> $2.00/egg",document.querySelector(".recipeDesc2").innerHTML="Eggs with Noodles <br /> $18.00",document.querySelector(".recipeDesc3").innerHTML="Eggs and Bacon <br /> $8.00",document.querySelector(".recipeDesc4").innerHTML="Eggs with Beans and Toast <br /> $12.00",document.querySelector(".recipeDesc5").innerHTML="Eggs Benedict <br /> $15.00",(()=>{const e=document.querySelector(".content"),n=document.createElement("div");n.className="contactContainer",n.innerText="This is the contacts page",e.appendChild(n)})(),function(){const e=document.querySelector(".about"),n=document.querySelector(".aboutContainer"),t=document.querySelector(".recipes"),r=document.querySelector(".recipesContainer"),o=document.querySelector(".contact"),a=document.querySelector(".contactContainer");e.addEventListener("click",(()=>{e.style.borderBottom="3px solid black",t.style.borderBottom="3px solid var(--header-colour)",o.style.borderBottom="3px solid var(--header-colour)",n.style.display="inherit",r.style.display="none",a.style.display="none"})),t.addEventListener("click",(()=>{t.style.borderBottom="3px solid black",e.style.borderBottom="3px solid var(--header-colour)",o.style.borderBottom="3px solid var(--header-colour)",r.style.display="flex",n.style.display="none",a.style.display="none"})),o.addEventListener("click",(()=>{o.style.borderBottom="3px solid black",e.style.borderBottom="3px solid var(--header-colour)",t.style.borderBottom="3px solid var(--header-colour)",a.style.display="inherit",n.style.display="none",r.style.display="none"}))}()})()})();