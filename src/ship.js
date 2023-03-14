const ship = (length) => {
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const isSunk = () => (hits === length ? true : false);
  return { length, hit, isSunk, hits };
};

export default ship;
