const UI = () => {
  const playerBoard = document.querySelector(".player-board");
  const computerBoard = document.querySelector(".computer-board");

  const renderPlayerBoard = (gameBoard) => {
    playerBoard.textContent = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if (gameBoard[i][j] === 1) {
          cell.style.backgroundColor = "gray";
        } else if (gameBoard[i][j] === "x") {
          cell.style.backgroundColor = "#f87171";
        }

        playerBoard.appendChild(cell);
      }
    }
    return gameBoard;
  };

  const renderComputerBoard = (gameBoard) => {
    computerBoard.textContent = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.x = i;
        cell.dataset.y = j;

        if (gameBoard[i][j] === 1) {
          cell.style.backgroundColor = "gray";
        } else if (gameBoard[i][j] === "x") {
          cell.style.backgroundColor = "#f87171";
        }
        computerBoard.appendChild(cell);
      }
    }
    return gameBoard;
  };

  return { renderPlayerBoard, renderComputerBoard };
};

export default UI;
