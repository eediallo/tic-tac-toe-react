import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setplayerInputValue] = useState(initialName);

  function handleEditClick() {
    //  setIsEditing(!isEditing); // works fine but has issue for react schedule behavior
    setIsEditing((editing) => !editing); // recommended
  }

  function handleEditChange(e) {
    setplayerInputValue(e.target.value);
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      setplayerInputValue(e.target.value);
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleEditChange}
        onKeyDown={(e) => e.key === "Enter" && handleEditClick()}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
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
