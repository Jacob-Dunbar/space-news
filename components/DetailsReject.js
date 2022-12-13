import Link from "next/link";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

function DetailsReject(props) {
  return (
    // container
    <div className="absolute top-0 flex flex-col ml-8 pl-8  sm:bg-black border-l-[1px]  sm:h-full sm:w-64  sm:z-20    h-min">
      {/* Back button for mobile */}
      <button className="items-center hidden w-full gap-3 pb-4 mt-3 text-left text-slate-100 sm:inline">
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
        <button className="border-[1px] ml-auto self-end mt-5 z-50 cursor-pointer  items-center flex text-xs py-1 px-4 text-white border-white rounded-full group-hover:animate-pulse">
          <Link
            target="_blank"
            href={`https://en.wikipedia.org/wiki/${props.name}`}
          >
            Try Wikipedia
          </Link>
          <BsArrowRight className="ml-2 -mr-1" />
        </button>
      </div>
      {/* spacer */}
      <div className="h-7 "></div>
    </div>
  );
}

export default DetailsReject;
