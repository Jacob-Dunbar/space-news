import React from "react";

function NewsItemCard(props) {
  console.log(props.imageUrl);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img src={props.image} />
    </div>
  );
}

export default NewsItemCard;
