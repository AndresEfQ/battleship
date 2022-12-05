# battleship

Web application with the classic battleship game intented to be played against the computer or 2 players in the same device. This application is optimized for mobile devices and all the controls work with touch screens.

In this project I was able to learn how to use Jest and practiced TDD

## Technologies used:
* HTML
* CSS
* Vanilla Javascript
* Webpack
* Jest

## What I learned:
* TDD
* Testing in JavaScript using Jest
* Drag and drop using touch events

## TODO
* Add different behavior for the pass device button, it should be used as confirmation when all the ships are placed and as a marker for the ship coordinates when they are being dragged.
* Write the game loop.
* Add a place ship event when the ship is released in the board. It should:
  - Append the ship div to the cell where the touch end happens (Need to investigate ship positioning).
  - Reset the ship img position to relative.
  - Return the ship img to its origin if the touch end happens outside the board.
* Write the finish placing ships function: It should call the gameboard place ship function for each ship and give control to the other player.
