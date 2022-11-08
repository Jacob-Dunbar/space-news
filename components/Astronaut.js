import { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Details from "./Details.js";
import DetailsReject from "./DetailsReject.js";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function Astronaut(props) {
  // Fetched astronaut details
  const [data, setData] = useState(null);

  // Loading state
  const [isLoading, setLoading] = useState(false);

  // Show/hide details
  const [showDetails, setShowDetails] = useState(false);

  // Fetch data for all astonauts on craft
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

  // Show details function to show loading spinner or details component
  function renderDetails() {
    if (!showDetails) {
      return;
    } else if (isLoading) {
      return (
        <img
          className="absolute w-8 sm:right-0 sm:top-3 top-20 -right-40"
          src="/loading.gif"
          alt=""
        />
      );
    } else if (showDetails && data.count === 1) {
      return (
        <Details
          astronaut={data}
          setShowDetails={setShowDetails}
          name={props.astronaut}
          showDetails={showDetails}
        />
      );
    } else {
      return (
        <DetailsReject setShowDetails={setShowDetails} name={props.astronaut} />
      );
    }
  }

  // Handle blur allows learn more to be clicked without loss of focus causing link to disapear before click registered.
  function handleBlur(e) {
    // currentTarget is the parent element, relatedTarget is the clicked element
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowDetails(false);
    }
  }

  return (
    // Container
    <div
      className="pl-8 text-left"
      onClick={() => setShowDetails(!showDetails)}
      onBlur={handleBlur}
    >
      {/* Astonaut list item*/}
      <button className="flex items-center justify-between py-3 font-light text-left border-t group focus:text-orange-400 w-44 text-slate-100">
        {props.astronaut}
        <HiOutlineChevronDoubleRight className="hidden animate-bounceLeft group-focus:inline" />
      </button>
      {/* Details pop up */}
      {renderDetails()}
    </div>
  );
}

export default Astronaut;
