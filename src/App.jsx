import Header from "./components/Header";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <FeaturedArticles />
        <FeaturedTutorials />
      </main>
      <Footer />
    </>
  );
}

export default App;