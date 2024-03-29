import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Bg1 from '../../assets/images/backgrounds/slider-3-1.jpg'
import Bg2 from '../../assets/images/backgrounds/slider-3-2.jpg'
import Slideroverlay from '../../assets/images/shapes/slider-overlay.png'

const SliderThree = {
    loop: true,
    items : 1,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    margin: 0
    
}

function Sliderthree() {
    return (
        <>
            <section className="main-slider-three">
                <Slider className= '' {...SliderThree} slidesToShow={1} slidesToScroll={1} arrows={false} autoplay={true} autoplaySpeed={2000}>
                    <div className="item">
                        <div className="main-slider-three__item">
                            <div className="main-slider-three__bg" style={{ backgroundImage:`url(${Bg1})` }}/>
                            <div className="main-slider-three__overlay" style={{ backgroundImage:`url(${Slideroverlay})` }}/>
                            <div className="main-slider-three__shape" /> 
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-three__content">
                                            <h2 className="main-slider-three__title">
                                                Inspiring Staffing <br />
                                                Solutions
                                            </h2>
                                            <p className="main-slider-three__text">
                                                Solving Recruitment Using Technology
                                            </p>
                                            <div className="main-slider-three__btn">
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
                        <div className="main-slider-three__item">
                            <div className="main-slider-three__bg" style={{ backgroundImage:`url(${Bg2})` }}/>
                            <div className="main-slider-three__overlay" style={{ backgroundImage:`url(${Slideroverlay})` }}/>
                            <div className="main-slider-three__shape" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-three__content">
                                            <h2 className="main-slider-three__title">
                                                Inspiring Staffing <br />
                                                Solutions
                                            </h2>
                                            <p className="main-slider-three__text">
                                                Solving Recruitment Using Technology
                                            </p>
                                            <div className="main-slider-three__btn">
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

export default Sliderthree