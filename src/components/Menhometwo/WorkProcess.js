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
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="work-process-one__item text-center">
                                <div className="work-process-one__item__shape" style={{ backgroundImage:`url(${Bgimg})` }}/>
                                <div className="work-process-one__item__icon-bg" /> 
                                <div className="work-process-one__item__icon">
                                    <span className="icon-investment" />
                                </div>
                                <div className="work-process-one__item__content">
                                    <h4 className="work-process-one__item__title">Consult with Team</h4>
                                    <p className="work-process-one__item__text">
                                        Lorem Ipsum is simply dummy text of the
                                        <br /> new des printng and masn is type.
                                    </p>
                                    <div className="work-process-one__item__number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="work-process-one__item text-center">
                                <div className="work-process-one__item__shape work-process-one__item__shape--md-none" style={{ backgroundImage:`url(${Bgimg1})` }}/>
                                <div className="work-process-one__item__icon-bg" />
                                <div className="work-process-one__item__icon">
                                    <span className="icon-checklist" />
                                </div>
                                <div className="work-process-one__item__content">
                                    <h4 className="work-process-one__item__title">Make a Schedule</h4>
                                    <p className="work-process-one__item__text">
                                        Lorem Ipsum is simply dummy text of the
                                        <br /> new des printng and masn is type.
                                    </p>
                                    <div className="work-process-one__item__number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="work-process-one__item text-center">
                                <div className="work-process-one__item__icon-bg" />
                                <div className="work-process-one__item__icon">
                                    <span className="icon-outsourcing" />
                                </div>
                                <div className="work-process-one__item__content">
                                    <h4 className="work-process-one__item__title">Hire &amp; Enjoy</h4>
                                    <p className="work-process-one__item__text">
                                        Lorem Ipsum is simply dummy text of the
                                        <br /> new des printng and masn is type.
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