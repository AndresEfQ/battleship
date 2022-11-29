export default function Dom(gameboard) {

  let touchDuration = 1000;
  let timer;

  this.placeShips = function () {

  }

  this.grabShip = function (ship, gameboard, e) {
    /* alert('holding ship'); */
    ship.style.position = 'absolute';
    console.log(e);
    ship.style.top = `${e.targetTouches[0].clientY - 390}px`;
    ship.style.left = `${e.targetTouches[0].clientX - 50}px`;
    ship.addEventListener('touchmove', (e) => {
      ship.style.top = `${e.changedTouches[0].clientY - 390}px`;
      ship.style.left = `${e.changedTouches[0].clientX - 50}px`;
    });
  }

  this.dragShip = function () {

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
*/
