import { Link } from "react-router-dom";
import React from "react";
import "../components/PlacesStyles.css";

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <span className="stars">
      {"★".repeat(fullStars)}
      {halfStar && <span className="half-star">★</span>}
      {"☆".repeat(emptyStars)}
    </span>
  );
}

function PlacesData({ image, placeName, review, price, linkTo }) {
  return (
    <Link to={linkTo} className="d-card">
      <div className="d-image">
        <img src={image} alt={placeName} />
      </div>
      <h4>{placeName}</h4>
      <p>{renderStars(parseFloat(review))}</p>
      <p>Price: {price}</p>
    </Link>
  );
}

export default PlacesData;
