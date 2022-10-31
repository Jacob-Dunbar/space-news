import React from "react";
import css from "../../css/feed.module.css";
import { useRouter } from "next/router";

function feed({ pageNumber, articles }) {
  const router = useRouter();

  const headlines = articles.map((article, index) => (
    <div key={index}>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      {article.imageUrl && <img src={article.imageUrl} />}
    </div>
  ));

  return (
    <div>
      {headlines}

      <div className="paginator">
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
          className={pageNumber === 1 ? css.inactive : css.active}
        >
          previous page
        </div>
        <p>{pageNumber}</p>
        <div
          onClick={() => {
            if (pageNumber < 5) {
              router.push(`/feed/${pageNumber + 1}`);
            }
          }}
          className={pageNumber === 1 ? css.inactive : css.active}
        >
          next page
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;
  const apiKey = process.env.PERIGON_API_KEY;
  const url = `https://api.goperigon.com/v1/all?title=nasa OR spacex OR milky way&category=Science&sourceGroup=top100&showReprints=true&page=${pageNumber}&size=5&showNumResults=true&apiKey=${apiKey}`;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

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
