import React from "react";
import useReviews from "../hooks/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useReviews();

  return (
    <div className="reviews">
      {reviews.map((review) => (
        <Review review={review} key={review.id}></Review>
      ))}
    </div>
  );
};

export default Reviews;
