(()=>{"use strict";var t={771:(t,n,e)=>{e.d(n,{Z:()=>a});var i=e(81),o=e.n(i),s=e(645),r=e.n(s)()(o());r.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  overscroll-behavior: contain;\n  overflow: hidden;\n}\n\n.player1 {\n  height: 40vh;\n  width: 100vw;\n  transform: rotate(180deg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player2 {\n  height: 40vh;\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  height: 8vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh1 {\n  font-size: medium;\n}\n\n.rotate {\n  position: absolute;\n  top: -3.7vh;\n  left: 50%;\n  transform: translate(-50%);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  padding: 3px;\n  background-color: rgb(226, 226, 226);\n  border: 1px solid rgb(117, 117, 117);\n  border-radius: 5px;\n}\n\n.visible {\n  display: flex;\n}\n\n.rotate > img {\n  width: 2vh;\n  height: 2vh;\n}\n\n.battleship {\n  width: 9.5vh;\n  height: 3vh;\n}\n\n.submarine {\n  width: 9.5vh;\n  height: 2.3vh;\n}\n\n.destroyer {\n  width: 9vh;\n  height: 2.6vh;\n}\n\n.cruisser {\n  width: 15vh;\n  height: 3vh;\n}\n\ndiv.ship-div {\n  position: relative;\n  display: inline-block;\n  outline: 1px solid red;\n}\n\n.ship-img {\n  pointer-events: none;\n  transform-origin: 0 0;\n} \n\n.gameboard {\n  position: relative;\n  height: 34vh;\n  width: 30vh;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.cell {\n  outline: 1px solid rgb(228, 228, 228);\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.touched-cell {\n  background-color: rgb(139, 139, 255);\n}\n\n.cellH {\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n}\n\n.columnHeaders {\n  display: flex;\n  position: absolute;\n  top: -3.6vh;\n}\n\n.rowHeaders {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: -3.6vh;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 3vh);\n  grid-template-rows: repeat(10, 3vh);\n  position: absolute;\n  top: 0;\n}\n\n.controls {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  width: 95%;\n  margin: 0 2.5%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2vh;\n}\n\n.controls > * {\n  background-color: rgb(0, 114, 221);\n  color: white;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  padding: 8px 0;\n  border: none;\n  border-radius: 7px;\n  font-weight: 700;\n  width: 100%;\n}\n\n.central {\n  background-color: red;\n  display: flex;\n  justify-content: center;\n}\n\n.info {\n  outline: 3px solid red;\n  background-color: #fff;\n  color: black;\n}\n\n.placedBattleship {\n  position: fixed;\n}",""]);const a=r},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",i=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),i&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),i&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,i,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var a=0;a<this.length;a++){var h=this[a][0];null!=h&&(r[h]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);i&&r[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),n.push(c))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,i=0;i<n.length;i++)if(n[i].identifier===t){e=i;break}return e}function i(t,i){for(var s={},r=[],a=0;a<t.length;a++){var h=t[a],l=i.base?h[0]+i.base:h[0],c=s[l]||0,d="".concat(l," ").concat(c);s[l]=c+1;var p=e(d),u={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var f=o(u,i);i.byIndex=a,n.splice(a,0,{identifier:d,updater:f,references:1})}r.push(d)}return r}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var s=i(t=t||[],o=o||{});return function(t){t=t||[];for(var r=0;r<s.length;r++){var a=e(s[r]);n[a].references--}for(var h=i(t,o),l=0;l<s.length;l++){var c=e(s[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}s=h}}},569:t=>{var n={};t.exports=function(t,e){var i=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var s=e.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(i,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(i){var o=n[i];if(void 0!==o)return o.exports;var s=n[i]={id:i,exports:{}};return t[i](s,s.exports,e),s.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{function t(t){this.size=t,this.board=[],this.moves=new Set,this.placeShip=function(n,e,i="v"){const[o,s]=e,r=n.length;if(o<=0||o>t||s<=0||s>t)throw new Error("initial coordinates outside board");let a={};if(a.ship=n,a.coordinates=[],"v"===i){if(s+r>t+1)throw new Error("ship placed outside board");for(let t=0;t<r;t++)a.coordinates.push([o,s+t].join(","));if(this.shipsCollide(a))throw new Error("ship placed over an existing ship")}else if("h"===i){if(o+r>t+1)throw new Error("ship placed outside board");for(let t=0;t<r;t++)a.coordinates.push([o+t,s].join(","));if(this.shipsCollide(a))throw new Error("ship placed over an existing ship")}return this.board.push(a),"ok"},this.shipsCollide=function(t){return t.coordinates.some((t=>this.board.some((n=>n.coordinates.some((n=>t===n))))))},this.deleteShip=function(t){this.board=this.board.filter((n=>!n.coordinates.some((n=>n===t.join(",")))))},this.receiveAttack=function(n){const[e,i]=n;if(e<=0||e>t||i<=0||i>t)throw new Error("attack coordinates outside board");if(this.moves.has(n.join(",")))throw new Error("repeated attack coordinates");for(let t of this.board)for(let e of t.coordinates)if(n.join(",")===e)return t.ship.hit(),this.moves.add(n.join(",")),"hit";return this.moves.add(n.join(",")),"miss"},this.allSunk=function(){return this.board.every((t=>t.ship.sunken))}}function n(t){this.length=t,this.hits=0,this.sunken=!1,this.isSunk=function(){this.hits===this.length&&(this.sunken=!0)},this.hit=function(){this.hits++,this.isSunk()}}function i(t){this.ship=t,this.orientation="h",this.x0,this.y0,this.x,this.y,t.classList.contains("cruisser")?this.shipLength=5:t.classList.contains("destroyer")?this.shipLength=2:this.shipLength=3,this.positionShip=function(e,i,o,s){const r=i.dataset.coordinates,[a,h]=r.split(",");let l,c,d=parseInt(a),p=parseInt(h);if(e.target.classList.contains("ship-div")){c=e.target,"h"===this.orientation?d>11-this.shipLength?(d=11-this.shipLength,l=document.querySelectorAll(`[data-coordinates="${d},${p}"]`)[o-1]):l=i:p>11-this.shipLength?(p=11-this.shipLength,l=document.querySelectorAll(`[data-coordinates="${d},${p}"]`)[o-1]):l=i,console.log(d,p);try{s.placeShip(new n(this.shipLength),[d,p],this.orientation)}catch(t){return console.log(t),void this.resetShip(s)}this.showRotateShip=function(){console.log("Rotation not allowed after placing a ship in the board")},console.log("appending div"),l.appendChild(c),t.style.left=null,t.style.right=null,t.style.top=null,t.style.bottom=null,this.x0=null,this.y0=null,this.x=d,this.y=p,console.log(s.board[0].coordinates),console.log(s.board),console.log(l)}else this.resetShip()},this.resetShip=function(t){if(this.ship.style.left=null,this.ship.style.right=null,this.ship.style.top=null,this.ship.style.bottom=null,this.x||this.y)try{t.placeShip(new n(this.shipLength),[this.x,this.y],this.orientation)}catch(t){console.log(t)}},this.dragShip=function(t,n,e){this.hideAllRotateShips();let i=t.changedTouches[0].clientX,o=t.changedTouches[0].clientY;this.ship.style.position="absolute",(this.x||this.y)&&e.deleteShip([this.x,this.y]),this.x0||(this.x0=i),this.y0||(this.y0=o),"1"===n?(this.ship.style.right=i-this.x0+"px",this.ship.style.bottom=o-this.y0+"px"):"2"===n&&(this.ship.style.left=i-this.x0+"px",this.ship.style.top=o-this.y0+"px"),this.showCoordinates(i,o,n)},this.dropShip=function(t,n,e){let i,o=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY;document.elementFromPoint(o,s).classList.contains("cell")&&document.elementFromPoint(o,s).classList.contains(n)?(i=document.elementFromPoint(o,s),this.positionShip(t,i,n,e)):this.resetShip(e),this.hideCoordinates()},this.hideAllRotateShips=function(){let t=document.getElementsByClassName("rotate");for(let n of t)n.classList.remove("visible")},this.showRotateShip=function(t){this.hideAllRotateShips(),t.target.children[0].classList.add("visible")},this.rotateShip=function(t){t.stopPropagation(),"h"===this.orientation?(this.orientation="v",this.ship.style.transform="translate(3vh) rotate(90deg)",this.ship.parentNode.style.width="3vh",this.hideAllRotateShips()):"v"===this.orientation&&(this.orientation="h",this.ship.style.transform=null,this.ship.parentNode.style.width=null,this.hideAllRotateShips())},this.showCoordinates=function(t,n,e){let i,o,s=[null,"A","B","C","D","E","F","G","H","I","J"],r=document.getElementById("pass");if(document.elementFromPoint(t,n).classList.contains("cell")&&document.elementFromPoint(t,n).classList.contains(e)?i=document.elementFromPoint(t,n):this.hideCoordinates(),i){o=i.dataset.coordinates;let[t,n]=o.split(",");r.classList.add("info"),r.textContent=`${s[t]} , ${n}`}},this.hideCoordinates=function(){let t=document.getElementById("pass");t.classList.remove("info"),t.textContent="Pass Device"}}var o=e(379),s=e.n(o),r=e(795),a=e.n(r),h=e(569),l=e.n(h),c=e(565),d=e.n(c),p=e(216),u=e.n(p),f=e(589),m=e.n(f),v=e(771),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),s()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const y=document.getElementsByClassName("grid");for(let t=0;t<2;t++)for(let n=1;n<=100;n++){let e=document.createElement("div"),i=n%10==0?10:n%10,o=Math.ceil(n/10);e.dataset.coordinates=`${i},${o}`,e.className=`cell ${t+1}`,y[t].appendChild(e)}const b=new t(10),x=new t(10),w=document.getElementsByClassName("ship-div");for(let t of w){let n=new i(t.children[1]),e=t.children[0];t.classList.contains("1")?(t.addEventListener("touchmove",(t=>n.dragShip(t,"1",b))),t.addEventListener("touchend",(t=>n.dropShip(t,"1",b)))):t.classList.contains("2")&&(t.addEventListener("touchmove",(t=>n.dragShip(t,"2",x))),t.addEventListener("touchend",(t=>n.dropShip(t,"2",x)))),t.addEventListener("touch",(t=>{n.showRotateShip()&&n.showRotateShip(t)})),t.addEventListener("click",(t=>n.showRotateShip(t))),e.addEventListener("touch",(t=>n.rotateShip(t))),e.addEventListener("click",(t=>n.rotateShip(t)))}document.getElementById("pass").addEventListener("click",(()=>alert("pass")))})()})();