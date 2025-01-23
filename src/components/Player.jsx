import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerInputValue, setplayerInputValue] = useState(name);

  function handleEditClick() {
    !isEditing ? setIsEditing(true) : setIsEditing(false);
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
        <button onClick={handleEditClick}>
          {!isEditing ? "Edit" : "Save"}
        </button>
      </span>
    </li>
  );
}
