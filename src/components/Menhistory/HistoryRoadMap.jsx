import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Abtimg1 from '../../assets/images/shapes/about-3-1.png';
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

    const initialCounts = {
        Working: 0,
    };
    const finalCounts = {
        Working: 30,
    };

    const [counts, setCounts] = useState(initialCounts);
    const contentData = [
        {
            imgSrc: Abtimg1,
            imgAlt: 'hiredots',
            title: 'about our agency',
            subTitle: 'Reliable & Cost Efficiant Recruitment Agency',
            text: 'Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor.',
            list: [
                'Suspe ndisse suscipit sagittis leo.',
                'Entum estibulum dignissim posuere.',
                'Lorem Ipsum gene on the tend to repeat.'
            ],
            callText: 'Call to Questions',
            callNumber: '+254 712 323 400',
            discoverLink: '/about'
        }
    ];
    return (
        <>
        <section className="about-three">
            <div className="container">
                {contentData.map((item, index) => (
                    <div key={index} className="row">
                        <div className="col-lg-6">
                            <div className="about-three__image wow fadeInLeft" data-wow-delay="300ms">
                                <img src={item.imgSrc} alt={item.imgAlt} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-three__content">
                            <div className="faq-page__accordion hiredots-accrodion" data-grp-name="hiredots-accrodion">
                                {historyData?.map(({id,title,desc}) => (
                                    <div className={`accrodion ${activeSection === id ? 'active' : 'collapsed'}`} key={id}>
                                        <div className="accrodion-title" onClick={() => handleToggleSection(id)}>
                                            <h4>
                                                {title}
                                                <span className="accrodion-title__icon" />
                                            </h4>
                                        </div>
                                        <div id={`collapse${id}`} className={`collapse ${activeSection === index ? 'show' : ''}`} data-bs-parent="#accordionExample" >
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
                ))}
                <div className="about-three__border" />
            </div>
        </section>
    </>
    );
};

export default HistoryRoadMap;