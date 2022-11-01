import React from "react";
import css from "../../../css/feed.module.css";

import NewsItemCard from "../../../components/NewsItemCard.js";
import Link from "next/link";

function feed({ pageNumber, articles }) {
  // generate news card components by mapping over article data fetched from news api
  const newsElements = articles.map((article, index) => (
    <NewsItemCard key={index} pageNumber={pageNumber} article={article} />
  ));

  return (
    <div>
      {newsElements}

      <div className="paginator">
        <Link
          href={
            pageNumber > 1 ? `/feed/${pageNumber - 1}` : `/feed/${pageNumber}`
          }
        >
          previous page
        </Link>
        {/* <div
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
          className={pageNumber === 1 ? css.inactive : css.active}
        >
          previous page
        </div> */}
        <p>{pageNumber}</p>

        <Link
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
  const url = `https://api.goperigon.com/v1/all?title=nasa OR spacex OR milky way&category=Science&sourceGroup=top100&showReprints=true&page=${pageNumber}&size=5&showNumResults=true&apiKey=${apiKey}`;

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
