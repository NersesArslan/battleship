import {
  ship,
  carrier,
  cruiser,
  battleship,
  submarine,
  destroyer,
} from "./ship.js";

import bored from "./gameboard.js";

// player factory
const player = () => {
  //initializes each player's board factory so all board method are be called direcly from each
  //new player obejct
  const userBoard = bored();
  const board = userBoard.generateBoard();

  const placeShip = (ship, coordinate, axis) => {
    userBoard.placeShip(ship, coordinate, axis);
  };

  const receiveAttack = (hit) => {
    return userBoard.receiveAttack(hit);
  };
  const checkAllShips = () => {
    return userBoard.checkAllShips();
  };

  //method that attacks other player
  const attack = (enemy, coord) => {
    return enemy.receiveAttack(coord);
  };
  return { board, placeShip, receiveAttack, checkAllShips, attack };
};

export default player;
