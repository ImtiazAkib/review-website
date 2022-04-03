import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, description, rating } = props.review;
  return (
    <div>
      <div className="review-card">
        <h1>{name}</h1>
        <p>{description}</p>
        <p>Rating: {rating} out of 10</p>
      </div>
    </div>
  );
};

export default Review;
