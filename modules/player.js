import DomShip from "./domShip";
import Ship from "./ship";

export default function Player(id, type = 'human') {
  this.type = type;
  this.id = id;
  this.enemyGameboard;
  this.ownGameboard;
  this.moves = new Set();
  this.ships = [
    new Ship(5, 'cruisser'),
    new Ship(3, 'battleship'),
    new Ship(3, 'submarine'),
    new Ship(2, 'destroyer'),
  ];
  
  this.setGameboards = function (ownGameboard, enemyGameboard) {
    this.ownGameboard = ownGameboard
    this.enemyGameboard = enemyGameboard;
  }

  this.attack = function (coordinates) {
    if (this.type === 'computer') {
      const range = this.enemyGameboard.size;

      do {
        const x = Math.floor(Math.random() * range) + 1;
        const y = Math.floor(Math.random() * range) + 1;
        coordinates = [x, y];
      } while (this.moves.has(coordinates.join(',')))
    }
    this.moves.add(coordinates.join(','));
    this.enemyGameboard.receiveAttack(coordinates);
  }

  this.placeShip = function (ship, coordinates, direction) {
    this.ownGameboard.placeShip(ship, coordinates, direction);
  }

  this.deleteShip = function (coordinates) {
    this.ownGameboard.deleteShip(coordinates);
  }

  this.resetShips = function () {
    this.ownGameboard.resetShips();
  }

  this.randomizeShips = function () {
    for (let ship of this.ships) {
      const x = Math.floor(Math.random() * 10) + 1;
      const y = Math.floor(Math.random() * 10) + 1;
      const position = Math.floor(Math.random() * 2);
      const direction = position === 0 ? 'h' : 'v';
      let placedShip = this.placeShip(ship, [x,y], direction);
      while (!placedShip) {
        placedShip = this.placeShip(ship, [x,y], direction);
      }
    }
  }

  /* this.placeAllShips = function () {


    return;
  } */
}