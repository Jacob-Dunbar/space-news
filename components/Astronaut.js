import { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Astronaut(props) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // fetch data for all astonauts on craft

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     `https://ll.thespacedevs.com/2.2.0/astronaut/?search=${props.astronaut}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  function flagIcon(nationaly) {
    if (nationaly === "Russian") {
      return <span className="fi fi-ru fis"></span>;
    } else if (nationaly == "Chinese") {
      return <span className="fi fi-cn fis"></span>;
    } else if (nationaly == "American") {
      return <span className="fi fi-us fis"></span>;
    } else if (nationaly == "German") {
      return <span className="fi fi-de fis"></span>;
    } else if (nationaly == "Japanese") {
      return <span className="fi fi-jp fis"></span>;
    } else if (nationaly == "French") {
      return <span className="fi fi-fr fis"></span>;
    } else if (nationaly == "Canadian") {
      return <span className="fi fi-ca fis"></span>;
    } else if (nationaly == "Italian") {
      return <span className="fi fi-it fis"></span>;
    } else if (nationaly == "British") {
      return <span className="fi fi-gb fis"></span>;
    } else {
      return;
    }
  }

  return (
    <div>
      {/* <img
        src={data.results[0].profile_image_thumbnail}
        alt="profile picture"
      /> */}
      <h3>
        {"props.astronaut" + " "}
        {flagIcon("British")}
        {/* <span class="fi fi-gr fis"></span> */}
        {/* <span class="fi fi-gr"></span> */}
      </h3>

      {/* <h4>{data.results[0].}</h4> */}
    </div>
  );
}

export default Astronaut;
