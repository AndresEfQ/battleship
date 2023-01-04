import Game from "../modules/game";
import DomGameboard from "../modules/domGameboard";
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

let game;
const startGame = document.querySelector('.start-game');
const playModes = document.getElementsByClassName('play-mode');
for (let button of playModes) {
  button.addEventListener('touch', (e) => {
    game = new Game(DomGameboard, DomShip, e.target.dataset.mode, 10);
    startGame.classList.add('not-visible');
    setGame(game);
  });
  button.addEventListener('click', (e) => {
    game = new Game(DomGameboard, DomShip, e.target.dataset.mode, 10);
    console.log(game);
    startGame.classList.add('not-visible');
    setGame(game);
  });
}

const newGameButton = document.getElementById('new-game');
const pass = document.getElementById('pass');
const random = document.getElementById('random');
const finishPlacingShips = document.getElementById('finish');
const resetGame = document.getElementById('reset-game');
const resetShips = document.getElementById('reset-ships');

newGameButton.addEventListener('touch', () => startGame.classList.remove('not-visible'));
newGameButton.addEventListener('click', () => startGame.classList.remove('not-visible'));

pass.addEventListener('touch', () => game.passDevice());
pass.addEventListener('click', () => game.passDevice());
finishPlacingShips.addEventListener('touch', () => game.finishPlacingShips());
finishPlacingShips.addEventListener('click', () => game.finishPlacingShips());

random.addEventListener('touch', () => game.activePlayer.randomizeShips());
random.addEventListener('click', () => game.activePlayer.randomizeShips());

resetShips.addEventListener('touch', () => game.activePlayer.resetAllShips());
resetShips.addEventListener('click', () => game.activePlayer.resetAllShips());

resetGame.addEventListener('touch', () => game.resetGame());
resetGame.addEventListener('click', () => game.resetGame());

function setGame(game) {
  
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
  game.activePlayer.domGameboard.orientButtons();
}

/* 
this.central.addEventListener('touch', () => this.player.randomizeShips());
this.central.addEventListener('click', randomize);
this.central.textContent = 'Random';
this.resetGame.addEventListener('touch', resetShips);
this.resetGame.addEventListener('click', resetShips);
this.resetGame.textContent = 'Reset Ships';


this.central.removeEventListener('touch', randomize)
this.central.removeEventListener('click', randomize)
this.central.addEventListener('touch', passDevice);
this.central.addEventListener('click', passDevice);
this.central.textContent = 'Finish'; */

