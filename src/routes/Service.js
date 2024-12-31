import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/7.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Holiday from "../components/Holiday";
import IHoliday from "../components/IHoliday";


function Service() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Holiday/>
      <IHoliday/>
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
