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
      board[i] = [i];
      for (let j = 0; j < 10; j++) {
        board[i][j] = j;
      }
    }
    return board;
  };

  // creates a ship of a specific length  when called
  const generateShip = (length) => {
    return ship(length);
  };

  const placeShip = (shipType, coordinates) => {
    const shipLength = shipType.length;

    const placeFunction = (shipLength, coordinates) => {
      //code that iterates through gameBoard and returns a `shipLength` number of consecutive coordinates
      // starting from `coordinates`
      return coord;
    };
  };
  return { generateBoard, generateShip, placeShip };
};

const game = Gameboard();

console.log(game.placeShip(cruiser));

// Gameboards should be able to place ships at specific coordinates
// by calling the ship factory function.
