import { ship } from "./ship.js";

import bored from "./gameboard.js";
import { player, computer } from "./player.js";
import UI from "./ui.js";
import { first, template } from "lodash";
import "./style.css";

// game loops should set up a new game by creating players and gameboards.

const playerBoard = bored();
const computerBoard = bored();
//create gameboard
playerBoard.generateBoard();
computerBoard.generateBoard();

//create players for attack methods
const player1 = player(computerBoard);
const computer1 = computer(playerBoard);

//create UI for render methods
const renderGame = UI();

//manually set each gameboard with pre-determiend coordinates
playerBoard.placeShip(ship("carrier", 5), [3, 3], true);
playerBoard.placeShip(ship("cruiser", 3), [9, 0], false);
playerBoard.placeShip(ship("battleship", 4), [0, 0], true);
playerBoard.placeShip(ship("submarine", 3), [8, 8], false);
playerBoard.placeShip(ship("destroyer", 2), [9, 5], true);

computerBoard.placeShip(ship("carrier", 5), [9, 0], false);
computerBoard.placeShip(ship("cruiser", 3), [5, 3], true);
computerBoard.placeShip(ship("battleship", 4), [3, 1], true);
computerBoard.placeShip(ship("submarine", 3), [1, 5], true);
computerBoard.placeShip(ship("destroyer", 2), [9, 9], false);

//renders both gameboards to the DOM
const render = () => {
  renderGame.renderPlayerBoard(playerBoard.gameBoard);
  renderGame.renderComputerBoard(computerBoard.gameBoard);
};
render();
const renderWithClick = () => {
  render();
  renderUserClick();
};
const renderUserClick = () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((item) =>
    item.addEventListener("click", (e) => {
      player1.attack([parseInt(item.dataset.x), parseInt(item.dataset.y)]);
      computer1.attack();
      // console.log(computerBoard.gameBoard);
      renderWithClick();
      if (computerBoard.checkAllShips()) {
        alert("Game Over. You win!");
      } else if (playerBoard.checkAllShips()) {
        alert("Game Over. Computer wins!");
      }
    })
  );
};

renderUserClick();
