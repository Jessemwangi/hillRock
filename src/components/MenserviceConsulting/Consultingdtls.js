import React from 'react'
import Service1 from '../../assets/images/resources/service-d-1.png'
import Servicedtls from '../../assets/images/resources/service-details-p-1.png'
import SideBarMenu from './SideBarMenu'
import { services } from '../../data/services'

function Consultingdtls() {
    return (
        <>
            <section className="service-details">
                <div className="container">
                    <div className="row gutter-y-30">
                        <SideBarMenu/>
                        {/* <div className="col-md-12 col-lg-4">
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
                                    <div className="service-sidebar__contact background-base" style={{ backgroundImage: `url(${Bgimg1})`}}>
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
                        </div> */}
                        <div className="col-md-12 col-lg-8">
                            <div className="service-details__content">
                               
                                <h3 className="service-details__title">Expert Services</h3>
                                <p className="service-details__text">
                                We offer comprehensive HR and consulting services tailored to meet the unique needs of businesses of all sizes. At Hillrock Resource Ltd, 
                                we go beyond traditional HR services by providing access to high-level HR expertise, labor relations management, 
                                increased efficiency, and on-demand support. Our flexible, tailored, and affordable services are designed to nourish and prosper your organization,
                                 ensuring a complete, compliant, and cost-effective HR support system. 
                                Let us empower your business to achieve new heights of success.
                                </p>
                                {services.map((serv) =>
                                <div key={serv.id} id={serv.link.replace('#', '')}>
                                  <h3 className="service-details__lighlight">
                                   {serv.title}
                                </h3>
                                     <div className="service-details__thumbnail">
                                    <img src={Service1} alt="HR Consulting"/>
                                </div>
                                <p className="service-details__text">{serv.desc1}
                                </p>
                                <p className="service-details__text">{serv.desc2}
                                </p>
                               
                                <div>
                                    {serv?.serviceList.map((list,index) =>
                                    <div key={index}>
                                    <h3 className='features-one__list__title' style={{fontSize:'16px'}}>
                                        {index + 1} . {list?.title}
                                    </h3>
                                    <p className="service-details__text" style={{paddingLeft:'17px'}}>
                                        {list?.servDesc}
                                        </p>
                                    </div>
                                    )}
                                </div>
                                <p className="service-details__text">{serv.desc3}
                                </p>
                                <hr/>
                                </div>

                            )}
                              
                             
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
                                            <img src={Servicedtls} alt=""/>
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

export default Consultingdtls