import React, { useState, useEffect } from "react";
import "./SliderStyles.css";

function Slider({ images, interval = 3000, cName, title, btnClass }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval); // Cleanup the interval on component unmount
  }, [images, interval]);

  return (
    <div className={cName}>
      <img src={images[currentIndex]} alt="SliderImg" className="Welcome" />
      <div className="hero-overlay"></div> 
      <div className="hero-text">
        <h1>{title}</h1>
        <a href="#" className={btnClass}>
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Slider;
