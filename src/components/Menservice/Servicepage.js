import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';



function Servicepage() {
  

    return (
        <section className="service-one service-one--page">
            <div className="container">
                <div className="row gutter-y-30">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="service-one-card service-card-two" data-wow-duration="1500ms" data-wow-delay={`${index}ms`}>
                                <div className="service-one-card__image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="service-one-card__content">
                                    <div className="service-one-card__icon">
                                        <i className={`icon-${service.icon}`} />
                                        <Link to="/services" className="service-one-card__cat">
                                            {service.category}
                                        </Link>
                                    </div>
                                    <h3 className="service-one-card__title">
                                        <Link to={service.link}>{service.title}</Link>
                                    </h3>
                                    <p className="service-one-card__text">{service.text}</p>
                                </div>
                                <Link to={service.link} className="service-one-card__link">
                                    Read More
                                    <i className="icon-right-arrow" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Servicepage;
