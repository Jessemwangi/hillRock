import React from 'react'
import Chooseimg1 from '../../assets/images/resources/about-circle-1.png'
import Chooseimg2 from '../../assets/images/resources/about-circle-2.png'
import ChooseShape from '../../assets/images/shapes/about-circle-shape.png'
import hr from '../../assets/images/backgrounds/shape-02.png'

function ServicesLists({allServices, index}) {
    const isImageLeft = index % 2 === 0;
    return (
       
            <div>
                <section className="why-choose-two">
                    <div className="container">
                        <div className="row">
                            {isImageLeft ? (
                                <>
                                    <div className="col-xl-6">
                                        <div className="why-choose-two__image">
                                            <img src={Chooseimg1} alt="" style={{ borderRadius: '50%' }} loading="lazy" />
                                            <img src={Chooseimg2} loading="lazy" className="why-choose-two__image__two hide-on-mobile" alt="" style={{ borderRadius: '50%' }} />
                                            <img src={ChooseShape} loading="lazy" className="why-choose-two__image__shape" alt="" />
                                            <div className="why-choose-two__circle">
                                                <span className="video-popups">
                                                    <i className="icon-talent-search" />
                                                </span>
                                                <div className="curved-circle">
                                                    <div className="curved-circle--item"
                                                        data-circle-text-options='{
                                                            "radius": 92,
                                                            "forceWidth": true,
                                                            "forceHeight": true
                                                        }'>
                                                        <img src={hr} alt="hr" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="why-choose-two__content">
                                            <div className="sec-title text-left">
                                                <h3 className="sec-title__title">
                                                    {allServices.serviceName}
                                                </h3>
                                            </div>
                                            <p className="why-choose-two__text">
                                                {allServices.description}
                                            </p>
                                            <ul className="why-choose-two__feature">
                                                {allServices?.services.map((item) => (
                                                    <li key={item.id}>
                                                        <i className="fas fa-check-circle" />
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-xl-6">
                                        <div className="why-choose-two__content">
                                            <div className="sec-title text-left">
                                                <h3 className="sec-title__title">
                                                    {allServices.serviceName}
                                                </h3>
                                            </div>
                                            <p className="why-choose-two__text">
                                                {allServices.description}
                                            </p>
                                            <ul className="why-choose-two__feature">
                                                {allServices?.services.map((item) => (
                                                    <li key={item.id}>
                                                        <i className="fas fa-check-circle" />
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 right-aligned-image">
                                        <div className="why-choose-two__image">
                                            <img src={Chooseimg1} alt="" style={{ borderRadius: '50%' }} />
                                            <img src={Chooseimg2} className="why-choose-two__image__two hide-on-mobile" alt="" style={{ borderRadius: '50%',right: "-120px",left:'0' }} />
                                            <img src={ChooseShape} className="why-choose-two__image__shape" alt="" />
                                            <div className="why-choose-two__circle">
                                                <span className="video-popups">
                                                    <i className="icon-talent-search" />
                                                </span>
                                                <div className="curved-circle">
                                                    <div className="curved-circle--item"
                                                        data-circle-text-options='{
                                                            "radius": 92,
                                                            "forceWidth": true,
                                                            "forceHeight": true
                                                        }'>
                                                        <img src={hr} alt="hr" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        );
    
}

export default ServicesLists