import Astronaut from "./Astronaut.js";
import { useState } from "react";

function Craft(props) {
  // State to show/hide astonaut list
  const [showPeople, setShowPeople] = useState(false);

  // Generate astonaut list from craft object
  const astronautElements = props.peopleOnBoard.map((name, index) => {
    return <Astronaut key={index} index={index} astronaut={name} />;
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
      className="flex flex-col pl-2 pr-2 mt-1 sm:ml-2 sm:pl-0 sm:pr-3 "
    >
      {/* Craft list item */}
      <button
        className={`mb-3 sm:text-lg  text-xl border-[1px] rounded-full px-4 py-1 text-left capitalize  font-extralight  ${
          props.currentCraft === props.craftName
            ? "text-orange-400 border-orange-400"
            : "text-slate-200 border-slate-200"
        }`}
      >
        {props.craftName === "iss" ? "ISS" : props.craftName}
      </button>
      {/* Astonaut list */}
      {props.currentCraft === props.craftName ? (
        <div className="absolute left-0 w-full h-full top-32">
          {astronautElements}
        </div>
      ) : undefined}
    </div>
  );
}

export default Craft;
