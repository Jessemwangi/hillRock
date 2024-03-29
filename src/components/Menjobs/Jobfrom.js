import React from 'react';
import { Link } from 'react-router-dom';

// Import job logos
import Joblogo1 from '../../assets/images/jobs/logo-1.png';
import Joblogo2 from '../../assets/images/jobs/logo-2.png';
import Joblogo3 from '../../assets/images/jobs/logo-3.png';
import Joblogo4 from '../../assets/images/jobs/logo-4.png';
import Joblogo5 from '../../assets/images/jobs/logo-5.png';

function Jobfrom() {
    // Define an array of job objects
    const jobs = [
        { logo: Joblogo1, title: 'Software Engineer Job', location: 'San Francisco, California' },
        { logo: Joblogo2, title: 'Administrative Coordinator', location: 'San Francisco, California' },
        { logo: Joblogo3, title: 'Human Resources Manager', location: 'San Francisco, California' },
        { logo: Joblogo4, title: 'Graphic & Web Designing', location: 'San Francisco, California' },
        { logo: Joblogo5, title: 'Digital Marketing Assistant', location: 'San Francisco, California' }
    ];

    return (
        <div className="jobs">
            <div className="container">
                <form className="contact-form-validated" action="inc/sendemail.php" noValidate="novalidate">
                    <div className="jobs__form wow fadeInUp animated" data-wow-duration="1500ms">
                        <div className="jobs__group row gutter-y-20">
                            <div className="col-md-6">
                                <div className="job__control Jobs__control--full">
                                    <input type="text" name="name" placeholder="All Jobs" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="jobs__control Jobs__control--full">
                                    <input type="text" name="name" placeholder="Any Location" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs__form__checkbox">
                        {/* Checkbox items */}
                    </div>
                </form>
                <div className="jobs-list">
                    {/* Map over jobs array and generate job entries */}
                    {jobs.map((job, index) => (
                        <div key={index} className="jobs-list__card">
                            <div className="jobs-list__left">
                                <div className="jobs-list__logo">
                                    <img src={job.logo} alt="" />
                                </div>
                                <div className="jobs-list__content">
                                    <span className="jobs-list__time">
                                        <i className="fas fa-clock" /> Posted 3 days ago
                                    </span>
                                    <h3 className="jobs-list__title">
                                        <Link to="/contact">{job.title}</Link>
                                    </h3>
                                    <span className="jobs-list__location">
                                        {job.location}
                                    </span>
                                </div>
                            </div>
                            <div className="jobs-list__right">
                                <span className="jobs-list__price">
                                    <b>$85,000 - $90,000</b> Per Year
                                </span>
                                <Link to="/contact" className="hiredots-btn">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Jobfrom;
