import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";
import ParticleBackground from "./particleBackground";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

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
        className="relative z-50 mb-5 overflow-y-hidden flex items-center justify-center transition-all duration-700 ease-in-out bg-black rounded-xl w-[650px] h-16 hover:h-56 group"
      >
        <div className="    absolute leading-7 flex flex-col  backdrop-blur-sm backdrop-brightness-125 bg-white/5    z-20 h-[99%] w-[99.5%] rounded-[10px]">
          <div className="flex items-center w-full h-16 ">
            {article.imageUrl && (
              <img
                className="ml-4 rounded-full w-11 h-11"
                src={article.imageUrl}
              ></img>
            )}

            <h1 className="px-6 py-3 font-sans font-light text-transparent line-clamp-1 bg-gradient-to-t from-gray-600 to-gray-50 bg-clip-text">
              {article.title}
            </h1>
          </div>
          <div className="z-50 ">
            <p className="absolute w-full pt-3 pl-20 pr-5 font-sans text-sm font-thin tracking-wide transition-all duration-1000 opacity-0 pointer-events-none -left-10 group-hover:opacity-100 group-hover:-left-0 indent-6 line-clamp-3 text-slate-300">
              {article.summary === "" ? article.description : article.summary}
            </p>
            <div className="absolute z-40 transition-all duration-700 delay-500 opacity-0 top-40 right-8 group-hover:opacity-100 group-hover:right-6 ">
              <button className="border-[1px] z-50 cursor-pointer  items-center flex text-xs py-1 px-4 text-white border-white rounded-full group-hover:animate-pulse">
                Read On
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
        1000px circle at ${mouse.x}px ${mouse.y}px,
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