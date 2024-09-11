import React from 'react';
import { Link } from 'react-router-dom';
import Bgimg from '../../assets/images/shapes/service-bg-1.jpg';
import { HashLink as DivLink } from 'react-router-hash-link';
import { services } from '../../data/services';

function Service() {
    return (
        <div>
            <section className="service-one" style={{ backgroundImage: `url(${Bgimg})` }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Our Service area</h6>
                        <h3 className="sec-title__title">
                            Outsourced Hiring &amp; Job <br />
                            Expert Hr Services
                        </h3>
                    </div>
                    <div className="row gutter-y-30">
                        {services?.slice(0,3).map((service, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="service-one-card service-card-two" data-wow-duration="50ms">
                                    <div className="service-one-card__image">
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                    <div className="service-one-card__content">
                                        <div className="service-one-card__icon">
                                            <i className={service.icon} />
                                            <Link to={`/services?cat=${service.category}`} className="service-one-card__cat">
                                                {service.category}
                                            </Link>
                                        </div>
                                        <h3 className="service-one-card__title">
                                        <DivLink to={`/services#${service.link}`} style={{cursor:'pointer'}}>{service.title}</DivLink>
                                            {/* <a href={`/services${service.link}`} style={{cursor:'pointer'}}>{service.title}</a> */}
                                        </h3>
                                        <p className="service-one-card__text">
                                            {service.text}
                                        </p>
                                    </div>
                                    <a href={`/services${service.link}`} className="service-one-card__link">
                                 
                                        Read More
                                        <i className="icon-right-arrow" />
                                       </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Service;
