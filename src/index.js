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
import UI from "./ui.js";
import { first, template } from "lodash";
import "./style.css";

// game loops should set up a new game by creating players and gameboards.

const playerBoard = bored();
const computerBoard = bored();
//create gameboard
playerBoard.generateBoard();
computerBoard.generateBoard();
//create players
const player1 = player(computerBoard);
const computer1 = computer(playerBoard);

const renderGame = UI();

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
player1.attack([4, 4]);
computer1.attack();
//renders both gameboards to the DOM
renderGame.renderPlayerBoard(playerBoard.gameBoard);
renderGame.renderComputerBoard(computerBoard.gameBoard);
