import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";

const NewsCard = () => {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });
  return (
    <div>
      <div ref={ref} className="card group">
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
        <div className="bg-stars bg-cover blur-2 bg-white bg-opacity-10  bg z-10 h-[99%] w-[99%] rounded-[10px]"></div>
        <div
          style={{
            background: `radial-gradient(
        800px circle at ${mouse.x}px ${mouse.y}px,
        rgba(255, 255, 255, 0.05),
        transparent 40%
      )`,
          }}
          className="grad bg-clip-border"
        ></div>
      </div>
    </div>
  );
};

export default NewsCard;
