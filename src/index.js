import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";
import Player from "../modules/player";
import DomShip from "../modules/domShip";
import DomGameboard from "../modules/domGameboard";
import Game from "../modules/game";
import "./styles/index.css"

const domGameboard = new DomGameboard();
const grids = document.getElementsByClassName('grid');
for (let i = 0; i < 2; i++) {
  domGameboard.buildGrid(grids[i], i);
}

let game;
const startGame = document.getElementById('start-game');
const playModes = document.getElementsByClassName('play-mode');
for (let button of playModes) {
  button.addEventListener('touch', (e) => {
    game = new Game(e.target.dataset.mode, 10);
    startGame.classList.add('not-visible');
  });
  button.addEventListener('click', (e) => {
    game = new Game(e.target.dataset.mode, 10);
    startGame.classList.add('not-visible');
  });
}



const shipDivs = document.getElementsByClassName('ship-div');
for (let shipDiv of shipDivs) {
  let domShip = new DomShip(shipDiv);
  let rotateButton = shipDiv.children[0];
  if (shipDiv.classList.contains('1')) {
    shipDiv.addEventListener('touchmove', (e) => domShip.dragShip(e, '1', gameboard1));
    shipDiv.addEventListener('touchend', (e) => domShip.dropShip(e, '1', gameboard1));
  } else if (shipDiv.classList.contains('2')) {
    shipDiv.addEventListener('touchmove', (e) => domShip.dragShip(e, '2', gameboard2));
    shipDiv.addEventListener('touchend', (e) => domShip.dropShip(e, '2', gameboard2));
  }
  // let gameboardId = shipDiv.classList.contains('1') ? '1': '2';
  // let gameboard = document.getElementById(gameboardId);
  shipDiv.addEventListener('touch', (e) => {
    if (domShip.showRotateShip()) {
      domShip.showRotateShip(e); 
    } else {
      return;
    }
  });
  shipDiv.addEventListener('click', (e) => domShip.showRotateShip(e));
  rotateButton.addEventListener('touch', (e) => domShip.rotateShip(e));
  rotateButton.addEventListener('click', (e) => domShip.rotateShip(e));
}



const button = document.getElementById('pass');
button.addEventListener('click', () => {
  const allShips = [...document.getElementsByClassName('ship-div')];
  const playerShips = allShips.filter((ship) => {
    return ship.classList.contains('1')
  });
  playerShips.forEach((ship) => {
    const domShip = new DomShip(ship);
    let shipIsPositioned = domShip.randomizeShip(gameboard1, '1');
    console.log(shipIsPositioned);
    while (!shipIsPositioned) {
      shipIsPositioned = domShip.randomizeShip(gameboard1, '1');
    }
  });
});

domGameboard.orientButtons('1');

// testing
/* const testCell = document.getElementById('test-grid').children[0];
const testDiv = document.getElementById('test-div-dr');
testCell.appendChild(testDiv); */