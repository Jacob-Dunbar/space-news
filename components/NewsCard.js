import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";
import ParticleBackground from "./particleBackground";

const NewsCard = () => {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });
  return (
    <div>
      <div
        ref={ref}
        className="relative flex items-center justify-center transition-all duration-500 ease-in-out bg-black rounded-xl w-[600px] h-28 hover:h-72 group"
      >
        <div
          className="opacity-0 cardBorder group-hover:opacity-100"
          style={{
            background: `radial-gradient(
        1000px circle at ${mouse.x}px ${mouse.y}px,
        rgba(255, 255, 255, 0.3),
        transparent 40%
      )`,
          }}
        ></div>
        <div className="    absolute  backdrop-blur-sm backdrop-brightness-125 bg-white/5    z-20 h-[99%] w-[99.5%] rounded-[10px]"></div>
        <div className="  bg-stars bg-contain   z-10 h-[99%] w-[99.5%] rounded-[10px]"></div>
        <div
          style={{
            background: `radial-gradient(
        800px circle at ${mouse.x}px ${mouse.y}px,
        rgba(255, 255, 255, 0.05),
        transparent 40%
      )`,
          }}
          className="grad "
        ></div>
      </div>
    </div>
  );
};

export default NewsCard;
