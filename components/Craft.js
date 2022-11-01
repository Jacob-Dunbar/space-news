import React from "react";

function Craft(props) {
  return (
    <div>
      <h1>{props.craftName}</h1>
      <ul>
        {props.peopleOnBoard.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
}

export default Craft;
