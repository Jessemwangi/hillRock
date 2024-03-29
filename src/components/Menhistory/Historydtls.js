import React from 'react'
import history1 from '../../assets/images/history/histroy-1.jpg'
import history2 from '../../assets/images/history/histroy-2.jpg'

function Historydtls() {
    return (
        <>
            <div className="history">
                <div className="container">
                    <div className="history__sec_title wow fadeInUp" data-wow-duration="1500ms">
                        <div className="sec-title text-center">
                            <h6 className="sec-title__tagline">Our history</h6>
                            <h3 className="sec-title__title">
                                See Our Memorable Long <br />
                                History Line
                            </h3>
                        </div>
                    </div>
                    <div className="history__inner">
                        <div className="history__card item-1 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="history__card__left">
                                <div className="history__card__year">2013</div>
                                <div className="history__card__content">
                                    <span className="history__card__date">20 April 2013</span>
                                    <h3 className="history__card__title">Hiredots was founded</h3>
                                    <p className="history__card__text">
                                        There are many variations of passages of Lorem Ipsum <br />
                                        available, but the majority have suffered alteration in <br />{" "}
                                        some form, by injected humour, or randomised. <br />
                                        Suspendisse sollicitudin velit sed leo.
                                    </p>
                                </div>
                            </div>
                            <div className="history__card__img">
                                <img src={history1} alt="" />
                            </div>
                        </div>
                        <div className="history__card item-2">
                            <div className="history__card__left">
                                <div className="history__card__year">2018</div>
                                <div className="history__card__content">
                                    <span className="history__card__date">16 Novemeber 2018</span>
                                    <h3 className="history__card__title">First Award we Won</h3>
                                    <p className="history__card__text">
                                        There are many variations of passages of Lorem Ipsum <br />
                                        available, but the majority have suffered alteration in <br />{" "}
                                        some form, by injected humour, or randomised. <br />
                                        Suspendisse sollicitudin velit sed leo.
                                    </p>
                                </div>
                            </div>
                            <div className="history__card__img">
                                <img src={history2} alt="" />
                            </div>
                        </div>
                        <div className="history__card item-3 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="history__card__left">
                                <div className="history__card__year">2020</div>
                                <div className="history__card__content">
                                    <span className="history__card__date">20 April 2020</span>
                                    <h3 className="history__card__title">Growing Very Fast</h3>
                                    <p className="history__card__text">
                                        There are many variations of passages of Lorem Ipsum <br />
                                        available, but the majority have suffered alteration in <br />{" "}
                                        some form, by injected humour, or randomised. <br />
                                        Suspendisse sollicitudin velit sed leo.
                                    </p>
                                </div>
                            </div>
                            <div className="history__card__img">
                                <img src={history2} alt="" />
                            </div>
                        </div>
                        <div className="history__card item-4 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="history__card__left">
                                <div className="history__card__year">2022</div>
                                <div className="history__card__content">
                                    <span className="history__card__date">16 Novemeber 2013</span>
                                    <h3 className="history__card__title">Reached Another Level</h3>
                                    <p className="history__card__text">
                                        There are many variations of passages of Lorem Ipsum <br />
                                        available, but the majority have suffered alteration in <br />{" "}
                                        some form, by injected humour, or randomised. <br />
                                        Suspendisse sollicitudin velit sed leo.
                                    </p>
                                </div>
                            </div>
                            <div className="history__card__img">
                                <img src={history2} alt="" />
                            </div>
                        </div>
                        <div className="history__card item-5 wow fadeInUp" data-wow-duration="1500ms" >
                            <div className="history__card__left">
                                <div className="history__card__year">2023</div>
                                <div className="history__card__content">
                                    <span className="history__card__date">16 Novemeber 2013</span>
                                    <h3 className="history__card__title">Trying to Reach Goal</h3>
                                    <p className="history__card__text">
                                        There are many variations of passages of Lorem Ipsum <br />
                                        available, but the majority have suffered alteration in <br />{" "}
                                        some form, by injected humour, or randomised. <br />
                                        Suspendisse sollicitudin velit sed leo.
                                    </p>
                                </div>
                            </div>
                            <div className="history__card__img">
                                <img src={history2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Historydtls