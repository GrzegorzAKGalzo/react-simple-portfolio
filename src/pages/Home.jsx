import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Showcase from "../components/Showcase";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
