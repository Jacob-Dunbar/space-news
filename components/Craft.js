import Astronaut from "./Astronaut.js";
import { useState, useEffect } from "react";

function Craft(props) {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);

  // fetch data for all astonauts on craft

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     `https://ll.thespacedevs.com/2.2.0/astronaut/?search=${props.peopleOnBoard.toString()}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  // use astronaut data to generate astronaut components for each one

  // const astronautElements = data.map((person, index) => {
  //   return <Astronaut key={index} astronaut={person} />;
  // });

  return (
    <div>
      <h1>{props.craftName}</h1>
      {/* {astronautElements} */}
      {props.peopleOnBoard.toString()}
    </div>
  );
}

export default Craft;
