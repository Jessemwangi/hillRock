import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Trainingdtls from '../MenserviceTraining/Trainingdtls'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="Leadership Training" />
                <Trainingdtls />
                <Footer />
            </div>
        </>
    )
}

export default Main