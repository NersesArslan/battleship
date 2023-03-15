import { gt } from "lodash";
import {
  ship,
  carrier,
  cruiser,
  battleship,
  submarine,
  destroyer,
} from "./ship.js";

//creates a 2d array of 10 x 10 dimensions when called
let board = [];

const generateBoard = () => {
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      board[i][j] = 0;
    }
  }
  return board;
};

const gameBoard = generateBoard();

const placeShip = (shipLength, coordinate) => {
  //separate coordinate array into x and y
  let x = coordinate[0];
  let y = coordinate[1];
  let coords = [];
  // checks whether  entered coordinates are within board's boundary
  if (x < 0 || x > 9 || y < 0 || y > 9) {
    return "Please enter valid coordinates";
  }

  // returns all horizontal coordinates of a ship
  for (let i = 0; i < shipLength; i++) {
    coords[i] = [x, y + i];
    // checks if ship can fit on horizontal axis
    if (coords[i][1] > 9) {
      return "This ship can't fit, please enter another coordinate";
    }
    // check to see if horizontal axis is already marked
    else if (gameBoard[x][y + i] === 1) {
      return "There's already another ship marked here, please choose another coordinate";
    }
  }
  //generated the board with newly placed ship
  for (let i = 0; i < shipLength; i++) {
    gameBoard[x][y + i] = 1;
  }
  return gameBoard;
};

console.log(game.placeShip(2, [1, 1]));
// Gameboards should be able to place ships at specific coordinates
// by calling the ship factory function.
