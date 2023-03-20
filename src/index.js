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
console.log(gameboard.gameBoard);
console.log(carrier.coordinates);
