import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner text-white">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-11 col-sm-6 col-md-6 col-lg-4 banner-text ">
                    <h1> <span className="text-danger">POWER &</span> BEAUTY</h1>
                    <h6 className="">Free Library’s $1M auto archives are moving to Philly’s world-famous car  museum and to a Hershey attraction</h6>
                    <button className="btn btn-danger">Discover Today</button>
                </div>
                <div className="col-0 col-sm-4 col-md-4 col-lg-6">
                </div>
            </div>

        </div>
    );
};

export default Banner;