const ship = (name, length) => {
  let coordinates = [];
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const isSunk = () => (hits === length ? true : false);
  return { name, length, coordinates, hit, isSunk, hits };
};

const carrier = ship("carrier", 5);
const battleship = ship("battleship", 4);
const cruiser = ship("cruiser", 3);
const submarine = ship("submarine", 3);
const destroyer = ship("destroyer", 2);

export { ship, carrier, cruiser, battleship, submarine, destroyer };
