import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Slidershape2 from '../../assets/images/shapes/slider-1-shape-2.png'
import Bgimg from '../../assets/images/backgrounds/slider-1-1.jpg'
import Bgimg1 from '../../assets/images/shapes/slider-1-shape-1.png'
import Bgimg2 from '../../assets/images/backgrounds/slider-1-2.jpg'
import Bgimg3 from '../../assets/images/backgrounds/slider-1-3.jpg'

const Homeslider = {
    loop: true,
    items : 1,
    margin: 0,
}

function Sliderone() {
    return (
        <div>
            <section className="main-slider-one">
                <Slider className='' {...Homeslider} slidesToShow={1} slidesToScroll={1} arrows={false}>
                    <div className="item" data-dot="<button>1/</button>">
                        <div className="main-slider-one__item">
                            <div className="main-slider-one__bg" style={{ backgroundImage: `url(${Bgimg})` }}/>
                            <div className="main-slider-one__overlay" />
                            <div className="main-slider-one__shape" style={{ backgroundImage: `url(${Bgimg1})` }}/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">  
                                        <div className="main-slider-one__content">
                                            <div className="main-slider-one__image">
                                                <img src={Slidershape2} alt="hiredots"/>
                                            </div>
                                            <h2 className="main-slider-one__title">
                                                Right
                                                <br /> People for
                                                <br /> the Business
                                            </h2>
                                            <div className="main-slider-one__btn">
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
                    <div className="item" data-dot="<button>2/</button>">
                        <div className="main-slider-one__item">
                            <div className="main-slider-one__bg" style={{ backgroundImage: `url(${Bgimg2})` }}/>
                            <div className="main-slider-one__overlay" />
                            <div className="main-slider-one__shape" style={{ backgroundImage: `url(${Bgimg1})` }}/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-one__content">
                                            <div className="main-slider-one__image">
                                                <img src={Slidershape2} alt="hiredots"/>
                                            </div>
                                            <h2 className="main-slider-one__title">
                                                Right
                                                <br /> People for
                                                <br /> the Business
                                            </h2>
                                            <div className="main-slider-one__btn">
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
                    <div className="item" data-dot="<button>3</button>">
                        <div className="main-slider-one__item">
                            <div className="main-slider-one__bg"style={{ backgroundImage: `url(${Bgimg3})`}}/>
                            <div className="main-slider-one__overlay" /> 
                            <div className="main-slider-one__shape" style={{ backgroundImage: `url(${Bgimg1})` }}/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-one__content">
                                            <div className="main-slider-one__image">
                                                <img src={Slidershape2} alt="hiredots"/>
                                            </div>
                                            <h2 className="main-slider-one__title">
                                                Right
                                                <br /> People for
                                                <br /> the Business
                                            </h2>
                                            <div className="main-slider-one__btn">
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
        </div>
    )
}

export default Sliderone