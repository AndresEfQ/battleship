import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";
import Player from "../modules/player";
import DomShip from "../modules/domShip";
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

const gameboard1 = new Gameboard(10);
const gameboard2 = new Gameboard(10);

const shipDivs = document.getElementsByClassName('ship-div');
for (let shipDiv of shipDivs) {
  let shipImg = shipDiv.children[1];
  let domShip = new DomShip(shipImg);
  let rotateButton = shipDiv.children[0];
  if (shipDiv.classList.contains('1')) {
    shipDiv.addEventListener('touchmove', (e) => domShip.dragShip(e, '1'));
    shipDiv.addEventListener('touchend', (e) => domShip.dropShip(e, '1', gameboard1));
  } else if (shipDiv.classList.contains('2')) {
    shipDiv.addEventListener('touchmove', (e) => domShip.dragShip(e, '2'));
    shipDiv.addEventListener('touchend', (e) => domShip.dropShip(e, '2', gameboard2));
  }
  // let gameboardId = shipDiv.classList.contains('1') ? '1': '2';
  // let gameboard = document.getElementById(gameboardId);
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