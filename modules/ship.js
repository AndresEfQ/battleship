export default function Ship(length, id) {
  this.id = id;
  this.length = length;
  this.hits = 0;
  this.sunken = false;
  
  this.isSunk = function () {
    if (this.hits === this.length) {
      this.sunken = true;
    }
  }

  this.hit = function () {
    this.hits++;
    this.isSunk();
  }
}