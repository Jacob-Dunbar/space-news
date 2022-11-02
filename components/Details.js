import React from "react";

function Details(props) {
  console.log(props.astronaut);
  return (
    <div>
      <h1>{props.astronaut.results[0].name}</h1>
      <img src={props.astronaut.results[0].profile_image_thumbnail} alt="" />
    </div>
  );
}

export default Details;
