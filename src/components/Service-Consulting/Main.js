import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Consultingdtls from '../MenserviceConsulting/Consultingdtls'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="HR Consulting" />
                <Consultingdtls />
                <Footer />
            </div>
        </>
    )
}

export default Main