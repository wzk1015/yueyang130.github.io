import React from "react";
import './Life.css';
import { LIFE_ACTIVITIES } from '../../Util/data';

const Life = () => {
    return (
        <section id="life">
            <h1>
                <span role="img" aria-label="life">🌟</span>
                {' '}Life
            </h1>
            <div className="life-grid">
                {LIFE_ACTIVITIES.map(activity => (
                    activity.link ? (
                        <a href={activity.link} rel="noopener noreferrer" target="_blank" key={activity.id} className="life-entry">
                            <img src={activity.image} alt={activity.name} className="life-image" />
                            <div className="life-content">
                                <h2>{activity.name}</h2>
                                <p className="life-description">{activity.description}</p>
                            </div>
                        </a>
                    ) : (
                        <div key={activity.id} className="life-entry">
                            <img src={activity.image} alt={activity.name} className="life-image" />
                            <div className="life-content">
                                <h2>{activity.name}</h2>
                                <p className="life-description">{activity.description}</p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};

export default Life;
