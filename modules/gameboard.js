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
      if (y + length > size) throw new Error("ship placed outside board")
      for (let i = 0; i < length; i++) {
        placedShip.coordinates.push([x, y + i].join(','));
      }
    } else if (direction === "h") {
      if (x + length > size) throw new Error("ship placed outside board")
      for (let i = 0; i < length; i++) {
        placedShip.coordinates.push([x + i, y].join(','));
      }
    }

    this.board.push(placedShip);

    return this.board;
  }

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
  }

  this.allSunk = function () {
    return this.board.every((placedShip) => {
      return placedShip.ship.sunken;
    });
  }
}