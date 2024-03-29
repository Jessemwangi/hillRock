import React from 'react';
import { Link } from 'react-router-dom';

import Project1 from '../../assets/images/project/project-1-1.jpg';
import Project2 from '../../assets/images/project/project-1-2.jpg';
import Project3 from '../../assets/images/project/project-1-3.jpg';
import Project4 from '../../assets/images/project/project-1-4.jpg';
import Project5 from '../../assets/images/project/project-1-5.jpg';
import Project6 from '../../assets/images/project/project-1-6.jpg';

function Projectone() {
    // Array of project image paths
    const projectImages = [Project1, Project2, Project3, Project4, Project5, Project6];

    return (
        <>
            <div className="project-one project--page">
                <div className="container">
                    <div className="row gutter-y-30">
                        {/* Mapping project images */}
                        {projectImages.map((image, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="project-one__card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1ms">
                                    <div className="project-one__img">
                                        <img src={image} alt="Staffing Solution" />
                                    </div>
                                    <div className="project-one__content">
                                        <span className="project-one__tagline">Resources</span>
                                        <h3 className="project-one__title">
                                            <Link to="/project-details">Staffing Solution</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projectone;
