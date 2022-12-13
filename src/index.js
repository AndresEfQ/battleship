import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";
import Player from "../modules/player";
import DomShip from "../modules/domShip";
import DomGameboard from "../modules/domGameboard";
import Game from "../modules/game";
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

let game;
const startGame = document.getElementById('start-game');
const playModes = document.getElementsByClassName('play-mode');
for (let button of playModes) {
  button.addEventListener('touch', (e) => {
    game = new Game(e.target.dataset.mode, 10);
    startGame.classList.add('not-visible');
    setGame(game);
  });
  button.addEventListener('click', (e) => {
    game = new Game(e.target.dataset.mode, 10);
    console.log(game);
    startGame.classList.add('not-visible');
    setGame(game);
  });
}

const newGameButton = document.getElementById('new-game');
newGameButton.addEventListener('touch', () => startGame.classList.remove('not-visible'));
newGameButton.addEventListener('click', () => startGame.classList.remove('not-visible'));

function setGame(game) {
  let domGameboard1 = new DomGameboard(game.player1);
  let domGameboard2 = new DomGameboard(game.player2);
  
  for (let domShip of game.player1.domShips) {
    let shipDiv = domShip.shipDiv;
    let rotateButton = shipDiv.children[0];
    shipDiv.addEventListener('touchmove', (e) => domShip.dragShip(e));
    shipDiv.addEventListener('touchend', (e) => game.player1.placeShip(e));
    shipDiv.addEventListener('touch', (e) => domShip.showRotateShip(e));
    shipDiv.addEventListener('click', (e) => domShip.showRotateShip(e)); // Only for testind, might delete
    rotateButton.addEventListener('touch', (e) => domShip.rotateShip(e));
    rotateButton.addEventListener('click', (e) => domShip.rotateShip(e)); // Only for testind, might delete
  
  }
  for (let domShip of game.player2.domShips) {
    let shipDiv = domShip.shipDiv;
    let rotateButton = shipDiv.children[0];
    shipDiv.addEventListener('touchmove', (e) => domShip.dragShip(e));
    shipDiv.addEventListener('touchend', (e) => game.player2.placeShip(e));
    shipDiv.addEventListener('touch', (e) => domShip.showRotateShip(e));
    shipDiv.addEventListener('click', (e) => domShip.showRotateShip(e)); // Only for testind, might delete
    rotateButton.addEventListener('touch', (e) => domShip.rotateShip(e));
    rotateButton.addEventListener('click', (e) => domShip.rotateShip(e)); // Only for testind, might delete
  }
  domGameboard1.orientButtons();
  domGameboard1.setPlaceShipControls();
}



/* const button = document.getElementById('pass');
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
}); */


// testing
/* const testCell = document.getElementById('test-grid').children[0];
const testDiv = document.getElementById('test-div-dr');
testCell.appendChild(testDiv); */