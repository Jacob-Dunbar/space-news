import React from "react";
import Craft from "../components/Craft";

function CraftList(props) {
  console.log(props.peopleInSpace);
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

  return <div className="mt-10 ">{peopleInSpaceElements}</div>;
}

export default CraftList;
