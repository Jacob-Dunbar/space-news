import Craft from "./Craft";
import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";
import ParticleBackground from "./particleBackground";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

function CraftList(props) {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  // Create list of craft currently in space
  const craftElements = props.craftsArray.map((craft, index) => {
    if (craft.name.length > 0) {
      return (
        <Craft
          key={index}
          changeCurrentCraft={props.changeCurrentCraft}
          craftName={craft.craft}
          peopleOnBoard={craft.name}
          currentCraft={props.currentCraft}
        />
      );
    } else {
      return;
    }
  });

  return (
    <div className="h-full ">
      <div
        ref={ref}
        className="relative z-50 sm:w-[95vw] sm:h-[660px] overflow-y-hidden flex items-center justify-center transition-all duration-700 ease-in-out bg-[#141414] rounded-xl w-[500px] h-[620px] group"
      >
        <div className="    absolute leading-7 pt-3 flex flex-col  backdrop-blur-sm backdrop-brightness-125 bg-white/5    z-20 h-[99.5%] w-[99.5%] rounded-[10px]">
          <h1 className="pt-3 font-sans text-lg font-thin tracking-wider text-white sm:text-sm pl-7">
            Select a craft to learn about its crew :
          </h1>
          <div className="z-50 flex mt-4 sm:mb-96 sm:mt-4 sm:ml-5 ">
            {craftElements}
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
          className="pointer-events-none cardBorder"
          style={{
            background: `radial-gradient(
        800px circle at ${mouse.x}px ${mouse.y}px,
        rgba(255, 255, 255, 0.3),
        transparent 40%
      )`,
          }}
        ></div>
        <div className="  bg-stars bg-contain   z-10 h-[99.5%] w-[99.5%] rounded-[10px]"></div>
      </div>
    </div>
  );
}

export default CraftList;
