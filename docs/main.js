(()=>{"use strict";var n={771:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(81),i=t.n(o),r=t(645),s=t.n(r)()(i());s.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.player1 {\n  height: 40vh;\n  width: 100vw;\n  transform: rotate(180deg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player2 {\n  height: 40vh;\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  height: 8vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh1 {\n  font-size: medium;\n}\n\n.rotate {\n  position: absolute;\n  top: -3.7vh;\n  left: 50%;\n  transform: translate(-50%);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  padding: 3px;\n  background-color: rgb(226, 226, 226);\n  border: 1px solid rgb(117, 117, 117);\n  border-radius: 5px;\n}\n\n.visible {\n  display: flex;\n}\n\n.rotate > img {\n  width: 2vh;\n  height: 2vh;\n}\n\n.battleship, .submarine {\n  width: 9.5vh;\n  height: 3vh;\n}\n\n.destroyer {\n  width: 6vh;\n  height: 3vh;\n}\n\n.cruisser {\n  width: 15vh;\n  height: 3vh;\n}\n\ndiv.ship-div {\n  position: relative;\n  display: inline-block;\n}\n\n.ship-img {\n  pointer-events: none;\n} \n\n.gameboard {\n  position: relative;\n  height: 34vh;\n  width: 30vh;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.cell {\n  outline: 1px solid rgb(228, 228, 228);\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.touched-cell {\n  background-color: rgb(139, 139, 255);\n}\n\n.cellH {\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n}\n\n.columnHeaders {\n  display: flex;\n  position: absolute;\n  top: -3.6vh;\n}\n\n.rowHeaders {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: -3.6vh;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 3vh);\n  grid-template-rows: repeat(10, 3vh);\n  position: absolute;\n  top: 0;\n}\n\nbutton {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgb(255, 0, 0);\n  color: white;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 7px;\n  font-weight: 700;\n}\n\n.placedBattleship {\n  position: fixed;\n}",""]);const a=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},s=[],a=0;a<n.length;a++){var l=n[a],c=o.base?l[0]+o.base:l[0],d=r[c]||0,p="".concat(c," ").concat(d);r[c]=d+1;var u=t(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=i(h,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var s=0;s<r.length;s++){var a=t(r[s]);e[a].references--}for(var l=o(n,i),c=0;c<r.length;c++){var d=t(r[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{function n(){this.positionShip=function(n,e,t){let o=e.split(","),[i,r]=o;console.log(n.target.childNodes[0])},this.dragShip=function(n,e){let t,o,i=n.target.childNodes[1],r=n.changedTouches[0].clientX,s=n.changedTouches[0].clientY;i.style.position="absolute","gameboard1"===e?(t=34,o=10,i.classList.contains("destroyer")&&(t-=18),i.classList.contains("cruisser")&&(t+=20),i.style.right=r-t+"px",i.style.bottom=s-o+"px"):"gameboard2"===e&&(o=395,t=31,i.classList.contains("destroyer")&&(t-=12),i.classList.contains("cruisser")&&(t+=14),i.style.left=r-t+"px",i.style.top=s-o+"px")},this.dropShip=function(n,e){let t,o=n.changedTouches[0].clientX,i=n.changedTouches[0].clientY;if(document.elementFromPoint(o,i).classList.contains("cell")){t=document.elementFromPoint(o,i);let r=t.dataset.coordinates;console.log(r),this.positionShip(n,r,e)}}}var e=t(379),o=t.n(e),i=t(795),r=t.n(i),s=t(569),a=t.n(s),l=t(565),c=t.n(l),d=t(216),p=t.n(d),u=t(589),h=t.n(u),f=t(771),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),o()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.getElementsByClassName("grid");for(let n of v)for(let e=1;e<=100;e++){let t=document.createElement("div"),o=e%10==0?10:e%10,i=Math.ceil(e/10);t.dataset.coordinates=`${o},${i}`,t.className="cell",n.appendChild(t)}const g=document.getElementsByClassName("ship-div");for(let e of g){let t=e.classList.contains("1")?"gameboard1":"gameboard2",o=document.getElementById(t),i=new n;e.addEventListener("click",(n=>console.log(n.target))),e.addEventListener("touchmove",(n=>i.dragShip(n,t))),e.addEventListener("touchend",(n=>i.dropShip(n,o))),e.addEventListener("touch",(n=>showRotateShip(n)))}document.getElementById("pass").addEventListener("click",(()=>alert("pass"))),document.getElementById("testImg"),document.getElementById("testGameboard").addEventListener("click",(n=>{n.target.childNodes[0]}))})()})();