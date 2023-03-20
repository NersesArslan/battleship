const ship = (length) => {
  let coordinates = [];
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const isSunk = () => (hits === length ? true : false);
  return { length, coordinates, hit, isSunk, hits };
};

const carrier = ship(5);
const battleship = ship(4);
const cruiser = ship(3);
const submarine = ship(3);
const destroyer = ship(2);

export { ship, carrier, cruiser, battleship, submarine, destroyer };
