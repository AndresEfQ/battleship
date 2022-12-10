import DomShip from "./domShip";

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
  };

  this.resetAllShips = function (grid, ships, gameboardId) {
    const shipsDiv = document.getElementsByClassName('ships')[gameboardId - 1];
    for (let ship of ships) {
      shipsDiv.appendChild(ship)
    }
    this.buildGrid(grid, gameboardId);
  };

  this.placePlayerShips = function (playerId) {
    
    
    reset.textContent = "Reset Ships";
    randomFinish.textContent = "Randomize";

  }
  
  this.orientButtons = function (playerId) {
    const controls = document.getElementsByClassName('controls');
    if (playerId === '1') {
      controls[0].style.transform = "rotate(180deg) translate(0, 50%)";
    } else if (playerId === '2') {
      controls[0].style.transform = "translate(0, 50%)";
    }
  }

  this.setControlsForPlayerPlaceShips = function (player) {
    const playerId = player.id;
    this.orientButtons(playerId);
    const randomFinish = document.getElementById('pass');
    randomFinish.addEventListener()
    const reset = document.getElementById('reset-game');
  }
};