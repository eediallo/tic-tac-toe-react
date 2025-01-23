import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState("Edit");

  function handleClick() {
    if (!isEditing) {
      setIsEditing(true);
      setEdit("Save");
    }
  }

  let playerName = (
    <span className={isEditing ? "player-name" : ""}>{name}</span>
  );
  if (isEditing) {
    playerName = <input />;
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
