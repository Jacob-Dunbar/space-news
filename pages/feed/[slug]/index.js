import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import NewsItemCard from "../../../components/NewsItemCard.js";
import Link from "next/link";

// Fetch data from perigon news API, article in science catagory that mention nasa, spacex or milky way.
export const getServerSideProps = async (pageContext) => {
  // Get page number so it can be used in the fetch request
  const pageNumber = pageContext.query.slug;
  const apiKey = process.env.PERIGON_API_KEY;
  const url = `https://api.goperigon.com/v1/all?title=nasa OR spacex OR milky way OR galaxy&category=Science&sourceGroup=top100&showReprints=true&page=${pageNumber}&size=5&showNumResults=true&apiKey=${apiKey}`;

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

function feed({ pageNumber, articles }) {
  // generate news card components by mapping over article data fetched from news api
  const newsElements = articles.map((article, index) => (
    <NewsItemCard key={index} pageNumber={pageNumber} article={article} />
  ));

  return (
    <div className="relative flex flex-col items-center justify-start w-full gap-8 pt-8 ">
      <h1 className="w-1/2 text-base tracking-wider sm:pl-3 sm:w-11/12 text-slate-200">
        Most recent stories:
      </h1>
      {newsElements}

      <div className="flex items-center gap-10 mb-11 ">
        <Link
          className="p-2 text-slate-300 hover:text-orange-400 hover:animate-bounceLeft"
          href={
            pageNumber > 1 ? `/feed/${pageNumber - 1}` : `/feed/${pageNumber}`
          }
        >
          <HiOutlineChevronDoubleLeft />
        </Link>

        <p className=" text-slate-100">{pageNumber}</p>

        <Link
          className="p-2 text-slate-300 hover:text-orange-400 hover:animate-bounceLeft"
          href={
            pageNumber < 5 ? `/feed/${pageNumber + 1}` : `/feed/${pageNumber}`
          }
        >
          <HiOutlineChevronDoubleRight />
        </Link>
      </div>
    </div>
  );
}

export default feed;
