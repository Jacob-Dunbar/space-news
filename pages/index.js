import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import Text from "../components/Space-news.js";
import Rocket from "../components/Rocket.js";
import { Suspense } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <Head>
        <title>Space News | Home</title>
        <meta name="Space News" content="Latest space news and information" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {/* Animated header */}
      <div className="w-full h-72">
        <Canvas>
          <Suspense>
            <pointLight
              distance={20}
              decay={2}
              intensity={2}
              color={"white"}
              position={[0, 4, 0.75]}
            />

            <Text />
            <Rocket />
          </Suspense>
        </Canvas>
      </div>
      {/* Intro text */}
      <div className="flex flex-col items-center w-1/3 gap-4 mt-4 font-thin leading-6 tracking-wide sm:mb-4 sm:-mt-16 sm:w-5/6">
        <p className="text-center text-slate-200">
          A site for those with our heads beyond the clouds. Our mission is to
          inform the world about the goings on beyond the stratosphere, one
          story at a time.
        </p>
        <p className="text-center text-slate-200">
          Check out the news feed for the latest stories, or get to know those
          who are up there in person, right now, in the ‘In space now’ section
          of this site.
        </p>
        {/* <p className="text-center text-slate-200">Live long and prosper. 👽</p>
         */}
        <button className="px-4 py-1 mt-3 font-semibold text-orange-400 border border-orange-400 opacity-75 hover:opacity-100 rounded-2xl w-fit">
          <Link href={"/feed/1"}>Check out latest news</Link>
        </button>
      </div>
    </div>
  );
}
