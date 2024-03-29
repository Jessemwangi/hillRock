import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Bgimg1 from '../../assets/images/backgrounds/project-bg-1.jpg'
import Projectimg from '../../assets/images/project/project-2-1.jpg'
import Projectimg2 from '../../assets/images/project/project-2-2.jpg'

function Projecttwo() {

    const [tabMenu, tabActive] = useState({ a: true });

    return (
        <>
            <div className="project-two" style={{ backgroundImage: `url(${Bgimg1})` }}>
                <div className="container">
                    <div className="row tabs-box">
                        <div className="col-lg-4">
                            <div className="project-two__left-content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">Our projects</h6>
                                    <h3 className="sec-title__title">Recent Closed Projects</h3>
                                </div>
                                <ul className="nav list-unstyled tab-buttons project-two__list" id="myTab" role="tablist">
                                    <li
                                        data-tab="#staffing_solution" className={`nav-link  ${tabMenu.a && "active"}`} onClick={() => tabActive({ a: true })}>
                                        Staffing Solution
                                    </li>
                                    <li data-tab="#scale_up_business" className={`nav-link  ${tabMenu.b && "active"}`} onClick={() => tabActive({ b: true })}>
                                        Scale-Up Business
                                    </li>
                                    <li data-tab="#resume_management" className={`nav-link  ${tabMenu.c && "active"}`} onClick={() => tabActive({ c: true })}>
                                        Resume Management
                                    </li>
                                    <li data-tab="#employee_on_boarding" className={`nav-link  ${tabMenu.d && "active"}`} onClick={() => tabActive({ d: true })}>
                                        Employee On-Boarding
                                    </li>
                                    <li data-tab="#application_screening" className={`nav-link  ${tabMenu.e && "active"}`} onClick={() => tabActive({ e: true })}>
                                        Application Screening
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="hiredots-stretch-element-inside-column">
                                <div className="tab-content" id="myTabContent">
                                    <div className={`tab-pane fade ${tabMenu.a && "show active"}`} id="staffing_solution" role="tabpanel" aria-labelledby="staffing_solution">
                                        <div className="project-two__card">
                                            <div className="project-two__img">
                                                <img src={Projectimg} alt="hiredots" />
                                            </div>
                                            <div className="project-two__btn">
                                                <Link to="/project-details" className="hiredots-btn">
                                                    <span className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                            <div className="project-two__content">
                                                <span className="project-two__tagline">Resources</span>
                                                <h3 className="project-two__title">
                                                    <Link to="/project-details">Staffing Solution</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade  ${tabMenu.b && "show active"}`} id="scale_up_business" role="tabpanel" aria-labelledby="scale_up_business">
                                        <div className="project-two__card">
                                            <div className="project-two__img">
                                                <img src={Projectimg2} alt="hiredots" />
                                            </div>
                                            <div className="project-two__btn">
                                                <Link to="/project-details" className="hiredots-btn">
                                                    <span className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                            <div className="project-two__content">
                                                <span className="project-two__tagline">Resources</span>
                                                <h3 className="project-two__title">
                                                    <Link to="/project-details">Scale-Up Business</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade  ${tabMenu.c && "show active"}`} id="resume_management" role="tabpanel" aria-labelledby="resume_management">
                                        <div className="project-two__card">
                                            <div className="project-two__img">
                                                <img src={Projectimg} alt="hiredots" />
                                            </div>
                                            <div className="project-two__btn">
                                                <Link to="/project-details" className="hiredots-btn">
                                                    <span className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                            <div className="project-two__content">
                                                <span className="project-two__tagline">Resources</span>
                                                <h3 className="project-two__title">
                                                    <Link to="/project-details">Resume Management</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade  ${tabMenu.d && "show active"}`} id="employee_on_boarding" role="tabpanel" aria-labelledby="employee_on_boarding">
                                        <div className="project-two__card">
                                            <div className="project-two__img">
                                                <img src={Projectimg2} alt="hiredots" />
                                            </div>
                                            <div className="project-two__btn">
                                                <Link to="/project-details" className="hiredots-btn">
                                                    <span className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                            <div className="project-two__content">
                                                <span className="project-two__tagline">Resources</span>
                                                <h3 className="project-two__title">
                                                    <Link to="/project-details">Employee On-Boarding</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane fade  ${tabMenu.e && "show active"}`} id="application_screening" role="tabpanel" aria-labelledby="application_screening">
                                        <div className="project-two__card">
                                            <div className="project-two__img">
                                                <img src={Projectimg} alt="hiredots" />
                                            </div>
                                            <div className="project-two__btn">
                                                <Link to="/project-details" className="hiredots-btn">
                                                    <span className="icon-right-arrow" />
                                                </Link>
                                            </div>
                                            <div className="project-two__content">
                                                <span className="project-two__tagline">Resources</span>
                                                <h3 className="project-two__title">
                                                    <Link to="/project-details">Application Screening</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projecttwo