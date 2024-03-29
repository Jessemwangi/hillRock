import React from 'react'
import Slider from 'react-slick'
import Brandimg from '../../assets/images/resources/brand-1-1.png'

const Clientslider = {
    items: 5,
    margin: 65,
    smartspeed: 1000,
    loop: true,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                margin: 30,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                margin: 30,
            },
        },
    ],
}

function Client() {
    return (
        <div>
            <div className="client-carousel ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <h3 className="client-carousel__title">
                                Trusted and funded by more
                                <br /> then 800 companies
                            </h3>
                        </div>
                        <div className="col-xl-9">
                            <Slider className='client-one'{...Clientslider} slidesToShow={5} slidesToScroll={1} autoplay={true} autoplaySpeed={1000}>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src={Brandimg} alt="hiredots" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="client-carousel__border" />
                </div>
            </div>
        </div>
    )
}

export default Client