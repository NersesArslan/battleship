import {
  ship,
  carrier,
  cruiser,
  battleship,
  submarine,
  destroyer,
} from "./ship.js";

import bored from "./gameboard.js";

// player factory

const player = (enemyBoard) => {
  //attack method for player type
  const attack = (hit) => {
    return enemyBoard.receiveAttack(hit);
  };

  return {
    attack,
  };
};

const computer = (enemyBoard) => {
  const attack = () => {
    let hits = [];
    const getRandom = () => {
      return Math.floor(Math.random() * 9);
    };

    const computerAttack = () => {
      let x = getRandom();
      let y = getRandom();
      if (hits.find((item) => item[0] === x && item[1] === y)) {
        return computerAttack();
      }

      hits.push([x, y]);
      return [x, y];
    };

    return enemyBoard.receiveAttack(computerAttack());
  };

  return { attack };
};

export { player, computer };
