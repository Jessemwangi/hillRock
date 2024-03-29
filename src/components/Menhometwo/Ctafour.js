import React from 'react'
import { Link } from 'react-router-dom'

function Ctafour() {
    return (
        <>
            <section className="cta-foue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="cta-foue__title">
                                Hire Your Next Candidate on Hiredots
                            </h2>
                        </div>
                        <div className="col-md-4 text-end">
                            <Link to="/about" className="hiredots-btn">
                                <span>Discover More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ctafour