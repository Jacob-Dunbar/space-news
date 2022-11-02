import React from "react";
import Craft from "../components/Craft.js";

function whos_in_space(props) {
  //take array of people objects and generate array of craft objects
  function generateCrafts(people) {
    // empty array for people not in ISS or Tiangong
    let miscArr = [];

    // potential new craft 1
    let newCraft = { craft: "", name: [] };

    // potential new craft 2
    let newCraft2 = { craft: "", name: [] };

    // Array of 2 objects, one for each space station.
    let craftsArray = [
      { craft: "iss", name: [] },
      { craft: "tiangong", name: [] },
    ];

    // If the person is in ISS push name to craftsArray[0].name aand same for if in Tiangong.
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

    //For each person object in miscArr, check if their craft is new
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

  const peopleInSpace = generateCrafts(props.people);

  // Create component for each craft
  const peopleInSpaceElements = peopleInSpace.map((craft, index) => {
    return (
      <Craft key={index} craftName={craft.craft} peopleOnBoard={craft.name} />
    );
  });

  return <div>{peopleInSpaceElements}</div>;
}

export default whos_in_space;

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

//revise reduce method
//create craft component
//display craft name, and who is on board
