export default function DomGameboard() {

  this.buildGrid = function (grid, gameboardId) {
    for (let j = 1; j <= 100; j++) {
      let cell = document.createElement('div');
      let x = j % 10 === 0 ? 10 : j % 10;
      let y = Math.ceil(j / 10);
      cell.dataset.coordinates = `${x},${y}`
      cell.className = `cell ${gameboardId + 1}`;
      grid.appendChild(cell);
    }
  }

  this.resetAllShips = function (grid, ships, gameboardId) {
    const shipsDiv = document.getElementsByClassName('ships')[gameboardId - 1];
    for (let ship of ships) {
      shipsDiv.appendChild(ship)
    }
    this.buildGrid(grid, gameboardId);
  }
}