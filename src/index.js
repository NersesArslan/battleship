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

gameboard.receiveAttack([0, 8]);
gameboard.receiveAttack([0, 9]);
gameboard.receiveAttack([1, 0]);

gameboard.receiveAttack([4, 4]);
gameboard.receiveAttack([4, 5]);
gameboard.receiveAttack([4, 6]);
gameboard.receiveAttack([4, 7]);
gameboard.receiveAttack([4, 8]);

gameboard.receiveAttack([9, 9]);
gameboard.receiveAttack([8, 9]);
gameboard.receiveAttack([7, 9]);
gameboard.receiveAttack([6, 9]);

// gameboard.receiveAttack([0, 0]);
gameboard.receiveAttack([0, 1]);
gameboard.receiveAttack([0, 2]);

gameboard.receiveAttack([9, 0]);
gameboard.receiveAttack([8, 0]);
gameboard.receiveAttack([7, 0]);

console.log(gameboard.checkAllShips());

// console.log(gameboard.allShipsSunk());
