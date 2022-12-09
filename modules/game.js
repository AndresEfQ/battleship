import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";

export default function Game(mode, size) {
  if (mode !== '1p' && mode !== '2p') throw new Error('invalid parameter');

  this.player1 = new Player();
  this.player2 = mode === '2p' ? 
    new Player() : 
    new Player('computer');
  this.gameboard1 = new Gameboard(size);
  this.gameboard2 = new Gameboard(size);

  this.player1.setGameboards(this.gameboard1, this.gameboard2);
  this.player2.setGameboards(this.gameboard2, this.gameboard1);

  this.resetGame = function () {
    this.gameboard1.moves.forEach((hit) => this.gameboard1.moves.delete(hit));
    this.gameboard2.moves.forEach((hit) => this.gameboard2.moves.delete(hit));
    for (let ship of this.gameboard1.board) {
      this.gameboard1.deleteShip(ship.coordinates[0]);
    }
    for (let ship of this.gameboard2.board) {
      this.gameboard2.deleteShip(ship.coordinates[0]);
    }
  }
}