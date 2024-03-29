import React from 'react';
import { Link } from 'react-router-dom';

import Teamimg1 from '../../assets/images/team/team-1-1.jpg';
import Teamimg2 from '../../assets/images/team/team-1-2.jpg';
import Teamimg3 from '../../assets/images/team/team-1-3.jpg';
import Teamimg4 from '../../assets/images/team/team-1-4.jpg';

const teamMembers = [
    { name: 'Mike Hardson', designation: 'Director', img: Teamimg1 },
    { name: 'Aleesha Brown', designation: 'Director', img: Teamimg2 },
    { name: 'David Cooper', designation: 'Director', img: Teamimg3 },
    { name: 'David Cooper', designation: 'Director', img: Teamimg4 }
];

function Teammember() {
    return (
        <>
            <section className="team-one team-one--home">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Professional team</h6>
                        <h3 className="sec-title__title">
                            Meet Our Experienced <br /> People Now
                        </h3>
                    </div>
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={`${index * 100}ms`}>
                                    <div className="team-card__image">
                                        <div className="team-card__image__bg" />
                                        <img src={member.img} alt={member.name} />
                                        <div className="team-card__hover">
                                            <div className="team-card__social">
                                                <i className="fa fa-share-alt" />
                                                <div className="team-card__social__list">
                                                    <Link to="https://twitter.com"><i className="fab fa-twitter" aria-hidden="true" /><span className="sr-only">Twitter</span></Link>
                                                    <Link to="https://facebook.com"><i className="fab fa-facebook" aria-hidden="true" /><span className="sr-only">Facebook</span></Link>
                                                    <Link to="https://pinterest.com"><i className="fab fa-pinterest-p" aria-hidden="true" /><span className="sr-only">Pinterest</span></Link>
                                                    <Link to="https://instagram.com"><i className="fab fa-instagram" aria-hidden="true" /><span className="sr-only">Instagram</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-card__content">
                                        <h3 className="team-card__title">
                                            <Link to="/teamdetails">{member.name}</Link>
                                        </h3>
                                        <p className="team-card__designation">{member.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Teammember;
