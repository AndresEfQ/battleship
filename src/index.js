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
  console.log(img);
  let dom = new Dom();
  img.addEventListener('touchstart', (e) => dom.holdShip(e));
  img.addEventListener('touchend', (e) => dom.cancelHoldShip(e));
  img.addEventListener('mouseup', (e) => dom.cancelHoldShip(e));
  img.addEventListener('mousedown', (e) => dom.holdShip(e));
}

const button = document.getElementById('pass');
button.addEventListener('click', () => alert('pass'));

const testImg = document.getElementById('testImg');
const testGameboard = document.getElementById('testGameboard');
testGameboard.addEventListener('click', (e) => {
  console.log(e.clientX, e.clientY);
  testImg.style.position = 'absolute';
  testImg.style.top = e.clientY;
  testImg.style.top = e.clientX;
})