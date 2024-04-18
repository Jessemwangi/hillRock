import React from 'react'
import Slider from 'react-slick';
import Test1 from '../../assets/images/shapes/testimonail-share.png'
import Test2 from '../../assets/images/resources/testi-1-1.jpg'
import Test3 from '../../assets/images/resources/testi-1-2.jpg'

const Test = {
    margin: 30,
    loop: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                margin: 30,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                margin: 30,
            },
        },
    ],
}

function Testimonial() {
    return (
        <div>
            <div className="testimonials-one background-gray">
                <div className="testimonials-one__shape">
                    <img src={Test1} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="testimonials-one__sec-title">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">our testimonials</h6>
                                    <h3 className="sec-title__title">
                                        What They’re <br /> Talking About?
                                    </h3>
                                </div>
                                <p className="testimonials-one__text">
                                At Hillrock Resource Ltd, our clients' satisfaction is our top priority. We take pride in delivering high-quality HR and consulting services tailored to
                                 meet the unique needs of each business we partner with. 
                                But don't just take our word for it—here's what our clients have to say about their experience working with us.
                                </p>
                                <div className="testimonials-one__dots" />
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="hiredots-stretch-element-inside-column">
                                <Slider className='testimonials-one' {...Test} slidesToShow={2} slidesToScroll={2} margin={30} arrows={false}>
                                    <div className="item">
                                        <div className="testimonials-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                            <div className="testimonials-card__inner">
                                                <div className="testimonials-card__top">
                                                    <div className="testimonials-card__image">
                                                        <img src={Test2} alt="Kevin martin"/>
                                                    </div>
                                                    <div className="testimonials-card__top__left">
                                                        <div className="testimonials-card__rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <div className="testimonials-card__content">
                                                        "Working with HILLROCK has been a game-changer for our business. 
                                                        Their expertise and dedication have helped us streamline our HR processes and improve employee engagement."
                                                        </div>
                                                        <div className="testimonials-card__author">
                                                            <div className="testimonials-card__icon">
                                                                <i className="icon-quote" />
                                                            </div>
                                                            <div className="testimonials-card__autor__info">
                                                                <h3 className="testimonials-card__name">
                                                                    Hon. Robert James R
                                                                </h3>
                                                                <p className="testimonials-card__designation">
                                                                Senator
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                            <div className="testimonials-card__inner">
                                                <div className="testimonials-card__top">
                                                    <div className="testimonials-card__image">
                                                        <img src={Test3} alt="Sarah albert"/>
                                                    </div>
                                                    <div className="testimonials-card__top__left">
                                                        <div className="testimonials-card__rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <div className="testimonials-card__content">
                                                        "The executive recruitment services provided by HILLROCK exceeded our expectations. 
                                                        They found us the perfect candidate who has made a significant impact on our organization."
                                                        </div>
                                                        <div className="testimonials-card__author">
                                                            <div className="testimonials-card__icon">
                                                                <i className="icon-quote" />
                                                            </div>
                                                            <div className="testimonials-card__autor__info">
                                                                <h3 className="testimonials-card__name">
                                                                   Ms. Sarah Albert
                                                                </h3>
                                                                <p className="testimonials-card__designation">
                                                                    Co Founder
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                            <div className="testimonials-card__inner">
                                                <div className="testimonials-card__top">
                                                    <div className="testimonials-card__image">
                                                        <img src={Test2} alt="Kevin martin" />
                                                    </div>
                                                    <div className="testimonials-card__top__left">
                                                        <div className="testimonials-card__rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <div className="testimonials-card__content">
                                                            Lorem ipsum is simply free text dolor sit amet,
                                                            consectetur adipisicing elit, sed do incididunt ut
                                                            labore et dolore magna aliqua.
                                                        </div>
                                                        <div className="testimonials-card__author">
                                                            <div className="testimonials-card__icon">
                                                                <i className="icon-quote" />
                                                            </div>
                                                            <div className="testimonials-card__autor__info">
                                                                <h3 className="testimonials-card__name">
                                                                    Kevin martin
                                                                </h3>
                                                                <p className="testimonials-card__designation">
                                                                    Market Manager
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                            <div className="testimonials-card__inner">
                                                <div className="testimonials-card__top">
                                                    <div className="testimonials-card__image">
                                                        <img src={Test3} alt="Sarah albert"/>
                                                    </div>
                                                    <div className="testimonials-card__top__left">
                                                        <div className="testimonials-card__rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <div className="testimonials-card__content">
                                                            Lorem ipsum is simply free text dolor sit amet,
                                                            consectetur adipisicing elit, sed do incididunt ut
                                                            labore et dolore magna aliqua.
                                                        </div>
                                                        <div className="testimonials-card__author">
                                                            <div className="testimonials-card__icon">
                                                                <i className="icon-quote" />
                                                            </div>
                                                            <div className="testimonials-card__autor__info">
                                                                <h3 className="testimonials-card__name">
                                                                    Sarah albert
                                                                </h3>
                                                                <p className="testimonials-card__designation">
                                                                    Co Founder
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                            <div className="testimonials-card__inner">
                                                <div className="testimonials-card__top">
                                                    <div className="testimonials-card__image">
                                                        <img src={Test2} alt="Kevin martin" />
                                                    </div>
                                                    <div className="testimonials-card__top__left">
                                                        <div className="testimonials-card__rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <div className="testimonials-card__content">
                                                            Lorem ipsum is simply free text dolor sit amet,
                                                            consectetur adipisicing elit, sed do incididunt ut
                                                            labore et dolore magna aliqua.
                                                        </div>
                                                        <div className="testimonials-card__author">
                                                            <div className="testimonials-card__icon">
                                                                <i className="icon-quote" />
                                                            </div>
                                                            <div className="testimonials-card__autor__info">
                                                                <h3 className="testimonials-card__name">
                                                                    Kevin martin
                                                                </h3>
                                                                <p className="testimonials-card__designation">
                                                                    Market Manager
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonials-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                            <div className="testimonials-card__inner">
                                                <div className="testimonials-card__top">
                                                    <div className="testimonials-card__image">
                                                        <img src={Test3} alt="Sarah albert" />
                                                    </div>
                                                    <div className="testimonials-card__top__left">
                                                        <div className="testimonials-card__rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <div className="testimonials-card__content">
                                                            Lorem ipsum is simply free text dolor sit amet,
                                                            consectetur adipisicing elit, sed do incididunt ut
                                                            labore et dolore magna aliqua.
                                                        </div>
                                                        <div className="testimonials-card__author">
                                                            <div className="testimonials-card__icon">
                                                                <i className="icon-quote" />
                                                            </div>
                                                            <div className="testimonials-card__autor__info">
                                                                <h3 className="testimonials-card__name">
                                                                    Sarah albert
                                                                </h3>
                                                                <p className="testimonials-card__designation">
                                                                    Co Founder
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial