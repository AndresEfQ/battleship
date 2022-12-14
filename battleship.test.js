import Ship from "./modules/ship";
import Gameboard from "./modules/gameboard";
import Player from "./modules/player";
import Game from "./modules/game";

const fakeDomGameboard = function () {
  this.getShipLocation = () => '1,1';
  this.resetAllShips = () => null;
}

const fakeDomShip = function () {
  this.ship = new Ship(3, 'battleship');
  this.direction = 'v';
  this.positionShip = () => null;
  this.shipLength = 3;
}

const e = {
  target: {
    classList: {
      contains: () => 'battleship'
    }
  }
}

describe("test ship's atributes and methods", () => {

  test("ship gets correct lenght", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
  });

  test("ship gets correct hits", () => {
    const ship = new Ship(null);
    expect(ship.hits).toBe(0);
  });

  test("ship's hit() increases hits by 1", () => {
    const ship = new Ship(null);
    ship.hit()
    expect(ship.hits).toBe(1)
  });

  test("ship's isSunk() checks if ship is not sunken", () => {
    const ship = new Ship(3);
    expect(ship.sunken).toBe(false);
  })

  test("ship's isSunk() checks if ship is sunken", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.sunken).toBe(true);
  })
});

describe("gameboard factory should create a new gameboard correctly", () => {

    test("Creates new gameboard with empty board", () => {
    const gameboard = new Gameboard();
    expect(gameboard.board).toEqual([]);
  });

  test("Creates gameboard with correct size", () => {
    const gameboard = new Gameboard(7);
    expect(gameboard.size).toBe(7);
  });
})

describe("gameboard should place ships at specific locations", () => {
  test("gameboard places a 3 length ship in coordinates 1,1 vertically", () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(new Ship(3), [1,1]);
    expect(gameboard.board[0].coordinates).toEqual(['1,1', '1,2', '1,3']);
  });

  test("gameboard places a 3 length ship in coordinates 5,5 vertically", () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(new Ship(3), [5,5]);
    expect(gameboard.board[0].coordinates).toEqual(['5,5', '5,6', '5,7']);
  });

  test("gameboard places a 3 length ship in coordinates 1,1 horizontally", () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(new Ship(3), [1,1], "h");
    expect(gameboard.board[0].coordinates).toEqual(['1,1', '2,1', '3,1']);
  });

  test("gameboard places a 3 length ship in coordinates 5,5 horizontally", () => {
    const gameboard = new Gameboard();
    gameboard.placeShip(new Ship(3), [5,5], "h");
    expect(gameboard.board[0].coordinates).toEqual(['5,5', '6,5', '7,5']);
  });

  test("should throw an error if x coordinate is less than 0", () => {
    const gameboard = new Gameboard();
    expect(() => { gameboard.placeShip(new Ship(3), [-1,0]) }).toThrow("initial coordinates outside board");
  });
  
  test("should throw an error if y coordinate is less than 0", () => {
    const gameboard = new Gameboard();
    expect(() => { gameboard.placeShip(new Ship(3), [0,-1]) }).toThrow("initial coordinates outside board");
  });

  test("should throw an error if x coordinate is bigger than size", () => {
    const gameboard = new Gameboard(7);
    expect(() => { gameboard.placeShip(new Ship(3), [8,0]) }).toThrow("initial coordinates outside board");
  });

  test("should throw an error if y coordinate is bigger than size", () => {
    const gameboard = new Gameboard(7);
    expect(() => { gameboard.placeShip(new Ship(3), [0,8]) }).toThrow("initial coordinates outside board");
  });

  test("should throw an error a if ship is placed outside the board vertically", () => {
    const gameboard = new Gameboard(7);
    expect(() => { gameboard.placeShip(new Ship(3), [6,1], "h") }).toThrow("ship placed outside board");
  });

  test("should throw an error a if ship is placed outside the board horizontally", () => {
    const gameboard = new Gameboard(7);
    expect(() => { gameboard.placeShip(new Ship(3), [1,6], "v") }).toThrow("ship placed outside board");
  });

  test("place ship in last row", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,7], "h");
    expect(gameboard.board[0].coordinates).toEqual(['1,7', '2,7', '3,7']);
  });

  test("place ship in last column", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [7,1], "v");
    expect(gameboard.board[0].coordinates).toEqual(['7,1', '7,2', '7,3']);
  });
});

describe("gameboard shouldn't place new ships if they collide", () => {

  test("should reject a second ship which collides with the first one", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1], "v");
    expect(() => {
      gameboard.placeShip(new Ship(3), [1,1], "h")
    }).toThrow("ship placed over an existing ship");
    expect(gameboard.board.length).toEqual(1);
  });

  test("should not reject a second ship if it doesn't collide", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1], "v");
    gameboard.placeShip(new Ship(3), [2,2], "v");
    expect(gameboard.board.length).toEqual(2);
  });

  test("should reject a second ship if it collides with the first one in any cell", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [3,1], "v");
    expect(() => {
      gameboard.placeShip(new Ship(3), [1,3], "h")
    }).toThrow("ship placed over an existing ship");
    expect(gameboard.board.length).toEqual(1);
  });
});

describe("gameboard should delete ships already in place", () => {

  test("should delete a ship already placed", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1], "v");
    gameboard.deleteShip('1,1');
    expect(gameboard.board.length).toEqual(0);
  });
  
  test("should only delete one ship already placed", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1], "v");
    gameboard.placeShip(new Ship(5), [2,2], "v");
    gameboard.deleteShip('1,1');
    expect(gameboard.board.length).toEqual(1);
  });
});

describe("gameboard should receive attacks", () => {

  test("should record missed attacks and throw an error if attack is duplicated", () => {
    const gameboard = new Gameboard(7);
    gameboard.receiveAttack([1,1]);
    expect(() => { gameboard.receiveAttack([1,1]) }).toThrow("repeated attack coordinates");
  });

  test("should record hits and send hit() to correct ship", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1]);
    gameboard.receiveAttack([1,1]);
    const ship = gameboard.board[0].ship;
    expect(ship.hits).toBe(1);
  });

  test("receive attack returns 'hit' if the attack hits", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1]);
    expect(gameboard.receiveAttack([1,1])).toBe("hit");
  });

  test("receive attack returns 'miss' if the attack misses", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1]);
    expect(gameboard.receiveAttack([2,1])).toBe('miss');
  });

  test("should throw an error if the receiveAttack parameters are outside the board", () => {
    const gameboard = new Gameboard(7);
    expect(() => { gameboard.receiveAttack([0,1]) }).toThrow("attack coordinates outside board")
  });

  test("receive attack only calls hit() for correct ship", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1]);
    gameboard.placeShip(new Ship(3), [2,1]);
    gameboard.receiveAttack([1,1]);
    const ship1 = gameboard.board[0].ship;
    const ship2 = gameboard.board[1].ship;
    expect(ship1.hits).toBe(1);
    expect(ship2.hits).toBe(0);
  });

  test("ship sinks if it receives enough attacks", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(1), [1,1]);
    gameboard.receiveAttack([1,1]);
    expect(gameboard.board[0].ship.sunken).toBe(true);
  })
});

describe("gameboard should report if all ships have been sunk", () => {
  
  test("allSunk is false when there are not sunken ships", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1]);
    expect(gameboard.allSunk()).toBe(false);
  });

  test("allSunk is true when all ships are sunk", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(1), [1,1]);
    gameboard.receiveAttack([1,1])
    expect(gameboard.allSunk()).toBe(true);
  });

  test("try to sink a 3 lenght ship", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1]);
    gameboard.receiveAttack([1,1]);
    gameboard.receiveAttack([2,1]);
    gameboard.receiveAttack([3,1]);
    expect(gameboard.allSunk()).toBe(false);
    gameboard.receiveAttack([1,2]);
    gameboard.receiveAttack([1,3]);
    expect(gameboard.allSunk()).toBe(true);
  });
});

describe("gameboards should delete all moves and all ships when resetGameboard() is called", () => {

  test("resetMoves() should delete all gameboard moves", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1]);
    gameboard.receiveAttack([1,1]);
    gameboard.receiveAttack([2,1]);
    gameboard.receiveAttack([3,1]);
    expect(gameboard.moves.size).toBe(3);
    gameboard.resetMoves();
    expect(gameboard.moves.size).toBe(0);
  });

  test("resetShips() should delete all ships in the gameboard", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1]);
    gameboard.placeShip(new Ship(3), [2,1]);
    gameboard.placeShip(new Ship(3), [3,1]);
    expect(gameboard.board.length).toBe(3);
    gameboard.resetShips();
    expect(gameboard.board.length).toBe(0);
  });

  test("resetGameboard() should delete all moves and ships", () => {
    const gameboard = new Gameboard(7);
    gameboard.placeShip(new Ship(3), [1,1]);
    gameboard.placeShip(new Ship(3), [2,1]);
    gameboard.placeShip(new Ship(3), [3,1]);
    gameboard.receiveAttack([1,1]);
    gameboard.receiveAttack([2,1]);
    gameboard.receiveAttack([3,1]);
    expect(gameboard.board.length).toBe(3);
    expect(gameboard.moves.size).toBe(3);
    gameboard.resetGameboard();
    expect(gameboard.board.length).toBe(0);
    expect(gameboard.moves.size).toBe(0);
  });
});

describe("players can take turns attacking the enemy gameboard", () => {
  
  test("player can attack enemy gameboard", () => {
    const player = new Player(fakeDomGameboard, fakeDomShip);
    player.setGameboards(new Gameboard(7), new Gameboard(7));
    player.attack([1,1]);
    expect(player.enemyGameboard.moves.has('1,1')).toBe(true);
  });

  test("player can place ships in own gameboard", () => {
    const player = new Player(fakeDomGameboard, fakeDomShip);
    player.setGameboards(new Gameboard(7), new Gameboard(7));
    player.placeShip(e);
    expect(player.ownGameboard.board[0].coordinates).toEqual(['1,1', '1,2', '1,3']);
  });

  test("player can reset ships in own gameboard", () => {
    const player = new Player(fakeDomGameboard, fakeDomShip);
    player.setGameboards(new Gameboard(7), new Gameboard(7));
    player.placeShip(e);
    player.resetShips();
    expect(player.ownGameboard.board.length).toBe(0);
  });

  test("setGameboards should correctly assign player gameboards", () => {
    const player1 = new Player(fakeDomGameboard, fakeDomShip, '1');
    const player2 = new Player(fakeDomGameboard, fakeDomShip, '2');
    const gameboard1 = new Gameboard(7);
    const gameboard2 = new Gameboard(7);
    player1.setGameboards(gameboard1, gameboard2);
    player2.setGameboards(gameboard2, gameboard1);
    expect(player2.ownGameboard).toBe(gameboard2);
    expect(player1.ownGameboard).toBe(gameboard1);
    expect(player2.enemyGameboard).toBe(gameboard1);
    expect(player1.enemyGameboard).toBe(gameboard2);
  })

  test("computer player can attack enemy gameboard", () => {
    const pcPlayer = new Player(fakeDomGameboard, fakeDomShip, '2', 'computer');
    pcPlayer.setGameboards(new Gameboard(1), new Gameboard(1));
    pcPlayer.attack();
    expect(pcPlayer.enemyGameboard.moves.has('1,1')).toBe(true);
  });

  test("computer player doesn't repeat attacks and only attacks inside the enemy gameboard", () => {
    const pcPlayer = new Player(fakeDomGameboard, fakeDomShip, '2', 'computer');
    pcPlayer.setGameboards(new Gameboard(2), new Gameboard(2));
    pcPlayer.attack();
    pcPlayer.attack();
    pcPlayer.attack();
    pcPlayer.attack();
    expect(pcPlayer.enemyGameboard.moves.has('1,1')).toBe(true);
    expect(pcPlayer.enemyGameboard.moves.has('2,1')).toBe(true);
    expect(pcPlayer.enemyGameboard.moves.has('1,2')).toBe(true);
    expect(pcPlayer.enemyGameboard.moves.has('2,2')).toBe(true);
  });
});

describe("test game logic", () => {

  test("game should create a new game with 2 players and gameboards", () => {
    const game = new Game(fakeDomGameboard, fakeDomShip, '2p', 7);
    expect(game.player1.enemyGameboard).toBe(game.player2.ownGameboard);
    expect(game.player2.enemyGameboard).toBe(game.player1.ownGameboard);
  });

  test("player 2 should be of type computer if mode is 1p", () => {
    const game = new Game(fakeDomGameboard, fakeDomShip, '1p', 7);
    expect(game.player2.type).toBe('computer');
  });

  test("should throw error if game param is not 1p or 2p", () => {
    expect(() => {
      new Game(fakeDomGameboard, fakeDomShip, 'whatever', 7);
    }).toThrow("invalid parameter");
  })
});

describe("reset game should delete all ships and all hits from the boards", () => {

  test("should delete all ships from one board", () => {
    const game = new Game(fakeDomGameboard, fakeDomShip, '2p', 7);
    game.gameboard1.board = [
      {
        coordinates: ['3,8', '4,8', '5,8'],
        ship: {}
      },
      {
        coordinates: ['4,10', '5,10'],
        ship: {}
      }
    ];
    game.resetGame();
    expect(game.gameboard1.board).toEqual([]);
  });

  test("should delete all ships from both boards", () => {
    const game = new Game(fakeDomGameboard, fakeDomShip, '2p', 7);
    game.gameboard1.board = [
      {
        coordinates: ['3,8', '4,8', '5,8'],
        ship: {}
      },
      {
        coordinates: ['4,10', '5,10'],
        ship: {}
      }
    ];
    game.gameboard2.board = [
      {
        coordinates: ['3,8', '4,8', '5,8'],
        ship: {}
      },
      {
        coordinates: ['4,10', '5,10'],
        ship: {}
      }
    ];
    game.resetGame();
    expect(game.gameboard1.board).toEqual([]);
    expect(game.gameboard2.board).toEqual([]);
  });

  test("should delete all hits from one board", () => {
    const game = new Game(fakeDomGameboard, fakeDomShip, '2p', 7);
    game.gameboard1.moves.add('1,1').add('1,2').add('1,3');
    game.resetGame();
    expect(game.gameboard1.moves.size).toBe(0);
  });

  test("should delete all hits from both board", () => {
    const game = new Game(fakeDomGameboard, fakeDomShip, '2p', 7);
    game.gameboard1.moves.add('1,1').add('1,2').add('1,3');
    game.gameboard2.moves.add('1,1').add('1,2').add('1,3');
    game.resetGame();
    expect(game.gameboard1.moves.size).toBe(0);
    expect(game.gameboard2.moves.size).toBe(0);
  });
});

/* describe("dom interaction module placeShips function", () => {

  test("placeShips should take ")
}); */
