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

gameboard.shipData.map((element, shipCoord) =>
  element.coordinates.map((test) => (test === shipCoord ? "hit" : "miss"))
);

const result = (arr) =>
  gameboard.shipData.map((element) =>
    element.coordinates.map((test) => {
      if (test[0] === arr[0] && test[1] === arr[1]) {
        return "you've been hit!";
      } else {
        return "missed!";
      }
    })
  );
