import {
  ship,
  carrier,
  cruiser,
  battleship,
  submarine,
  destroyer,
} from "./ship.js";

import bored from "./gameboard.js";
import { first, template } from "lodash";

const player = () => {
  return { ship, bored };
};

// initialze player 1
const player1 = player();

//creates player1's board object
const player1Board = player1.bored();
//creates player1's board
player1Board.generateBoard();

//places ships to player1's boards
player1Board.placeShip(carrier, [3, 3], true);
player1Board.placeShip(cruiser, [9, 0], false);
player1Board.placeShip(battleship, [0, 0], true);
player1Board.placeShip(submarine, [8, 8], false);
player1Board.placeShip(destroyer, [9, 5], true);
// steps for now:
//place all ships on player1's board
//then initialize player2 and do the same
console.log(player1Board.gameBoard);

//player2
const player2 = player();

const player2Board = player2.bored();
player2Board.generateBoard();

player2Board.placeShip(carrier, [1, 1], true);
player2Board.placeShip(cruiser, [2, 1], true);
player2Board.placeShip(battleship, [3, 1], true);
player2Board.placeShip(submarine, [4, 1], true);
player2Board.placeShip(destroyer, [5, 1], true);

console.log(player2Board.gameBoard);
