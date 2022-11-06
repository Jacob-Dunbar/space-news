import Link from "next/link";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function NewsItemCard({ article, pageNumber }) {
  console.log(article);

  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };

  const date = new Date(article.addDate).toLocaleDateString("en-GB", options);

  //chose summary

  return (
    <div className="flex flex-col items-center justify-center ">
      <Link
        className="relative flex flex-col items-center justify-start w-1/2 px-8 py-4 pb-6 transition-all sm:py-1 sm:px-3 sm:w-11/12 group hover:scale-102 h-1/2"
        href="/feed/[slug]/article/[id]"
        as={`${pageNumber}/article/${article.articleId}`}
      >
        {/* image */}
        <div className="absolute top-0 w-full h-full ">
          <div className="absolute w-full h-full opacity-100 group-hover:opacity-90 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute w-full h-full opacity-90 group-hover:opacity-80 bg-gradient-to-b from-black via-transparent to-transparent"></div>
          <div className="absolute w-full h-full opacity-90 group-hover:opacity-80 bg-gradient-to-l from-black via-transparent to-transparent"></div>
          <div className="absolute w-full h-full opacity-90 group-hover:opacity-80 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          <img
            className="w-full h-full sm:object-cover"
            src={article.imageUrl}
          />
        </div>
        {/* content */}
        <div className="z-10 flex flex-col items-start justify-between w-full pb-2 h-96">
          {/* title */}
          <h1 className="py-2 pl-4 text-lg font-light leading-6 tracking-wide border-l text-slate-200">
            {article.title}
          </h1>
          {/* info */}
          <div className="flex flex-col justify-start w-4/5 py-2 pl-5 border-l">
            {/* date */}
            <h1 className="pb-2 pr-3 text-lg font-thin tracking-wider border-b sm:text-base w-min text-slate-100">
              {date}
            </h1>
            {/* summary */}
            <p className="pt-3 text-xs font-thin indent-6 line-clamp-3 text-slate-300">
              {article.summary === "" ? article.description : article.summary}
            </p>
            <p className="flex items-center gap-3 mt-3 text-left sm:text-sm text-slate-100 group group-hover:text-orange-400">
              Read on
              <HiOutlineChevronDoubleRight className=" group-hover:animate-bounceLeft" />
            </p>
          </div>
        </div>
      </Link>
      <div className="w-1/2 h-1 pb-8 border-b "></div>
    </div>
  );
}

{
  /* <div className="flex items-center h-56 pt-3 w-80">
        <div className="flex flex-col justify-between w-1/2 h-full pr-4 border-r">
          
          <div className="flex justify-center w-full mt-3">
            <Link
              className="flex justify-center w-full py-2 text-xs text-slate-100 bg-slate-500"
              href="/feed/[slug]/article/[id]"
              as={`${pageNumber}/article/${article.articleId}`}
            >
              READ MORE
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-1/2 h-full gap-4 pl-4">
          

         
        </div>
      </div> */
}

export default NewsItemCard;
