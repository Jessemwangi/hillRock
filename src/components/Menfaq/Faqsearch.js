import React from 'react'

function Faqsearch() {
    return (
        <>
            <section className="faq-page-search">
                <div className="container">
                    <div className="faq-page-search__inner wow fadeInUp" data-wow-duration="1500ms">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="sec-title text-center">
                                    <h6 className="sec-title__tagline">frequently asked questions</h6>
                                    <h3 className="sec-title__title">
                                        Have Any Questions? Look <br />
                                        Here for it Now!
                                    </h3>
                                </div>
                                <form action="#" className="faq-page-search__form">
                                    <input type="text" id="error-search" placeholder="Search here" />
                                    <button type="submit" className="faq-page-search__form__btn" aria-label="search submit">
                                        <span>
                                            <i className="icon-magnifying-glass" />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqsearch