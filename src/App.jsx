import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSquareSelect(rowIndex, colIndex) {
    setActivePlayer((curentActivePlayer) =>
      curentActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let curentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        curentPlayer = "0";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSquareSelect} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
