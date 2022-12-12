import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";
import ParticleBackground from "./particleBackground";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const NewsCard = ({ article, pageNumber }) => {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  return (
    <div>
      <div
        ref={ref}
        className="relative z-50 mb-5 overflow-y-hidden flex items-center justify-center transition-all duration-700 ease-in-out bg-[#141414] rounded-xl w-[650px] h-16 hover:h-48 group"
      >
        <div className="    absolute leading-7 flex flex-col  backdrop-blur-sm backdrop-brightness-125 bg-white/5    z-20 h-[99%] w-[99.5%] rounded-[10px]">
          <div className="flex items-center w-full h-16 ">
            {article.imageUrl && (
              <img
                className="ml-4 rounded-full w-11 h-11"
                src={article.imageUrl}
              ></img>
            )}

            <h1 className="px-4 py-3 font-sans font-light leading-10 text-transparent line-clamp-1 bg-gradient-to-l from-gray-300 to-white bg-clip-text">
              {article.title}
            </h1>
          </div>
          <div className="relative z-50 ">
            <p className="absolute w-full pt-3 pl-20 pr-8 font-sans text-sm font-thin tracking-wide text-transparent transition-all duration-1000 opacity-0 pointer-events-none bg-gradient-to-l from-gray-500 to-gray-400 bg-clip-text -top-4 -left-10 group-hover:opacity-100 group-hover:-left-0 indent-6 line-clamp-3 text-slate-300">
              {article.summary === "" ? article.description : article.summary}
            </p>
            <div className="absolute z-40 transition-all duration-700 delay-500 opacity-0 top-20 right-10 group-hover:opacity-100 group-hover:right-8 ">
              <button className="border-[1px] -mt-1 z-50 cursor-pointer  items-center flex text-xs py-1 px-4 text-white border-white rounded-full group-hover:animate-pulse">
                <Link
                  href="/feed/[slug]/article/[id]"
                  as={`${pageNumber}/article/${article.articleId}`}
                >
                  Read On
                </Link>
                <BsArrowRight className="ml-2 -mr-1" />
              </button>
            </div>
          </div>
          <div
            style={{
              background: `radial-gradient(
        800px circle at ${mouse.x}px ${mouse.y}px,
        rgba(255, 255, 255, 0.05),
        transparent 40%
      )`,
            }}
            className=" grad"
          ></div>
        </div>

        <div
          className="opacity-0 pointer-events-none cardBorder group-hover:opacity-100"
          style={{
            background: `radial-gradient(
        800px circle at ${mouse.x}px ${mouse.y}px,
        rgba(255, 255, 255, 0.3),
        transparent 40%
      )`,
          }}
        ></div>
        <div className="  bg-stars bg-contain   z-10 h-[99%] w-[99.5%] rounded-[10px]"></div>
      </div>
    </div>
  );
};

export default NewsCard;
