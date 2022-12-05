import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";
import Player from "../modules/player";
import { DomShip, DomCell } from "../modules/dom";
import "./styles/index.css"

const grids = document.getElementsByClassName('grid');
for (let grid of grids) {
  for (let i = 1; i <= 100; i++) {
    let cell = document.createElement('div');
    /* cell.addEventListener('touchenter', () => cell.classList.add('touched-cell'));
    cell.addEventListener('touchleave', () => cell.classList.remove('touched-cell')); */
    let x = i % 10 === 0 ? 10 : i % 10;
    let y = Math.ceil(i / 10);
    cell.dataset.coordinates = `${x},${y}`
    cell.className = 'cell';
    grid.appendChild(cell);
  }
}

const shipDivs = document.getElementsByClassName('ship-div');
for (let shipDiv of shipDivs) {
  let gameboardId = shipDiv.classList.contains('1')? 
    'gameboard1': 
    'gameboard2';
  let shipImg = shipDiv.children[1];
  let gameboard = document.getElementById(gameboardId);
  let rotateButton = shipDiv.children[0];
  let domShip = new DomShip(shipImg);
  shipDiv.addEventListener('touchmove', (e) => domShip.dragShip(e, gameboardId));
  shipDiv.addEventListener('touchend', (e) => domShip.dropShip(e, gameboard));
  shipDiv.addEventListener('touch', (e) => domShip.showRotateShip(e));
  shipDiv.addEventListener('click', (e) => domShip.showRotateShip(e));
  rotateButton.addEventListener('touch', (e) => domShip.rotateShip(e));
  rotateButton.addEventListener('click', (e) => domShip.rotateShip(e));
}

/* const gameboards = document.getElementsByClassName('gameboard');
for (let board of gameboards) {
  let dom = new Dom();
  board.addEventListener('touchend', dom.dropShip);
} */

const button = document.getElementById('pass');
button.addEventListener('click', () => alert('pass'));


// testing
const testImg = document.getElementById('testImg');
const testGameboard = document.getElementById('testGameboard');
testGameboard.addEventListener('click', (e) => {
  e.target.childNodes[0];
})