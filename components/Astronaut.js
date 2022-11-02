import { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Details from "./Details.js";

function Astronaut(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // fetch data for all astonauts on craft
  // should this be use effect or just get static or server side?

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://lldev.thespacedevs.com/2.2.0/astronaut/?search=${props.astronaut}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })

      .catch((error) => {
        throw error;
      });
  }, []);

  // function flagIcon(nationaly) {
  //   if (nationaly === "Russian") {
  //     return <span className="fi fi-ru fis"></span>;
  //   } else if (nationaly == "Chinese") {
  //     return <span className="fi fi-cn fis"></span>;
  //   } else if (nationaly == "American") {
  //     return <span className="fi fi-us fis"></span>;
  //   } else if (nationaly == "German") {
  //     return <span className="fi fi-de fis"></span>;
  //   } else if (nationaly == "Japanese") {
  //     return <span className="fi fi-jp fis"></span>;
  //   } else if (nationaly == "French") {
  //     return <span className="fi fi-fr fis"></span>;
  //   } else if (nationaly == "Canadian") {
  //     return <span className="fi fi-ca fis"></span>;
  //   } else if (nationaly == "Italian") {
  //     return <span className="fi fi-it fis"></span>;
  //   } else if (nationaly == "British") {
  //     return <span className="fi fi-gb fis"></span>;
  //   } else {
  //     return;
  //   }
  // }

  // DUMMY PIC
  // const profilePic = "/astro.p"

  // set nationaly for astronaut to variable
  // const nationality = data.results[0].nationality;

  function renderDetails() {
    if (!showDetails) {
      return;
    } else if (showDetails && data.count === 1) {
      return <Details astronaut={data} />;
    } else {
      return <p>Data unavaliable</p>;
    }
  }

  console.log(showDetails);
  return (
    <div>
      <h3 onClick={() => setShowDetails(!showDetails)}>
        {props.astronaut + ""}
      </h3>
      {renderDetails()}
    </div>

    // DUMMY

    // <div>
    //   <img src="/astro.jpeg" alt="profile picture" />
    //   <h3>
    //     {"props.astronaut" + ""}
    //     {flagIcon("Russian")}
    //   </h3>
    // </div>
  );
}

export default Astronaut;
