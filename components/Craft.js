import Astronaut from "./Astronaut.js";

function Craft(props) {
  // use craft data to generate astronaut components for each one

  const astronautElements = props.peopleOnBoard.map((name, index) => {
    return <Astronaut key={index} astronaut={name} />;
  });

  return (
    <div className="relative flex pt-2 pl-6 mb-4 border-l h-min w-max">
      <div>
        <h1 className="mb-3 text-4xl capitalize font-extralight text-slate-100">
          {props.craftName === "iss" ? "ISS" : props.craftName}
        </h1>
        {astronautElements}
      </div>
    </div>
  );
}

export default Craft;
