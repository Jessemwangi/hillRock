import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Blogpage from '../Menblog/Blogpage'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="News" />
                <Blogpage />
                <Footer />
            </div>
        </>
    )
}

export default Main