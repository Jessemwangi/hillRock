import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';



function Projectone() {
    return (
        <>
            <div className="project-one project--page">
                <div className="container">
                    <div className="row gutter-y-30">
                        {/* Mapping project images */}
                        {projectData.map(({project_id, project_details,objectives,company_info}) => (
                            <div key={project_id} className="col-md-6 col-lg-4">
                                <div className="project-one__card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1ms">
                                    <div className="project-one__img">
                                        <img src={project_details.image} alt="Staffing Solution" />
                                    </div>
                                    <div className="project-one__content">
                                    <h3 className="project-one__title">{company_info.name}</h3>
                                    <br/>
                                        <span className="project-one__tagline">{project_details.title}</span>
                                        <>
                                       <ol>
                                            {objectives?.map((obj, index) =>
                                            <li key={index}>{obj}</li>
                                            )}
                                        </ol>
                                        </> 
                                        <h3 className="project-one__title">
                                            <Link to={`/project-details/${project_id}`}>View Project</Link>
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
