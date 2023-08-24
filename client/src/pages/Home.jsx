import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-background">
        <Hero />
        <About/>
      </div>
    </>
  );
};

export default Home;
