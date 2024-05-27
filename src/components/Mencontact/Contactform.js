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
                                            Feel Free to Get in Touch <br /> with HillRock
                                        </h3>
                                    </div>
                                    <p className="contact-one__text">
                                    We value your feedback and inquiries! Whether you have questions, suggestions, or need assistance, 
                                    we're here to help. Please use the following information to get in touch with us.
                                    </p>
                                    <ul className="list-unstyled contact-one__info">
                                        <li className="contact-one__info__item">
                                            <div className="contact-one__info__icon">
                                                <i className="icon-phone-call-1" />
                                            </div>
                                            <div className="contact-one__info__content">
                                                <p className="contact-one__info__text">Have Question?</p>
                                                <h4 className="contact-one__info__title">
                                                    Free <Link to="tel:+254712323400">+254 7123 000</Link>
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
                                                    <Link to="mailto:info@hillrockresource.co.ke">
                                                        info@hillrockresource.co.ke
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
                                    <div className="main-footer__bottom__inner">
                            <div className="footer-widget__social">
                                <Link to="https://twitter.com">
                                    <i className="fab fa-twitter" aria-hidden="true" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link to="https://facebook.com">
                                    <i className="fab fa-facebook" aria-hidden="true" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link to="https://pinterest.com">
                                    <i className="fab fa-pinterest-p" aria-hidden="true" />
                                    <span className="sr-only">Pinterest</span>
                                </Link>
                                <Link to="https://instagram.com">
                                    <i className="fab fa-instagram" aria-hidden="true" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                            </div>
                        </div>
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
                <hr></hr>
            </section>
        </div>
    )
}

export default Contactform