import {
  ship,
  carrier,
  cruiser,
  battleship,
  submarine,
  destroyer,
} from "./ship.js";

import bored from "./gameboard.js";
import { template } from "lodash";

const test = bored();

// console.log(destroyer.length);
test.placeShip(carrier, [4, 4], true);
test.placeShip(cruiser, [8, 0], false);
test.placeShip(battleship, [0, 0], true);
test.placeShip(submarine, [9, 9], false);
test.placeShip(destroyer, [2, 0], true);
console.log(test.gameBoard);

const receiveAttack = (coord) => {
  let x = coord[0];
  let y = coord[1];

  let missedHits = [];
  if (test.gameBoard[x][y] === 1) {
    return "hit";
  } else if (test.gameBoard[x][y] === 0) {
    return "miss";
  }
};

console.log(receiveAttack([4, 4]));
