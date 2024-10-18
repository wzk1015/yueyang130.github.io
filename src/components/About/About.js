import React from "react";
import './About.css';
import { ABOUT_TEXT } from '../../Util/data';

const About = () => {
    return (
        <section id="about">
            <h1>
                <span role="img" aria-label="about">👨‍💻</span>
                {' '}About Me
            </h1>
            <div className="about-content">
                <p dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}></p>
            </div>
        </section>
    );
};

export default About;
