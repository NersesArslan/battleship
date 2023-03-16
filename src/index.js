import {
  ship,
  carrier,
  cruiser,
  battleship,
  submarine,
  destroyer,
  gameBoard,
} from "./ship.js";

//creates a 2d array of 10 x 10 dimensions

const placeShip = (shipLength, coordinate) => {
  let x = coordinate[0];
  let y = coordinate[1];
  let coords = [];

  // // checks whether  entered coordinates are within board's boundary
  if (x < 0 || x > 9 || y < 0 || y > 9) {
    return "Please enter valid coordinates";
  }

  //  HORIZONTAL

  // returns all horizontal coordinates of a ship
  for (let i = 0; i < shipLength; i++) {
    coords[i] = [x + i, y]; //Vertical

    // if (coords[1][i] > 9) {
    //   //Vertical
    //   return "This ship can't fit, please enter another coordinate";
    // }

    // //     // check to see if horizontal axis is already marked
    // else if (gameBoard[x][y + i] === 1) {
    //   return "There's already another ship marked here, please choose another coordinate";
    // }
    // // VERTICAL
    // else if (gameBoard[x + i][y] === 1) {
    //   return "There's already another ship marked here, please choose another coordinate";
    // }
  }

  // //   //generated the board with newly placed ship
  // for (let i = 0; i < shipLength; i++) {
  //   gameBoard[x][y + i] = 1;
  // }

  // // VERTICAL
  // for (let i = 0; i < shipLength; i++) {
  //   gameBoard[x + i][y] = 1;
  // }

  // return gameBoard;
  return coords;
};

console.log(placeShip(4, [4, 4]));
