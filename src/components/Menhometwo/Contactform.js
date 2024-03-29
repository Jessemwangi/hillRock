import React from 'react'
import { Link } from 'react-router-dom'
import Bg1 from '../../assets/images/backgrounds/contact-bg-1.jpg'

function Contactform() {
    return (
        <>
            <section className="contact-two">
                <div
                    className="contact-two__bg"
                    style={{ backgroundImage:`url(${Bg1})` }}
                /> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <form
                                className="contact-two__form contact-form-validated wow fadeInUp"
                                data-wow-duration="1500ms"
                                action="inc/sendemail.php"
                            >
                                <div className="contact-one__form__top">
                                    <div className="sec-title text-@@textAlign">
                                        <h6 className="sec-title__tagline">Contact</h6>
                                        <h3 className="sec-title__title">Write Message</h3>
                                    </div>
                                </div>
                                <div className="form-two__group">
                                    <div className="form-two__control form-two__control--full">
                                        <input type="text" name="name" placeholder="Your name" />
                                    </div>
                                    <div className="form-two__control form-two__control--full">
                                        <input type="email" name="email" placeholder="Email address" />
                                    </div>
                                    <div className="form-two__control form-two__control--full">
                                        <input type="text" name="phone" placeholder="Phone number" />
                                    </div>
                                    <div className="form-two__control form-two__control--full">
                                        <textarea
                                            name="message"
                                            placeholder="Write  a message"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <button type="submit" className="hiredots-btn hiredots-btn--base">
                                        <span>send a message</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-two__info">
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
                                                <Link to="mailto:needhelp@company.com">needhelp@company.com</Link>
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
                                <div className="contact-two__social">
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
                                <h3 className="contact-two__label">Contact us</h3>
                            </div>
                            <div className="contact-two__map hiredots-stretch-element-inside-column">
                                <div className="google-map google-map__contact">
                                    <iframe
                                        title="template google map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                        className="map__contact"
                                        allowFullScreen=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contactform