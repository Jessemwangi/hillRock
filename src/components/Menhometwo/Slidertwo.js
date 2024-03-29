import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Bgimg1 from '../../assets/images/backgrounds/slider-2-1.jpg'
import Bgimg2 from '../../assets/images/shapes/slider-2-shape-2.png'
import Bgimg3 from '../../assets/images/shapes/slider-2-shape-1.png'

const HomesliderTwo = {
    loop: true,
    items : 1,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    margin: 0,
}


function Slidertwo() {
    return (
        <>
            <section className="main-slider-two">
                <Slider className='' {...HomesliderTwo} slidesToShow={1} slidesToScroll={1} arrows={false}>
                    <div className="item">
                        <div className="main-slider-two__item">
                            <div className="main-slider-two__bg" style={{ backgroundImage:`url(${Bgimg1})` }}/>
                            <div className="main-slider-two__shape-top" style={{ backgroundImage:`url(${Bgimg2})` }}/>
                            <div className="main-slider-two__shape-bottom" style={{ backgroundImage:`url(${Bgimg3})` }}/>
                            <div className="container">   
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-two__content">
                                            <h5 className="main-slider-two__sub-title">
                                                Reliable Recruitment Agency
                                            </h5>
                                            <h2 className="main-slider-two__title">
                                                Provide Human
                                                <br /> Partner Solution
                                            </h2>
                                            <div className="main-slider-two__btn">
                                                <Link to="/services" className="hiredots-btn">
                                                    <span>Discover More</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="main-slider-two__item">
                            <div className="main-slider-two__bg" style={{ backgroundImage:`url(${Bgimg1})` }}/>
                            <div className="main-slider-two__shape-top" style={{ backgroundImage:`url(${Bgimg2})` }}/>
                            <div className="main-slider-two__shape-bottom" style={{ backgroundImage:`url(${Bgimg3})` }}/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-two__content">
                                            <h5 className="main-slider-two__sub-title">
                                                Reliable Recruitment Agency
                                            </h5>
                                            <h2 className="main-slider-two__title">
                                                Provide Human
                                                <br /> Partner Solution
                                            </h2>
                                            <div className="main-slider-two__btn">
                                                <Link to="/services" className="hiredots-btn">
                                                    <span>Discover More</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="main-slider-two__item">
                            <div className="main-slider-two__bg" style={{ backgroundImage:`url(${Bgimg1})` }}/>
                            <div className="main-slider-two__shape-top" style={{ backgroundImage:`url(${Bgimg2})` }}/>
                            <div className="main-slider-two__shape-bottom" style={{ backgroundImage:`url(${Bgimg3})` }}/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-two__content">
                                            <h5 className="main-slider-two__sub-title">
                                                Reliable Recruitment Agency
                                            </h5>
                                            <h2 className="main-slider-two__title">
                                                Provide Human
                                                <br /> Partner Solution
                                            </h2>
                                            <div className="main-slider-two__btn">
                                                <Link to="/services" className="hiredots-btn">
                                                    <span>Discover More</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default Slidertwo