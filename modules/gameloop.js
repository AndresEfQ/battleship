import Game from "./game";
import DomGameboard from "./domGameboard";

export default function gameloop (mode) {
  const game = new Game(mode, 10);
  const domGameboard = new DomGameboard();
  let activePlayer = this.game.player1;


  domGameboard.orientButtons(player1.id);
  domGameboard.setControlsForPlayerPlaceShips(game.player1);
  game.player1.placeAllShips();
}