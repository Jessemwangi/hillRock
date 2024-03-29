import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'
import Test1 from '../../assets/images/resources/testi-2-big.jpg'
import Testimg1 from '../../assets/images/resources/testi-2-1.jpg'
import Testimg2 from '../../assets/images/resources/testi-2-2.jpg'
import Testimg3 from '../../assets/images/resources/testi-2-3.jpg'
import Testimg4 from '../../assets/images/resources/testi-2-4.jpg'

const settings = {
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidestoShow: 1,
                slidestoScroll: 1
            },
        },
    ],
};

const testimonialtwo = {
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidetoshow: 1,
                slidestoScroll: 1
            },
        },
    ],

}

function Testimonialtwo() {
    const initialCounts = {
        Employer: 0,
        Job: 0,
        coustmer: 0,
    };
    const finalCounts = {
        Employer: 697,
        Job: 430,
        coustmer: 800,
    };

    const [counts, setCounts] = useState(initialCounts);

    useEffect(() => {
        const updateCounter = () => {
            const interval = 10;
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
    }, []);

    return (
        <>
            <section className="testimonials-two">
                <div className="testimonials-two__bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="testimonials-two__wrapper">
                                    <div className="sec-title text-left">
                                        <h6 className="sec-title__tagline">Testimonials</h6>
                                        <h3 className="sec-title__title">What They Say?</h3>
                                    </div>
                                    <Slider className='testimonial-slider' {...testimonialtwo} slidestoshow={1} slidestoscroll={1} autoPlay={true} arrows="false">
                                        <div className="item">
                                            <div className="testimonials-two__item">
                                                <div className="testimonials-two__item__author">
                                                    <img src={Test1} alt="hiredots" />
                                                </div>
                                                <div className="testimonials-two__item__quote">
                                                    This is due to their excellent service, competitive pricing
                                                    and customer support. It’s throughly refresing to get such a
                                                    personal touch.
                                                </div>
                                                <div className="testimonials-two__meta">
                                                    <h5 className="testimonials-two__meta__name">
                                                        Christine Eve
                                                    </h5>
                                                    <span className="testimonials-two__meta__dot">.</span>Our
                                                    Customer
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonials-two__item">
                                                <div className="testimonials-two__item__author">
                                                    <img src={Test1} alt="hiredots" />
                                                </div>
                                                <div className="testimonials-two__item__quote">
                                                    This is due to their excellent service, competitive pricing
                                                    and customer support. It’s throughly refresing to get such a
                                                    personal touch.
                                                </div>
                                                <div className="testimonials-two__meta">
                                                    <h5 className="testimonials-two__meta__name">
                                                        Alesha Brown
                                                    </h5>
                                                    <span className="testimonials-two__meta__dot"></span>
                                                    Developer
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonials-two__item">
                                                <div className="testimonials-two__item__author">
                                                    <img src={Test1} alt="hiredots" />
                                                </div>
                                                <div className="testimonials-two__item__quote">
                                                    This is due to their excellent service, competitive pricing and customer support.
                                                    It’s throughly refresing to get such a personal touch.
                                                </div>
                                                <div className="testimonials-two__meta">
                                                    <h5 className="testimonials-two__meta__name">Christine Eve</h5><span className="testimonials-two__meta__dot">.</span>Our Customer
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimonials-two__item">
                                                <div className="testimonials-two__item__author">
                                                    <img src={Test1} alt="hiredots" />
                                                </div>
                                                <div className="testimonials-two__item__quote">
                                                    This is due to their excellent service, competitive pricing
                                                    and customer support. It’s throughly refresing to get such a
                                                    personal touch.
                                                </div>
                                                <div className="testimonials-two__meta">
                                                    <h5 className="testimonials-two__meta__name">
                                                        Christine Eve
                                                    </h5>
                                                    <span className="testimonials-two__meta__dot"></span>Our
                                                    Customer
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                    <ul className='testimonials-two__image' {...settings} arrows="false" slidestoshow={3} slidestoscroll={1} autoPlay={true} dots="false">
                                        <li role="presentation">
                                            <div className="testimonials-two__image__item">
                                                <img src={Testimg1} alt="hiredots" />
                                            </div>
                                        </li>
                                        <li role="presentation">
                                            <div className="testimonials-two__image__item">
                                                <img src={Testimg2} alt="hiredots" />
                                            </div>
                                        </li>
                                        <li role="presentation">
                                            <div className="testimonials-two__image__item">
                                                <img src={Testimg3} alt="hiredots" />
                                            </div>
                                        </li>
                                        <li role="presentation">
                                            <div className="testimonials-two__image__item">
                                                <img src={Testimg4} alt="hiredots" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="funfact-two">
                                    <div className="funfact-two__item">
                                        <div className="funfact-two__icon">
                                            <span className="icon-business-idea" />
                                        </div>
                                        <div className="funfact-two__count count-box">
                                            <span className="count">{counts.Employer}</span>
                                        </div>
                                        <p className="funfact-two__text">Employer Solutions</p>
                                    </div>
                                    <div className="funfact-two__item">
                                        <div className="funfact-two__icon">
                                            <span className="icon-recruit" />
                                        </div>
                                        <div className="funfact-two__count count-box">
                                            <span className="count">{counts.Job}</span>
                                        </div>
                                        <p className="funfact-two__text">People Job Seekers</p>
                                    </div>
                                    <div className="funfact-two__item">
                                        <div className="funfact-two__icon">
                                            <span className="icon-customer-review" />
                                        </div>
                                        <div className="funfact-two__count count-box">
                                            <span className="count">{counts.coustmer}</span>
                                        </div>
                                        <p className="funfact-two__text">Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonialtwo