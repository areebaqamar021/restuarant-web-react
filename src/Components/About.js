import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id="about">
            <div className="about-text">
                <h1>UPCOMING EVENT</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since </p>
                <button>Read More</button>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
        </div>
    )
}

export default About
