import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import Text from "../components/Space-news.js";
import Rocket from "../components/Rocket.js";
import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import useMouse from "@react-hook/mouse-position";
import NewsCard from "../components/NewsCard";
import ParticleBackground from "../components/particleBackground.js";

export default function Home() {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });
  return (
    <div className="flex items-center justify-center h-full pt-10 ">
      <Head>
        <title>Space News | Home</title>
        <meta name="Space News" content="Latest space news and information" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div
        ref={ref}
        className="relative mx-5 z-50 overflow-y-hidden h-[600px] flex items-center justify-center transition-all duration-700 ease-in-out bg-[#141414] rounded-xl w-[650px]  group"
      >
        <div className="   absolute leading-7 pt-3 px-10 py-10 flex items-center flex-col  backdrop-blur-sm backdrop-brightness-125 bg-white/5    z-20 h-[99.5%] w-[99.5%] rounded-[10px]">
          <div className="relative mb-10">
            <img
              src="/SPLogoGrey.svg"
              alt=""
              className="z-50 mt-5 border-white rounded-full border-[1px] opacity-30 w-72"
            />
            <div className="absolute top-0 mt-5 rounded-full opacity-50 bg-gradient-to-bl from-black to-white -z-20 h-72 w-72"></div>
          </div>

          <div className="flex flex-col items-center w-full px-4 font-sans font-thin leading-6 tracking-wide ">
            <p className="mb-5 text-center text-transparent bg-gradient-to-l from-gray-500 to-gray-300 bg-clip-text">
              A site for those with their heads in the clouds. Our mission is to
              inform the world about the goings on beyond the stratosphere, one
              story at a time.
            </p>

            <p className="mb-5 text-center text-transparent bg-gradient-to-l from-gray-500 to-gray-300 bg-clip-text">
              Check out the news feed for the latest stories, or get to know
              those who are up there in person, right now, in the ‘In space now’
              section of this site.
            </p>
            <div className="z-50 flex mt-3 space-x-5">
              <button className="w-48 px-4 py-1 mt-3 font-semibold text-black border opacity-75 bg-slate-300 hover:opacity-100 rounded-2xl ">
                <Link href={"/feed/1"}>Check out top stories</Link>
              </button>
              <button className="w-48 px-4 py-1 mt-3 font-semibold border opacity-75 border-slate-300 text-slate-300 hover:opacity-100 rounded-2xl">
                <Link href={"/inSpaceNow"}>In space now</Link>
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

    /* Intro text */
  );
}
