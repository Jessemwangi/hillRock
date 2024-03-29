import React from 'react'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/images/backgrounds/banner-bg-1-1.jpg'

function Ctahometwo() {
    return (
        <>
            <section className="cta-three cta-three--home">
                <div className="cta-three__bg jarallax" data-jarallax="" data-speed="0.3" style={{ backgroundImage:`url(${Bgimg})` }}/>
                <div className="container">
                    <h2 className="cta-three__title"> 
                        Hiredots Trusted Staffing &amp; <br />
                        Recruitment Agency
                    </h2>
                    <div className="cta-three__btns">
                        <Link to="/services" className="hiredots-btn cta-three__link">
                            <span>Discover more</span>
                        </Link>
                        <Link to="/jobs" className="hiredots-btn hiredots-btn--primary">
                            <span>for employers</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ctahometwo