import { ship } from "./ship";

const bored = () => {
  // generates 10 x 10 gameboard as a 2D array
  let board = [];
  let shipData = [];

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

  const placeShip = (ship, coordinate, axis) => {
    let x = coordinate[0];
    let y = coordinate[1];
    let coords = [];
    const shipLength = ship.length;
    // // checks whether  entered coordinates are within board's boundary
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return "Please enter valid coordinates";
    }

    if (axis) {
      // returns all horizontal coordinates of a ship
      // need to figure out how to keep track of this for each ship placed on the gameboard
      for (let i = 0; i < shipLength; i++) {
        coords[i] = [x, y + i];

        // checks if ship can fit on horizontal axis
        if (coords[i][1] > 9) {
          return "This ship can't fit.";
        }
        // check to see if horizontal axis is already marked
        else if (gameBoard[x][y + i] === 1) {
          return "There's already another ship marked here.";
        }
      }
      //generated the board with newly placed ship
      for (let i = 0; i < shipLength; i++) {
        gameBoard[x][y + i] = 1;
        // pushes each placed ships coordinates to the ship object
        ship.coordinates.push((coords[i] = [x, y + i]));
      }
      //pushes each newly placed ship onto the shipData array
      shipData.push(ship);
    } else {
      //code for vertical placement of ships
      for (let i = 0; i < shipLength; i++) {
        coords[i] = [x - i, y];
        if (coords[i][0] < 0) {
          return "This ship can't fit.";
        }

        if (gameBoard[x - i][y] === 1) {
          return "There's another ship marked in these coordinates.";
        }
      }
      for (let i = 0; i < shipLength; i++) {
        gameBoard[x - i][y] = 1;
        ship.coordinates.push((coords[i] = [x - i, y]));
      }
      shipData.push(ship);
    }

    return gameBoard;
  };

  const receiveAttack = (hit) => {
    let x = hit[0];
    let y = hit[1];
    if (gameBoard[x][y] === 1) {
      //send hit to the corresponding ship

      const ship = shipData.find((item) =>
        item.coordinates.find((coords) => coords[0] === x && coords[1] === y)
      );
      ship.hit();
      return `${ship.name} got hit!`;
    } else if (gameBoard[x][y] === 0) {
      return "better luck next time!";
      //record coordinates of missed shot
    }
  };

  return {
    placeShip,
    generateBoard,
    receiveAttack,
    gameBoard,
    shipData,
  };
};

export default bored;
