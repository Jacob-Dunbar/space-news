import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Link from "next/link";

function Details(props) {
  console.log(props.astronaut);

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

  // set nationaly for astronaut to variable
  const nationality = props.astronaut.results[0].nationality;

  return (
    <div className="absolute top-0 flex flex-col pl-8 border-l mt-14 -right-64 h-min">
      <div className=" h-fit">
        <div className="absolute w-48 opacity-50 h-52 h-fill bg-gradient-to-br from-black via-transparent to-transparent"></div>
        <img
          className="object-cover object-top w-48 max-h-60"
          src={props.astronaut.results[0].profile_image}
          alt=""
        />
      </div>

      <div className="w-48">
        <h1 className="w-48 py-3 text-lg font-light text-slate-100">
          {props.name}
          {flagIcon(nationality)}
        </h1>
        <span className=""></span>
      </div>
      <p className="w-48 pt-4 text-xs font-light leading-5 border-t indent-4 line-clamp-6 text-slate-100">
        {props.astronaut.results[0].bio}
      </p>
      <Link
        href={props.astronaut.results[0].wiki}
        className="flex items-center gap-2 mt-3 text-left text-slate-100"
      >
        Learn More <HiOutlineChevronDoubleRight />
      </Link>
      <div className="h-4 "></div>
    </div>
  );
}

export default Details;
