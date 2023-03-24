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

// set up player 1's gameboard & ships
const playerBoard = bored();
console.log(playerBoard.generateBoard());

playerBoard.placeShip(carrier, [3, 3], true);
playerBoard.placeShip(cruiser, [9, 0], false);
playerBoard.placeShip(battleship, [0, 0], true);
playerBoard.placeShip(submarine, [8, 8], false);
playerBoard.placeShip(destroyer, [9, 5], true);

//  set up computer's gameboard & ships
const computerBoard = bored();
console.log(computerBoard.generateBoard());

computerBoard.placeShip(carrier, [1, 1], true);
computerBoard.placeShip(cruiser, [2, 1], true);
computerBoard.placeShip(battleship, [3, 1], true);
computerBoard.placeShip(submarine, [4, 1], true);
computerBoard.placeShip(destroyer, [5, 1], true);

// creat player and computer objects & let them take turns attacking each other's gameboard

const player1 = player(computerBoard);
const computer1 = computer(playerBoard);

//player's first attack
console.log(player1.attack([0, 0]));
console.log(computer1.attack());

console.log(player1.attack([2, 2]));
console.log(computer1.attack());
