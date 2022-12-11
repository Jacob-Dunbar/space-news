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
      <div ref={ref} className="card">
        <div
          className="cardBorder"
          style={{
            background: `radial-gradient(
        400px circle at ${mouse.x}px ${mouse.y}px,
        rgba(255, 255, 255, 0.3),
        transparent 40%
      )`,
          }}
        ></div>
        <div className="bg-[#000000] z-10 h-[99%] w-[99%] rounded-[10px]"></div>
        <div
          style={{
            background: `radial-gradient(
        800px circle at ${mouse.x}px ${mouse.y}px,
        rgba(255, 255, 255, 0.075),
        transparent 40%
      )`,
          }}
          className="grad"
        ></div>
      </div>
    </div>
  );
};

export default NewsCard;
