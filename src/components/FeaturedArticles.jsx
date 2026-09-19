import ArticleCard from "./ArticleCard";

function FeaturedArticles() {
    const articles = [
        {
            title: "Getting Started with React",
            description: "Learn the basics of React components.",
            rating: 5,
            author: "Sarthak",
            image: "https://sabe.io/tutorials/getting-started-with-react/hero.png"
        },
        {
            title: "Introduction to NodeJS",
            description: "Learn how NodeJS is used for web development.",
            rating: 5,
            author: "Alex",
            image: "https://www.sgstechnologies.net/sites/default/files/2025-03/node_0_1.png"
        },
        {
            title: "Understanding React Hooks",
            description: "Learn how React Hooks work in applications.",
            rating: 5,
            author: "John",
            image: "https://media.licdn.com/dms/image/v2/D4D12AQE1y150xt2zEw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1663925670472?e=2147483647&v=beta&t=seK9okRkK8rH960bDsygzQhmtsJE0PGYfCE2OluNc94"
        }
    ];


    return (
        <section className="featured">
            <h2>Featured Articles</h2>

            <div className="card-container">
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>

            <button>See all articles</button>
        </section>
    );
}

export default FeaturedArticles;