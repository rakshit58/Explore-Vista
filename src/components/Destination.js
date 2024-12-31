import Opera from "../assets/4.jpg";
import Stone from "../assets/6.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>A tour lets you uncover and enjoy many sights within a manageable timeframe.</p>

      <DestinationData
        className="first-des"
        heading="Udaipur, Rajasthan"
        text="Snuggled along the banks of Lake Pichola with a gorgeous backdrop of the Aravalli Hills, Udaipur charms you with its age-hold heritage and culture mirrored in stately palaces, magnificent temples and sparkling lakes"
        img1="https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Udaipur_4_l_800_1200.jpg"
        img2="https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Udaipur_5_l_658_1200.jpg"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Nimrana, Rajasthan"
        text="Known for the famous Neemrana Fort Palace, Neemrana used to be the seat of power of the Chauhan Rajputs. It has recently been developed as a heritage getaway."
        img1="https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Neemrana_tv_destination_img_2_l_641_961.jpg"
        img2="https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Neemrana_tv_destination_img_4_l_1268_1907.jpg"
      />

      <DestinationData
        className="first-des"
        heading="Jaipur, Rajasthan"
        text="Fondly known as the ‘Pink City’ and now declared as a UNESCO World Heritage Site, Jaipur’s historic forts, majestic palaces and ancient temples make it a perfect royal getaway in the heart of Aravallis."
        img1="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Jaipur_tv_destination_img_9_l_667_1000.jpg"
        img2="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Jaipur_tv_destination_img_8_l_594_1000.jpg"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Jodhpur, Rajasthan"
        text="Known for the famous Neemrana Fort Palace, Neemrana used to be the seat of power of the Chauhan Rajputs. It has recently been developed as a heritage getaway."
        img1="https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Jodhpur_destinatoin_tv_image_2_l_900_1350.jpg"
        img2="https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Jodhpur_destinatoin_tv_image_8_l_896_1182.jpg"
      />
    </div>
  );
};

export default Destination;
