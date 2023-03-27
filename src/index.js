import {
  ship,
  carrier,
  cruiser,
  battleship,
  submarine,
  destroyer,
} from "./ship.js";

import bored from "./gameboard.js";
import { player, computer } from "./player.js";
import { first, template } from "lodash";
import "./style.css";

// game loops should set up a new game by creating players and gameboards.
const gameLoop = () => {
  const playerBoard = bored();
  const computerBoard = bored();
  //create gameboard
  playerBoard.generateBoard();
  computerBoard.generateBoard();
  //create players
  const player1 = player(computerBoard);
  const computer1 = computer(playerBoard);

  //manually set each gameboard with pre-determiend coordinates
  playerBoard.placeShip(carrier, [3, 3], true);
  playerBoard.placeShip(cruiser, [9, 0], false);
  playerBoard.placeShip(battleship, [0, 0], true);
  playerBoard.placeShip(submarine, [8, 8], false);
  playerBoard.placeShip(destroyer, [9, 5], true);

  computerBoard.placeShip(carrier, [1, 1], true);
  computerBoard.placeShip(cruiser, [2, 1], true);
  computerBoard.placeShip(battleship, [3, 1], true);
  computerBoard.placeShip(submarine, [4, 1], true);
  computerBoard.placeShip(destroyer, [5, 1], true);

  return { playerBoard, computerBoard, player1, computer1 };
};

const game = gameLoop();
console.log(game.playerBoard.gameBoard);
console.log(game.computerBoard.gameBoard);
console.log(game.player1.attack([1, 1]));
console.log(game.computer1.attack());

const board = document.querySelector(".board");

const renderBoard = (gameBoard) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");

      cell.classList.add("cell");
      if (gameBoard[i][j] === 1) {
        cell.style.backgroundColor = "gray";
      } else if (gameBoard[i][j] === "x") {
        cell.style.backgroundColor = "red";
      }
      board.appendChild(cell);
    }
  }
};
console.log(renderBoard(game.playerBoard.gameBoard));
