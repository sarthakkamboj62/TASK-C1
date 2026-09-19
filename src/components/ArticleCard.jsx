function ArticleCard({ article }) {
    return (
        <div className="card">

            <img
                src={article.image}
                alt={article.title}
                className="article-image"
            />

            <h3>{article.title}</h3>

            <p>{article.description}</p>

            <p>
                {article.rating} &nbsp; {article.author}
            </p>

        </div>
    );
}

export default ArticleCard;