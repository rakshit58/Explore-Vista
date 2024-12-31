import HolidayData from "./HolidayData";
import "./HolidayStyles.css"

function Holiday() {
     return (
    <div className="holiday">
    <h1>Best Destinations</h1>
    <p>You can discover destination using Google Maps.</p>
    <div className="scrollable-content ">
    <HolidayData
    image="https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Udaipur_4_l_800_1200.jpg"
    placeName="Rajasthan"
    review="4.8"
    price="₹6,000"
    linkTo="/rajasthan"
    />
    <HolidayData
    image="https://imgs.search.brave.com/K01zpuGP1P8D3MHZlM66NZa43bXgZ-vW1yehIwbkqvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIx/NjYwNTcyL3Bob3Rv/L2JlYWNoLWluLWdv/YS1pbmRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9WkRo/WGtXdjVjQnpPc1U1/MlhiTDdFVmd5MFFW/cmlxZHRPQ3JDMW5s/cW1mND0"
    placeName="Goa"
    review="4.6"
    price="₹6,000"
    linkTo="/goa"
    />
    <HolidayData
    image="https://imgs.search.brave.com/G2CN7n59_KNd9_jPH88DpI8gJefyp0Uy5l-DvAh2fOY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MTk2MjUzNS9waG90/by9zcmluYWdhci1r/YXNobWlyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz01eTlz/VTdib0EtVEZ5cjdM/QlZ5ZnBtb0tUOUEy/WTdXeEEydHFkSUUw/ekJ3PQ"
    placeName="Kashmir"
    review="5"
    price="₹22,000"
    linkTo="/kashmir"
    />
    <HolidayData
    image="https://imgs.search.brave.com/Okc2dLyMGAjUUGiHEj_a_JrqiBdPFAgGRcg9MONLSDk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcy/OTA5NDQyL3Bob3Rv/L2JhY2t3YXRlcnMt/b2Yta2VyYWxhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1p/YndSaVpKWkdjeEc1/TUxXRlVvd2NYTTlY/SzNuWm5rbGs5Wkgx/UXVzM0M0PQ"
    placeName="Kerala"
    review="4.0"
    price="₹39,000"
    linkTo="/kerala"
    />
    <HolidayData
    image="https://imgs.search.brave.com/wwyi9DtrpWOry9wM21PTrFQcITk4PtoZ_HGv0a7K8HM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MzAyMzQzNC9waG90/by9wYXJpcy1za3ls/aW5lLXdpdGgtZWlm/ZmVsLXRvd2VyLWF0/LXN1bnNldC1hZXJp/YWwtdmlldy1mcmFu/Y2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTcyYmNuOFp0/MjlRQ0ZNTW12OEVC/Ynl0a0I1aTV5U0pH/MjNKbTMzUzFMN1E9"
    placeName="Europe"
    review="4.4"
    price="₹1,23,500"
    linkTo="/europe"
    />
    <HolidayData
    image="https://imgs.search.brave.com/XZhQJ2Ne_xMikMHCYaj_ZmBbYbhW61pk2iOfdyQxVOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzA0LzI2LzU1/LzM2MF9GXzkwNDI2/NTU1Nl9tOFpkd1Ft/T0dObWY3Vk0yYzN0/NjM4Qk82MWxhMnJS/cS5qcGc"
    placeName="Andaman"
    review="4.2"
    price="₹45,000"
    linkTo="/"
    />
    <HolidayData
    image="https://imgs.search.brave.com/NHBeoNgVkCmVHN9XXXdQ_owxTyvv60QiqakRBOyv7AM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L2FjZS9zdGFuZGFy/ZC85NzYvY3BzcHJv/ZHBiLzgxQjgvcHJv/ZHVjdGlvbi9fMTI5/ODgwMjMzX2dldHR5/aW1hZ2VzLTQ4MzU4/MjI4My0xLmpwZw"
    placeName="Thailand"
    review="4.6"
    price="₹60,100"
    linkTo="/thailand"
    />
    <HolidayData
    image="https://imgs.search.brave.com/0w9k31gpSVqcjd3deJevh_AQSKHBHzAhUP-rjcvEh8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzIwLzYzLzA3/LzM2MF9GXzIyMDYz/MDcwOF9UME5uT1ZD/TlVwYnhaUlNiVm4z/cTN1WE1WR1dPcWlZ/QS5qcGc"
    placeName="Himachal"
    review="4.0"
    price="₹8,000"
    linkTo="/"
    />
    <HolidayData
    image="https://imgs.search.brave.com/NRz3ClLw2PB8stQDNdozdJaRoMyKIPnRateJ7q09LqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzExLzI4Lzg4/LzM2MF9GXzExMTI4/ODgzM19ZSWgzQnI0/cDNselNsRmpEdXRj/VklqSk1qOUVrV2xL/di5qcGc"
    placeName="Maldives"
    review="4.0"
    price="₹77,000"
    linkTo="/maldives"
    />
    <HolidayData
    image="https://imgs.search.brave.com/wZp95oiVp06_JniSOBDaoInhg6H7xKYV8T2k2PwZzE8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by9tc2lk/LTQ4MjYyNjA0LHdp/ZHRoLTk2LGhlaWdo/dC02NS5jbXM"
    placeName="Ladakh"
    review="4.2"
    price="₹43,000"
    linkTo="/"
    />
    <HolidayData
    image="https://imgs.search.brave.com/o8O9_IR6tWnaEDNiU-pnT368cTtlMGBM9xYdyJn1dfI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQw/MTE0MTU4L3Bob3Rv/L2JodXRhbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SUdD/amkwdXNFeXp3cHBL/eVhqTVZUWGFwY1U4/WFhESTlYTEtTUWta/NW8wTT0"
    placeName="Bhutan"
    review="4.0"
    linkTo="/"
    />
     <HolidayData
    image="https://imgs.search.brave.com/KWTMrdFb-lTWKCtrbHN8iJuldUBrBdH5hrY8D3IMJ1k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/amljYS5nby5qcC9l/bmdsaXNoL2luZm9y/bWF0aW9uL3RvcGlj/cy8yMDIzL19faWNz/RmlsZXMvYWZpZWxk/ZmlsZS8yMDIzLzEw/LzEyL25vcnRoZWFz/dF9JbmRpYV8xLmpw/Zw"
    placeName="North-East"
    review="4.6"
    price="₹22,000"
    linkTo="/"
    />
     <HolidayData
    image="https://imgs.search.brave.com/bzji5vyfXoon2AAsLtIOWdOUw409YHhr4D7rjEQ4f8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dG91cm15aW5kaWEu/Y29tL2Rlc3RpbmF0/aW9uX2luZGlhL2lt/YWdlL3NvdXRoLWlu/ZGlhLXRlbXBsZS10/b3VyLndlYnA"
    placeName="South India"
    review="4.0"
    price="₹20,000"
    linkTo="/"
    />
    

    
    </div>
  </div>
);

}

export default Holiday;