import React from 'react'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/images/shapes/pricing-bg-1.jpg'

function Pricing() {
    return (
        <>
            <section
                className="pricing-one"
                style={{ backgroundImage:`url(${Bgimg})` }}
            > 
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Our projects</h6>
                        <h3 className="sec-title__title">
                            Check Our Impressive <br />
                            Pricing &amp; Plans
                        </h3>
                    </div>
                    <div className="row gutter-y-30">
                        <div className="col-md-6 col-lg-4">
                            <div className="pricing-one__item">
                                <div className="pricing-one__inner">
                                    <h3 className="pricing-one__title">
                                        Temprory <br />
                                        Recruitment
                                    </h3>
                                    <div className="pricing-one__icon">
                                        <span className="icon-candidate" />
                                    </div>
                                    <div className="pricing-one__price">
                                        $130
                                        <span className="pricing-one__price__tagline">
                                            per role charges
                                        </span>
                                    </div>
                                    <p className="pricing-one__text">
                                        Average Percentage Fee <br />
                                        10% / Candiadte
                                    </p>
                                    <Link to="/contact" className="hiredots-btn">
                                        <span>Get started</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="pricing-one__item">
                                <div className="pricing-one__inner">
                                    <h3 className="pricing-one__title">
                                        Contract <br />
                                        Recruitment
                                    </h3>
                                    <div className="pricing-one__icon">
                                        <span className="icon-recruitment" />
                                    </div>
                                    <div className="pricing-one__price">
                                        $230
                                        <span className="pricing-one__price__tagline">
                                            per role charges
                                        </span>
                                    </div>
                                    <p className="pricing-one__text">
                                        Average Percentage Fee <br />
                                        10% / Candiadte
                                    </p>
                                    <Link to="/contact" className="hiredots-btn">
                                        <span>Get started</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="pricing-one__item">
                                <div className="pricing-one__inner">
                                    <h3 className="pricing-one__title">
                                        Direct <br />
                                        Recruitment
                                    </h3>
                                    <div className="pricing-one__icon">
                                        <span className="icon-recruitment-two" />
                                    </div>
                                    <div className="pricing-one__price">
                                        $330
                                        <span className="pricing-one__price__tagline">
                                            per role charges
                                        </span>
                                    </div>
                                    <p className="pricing-one__text">
                                        Average Percentage Fee <br />
                                        10% / Candiadte
                                    </p>
                                    <Link to="/contact" className="hiredots-btn">
                                        <span>Get started</span>
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

export default Pricing