const ship = (length) => {
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const isSunk = () => (hits === length ? true : false);
  return { length, hit, isSunk, hits };
};

const carrier = ship(5);
const battleship = ship(4);
const cruiser = ship(3);
const submarine = ship(3);
const destroyer = ship(2);

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

export { ship, gameBoard, carrier, cruiser, battleship, submarine, destroyer };
