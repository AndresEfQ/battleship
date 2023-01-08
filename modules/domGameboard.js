/*
* Module responsible for DOM interactions
*/ 

export default function DomGameboard(player) {

  this.player = player;
  this.controls = document.getElementsByClassName('controls');
  this.newGame = document.getElementById('new-game');
  this.central = document.getElementById('pass');
  this.random = document.getElementById('random');
  this.finish = document.getElementById('finish');
  this.resetGame = document.getElementById('reset-game');
  this.resetShips = document.getElementById('reset-ships');
  const grids = document.getElementsByClassName('grid');
  this.grid = [...grids].find(grid => grid.classList.contains(player.id));
  this.gameboard = document.getElementById(`gameboard${player.id}`);
  this.hidePlayer2 = document.getElementById('hide-player2');

  /*
  * Helper function to build each player's grid, reduces the html code and is used to delete the
  * ships placed in the board
  */ 
  this.buildGrid = function () {
    for (let j = 1; j <= 100; j++) {
      let cell = document.createElement('div');
      let x = j % 10 === 0 ? 10 : j % 10;
      let y = Math.ceil(j / 10);
      cell.dataset.coordinates = `${x},${y}`
      cell.className = `cell ${this.player.id}`;
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
      console.log(cell.dataset.coordinates);
      return cell.dataset.coordinates;
    } 
    this.hideCoordinates();
    return null;
  }

  /*
  * Transforms the middle button back into a button after being an information div.
  */
   this.hideCoordinates = function() {
    let infoDiv = document.getElementById('random');
    infoDiv.classList.remove('info');
    infoDiv.textContent = 'Random'
  }

  /*
  * Delete all ships from the player gameboard and screen
  */
  this.resetAllShips = function () {
    const shipsDiv = document.getElementsByClassName('ships')[this.player.id == 1 ? 1 : 0];
    for (let domShip of this.player.domShips) {
      domShip.resetShipImg();
      shipsDiv.appendChild(domShip.shipDiv)
    }
    this.grid.innerHTML = '';
    this.buildGrid();
  };

  /*
  * Rotate the control buttons to match the player's point of view
  */
  this.orientButtons = function () {
    if (this.player.id === '2') {
      this.controls[0].style.transform = "rotate(180deg) translate(0, 50%)";
    } else if (this.player.id === '1') {
      this.controls[0].style.transform = "translate(0, -50%)";
    }
  }

  this.passDevice = function () {
    
  }

  /*
  * Helper function to hide control buttons when no longer needed
  */
  this.hide = function (node) {
    node.classList.add('not-visible');
  }

  /*
  * Helper function to show control buttons when needed
  */
  this.show = function (node) {
    node.classList.remove('not-visible');
  }

  /*
  * Show the control buttons for the placing ships face
  */
  this.placeShipsControls = function () {
    this.show(this.random);
    this.hide(this.finish);
  }

  /*
  * Show the control buttons for finishing placing ships and giving control to the other player
  */
  this.finishPlaceShipsControls = function () {
    this.hide(this.random);
    this.show(this.finish);
  }

  /*
  * Show control buttons for hitting the oponent player's board
  */
  this.attackControls = function () {
    this.hide(this.finish);
    this.hide(this.resetShips);
    this.show(this.central);
    this.show(this.resetGame);
  }

  /*
  * Hide the player's gameboard
  */
  this.hideBoard = function () {
    this.gameboard.classList.add('opaque');
  }

  this.hidePlayer2.addEventListener('click', () => this.highlightPlayer1())
  this.hidePlayer2.addEventListener('touch', () => this.highlightPlayer1())
  this.hidePlayer2.addEventListener('touchmove', () => this.highlightPlayer1())

  this.highlightPlayer1 = function() {
    if (player.id === '1') {
      this.gameboard.style.transform = 'scale(1.1)';
      setTimeout(() => {
        this.gameboard.style.transform = null;
      }, 500);
    }
  }

  this.allowPlayer2 = function() {
    this.hidePlayer2.classList.add('allow-player');
  }

}