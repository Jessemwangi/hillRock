import React from 'react';
import { Link } from 'react-router-dom';
import { features } from '../../data/aboutUs';




function Feature() {
    return (
        <div>
            <section className="feature-one" >
                <div className="container">
                    <div className="row gutter-y-30">
                        {features.map((feature, index) => (
                            <div key={index} className="col-lg-4 col-md-1 wow fadeInUp" data-wow-delay={`${1 * (index + 1)}ms`}>
                                <a href={`${feature.link}`}>
                                <div className="feature-one__item text-center">
                                    {/* <div className="feature-one__item__img">
                                        <img src={feature.img} alt="hiredots" />
                                    </div> */}
                                    <div className="feature-one__item__content">
                                        <div className="feature-one__item__ball" />
                                        <div className="feature-one__item__icon">
                                            <span className={feature.iconClass} />
                                        </div>
                                        <h3 className="feature-one__item__title">
                                            {feature.title}
                                        </h3>
                                        <p className="feature-one__item__text">
                                            
                                            {feature.text}<br/>
                                        </p>
                                        <div className="main-slider-one__btn">
                                        <Link to={feature.link}  style={{color:"white", background:"green"} }>
                                            <span>View more</span>
                                        </Link>
                                            </div>
                                     
                                    </div>
                                </div>
                            </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Feature;
