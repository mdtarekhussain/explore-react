import { useState } from "react";

export default function Team() {
  const [team, isTeam] = useState(11);
  const handleAdd = () => {
    const newAdd = team + 1;
    isTeam(newAdd);
  };
  const handleRemove = () => {
    isTeam(team - 1);
  };
  const teamStyle = {
    border: "2px solid purple ",
    margin: "15px",
    padding: "15px",
    borderRadius: "10px",
  };
  return (
    <div style={teamStyle}>
      <h1>Player :{team} </h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
