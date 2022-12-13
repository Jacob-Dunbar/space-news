import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import NewsCard from "../../../components/NewsCard.js";
import Link from "next/link";
import Head from "next/head";

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
  // Generate news card components by mapping over article data fetched from news api
  const newsElements = articles.map((article, index) => (
    <NewsCard key={index} pageNumber={pageNumber} article={article} />
  ));

  return (
    <div className="relative flex flex-col items-center justify-between w-full min-h-[93vh] gap-8 pt-8 ">
      <Head>
        <title>Space News | Feed</title>
        <meta name="Space News" content="Latest space news and information" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {/* heading */}
      <div>
        <h1 className="w-1/2 mt-4 mb-8 font-sans text-lg font-thin tracking-widest sm:pl-3 sm:w-11/12 text-slate-200">
          Top stories from around the web:
        </h1>

        {/* News elements list */}
        <div> {newsElements}</div>
      </div>
      {/* Paginator */}
      <div className="z-50 flex items-center gap-10 mt-auto mb-4 ">
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
