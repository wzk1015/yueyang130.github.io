import React from "react";
import './Container.css';
import Landing from "../Landing/Landing";
import About from "../About/About";
import News from "../News/News";
import Publications from "../Publications/Publications";
import FeaturedPublications from "../FeaturedPublications/FeaturedPublications";
import Services from '../Services/Services';
import Life from '../Life/Life';

const Container = () => {
    return (
        <div className="container">
            <Landing />
            <About />
            <News />
            <FeaturedPublications />
            <Publications />
            <Services />
            <Life />
        </div>
    );
};

export default Container;
