import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Vdoimg from '../../assets/images/backgrounds/video-bg-1-1.png'

function Cta() {

    const [show, setshow] = useState(false)

    return (
        <>
            <section className="cta-one" style={{ backgroundImage: `url(${Vdoimg})` }} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xl-8 fadeInLeft">
                            <h2 className="cta-one__title">
                            HillRock Trusted Consultant &amp; <br />
                            HR Services
                            </h2>
                        </div>
                        <div className="col-md-4 col-xl-4 text-end fadeInRight"
                           >
                            <Link to="/about" className="hiredots-btn hiredots-btn--base">
                                <span>Discover more</span>
                            </Link>
                        </div>
                    </div>
                    <div className="cta-one__text fadeInUp">
                        <p>We’re Solving Recruitment Problems Using Technology</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-xl-4 fadeInUp">
                            <Link to="#"
                                className="video-popup" onClick={() => setshow(true)}>
                                <i className="fa fa-play"/>
                            </Link>
                        </div>
                        <div className="col-lg-10 col-xl-8 fadeInUp">
                            <div className="cta-one__content">
                                <h3 className="cta-one__content__title">
                                    What sets us ahead!
                                </h3>
                                <div className="cta-one__content__list">
                                    <div className="cta-one__content__list__icon">
                                        <i className="icon-recruitment" />
                                    </div>
                                    <h3 className="cta-one__content__list__title">
                                        Sourcing Best <br />
                                        Resource
                                    </h3>
                                    <p className="cta-one__content__list__info">
                                   Connect you with candidates.
                                        <br /> that align with your business goals
                                    </p>
                                </div>
                                <div className="cta-one__content__list cta-one__content__list--bg">
                                    <div className="cta-one__content__list__icon">
                                        <i className="icon-background-check" />
                                    </div>
                                    <h3 className="cta-one__content__list__title">
                                        Save Your <br />
                                        Time &amp; Money
                                    </h3>
                                    <p className="cta-one__content__list__info">
                                    Rely on our professional payroll experts
                                        <br /> Available 24/7 and are affordable.
                                    </p>
                                </div>
                                <div className="cta-one__content__list">
                                    <div className="cta-one__content__list__icon">
                                        <i className="icon-save-time" />
                                    </div>
                                    <h3 className="cta-one__content__list__title">
                                        Partners in <br />
                                        Team Building
                                    </h3>
                                    <p className="cta-one__content__list__info">
                                    Build better workplaces
                                        <br /> supported by legal frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {show &&
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabIndex={-1} style={{ top: 3867, position: "absolute", height: 333 }}>
                    <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                        <div className="mfp-content" onClick={() => setshow(false)}>
                            <div className="mfp-iframe-scaler">
                                <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setshow(false)}>
                                    ×
                                </button>
                                <iframe className="mfp-iframe" src="//www.youtube.com/embed/h9MbznbxlLc?autoplay=1" frameBorder={0} allowFullScreen="" title='autplay' />
                            </div>
                        </div>
                        <div className="mfp-preloader">Loading...</div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cta