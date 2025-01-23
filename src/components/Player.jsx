import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setplayerInputValue] = useState(initialName);

  function handleEditClick() {
    //  setIsEditing(!isEditing); // works fine but has issue for react schedule behavior
    setIsEditing((editing) => !editing); // recommended
  }

  function handleEditChange(e) {
    const inputValue = e.target.value;
    setplayerInputValue(inputValue);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleEditChange}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>
          {!isEditing ? "Edit" : "Save"}
        </button>
      </span>
    </li>
  );
}
