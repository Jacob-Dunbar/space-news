import React from "react";

function article({ articles }) {
  console.log(articles[0]);

  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };
  const date = new Date(articles[0].addDate).toLocaleDateString(
    "en-GB",
    options
  );
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 mt-12">
      <h1 className="text-2xl text-center text-slate-100">
        {articles[0].title}
      </h1>
      <div className="flex ">
        <h2 className="px-2 text-slate-100">{date}</h2>
        <h2 className="px-2 border-x text-slate-100">
          {articles[0].authorsByline}
        </h2>
        <h2 className="px-2 text-slate-100">{articles[0].source.domain}</h2>
      </div>
      <img className="w-1/3 " src={articles[0].imageUrl} />
      <p className="w-3/4 text-slate-200 indent-8">{articles[0].content}</p>
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
