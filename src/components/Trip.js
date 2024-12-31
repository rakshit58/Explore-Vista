import "../components/TripStyles.css";
import TripData from "../components/TripData"; // Ensure path is correct.

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Udaipur_4_l_800_1200.jpg"
          heading="Trip to Rajasthan"
          text="Rajasthan is one of the most beautiful tourist destinations in India. Its palaces and forts are major attractions that draw many tourists to the state each year. Behind each palace and fort is a riveting story about its kings, their kingdoms and the colourful culture of Rajasthan. Six of the forts – Chittorgarh Fort, Kumbhalgarh Fort, Ranthambhore Fort, Gagaron Fort, Amber Fort and Jaisalmer Fort – were declared UNESCO World Heritage Sites in 2013."
        />

        <TripData
          image="https://imgs.search.brave.com/K01zpuGP1P8D3MHZlM66NZa43bXgZ-vW1yehIwbkqvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIx/NjYwNTcyL3Bob3Rv/L2JlYWNoLWluLWdv/YS1pbmRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WkRo/WGtXdjVjQnpPc1U1/MlhiTDdFVmd5MFFW/cmlxZHRPQ3JDMW5s/cW1mND0"
          heading="Trip to Goa"
          text="The state of Goa, in India, is famous for its beaches and places of worship. Tourism is its primary industry, and is generally focused on the coastal areas of Goa, with decreased tourist activity inland."
        />

        <TripData
          image="https://imgs.search.brave.com/ysHAoZ44aXqVDzsRLDRL9z04-9BrNnfXQ3S2mVbRvls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgw/Mjg4NzYxL3Bob3Rv/L3NpbmdhcG9yZS1z/a3lsaW5lLWF0LW5p/Z2h0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1yMFFhV0V3/dVdfckdUUlp6dFRt/MjREZW1feGk5UmZH/b2E4d3ZqckFVOVpv/PQ"
          heading="Trip to Singapour"
          text="Singapore is a modern city-state and island nation in Southeast Asia, renowned for its rapid development, cultural diversity, and efficient governance. Its capital, Singapore City, is a global financial hub with a skyline dominated by landmarks like Marina Bay Sands, Gardens by the Bay, and the Merlion statue."
        />
      </div>
    </div>
  );
}

export default Trip;
