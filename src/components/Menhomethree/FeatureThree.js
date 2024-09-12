import React from 'react';

function FeatureThree() {
    const featureItems = [
        {
            icon: 'icon-solution',
            title: 'Sourcing the Best',
            text: 'When an unknown printer took a galley type book.'
        },
        {
            icon: 'icon-creative-idea',
            title: 'Understand Your Needs',
            text: 'When an unknown printer took a galley type book.'
        },
        {
            icon: 'icon-mission',
            title: 'Find the Perfect Candidate',
            text: 'When an unknown printer took a galley type book.'
        }
    ];

    return (
        <section className="feature-two">
            <div className="container">
                <div className="row gutter-y-30">
                    {featureItems.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="feature-two__item">
                                <div className="feature-two__item__top">
                                    <div className="feature-two__item__icon">
                                        <span className={item.icon} />
                                    </div>
                                    <h3 className="feature-two__item__title">{item.title}</h3>
                                </div>
                                <p className="feature-two__item__text">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeatureThree;
