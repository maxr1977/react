import React, { useState } from "react";
import '../styles/Rating.css'

const ratingList = [
  "https://www.clker.com/cliparts/d/f/2/d/1194984980941885933zero_stars_saurabh_nanda_01.svg.med.png",
  "https://www.clker.com/cliparts/Y/H/Q/J/d/b/2-star-rating-md.png",
  "https://www.clker.com/cliparts/5/d/5/U/j/u/3-star-rating-md.png",
  "https://www.clker.com/cliparts/Y/4/q/J/4/z/four-star-rating-md.png",
  "https://www.clker.com/cliparts/w/6/z/y/b/5/starswhite5-md.png",
];

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);
  return (
    <div className="rating-container">
      <h2>Выберите рейтинг:</h2>
      <img
        src={ratingList[ratingValue]}
        alt="Rating"
        className="rating-image"
      />
      <div className="rating-buttons">
        <button onClick={() => setRatingValue(1)}>Плохо</button>
        <button onClick={() => setRatingValue(2)}>Приемлемо</button>
        <button onClick={() => setRatingValue(3)}>Хорошо</button>
        <button onClick={() => setRatingValue(4)}>Отлично</button>
      </div>
    </div>
  );
};

export default Rating;
