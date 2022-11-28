export default function Dom() {

  let timer;
  let touchDuration = 1000;

  this.placeShips = function () {

  }

  this.grabShip = function () {
    console.log('holding ship')
  }

  this.dragShip = function () {

  }

  this.dropShip = function () {

  }

  this.holdShip = function () {
    timer = setTimeout(this.grabShip, touchDuration)
  }

  this.cancelHoldShip = function () {
    if (timer) clearTimeout(timer);
  }
}