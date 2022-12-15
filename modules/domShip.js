import Ship from "./ship";

export default function DomShip(ship, playerId) {

  this.ship = ship;
  this.shipLength = ship.length;
  const shipDivs = document.getElementsByClassName('ship-div');
  this.shipDiv = [...shipDivs].find((div) => {
    return div.classList.contains(playerId) && div.classList.contains(ship.id);
  });
  this.shipImg = this.shipDiv.children[1];
  this.direction = 'h';
  this.x0;
  this.y0;
  this.x;
  this.y;

  /*
  * Appends the img div to the correct board cell. The cell is corrected when it is too close to the
  * borders causing a ship overflow. 
  */
  this.positionShip = function (coordinates) {
    const [row, col] = coordinates.split(',');
    let xCoord = parseInt(row);
    let yCoord = parseInt(col);
    let cell;

    // Correct positions for horizontal directions
    if (this.direction === 'h' && xCoord > 11 - this.shipLength) {
      xCoord = 11 - this.shipLength;
    }
      
    // Correct positions for vertical directions
    else if (this.direction === 'v' && yCoord > 11 - this.shipLength) {
      yCoord = 11 - this.shipLength;
    }

    cell = document.querySelectorAll(`[data-coordinates="${xCoord},${yCoord}"]`)[playerId - 1];
   
    // Don't allow ship rotations when they have been placed in the board. It caused all kind of visual and logic problems
    this.showRotateShip = function () {console.log('Rotation not allowed after placing a ship in the board')};

    cell.appendChild(this.shipDiv);
    this.shipImg.style.left = null;
    this.shipImg.style.right = null;
    this.shipImg.style.top = null;
    this.shipImg.style.bottom = null;
    this.x0 = null;
    this.y0 = null;
    this.x = xCoord;
    this.y = yCoord;
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
        this.player.placeShip(new Ship(this.shipLength), [this.x, this.y], this.direction);
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

    /* if (this.x || this.y) {
      this.player.deleteShip(`${[this.x, this.y]}`);
    } */

    if (!this.x0) this.x0 = x;
    if (!this.y0) this.y0 = y;
    
    if (playerId === '1') {
      this.shipImg.style.right = `${x - this.x0}px`;
      this.shipImg.style.bottom = `${y - this.y0}px`;
      
    } else if (playerId === '2') {
      this.shipImg.style.left = `${x - this.x0}px`;
      this.shipImg.style.top = `${y - this.y0}px`;
    }
    this.showCoordinates(x, y);
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
    if (this.direction === 'h') {
      this.direction = 'v';
      this.shipImg.style.transform = 'translate(3vh) rotate(90deg)';
      this.shipImg.parentNode.style.width = '3vh';
      this.hideAllRotateShips();
    } else if (this.direction === 'v') {
      this.direction = 'h';
      this.shipImg.style.transform = null;
      this.shipImg.parentNode.style.width = null;
      this.hideAllRotateShips();
    }
    return this.direction;
  }
  
  this.resetShipImg = function () {
    this.direction = 'h';
    this.shipImg.style.transform = null;
    this.shipImg.parentNode.style.width = null;
  }
  
  /*
  * Could go to dom-board
  * Transforms the middle button into an information div and reports the cell being touched.
  */
  this.showCoordinates = function(x, y) {
    let columns = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let infoDiv = document.getElementById('random');
    let cell;
    let coordinates;
    if (document.elementFromPoint(x, y).classList.contains('cell') &&
        document.elementFromPoint(x, y).classList.contains(playerId)) {
      cell = document.elementFromPoint(x, y);
    } else {
      // this.hideCoordinates();
    }
    if (cell) {
      coordinates = cell.dataset.coordinates;
      let [col, row] = coordinates.split(',');
      infoDiv.classList.add('info');
      infoDiv.textContent = `${columns[col]} , ${row}`;
    }
  }

  this.placeShip = function (coordinates, direction) {
    if (direction === 'v') {
      this.shipImg.style.transform = 'translate(3vh) rotate(90deg)';
      this.shipImg.parentNode.style.width = '3vh';
    }
    this.shipImg.style.position = "absolute";
    return this.positionShip(coordinates);
  }
  
}
