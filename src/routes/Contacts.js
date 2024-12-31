import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/8.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contacts() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contacts"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contacts;
