import Ship from "./ship";

export default function DomShip(div, ship, player) {

  this.player = player;
  this.ship = ship;
  this.shipLength = ship.length;
  this.shipDiv = div;
  this.shipImg = this.shipDiv.children[1];
  this.orientation = 'h';
  this.x0;
  this.y0;
  this.x;
  this.y;

  /*
  * Appends the img div to the correct board cell. The cell is corrected when it is too close to the
  * borders causing a ship overflow. 
  */
  this.positionShip = function (e, cell) {
    const coordinates = cell.dataset.coordinates;
    const [row, col] = coordinates.split(',');
    let xCoord = parseInt(row);
    let yCoord = parseInt(col);
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
      if (xCoord > 11 - this.shipLength) {
        xCoord = 11 - this.shipLength;
        correctedCell = document.querySelectorAll(`[data-coordinates="${xCoord},${yCoord}"]`)[this.player.id - 1];
      } else {
        correctedCell = cell;
      }
    }
       
    // Correct positions for vertical orientations
    else {
      if (yCoord > 11 - this.shipLength) {
        yCoord = 11 - this.shipLength;
        correctedCell = document.querySelectorAll(`[data-coordinates="${xCoord},${yCoord}"]`)[this.player.id - 1];
      } else {
        correctedCell = cell;
      }
    }

    console.log(xCoord, yCoord);
    try {
      player.placeShip(new Ship(this.shipLength), [xCoord, yCoord], this.orientation);
    } catch (error) {
      console.log(error);
      this.resetShip(player);
      return 0;
    }
    // Don't allow ship rotations when they have been placed in the board. It caused all kind of visual and logic problems
    this.showRotateShip = function () {console.log('Rotation not allowed after placing a ship in the board')};

    console.log('appending div');
    correctedCell.appendChild(div);
    this.shipImg.style.left = null;
    this.shipImg.style.right = null;
    this.shipImg.style.top = null;
    this.shipImg.style.bottom = null;
    this.x0 = null;
    this.y0 = null;
    this.x = xCoord;
    this.y = yCoord;
    /* console.log(gameboard.board[0].coordinates);
    console.log(gameboard.board); */
    console.log(correctedCell);
    return 1
  }

  // Reset the ship's position
  this.resetShip = function () {
    this.shipImg.style.left = null;
    this.shipImg.style.right = null;
    this.shipImg.style.top = null;
    this.shipImg.style.bottom = null;
    if (this.x || this.y) {
      try {
        this.player.placeShip(new Ship(this.shipLength), [this.x, this.y], this.orientation);
      } catch (error) {
        console.log(error)
      }
    }
  }

  /* 
  *  Calculate the distance from origin to final touch for x and y and sets the img position 
  *  variables to those values, it gives the apearance of the img following the finger.
  */  
  this.dragShip = function (e) {
    this.hideAllRotateShips();
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    this.shipImg.style.position = 'absolute';

    if (this.x || this.y) {
      this.player.deleteShip(`${[this.x, this.y]}`);
    }

    if (!this.x0) this.x0 = x;
    if (!this.y0) this.y0 = y;
    
    if (this.player.id === '1') {
      this.shipImg.style.right = `${x - this.x0}px`;
      this.shipImg.style.bottom = `${y - this.y0}px`;
      
    } else if (this.player.id === '2') {
      this.shipImg.style.left = `${x - this.x0}px`;
      this.shipImg.style.top = `${y - this.y0}px`;
    }
    console.log(x,y);
    this.showCoordinates(x, y);
  }
  
  /* 
  * Sets x and y to the final dragging point (endtouch event) and calls positionShip() if it is 
  * inside the correct gameboard's grid. Otherwise, it resets the img position.
  */ 
  this.dropShip = function (e, player) {
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    let cell;
    if (document.elementFromPoint(x, y).classList.contains('cell') &&
        document.elementFromPoint(x, y).classList.contains(player.id)) {
      cell = document.elementFromPoint(x, y);
      this.positionShip(e, cell, player);
    } else {
      this.resetShip(player);
    }
    this.hideCoordinates();
  }

  /* 
  * Remove the visible class of all rotation divs
  */
  this.hideAllRotateShips = function () {
    let rotateDivs = document.getElementsByClassName('rotate');
    for (let rotateDiv of rotateDivs) {
      rotateDiv.classList.remove('visible');
    }
  }

  /*
  * Adds the visible class to the rotation div of the ship being touched
  */
  this.showRotateShip = function (e) {
    this.hideAllRotateShips();
    e.target.children[0].classList.add('visible');
  }
  
  /*
  * Sets the transform style of the image to achieve a vertical or horizontal effect. When the ship
  * is set to vertical, the div width is set to 1 cell distance to avoid displacements of the img
  * when it's being dragged. hideAllRotateShips() is called to reduce the wrong target selection
  * probability when the rotate button is active as the dragging event starts. 
  */
  this.rotateShip = function (e) {
    e.stopPropagation();
    if (this.orientation === 'h') {
      this.orientation = 'v';
      this.shipImg.style.transform = 'translate(3vh) rotate(90deg)';
      this.shipImg.parentNode.style.width = '3vh';
      this.hideAllRotateShips();
    } else if (this.orientation === 'v') {
      this.orientation = 'h';
      this.shipImg.style.transform = null;
      this.shipImg.parentNode.style.width = null;
      this.hideAllRotateShips();
    }
  }
  
  /*
  * Could go to dom-board
  * Transforms the middle button into an information div and reports the cell being touched.
  */
  this.showCoordinates = function(x, y) {
    let columns = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let infoDiv = document.getElementById('central');
    let cell;
    let coordinates;
    if (document.elementFromPoint(x, y).classList.contains('cell') &&
        document.elementFromPoint(x, y).classList.contains(this.player.id)) {
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
  
  /*
  * Could go to dom-board
  * Transforms the middle button back into a button after being an information div.
  */
  this.hideCoordinates = function() {
    let infoDiv = document.getElementById('central');
    infoDiv.classList.remove('info');
    infoDiv.textContent = 'Pass Device'
  }

  this.preprocessPlaceShip = function (player) {
    if (this.orientation === 'v') {
      this.shipImg.style.transform = 'translate(3vh) rotate(90deg)';
      this.shipImg.parentNode.style.width = '3vh';
    }
    this.shipImg.style.position = "absolute";
    const cell = document.querySelectorAll(`[data-coordinates="${x},${y}"]`)[player.id - 1];
    const e = {target: this.ship}
    console.log(e);
    return this.positionShip(e, cell, player);
  }
  
}
