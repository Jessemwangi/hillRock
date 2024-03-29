import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Managementdtls from '../MenserviceManagement/Managementdtls'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="Staff Management" />
                <Managementdtls />
                <Footer />
            </div>
        </>
    )
}

export default Main