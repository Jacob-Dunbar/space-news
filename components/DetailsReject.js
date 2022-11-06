import Link from "next/link";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function DetailsReject(props) {
  return (
    <div className="absolute top-0 flex flex-col pl-6 border-l mt-14 -right-60 h-min">
      <div className="bg-red-500 h-fit"></div>

      <div className="w-44">
        <h1 className="py-3 text-lg font-light border-b-0 text-slate-100 w-44">
          {props.name}
        </h1>

        <p className="pt-4 text-sm font-light border-t w-44 indent-4 line-clamp-8 text-slate-100">
          There is currently no data available for this astronaut.
        </p>

        <Link
          className="flex items-center gap-3 mt-3 text-left text-slate-100 group hover:text-orange-400"
          target="_blank"
          href={`https://en.wikipedia.org/wiki/${props.name}`}
        >
          Try Wikipedia{" "}
          <HiOutlineChevronDoubleRight className=" group-hover:animate-bounceLeft" />
        </Link>
      </div>
      <div className="h-7 "></div>
    </div>
  );
}

export default DetailsReject;
