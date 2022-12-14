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

  this.player1.setGameboards(this.gameboard1, this.gameboard2);
  this.player2.setGameboards(this.gameboard2, this.gameboard1);

  this.resetGame = function () {
    this.gameboard1.resetGameboard();
    this.gameboard2.resetGameboard();
    for (let ship of this.gameboard1.board) {
      this.gameboard1.deleteShip(ship.coordinates[0]);
    }
    for (let ship of this.gameboard2.board) {
      this.gameboard2.deleteShip(ship.coordinates[0]);
    }
  }
}