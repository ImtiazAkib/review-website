import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import banner from "./banner.png";
import useReviews from "../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
  const [reviews] = useReviews();
  return (
    <div>
      {/*------ banner section -----------*/}
      <div>
        <div className="banner-content">
          <div className="banner-left">
            <h1>Your Best Movie</h1>
            <p>
              This is a movie review website.Here you can find latest and
              accurate reviews for movies.We add reviews in all kind of movies.
            </p>
            <button>Live Now</button>
          </div>
          <div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
      {/*------ banner section -----------*/}

      {/*------ review section -----------*/}

      <div>
        <div className="review">
          <div>
            <h1>Customer Reviews(3)</h1>
          </div>
          <div className="review-cards">
            {reviews.slice((0, 3)).map((review) => (
              <Review key={review.id} review={review}></Review>
            ))}
          </div>
          <Link to="/reviews">See all reviews</Link>
        </div>
      </div>

      {/*------ review section -----------*/}
    </div>
  );
};

export default Home;
