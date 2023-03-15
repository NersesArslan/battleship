import { gt } from "lodash";
import {
  ship,
  carrier,
  cruiser,
  battleship,
  submarine,
  destroyer,
} from "./ship.js";

const Gameboard = () => {
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
    // suppose you want to place a destroyer in [5, 5] how would you do this?
    let x = coordinate[0];
    let y = coordinate[1];
    // places the hsip horizontally from starting coordinate towards the right most end of the ship

    // write a function that checks the availability of the coordinates
    // start by checking if the present coordinate is available;

    for (let i = 0; i < shipLength; i++) {
      if (gameBoard[x][y] === 1) {
        return "this coordinate is taken";
      }
      gameBoard[x][y + i] = 1;
    }
    return gameBoard;
  };

  return { generateBoard, placeShip, gameBoard };
};

const game = Gameboard();

console.log(game.placeShip(2, [1, 1]));
// Gameboards should be able to place ships at specific coordinates
// by calling the ship factory function.
