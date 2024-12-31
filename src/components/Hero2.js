import React, { useState } from "react";
import "./Hero2Styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero2(props) {
  const { sliderImages, thingsToDo, bestTime, moderateTime, offTime, seasonDetails, festivals } = props;

  const [selectedSeason, setSelectedSeason] = useState(""); // State for the selected season

  // Handler to update state when a season is clicked
  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = Math.ceil(festivals.length / 3);

  const handleSlideChange = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
    } else if (direction === "prev") {
      setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
    }
  };


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const getSlideData = (startIndex) => {
    return festivals.slice(startIndex, startIndex + 3);
  };

  return (
    <div className="hero2">
      <div className="hero2-img-container">
        <img src={props.heroImg} alt="Hero2" className="hero2-img" />

        {/* Slider on the left half of the hero image container */}
        <div className="hero2-slider-container">
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="hero2-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="hero2-nav-bar">
        <a href="#things-to-do">Things to Do</a>
        <a href="#best-time-to-visit">Best Time to Visit</a>
        <a href="#book-ticket">Book Ticket</a>
        <a href="#stay">Stay</a>
      </div>

      {/* Things to Do Section */}
      <div className="hero2-container" id="things-to-do">
        <h2>Things to Do</h2>
        <div className="cards">
          {thingsToDo.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.place} />
              <h3>{item.place}</h3>
              <p>{item.activity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Time to Visit Section */}
      <div className="hero2-container" id="best-time-to-visit">
        <h2>Best Time to Visit</h2>
        <div className="bcards">
          {/* Merged BCard Content */}
          <div className="bcard-first">
            <div className="bcard-upper">
              <div className="times">
                <div className="time">
                  <h3>{bestTime}</h3>
                  <p
                    className="point"
                    style={{ color: "#33FF57", cursor: "pointer" }}
                    onClick={() => handleSeasonClick("Peak Season")}
                  >
                    • Peak Season
                  </p>
                </div>
                <div className="time">
                  <h3>{moderateTime}</h3>
                  <p
                    className="point"
                    style={{ color: "#3357FF", cursor: "pointer" }}
                    onClick={() => handleSeasonClick("Moderate Season")}
                  >
                    • Moderate Season
                  </p>
                </div>
                <div className="time">
                  <h3>{offTime}</h3>
                  <p
                    className="point"
                    style={{ color: "#FF5733", cursor: "pointer" }}
                    onClick={() => handleSeasonClick("Off Season")}
                  >
                    • Off Season
                  </p>
                </div>
              </div>
            </div>

            <div className="bcard-lower">
              {selectedSeason ? (
                <div>
                  <h3>{seasonDetails[selectedSeason].title}</h3>
                  <p><strong>What To Expect:</strong> {seasonDetails[selectedSeason].description}</p>
                  <p><strong>Things You'll Love:</strong> {seasonDetails[selectedSeason].tips}</p>
                </div>
              ) : (
                <p>Please select a season to view more information.</p>
              )}
            </div>
          </div>

          <div className="bcard-second">
            <div className="bcard-upper">
              <h3 style={{ textAlign: "left" }}>FESTIVALS AND EVENTS</h3>
              <div className="slide-indicator" style={{ textAlign: "right" }}>
                <span className="current-slide">{currentSlide}</span> /{" "}
                <span className="total-slides">{totalSlides}</span>
                <div className="arrow-buttons">
                  {/* Left Arrow */}
                  <button
                    className="arrow-btn"
                    onClick={() => handleSlideChange("prev")}
                    disabled={currentSlide === 1} // Disable on the first slide
                  >
                    &#8592; {/* Left Arrow */}
                  </button>

                  {/* Right Arrow */}
                  <button
                    className="arrow-btn"
                    onClick={() => handleSlideChange("next")}
                    disabled={currentSlide === totalSlides} // Disable on the last slide
                  >
                    &#8594; {/* Right Arrow */}
                  </button>
                </div>
              </div>
            </div>
            <div className="bcard-lower">
              {getSlideData((currentSlide - 1) * 3).map((festival, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center" }}>
                  <h4 style={{ marginRight: "8px" }}>{festival.name}:</h4>
                  <p>{festival.months}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Book Ticket Section */}
      <div className="hero2-container" id="book-ticket">
        <h2>Book Ticket</h2>
        <p>Details about how to book tickets.</p>
      </div>

      {/* Stay Section */}
      <div className="hero2-container" id="stay">
        <h2>Stay</h2>
        <p>Information about hotels and accommodations.</p>
      </div>
    </div>
  );
}

export default Hero2;
