import Ship from "../modules/ship";
import Gameboard from "../modules/gameboard";
import Player from "../modules/player";
import "./styles/index.css"

const grids = document.getElementsByClassName('grid');
for (let grid of grids) {
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
  }

}