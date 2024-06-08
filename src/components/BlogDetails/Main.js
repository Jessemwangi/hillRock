import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Blogdtlspage from '../MenBlogdtls/Blogdtlspage'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="News Details" cssclass='page-header__bg_news'/>
                <Blogdtlspage />
                <Footer />
            </div>
        </>
    )
}

export default Main