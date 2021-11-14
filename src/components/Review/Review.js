import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import reviewImg from './../../images/feedback.jfif'
const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://protected-wave-67020.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(reviews => {
                setReviews(reviews);
            })
    }, [])
    return (
        <div>
            <h2>Customer Feedback</h2>

            <div className="row d-flex align-items-center ">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    <img className="img-fluid" src={reviewImg} alt="" />
                </div>
                <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                
                    {
                        reviews.map(review => <SingleReview
                            key={review._id}
                            review={review}
                            >

                            </SingleReview>
    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;