import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";
import Player from "../modules/player";
import { DomShip, DomCell } from "../modules/dom";
import "./styles/index.css"

const grids = document.getElementsByClassName('grid');
for (let i = 0; i < 2; i++) {
  for (let j = 1; j <= 100; j++) {
    let cell = document.createElement('div');
    let x = j % 10 === 0 ? 10 : j % 10;
    let y = Math.ceil(j / 10);
    cell.dataset.coordinates = `${x},${y}`
    cell.className = `cell ${i + 1}`;
    grids[i].appendChild(cell);
  }
}

const shipDivs = document.getElementsByClassName('ship-div');
for (let shipDiv of shipDivs) {
  let gameboardId = shipDiv.classList.contains('1') ? '1': '2';
  let shipImg = shipDiv.children[1];
  let gameboard = document.getElementById(gameboardId);
  let rotateButton = shipDiv.children[0];
  let domShip = new DomShip(shipImg);
  shipDiv.addEventListener('touchmove', (e) => domShip.dragShip(e, gameboardId));
  shipDiv.addEventListener('touchend', (e) => domShip.dropShip(e, gameboardId));
  shipDiv.addEventListener('touch', (e) => domShip.showRotateShip(e));
  shipDiv.addEventListener('click', (e) => domShip.showRotateShip(e));
  rotateButton.addEventListener('touch', (e) => domShip.rotateShip(e));
  rotateButton.addEventListener('click', (e) => domShip.rotateShip(e));
}

const button = document.getElementById('pass');
button.addEventListener('click', () => alert('pass'));


// testing
/* const testCell = document.getElementById('test-grid').children[0];
const testDiv = document.getElementById('test-div-dr');
testCell.appendChild(testDiv); */