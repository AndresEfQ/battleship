export default function Dom() {

  this.positionShip = function (e, coordinates, gameboard) {
    let coordinatesArray = coordinates.split(',');
    let [x, y] = coordinatesArray;
    console.log(e.target.childNodes[0]);
    if (gameboard === 'gameboard1') {

    }
  }

  this.dragShip = function (e, gameboard) {
    let ship = e.target.childNodes[1];
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    let xDelta;
    let yDelta;
    ship.style.position = 'absolute';
    
    if (gameboard === 'gameboard1') {
      xDelta = 34;
      yDelta = 10;
      if (ship.classList.contains('destroyer')) xDelta -= 18;
      if (ship.classList.contains('cruisser')) xDelta += 20;
      ship.style.right = `${x - xDelta}px`;
      ship.style.bottom = `${y - yDelta}px`;

    } else if (gameboard === 'gameboard2') {
      yDelta = 395;
      xDelta = 31;
      if (ship.classList.contains('destroyer')) xDelta -= 12;
      if (ship.classList.contains('cruisser')) xDelta += 14;
      ship.style.left = `${x - xDelta}px`;
      ship.style.top = `${y - yDelta}px`;
    }
  }
  
  this.dropShip = function (e, gameboard) {
    let x = e.changedTouches[0].clientX;
    let y = e.changedTouches[0].clientY;
    let cell;
    if (document.elementFromPoint(x, y).classList.contains('cell')) {
      cell = document.elementFromPoint(x, y);
      let coordinates = cell.dataset.coordinates;
      console.log(coordinates);
      this.positionShip(e, coordinates, gameboard)
    }
  }
  /* this.dragShip = function (e) {

  } */


  /* this.holdShip = function (e) {
    e.preventDefault();
    let ship = e.target;
    timer = setTimeout(() => this.grabShip(ship, gameboard, e), touchDuration)
  } */

  /* this.cancelHoldShip = function (e) {
    e.preventDefault();
    if (timer) clearTimeout(timer);
  }
  */
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
