import React from 'react';
import { Link } from 'react-router-dom';
import Abtimg1 from '../../assets/images/shapes/about-3-1.png';

function Abtthree() {
    const contentData = [
        {
            imgSrc: Abtimg1,
            imgAlt: 'hiredots',
            title: 'about our agency',
            subTitle: 'Reliable & Cost Efficiant Recruitment Agency',
            text: 'Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor.',
            list: [
                'Suspe ndisse suscipit sagittis leo.',
                'Entum estibulum dignissim posuere.',
                'Lorem Ipsum gene on the tend to repeat.'
            ],
            callText: 'Call to Questions',
            callNumber: '+92 (003) 68-0900',
            discoverLink: '/about'
        }
    ];

    return (
        <>
            <section className="about-three">
                <div className="container">
                    {contentData.map((item, index) => (
                        <div key={index} className="row">
                            <div className="col-lg-6">
                                <div className="about-three__image wow fadeInLeft" data-wow-delay="300ms">
                                    <img src={item.imgSrc} alt={item.imgAlt} />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                                <div className="about-three__content">
                                    <div className="sec-title text-left">
                                        <h6 className="sec-title__tagline">{item.title}</h6>
                                        <h3 className="sec-title__title">{item.subTitle}</h3>
                                    </div>
                                    <p className="about-three__content__text">{item.text}</p>
                                    <ul className="about-three__list">
                                        {item.list.map((listItem, index) => (
                                            <li key={index}>
                                                <span className="fa fa-check-circle" />
                                                {listItem}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <Link className="about-three__call" to="tel:92003680900">
                                                <span className="about-three__call__icon">
                                                    <i className="icon-calling" />
                                                </span>
                                                <span className="about-three__call__text">
                                                    {item.callText}
                                                </span>
                                                <span className="about-three__call__number">
                                                    {item.callNumber}
                                                </span>
                                            </Link>
                                            <Link to={item.discoverLink} className="hiredots-btn hiredots-btn--base">
                                                <span>Discover more</span>
                                            </Link>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="about-three__info-box">
                                                <div className="about-three__info-box__icon">
                                                    <span className="icon-cooperation" />
                                                </div>
                                                <h3 className="about-three__info-box__title">
                                                    Trusted by Clients
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="about-three__border" />
                </div>
            </section>
        </>
    );
}

export default Abtthree;
