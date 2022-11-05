import Link from "next/link";

function NewsItemCard({ article, pageNumber }) {
  console.log(article);
  return (
    <div className="pl-4 border-l">
      <div className="h-56 w-80">
        <div className="absolute h-56 w-80 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute h-56 w-80 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <div className="absolute h-56 w-80 bg-gradient-to-l from-black via-transparent to-transparent"></div>
        <div className="absolute h-56 w-80 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <img className="h-56 w-80" src={article.imageUrl} />
      </div>
      <div className="flex items-center h-56 pt-3 w-80">
        <div className="flex flex-col justify-between w-1/2 h-full pr-4 border-r">
          <h1 className="text-lg font-light leading-6 tracking-wide text-slate-200">
            {article.title}
          </h1>
          <div className="flex justify-center w-full mt-3">
            <Link
              className="flex justify-center w-full py-2 text-xs text-slate-100 bg-slate-500"
              href="/feed/[slug]/article/[id]"
              as={`${pageNumber}/article/${article.articleId}`}
            >
              READ MORE
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-1/2 h-full gap-4 pl-4">
          <h1 className="text-3xl font-thin tracking-wider text-slate-100">
            09/22
          </h1>

          <p className="pt-4 text-sm font-thin border-t indent-6 line-clamp-7 text-slate-300">
            {article.summary}
          </p>
        </div>
      </div>

      {/* <p>{article.description}</p> */}
      <button></button>
    </div>
  );
}

export default NewsItemCard;
