import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Hydrodtls from '../MenserviceHydro/Hydrodtls'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="Staffing Solution" />
                <Hydrodtls />
                <Footer />
            </div>
        </>
    )
}

export default Main