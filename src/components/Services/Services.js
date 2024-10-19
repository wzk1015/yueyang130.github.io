import React from "react";
import './Services.css';
import { SERVICES } from '../../Util/data';

const Services = () => {
    return (
        <section id="services">
            <h1>
                <span role="img" aria-label="services">🎤</span>
                {' '}Services
            </h1>
            <div className="talks-grid">
                {SERVICES.map((service, index) => (
                    <div key={index} className="talk-item">
                        <h2>{service.title}</h2>
                        {service.date && <p className="talk-date">{service.date}</p>}
                        {service.venue && <p className="talk-venue">{service.venue}</p>}
                        {service.description && (
                            <p className="talk-description" dangerouslySetInnerHTML={{ __html: service.description }}></p>
                        )}
                        {service.link && (
                            <a href={service.link} rel="noopener noreferrer" target="_blank" className="service-link">
                                Activity Record
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
