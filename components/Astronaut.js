import { useState, useEffect, useRef } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Details from "./Details.js";
import DetailsDesk from "./DetailsDesk.js";
import DetailsReject from "./DetailsReject.js";
import { HiOutlineChevronRight } from "react-icons/hi";

function Astronaut(props) {
  // Fetched astronaut details
  const [data, setData] = useState(null);
  const btnRef = useRef();

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
  function renderDetailsMob() {
    if (!showDetails) {
      return;
    } else if (isLoading) {
      return (
        <img
          className="absolute w-8 sm:left-60 sm sm:top-3 top-20 -right-40"
          src="/loading.gif"
          alt=""
        />
      );
    } else if (showDetails && data.count === 1) {
      return (
        <Details
          className="z-50 "
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
  function renderDetailsDesk() {
    if (!showDetails) {
      return;
    } else if (isLoading) {
      return (
        <img
          className="absolute w-12 top-20 right-40"
          src="/loading.gif"
          alt=""
        />
      );
    } else if (showDetails && data.count === 1) {
      return (
        <DetailsDesk
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

  function handleClick() {
    setShowDetails(true);
    btnRef.current.focus();
  }

  console.log(showDetails);

  return (
    // Container
    <div className="flex pl-8 overflow-x-hidden text-left">
      {/* Details pop up */}
      <div className="hidden sm:block">{renderDetailsMob()} </div>
      <div className="block sm:hidden">{renderDetailsDesk()}</div>
      <div>
        {/* Astonaut list item*/}
        <button
          ref={btnRef}
          onClick={handleClick}
          onBlur={handleBlur}
          className="flex items-center justify-between py-3 font-light text-left outline-none group focus:text-orange-400 w-44 text-slate-100"
        >
          {props.astronaut}
          <HiOutlineChevronRight className="sm:group-focus:hidden text-slate-100 group-focus:animate-bounceLeft group-focus:text-orange-400" />
        </button>
      </div>
    </div>
  );
}

export default Astronaut;
