import React from 'react'
import Slider from 'react-slick'
import Test1 from '../../assets/images/resources/testi-3-1.jpg'
import Test2 from '../../assets/images/resources/testi-3-2.jpg'
import Test3 from '../../assets/images/resources/testi-3-3.jpg'
import Test4 from '../../assets/images/resources/testi-3-4.jpg'
import Icon from '../../assets/images/shapes/testimonial-icon.png'

const TestimonialSlider = {
    items: 5,
    margin: 65,
    smartspeed: 1000,
    loop: true,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                margin: 30,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                margin: 30,
            },
        },
    ],
}

function Testimonialthree() {
    return (
        <>
            <section className="testimonials-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sec-title text-left">
                                <h6 className="sec-title__tagline">Our Testimonials</h6>
                                <h3 className="sec-title__title">
                                    What They’re Talking
                                    <br /> About Agency?
                                </h3>
                            </div>
                            <Slider className='' {...TestimonialSlider} slidesToShow={1} slidesToScroll={1} arrows={false} autoplay={true}>
                                <div className="item">
                                    <div className="testimonials-three__item">
                                        <div className="testimonials-three__ratings">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="testimonials-three__content">
                                            This is due to their excellent service, competitive pricing and
                                            customer support. It’s throughly refresing to get such a
                                            personal touch.
                                        </div>
                                        <div className="testimonials-three__meta">
                                            <h5 className="testimonials-three__meta__name">
                                                Christine Eve
                                            </h5>
                                            <span className="testimonials-three__meta__dot">.</span>Our
                                            Customer
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonials-three__item">
                                        <div className="testimonials-three__ratings">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <div className="testimonials-three__content">
                                            This is due to their excellent service, competitive pricing and
                                            customer support. It’s throughly refresing to get such a
                                            personal touch.
                                        </div>
                                        <div className="testimonials-three__meta">
                                            <h5 className="testimonials-three__meta__name">Alesha Brown</h5>
                                            <span className="testimonials-three__meta__dot">.</span>
                                            Developer
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonials-three__thumbs">
                                <div className="testimonials-three__thumbs__item">
                                    <img src={Test1} alt="hiredots" />
                                </div>
                                <div className="testimonials-three__thumbs__item">
                                    <img src={Test2} alt="hiredots" />
                                </div>
                                <div className="testimonials-three__thumbs__item">
                                    <img src={Test3} alt="hiredots" />
                                </div>
                                <div className="testimonials-three__thumbs__item">
                                    <img src={Test4} alt="hiredots" />
                                </div>
                                <div className="testimonials-three__thumbs__icon">
                                    <img src={Icon} alt="hiredots" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonialthree