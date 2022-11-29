import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";
import Player from "../modules/player";
import Dom from "../modules/dom";
import "./styles/index.css"

const grids = document.getElementsByClassName('grid');
for (let grid of grids) {
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
  }
}

const shipImages = document.getElementsByClassName('ship-img');
for (let img of shipImages) {
  let gameboardId = img.classList.contains('1') ? 'gameboard1' : 'gameboard2';
  let xDelta = gameboardId === 'gameboard1' ? -50 : 170;
  let yDelta = gameboardId === 'gameboard1' ? -390 : 220;
  let gameboard = document.getElementById(gameboardId)
  let dom = new Dom();
  img.addEventListener('touchmove', (e) => dom.grabShip(e, gameboard, xDelta, yDelta));
}

/* const shipImages2 = document.getElementsByClassName('ship-img2');
for (let img of shipImages2) {
  let gameboard = document.getElementById('gameboard2')
  let dom = new Dom();
  img.addEventListener('touchmove', (e) => dom.grabdShip2(e, gameboard));
} */

const button = document.getElementById('pass');
button.addEventListener('click', () => alert('pass'));

/* const testImg = document.getElementById('testImg');
const testGameboard = document.getElementById('testGameboard');
testGameboard.addEventListener('click', (e) => {
  console.log(e.clientX, e.clientY);
  testImg.style.position = 'absolute';
  testImg.style.top = e.clientY;
  testImg.style.top = e.clientX;
}) */