import { Link } from "react-router-dom";
import "./HolidayStyles.css"

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

function HolidayData({image, placeName, review, price, linkTo}) {
    return (
        <Link to={linkTo} className="h-card">
            <div className="h-image">
                <img src={image} alt={placeName} />
                <h4>{placeName}</h4>
                <p>{renderStars(parseFloat(review))}</p>
                <p>Starting at {price} per person</p>
            </div>
        </Link>

    );
}

export default HolidayData;