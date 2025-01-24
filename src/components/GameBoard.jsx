import { useState } from "react";

let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  // const [boardGame, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevBoardGame) => {
  //     const updatedGameBoard = [
  //       ...prevBoardGame.map((innerArray) => [...innerArray]),
  //     ];

  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                disabled={playerSymbol !== null}
              >
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
