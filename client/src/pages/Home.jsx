import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Temples from "../components/Temples";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-background flex flex-col gap-14">
        <Hero />
        <About/>
        <Temples/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
