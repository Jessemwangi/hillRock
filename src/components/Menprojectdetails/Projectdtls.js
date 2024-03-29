import React from 'react'
import { Link } from 'react-router-dom'
import Projectdtls1 from '../../assets/images/project/project-details-1.jpg'
import Projectdtls2 from '../../assets/images/project/project-detials-2.jpg'

function Projectdtls() {
    return (
        <>
            <div className="project-details">
                <div className="container">
                    <div className="project-details__img">
                        <img src={Projectdtls1} alt="" />
                        <div className="project-details__meta">
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Date</span>
                                <h3 className="project-details__title">30 Aug, 2023</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Client</span>
                                <h3 className="project-details__title">Themeforest, Envato</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Website</span>
                                <h3 className="project-details__title">company.com</h3>
                            </div>
                            <div className="project-details__meta__item">
                                <span className="project-details__tagline">Value</span>
                                <h3 className="project-details__title">company.com</h3>
                            </div>
                            <div className="project-details__social">
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
                    <div className="project-details__wrapper">
                        <h3 className="project-details__headline"> Staffing Solutions </h3>
                        <p className="project-details__info">
                            There are many variations of passages of psum available, but the
                            majority have suffered alteration in some form, by injected humour, or
                            randomised words which don't look even slightly believable. If you are
                            going to use a passage of Lorem Ipsum, you need to be sure there isn't
                            anything embarrassing hidden in the middle of text. Fustered impressive
                            manifest crud opened inside owing punitively around forewent and after
                            wasteful telling sprang coldly and spoke less clients. Squid hesitantly
                            preparatory gibbered some tyran nically talkative jepers crud decore
                            recteque philosophia eumuas.
                        </p>
                        <p className="project-details__info">
                            Beyond more stoic this along goodness hey this this wow manatee mongoose
                            one as since a far flustered impressive manifest far crud opened inside
                            owing punitively around forewent and after wasteful telling sprang
                            coldly and spoke less clients. Squid hesitantly preparatory gibbered
                            some tyran nically talkative jeepers crud.
                        </p>
                        <h4>Project Challenge</h4>
                        <p className="project-details__info">
                            Eque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis
                            enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem
                            Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the ndustry stan when an unknown printer took a
                            galley.
                        </p>
                        <h3 className="project-details__highligt">
                            Making this the first true generator on the Internet.
                        </h3>
                        <p className="project-details__info">
                            When an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets
                            containing. Neque porro est qui dolorem ipsumo.
                        </p>
                        <div className="project-details__feature">
                            <img src={Projectdtls2} alt="" />
                            <ul className="list-unstyled project-details__feature__list">
                                <li>
                                    <i className="fas fa-check-circle" /> Lorem Ipsum generators on the
                                    Internet
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" /> It uses a dictionary of over
                                    words
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" /> The majority have alteration
                                    in some form
                                </li>
                                <li>
                                    <i className="fas fa-check-circle" /> There are many variations of
                                    passages
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-details__pagination">
                        <span className="previous">
                            <Link to="#">
                                <i className="icon-left-arrow" />
                                Previous
                            </Link>
                        </span>
                        <span className="next">
                            <Link to="#">
                                Next <i className="icon-right-arrow" />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projectdtls