import React from 'react'
import { Link } from 'react-router-dom'
import Chooseimg1 from '../../assets/images/resources/about-circle-1.png'
import Chooseimg2 from '../../assets/images/resources/about-circle-2.png'
import ChooseShape from '../../assets/images/shapes/about-circle-shape.png'
import hr from '../../assets/images/backgrounds/shape-02.png'

function Whychoose() {

     const circleTextOptions = {
        radius: 92,
        forceWidth: true,
        forceHeight: true
    };

    return (
        <div>
            <section className="why-choose-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="why-choose-two__image">
                                <img src={Chooseimg1} alt="" style={{borderRadius:'50%'}} />
                                <img src={Chooseimg2} className="why-choose-two__image__two" alt="" style={{borderRadius:'50%'}}/>
                                <img src={ChooseShape} className="why-choose-two__image__shape" alt="" />
                                <div className="why-choose-two__circle">
                                    <span className="video-popups">
                                        <i className="icon-talent-search" />
                                    </span>
                                    <div className="curved-circle">
                                        <div
                                            className="curved-circle--item"
                                            data-circle-text-options='{
                                                "radius": 92,
                                                "forceWidth": true,
                                                "forceHeight": true
                                            }'
                                        >
                                            <img src={hr} alt='hr'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="why-choose-two__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">about our agency</h6>
                                    <h3 className="sec-title__title">
                                        Reliable &amp; Cost Efficiant <br /> Recruitment Agency
                                    </h3>
                                </div>
                                <p className="why-choose-two__text">
                                Hillrock Resource offers access to high-level HR expertise, labour relations,
increased efficiency, and on-demand support to businesses of all shapes and sizes.
Our outsource HR function comes with complete, compliant, and cost-effective
HR support system behind your business backed by the technology, experience,
and legal know-how you need for total peace of mind..
                                </p>
                                <ul className="why-choose-two__feature   ">
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Understand Your Needs
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Find the Perfect Candidate
                                    </li>
                                </ul>
                                <div className="why-choose-two__progress">
                                    <h4 className="why-choose-two__progress__title">Recruitments</h4>
                                    <div className="why-choose-two__progress__bar" >
                                        <div className="why-choose-two__progress__inner count-bar" style={{ width: "77%" }}>
                                            <div className="why-choose-two__progress__inner count-bar counted" data-percent="77%" >
                                                <div className="why-choose-two__progress__number count-text">77%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/services" className="hiredots-btn">
                                    <span>Discover More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Whychoose