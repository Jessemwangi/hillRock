import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Projectone from '../Menproject/Projectone'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="Projects" />
                <Projectone/>
                <Footer />
            </div>

        </>
    )
}

export default Main