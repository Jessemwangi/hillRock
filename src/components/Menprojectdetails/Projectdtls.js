import React from 'react'
import { Link } from 'react-router-dom'
import Projectdtls1 from '../../assets/images/project/project_intro.png'
import Projectdtls2 from '../../assets/images/project/success.png'
import RiskMitigation from '../RiskRender/RiskMitigation'

function Projectdtls({project}) {
    return (
        <>
    {
project?.map(({cproject_id,company_info,project_details,objectives,goals,milestones,team_members,risks_and_mitigations,success_metrics,documents,additional_notes})=>
            <div className="project-details">
                <div className="container">
                    <div className="project-details__img">
                        <img src={Projectdtls1} alt="" />
                        <div className="project-details__meta">
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Date</span>
                                <h3 className="project-details__title">{project_details.start_date}</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Client</span>
                                <h3 className="project-details__title">{company_info.name}</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Address</span>
                                <h3 className="project-details__title">{company_info?.address}</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Value</span>
                                <h3 className="project-details__title">{project_details.budget}</h3>
                            </div>
                            <div className="project-details__social">
                                <Link to="https://twitter.com">
                                    <i className="fab fa-twitter" aria-hidden="true" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link to="https://facebook.com">
                                    <i className="fab fa-facebook" aria-hidden="true" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link to="https://pinterest.com">
                                    <i className="fab fa-pinterest-p" aria-hidden="true" />
                                    <span className="sr-only">Pinterest</span>
                                </Link>
                                <Link to="https://instagram.com">
                                    <i className="fab fa-instagram" aria-hidden="true" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-details__wrapper">
                        <h3 className="project-details__headline"> {project_details?.title}</h3>
                        <p className="project-details__info">{project_details?.description}
                        </p>
                        <p className="project-details__info">{additional_notes}
                        </p>
                        <h4>Problem</h4>
                        <p className="project-details__info">
                        {project_details?.problem}
                        </p>
                        <h4>Solution</h4>
                        <p className="project-details__info">
                        {project_details?.solution}
                        </p>                        
                        <hr/>
                        <br/>
                        <p className="project-details__info">
                        </p>
                        <div className="project-details__meta">
                        <div className="project-details__meta__item">
                                <span className="project-details__tagline">Duration</span>start
                                <h3 className="project-details__title">{project_details.start_date}</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Duration</span>
                                <h3 className="project-details__title">{project_details.end_date}</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Actual Duration</span>
                                <h3 className="project-details__title">{project_details.duration}</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Company Rep</span>
                                <h3 className="project-details__title">{company_info.contact_person}</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Email</span>
                                <h3 className="project-details__title">{company_info.email}</h3>
                            </div>
                        </div>
                                               <h4>objectives</h4>
                                               <ul>
                        {objectives?.map((obj,index) =>
                        <li  key={index}>{obj}
                        </li>
                        )}
                                               </ul>
                        <h4>goals</h4>
                        <ul>

                        {goals?.map((goal,index)=>
                        <li key={index}>
                            {goal}
                        </li>
                        )}
                        </ul>

                        <h3 className="project-details__highligt">
                        risks and mitigations.
                        </h3>
                        <RiskMitigation risks={risks_and_mitigations}/>
                        <div className="project-details__feature">
                            <img src={Projectdtls2} alt="" />
                            <ul className="list-unstyled project-details__feature__list">
{ success_metrics?.map((suc,index) =>                                <li key={index}>
                                    <i className="fas fa-check-circle" />{suc}
                                </li>
)

}
                            </ul>
                        </div>
                    </div>
                    <div className="project-details__pagination">
                        <span className="previous">
                            <Link to="#">
                                <i className="icon-left-arrow" />
                                Previous
                            </Link>
                        </span>
                        <span className="next">
                            <Link to="#">
                                Next <i className="icon-right-arrow" />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
)
    }
        </>
    )
}

export default Projectdtls