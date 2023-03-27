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

  computerBoard.placeShip(carrier, [9, 0], false);
  computerBoard.placeShip(cruiser, [5, 3], true);
  computerBoard.placeShip(battleship, [3, 1], true);
  computerBoard.placeShip(submarine, [1, 5], true);
  computerBoard.placeShip(destroyer, [9, 9], false);

  return { playerBoard, computerBoard, player1, computer1 };
};
//initializes a game
const game = gameLoop();

const UI = () => {
  //selects each player's board container in the DOM
  const playerBoard = document.querySelector(".player-board");
  const computerBoard = document.querySelector(".computer-board");

  //Render method. Receives gameBoard and renders it to the specified board container
  const renderBoard = (gameBoard, DOM) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => {});
        //checks for the value of each cell in the gameBoard
        if (gameBoard[i][j] === 1) {
          //if value === 1, colors the cell gray to represent a ship placed
          cell.style.backgroundColor = "gray";
          //if value === 'x', colors the cell red to represent a hit cell
        } else if (gameBoard[i][j] === "x") {
          cell.style.backgroundColor = "red";
        }
        //appends each cell to the board container
        DOM.appendChild(cell);
      }
    }
  };

  const userAttack = () => {};

  return { renderBoard, userAttack, playerBoard, computerBoard };
};

const playerB = UI();
playerB.renderBoard(game.playerBoard.gameBoard, playerB.playerBoard);
const computerB = UI();
computerB.renderBoard(game.computerBoard.gameBoard, computerB.computerBoard);
console.log(playerB.userAttack());
