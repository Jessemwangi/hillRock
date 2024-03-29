import React from 'react';

function Teamhistory() {
    const qualifications = [
        { date: 'July 2016', title: 'Computer Science', institution: 'Canadian National University' },
        { date: 'October 2017', title: 'Digital Marketing', institution: 'Canadian National University' },
        { date: 'Novemeber 2018', title: 'Master Degree', institution: 'Canadian National University' },
        { date: 'December 2021', title: 'MS, Technology', institution: 'Canadian National University' }
    ];

    return (
        <>
            <section className="team-history-one" style={{ backgroundImage: "url(assets/images/backgrounds/team-details-bg.jpg)" }}>
                <div className="container">
                    <div className="team-history-one__content">
                        <h3 className="team-history-one__title">See My Qualifications</h3>
                    </div>
                    <div className="team-history-one__innter">
                        <div className="row align-items-center gutter-y-30">
                            {qualifications.map((qualification, index) => (
                                <div key={index} className="col-md-6 col-lg-3">
                                    <div className="team-history-one__progress">
                                        <span className="team-history-one__date">{qualification.date}</span>
                                        <h4 className="team-history-one__progress__title">{qualification.title}</h4>
                                        <p className="team-history-one__text">{qualification.institution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Teamhistory;
