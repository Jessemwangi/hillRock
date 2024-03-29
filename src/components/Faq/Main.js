import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Faqsearch from '../Menfaq/Faqsearch'
import Faqpage from '../Menfaq/Faqpage'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="FAQs" />
                <Faqsearch />
                <Faqpage />
                <Footer />
            </div>
        </>
    )
}

export default Main