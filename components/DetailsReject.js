import Link from "next/link";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";

function DetailsReject(props) {
  return (
    // container
    <div className="absolute top-0 flex flex-col pl-8 sm:bg-black border-l-[1px]  sm:h-full sm:w-64 mt-14 sm:z-20 sm:top-0 -right-64 sm:-right-12 h-min">
      {/* Back button for mobile */}
      <button className="flex items-center hidden w-full gap-3 pb-4 mt-3 text-left text-slate-100 sm:inline">
        <HiOutlineChevronDoubleLeft className="inline mr-2 " />
        Back
      </button>

      <div className="sm:flex sm:flex-col sm:justify-between sm:h-full w-44">
        <div>
          {/* Name */}
          <h1 className="py-3 text-lg font-light border-b-0 text-slate-100 w-44">
            {props.name}
          </h1>
          {/* No data message */}
          <p className="pt-4 text-sm font-light border-t w-44 indent-4 line-clamp-8 text-slate-100">
            There is currently no data available for this astronaut.
          </p>
        </div>
        {/* Wiki link */}
        <Link
          className="flex items-center gap-3 mt-3 text-left sm:justify-self-end text-slate-100 group hover:text-orange-400"
          target="_blank"
          href={`https://en.wikipedia.org/wiki/${props.name}`}
        >
          Try Wikipedia
          <HiOutlineChevronDoubleRight className=" group-hover:animate-bounceLeft" />
        </Link>
      </div>
      {/* spacer */}
      <div className="h-7 "></div>
    </div>
  );
}

export default DetailsReject;
