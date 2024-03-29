import React from 'react'
import { Link } from 'react-router-dom'
import Team4 from '../../assets/images/team/team-1-4.jpg'
import Team1 from '../../assets/images/team/team-1-1.jpg'
import Team2 from '../../assets/images/team/team-1-2.jpg'
import Team3 from '../../assets/images/team/team-1-3.jpg'

function Team() {
    return (
        <>
            <section className="team-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Professional team</h6>
                        <h3 className="sec-title__title">
                            Meet Our Experienced <br /> People Now
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="team-card__image">
                                    <div className="team-card__image__bg" />
                                    <img src={Team1} alt="Mike Hardson" />
                                    <div className="team-card__hover">
                                        <div className="team-card__social">
                                            <i className="fa fa-share-alt" />
                                            <div className="team-card__social__list">
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
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <Link to="/team-details">Mike Hardson</Link>
                                    </h3>
                                    <p className="team-card__designation">Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                                <div className="team-card__image">
                                    <div className="team-card__image__bg" />
                                    <img src={Team2} alt="aleesha brown" />
                                    <div className="team-card__hover">
                                        <div className="team-card__social">
                                            <i className="fa fa-share-alt" />
                                            <div className="team-card__social__list">
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
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <Link to="/team-details">aleesha brown</Link>
                                    </h3>
                                    <p className="team-card__designation">Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="team-card__image">
                                    <div className="team-card__image__bg" />
                                    <img src={Team3} alt="david cooper" />
                                    <div className="team-card__hover">
                                        <div className="team-card__social">
                                            <i className="fa fa-share-alt" />
                                            <div className="team-card__social__list">
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
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <Link to="/team-details">david cooper</Link>
                                    </h3>
                                    <p className="team-card__designation">Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="team-card__image">
                                    <div className="team-card__image__bg" />
                                    <img src={Team4} alt="david cooper" />
                                    <div className="team-card__hover">
                                        <div className="team-card__social">
                                            <i className="fa fa-share-alt" />
                                            <div className="team-card__social__list">
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
                                <div className="team-card__content">
                                    <h3 className="team-card__title">
                                        <Link to="/team-details">david cooper</Link>
                                    </h3>
                                    <p className="team-card__designation">Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team