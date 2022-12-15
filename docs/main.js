(()=>{"use strict";var t={771:(t,e,n)=>{n.d(e,{Z:()=>r});var i=n(81),s=n.n(i),o=n(645),a=n.n(o)()(s());a.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.start-game {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  height: 40%;\n  background-color: rgb(255, 255, 255);\n  z-index: 5;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  text-align: center;\n  padding: 6vh;\n  border: 3px solid rgb(255, 0, 0);\n  border-radius: 20px;\n}\n\n.start-game > div {\n  display: flex;\n  gap: 4vh;\n}\n\nbody {\n  overscroll-behavior: contain;\n  overflow: hidden;\n}\n\n.hide-player {\n  position: absolute;\n  height: 45%;\n  width: 100%;\n  background-color: black;\n  z-index: 3;\n}\n\n.hide-player.p2 {\n  bottom: 0;\n}\n\n.player1 {\n  height: 40vh;\n  width: 100vw;\n  transform: rotate(180deg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player2 {\n  height: 40vh;\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  height: 8vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh1 {\n  font-size: medium;\n}\n\n.rotate {\n  position: absolute;\n  top: -3.7vh;\n  left: 50%;\n  transform: translate(-50%);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  padding: 3px;\n  background-color: rgb(226, 226, 226);\n  border: 1px solid rgb(117, 117, 117);\n  border-radius: 5px;\n}\n\n.visible {\n  display: flex;\n}\n\n.rotate > img {\n  width: 2vh;\n  height: 2vh;\n}\n\n.battleship {\n  width: 9.5vh;\n  height: 3vh;\n}\n\n.submarine {\n  width: 9.5vh;\n  height: 2.3vh;\n}\n\n.destroyer {\n  width: 9vh;\n  height: 2.6vh;\n}\n\n.cruisser {\n  width: 15vh;\n  height: 3vh;\n}\n\ndiv.ship-div {\n  position: relative;\n  display: inline-block;\n  outline: 1px solid red;\n}\n\n.ship-img {\n  pointer-events: none;\n  transform-origin: 0 0;\n  outline: 1px solid blue;\n} \n\n.gameboard {\n  position: relative;\n  height: 34vh;\n  width: 30vh;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.cell {\n  outline: 1px solid rgb(228, 228, 228);\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cellH {\n  height: 3vh;\n  width: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n}\n\n.columnHeaders {\n  display: flex;\n  position: absolute;\n  top: -3.6vh;\n}\n\n.rowHeaders {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: -3.6vh;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 3vh);\n  grid-template-rows: repeat(10, 3vh);\n  position: absolute;\n  top: 0;\n}\n\n.controls {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  width: 95%;\n  margin: 0 2.5%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2vh;\n}\n\nbutton, .central {\n  background-color: rgb(0, 114, 221);\n  color: white;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  padding: 8px 0;\n  border: none;\n  border-radius: 7px;\n  font-weight: 700;\n  width: 100%;\n}\n\n.central {\n  background-color: red;\n  display: flex;\n  justify-content: center;\n}\n\n.info {\n  outline: 3px solid red;\n  background-color: #fff;\n  color: black;\n}\n\n.not-visible {\n  display: none;\n}",""]);const r=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var h=this[r][0];null!=h&&(a[h]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},a=[],r=0;r<t.length;r++){var h=t[r],l=i.base?h[0]+i.base:h[0],d=o[l]||0,c="".concat(l," ").concat(d);o[l]=d+1;var p=n(c),m={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var u=s(m,i);i.byIndex=r,e.splice(r,0,{identifier:c,updater:u,references:1})}a.push(c)}return a}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var o=i(t=t||[],s=s||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var r=n(o[a]);e[r].references--}for(var h=i(t,s),l=0;l<o.length;l++){var d=n(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=h}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{function t(t){this.size=t,this.board=[],this.moves=new Set,this.placeShip=function(e,n,i="v"){const[s,o]=n,a=e.length;if(s<=0||s>t||o<=0||o>t)throw new Error("initial coordinates outside board");let r={};if(r.ship=e,r.coordinates=[],"v"===i){if(o+a>t+1)throw new Error("ship placed outside board");for(let t=0;t<a;t++)r.coordinates.push([s,o+t].join(","));if(this.shipsCollide(r))throw new Error("ship placed over an existing ship")}else if("h"===i){if(s+a>t+1)throw new Error("ship placed outside board");for(let t=0;t<a;t++)r.coordinates.push([s+t,o].join(","));if(this.shipsCollide(r))throw new Error("ship placed over an existing ship")}this.board.push(r)},this.shipsCollide=function(t){return t.coordinates.some((t=>this.board.some((e=>e.coordinates.some((e=>t===e))))))},this.deleteShip=function(t){this.board=this.board.filter((e=>!e.coordinates.some((e=>e===t))))},this.receiveAttack=function(e){const[n,i]=e;if(n<=0||n>t||i<=0||i>t)throw new Error("attack coordinates outside board");if(this.moves.has(e.join(",")))throw new Error("repeated attack coordinates");for(let t of this.board)for(let n of t.coordinates)if(e.join(",")===n)return t.ship.hit(),this.moves.add(e.join(",")),"hit";return this.moves.add(e.join(",")),"miss"},this.allSunk=function(){return this.board.every((t=>t.ship.sunken))},this.resetGameboard=function(){this.resetMoves(),this.resetShips()},this.resetMoves=function(){this.moves.forEach((t=>this.moves.delete(t)))},this.resetShips=function(){this.board=[]}}function e(t,e){this.id=e,this.length=t,this.hits=0,this.sunken=!1,this.isSunk=function(){this.hits===this.length&&(this.sunken=!0)},this.hit=function(){this.hits++,this.isSunk()}}function i(t,n,i,s="human"){this.type=s,this.id=i,this.ownGameboard,this.enemyGameboard,this.domGameboard=new t(this),this.moves=new Set,this.ships=[new e(5,"cruisser"),new e(3,"battleship"),new e(3,"submarine"),new e(2,"destroyer")],this.domShips=this.ships.map((t=>new n(t,this.id))),this.setGameboards=function(t,e){this.ownGameboard=t,this.enemyGameboard=e},this.attack=function(t){if("computer"===this.type){const e=this.enemyGameboard.size;do{t=[Math.floor(Math.random()*e)+1,Math.floor(Math.random()*e)+1]}while(this.moves.has(t.join(",")))}this.moves.add(t.join(",")),this.enemyGameboard.receiveAttack(t)},this.placeShip=function(t){let e=this.domGameboard.getShipLocation(t),[n,i]=e.split(","),s=parseInt(n),o=parseInt(i),a=this.domShips.find((e=>t.target.classList.contains(e.ship.id)));"h"===a.direction&&s>11-a.shipLength?s=11-a.shipLength:"v"===a.direction&&o>11-a.shipLength&&(o=11-a.shipLength);let r=a.direction;try{return this.ownGameboard.placeShip(a.ship,[s,o],r),a.positionShip(e),1}catch(t){return console.log(t),0}finally{this.finishShipPlacement(),console.log(this.ownGameboard.board)}},this.deleteShip=function(t){this.ownGameboard.deleteShip(t)},this.resetShips=function(){this.ownGameboard.resetShips()},this.resetAllShips=function(){this.ownGameboard.resetShips(),this.domGameboard.resetAllShips(),this.domGameboard.placeShipsControls(),console.log(this.ownGameboard)},this.randomizeShips=function(){console.log("randomize called");for(let t of this.domShips){let e,n,i,s,o=t.shipLength;for(;!e;){n=Math.floor(10*Math.random())+1,i=Math.floor(10*Math.random())+1,s=0===Math.floor(2*Math.random())?"h":"v","h"===s&&n>11-o?n=11-o:"v"===s&&i>11-o&&(i=11-o);try{this.ownGameboard.placeShip(t.ship,[n,i],s),e=!0}catch(t){console.log(t)}}t.direction=s,t.placeShip(`${n},${i}`,s)}console.log(this.ownGameboard),this.domGameboard.finishPlaceShipsControls()},this.finishShipPlacement=function(){4===this.ownGameboard.board.length&&this.domGameboard.finishPlaceShipsControls()}}function s(e,n,s,o){if("1p"!==s&&"2p"!==s)throw new Error("invalid parameter");this.player1=new i(e,n,"1"),this.player2="2p"===s?new i(e,n,"2"):new i(e,n,"2","computer"),this.gameboard1=new t(o),this.gameboard2=new t(o),this.activePlayer=this.player1,this.player1.setGameboards(this.gameboard1,this.gameboard2),this.player2.setGameboards(this.gameboard2,this.gameboard1),this.resetGame=function(){this.gameboard1.resetGameboard(),this.gameboard2.resetGameboard();for(let t of this.gameboard1.board)this.gameboard1.deleteShip(t.coordinates[0]);for(let t of this.gameboard2.board)this.gameboard2.deleteShip(t.coordinates[0])},this.changeActivePlayer=function(){this.activePlayer=this.activePlayer===this.player1?this.player2:this.player1},this.passDevice=function(){this.activePlayer.domGameboard.passDevice(),this.changeActivePlayer()}}function o(t){this.player=t,this.controls=document.getElementsByClassName("controls"),this.newGame=document.getElementById("new-game"),this.central=document.getElementById("pass"),this.random=document.getElementById("random"),this.finish=document.getElementById("finish"),this.resetGame=document.getElementById("reset-game"),this.resetShips=document.getElementById("reset-ships");const e=document.getElementsByClassName("grid");this.grid=[...e].find((t=>t.classList.contains(this.player.id))),this.buildGrid=function(){for(let t=1;t<=100;t++){let e=document.createElement("div"),n=t%10==0?10:t%10,i=Math.ceil(t/10);e.dataset.coordinates=`${n},${i}`,e.className=`cell ${this.player.id+1}`,this.grid.appendChild(e)}},this.getShipLocation=function(e){let n,i=e.changedTouches[0].clientX,s=e.changedTouches[0].clientY;return document.elementFromPoint(i,s).classList.contains("cell")&&document.elementFromPoint(i,s).classList.contains(t.id)?(n=document.elementFromPoint(i,s),this.hideCoordinates(),console.log(n.dataset.coordinates),n.dataset.coordinates):(this.hideCoordinates(),null)},this.hideCoordinates=function(){let t=document.getElementById("random");t.classList.remove("info"),t.textContent="Random"},this.resetAllShips=function(){const t=document.getElementsByClassName("ships")[this.player.id-1];for(let e of this.player.domShips)e.resetShipImg(),t.appendChild(e.shipDiv);this.grid.innerHTML="",this.buildGrid()},this.placePlayerShips=function(){const t=document.getElementById("pass");document.getElementById("reset-game").textContent="Reset Ships",t.textContent="Randomize"},this.orientButtons=function(){"1"===this.player.id?this.controls[0].style.transform="rotate(180deg) translate(0, 50%)":"2"===this.player.id&&(this.controls[0].style.transform="translate(0, 50%)")},this.passDevice=function(){},this.hide=function(t){t.classList.add("not-visible")},this.show=function(t){t.classList.remove("not-visible")},this.placeShipsControls=function(){this.show(this.random),this.hide(this.finish)},this.finishPlaceShipsControls=function(){this.hide(this.random),this.show(this.finish)}}function a(t,n){this.ship=t,this.shipLength=t.length;const i=document.getElementsByClassName("ship-div");this.shipDiv=[...i].find((e=>e.classList.contains(n)&&e.classList.contains(t.id))),this.shipImg=this.shipDiv.children[1],this.direction="h",this.x0,this.y0,this.x,this.y,this.positionShip=function(t){const[e,i]=t.split(",");let s,o=parseInt(e),a=parseInt(i);return"h"===this.direction&&o>11-this.shipLength?o=11-this.shipLength:"v"===this.direction&&a>11-this.shipLength&&(a=11-this.shipLength),s=document.querySelectorAll(`[data-coordinates="${o},${a}"]`)[n-1],this.showRotateShip=function(){console.log("Rotation not allowed after placing a ship in the board")},s.appendChild(this.shipDiv),this.shipImg.style.left=null,this.shipImg.style.right=null,this.shipImg.style.top=null,this.shipImg.style.bottom=null,this.x0=null,this.y0=null,this.x=o,this.y=a,1},this.resetShip=function(){if(this.shipImg.style.left=null,this.shipImg.style.right=null,this.shipImg.style.top=null,this.shipImg.style.bottom=null,this.x||this.y)try{this.player.placeShip(new e(this.shipLength),[this.x,this.y],this.direction)}catch(t){console.log(t)}},this.dragShip=function(t){this.hideAllRotateShips();let e=t.changedTouches[0].clientX,i=t.changedTouches[0].clientY;this.shipImg.style.position="absolute",this.x0||(this.x0=e),this.y0||(this.y0=i),"1"===n?(this.shipImg.style.right=e-this.x0+"px",this.shipImg.style.bottom=i-this.y0+"px"):"2"===n&&(this.shipImg.style.left=e-this.x0+"px",this.shipImg.style.top=i-this.y0+"px"),this.showCoordinates(e,i)},this.hideAllRotateShips=function(){let t=document.getElementsByClassName("rotate");for(let e of t)e.classList.remove("visible")},this.showRotateShip=function(t){this.hideAllRotateShips(),t.target.children[0].classList.add("visible")},this.rotateShip=function(t){return t.stopPropagation(),"h"===this.direction?(this.direction="v",this.shipImg.style.transform="translate(3vh) rotate(90deg)",this.shipImg.parentNode.style.width="3vh",this.hideAllRotateShips()):"v"===this.direction&&(this.direction="h",this.shipImg.style.transform=null,this.shipImg.parentNode.style.width=null,this.hideAllRotateShips()),this.direction},this.resetShipImg=function(){this.direction="h",this.shipImg.style.transform=null,this.shipImg.parentNode.style.width=null},this.showCoordinates=function(t,e){let i,s,o=[null,"A","B","C","D","E","F","G","H","I","J"],a=document.getElementById("random");if(document.elementFromPoint(t,e).classList.contains("cell")&&document.elementFromPoint(t,e).classList.contains(n)&&(i=document.elementFromPoint(t,e)),i){s=i.dataset.coordinates;let[t,e]=s.split(",");a.classList.add("info"),a.textContent=`${o[t]} , ${e}`}},this.placeShip=function(t,e){return"v"===e&&(this.shipImg.style.transform="translate(3vh) rotate(90deg)",this.shipImg.parentNode.style.width="3vh"),this.shipImg.style.position="absolute",this.positionShip(t)}}var r=n(379),h=n.n(r),l=n(795),d=n.n(l),c=n(569),p=n.n(c),m=n(565),u=n.n(m),f=n(216),g=n.n(f),v=n(589),y=n.n(v),b=n(771),S={};S.styleTagTransform=y(),S.setAttributes=u(),S.insert=p().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=g(),h()(b.Z,S),b.Z&&b.Z.locals&&b.Z.locals;const w=document.getElementsByClassName("grid");for(let t=0;t<2;t++)for(let e=1;e<=100;e++){let n=document.createElement("div"),i=e%10==0?10:e%10,s=Math.ceil(e/10);n.dataset.coordinates=`${i},${s}`,n.className=`cell ${t+1}`,w[t].appendChild(n)}let x;const E=document.querySelector(".start-game"),L=document.getElementsByClassName("play-mode");for(let t of L)t.addEventListener("touch",(t=>{x=new s(o,a,t.target.dataset.mode,10),E.classList.add("not-visible"),P(x)})),t.addEventListener("click",(t=>{x=new s(o,a,t.target.dataset.mode,10),console.log(x),E.classList.add("not-visible"),P(x)}));const I=document.getElementById("new-game"),C=document.getElementById("pass"),k=document.getElementById("random"),G=document.getElementById("finish"),B=document.getElementById("reset-game"),M=document.getElementById("reset-ships");function P(t){let e=new o(t.player1);for(let e of t.player1.domShips){let n=e.shipDiv,i=n.children[0];n.addEventListener("touchmove",(t=>e.dragShip(t))),n.addEventListener("touchend",(e=>t.player1.placeShip(e))),n.addEventListener("touch",(t=>e.showRotateShip(t))),n.addEventListener("click",(t=>e.showRotateShip(t))),i.addEventListener("touch",(t=>e.rotateShip(t))),i.addEventListener("click",(t=>e.rotateShip(t)))}for(let e of t.player2.domShips){let n=e.shipDiv,i=n.children[0];n.addEventListener("touchmove",(t=>e.dragShip(t))),n.addEventListener("touchend",(e=>t.player2.placeShip(e))),n.addEventListener("touch",(t=>e.showRotateShip(t))),n.addEventListener("click",(t=>e.showRotateShip(t))),i.addEventListener("touch",(t=>e.rotateShip(t))),i.addEventListener("click",(t=>e.rotateShip(t)))}e.orientButtons()}I.addEventListener("touch",(()=>E.classList.remove("not-visible"))),I.addEventListener("click",(()=>E.classList.remove("not-visible"))),C.addEventListener("touch",(()=>x.passDevice())),C.addEventListener("click",(()=>x.passDevice())),G.addEventListener("touch",(()=>x.passDevice())),G.addEventListener("click",(()=>x.passDevice())),k.addEventListener("touch",(()=>x.activePlayer.randomizeShips())),k.addEventListener("click",(()=>x.activePlayer.randomizeShips())),M.addEventListener("touch",(()=>x.activePlayer.resetAllShips())),M.addEventListener("click",(()=>x.activePlayer.resetAllShips())),B.addEventListener("touch",(()=>x.resetGame())),B.addEventListener("click",(()=>x.resetGame()))})()})();