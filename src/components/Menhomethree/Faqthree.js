import React, { useState, useEffect } from 'react';
import Faqimg1 from '../../assets/images/resources/faq-2-img.jpg'

function Faqthree() {

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
    

    useEffect(() => {
        const updateCounter = () => {
            const interval = 10;
            const timers = Object.keys(finalCounts).map((key) => {
                const startCount = counts[key];
                const endCount = finalCounts[key];
                const step = Math.ceil((endCount - startCount) / (1000 / interval));

                return setInterval(() => {
                    setCounts((prevCounts) => ({
                        ...prevCounts,
                        [key]: Math.min(prevCounts[key] + step, endCount),
                    }));
                }, interval);
            });
            return () => {
                timers.forEach((timer) => clearInterval(timer));
            };
        };
        updateCounter();
    }, []);

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
    ];

    return (
        <>
            <section className="faq-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">understand requirements</h6>
                                    <h3 className="sec-title__title">
                                        Look a Right Candidate for Your Company
                                    </h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="faq-one__experiance">
                                            <img src={Faqimg1} alt="faq" />
                                            <div className="faq-one__experiance__content">
                                                <div className="faq-one__experiance__icon">
                                                    <span className="icon-quality" />
                                                </div>
                                                <div className="faq-one__experiance__count count-box">
                                                <span className="count">{counts.Working}</span>
                                                    +
                                                </div>
                                                <p className="faq-one__experiance__text">
                                                    Years of Working
                                                    <br /> Experience
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="faq-one__content__title">
                                            Donec Quis felis Simply Free Text Commodo
                                        </h4>
                                        <p className="faq-one__content__text">
                                            Lorem ipsum is simply free text dol sit amet, passag notted is
                                            simply free text dol sit amet, passage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                             <div className="faq-page__accordion hiredots-accrodion" data-grp-name="hiredots-accrodion">
                                {faqData.map((item, index) => (
                                    <div className={`accrodion ${activeSection === index ? 'active' : 'collapsed'}`} key={index}>
                                        <div className="accrodion-title" onClick={() => handleToggleSection(index)}>
                                            <h4>
                                                {item.question}
                                                <span className="accrodion-title__icon" />
                                            </h4>
                                        </div>
                                        <div id={`collapse${index}`} className={`collapse ${activeSection === index ? 'show' : ''}`} data-bs-parent="#accordionExample" >
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

export default Faqthree