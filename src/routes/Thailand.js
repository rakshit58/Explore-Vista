import Footer from "../components/Footer";
import Slider from "../components/Slider"; // Ensure this path is correct

function Thailand() {
  const heroImages = [
    "https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Udaipur_4_l_800_1200.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Udaipur_5_l_658_1200.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/DestMainImgLscape/mmt/activities/m_Jaipur_1_l_787_1181.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Neemrana_tv_destination_img_2_l_641_961.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/bharatpurgalleryimgs/mmt/activities/m_Bharatpur_6_l_666_1000.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Mount_Abu_tv_destination_img_2_l_824_1098.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Jodhpur_destinatoin_tv_image_2_l_900_1350.jpg",
    "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Jaisalmer_tv_destination_img_7_l_660_988.jpg",
  ];

  return (
    <>
      <Slider
        images={heroImages}
        cName="hero-mid"
        title="Welcome to Goa"
        btnClass="hide"
        interval={3000}
      />
      <Footer />
    </>
  );
}

export default Thailand;
