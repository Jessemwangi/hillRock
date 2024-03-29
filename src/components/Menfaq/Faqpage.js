import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Faqimg1 from '../../assets/images/resources/faq-1-img.jpg'

function Faqpage() {
    const [activeSection, setActiveSection] = useState(1);

    const handleToggleSection = (sectionIndex) => {
        if (activeSection === sectionIndex) {
            setActiveSection(null);
        } else {
            setActiveSection(sectionIndex);
        }
    };
    
    const faqData = [
        {
            question: 'What Does your Process Look Like?',
            answer: ' There are many variations of passages the majority have simply free text available in the lorem ipsum market for free now suffered alteration in some fo injected humour, or randomised words believable.',
        },
        {
            question: 'Learn How We Create Unmatched Solutions',
            answer: ' There are many variations of passages the majority have simply free text available in the lorem ipsum market for free now suffered alteration in some fo injected humour, or randomised words believable.',
        },
        {
            question: 'What We should do If our skin gets dry?',
            answer: ' There are many variations of passages the majority have simply free text available in the lorem ipsum market for free now suffered alteration in some fo injected humour, or randomised words believable.',
        },
        {
            question: 'How Long do Services Take to Complete?',
            answer: ' There are many variations of passages the majority have simply free text available in the lorem ipsum market for free now suffered alteration in some fo injected humour, or randomised words believable.',
        },
        {
            question: ' How Can i Find my Financial Record?',
            answer: ' There are many variations of passages the majority have simply free text available in the lorem ipsum market for free now suffered alteration in some fo injected humour, or randomised words believable.',
        },
        {
            question: ' How Long do Services Take to Complete?',
            answer: ' There are many variations of passages the majority have simply free text available in the lorem ipsum market for free now suffered alteration in some fo injected humour, or randomised words believable.',
        },
        {
            question: 'How Can i Find my Financial Record?',
            answer: ' There are many variations of passages the majority have simply free text available in the lorem ipsum market for free now suffered alteration in some fo injected humour, or randomised words believable.',
        },
    ];
    return (
        <>
            <section className="faq-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="faq-page__contact background-base">
                                <h3 className="faq-page__contact__title">
                                    have Questions? Call Now!
                                </h3>
                                <div className="faq-page__contact__text">
                                    <i className="icon-phone-call" />
                                    <p className="faq-page__contact__number">
                                        Have Question?
                                        <br />
                                        Free <Link to="tel:+9288009850">+92 (8800) - 9850</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="faq-page__contact__img">
                                <img src={Faqimg1} alt="faq" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="faq-page__accordion hiredots-accrodion" data-grp-name="hiredots-accrodion">
                                {faqData.map((item, index) => (
                                    <div className={`accrodion-item ${activeSection === index ? 'active' : ''}`} key={index} onClick={() => handleToggleSection(index)}>
                                        <div className="accrodion-title">
                                            <h4>
                                                {item.question}
                                                <span className="accrodion-title__icon"></span>
                                            </h4>
                                        </div>
                                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${activeSection === index ? 'show' : ''}`}>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqpage