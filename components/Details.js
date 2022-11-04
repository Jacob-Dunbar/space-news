import React from "react";

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
    <div className="absolute top-0 flex flex-col pl-6 border-l -right-60 h-min">
      <div className="bg-red-500 h-fit">
        <div className="absolute opacity-50 h-44 w-44 bg-gradient-to-br from-black to-transparent"></div>
        <img
          className=" w-44"
          src={props.astronaut.results[0].profile_image_thumbnail}
          alt=""
        />
      </div>

      <div className="w-44">
        <h1 className="py-3 text-lg font-light text-slate-100 w-44">
          {props.name}
          {flagIcon(nationality)}
        </h1>
        <span className=""></span>
      </div>
      <p className="pt-4 text-xs font-light border-t w-44 indent-4 line-clamp-8 text-slate-100">
        {props.astronaut.results[0].bio}
      </p>
      <div className="h-7 "></div>
    </div>
  );
}

export default Details;