import Link from "next/link";

function NewsItemCard({ article, pageNumber }) {
  console.log(article);
  return (
    <div className="flex items-center gap-2 h-min w-min">
      <div className="w-[1px] h-[465px]  bg-slate-100"></div>
      <div>
        <div className="h-56 w-80">
          <div className="absolute h-56 w-80 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <img className="h-56 w-80" src={article.imageUrl} />
        </div>
        <div className="flex items-center h-56 pt-3 w-80">
          <div className="flex flex-col justify-between w-1/2 h-full px-3">
            <h1 className="text-base text-slate-200">{article.title}</h1>
            <div className="flex justify-center w-full">
              <Link
                className="flex justify-center w-full py-1 text-xs text-slate-100 bg-slate-500"
                href="/feed/[slug]/article/[id]"
                as={`${pageNumber}/article/${article.articleId}`}
              >
                READ MORE
              </Link>
            </div>
          </div>
          <div className="w-[1px] h-full bg-slate-100"></div>
          <div className="flex flex-col w-1/2 h-full gap-3 pt-2 pl-4">
            <h1 className="text-2xl text-slate-100">09/22</h1>
            <div className="w-full self-center h-[1px] bg-slate-100"></div>
            <p className="text-xs indent-6 line-clamp-9 text-slate-100">
              {article.summary}
            </p>
          </div>
        </div>

        {/* <p>{article.description}</p> */}
        <button></button>
      </div>
    </div>
  );
}

export default NewsItemCard;
