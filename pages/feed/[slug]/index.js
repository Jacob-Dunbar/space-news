import React from "react";

import NewsItemCard from "../../../components/NewsItemCard.js";
import Link from "next/link";

function feed({ pageNumber, articles }) {
  // generate news card components by mapping over article data fetched from news api
  const newsElements = articles.map((article, index) => (
    <NewsItemCard key={index} pageNumber={pageNumber} article={article} />
  ));

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="grid gap-12 mt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {newsElements}
      </div>

      <div className="flex gap-10 mt-11">
        <Link
          className=" text-slate-100"
          href={
            pageNumber > 1 ? `/feed/${pageNumber - 1}` : `/feed/${pageNumber}`
          }
        >
          previous page
        </Link>

        <p className=" text-slate-100">{pageNumber}</p>

        <Link
          className=" text-slate-100"
          href={
            pageNumber < 5 ? `/feed/${pageNumber + 1}` : `/feed/${pageNumber}`
          }
        >
          Next page
        </Link>
      </div>
    </div>
  );
}

// Fetch data from perigon news API, article in science catagory that mention nasa, spacex or milky way.
export const getServerSideProps = async (pageContext) => {
  // Get page number so it can be used in the fetch request
  const pageNumber = pageContext.query.slug;
  const apiKey = process.env.PERIGON_API_KEY;
  const url = `https://api.goperigon.com/v1/all?title=nasa OR spacex OR milky way OR galaxy&category=Science&sourceGroup=top100&showReprints=true&page=${pageNumber}&size=6&showNumResults=true&apiKey=${apiKey}`;

  const apiResponse = await fetch(url);

  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default feed;
