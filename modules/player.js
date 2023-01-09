import Ship from "./ship";

export default function Player(DomGameboard, DomShip, id, type = 'human') {
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
  this.areShipsPlaced = false;

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
    return this.enemyGameboard.receiveAttack(coordinates);
  }

  this.placeShip = function (e) {
    let coordinates = this.domGameboard.getShipLocation(e);
    let domShip = this.domShips.find((domShip) => e.target.classList.contains(domShip.ship.id));
    if (!coordinates) {
      domShip.resetShip();
      return;
    }
    let [x, y] = coordinates.split(',');
    let xCoord = parseInt(x);
    let yCoord = parseInt(y);
    let direction = domShip.direction;

    // Correct positions for horizontal directions
    if (direction === 'h' && xCoord > 11 - domShip.shipLength) {
      xCoord = 11 - domShip.shipLength;
    }
      
    // Correct positions for vertical directions
    else if (direction === 'v' && yCoord > 11 - domShip.shipLength) {
      yCoord = 11 - domShip.shipLength;
    }

    if (domShip.ship.placed) this.ownGameboard.deleteShip(domShip.ship.coordinates);

    try {
      this.ownGameboard.placeShip(domShip.ship, [xCoord, yCoord], direction);
      domShip.positionShip(coordinates);
      console.log(this.ownGameboard);
      return 1;
    } catch (error) {
      console.log(error);
      domShip.resetShip();
      return 0;
    } finally {
      this.checkFinishShipPlacement();
      console.log(this.ownGameboard.board);
    }
  }

  this.deleteShip = function (coordinates) {
    this.ownGameboard.deleteShip(coordinates);
  }

  this.resetShips = function () {
    this.ownGameboard.resetShips();
  }

  this.resetAllShips = function () {
    this.ownGameboard.resetShips();
    this.domGameboard.resetAllShips();
    this.domGameboard.placeShipsControls();
    console.log(this.ownGameboard);
  }

  this.randomizeShips = function () {
    console.log('randomize called');
    for (let domShip of this.domShips) {
      let placedShip;
      let x;
      let y;
      let direction;
      let shipLength = domShip.shipLength;
      while (!placedShip) {
        x = Math.floor(Math.random() * 10) + 1;
        y = Math.floor(Math.random() * 10) + 1;
        const position = Math.floor(Math.random() * 2);
        direction = position === 0 ? 'h' : 'v';

        // Correct positions for horizontal directions
        if (direction === 'h' && x > 11 - shipLength) {
          x = 11 - shipLength;
        }
          
        // Correct positions for vertical directions
        else if (direction === 'v' && y > 11 - shipLength) {
          y = 11 - shipLength;
        }
        try {
          this.ownGameboard.placeShip(domShip.ship, [x,y], direction);
          placedShip = true;
        } catch (error) {
          console.log(error);
        }
      }
      domShip.direction = direction;
      domShip.placeShip(`${x},${y}`, direction);
    }
    console.log(this.ownGameboard);
    this.checkFinishShipPlacement();
    return;
  }

  this.checkFinishShipPlacement = function () {
    if (this.ownGameboard.board.length === 4) {
      this.areShipsPlaced = true;
      this.domGameboard.finishPlaceShipsControls();
    }
  }
}