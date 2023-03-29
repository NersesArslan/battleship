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
//create players
const player1 = player(computerBoard);
const computer1 = computer(playerBoard);

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

const attack = (arr) => {
  player1.attack(arr);
  computer1.attack();
};

attack([3, 3]);

attack([3, 4]);

attack([3, 1]);

attack([3, 2]);

attack([9, 9]);

attack([8, 9]);
attack([9, 0]);
attack([8, 0]);
attack([7, 0]);
attack([6, 0]);
attack([5, 0]);
attack([5, 3]);
attack([5, 4]);
attack([5, 5]);
attack([1, 5]);
attack([1, 6]);
attack([1, 7]);

render();
