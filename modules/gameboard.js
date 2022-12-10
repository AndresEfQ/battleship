export default function Gameboard(size) {
  this.size = size;
  this.board = [];
  this.moves = new Set();

  this.placeShip = function (ship, coordinates, direction = "v") {
    const [x, y] = coordinates;
    const length = ship.length;
    if (x <= 0 || x > size || y <= 0 || y > size) {
      throw new Error("initial coordinates outside board");
    }
    let placedShip = {};
    placedShip.ship = ship;
    placedShip.coordinates = [];
    if (direction === "v") {
      if (y + length >  size + 1) throw new Error("ship placed outside board")
      for (let i = 0; i < length; i++) {
        placedShip.coordinates.push([x, y + i].join(','));
      }
      if (this.shipsCollide(placedShip)) throw new Error("ship placed over an existing ship");
    } else if (direction === "h") {
      if (x + length >  size + 1) throw new Error("ship placed outside board")
      for (let i = 0; i < length; i++) {
        placedShip.coordinates.push([x + i, y].join(','));
      }
      if (this.shipsCollide(placedShip)) throw new Error("ship placed over an existing ship");
    }
    this.board.push(placedShip);
    return 'ok';
  };

  
  // checks if any coordinate of the new ship (first some) is equal to any ocupied cell (third some) of any already placed ship (second some)
  this.shipsCollide = function (ship) {
    return ship.coordinates.some((coordinate) => {
      return this.board.some((placedShip) => {
        return placedShip.coordinates.some((ocupiedCell) => {
          return coordinate === ocupiedCell;
        });
      });
    });
  };

  this.deleteShip = function (coordinates) {
    this.board = this.board.filter((ship) => {
      return !ship.coordinates.some((cell) => {
        return cell === coordinates;
      });
    });
  };

  this.receiveAttack = function (coordinates) {
    const [x, y] = coordinates;
    if (x <= 0 || x > size || y <= 0 || y > size) {
      throw new Error("attack coordinates outside board");
    }
    if (this.moves.has(coordinates.join(','))) throw new Error("repeated attack coordinates")
    
    for (let el of this.board) {
      for (let location of el.coordinates) {
        if (coordinates.join(',') === location) {
          el.ship.hit();
          this.moves.add(coordinates.join(','));
          return "hit";
        }
      }
    }
    this.moves.add(coordinates.join(','));
    return "miss";
  };

  this.allSunk = function () {
    return this.board.every((placedShip) => {
      return placedShip.ship.sunken;
    });
  };

  this.resetGameboard = function () {
    this.resetMoves();
    this.resetShips();
  };

  this.resetMoves = function () {
    this.moves.forEach((hit) => this.moves.delete(hit));
  };

  this.resetShips = function () {
    for (let ship of this.board) {
      this.deleteShip(ship.coordinates[0]);
    }
  }
}