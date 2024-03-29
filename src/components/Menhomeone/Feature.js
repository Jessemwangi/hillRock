import React from 'react';
import { Link } from 'react-router-dom';
import feature1 from '../../assets/images/resources/feature-1-1.jpg';
import feature2 from '../../assets/images/resources/feature-1-2.jpg';
import feature3 from '../../assets/images/resources/feature-1-3.jpg';

const features = [
    {
        img: feature1,
        iconClass: 'icon-solution',
        title: 'Recruitement Solutions',
        text: 'Lorem ipsum dolor sit amet sed consectur adipiscing elit.'
    },
    {
        img: feature2,
        iconClass: 'icon-creative-idea',
        title: 'Improved Resources',
        text: 'Lorem ipsum dolor sit amet sed consectur adipiscing elit.'
    },
    {
        img: feature3,
        iconClass: 'icon-mission',
        title: 'Leadership Training',
        text: 'Lorem ipsum dolor sit amet sed consectur adipiscing elit.'
    }
];

function Feature() {
    return (
        <div>
            <section className="feature-one">
                <div className="container">
                    <div className="row gutter-y-30">
                        {features.map((feature, index) => (
                            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${100 * (index + 1)}ms`}>
                                <div className="feature-one__item text-center">
                                    <div className="feature-one__item__img">
                                        <img src={feature.img} alt="hiredots" />
                                    </div>
                                    <div className="feature-one__item__content">
                                        <div className="feature-one__item__ball" />
                                        <div className="feature-one__item__icon">
                                            <span className={feature.iconClass} />
                                        </div>
                                        <h3 className="feature-one__item__title">
                                            {feature.title}
                                        </h3>
                                        <p className="feature-one__item__text">
                                            {feature.text}
                                        </p>
                                        <Link to="/about" className="hiredots-btn">
                                            <span>Find Your Solution</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Feature;
