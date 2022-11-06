import Astronaut from "./Astronaut.js";
import { useState } from "react";

function Craft(props) {
  // use craft data to generate astronaut components for each one

  const astronautElements = props.peopleOnBoard.map((name, index) => {
    return <Astronaut key={index} astronaut={name} />;
  });

  const [showPeople, setShowPeople] = useState(false);

  console.log(astronautElements);

  function handleBlur(e) {
    // if the blur was because of outside focus
    // currentTarget is the parent element, relatedTarget is the clicked element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowPeople(false);
    }
  }

  return (
    <div
      onClick={() => props.changeCurrentCraft(props.craftName)}
      onBlur={handleBlur}
      className="relative flex pt-2 pl-6 border-l w-max"
    >
      <div>
        <button
          className={`mb-3 text-4xl text-left capitalize w-44 font-extralight text-slate-100 ${
            props.currentCraft === props.craftName
              ? "text-orange-400"
              : "text-slate-200"
          }`}
        >
          {props.craftName === "iss" ? "ISS" : props.craftName}
        </button>
        {props.currentCraft === props.craftName ? (
          <div>{astronautElements}</div>
        ) : undefined}
      </div>
    </div>
  );
}

export default Craft;
