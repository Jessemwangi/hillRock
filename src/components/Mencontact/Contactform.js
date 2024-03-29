import React from 'react'
import { Link } from 'react-router-dom'

function Contactform() {
    return (
        <div>
            <section className="contact-one pt-100 pb-100">
                <div className="container">
                    <div className="contact-one__inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-one__content">
                                    <div className="sec-title text-@@textAlign">
                                        <h6 className="sec-title__tagline">Contact us</h6>
                                        <h3 className="sec-title__title">
                                            Feel Free to Get in Touch <br /> with Hiredots
                                        </h3>
                                    </div>
                                    <p className="contact-one__text">
                                        Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des
                                        mauris commodo venenatis ligula commodo leez sed blandit convallis
                                        dignissim onec vel pellentesque neque.
                                    </p>
                                    <ul className="list-unstyled contact-one__info">
                                        <li className="contact-one__info__item">
                                            <div className="contact-one__info__icon">
                                                <i className="icon-phone-call-1" />
                                            </div>
                                            <div className="contact-one__info__content">
                                                <p className="contact-one__info__text">Have Question?</p>
                                                <h4 className="contact-one__info__title">
                                                    Free <Link to="tel:+92(8800)-8960">+23 (000)-9850</Link>
                                                </h4>
                                            </div>
                                        </li>
                                        <li className="contact-one__info__item">
                                            <div className="contact-one__info__icon">
                                                <i className="icon-message" />
                                            </div>
                                            <div className="contact-one__info__content">
                                                <p className="contact-one__info__text">Write Email </p>
                                                <h4 className="contact-one__info__title">
                                                    <Link to="mailto:needhelp@company.com">
                                                        needhelp@company.com
                                                    </Link>
                                                </h4>
                                            </div>
                                        </li>
                                        <li className="contact-one__info__item">
                                            <div className="contact-one__info__icon">
                                                <i className="icon-placeholder" />
                                            </div>
                                            <div className="contact-one__info__content">
                                                <p className="contact-one__info__text">Visit Anytime</p>{" "}
                                                <h4 className="contact-one__info__title">
                                                    <Link to="#">30 broklyn golden street. New York</Link>
                                                </h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-one__left">
                                    <form className="contact-one__form contact-form-validated form-one background-base wow fadeInUp" data-wow-duration="1500ms" action="inc/sendemail.php">
                                        <div className="form-one__group">
                                            <div className="form-one__control form-one__control--full">
                                                <input type="text" name="name" placeholder="Your name" />
                                            </div>
                                            <div className="form-one__control form-one__control--full">
                                                <input type="email" name="email" placeholder="Email address"/>
                                            </div>
                                            <div className="form-one__control form-one__control--full">
                                                <input type="text" name="phone" placeholder="Phone number" />
                                            </div>
                                            <div className="form-one__control form-one__control--full">
                                                <textarea name="message" placeholder="Write  a message" defaultValue={""} />
                                            </div>
                                            <div className="form-one__control form-one__control--full">
                                                <button type="submit" className="hiredots-btn hiredots-btn--white">
                                                    <span>send a message</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contactform