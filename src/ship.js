//ship factory.
//Each successfully placed ship will have its coordinates stored in its object.
//they will have a hit() function that will
const ship = (name, length) => {
  let coordinates = [];
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const isSunk = () => (hits === length ? true : false);
  return { name, length, coordinates, hit, isSunk, hits };
};

export { ship };
