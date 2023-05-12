import React from 'react';
import ReactStars from "react-rating-stars-component";

const StarRating = ({setRating, starRating}) => {
    const ratingChanged = (newRating) => {
        setRating(newRating);
      };

    return (
        <div className=''>
            <ReactStars
                count={5}
                value={starRating ? starRating: 2}
                onChange={ratingChanged}
                size={45}
                activeColor="#ffd700"
                edit={starRating ? false : true}
            />,

        </div>
    );
};

export default StarRating;