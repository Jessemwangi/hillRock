import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Bgimg1 from '../../assets/images/services/recrut_solution.png'
import { services } from '../../data/services';

const SideBarMenu = () => {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const sidebar = sidebarRef.current;
        if (!sidebar) return;

        let sidebarOffsetTop = 0;
        let isMobile = window.innerWidth < 992; // Assuming 'lg' breakpoint is 992px

        const updateSidebarOffset = () => {
            const sidebarRect = sidebar.getBoundingClientRect();
            sidebarOffsetTop = sidebarRect.top + window.scrollY;
            isMobile = window.innerWidth < 992;
        };

        updateSidebarOffset();
        window.addEventListener('resize', updateSidebarOffset);

        const handleScroll = () => {
            if (isMobile) {
                sidebar.classList.remove('sticky');
                return;
            }

            const scrollY = window.scrollY;
            const contentBottom = document.querySelector('.service-details__content').getBoundingClientRect().bottom + scrollY;

            if (scrollY >= sidebarOffsetTop - 100 && contentBottom > scrollY + window.innerHeight) {
                sidebar.classList.add('sticky');
            } else {
                sidebar.classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateSidebarOffset);
        };
    }, []);
    return (
        <div className="col-md-12 col-lg-4" >
        <div className="service-sidebar" ref={sidebarRef}>
            <div className="service-sidebar__single">
                <ul className="list-unstyled service-sidebar__nav">
                    {services.map((serv) =>
                      <li key={serv.id}>
                        <a href={serv.link}>{serv.title}</a>
                  </li>
                    )}
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
                            <Link to="#">Contract Agreement Form</Link>
                        </h3>
                        <p className="service-sidebar__download__number">3.9KB</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SideBarMenu;