import React from 'react'
import { Link } from 'react-router-dom'
import Abtimg1 from '../../assets/images/resources/about-2-1.jpg'
import Abtimg2 from '../../assets/images/resources/about-2-2.jpg'
import Abtimg3 from '../../assets/images/resources/about-1-bulb.png'
import Abtshape from '../../assets/images/resources/about-1-shape-1.png'
import Abtauthor from '../../assets/images/resources/about-1-author.jpg'
import Abtsignin from '../../assets/images/resources/about-sign.png'

function Abttwo() {
    return (
        <>
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two__image wow fadeInLeft" data-wow-delay="300ms">
                                <div className="about-two__image-one">
                                    <img src={Abtimg1} alt="hiredots" />
                                </div>
                                <div className="about-two__image-two">
                                    <img src={Abtimg2} alt="hiredots" />
                                    <div className="about-two__image-icon">
                                        <img src={Abtimg3} alt="hiredots"/>
                                    </div>
                                </div>
                                <img className="about-two__image__shape" src={Abtshape} alt="hiredots"/>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-two__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">about our agency</h6>
                                    <h3 className="sec-title__title">
                                        Ready to Hire your Next Candidate
                                    </h3>
                                </div>
                                <p className="about-two__content__text">
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                                    tempor incididunt labore dolore magna aliquaenim ad minim. Sed risus
                                    augue, commodo ornare felis non.
                                </p>
                                <div className="about-two__content__info">
                                    <ul className="about-two__content__list">
                                        <li>
                                            <span className="fa fa-check-circle" />
                                            Hiring Employeers
                                        </li>
                                        <li>
                                            <span className="fa fa-check-circle" />
                                            Cost Efficiant
                                        </li>
                                        <li>
                                            <span className="fa fa-check-circle" />
                                            Outsourced Consulting
                                        </li>
                                        <li>
                                            <span className="fa fa-check-circle" />
                                            Leadership Training
                                        </li>
                                    </ul>
                                    <div className="clearfix" />
                                    <h5 className="about-two__content__title">
                                        <span className="icon-creative-idea" />
                                        Welcome to Professional Recruitment Agency
                                    </h5>
                                </div>
                                <div className="about-two__content__author-wrapper">
                                    <div className="about-one__content__author">
                                        <div className="about-one__content__author__thumb">
                                            <img src={Abtauthor} alt="hiredots"/>
                                        </div>
                                        <div className="about-one__content__author__meta">
                                            <img src={Abtsignin} alt="hiredots"/>
                                            Co Founder
                                        </div>
                                    </div>
                                    <Link to="/about" className="hiredots-btn hiredots-btn--base">
                                        <span>Discover more</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Abttwo