import React, { useState } from 'react';
import { historyData } from '../../data/history';

const HistoryRoadMap = () => {

    const [activeSection, setActiveSection] = useState(1);

    const handleToggleSection = (sectionIndex) => {
        if (activeSection === sectionIndex) {
            setActiveSection(null);
        } else {
            setActiveSection(sectionIndex);
        }
    };
    return (
        <>
        <section className="about-three">
            <div className="container">
                
                    <div  className="row">
                    <div className="col-xl-6">
                            <div className="faq-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">Future Roadmap</h6>
                                    <h3 className="sec-title__title">
                                    As we celebrate our establishment.
                                    </h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="faq-one__experiance">
                                            <img src={'Faqimg1'} alt="hist" />
                                            <div className="faq-one__experiance__content">
                                                <div className="faq-one__experiance__icon">
                                                    <span className="icon-quality" />
                                                </div>
                                                <div className="faq-one__experiance__count count-box">
                                                <span className="count">{'100'}</span>
                                                    %
                                                </div>
                                                <p className="faq-one__experiance__text">
                                                    Clients
                                                    <br /> Satisfaction
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="faq-one__content__text">
                                        We are excited about the future and the path we are charting. 
                                        Our roadmap is centered on continuous growth, 
                                        innovation, and delivering unparalleled value to our clients In the coming years, we aim to <b> {'>>'}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-three__content">
                            <div className="faq-page__accordion hiredots-accrodion" data-grp-name="hiredots-accrodion">
                                {historyData.content?.map(({id,title,desc}) => (
                                    <div className={`accrodion ${activeSection === id ? 'active' : 'collapsed'}`} key={id}>
                                        <div className="accrodion-title" onClick={() => handleToggleSection(id)}>
                                            <h4>
                                                {title}
                                                <span className="accrodion-title__icon" />
                                            </h4>
                                        </div>
                                        <div id={`collapse${id}`} className={`collapse ${activeSection === id ? 'show' : ''}`} data-bs-parent="#accordionExample" >
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>{desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                            </div>
                        </div>
                    </div>
               
                <div className="about-three__border" />
            </div>
        </section>
    </>
    );
};

export default HistoryRoadMap;