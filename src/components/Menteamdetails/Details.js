import React from 'react';
import { Link } from 'react-router-dom';
import Teamdtls1 from '../../assets/images/team/team-d-1.png';

function Details() {
    const socialLinks = [
        { icon: 'fab fa-twitter', url: 'https://twitter.com', label: 'Twitter' },
        { icon: 'fab fa-facebook', url: 'https://facebook.com', label: 'Facebook' },
        { icon: 'fab fa-pinterest-p', url: 'https://pinterest.com', label: 'Pinterest' },
        { icon: 'fab fa-instagram', url: 'https://instagram.com', label: 'Instagram' }
    ];

    const listItems = [
        'Best Quality Services',
        'Time Saving',
        'Meet the Deadlines',
        '24/7 Customer Support'
    ];

    return (
        <>
            <section className="team-details">
                <div className="container">
                    <div className="team-details__inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="team-details__image">
                                    <img src={Teamdtls1} alt="team" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team-details__content">
                                    <span className="team-details__tagline">Hello!</span>
                                    <h3 className="team-details__title">This is aleesha brown</h3>
                                    <div className="team-details__social">
                                        {socialLinks.map((link, index) => (
                                            <Link key={index} to={link.url}>
                                                <i className={link.icon} aria-hidden="true" />
                                                <span className="sr-only">{link.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="team-details__text">
                                        Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis
                                        <br /> elit id impedie. Quisq commodo simply free ornare tortor.
                                        If <br /> you are going to use a passage.
                                    </div>
                                    <h4 className="team-details__highlight">
                                        Few reasons for hiring a expert
                                    </h4>
                                    <ul className="list-unstyled team-details__list">
                                        {listItems.map((item, index) => (
                                            <li key={index}>
                                                <i className="fa fa-check-circle" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Details;
