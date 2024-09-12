import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom'
import About1 from '../../assets/images/resources/about-1-1.jpg'
import Aboutshape1 from '../../assets/images/resources/about-1-shape-1.png'
import Aboutblubimg from '../../assets/images/resources/about-1-bulb.png'

function About() {
    const initialCounts = {
        count: 0,
    };
    const finalCounts = useMemo(() => ({
        count: 23,
      }), []);

    const [counts, setCounts] = useState(initialCounts);

    useEffect(() => {
        const updateCounter = () => {
            const interval = 100;
            const timers = Object.keys(finalCounts).map((key) => {
                const startCount = counts[key];
                const endCount = finalCounts[key];
                const step = Math.ceil((endCount - startCount) / (1000 / interval));

                return setInterval(() => {
                    setCounts((prevCounts) => ({
                        ...prevCounts,
                        [key]: Math.min(prevCounts[key] + step, endCount),
                    }));
                }, interval);
            });
            return () => {
                timers.forEach((timer) => clearInterval(timer));
            };
        };
        updateCounter();
    }, [counts, finalCounts]);

    return (
        <div>
            <section className="about-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-one__image wow fadeInLeft" data-wow-delay="2ms">
                                <div className="about-one__image-one">
                                    <img src={About1} alt="hiredots" />
                                    <img className="about-one__image-one__shape" src={Aboutshape1} alt="hiredots" />
                                </div>
                                <div className="about-one__image-icon">
                                    <img src={Aboutblubimg} alt="hiredots" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="2ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">about our Services</h6>
                                    <h3 className="sec-title__title"> 
                                    Your trusted partner in HR <br />&amp; Management Consulting 
                                        
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                Are you searching for the right HR provider to elevate your business? Look no further than Hillrock Resource Limited.
We offer comprehensive HR and Consulting services tailored to meet the unique needs of businesses of all sizes..
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="about-one__content__list">
                                            <li>
                                                <span className="fa fa-check-circle" />
                                                Expert HR services
                                            </li>
                                            <li>
                                                <span className="fa fa-check-circle" />
                                                Recruitment and placement
                                            </li>
                                        </ul>
                                        <div className="about-one__content__quote">
                                        Transform your business with expert HR and management consultancy, seamlessly integrated with AI for smarter solutions.
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-one__award">
                                            <div className="about-one__award__content">
                                                <div className="about-one__award__icon">
                                                    <i className="icon-trophy" />
                                                </div>
                                                <div className="about-one__award__count count-box">
                                                    +
                                                    <span className="count">{counts.count}</span>
                                                </div>
                                            </div>
                                            <p className="about-one__award__text">Wonderful awards</p>
                                        </div>
                                        <Link to="/about" className="hiredots-btn hiredots-btn--base">
                                            <span>Discover more</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About