import { Link } from "react-router-dom";
import "./IHolidayStyles.css"

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

function IHolidayData({image, placeName, review, price, linkTo}) {
    return (
        <Link to={linkTo} className="i-card">
            <div className="i-image">
                <img src={image} alt={placeName} />
                <h4>{placeName}</h4>
                <p>{renderStars(parseFloat(review))}</p>
                <p>Starting at {price} per person</p>
            </div>
        </Link>

    );
}

export default IHolidayData;