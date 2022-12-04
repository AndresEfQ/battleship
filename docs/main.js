(()=>{"use strict";var e={771:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),i=t.n(o),s=t(645),r=t.n(s)()(i());r.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.player1 {\n  height: 40vh;\n  width: 100vw;\n  transform: rotate(180deg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player2 {\n  height: 40vh;\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  height: 8vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh1 {\n  font-size: medium;\n}\n\n.rotate {\n  position: absolute;\n  top: -3.7vh;\n  left: 50%;\n  transform: translate(-50%);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  padding: 3px;\n  background-color: rgb(226, 226, 226);\n  border: 1px solid rgb(117, 117, 117);\n  border-radius: 5px;\n}\n\n.visible {\n  display: flex;\n}\n\n.rotate > img {\n  width: 2vh;\n  height: 2vh;\n}\n\n.battleship, .submarine {\n  width: 9.5vh;\n  height: 3vh;\n}\n\n.destroyer {\n  width: 6vh;\n  height: 3vh;\n}\n\n.cruisser {\n  width: 15vh;\n  height: 3vh;\n}\n\ndiv.ship-div {\n  position: relative;\n  display: inline-block;\n}\n\n.ship-img {\n  pointer-events: none;\n} \n\n.gameboard {\n  position: relative;\n  height: 34vh;\n  width: 30vh;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.cell {\n  outline: 1px solid rgb(228, 228, 228);\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.touched-cell {\n  background-color: rgb(139, 139, 255);\n}\n\n.cellH {\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n}\n\n.columnHeaders {\n  display: flex;\n  position: absolute;\n  top: -3.6vh;\n}\n\n.rowHeaders {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: -3.6vh;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 3vh);\n  grid-template-rows: repeat(10, 3vh);\n  position: absolute;\n  top: 0;\n}\n\nbutton {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgb(255, 0, 0);\n  color: white;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 7px;\n  font-weight: 700;\n}\n\n.placedBattleship {\n  position: fixed;\n}",""]);const a=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(r[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var s={},r=[],a=0;a<e.length;a++){var l=e[a],c=o.base?l[0]+o.base:l[0],d=s[c]||0,h="".concat(c," ").concat(d);s[c]=d+1;var u=t(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=i(p,o);o.byIndex=a,n.splice(a,0,{identifier:h,updater:f,references:1})}r.push(h)}return r}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var s=o(e=e||[],i=i||{});return function(e){e=e||[];for(var r=0;r<s.length;r++){var a=t(s[r]);n[a].references--}for(var l=o(e,i),c=0;c<s.length;c++){var d=t(s[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var s=n[o]={id:o,exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(){this.orientation="h",this.x0,this.y0,this.positionShip=function(e,n,t){let o=n.split(","),[i,s]=o},this.dragShip=function(e,n){let t=e.target.children[1];e.changedTouches[0].clientX,e.changedTouches[0].clientY,t.style.position="absolute","gameboard1"===n?(this.x0||(this.x0=e.touches[0].clientX),this.y0||(this.y0=e.touches[0].clientY),console.log(e.touches[0].clientY-this.y0),t.style.bottom=e.touches[0].clientY-this.y0+"px",t.style.right=e.touches[0].clientX-this.x0+"px"):"gameboard2"===n&&(this.x0||(this.x0=e.touches[0].clientX),this.y0||(this.y0=e.touches[0].clientY),console.log(e.touches[0].clientY-this.y0),t.style.top=e.touches[0].clientY-this.y0+"px",t.style.left=e.touches[0].clientX-this.x0+"px")},this.dropShip=function(e,n){let t,o=e.changedTouches[0].clientX,i=e.changedTouches[0].clientY;if(document.elementFromPoint(o,i).classList.contains("cell")){t=document.elementFromPoint(o,i);let s=t.dataset.coordinates;this.positionShip(e,s,n)}},this.hideAllRotateShips=function(){let e=document.getElementsByClassName("rotate");for(let n of e)n.classList.remove("visible")},this.showRotateShip=function(e){this.hideAllRotateShips(),console.log(e.target.children[0]),e.target.children[0].classList.add("visible")}}var n=t(379),o=t.n(n),i=t(795),s=t.n(i),r=t(569),a=t.n(r),l=t(565),c=t.n(l),d=t(216),h=t.n(d),u=t(589),p=t.n(u),f=t(771),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=h(),o()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.getElementsByClassName("grid");for(let e of v)for(let n=1;n<=100;n++){let t=document.createElement("div"),o=n%10==0?10:n%10,i=Math.ceil(n/10);t.dataset.coordinates=`${o},${i}`,t.className="cell",e.appendChild(t)}const g=document.getElementsByClassName("ship-div");for(let n of g){let t=n.classList.contains("1")?"gameboard1":"gameboard2",o=document.getElementById(t),i=new e;n.addEventListener("touchmove",(e=>i.dragShip(e,t))),n.addEventListener("touchend",(e=>i.dropShip(e,o))),n.addEventListener("touch",(e=>i.showRotateShip(e)))}document.getElementById("pass").addEventListener("click",(()=>alert("pass"))),document.getElementById("testImg"),document.getElementById("testGameboard").addEventListener("click",(e=>{e.target.childNodes[0]}))})()})();