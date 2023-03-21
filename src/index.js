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

const gameboard = bored();

gameboard.placeShip(carrier, [4, 4], true);
gameboard.placeShip(battleship, [9, 9], false);
gameboard.placeShip(cruiser, [0, 0], true);
gameboard.placeShip(submarine, [9, 0], false);
gameboard.placeShip(destroyer, [0, 8], true);

console.log(gameboard.shipData.forEach((item) => console.log(item)));

// console.log(gameboard.shipData.map((element) => console.log(element.name)));
// console.log(gameboard.shipData.map((element) => console.log(element.isSunk())));
