function TutorialCard({ tutorial }) {
    return (
        <div className="card">
            <img
                src={tutorial.image}
                alt={tutorial.title}
                className="article-image"
            />
            <h3>{tutorial.title}</h3>

            <p>{tutorial.description}</p>

            <p> {tutorial.rating} &nbsp; {tutorial.username}</p>
        </div>
    );
}

export default TutorialCard;