import { ship } from "./ship";

const bored = () => {
  // array where all ship data (name, coordinates, sinkStatus) is stored
  let shipData = [];
  // array where all missed shots are stored.
  //"You miss 100% of the shots you don't take"
  // --Wayne Gretzky
  let missedShots = [];
  // generates 10 x 10 gameboard as a 2D array
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

  //places a ship to the game board.
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

  //determines whether an attack hits or misses a target & records each hit.
  const receiveAttack = (hit) => {
    let x = hit[0];
    let y = hit[1];
    //checks if coordinate has already been entered before
    if (gameBoard[x][y] === "x") {
      return "This coordinate is already hit";
    }
    //checks if the coordinate is occupied by a ship
    if (gameBoard[x][y] === 1) {
      //changes the value of the coordinate to "x";
      gameBoard[x][y] = "x";
      //return the name of the ship that has been hit
      const ship = shipData.find((item) =>
        item.coordinates.find((coords) => coords[0] === x && coords[1] === y)
      );
      //executes the hit function
      ship.hit();

      return `${ship.name} is hit!`;
    }
    //checks if the coordinates miss
    else if (gameBoard[x][y] === 0) {
      //records missed coordinate to missedShots array
      missedShots.push([x, y]);
      //changes the value of the coordinate to "x";
      gameBoard[x][y] = "x";

      return "Missed!";
    }
  };

  const checkAllShips = () => {
    //write a function that returns a message when all ships from the gameboard as sunk.

    //returns sink status of each ship
    let sinkStatus = shipData.map((item) => item.isSunk());
    //checks if the sink status of all ships are true
    const allEqual = (arr) => arr.every((val) => val === true);
    //returns game over message if all ships are sunk
    if (allEqual(sinkStatus)) {
      return "Game Over! All ships are sunk!";
    }
  };
  return {
    placeShip,
    generateBoard,
    receiveAttack,
    checkAllShips,
    gameBoard,
    shipData,
    missedShots,
  };
};

export default bored;
