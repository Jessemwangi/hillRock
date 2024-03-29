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

function Clienttwo() {
    return (
        <>
            <div className="client-carousel client-carousel-one ">
                <div className="container">
                    <Slider className='client-one'{...Clientslider} slidesToShow={5} slidesToScroll={1}>
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

        </>
    )
}

export default Clienttwo