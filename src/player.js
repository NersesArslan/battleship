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

//initialize each player object with enemyBoard to re
const player = (enemyBoard) => {
  //initializes each player's board factory so all board method are be called direcly from each
  //new player obejct
  const userBoard = bored();
  const board = userBoard.generateBoard();

  const enemy = enemyBoard.generateBoard();
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
  const attack = (coord) => {
    return enemy.receiveAttack(coord);
  };
  return { board, placeShip, receiveAttack, checkAllShips, attack };
};

export default player;
