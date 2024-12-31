import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import About_us from "../components/About_us";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <About_us />
      <Footer />
    </>
  );
}

export default About;
