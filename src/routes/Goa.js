import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";

function Goa() {
    const sliderImages = [
        "https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_3_l_666_1000.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_4_l_667_1000.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_5_l_663_1000.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/DestMainImgLscape/mmt/activities/m_Goa_5_l_1077_1625.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_6_l_668_1000.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_7_l_662_980.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_8_l_667_1000.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_9_l_667_1000.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Goa_1_l_1414_2121.jpg",
        "https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_2_l_667_1000.jpg"
      ];
    
      const thingsToDo = [
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_Fort%20Aguada_6_l_436_654.jpg",
          place: "Aguada Fort",
          activity: "The fort overlooks the confluence of Mandovi River and the Arabian Sea. This beautiful red-brown fort houses the Central Jail and a 19th century lighthouse."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities-goa-basilica-of-bom-jesus_l_400_640.jpg",
          place: "Basilica of Bom Jesus",
          activity: "It is one of the most important attractions in Goa, housing the mortal remains of the missionary Saint Francis Xavier. The remains are taken out once a decade!"
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities-goa-dudhsagar-waterfalls_l_400_640.jpg",
          place: "Dudhsagar Waterfalls",
          activity: "Located inside the Bhagwan Mahaveer Sanctuary and Mollem National Park, this multi-tiered milky white waterfall gushes down from a height of 310 metres, making it India’s fifth-highest waterfall. It is at its maximum glory just after the rains."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_Baga%20beach_2_l_390_585.jpg",
          place: "Baga beach",
          activity: "One of the most popular beaches in Goa, Baga Beach offers quirky beach-side shacks and a number of thrilling water sports."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities-goa-our-lady-of-the-immaculate-conception-church_l_400_640.jpg",
          place: "Our Lady of Immaculate Conception Church",
          activity: "This church in Panaji is famed for its immaculate white façade and the striking zigzag staircase. Its Portuguese-Baroque and Goan architectural blend makes it one of the most unique churches in Goa."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities-goa-calangute-beach_l_400_640.jpg",
          place: "Calangute Beach",
          activity: "The largest beach in Goa, also known as the “Queen of Beaches”, Calangute is ideal for a laid-back experience as well as for some very exciting water adventures."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities_goa_se_cathedral_l_400_640.jpg",
          place: "Se Cathedral",
          activity: "Located on the banks of River Mondovi, this 16th Century historic church is a UNESCO World Heritage Site dedicated to St. Catherine of Alexandria."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities-goa-chapora-fort_l_400_640.jpg",
          place: "Chapora Fort",
          activity: "Once a site of many battles, the Chapora Fort is a prime tourist spot in Goa. Standing tall on the banks of River Chapora, it features mesmerizing views."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_Anjuna_flea_market_8_l_311_446.jpg",
          place: "Anjuna Flea Market",
          activity: "Open only on Wednesdays, this weekly flea market spread over the Anjuna coast line is dotted with quirky stores where you’ll find pretty much everything under the sun."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_Anjuna%20Beach-4_l_443_590.jpg",
          place: "Anjuna Beach",
          activity: "Cheap water sports, lesser crowds and a calm atmosphere make up Anjuna Beach. It's a good choice for nature lovers. Lined with cafes and yoga centres, Anjuna is known for its weekly flea market."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities_goa_candolim_beach_l_360_640.jpg",
          place: "Candolim Beach",
          activity: "A small beach with lesser crowds, Candolim Beach lies half an hour away from Panjim. There are many options for entertainment as well as a huge variety of options for accommodation."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_Vagator%20Beach-3_l_360_640.jpg",
          place: "Vagator Beach",
          activity: "With a number of restaurants filled with foreigners and Indians, Vagator Beach lies 20km away from Panjim. This is the place where the famed Sunburn Festival takes place annually."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_activities_goa_palolem_beach_l_420_640.jpg",
          place: "Palolem Beach",
          activity: "Known to be one of the most scenic and clean beaches in Goa, Palolem Beach lies in Canacona in southern Goa. It’s a favourite among foreigners."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_Goa_Shri_Shantadurga_Kunkalikarin_Temple_Fatorpa_10_p_600_600.jpg",
          place: "Shri Shantadurga Kunkalikarin Temple, Fatorpa",
          activity: "Located in Fatorpa, this ancient temple is dedicated to Goddess Shantadurga. Known for its striking blend of Goan and traditional Hindu architecture, the temple holds great significance for devotees in South Goa. It's a vibrant centre of spirituality and culture, especially during the annual zatra (temple festival)."
        },
        {
          image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/t_ufs/m_Goa_Shri_Mangueshi_Temple_8_l_590_900.jpg",
          place: "Shri Mangueshi Temple",
          activity: "Shri Mangueshi Temple is one of the most revered Hindu temples in Goa. The temple is famous for its seven-storeyed deepstambha (lamp tower) and elegant architecture. Shri Mangueshi temple is dedicated to Lord Shiva. #EkadashaTeertha #GoaBeyondBeaches"
        },
      ];
    
      const festivals= [
        { name: "Feast of St.Francis Xavier", months: "3rd December" },
        { name: "Goa Carnival", months: "second week of Febraury" },
        { name: "Grape Escapade", months: "January" },
      ];
      const seasonDetails = {
        "Peak Season": {
          title: "Peak Season",
          description: "Pleasant weather, clear skies and cool sea breeze in the mornings and evenings.",
          tips: "Beaches, water sports and nightlife.",
        },
        "Moderate Season": {
          title: "Moderate Season",
          description: "Heavy rainfall throughout the season, pleasant sea breeze. Humidity tends to be high",
          tips: "Lush greenery, stormy sea views and stunning off-season discounts",
        },
        "Off Season": {
          title: "Off Season",
          description: "Very hot weather with high humidity levels",
          tips: "Exploring secluded beaches and architectural gems",
        },
      };
      
    
    
      return (
        <>
          <Hero2
            heroImg="https://hblimg.mmtcdn.com/content/hubble/img/goakolkatadestimages/mmt/activities/m_Goa_9_l_667_1000.jpg"
            sliderImages={sliderImages}
            title="Welcome to Goa"
            text="Goa, located on the western coast of India, is renowned for its stunning beaches, vibrant nightlife, and Portuguese heritage. Known as the 'Party Capital of India,'' Goa also offers water sports, spice plantations, and mouthwatering seafood. Its unique charm lies in its cultural fusion, with festive celebrations like Carnival and Sunburn adding to its appeal."
            thingsToDo={thingsToDo}
            bestTime="NOV-MAR"
            moderateTime="JUL-OCT"
            offTime="APR-JUN"
            seasonDetails={seasonDetails}
            festivals={festivals}
          />
          <Footer />
        </>
      );
}

export default Goa;
