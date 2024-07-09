import React from 'react'
import Bgimg from '../../assets/images/shapes/work-process-shape.png'
import Bgimg1 from '../../assets/images/shapes/work-process-shape.png'

function WorkProcess() {
    return (
        <>
            <section className="work-process-one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title text-center">
                                <h6 className="sec-title__tagline">our easy steps</h6>
                                <h3 className="sec-title__title">
                                    See Our Simply Plan &amp; <br />
                                    Working Style
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-y-30">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="50ms">
                            <div className="work-process-one__item text-center">
                                <div className="work-process-one__item__shape" style={{ backgroundImage:`url(${Bgimg})` }}/>
                                <div className="work-process-one__item__icon-bg" /> 
                                <div className="work-process-one__item__icon">
                                    <span className="icon-investment" />
                                </div>
                                <div className="work-process-one__item__content">
                                    <h4 className="work-process-one__item__title">Understanding Your Needs</h4>
                                    <p className="work-process-one__item__text">
                                     We begin with an initial consultation to understand 
                                        <br /> your business, goals, and specific challenges.
                                    </p>
                                    <div className="work-process-one__item__number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="50ms">
                            <div className="work-process-one__item text-center">
                                <div className="work-process-one__item__shape work-process-one__item__shape--md-none" style={{ backgroundImage:`url(${Bgimg1})` }}/>
                                <div className="work-process-one__item__icon-bg" />
                                <div className="work-process-one__item__icon">
                                    <span className="icon-checklist" />
                                </div>
                                <div className="work-process-one__item__content">
                                    <h4 className="work-process-one__item__title">Assessment and Analysis</h4>
                                    <p className="work-process-one__item__text">
                                    Our experts conducts a thorough assessment &   
                                        <br />analysis of the issue to identify the root cause.
                                    </p>
                                    <div className="work-process-one__item__number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="80ms">
                            <div className="work-process-one__item text-center">
                                <div className="work-process-one__item__icon-bg" />
                                <div className="work-process-one__item__icon">
                                    <span className="icon-outsourcing" />
                                </div>
                                <div className="work-process-one__item__content">
                                    <h4 className="work-process-one__item__title">Tailored Solutions</h4>
                                    <p className="work-process-one__item__text">
                                    Design and implement customized solutions tailored to your business needs,
                                        <br /> then continuously monitor, review and evaluation .
                                    </p>
                                    <div className="work-process-one__item__number" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkProcess