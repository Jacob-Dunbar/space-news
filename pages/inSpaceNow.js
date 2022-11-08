import { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import CraftList from "../components/CraftList";
import Iss from "../components/IssModel.js";
import Tiangong from "../components/TiangongModel.js";
import Generic from "../components/GenericModel.js";
import Head from "next/head";

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

  // Change current craft function
  function changeCurrentCraft(newCraft) {
    setCurrentCraft(newCraft);
  }

  // Choose model to render Iss / Tiangong / Generic craft
  function choseModel() {
    if (currentCraft === "iss") {
      return <Iss />;
    } else if (currentCraft === "tiangong") {
      return <Tiangong />;
    } else if (currentCraft === "") {
      return;
    } else {
      return <Generic />;
    }
  }

  return (
    <div className="flex justify-end gap-6 pt-8 sm:flex-col sm:justify-start sm:items-center grow">
      <Head>
        <title>Space News | In Space Now</title>
        <meta name="Space News" content="Latest space news and information" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {/* Craft model background */}
      <div className="absolute w-full sm:opacity-20 h-5/6">
        <Canvas>
          <Suspense fallback={null}>
            <pointLight
              distance={20}
              decay={2}
              intensity={4}
              color={"white"}
              position={[0, 0, 1]}
            />
            {choseModel()}
          </Suspense>
        </Canvas>
      </div>

      {/* Heading */}
      <h1 className="text-base tracking-wider sm:w-11/12 sm:pl-3 text-slate-300">
        Currently manned craft in space:
      </h1>
      {/* Craft list*/}
      <div className="w-7/12 h-full ">
        <CraftList
          craftsArray={craftsArray}
          changeCurrentCraft={changeCurrentCraft}
          currentCraft={currentCraft}
        />
      </div>
    </div>
  );
}

export default InSpaceNow;
