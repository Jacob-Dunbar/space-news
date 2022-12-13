import Link from "next/link";
import Head from "next/head";

// Fetch article from perigon useing articleID
export const getServerSideProps = async (pageContext) => {
  // Get article id from pageContext
  const id = pageContext.query.id;
  const apiKey = process.env.PERIGON_API_KEY;
  const url = `https://api.goperigon.com/v1/all?articleId=${id}&apiKey=${apiKey}`;

  const apiResponse = await fetch(url);

  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles,
    },
  };
};

function article({ articles }) {
  // Options object for toLocaleDateString method to format date
  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };

  // Format date into more user friendly format
  const date = new Date(articles[0].addDate).toLocaleDateString(
    "en-GB",
    options
  );

  return (
    // Container
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 mt-12 sm:mt-5">
      <Head>
        <title>Space News | Article</title>
        <meta name="Space News" content="Latest space news and information" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex flex-col items-center mb-5 px-6 py-2  bg-gradient-to-bl from-black/10 to-white/10 w-[750px] sm:w-[98%] border-2 border-gray-900 bg-opacity-5 backdrop-blur-sm rounded-xl">
        {/* Article title */}
        <h1 className="my-5 text-2xl text-center sm:text-lg text-slate-300">
          {articles[0].title}
        </h1>
        {/* details section with date, author and source */}
        <div className="flex mb-5 sm:mb-8 sm:items-center ">
          <h2 className="px-2 text-slate-300">{date}</h2>
          <h2 className="px-2 sm:px-2 sm:text-center border-x text-slate-300">
            {articles[0].authorsByline}
          </h2>
          {/* Link to source website */}
          <Link
            target="_blank"
            href={articles[0].url}
            className="px-2 text-orange-400 sm:opacity-90 opacity-60 hover:opacity-90 "
          >
            {articles[0].source.domain}
          </Link>
        </div>
        {/* Image */}
        <img className="w-3/4 mb-10 sm:w-full " src={articles[0].imageUrl} />
        {/* Article content */}
        <p className="w-full px-5 mb-10 leading-7 tracking-wide sm:text-sm text-slate-300 indent-8">
          {articles[0].content}
        </p>
      </div>
    </div>
  );
}

export default article;
