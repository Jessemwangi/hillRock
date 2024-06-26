import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Servicepage from '../Menservice/Servicepage'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="Services" cssclass='page-header__bg_services' />
                <Servicepage />
                <Footer />
            </div>

        </>
    )
}

export default Main