import React from 'react';
import { Link } from 'react-router-dom';
import Serviceimg1 from '../../assets/images/services/sv-2-1.jpg';
import Serviceimg2 from '../../assets/images/services/sv-2-2.jpg';
import Serviceimg3 from '../../assets/images/services/sv-2-3.jpg';
import Serviceimg4 from '../../assets/images/services/sv-2-4.jpg';

function ServiceThree() {
    const serviceItems = [
        {
            img: Serviceimg1,
            alt: 'HR Consulting',
            icon: 'icon-consulting',
            title: 'HR Consulting',
            link: '/service-consulting',
            text: 'Fusce pretium simply is esd the eget mattis.'
        },
        {
            img: Serviceimg2,
            alt: 'Tech Resources',
            icon: 'icon-controller',
            title: 'Tech Resources',
            link: '/service-resources',
            text: 'Fusce pretium simply is esd the eget mattis.'
        },
        {
            img: Serviceimg3,
            alt: 'Staffing Solution',
            icon: 'icon-policy',
            title: 'Staffing Solution',
            link: '/service-hydro',
            text: 'Fusce pretium simply is esd the eget mattis.'
        },
        {
            img: Serviceimg4,
            alt: 'Corporate Program',
            icon: 'icon-job',
            title: 'Corporate Program',
            link: '/service-program',
            text: 'Fusce pretium simply is esd the eget mattis.'
        }
    ];

    return (
        <>
            <section className="service-two" style={{ backgroundImage: "url(assets/images/backgrounds/service-bg-1.png)" }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Our Service area</h6>
                        <h3 className="sec-title__title">Outsourced Hiring & Job<br></br> Rules Services</h3>
                    </div>
                    <div className="row gutter-y-30">
                        {serviceItems.map((service, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div className="service-two-card" data-wow-duration="1500ms" data-wow-delay={`${index}ms`}>
                                    <div className="service-two-card__image">
                                        <img src={service.img} alt={service.alt} />
                                    </div>
                                    <div className="service-two-card__content">
                                        <div className="service-two-card__icon">
                                            <i className={service.icon} />
                                        </div>
                                        <h3 className="service-two-card__title"><Link to={service.link}>{service.title}</Link></h3>
                                        <p className="service-two-card__text">{service.text}</p>
                                    </div>
                                    <Link to={service.link} className="service-two-card__link">
                                        Read More
                                        <i className="icon-right-arrow" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServiceThree;
