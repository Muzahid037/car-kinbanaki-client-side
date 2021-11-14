import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    return (
        <>

            <Banner />
            <Products />
            <Review />
            <AboutUs />
        </>
    );
};

export default Home;