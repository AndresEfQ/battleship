export default function DomGameboard(player) {

  this.player = player;
  this.controls = document.getElementsByClassName('controls');
  this.newGame = document.getElementById('new-game');
  this.central = document.getElementById('central');
  this.resetGame = document.getElementById('reset-game');
  const grids = document.getElementsByClassName('grid');
  this.grid = [...grids].find((grid) => grid.classList.contains(this.player.id));

  this.buildGrid = function () {
    for (let j = 1; j <= 100; j++) {
      let cell = document.createElement('div');
      let x = j % 10 === 0 ? 10 : j % 10;
      let y = Math.ceil(j / 10);
      cell.dataset.coordinates = `${x},${y}`
      cell.className = `cell ${this.player.id + 1}`;
      this.grid.appendChild(cell);
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
    infoDiv.textContent = 'Random'
  }

  this.resetAllShips = function () {
    const shipsDiv = document.getElementsByClassName('ships')[this.player.id - 1];
    for (let domShip of this.player.domShips) {
      domShip.resetShipImg();
      shipsDiv.appendChild(domShip.shipDiv)
    }
    this.grid.innerHTML = '';
    this.buildGrid();
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

  this.passDevice = function () {
    
  }

  const randomize = function () {
    this.player.randomizeShips();
  }

  const resetShips = () => {
    this.player.resetAllShips();
  }

  const passDevice = () => {
    this.passDevice();
  }

  this.setPlaceShipControls = function () {
    this.central.addEventListener('touch', randomize);
    this.central.addEventListener('click', randomize);
    this.central.textContent = 'Random';
    this.resetGame.addEventListener('touch', resetShips);
    this.resetGame.addEventListener('click', resetShips);
    this.resetGame.textContent = 'Reset Ships';
  }

  this.setFinishShipPlacementControls = function () {
    this.central.removeEventListener('touch', randomize)
    this.central.removeEventListener('click', randomize)
    this.central.addEventListener('touch', passDevice);
    this.central.addEventListener('click', passDevice);
    this.central.textContent = 'Finish';
  }
};