export default function Player(type = 'human') {
  this.type = type
  this.enemyGameboard;
  this.ownGameboard;
  this.moves = new Set();
  
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

  this.placeShip = function (coordinates, lenght, direction) {
    this.ownGameboard.placeShip(coordinates, lenght, direction);
  }
}