import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee, faMapMarkerAlt, faEnvelope, faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons'

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const copy = <FontAwesomeIcon icon={faCopyright} />
console.log("footer")
    return (
        <div className="bg-dark text-white py-5">
            {/* <h2>Footer</h2> */}
            <div className="d-flex justify-content-around align-items-center">

                <div>
                    <SocialIcon className="icons" url="https://twitter.com/jaketrent" />
                    <SocialIcon className="icons" network="facebook" fgColor="#EFF3FF" />
                    <SocialIcon className="icons" network="instagram" fgColor="#EFF3FF" />
                    <SocialIcon className="icons" network="youtube" fgColor="#EFF3FF" />
                </div>

            </div>

            <div className="d-flex justify-content-around my-4 align-items-center">
            <p> <small>Copyright {copy} 2018 Oreo Theme by DoctorLagbe </small> </p>
            </div>

        </div>
    );
};

export default Footer;