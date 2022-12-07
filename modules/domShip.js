import Ship from "./ship";

export default function DomShip(ship) {

  this.ship = ship;
  this.orientation = 'h';
  this.x0;
  this.y0;
  this.x;
  this.y;
  
  if (ship.classList.contains('cruisser')) this.shipLength = 5;
  else if (ship.classList.contains('destroyer')) this.shipLength = 2;
  else this.shipLength = 3;

  /*
  * Appends the img div to the correct board cell. The cell is corrected when it is too close to the
  * borders causing a ship overflow. 
  */
  this.positionShip = function (e, cell, gameboardId, gameboard) {
    let correctedCell;
    let div;

    // when the rotate button is active, the rotate img acts as the e.target, so it must be corrected
    if (!e.target.classList.contains('ship-div')) {
      this.resetShip();
      return;
    } else {
      div = e.target;
    }

    // Correct positions for horizontal orientations
    if (this.orientation === 'h') {
      if (div.classList.contains('cruisser')) {
        if (this.x === 1 || this.x == 2) {
          this.x = 1;
          correctedCell = document.querySelectorAll(`[data-coordinates="3,${this.y}"]`)[gameboardId - 1];
        } else if (this.x === 9 || this.x == 10) {
          this.x = 6;
          correctedCell = document.querySelectorAll(`[data-coordinates="8,${this.y}"]`)[gameboardId - 1];
        } else {
          this.x -= 2;
          correctedCell = cell;
        }
      } else if (div.classList.contains('destroyer')) {
        if (this.x === 1) {
          correctedCell = document.querySelectorAll(`[data-coordinates="2,${this.y}"]`)[gameboardId - 1];
        } else if (this.x === 10) {
          this.x = 9;
          correctedCell = cell;
        } else {
          correctedCell = cell;
        }
      } else {
        if (this.x === 1) {
          correctedCell = document.querySelectorAll(`[data-coordinates="2,${this.y}"]`)[gameboardId - 1];
        } else if (this.x === 10) {
          this.x = 9;
          correctedCell = document.querySelectorAll(`[data-coordinates="9,${this.y}"]`)[gameboardId - 1];
        } else {
          this.x--;
          correctedCell = cell;
        }
      }
    } 

    // Correct positions for vertical orientations
    else {
      if (div.classList.contains('cruisser')) {
        if (this.y === 1 || this.y == 2) {
          this.y = 1;
          correctedCell = document.querySelectorAll(`[data-coordinates="${this.x},3"]`)[gameboardId - 1];
        } else if (this.y === 9 || this.y == 10) {
          this.y = 6;
          correctedCell = document.querySelectorAll(`[data-coordinates="${this.x},8"]`)[gameboardId - 1];
        } else {
          this.y -= 2;
          correctedCell = cell;
        }
      } else if (div.classList.contains('destroyer')) {
        if (this.y === 1) {
          correctedCell = document.querySelectorAll(`[data-coordinates="${this.x},2"]`)[gameboardId - 1];
        } else if (this.y === 10) {
          this.y = 9;
          correctedCell = cell;
        } else {
          correctedCell = cell;
        }
      } else {
        if (this.y === 1) {
          this.y = 2;
          correctedCell = document.querySelectorAll(`[data-coordinates="${this.x},2"]`)[gameboardId - 1];
        } else if (this.y === 10) {
          this.y = 9;
          correctedCell = document.querySelectorAll(`[data-coordinates="${this.x},9"]`)[gameboardId - 1];
        } else {
          correctedCell = cell;
          this.y--;
        }
      }
    }
    console.log(this.x, this.y);
    try {
      gameboard.placeShip(new Ship(this.shipLength), [this.x, this.y], this.orientation);
    } catch (error) {
      console.log(error);
      console.log('error thrown')
      this.showMessage(error);
      this.resetShip();
      return;
    }
    console.log(gameboard.board);
  /*   if (!ans) {
      this.resetShip();
      return;
    } */
    // Append the ship div to the correct cell and erase all position variables
    correctedCell.appendChild(div);
    ship.style.position = null;
    ship.style.left = null;
    ship.style.right = null;
    ship.style.top = null;
    ship.style.bottom = null;
    this.x0 = null;
    this.y0 = null;
    console.log(gameboard.board);
  }

  // Reset the ship's position
  this.resetShip = function () {
    this.ship.style.position = null;
  }

  /* 
  *  Calculate the distance from origin to final touch for x and y and sets the img position variables
  *  to those values, it gives the apearance of the img following the finger.
  */  
  this.dragShip = function (e, gameboardId) {
    this.hideAllRotateShips();
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    this.ship.style.position = 'absolute';
    
    if (gameboardId === '1') {
      if (!this.x0) this.x0 = x;
      if (!this.y0) this.y0 = y;
      this.ship.style.right = `${x - this.x0}px`;
      this.ship.style.bottom = `${y - this.y0}px`;
      
    } else if (gameboardId === '2') {
      if (!this.x0) this.x0 = x;
      if (!this.y0) this.y0 = y;
      this.ship.style.left = `${x - this.x0}px`;
      this.ship.style.top = `${y - this.y0}px`;
    }
    this.showCoordinates(x, y, gameboardId);
  }
  
  /* 
  * Sets x and y to the final dragging point (endtouch event) and calls positionShip() if it is inside
  * the correct gameboard's grid. Otherwise, it resets the img position.
  */ 
  this.dropShip = function (e, gameboardId, gameboard) {
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    let cell;
    if (document.elementFromPoint(x, y).classList.contains('cell') &&
        document.elementFromPoint(x, y).classList.contains(gameboardId)) {
      cell = document.elementFromPoint(x, y);
      let coordinates = cell.dataset.coordinates;
      let [row, col] = coordinates.split(',');
      this.x = parseInt(row);
      this.y = parseInt(col);
      this.positionShip(e, cell, gameboardId, gameboard);
    } else {
      this.resetShip();
    }
    this.hideCoordinates();
  }
  
  this.hideAllRotateShips = function () {
    let rotateDivs = document.getElementsByClassName('rotate');
    for (let rotateDiv of rotateDivs) {
      rotateDiv.classList.remove('visible');
    }
  }

  this.showRotateShip = function (e) {
    this.hideAllRotateShips();
    e.target.children[0].classList.add('visible');
  }
  
  this.rotateShip = function (e) {
    e.stopPropagation();
    if (this.orientation === 'h') {
      this.orientation = 'v';
      this.ship.style.transform = 'rotate(90deg)';
    } else if (this.orientation === 'v') {
      this.orientation = 'h';
      this.ship.style.transform = 'rotate(0deg)';
    }
  }
  
  this.showCoordinates = function(x, y, gameboardId) {
    let columns = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let infoDiv = document.getElementById('pass');
    let cell;
    let coordinates;
    if (document.elementFromPoint(x, y).classList.contains('cell') &&
        document.elementFromPoint(x, y).classList.contains(gameboardId)) {
      cell = document.elementFromPoint(x, y);
    } else {
      this.hideCoordinates();
    }
    if (cell) {
      coordinates = cell.dataset.coordinates;
      let [col, row] = coordinates.split(',');
      infoDiv.classList.add('info');
      infoDiv.textContent = `${columns[col]} , ${row}`;
    }
  }

  this.showMessage = function(message) {
    let infoDiv = document.getElementById('pass');
    infoDiv.classList.add('info');
    infoDiv.textContent = message;
  }
  
  this.hideCoordinates = function() {
    let infoDiv = document.getElementById('pass');
    infoDiv.classList.remove('info');
    infoDiv.textContent = 'Pass Device'
  }
  
}
