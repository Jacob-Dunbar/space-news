import React from "react";

function article({ articles }) {
  console.log(articles[0].articleId);
  return (
    <div>
      <h1>{articles[0].title}</h1>
    </div>
  );
}

// Fetch article from perigon useing articleID
export const getServerSideProps = async (pageContext) => {
  // Get id from pageContext
  const id = pageContext.query.id;
  const apiKey = process.env.PERIGON_API_KEY;
  const url = `https://api.goperigon.com/v1/all?articleId=${id}&apiKey=${apiKey}`;

  const apiResponse = await fetch(url);

  //Jsonify the promise
  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles,
    },
  };
};

export default article;
