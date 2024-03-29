import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import Projectimg1 from '../../assets/images/project/project-1-1.jpg'
import Projectimg2 from '../../assets/images/project/project-1-2.jpg'
import Projectimg3 from '../../assets/images/project/project-1-3.jpg'
import Projectimg4 from '../../assets/images/project/project-1-4.jpg'
import Projectimg5 from '../../assets/images/project/project-1-5.jpg'
import Projectimg6 from '../../assets/images/project/project-1-6.jpg'


const Projectslider = {
    margin: 30,
    loop: true,
    smartSpeed: 700,
    arrows: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                margin: 30,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                margin: 30,
            },
        },
    ],
}

function Projectone() {
    return (
        <>
            <section className="project-one project-one--page">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">our recent work</h6>
                        <h3 className="sec-title__title">See Similar Projects</h3>
                    </div>
                    <Slider className='project-slider' {...Projectslider} slidesToShow={3} slidesToScroll={1}>
                        <div className="item">
                            <div className="project-one__card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1ms">
                                <div className="project-one__img">
                                    <img src={Projectimg1} alt="Staffing Solution" />
                                </div>
                                <div className="project-one__content">
                                    <span className="project-one__tagline">Resources</span>
                                    <h3 className="project-one__title">
                                        <Link to="/project-details">Staffing Solution</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-one__card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1ms">
                                <div className="project-one__img">
                                    <img src={Projectimg2} alt="Staffing Solution" />
                                </div>
                                <div className="project-one__content">
                                    <span className="project-one__tagline">Resources</span>
                                    <h3 className="project-one__title">
                                        <Link to="/project-details">Staffing Solution</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-one__card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1ms">
                                <div className="project-one__img">
                                    <img src={Projectimg3} alt="Staffing Solution" />
                                </div>
                                <div className="project-one__content">
                                    <span className="project-one__tagline">Resources</span>
                                    <h3 className="project-one__title">
                                        <Link to="/project-details">Staffing Solution</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-one__card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1ms">
                                <div className="project-one__img">
                                    <img src={Projectimg4} alt="Staffing Solution" />
                                </div>
                                <div className="project-one__content">
                                    <span className="project-one__tagline">Resources</span>
                                    <h3 className="project-one__title">
                                        <Link to="/project-details">Staffing Solution</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-one__card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1ms">
                                <div className="project-one__img">
                                    <img src={Projectimg5} alt="Staffing Solution" />
                                </div>
                                <div className="project-one__content">
                                    <span className="project-one__tagline">Resources</span>
                                    <h3 className="project-one__title">
                                        <Link to="/project-details">Staffing Solution</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="project-one__card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1ms">
                                <div className="project-one__img">
                                    <img src={Projectimg6} alt="Staffing Solution" />
                                </div>
                                <div className="project-one__content">
                                    <span className="project-one__tagline">Resources</span>
                                    <h3 className="project-one__title">
                                        <Link to="/project-details">Staffing Solution</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Projectone