import React from "react";
import Craft from "../components/Craft";

function CraftList(props) {
  const peopleInSpaceElements = props.peopleInSpace.map((craft, index) => {
    return (
      <Craft
        key={index}
        changeCurrentCraft={props.changeCurrentCraft}
        craftName={craft.craft}
        peopleOnBoard={craft.name}
        currentCraft={props.currentCraft}
      />
    );
  });

  return (
    <div className="mt-8 sm:mb-96 sm:mt-4 sm:-ml-5 ">
      {peopleInSpaceElements}
    </div>
  );
}

export default CraftList;
