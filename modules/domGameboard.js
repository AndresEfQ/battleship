export default function DomGameboard(player) {

  this.player = player;
  this.controls = document.getElementsByClassName('controls');
  this.newGame = document.getElementById('new-game');
  this.central = document.getElementById('central');
  this.resetGame = document.getElementById('reset-game');

  this.buildGrid = function (grid) {
    for (let j = 1; j <= 100; j++) {
      let cell = document.createElement('div');
      let x = j % 10 === 0 ? 10 : j % 10;
      let y = Math.ceil(j / 10);
      cell.dataset.coordinates = `${x},${y}`
      cell.className = `cell ${this.player.id + 1}`;
      grid.appendChild(cell);
    }
  };

  /* 
  * Sets x and y to the final dragging point (endtouch event) and calls positionShip() if it is 
  * inside the correct gameboard's grid. Otherwise, it resets the img position.
  */ 
  this.getShipLocation = function (e) {
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    let cell;
    if (document.elementFromPoint(x, y).classList.contains('cell') &&
        document.elementFromPoint(x, y).classList.contains(player.id)) {
      cell = document.elementFromPoint(x, y);
      this.hideCoordinates();
      return cell.dataset.coordinates;
    } 
    // this.resetShip(player);
    this.hideCoordinates();
    return null;
  }

  /*
  * Transforms the middle button back into a button after being an information div.
  */
   this.hideCoordinates = function() {
    let infoDiv = document.getElementById('central');
    infoDiv.classList.remove('info');
    infoDiv.textContent = 'Pass Device'
  }

  this.resetAllShips = function (grid, ships) {
    const shipsDiv = document.getElementsByClassName('ships')[this.player.id - 1];
    for (let ship of ships) {
      shipsDiv.appendChild(ship)
    }
    this.buildGrid(grid, gameboardId);
  };

  this.placePlayerShips = function () {
    const randomFinish = document.getElementById('pass');
    const reset = document.getElementById('reset-game');
    
    reset.textContent = "Reset Ships";
    randomFinish.textContent = "Randomize";
    
  }
  
  this.orientButtons = function () {
    if (this.player.id === '1') {
      this.controls[0].style.transform = "rotate(180deg) translate(0, 50%)";
    } else if (this.player.id === '2') {
      this.controls[0].style.transform = "translate(0, 50%)";
    }
  }

  this.setPlaceShipControls = function () {
    this.central.addEventListener('touch', () => this.player.randomizeShips());
    this.central.addEventListener('click', () => this.player.randomizeShips());
    this.central.textContent = 'Random';
    this.resetGame.addEventListener('touch', () => this.player.resetAllShips());
    this.resetGame.addEventListener('click', () => this.player.resetAllShips());
    this.resetGame.textContent = 'Reset Ships';
  }
};