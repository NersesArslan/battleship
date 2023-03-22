import {
  ship,
  carrier,
  cruiser,
  battleship,
  submarine,
  destroyer,
} from "./ship.js";

import bored from "./gameboard.js";
import player from "./player.js";
import { first, template } from "lodash";

// set up player 1's gameboard & ships

const player1 = player();

console.log(player1.board);

player1.placeShip(carrier, [3, 3], true);
player1.placeShip(cruiser, [9, 0], false);
player1.placeShip(battleship, [0, 0], true);
player1.placeShip(submarine, [8, 8], false);
player1.placeShip(destroyer, [9, 5], true);

// // set up computer's gameboard & ships
const computer = player();

console.log(computer.board);

computer.placeShip(carrier, [1, 1], true);
computer.placeShip(cruiser, [2, 1], true);
computer.placeShip(battleship, [3, 1], true);
computer.placeShip(submarine, [4, 1], true);
computer.placeShip(destroyer, [5, 1], true);

console.log(computer.attack(player1, [0, 0]));
console.log(player1.attack(computer, [0, 0]));

console.log(computer.attack(player1, [0, 1]));
//I have to write the game in a way where players (just one player) takes
// turns with the computer in attacking the other gameboard.
//I think I need to worry about that when I creat the game loop and module
//

//function that returns a random number from
const getRandom = () => {
  return Math.floor(Math.random() * 9);
};
const computerAttack = () => {
  const getRandom = () => {
    return Math.floor(Math.random() * 9);
  };

  let x = getRandom();
  let y = getRandom();

  return [x, y];
};
