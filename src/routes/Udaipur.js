import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";

function Udaipur() {
  const sliderImages = [
    "https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Udaipur_4_l_800_1200.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Udaipur_5_l_658_1200.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/destination/m_destination-udaipur-landscape_l_400_640.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/destination/m_Udaipur_activity_heritage%20and%20culture_l_350_525.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/activities/t_ufs/m_activities-udaipur-saheliyon-ki-bari_l_400_640.jpg"
  ];

  const thingsToDo = [
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/activities/t_ufs/m_activities-udaipur-city-palace_l_400_640.jpg",
      place: "City Palace",
      activity: "The City Palace, perched atop a hill overlooking the lake, is a stunning blend of courtyards, pavilions, terraces, corridors, rooms, and hanging gardens. Enclosed by fortified walls, the main entrance is through the triple-arched Tripolia gate, featuring eight marble porticos. The palace is currently home to two luxurious hotels, a school and the popular City Palace Museum."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/activities/t_ufs/m_activities-udaipur-saheliyon-ki-bari_l_400_640.jpg",
      place: "Saheliyon Ki Bari",
      activity: "Also known as the 'Garden of Friends', this lush green oasis was constructed as a retreat where the queen could unwind with her ladies. It features intricate marble arches and delightful fountains."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/activities/t_ufs/m_activities-udaipur-lake-pichola_l_400_640.jpg",
      place: "Lake Pichola",
      activity: "Surrounded by majestic temples and palaces in the heart of the city, the captivating vistas that this enchanting man-made lake offers are a sight to behold!"
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/rjtourism/mmt/activities/t_ufs/m_Rajasthantourism_FatehSagarLake_l_495_960.jpg",
      place: "Fateh Sagar Lake",
      activity: "Nestled in the hills and situated in the north of Lake Pichola, Fateh Sagar Lake is a charming artificial lake linked by a canal. The serene waters are home to three small islands, with one island housing the Udaipur Solar Observatory."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/activities/t_ufs/m_activities-udaipur-jag-mandir-palace_l_400_640.jpg",
      place: "Jag Mandir Palace",
      activity: "Also known as 'Lake Garden Palace', this floating marvel will take your breath away with its magnificent architecture and gorgeous setting in the middle of the Lake Pichola."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/t_ufs/m_Bada_Mahal_Udaipur_1_l_479_640.jpg",
      place: "Crystal Gallery Udaipur",
      activity: "Crystal Gallery, located in Udaipur's Fateh Prakash Palace, showcases an exquisite collection of crystal artifacts, making it a must-visit destination for art and history enthusiasts."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/activities/t_ufs/m_activities_city_palace_museum_4_l_294_495.jpg",
      place: "Udaipur City Palace Museum",
      activity: "The City Palace Museum in Udaipur is a museum known for its rare and remarkable collections of ancient silver, palanquins, paintings, sculptures, and antiques. The museum is housed within the iconic City Palace, a 450-year-old palace which once served as an abode for the rulers of Mewar."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/activities/t_ufs/m_activities_Udaipur_Sajjangarh%20wildlife%20santuary_l_400_640.jpg",
      place: "Sajjangarh Wildlife Sanctuary",
      activity: "Surrounding the magnificent Sajjangarh Palace, this former royal shooting preserve houses a man-made lake named the Tiger Lake which serves as a scenic picnic spot."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/activities/t_ufs/m_activities-udaipur-moti-magri_l_400_640.jpg",
      place: "Moti Magri",
      activity: "Also known as 'The Pearl Hill', the statue of Maharana Pratap riding his horse is a spellbinding sight here. Offering majestic views of Fateh Sagar Lake, it also houses a museum and a Japanese rock garden."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/udaipur/mmt/activities/t_ufs/m_activities_Udaipur_vintage%20car%20museum_l_400_640.jpg",
      place: "Vintage Car Museum Udaipur",
      activity: "Discover the Vintage Car Museum in Udaipur, a treasure trove of classic automobiles that showcases the royal heritage of the city. Immerse yourself in the fascinating history of these elegant vehicles, once owned by the Maharajas of Udaipur."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/t_ufs/m_Udaipur%20Gulab%20Bagh%20And%20Zoo_1_l_419_640.jpg",
      place: "Gulab Bagh Zoo",
      activity: "Gulab Bagh Zoo is located in the Gulab Bagh –a pretty place laden with roses! The little park has an interesting thing to do for people of all ages! There’s a toy train that for open to kids and adults. Explore an artificial water body called Kamal Talai which adds to the beauty of the place along with Navlakha Mahal."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/rjtourism/mmt/activities/t_ufs/m_Rajasthantourism_Jaisamand_Lake_l_463_880.jpg",
      place: "Jaisamand Lake",
      activity: "Jaisamand Lake, also known as Dhebar Lake, is seated 50 km from Udaipur. It is a picturesque artificial lake. Built-in the 17th century, it is one of the largest artificial lakes in Asia and spans over an area of approximately 87 square kilometres."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/t_ufs/m_Mansapurna_Karni_Ropeway_Udaipur_1_l_428_640.JPG",
      place: "Mansapurna Karni Ropeway",
      activity: "The Mansapurna Karni Ropeway is a popular tourist attraction and transportation system located in Udaipur, Rajasthan, India. It offers visitors a unique opportunity to enjoy panoramic views of Udaipur's stunning landscapes while providing convenient transportation to the Karni Mata Temple situated on top of Machla Magra Hill."
    },
    {
      image: "https://hblimg.mmtcdn.com/content/hubble/img/additionalttdimages/mmt/activities/t_ufs/m_Ambrai_Ghat_Udaipur_1_l_480_640.jpg",
      place: "Ambrai Ghat",
      activity: "Ambrai Ghat is a popular tourist spot located on the eastern banks of Lake Pichola in Udaipur, Rajasthan, India. The ghat offers stunning panoramic views of the lake, with the City Palace and Jag Mandir Island serving as magnificent backdrop. It is known for its serene atmosphere."
    },
  ];

  const festivals= [
    { name: "Panchmi", months: "March-April" },
    { name: "Diwali", months: "October-November" },
    { name: "Holi", months: "March" },
    { name: "Navratri", months: "September-October" },
  ];
  const seasonDetails = {
    "Peak Season": {
      title: "Peak Season",
      description: "Pleasant and comfortable weather with sunny days and cold nights.",
      tips: "Exploring the beautiful palaces, temples, sun-kissed gardens and boat rides across the lakes.",
    },
    "Moderate Season": {
      title: "Moderate Season",
      description: "Pleasantly warm temperatures, along with unexpected rainfalls.",
      tips: "Sightseeing and shopping.",
    },
    "Off Season": {
      title: "Off Season",
      description: "Scorching heat and heat waves. In peak summer months, the daytime temperature can shoot up to 40-45C.",
      tips: "Escaping the crowds and heavy off-season discounts.",
    },
  };
  


  return (
    <>
      <Navbar />
      <Hero2
        heroImg="https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_udaipur_destjulimg_4_l_862_1294.jpg"
        sliderImages={sliderImages}
        title="Welcome to Udaipur"
        text="Discover the City of Lakes. 
        Snuggled along the banks of Lake Pichola with a gorgeous backdrop of the Aravalli Hills, Udaipur charms you with its age-hold heritage and culture mirrored in stately palaces, magnificent temples and sparkling lakes."
        url="/explore"
        btnClass="btn-primary"
        buttonText="Learn More"
        thingsToDo={thingsToDo}
        bestTime="OCT-MAR"
        moderateTime="JUL-SEP"
        offTime="APR-JUN"
        seasonDetails={seasonDetails}
        festivals={festivals}
      />
      <Footer />
    </>
  );
}

export default Udaipur;
