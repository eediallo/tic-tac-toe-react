import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState("Edit");
  const [playerInputValue, setplayerInputValue] = useState(name);

  function handleClick() {
    setIsEditing(true);
    setEdit("Save");
  }

  function handleEditChange(e) {
    const inputValue = e.target.value;
    setplayerInputValue(inputValue);
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={playerInputValue}
        onChange={handleEditChange}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{edit}</button>
      </span>
    </li>
  );
}
