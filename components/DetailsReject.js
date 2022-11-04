import React from "react";

function DetailsReject(props) {
  return (
    <div className="absolute top-0 flex flex-col pl-6 border-l -right-60 h-min">
      <div className="bg-red-500 h-fit"></div>

      <div className="w-44">
        <h1 className="py-3 text-lg font-light border-b-0 text-slate-100 w-44">
          {props.name}
        </h1>

        <p className="pt-4 text-sm font-light border-t w-44 indent-4 line-clamp-8 text-slate-100">
          No data available for this Astronaut
        </p>
      </div>
      <div className="h-7 "></div>
    </div>
  );
}

export default DetailsReject;
