import Astronaut from "./Astronaut.js";
import { useState } from "react";

function Craft(props) {
  // State to show/hide astonaut list
  const [showPeople, setShowPeople] = useState(false);

  // Generate astonaut list from craft object
  const astronautElements = props.peopleOnBoard.map((name, index) => {
    return <Astronaut key={index} astronaut={name} />;
  });

  // Handle blur to keep list open if de-focus happen within list
  function handleBlur(e) {
    // currentTarget is the parent element, relatedTarget is the clicked element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowPeople(false);
    }
  }

  return (
    // Container
    <div
      onClick={() => props.changeCurrentCraft(props.craftName)}
      onBlur={handleBlur}
      className="relative flex flex-col pt-2 pl-6 border-l w-max"
    >
      {/* Craft list item */}
      <button
        className={`mb-3 text-4xl text-left capitalize w-44 font-extralight text-slate-100 ${
          props.currentCraft === props.craftName
            ? "text-orange-400"
            : "text-slate-200"
        }`}
      >
        {props.craftName === "iss" ? "ISS" : props.craftName}
      </button>
      {/* Astonaut list */}
      {props.currentCraft === props.craftName ? (
        <div>{astronautElements}</div>
      ) : undefined}
    </div>
  );
}

export default Craft;
