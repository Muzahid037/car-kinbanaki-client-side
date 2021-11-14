import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const SingleReview = ({ review }) => {
    const { comment, rating, reviewer } = review;
    return (
        <div>
            <h2>By <span className="text-danger">{reviewer}</span></h2>
            <p>"{comment}"</p>

            <StarRatingComponent
                name="rate2"
                //   editing={false}
                //   renderStarIcon={() => <span></span>}
                starCount={5}
                value={rating}
            />

        </div>
    );
};

export default SingleReview;