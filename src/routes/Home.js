import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Welcome from "../assets/welcome.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://cdn.pixabay.com/photo/2015/12/24/02/09/taj-mahal-1106434_1280.jpg"
        title="Explore Your Destiny"
        text="Discover! Plan! Explore!"
        buttonText="Travel Plan"
        url="/service"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
