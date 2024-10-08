import React from 'react'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/images/resources/cta-2-2.png'
import Ctashape1 from '../../assets/images/shapes/cta-2-shape-1.png'
import Ctashape2 from '../../assets/images/shapes/cta-2-shape-2.png'
import Ctasubtitle from '../../assets/images/resources/cta-2-sub-title.png'
import baloonLove from '../../assets/images/shapes/cta-2-1.png'


function Ctatwo() {
    return (
        <div>
            <section className="cta-two" style={{ backgroundImage:`url(${Bgimg})`}} >
                <div className="cta-two__shape-one">
                    <img src={Ctashape1} alt="hiredots" />
                </div>
                <div className="cta-two__shape-two">
                    <img src={Ctashape2} alt="hiredots" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 wow fadeInLeft">
                            <div className="cta-two__content">
                                <div className="cta-two__sub-title" style={{transform: 'rotate(-45deg)'}} >
                                    <img  src={Ctasubtitle} alt="hiredots" style={{border:"4px double purple",padding:'5px'}}/>
                                </div>
                                <h2 className="cta-two__title">
                                Calm Solutions: Simplifying Payroll & HR
                                </h2>
                                <Link to="/about" className="hiredots-btn">
                                    <span>Discover more</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInRight">
                            <div className="cta-two__image">
                                <img src={baloonLove} alt="hiredots" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ctatwo