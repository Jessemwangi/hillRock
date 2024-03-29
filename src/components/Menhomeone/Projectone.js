import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import project1 from '../../assets/images/project/project-1-1.jpg';
import project2 from '../../assets/images/project/project-1-2.jpg';
import project3 from '../../assets/images/project/project-1-3.jpg';
import project4 from '../../assets/images/project/project-1-4.jpg';
import project5 from '../../assets/images/project/project-1-5.jpg';
import project6 from '../../assets/images/project/project-1-6.jpg';

const Projectslider = {
    dots: false,
    arrows: false,
    slidesToShow: 3.2,
    centerMode: true,
    centerPadding: '60px',
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
};

const projectImages = [project1, project2, project3, project4, project5, project6];

function Projectone() {
    return (
        <div>
            <div className="project-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Our projects</h6>
                        <h3 className="sec-title__title">Recent Closed Projects</h3>
                    </div>
                </div>
                <Slider className='project-one-slider' {...Projectslider} slidesToShow={3.2}>
                    {projectImages.map((projectImg, index) => (
                        <div className="item" key={index}>
                            <div className="project-one__card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1ms">
                                <div className="project-one__img">
                                    <img src={projectImg} alt="Staffing Solution" />
                                </div>
                                <div className="project-one__content">
                                    <span className="project-one__tagline">Resources</span>
                                    <h3 className="project-one__title">
                                        <Link to="/project-details">Staffing Solution</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Projectone;
