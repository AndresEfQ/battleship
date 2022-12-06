(()=>{"use strict";var t={771:(t,e,n)=>{n.d(e,{Z:()=>a});var i=n(81),s=n.n(i),o=n(645),r=n.n(o)()(s());r.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  overscroll-behavior: contain;\n}\n\n.player1 {\n  height: 40vh;\n  width: 100vw;\n  transform: rotate(180deg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player2 {\n  height: 40vh;\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  height: 8vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh1 {\n  font-size: medium;\n}\n\n.rotate {\n  position: absolute;\n  top: -3.7vh;\n  left: 50%;\n  transform: translate(-50%);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  padding: 3px;\n  background-color: rgb(226, 226, 226);\n  border: 1px solid rgb(117, 117, 117);\n  border-radius: 5px;\n}\n\n.visible {\n  display: flex;\n}\n\n.rotate > img {\n  width: 2vh;\n  height: 2vh;\n}\n\n.battleship {\n  width: 9.5vh;\n  height: 3vh;\n}\n\n.submarine {\n  width: 9.5vh;\n  height: 2.3vh;\n}\n\n.destroyer {\n  width: 9vh;\n  height: 2.6vh;\n}\n\n.cruisser {\n  width: 15vh;\n  height: 3vh;\n}\n\ndiv.ship-div {\n  position: relative;\n  display: inline-block;\n}\n\n.ship-img {\n  pointer-events: none;\n} \n\n.gameboard {\n  position: relative;\n  height: 34vh;\n  width: 30vh;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.cell {\n  outline: 1px solid rgb(228, 228, 228);\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.touched-cell {\n  background-color: rgb(139, 139, 255);\n}\n\n.cellH {\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n}\n\n.columnHeaders {\n  display: flex;\n  position: absolute;\n  top: -3.6vh;\n}\n\n.rowHeaders {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: -3.6vh;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 3vh);\n  grid-template-rows: repeat(10, 3vh);\n  position: absolute;\n  top: 0;\n}\n\nbutton {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgb(255, 0, 0);\n  color: white;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 7px;\n  font-weight: 700;\n}\n\n.placedBattleship {\n  position: fixed;\n}",""]);const a=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(r[l]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);i&&r[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),s&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=s):h[4]="".concat(s)),e.push(h))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},r=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],h=o[c]||0,d="".concat(c," ").concat(h);o[c]=h+1;var p=n(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var y=s(u,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:y,references:1})}r.push(d)}return r}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var o=i(t=t||[],s=s||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var a=n(o[r]);e[a].references--}for(var l=i(t,s),c=0;c<o.length;c++){var h=n(o[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}o=l}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{function t(t){this.ship=t,this.orientation="h",this.x0,this.y0,this.x,this.y,this.positionShip=function(e,n,i){let s,o;o=e.target.classList.contains("ship-div")?e.target:e.target.parentNode.parentNode,"h"===this.orientation?o.classList.contains("cruisser")?"1"===this.x||"2"==this.x?(this.x="1",s=document.querySelectorAll(`[data-coordinates="3,${this.y}"]`)[i-1]):"9"===this.x||"10"==this.x?(this.x="6",s=document.querySelectorAll(`[data-coordinates="8,${this.y}"]`)[i-1]):(this.x-=2,s=n):o.classList.contains("destroyer")?"1"===this.x?s=document.querySelectorAll(`[data-coordinates="2,${this.y}"]`)[i-1]:"10"===this.x?(this.x="9",s=n):s=n:"1"===this.x?s=document.querySelectorAll(`[data-coordinates="2,${this.y}"]`)[i-1]:"10"===this.x?(this.x="8",s=document.querySelectorAll(`[data-coordinates="9,${this.y}"]`)[i-1]):(this.x--,s=n):o.classList.contains("cruisser")?"1"===this.y||"2"==this.y?(this.y="1",s=document.querySelectorAll(`[data-coordinates="${this.x},3"]`)[i-1]):"9"===this.y||"10"==this.y?(this.y="6",s=document.querySelectorAll(`[data-coordinates="${this.x},8"]`)[i-1]):(this.y-=2,s=n):o.classList.contains("destroyer")?"1"===this.y?s=document.querySelectorAll(`[data-coordinates="${this.x},2"]`)[i-1]:"10"===this.y?(this.y="9",s=n):s=n:"1"===this.y?(this.y="2",s=document.querySelectorAll(`[data-coordinates="${this.x},2"]`)[i-1]):"10"===this.y?(this.y="9",s=document.querySelectorAll(`[data-coordinates="${this.x},9"]`)[i-1]):(s=n,this.y--),s.appendChild(o),t.style.position=null,t.style.left=null,t.style.right=null,t.style.top=null,t.style.bottom=null,this.x0=null,this.y0=null},this.resetShip=function(){this.ship.style.position=null},this.dragShip=function(t,e){this.hideAllRotateShips();let n=t.changedTouches[0].clientX,i=t.changedTouches[0].clientY;this.ship.style.position="absolute","1"===e?(this.x0||(this.x0=n),this.y0||(this.y0=i),this.ship.style.right=n-this.x0+"px",this.ship.style.bottom=i-this.y0+"px"):"2"===e&&(this.x0||(this.x0=n),this.y0||(this.y0=i),this.ship.style.left=n-this.x0+"px",this.ship.style.top=i-this.y0+"px")},this.dropShip=function(t,e){let n,i=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY;if(document.elementFromPoint(i,s).classList.contains("cell")&&document.elementFromPoint(i,s).classList.contains(e)){n=document.elementFromPoint(i,s);let o=n.dataset.coordinates;[this.x,this.y]=o.split(","),this.positionShip(t,n,e)}else this.resetShip()},this.hideAllRotateShips=function(){let t=document.getElementsByClassName("rotate");for(let e of t)e.classList.remove("visible")},this.showRotateShip=function(t){this.hideAllRotateShips(),t.target.children[0].classList.add("visible")},this.rotateShip=function(t){t.stopPropagation(),"h"===this.orientation?(this.orientation="v",this.ship.style.transform="rotate(90deg)"):"v"===this.orientation&&(this.orientation="h",this.ship.style.transform="rotate(0deg)")}}var e=n(379),i=n.n(e),s=n(795),o=n.n(s),r=n(569),a=n.n(r),l=n(565),c=n.n(l),h=n(216),d=n.n(h),p=n(589),u=n.n(p),y=n(771),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),i()(y.Z,f),y.Z&&y.Z.locals&&y.Z.locals;const m=document.getElementsByClassName("grid");for(let t=0;t<2;t++)for(let e=1;e<=100;e++){let n=document.createElement("div"),i=e%10==0?10:e%10,s=Math.ceil(e/10);n.dataset.coordinates=`${i},${s}`,n.className=`cell ${t+1}`,m[t].appendChild(n)}const v=document.getElementsByClassName("ship-div");for(let e of v){let n=e.classList.contains("1")?"1":"2",i=e.children[1],s=(document.getElementById(n),e.children[0]),o=new t(i);e.addEventListener("touchmove",(t=>o.dragShip(t,n))),e.addEventListener("touchend",(t=>o.dropShip(t,n))),e.addEventListener("touch",(t=>o.showRotateShip(t))),e.addEventListener("click",(t=>o.showRotateShip(t))),s.addEventListener("touch",(t=>o.rotateShip(t))),s.addEventListener("click",(t=>o.rotateShip(t)))}document.getElementById("pass").addEventListener("click",(()=>alert("pass")))})()})();