import IHolidayData from "./IHolidayData";
import "./IHolidayStyles.css"

function IHoliday() {
     return (
    <div className="iholiday">
    <h1>International Destinations</h1>
    <p>You can discover destination using Google Maps.</p>
    <div className="i-scrollable-content ">
    <IHolidayData
    image="https://imgs.search.brave.com/NHBeoNgVkCmVHN9XXXdQ_owxTyvv60QiqakRBOyv7AM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L2FjZS9zdGFuZGFy/ZC85NzYvY3BzcHJv/ZHBiLzgxQjgvcHJv/ZHVjdGlvbi9fMTI5/ODgwMjMzX2dldHR5/aW1hZ2VzLTQ4MzU4/MjI4My0xLmpwZw"
    placeName="Thailand"
    review="4.6"
    price="₹60,100"
    linkTo="/thailand"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/wwyi9DtrpWOry9wM21PTrFQcITk4PtoZ_HGv0a7K8HM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MzAyMzQzNC9waG90/by9wYXJpcy1za3ls/aW5lLXdpdGgtZWlm/ZmVsLXRvd2VyLWF0/LXN1bnNldC1hZXJp/YWwtdmlldy1mcmFu/Y2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTcyYmNuOFp0/MjlRQ0ZNTW12OEVC/Ynl0a0I1aTV5U0pH/MjNKbTMzUzFMN1E9"
    placeName="Europe"
    review="4.4"
    price="₹1,23,500"
    linkTo="/europe"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/NRz3ClLw2PB8stQDNdozdJaRoMyKIPnRateJ7q09LqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzExLzI4Lzg4/LzM2MF9GXzExMTI4/ODgzM19ZSWgzQnI0/cDNselNsRmpEdXRj/VklqSk1qOUVrV2xL/di5qcGc"
    placeName="Maldives"
    review="4.0"
    price="₹77,000"
    linkTo="/maldives"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/UrjKH9r2DljRmJedJU0JFupbai4xbPgawvyehSWIEDE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kdWJhaS1za3ls/aW5lLWV2ZW5pbmct/YWJvdXQtc3Vuc2V0/XzExNDc3NS0xMzku/anBnP3NlbXQ9YWlz/X2h5YnJpZA"
    placeName="Dubai"
    review="4.6"
    price="₹75,000"
    linkTo="/dubai"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/Hd2MRKYre_sifgCCCmWxnogbng459V2ff90ljL7xQus/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc0LzUzLzQx/LzM2MF9GXzc0NTM0/MTAyXzJsZVBoQTc0/cWVBM2RMVVdNMFZK/c3NmckhxbzhiOWNU/LmpwZw"
    placeName="Vietnam"
    review="4.9"
    price="₹17,000"
    linkTo="/vietnam"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/Z4A6HWqU8E6WwQhWSXJUWaLyl_K-lwr3kmTbdL9m4Vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/ODE1MTY4Mi9waG90/by95b3VuZy1hc2lh/bi13b21hbi12aXNp/dGluZy1iYXR1LWNh/dmVzLWt1YWxhLWx1/bXB1ci1tYWxheXNp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9WVh1M1BNZ2lQ/UUpRazF4NTFST2ZZ/NmxpOGUzTk9vbTlo/VXhRbS1uYjVaRT0"
    placeName="Malaysia"
    review="4.0"
    price="₹95,000"
    linkTo="/malaysia"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/ysHAoZ44aXqVDzsRLDRL9z04-9BrNnfXQ3S2mVbRvls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgw/Mjg4NzYxL3Bob3Rv/L3NpbmdhcG9yZS1z/a3lsaW5lLWF0LW5p/Z2h0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1yMFFhV0V3/dVdfckdUUlp6dFRt/MjREZW1feGk5UmZH/b2E4d3ZqckFVOVpv/PQ"
    placeName="Singapore"
    review="4.2"
    price="₹82,000"
    linkTo="/"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/elrU1stAzQnlFWbAwXd0T58RBisbJq0Kdg8MxJEIiBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzM5LzEyLzM1/LzM2MF9GXzMzOTEy/MzUxN195b0FWRWFw/Y1A3dVRWcVNlZGQw/dVFUVEJlZDNyN3NU/di5qcGc"
    placeName="Bali"
    review="4.5"
    price="₹82,000"
    linkTo="/"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/bg6iqRQiSoIpLTiHwR48hXJzhPA6-BNjmhPYjDhoCG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAw/NDc5OTg3L3Bob3Rv/L3dlc3QtbWFjZG9u/bmVsbC1yYW5nZXMt/bm9ydGhlcm4tdGVy/cml0b3J5LWF1c3Ry/YWxpYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9MEdzMWd4/S1dLYnpuTEctNDU1/VFFyVzRiRXE4NGsy/Y1Y3V3NkOXc0Qlli/UT0"
    placeName="Australia"
    review="4.0"
    price="₹85,000"
    linkTo="/"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/wkq1ctDMB2fgweB-ynEMMIuTseZlzGe9GPdh-dwVHlA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzU4LzU3LzUw/LzM2MF9GXzI1ODU3/NTAyNV9Xdm94alFh/bUludEQ2WkF6YkVS/YVM2cW15WmpRTWhh/ai5qcGc"
    placeName="New Zealand"
    review="4.3"
    price="₹1,10,000"
    linkTo="/"
    />
    <IHolidayData
    image="https://imgs.search.brave.com/OJD6TN4zbmbQ70KXcLY8rf2vWdIwCbrE2cdfRLmSJ0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NiL0hpc3Rvcmlj/YWxfcGVuaW5zdWxh/X2FuZF9tb2Rlcm5f/c2t5bGluZV9vZl9J/c3RhbmJ1bC5qcGc"
    placeName="Turkey"
    review="4.3"
    price="₹1,40,000"
    linkTo="/"
    />
    

    
    </div>
  </div>
);

}

export default IHoliday;