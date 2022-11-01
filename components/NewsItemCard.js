import Link from "next/link";

function NewsItemCard({ article, pageNumber }) {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <img src={article.imageUrl} />
      <button>
        <Link
          href="/feed/[slug]/article/[id]"
          as={`${pageNumber}/article/${article.articleId}`}
        >
          hello
        </Link>
      </button>
    </div>
  );
}

export default NewsItemCard;
