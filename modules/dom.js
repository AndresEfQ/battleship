export default function Dom(gameboard) {

  let touchDuration = 1000;
  let timer;

  this.placeShips = function () {

  }

  this.grabShip = function (e, gameboard, xDelta, yDelta) {
    /* alert('holding ship'); */
    let ship = e.target;
    ship.style.position = 'absolute';
    ship.style.left = `${e.changedTouches[0].clientX + xDelta}px`;
    ship.style.top = `${e.changedTouches[0].clientY + yDelta}px`;
    let cell = document.elementFromPoint(
      e.changedTouches[0].clientX, 
      e.changedTouches[0].clientY
    );
    cell.classList.add('touched-cell');
  }

  /* this.grabShip2 = function (gameboard, e) {
    let ship = e.target;
    ship.style.position = 'absolute';
    ship.style.left = `${e.changedTouches[0].clientX + 170}px`;
    ship.style.top = `${e.changedTouches[0].clientY + 220}px`;
    let cell = document.elementFromPoint(
      e.changedTouches[0].clientX, 
      e.changedTouches[0].clientY
    );
    cell.classList.add('touched-cell'); 
  } */

  this.dragShip = function (e) {

  }

  this.dropShip = function () {

  }

  this.holdShip = function (e) {
    e.preventDefault();
    let ship = e.target;
    timer = setTimeout(() => this.grabShip(ship, gameboard, e), touchDuration)
  }

  this.cancelHoldShip = function (e) {
    e.preventDefault();
    if (timer) clearTimeout(timer);
  }
}

/* Event: x = 291
          y = 628

   Position: top = 240;
             left = 240;

  Event: x = 78
         y = 15

  Position: top = 234;
            left = 250
*/
