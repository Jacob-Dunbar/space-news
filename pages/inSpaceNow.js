import { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CraftList from "../components/CraftList";
import Iss from "../components/IssModel.js";
import Tiangong from "../components/TiangongModel.js";
import Generic from "../components/GenericModel.js";
import Head from "next/head";

function InSpaceNow(props) {
  // State to decide which craft is currently selected
  const [currentCraft, setCurrentCraft] = useState("");

  // Take array of people objects and generate array of craft objects with people within
  function generateCrafts(people) {
    // Empty array for people not in ISS or Tiangong
    let miscArr = [];

    // Potential new craft 1
    let newCraft = { craft: "", name: [] };

    // Potential new craft 2
    let newCraft2 = { craft: "", name: [] };

    // Array of 2 objects, one for each space station.
    let craftsArray = [
      { craft: "iss", name: [] },
      { craft: "tiangong", name: [] },
    ];

    // If the person is in ISS push name to craftsArray[0].name and same for if in Tiangong.
    // If in neither space station push whole person object to miscArr
    people.map((person) => {
      if (person.craft === "ISS") {
        craftsArray[0].name.push(person.name);
      } else if (person.craft === "Tiangong") {
        craftsArray[1].name.push(person.name);
      } else {
        miscArr.push(person);
      }
    });

    // For each person object in miscArr, check if their craft is new
    // If so make newCraft.craft = person.craft
    // If the next person.craft = newCraft.craft, push thier name to newCraft.name too
    for (let i = 0; i < miscArr.length; i++) {
      if (!newCraft.craft || miscArr[i].craft === newCraft.craft) {
        newCraft.craft = miscArr[i].craft;
        newCraft.name.push(miscArr[i].name);

        // If there is a second new craft, newCraft2.craft = person.craft
        // Only two addtional new crafts possible
      } else if (newCraft.craft && miscArr[i].craft != newCraft.craft) {
        newCraft2.craft = miscArr[i].craft;
        newCraft2.name.push(miscArr[i].name);
      }
    }

    // If newCraft was created, add to craftArr
    if (newCraft.craft) {
      craftsArray.push(newCraft);
    }

    // If newCraft2 was created, add to craftArr
    if (newCraft2.craft) {
      craftsArray.push(newCraft2);
    }

    return craftsArray;
  }

  // Crafts array
  const craftsArray = generateCrafts(props.people);

  // set current craft to first craft
  useEffect(() => {
    setCurrentCraft(craftsArray[0].craft);
  }, []);

  // Change current craft function
  function changeCurrentCraft(newCraft) {
    setCurrentCraft(newCraft);
  }

  // Choose model to render Iss / Tiangong / Generic craft
  function choseModel() {
    if (currentCraft === "iss") {
      return <Iss className="" />;
    } else if (currentCraft === "tiangong") {
      return <Tiangong />;
    } else if (currentCraft === "") {
      return;
    } else {
      return <Generic />;
    }
  }

  return (
    <div className="z-50 min-h-[92vh] flex-row-reverse  flex justify-end w-full sm:w-screen sm:px-0  px-10 sm:flex-col sm:justify-start sm:items-center ">
      <Head>
        <title>Space News | In Space Now</title>
        <meta name="Space News" content="Latest space news and information" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {/* Craft model background */}
      <div className="w-1/2  sm:w-full min-h-[93vh] sm:absolute sm:opacity-20 ">
        <div
          className={` w-full h-full
             transition-all sm:hidden duration-1000   ease-in-out  ${
               currentCraft ? "opacity-100" : "  opacity-0"
             }`}
        >
          <Canvas className="">
            <Suspense fallback={null}>
              <pointLight
                distance={20}
                decay={2}
                intensity={4}
                color={"white"}
                position={[0, 0, 1]}
              />
              <pointLight
                distance={20}
                decay={2}
                intensity={1}
                color={"white"}
                position={[0, 0, -2]}
              />
              <pointLight
                distance={20}
                decay={2}
                intensity={0.5}
                color={"white"}
                position={[-2, -1, 1]}
              />
              {choseModel()}
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="w-1/2 px-2 sm:w-full">
        {/* Heading */}

        {/* Craft list*/}
        <div className="w-full h-full py-12 mb-5 -mt-5 ">
          <CraftList
            craftsArray={craftsArray}
            changeCurrentCraft={changeCurrentCraft}
            currentCraft={currentCraft}
          />
        </div>
      </div>
    </div>
  );
}

export default InSpaceNow;

// Get Whos in space data from API
export const getServerSideProps = async () => {
  const apiResponse = await fetch("http://api.open-notify.org/astros.json");

  const apiJson = await apiResponse.json();

  const { people } = apiJson;

  return {
    props: {
      people,
    },
  };
};
