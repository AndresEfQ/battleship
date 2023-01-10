import Gameboard from "./gameboard";
import Player from "./player";

export default function Game(DomGameboard, DomShip, mode, size) {
  if (mode !== '1p' && mode !== '2p') throw new Error('invalid parameter');

  this.player1 = new Player(DomGameboard, DomShip, '1');
  this.player2 = mode === '2p' ? 
    new Player(DomGameboard, DomShip, '2') : 
    new Player(DomGameboard, DomShip, '2', 'computer');
  this.gameboard1 = new Gameboard(size);
  this.gameboard2 = new Gameboard(size);
  this.receiveDevice = document.getElementById('receive-device');

  this.activePlayer = this.player1;

  this.player1.setGameboards(this.gameboard1, this.gameboard2);
  this.player2.setGameboards(this.gameboard2, this.gameboard1);

  this.resetGame = function () {
    this.player1.resetAllShips();
    this.player2.resetAllShips();
  }

  this.changeActivePlayer = function () {
    this.activePlayer = this.activePlayer === this.player1 ? this.player2 : this.player1;
  }

  this.passDevice = function () {
    if (this.player2.type === 'computer') {
      let result = this.player2.attack();
      this.player2.domGameboard.receiveAttack(null, result);
      this.activePlayer.domGameboard.attackControls();
      this.player2.domGameboard.hideBoard();
      this.player1.domGameboard.resetMessage();
      setTimeout(() => this.player2.domGameboard.resetMessage(), 2500);
      
      return;
    }
    this.activePlayer.domGameboard.passDevice();
    this.changeActivePlayer();
    this.activePlayer.domGameboard.orientButtons();
    this.activePlayer.domGameboard.attackControls();
  }
  
  this.finishPlacingShips = function () {
    if (this.player2.type == 'computer') {
      this.player2.domGameboard.hideBoard();
      this.player2.randomizeShips();
      this.activePlayer.domGameboard.attackControls();
      this.activePlayer.domGameboard.allowPlayer2();
      this.player1.domGameboard.lockShips();
      this.player2.domGameboard.lockShips();
      return;
    } 
    this.activePlayer.domGameboard.hideBoard();
    this.activePlayer.domGameboard.showPassDevice();
    this.changeActivePlayer();
    this.activePlayer.domGameboard.lockShips();
    this.activePlayer.domGameboard.orientButtons();
    this.activePlayer.domGameboard.allowPlayer2();
    if (!this.activePlayer.areShipsPlaced) {
      this.activePlayer.domGameboard.placeShipsControls();
    } else {
      this.activePlayer.domGameboard.attackControls();
    }
  }

  this.showActivePlayerBoard = function () {
    this.activePlayer.domGameboard.hidePassDevice();
    let shouldBlock = this.activePlayer.areShipsPlaced;
    this.activePlayer.domGameboard.showBoard(shouldBlock);
  }

  this.receiveDevice.addEventListener('click', () => this.showActivePlayerBoard());
  this.receiveDevice.addEventListener('touch', () => this.showActivePlayerBoard());
}