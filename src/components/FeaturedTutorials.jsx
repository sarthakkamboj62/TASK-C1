import TutorialCard from "./TutorialCard";

function FeaturedTutorials() {
    const tutorials = [
  {
    title: "React Tutorial for Beginners",
    description: "Learn how to build your first React application.",
    rating: 5,
    author: "Sarthak",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "JavaScript Tutorial",
    description: "Learn the basics of JavaScript for web development.",
    rating: 5,
    author: "Madhur",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Web Development Tutorial",
    description: "Learn the basic skills needed to create websites.",
    rating: 5,
    author: "Sujal",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  }
    ];

    return (
        <section className="featured">
            <h2>Featured Tutorials</h2>

            <div className="card-container">
                {tutorials.map((tutorial, index) => (
                    <TutorialCard
                        key={index}
                        tutorial={tutorial}
                    />
                ))}
            </div>

            <button>See all tutorials</button>
        </section>
    );
}

export default FeaturedTutorials;