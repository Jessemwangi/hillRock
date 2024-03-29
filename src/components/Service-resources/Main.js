import React from 'react'
import Header from '../Header/Main'
import Breadcrum from '../Breadcrumb/Main'
import Resourcedtls from '../MenserviceResource/Resourcedtls'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrum subtitle="Home" title="Tech Resources" />
                <Resourcedtls />
                <Footer />
            </div>
        </>
    )
}

export default Main