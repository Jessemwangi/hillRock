import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import WOW from 'wowjs'
import Logo from '../../assets/images/logo-light.png'


function Main() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [homeDrop, sethomeDrop] = useState(false)
    const [headerDrop, setheaderDrop] = useState(false)
    const [pageDrop, setpageDrop] = useState(false)
    const [servicesDrop, setservicesDrop] = useState(false)
    const [projectsDrop, setprojectsDrop] = useState(false)
    const [blogDrop, setblogDrop] = useState(false)
    const [search, setsearch] = useState(false)
    const location = useLocation()
    const path = location.pathname
    const [menu, setmenu] = useState({})
    const activeMenu = () => {
        if (path === "/" || path === "/") {
            setmenu({ home: true })
        } else if (path === "/header" || path === "/header") {
            setmenu({ header: true })
        } else if (path === "/pages" || path === "/pages") {
            setmenu({ pages: true })
        } else if (path === "/projects" || path === "/projects") {
            setmenu({ projects: true })
        } else if (path === "/services" || path === "/services") {
            setmenu({ services: true })
        } else if (path === "/blog" || path === "/blog") {
            setmenu({ blog: true })


        }
    }


    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    useEffect(() => {
        window.scroll(0, 0)
        new WOW.WOW({
            live: false
        }).init();
        activeMenu()
    }, [path]);
    const isSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 141 ? setSticky(true) : setSticky(false);
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    

    return (
        <>
            <div className="topbar-one topbar-one--two">
                <div className="container-fluid">
                    <div className="topbar-one__inner">
                        <ul className="list-unstyled topbar-one__info">
                            <li className="topbar-one__info__item">
                                <i className="fas fa-envelope" />
                                <Link to="mailto:needhelp@company.com">needhelp@company.com</Link>
                            </li>
                            <li className="topbar-one__info__item">
                                <i className="fas fa-map-marker" />
                                <Link to="tel:+92(8800)-6930">30 Broklyn Golden Street. New York</Link>
                            </li>
                        </ul>
                        <div className="topbar-one__right">
                            <div className="topbar-one__nav">
                                <ul>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/faq">Help</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className={`main-header main-header--two sticky-header sticky-header--normal ${sticky && "main-header main-header--two sticky-header sticky-header--cloned active"}`}>
                <div className="main-header__inner"> 
                    <div className="main-header__logo">
                        <Link to="/">
                            <img src={Logo} alt="Hiredots HTML" width={125} />
                        </Link>
                    </div>
                    <div className="main-header__menu">
                        <nav className="main-header__nav main-menu">
                            <ul className="main-menu__list">
                                <li className={`dropdown ${menu.home && "current"}`}>
                                    <Link to="/">Home</Link>
                                    <ul>
                                        <li>
                                            <Link to="/">Home One</Link>
                                        </li>
                                        <li>
                                            <Link to="/hometwo">Home Two</Link>
                                        </li>
                                        <li>
                                            <Link to="/homethree">Home Three</Link>
                                        </li>
                                        <li className={`dropdown ${menu.header && "current"}`}>
                                            <Link to="#">Header Styles</Link>
                                            <ul>
                                                <li>
                                                    <Link to="/">Header One</Link>
                                                </li>
                                                <li>
                                                    <Link to="/hometwo">Header Two</Link>
                                                </li>
                                                <li>
                                                    <Link to="/homethree">Header Three</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li className={`dropdown ${menu.pages && "current"}`}>
                                    <Link to="#">Pages</Link>
                                    <ul>
                                        <li>
                                            <Link to="/teamdetails">Team Details</Link>
                                        </li>
                                        <li>
                                            <Link to="/jobs">Jobs</Link>
                                        </li>
                                        <li>
                                            <Link to="/history">History</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">FAQs</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${menu.services && "current"}`}>
                                    <Link to="/services">Services</Link>
                                    <ul>
                                        <li>
                                            <Link to="/services">Services</Link>
                                        </li>
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
                                </li>
                                <li className={`dropdown ${menu.projects && ""}`}>
                                    <Link to="/project">Projects</Link>
                                    <ul>
                                        <li>
                                            <Link to="/project">Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="/project-details">Projects Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${menu.blog && ""}`}>
                                    <Link to="/blog">News</Link>
                                    <ul>
                                        <li>
                                            <Link to="/blog">News</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog-details">News Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="main-header__call">
                            <i className="icon-telephone" />
                            <Link to="tel:+9288006930">+ 92 (8800)-6930</Link>
                        </div>
                        <Link to="#" className="search-toggler main-header__search" onClick={() => setsearch(true)}>
                            <i className="icon-magnifying-glass" aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="main-header__link">
                        <Link className="main-header__btn" to="/contact">
                            Book <br /> Appointment
                        </Link>
                    </div>
                    <div className="mobile-nav__btn mobile-nav__toggler" onClick={toggleMobileMenu}>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </header>
            {search &&
            <div className="search-popup active">
                <div className="search-popup__overlay search-toggler" onClick={() => setsearch(false)}/>
                <div className="search-popup__content">
                    <form role="search" method="get" className="search-popup__form" action="#">
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit"
                            aria-label="search submit" className="hiredots-btn hiredots-btn--base">
                            <span>
                                <i className="icon-magnifying-glass" />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            }

            {mobileMenuOpen &&
                <div className={`mobile-nav__wrapper ${mobileMenuOpen ? "expanded" : ""}`}>
                    <div className="mobile-nav__overlay mobile-nav__toggler" onClick={() => setIsDropdownOpen(false)} />
                    <div className="mobile-nav__content">
                        <span className="mobile-nav__close mobile-nav__toggler" onClick={() => setMobileMenuOpen(false)}>
                            <i className="fa fa-times" />
                        </span>
                        <div className="logo-box">
                            <Link to="/" aria-label="logo image" onClick={() => setIsDropdownOpen(false)}>
                                <img src={Logo} width={155} alt="" />
                            </Link>
                        </div>
                        <div className="mobile-nav__container">
                            <ul className="main-menu__list">
                                <li className="dropdown current">
                                    <Link to="#" className={homeDrop ? "expanded" : ""}>Home<button aria-label="dropdown toggler" className={homeDrop ? "expanded" : ""} onClick={() => sethomeDrop(homeDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
                                    {homeDrop &&
                                        <ul style={{ display: "block" }}>
                                            <li className="current">
                                                <Link to="/" onClick={() => setIsDropdownOpen(false)}>Home One</Link>
                                            </li>
                                            <li>
                                                <Link to="/hometwo" >Home Two</Link>
                                            </li>
                                            <li>
                                                <Link to="/homethree">Home Three</Link>
                                            </li>
                                            <li className="dropdown current">
                                                <Link to="#" className={headerDrop ? "expanded" : ""}>Header Styles<button aria-label="dropdown toggler" className={headerDrop ? "expanded" : ""} onClick={() => setheaderDrop(headerDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
                                                {headerDrop&&
                                                <ul style={{ display: "block" }}>
                                                    <li className="current">
                                                        <Link to="/" onClick={() => setIsDropdownOpen(false)}>Header One</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/hometwo">Header Two</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/homethree">Header Three</Link>
                                                    </li>
                                                </ul>}
                                            </li>
                                        </ul>}
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="dropdown current">
                                    <Link to="#" className={pageDrop ? "expanded" : ""}>pages<button aria-label="dropdown toggler" className={pageDrop ? "expanded" : ""} onClick={() => setpageDrop(pageDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
                                    {pageDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li>
                                            <Link to="/teamdetails">Team Details</Link>
                                        </li>
                                        <li>
                                            <Link to="/jobs">Jobs</Link>
                                        </li>
                                        <li>
                                            <Link to="/history">History</Link>
                                        </li>
                                        <li>
                                            <Link to="/faq">FAQs</Link>
                                        </li>
                                    </ul>}
                                </li>
                                <li className="dropdown">
                                    <Link to="#" className={servicesDrop ? "expanded" : ""}>Services<button aria-label="dropdown toggler" className={servicesDrop ? "expanded" : ""} onClick={() => setservicesDrop(servicesDrop ? false : true)} ><i className="fa fa-angle-down"></i></button></Link>
                                    {servicesDrop &&
                                    <ul style={{ display: "block" }}>
                                        <li>
                                            <Link to="/services">Services</Link>
                                        </li>
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
                                    </ul>}
                                </li>
                                <li className="dropdown">
                                    <Link to="#" className={projectsDrop ? "expanded" : ""}>
                                        Projects
                                        <button aria-label="dropdown toggler" className={projectsDrop ? "expanded" : ""} onClick={() => setprojectsDrop(projectsDrop ? false : true)}>
                                            <i className="fa fa-angle-down" />
                                        </button>
                                    </Link>
                                    {projectsDrop &&
                                        <ul style={{ display: "block" }}>
                                            <li>
                                                <Link to="/project" onClick={() => setIsDropdownOpen(false)}>Projects</Link>
                                            </li>
                                            <li>
                                                <Link to="/project-details" onClick={() => setIsDropdownOpen(false)}>Projects Details</Link>
                                            </li>
                                        </ul>}
                                </li>
                                <li className="dropdown">
                                    <Link to="#" className={blogDrop ? "expanded" : ""}>
                                        News
                                        <button aria-label="dropdown toggler" className={blogDrop ? "expanded" : ""} onClick={() => setblogDrop(blogDrop ? false : true)}>
                                            <i className="fa fa-angle-down"></i>
                                        </button>
                                    </Link>
                                    {blogDrop &&
                                        <ul style={{ display: "block" }}>
                                            <li>
                                                <Link to="/blog" onClick={() => setIsDropdownOpen(false)}>News</Link>
                                            </li>
                                            <li>
                                                <Link to="/blog-details" onClick={() => setIsDropdownOpen(false)}>News Details</Link>
                                            </li>
                                        </ul>}
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="mobile-nav__contact list-unstyled">
                            <li>
                                <i className="fa fa-envelope" />
                                <Link to="mailto:needhelp@hiredots.com">needhelp@hiredots.com</Link>
                            </li>
                            <li>
                                <i className="fa fa-phone-alt" />
                                <Link to="tel:666-888-0000">666 888 0000</Link>
                            </li>
                        </ul>
                        <div className="mobile-nav__social">
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
            }
        </>
    )
}

export default Main