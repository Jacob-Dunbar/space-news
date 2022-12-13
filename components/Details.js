import { BsArrowRight } from "react-icons/bs";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import Link from "next/link";

function Details(props) {
  // Choose flag icon based on astonaut nationality.
  function flagIcon(nationaly) {
    if (nationaly === "Russian") {
      return <span className="h-4 ml-2 fi fi-ru "></span>;
    } else if (nationaly == "Chinese") {
      return <span className="h-4 ml-2 fi fi-cn "></span>;
    } else if (nationaly == "American") {
      return <span className="h-4 ml-2 fi fi-us "></span>;
    } else if (nationaly == "German") {
      return <span className="h-4 ml-2 fi fi-de "></span>;
    } else if (nationaly == "Japanese") {
      return <span className="h-4 ml-2 fi fi-jp "></span>;
    } else if (nationaly == "French") {
      return <span className="h-4 ml-2 fi fi-fr "></span>;
    } else if (nationaly == "Canadian") {
      return <span className="h-4 ml-2 fi fi-ca "></span>;
    } else if (nationaly == "Italian") {
      return <span className="h-4 ml-2 fi fi-it "></span>;
    } else if (nationaly == "British") {
      return <span className="h-4 ml-2 fi fi-gb "></span>;
    } else {
      return;
    }
  }

  // Set nationaly for astronaut to variable
  const nationality = props.astronaut.results[0].nationality;

  return (
    // Container
    <div className="absolute flex flex-col pl-8 sm:pl-5 sm:w-[90%] sm:-top-5 sm:pr-2 sm:bg-[#0d0d0d]  sm:left-4   -right-64  h-min sm:rounded-xl">
      {/* Back Button for mobile */}
      <button
        onClick={() => props.setShowDetails(false)}
        className="items-center w-full gap-3 pb-4 mt-3 text-left text-slate-100 "
      >
        <HiOutlineChevronDoubleLeft className="inline mr-2 " />
        Back
      </button>
      {/* Profile pic with gradient overlay */}
      <div className="sm:flex sm:justify-center sm:w-full">
        <div className="absolute w-48 rounded-lg sm:flex opacity-60 h-52 h-fill bg-gradient-to-br from-black via-transparent to-transparent"></div>
        <img
          className="object-cover object-top w-48 bg-black rounded-lg max-h-60"
          src={props.astronaut.results[0].profile_image}
          alt="astonaut profile picture"
        />
      </div>
      {/* Details section */}
      <div className="w-48 sm:w-full">
        {/* Name and flag */}
        <h1 className="w-48 py-3 text-lg font-light text-slate-100">
          {props.name}
          {flagIcon(nationality)}
        </h1>
      </div>
      {/* Bio */}
      <p className="w-48 pt-4 text-xs font-light leading-5 border-t sm:w-[95%] indent-4 line-clamp-5 text-slate-100">
        {props.astronaut.results[0].bio}
      </p>
      {/* Wiki link */}
      {props.astronaut.results[0].wiki ? (
        <button className="border-[1px] self-end mt-5 z-50 cursor-pointer  items-center flex text-xs py-1 px-4 text-white border-white rounded-full group-hover:animate-pulse">
          <Link
            target="_blank"
            href={
              props.astronaut.results[0].wiki && props.astronaut.results[0].wiki
            }
          >
            Learn More
          </Link>
          <BsArrowRight className="ml-2 -mr-1" />
        </button>
      ) : (
        <button className="border-[1px] self-end mt-5 z-50 cursor-pointer  items-center flex text-xs py-1 px-4 text-white border-white rounded-full group-hover:animate-pulse">
          <Link
            target="_blank"
            href={`https://en.wikipedia.org/wiki/${props.name}`}
          >
            Learn More
          </Link>
          <BsArrowRight className="ml-2 -mr-1" />
        </button>
      )}
      {/* spacer */}
      <div className="h-2 "></div>
    </div>
  );
}

export default Details;
