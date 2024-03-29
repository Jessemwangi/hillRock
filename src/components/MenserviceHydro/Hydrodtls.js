import React from 'react'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/images/resources/service-sidebar-d-1.png'
import Serviceimg1 from '../../assets/images/resources/service-d-3.png'
import Servicedtlsimg from '../../assets/images/resources/service-details-p-1.png'

function Hydrodtls() {
    return (
        <>
            <section className="service-details">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-md-12 col-lg-4">
                            <div className="service-sidebar">
                                <div className="service-sidebar__single">
                                    <ul className="list-unstyled service-sidebar__nav">
                                        <li>
                                            <Link to="/service-consulting">HR Consulting</Link>
                                        </li>
                                        <li>
                                            <Link to="/service-resources">Tech Resources</Link>
                                        </li>
                                        <li>
                                            <Link to="/service-hydro">Staffing Solution</Link>
                                        </li>
                                        <li>
                                            <Link to="/service-program">Corporate Program</Link>
                                        </li>
                                        <li>
                                            {" "}
                                            <Link to="/service-training">Leadership Training</Link>
                                        </li>
                                        <li>
                                            <Link to="/service-management">Staff Management</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="service-sidebar__single ">
                                    <div className="service-sidebar__contact background-base" style={{ backgroundImage: `url(${Bgimg})`}}>
                                        <h3 className="service-sidebar__contact__title"> 
                                            Recruitment Solutions for all Businesses
                                        </h3>
                                        <Link className="hiredots-btn" to="/contact">
                                            {" "}
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                                <div className="service-sidebar__single ">
                                    <div className="service-sidebar__download background-primary">
                                        <div className="service-sidebar__download__icon">
                                            <i className="icon-pdf-file" />
                                        </div>
                                        <div className="serice-sidebar__download">
                                            <h3 className="service-sidebar__download__title">
                                                <Link to="#">Project Agreement Form</Link>
                                            </h3>
                                            <p className="service-sidebar__download__number">3.9KB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="service-details__content">
                                <div className="service-details__thumbnail">
                                    <img src={Serviceimg1} alt="Staffing Solution" />
                                </div>
                                <h3 className="service-details__title">Staffing Solution</h3>
                                <p className="service-details__text">
                                    There are many variations of passages of lorem ipsum is simply free
                                    text available in the market, but the majority time you put aside to
                                    be in our office. Lorem ipsum dolor sit amet, consectetLorem ipsum
                                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                </p>
                                <h3 className="service-details__lighlight">
                                    Helping Clients to Solve Recruitments Problems
                                </h3>
                                <p className="service-details__text">
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                                    autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                                    nihil molestiae consequatur.
                                </p>
                                <h3 className="service-details__title">Why Choose?</h3>
                                <div className="list-unstyled service-details__process">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="service-details__process__top item-1">
                                                <h4 className="service-details__process__title">
                                                    Short Term <br />
                                                    Hiring
                                                </h4>
                                                <span className="service-details__process__icon">
                                                    <i className="icon-individual" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="service-details__process__top item-2">
                                                <h4 className="service-details__process__title">
                                                    Last Minute <br />
                                                    Hiring
                                                </h4>
                                                <span className="service-details__process__icon">
                                                    <i className="icon-time-check" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="service-details__process__top item-3">
                                                <h4 className="service-details__process__title">
                                                    Administration <br />
                                                    Rules
                                                </h4>
                                                <span className="service-details__process__icon">
                                                    <i className="icon-report-card" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gutter-y-30 align-items-center">
                                    <div className="col-md-6">
                                        <div className="service-details__image__circle">
                                            <img src={Servicedtlsimg} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="service-details_list-title">Our Benefits</h4>
                                        <p className="service-details_list-text">
                                            Get the Best Digital Marketing from the Pitoon Agency of
                                            Exellence
                                        </p>
                                        <ul className="list-unstyled service-details__list">
                                            <li>
                                                <i className="fas fa-check-circle" /> Cost Effective{" "}
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle" /> Equal Opportunities
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle" /> Creates High Brand
                                                Awareness
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle" /> Higher ROI
                                            </li>
                                        </ul>
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

export default Hydrodtls