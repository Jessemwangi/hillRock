import React, { useState, useEffect } from 'react';

function Funfact() {

    const initialCounts = {
        Employer: 0,
        Job: 0,
        Success: 0,
        Coustmer: 0,
    };
    const newLocal = {
        Employer: 697,
        Job: 430,
        Success: 98,
        Coustmer: 800,
    };
    const finalCounts = newLocal;

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
    }, [counts, finalCounts]);

    return (
        <div>
            <section className="funfact-one">
                <div className="container">
                    <div className="row" style={{display:'flex',justifyContent:"center"}}>
                        <div className="col-lg-3 col-md-6 " style={{width:"200px",marginRight:'30px'}}>
                            <div className="funfact-one__item">
                                <div className="funfact-one__icon">
                                    <span className="icon-business-idea" />
                                </div>
                                <div className="funfact-one__count count-box">
                                <span className="count" style={{color:'#0b2f81'}}>{counts.Employer}</span>
                                </div>
                                <p className="funfact-one__text">Employer Solutions</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{width:"300px",marginRight:'30px'}} >
                            <div className="funfact-one__item">
                                <div className="funfact-one__icon">
                                    <span className="icon-recruit" />
                                </div>
                                <div className="funfact-one__count count-box">
                                <span className="count" style={{color:'#0b2f81'}}>{counts.Job}</span>
                                </div>
                                <p className="funfact-one__text">People Job Seekers</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{width:"300px",marginRight:'30px'}}>
                            <div className="funfact-one__item">
                                <div className="funfact-one__icon">
                                    <span className="icon-success" />
                                </div>
                                <div className="funfact-one__count count-box">
                                <span className="count" style={{color:'#0b2f81'}}>{counts.Success}</span>%
                                </div>
                                <p className="funfact-one__text">Success Rates</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{width:"300px"}}>
                            <div className="funfact-one__item">
                                <div className="funfact-one__icon">
                                    <span className="icon-customer-review" />
                                </div>
                                <div className="funfact-one__count count-box">
                                <span className="count" style={{color:'#0b2f81'}}>{counts.Coustmer}</span>
                                </div>
                                <p className="funfact-one__text">Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Funfact