import Astronaut from "./Astronaut.js";

function Craft(props) {
  // use craft data to generate astronaut components for each one

  const astronautElements = props.peopleOnBoard.map((name, index) => {
    return <Astronaut key={index} astronaut={name} />;
  });

  return (
    <div>
      <h1>{props.craftName}</h1>
      {astronautElements}
    </div>
  );
}

export default Craft;
