export function DomShip() {

  this.orientation = 'h';
  this.x0;
  this.y0;

  this.positionShip = function (e, coordinates, gameboard) {
    let coordinatesArray = coordinates.split(',');
    let [x, y] = coordinatesArray;
    if (gameboard === 'gameboard1') {

    }
  }

  this.dragShip = function (e, gameboard) {
    let ship = e.target.children[1];
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    ship.style.position = 'absolute';
    
    if (gameboard === 'gameboard1') {
      if (!this.x0) this.x0 = e.touches[0].clientX;
      if (!this.y0) this.y0 = e.touches[0].clientY;
      console.log(e.touches[0].clientY - this.y0);
      ship.style.bottom = `${e.touches[0].clientY - this.y0}px`;
      ship.style.right = `${e.touches[0].clientX - this.x0}px`;
      /* xDelta = 34;
      yDelta = 10;
      if (ship.classList.contains('destroyer')) xDelta -= 18;
      if (ship.classList.contains('cruisser')) xDelta += 20;
      ship.style.right = `${x - xDelta}px`;
      ship.style.bottom = `${y - yDelta}px`; */

    } else if (gameboard === 'gameboard2') {
      if (!this.x0) this.x0 = e.touches[0].clientX;
      if (!this.y0) this.y0 = e.touches[0].clientY;
      console.log(e.touches[0].clientY - this.y0);
      ship.style.top = `${e.touches[0].clientY - this.y0}px`;
      ship.style.left = `${e.touches[0].clientX - this.x0}px`;
      /* yDelta = 395;
      xDelta = 31;
      if (ship.classList.contains('destroyer')) xDelta -= 12;
      if (ship.classList.contains('cruisser')) xDelta += 14;
      ship.style.left = `${x - xDelta}px`;
      ship.style.top = `${y - yDelta}px`; */
    }
  }
  
  this.dropShip = function (e, gameboard) {
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    let cell;
    if (document.elementFromPoint(x, y).classList.contains('cell')) {
      cell = document.elementFromPoint(x, y);
      let coordinates = cell.dataset.coordinates;
      /* console.log(e, x, y); */
      this.positionShip(e, coordinates, gameboard)
    }
  }

  this.hideAllRotateShips = function () {
    let rotateDivs = document.getElementsByClassName('rotate');
    for (let rotateDiv of rotateDivs) {
      rotateDiv.classList.remove('visible');
    }
  }

  this.showRotateShip = function (e) {
    this.hideAllRotateShips();
    console.log(e.target.children[0]);
    e.target.children[0].classList.add('visible');
  }

}

export function DomCell() {

}

/* Event: x = 66
          y = 19

   Position: top = 225;
             left = 240;

  Event: x = 78
         y = 15

  Position: top = 234;
            left = 250
*/
