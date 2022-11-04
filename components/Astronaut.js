import { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Details from "./Details.js";
import DetailsReject from "./DetailsReject.js";

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

  function renderDetails() {
    if (!showDetails) {
      return;
    } else if (isLoading) {
      return (
        <img
          className="absolute w-8 top-20 -right-40"
          src="/loading.gif"
          alt=""
        />
      );
    } else if (showDetails && data.count === 1) {
      return <Details astronaut={data} name={props.astronaut} />;
    } else {
      return <DetailsReject name={props.astronaut} />;
    }
  }

  console.log(showDetails);
  return (
    <div>
      <button
        onFocus={() => setShowDetails(!showDetails)}
        onBlur={() => setShowDetails(!showDetails)}
        className="text-left "
      >
        <h3 className="py-3 font-light border-t w-44 text-slate-100">
          {props.astronaut}
        </h3>
      </button>
      {renderDetails()}
    </div>
  );
}

export default Astronaut;
