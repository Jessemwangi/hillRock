import React from 'react';
import Service1 from '../../assets/images/resources/service-d-1.png'
import Servicedtls from '../../assets/images/history/vision.png'

const HistoryIntro = () => {
    return (
        <>
           
                <div className="container">
                    <div className="col-md-12 col-lg-12">
                            <div className="service-details__content">
                             
                                <h3 className="service-details__lighlight">Establishment</h3>
                                <p className="service-details__text">
                                Hillrock Resource Ltd was established in January 2024 with a vision to become the trusted partner in 
                                HR and business consulting for organizations of all sizes. Our inception was driven by a profound
                                 understanding of the critical role that effective HR management plays in business success. 
                                 From our humble beginnings, we have rapidly grown into a dynamic and innovative company, 
                                dedicated to providing comprehensive, tailored, and affordable HR and consulting services.
                                </p>
                                <h3 className="service-details__lighlight">
                                Community Involvement and Corporate Social Responsibility
                                </h3>
                                <p className="service-details__text">
                                At Hillrock Resource Ltd, we believe in giving back to the community. 
                                We are actively involved in various community initiatives and corporate social responsibility 
                                (CSR) programs. Our team regularly participates in local events, volunteer activities, 
                                and partnerships with non-profit organizations to make a positive impact on society.
                                </p>
                                <h3 className="service-details__title">Success Rules?</h3>
                                <div className="list-unstyled service-details__process">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="service-details__process__top item-1">
                                                <h4 className="service-details__process__title">
                                                    Collaborative <br />
                                                    Involvement
                                                </h4>
                                                <span className="service-details__process__icon">
                                                    <i className="icon-individual" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="service-details__process__top item-2">
                                                <h4 className="service-details__process__title">
                                                    Timely <br />
                                                    Delivery
                                                </h4>
                                                <span className="service-details__process__icon">
                                                    <i className="icon-time-check" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="service-details__process__top item-3">
                                                <h4 className="service-details__process__title">
                                                    Documented <br />
                                                    Transparency
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
                                            <img src={Servicedtls} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="service-details_list-title">Founder Vision</h4>
                                        <p className="service-details_list-text">
                                        Our founder, has always been passionate about helping organizations harness the full potential of their human capital.
                                        </p>
                                        <ul className="list-unstyled service-details__list">
                                            <li>
                                                <i className="fas fa-check-circle" /> Revolutionize HR and Consulting{" "}
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle" /> Empower Businesses
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle" /> Client-Centric Approach
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle" /> Commitment to Excellence
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        </div>
                       
        </>
    );
};

export default HistoryIntro;