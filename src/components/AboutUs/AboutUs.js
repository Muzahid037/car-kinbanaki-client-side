import React from 'react';
import './AboutUs.css';
import aboutUsBanner from './../../images/banner/photo-1535382651921-5e77ea4458f2.jfif'

const AboutUs = () => {
    return (
        <div className="my-5">
                <h3>About us</h3>
                {/* <img src={aboutUsBanner} alt="" /> */}

                <div className="card mb-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={aboutUsBanner} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8 d-flex justify-content-center align-items-center">
                            <div className="card-body ">
                                <h5 className="card-title">Car-KinbaNaki</h5>
                                <p className="card-text">A car dealership, or vehicle local distribution, is a business that sells new or used cars at the retail level, based on a dealership contract with an automaker or its sales subsidiary. It can also carry a variety of Certified Pre-Owned vehicles. It employs automobile salespeople to sell their automotive vehicles. It may also provide maintenance services for cars, and employ automotive technicians to stock and sell spare automobile parts and process warranty claims. It employs automobile salespeople to sell their automotive vehicles. It may also provide maintenance services for cars, and employ automotive technicians to stock and sell spare automobile parts and process warranty claims.</p>
                                <p className="card-text">
                                    <button className="btn-primary">View More</button>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default AboutUs;