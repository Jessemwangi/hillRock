import React from 'react';
import { Link } from 'react-router-dom';

import Service1 from '../../assets/images/services/sv-1.jpg';
import Service2 from '../../assets/images/services/sv-2.jpg';
import Service3 from '../../assets/images/services/sv-3.jpg';
import Service4 from '../../assets/images/services/sv-4.jpg';
import Service5 from '../../assets/images/services/sv-5.jpg';
import Service6 from '../../assets/images/services/sv-6.jpg';

function Servicepage() {
    const services = [
        {
            image: Service1,
            category: "Management",
            icon: "consulting",
            title: "HR Consulting",
            link: "/service-consulting",
            text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod"
        },
        {
            image: Service2,
            category: "Resources",
            icon: "controller",
            title: "Tech Resources",
            link: "/service-resources",
            text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod"
        },
        {
            image: Service3,
            category: "Solution",
            icon: "policy",
            title: "Staffing Solution",
            link: "/service-hydro",
            text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod"
        },
        {
            image: Service4,
            category: "Program",
            icon: "job",
            title: "Corporate Program",
            link: "/service-program",
            text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod"
        },
        {
            image: Service5,
            category: "Training",
            icon: "teaching",
            title: "Leadership Training",
            link: "/service-training",
            text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod"
        },
        {
            image: Service6,
            category: "Management",
            icon: "employment",
            title: "Staff Management",
            link: "/service-management",
            text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod"
        }
    ];

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
