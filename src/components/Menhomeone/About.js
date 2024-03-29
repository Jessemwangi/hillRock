import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import About1 from '../../assets/images/resources/about-1-1.jpg'
import Aboutshape1 from '../../assets/images/resources/about-1-shape-1.png'
import Aboutblubimg from '../../assets/images/resources/about-1-bulb.png'
import Aboutauthor from '../../assets/images/resources/about-1-author.jpg'
import Aboutsign from '../../assets/images/resources/about-sign.png'

function About() {
    const initialCounts = {
        count: 0,
    };
    const finalCounts = {
        count: 23,
    };

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
                            <div className="about-one__image wow fadeInLeft" data-wow-delay="300ms">
                                <div className="about-one__image-one">
                                    <img src={About1} alt="hiredots" />
                                    <img className="about-one__image-one__shape" src={Aboutshape1} alt="hiredots" />
                                </div>
                                <div className="about-one__image-icon">
                                    <img src={Aboutblubimg} alt="hiredots" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">about our Service</h6>
                                    <h3 className="sec-title__title">
                                        Reliable &amp; Cost Efficiant <br />
                                        Recruitment Services
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                You’ll have a compliant and productive workplace with best-practice HR
management and policies in place. We’ll work with you to put together a plan and
support you every step of the way. Safety controls.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="about-one__content__list">
                                            <li>
                                                <span className="fa fa-check-circle" />
                                                Payroll Administration
                                            </li>
                                            <li>
                                                <span className="fa fa-check-circle" />
                                                Expert HR outsource services
                                            </li>
                                        </ul>
                                        <div className="about-one__content__quote">
                                        Rely on our professional payroll experts to process your employee’s benefits
including salaries, bonuses and filing statutory deductions.
                                        </div>
                                        <div className="about-one__content__author">
                                            <div className="about-one__content__author__thumb">
                                                <img src={Aboutauthor} alt="hiredots" />
                                            </div>
                                            <div className="about-one__content__author__meta">
                                                <img src={Aboutsign} alt="hiredots" />
                                                Co Founder
                                            </div>
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