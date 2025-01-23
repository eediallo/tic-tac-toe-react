import { useState } from "react";

let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [boardGame, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevBoardGame) => {
      const updatedGameBoard = [
        ...prevBoardGame.map((innerArray) => [...innerArray]),
      ];

      updatedGameBoard[rowIndex][colIndex] = "X";
      return updatedGameBoard;
    });
  }
  return (
    <ol id="game-board">
      {boardGame.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
