import DomShip from "./domShip";
import Ship from "./ship";
import DomGameboard from "./domGameboard";

export default function Player(id, type = 'human') {
  this.type = type;
  this.id = id;
  this.ownGameboard;
  this.enemyGameboard;
  this.domGameboard = new DomGameboard(this);
  this.moves = new Set();
  this.ships = [
    new Ship(5, 'cruisser'),
    new Ship(3, 'battleship'),
    new Ship(3, 'submarine'),
    new Ship(2, 'destroyer'),
  ];
  this.domShips = this.ships.map((ship) => new DomShip(ship, this.id));

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

  this.placeShip = function (e) {
    let coordinates = this.domGameboard.getShipLocation(e);
    let [x, y] = coordinates.split(',');
    let xCoord = parseInt(x);
    let yCoord = parseInt(y);
    let domShip = this.domShips.find((domShip) => e.target.classList.contains(domShip.ship.id));
    let direction = domShip.direction;
    console.log({domShip, direction, coordinates});
    try {
      this.ownGameboard.placeShip(domShip.ship, [xCoord, yCoord], direction);
      domShip.positionShip(coordinates);
      return 1;
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  this.deleteShip = function (coordinates) {
    this.ownGameboard.deleteShip(coordinates);
  }

  this.resetShips = function () {
    this.ownGameboard.resetShips();
  }

  this.randomizeShips = function () {
    for (let ship of this.ships) {
      let placedShip;
      let x;
      let y;
      let direction;
      while (!placedShip) {
        x = Math.floor(Math.random() * 10) + 1;
        y = Math.floor(Math.random() * 10) + 1;
        const position = Math.floor(Math.random() * 2);
        direction = position === 0 ? 'h' : 'v';
        placedShip = this.placeShip(ship, [x,y], direction);
      }
      const domShip = new DomShip(ship, this);
      domShip.placeShip(`${x},${y}`, direction);
    }
  }

  /* this.placeAllShips = function () {


    return;
  } */
}