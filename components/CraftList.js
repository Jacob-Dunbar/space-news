import Craft from "./Craft";

function CraftList(props) {
  // Create list of craft currently in space
  const craftElements = props.craftsArray.map((craft, index) => {
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

  return <div className="mt-8 sm:mb-96 sm:mt-4 sm:-ml-5 ">{craftElements}</div>;
}

export default CraftList;
