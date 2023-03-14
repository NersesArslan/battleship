import ship from "./ship.js";

const Gameboard = () => {
  //figure out how to create a board
  let board = [];

  const generateBoard = (rows, cols) => {
    for (let i = 0; i < rows; i++) {
      board[i] = [i];
      for (let j = 0; j < cols; j++) {
        board[i][j] = j;
      }
    }
    return board;
  };

  //place ships in specific coordinates in the board
  const test = () => {
    console.log("this is just a test");
  };

  const generateShip = () => {
    return ship();
  };

  return { generateBoard, test };
};

const game = Gameboard();

console.log(game.generateBoard(10, 10));
