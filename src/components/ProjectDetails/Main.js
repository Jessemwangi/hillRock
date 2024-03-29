import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Projectdtls from '../Menprojectdetails/Projectdtls'
import Projectone from '../Menprojectdetails/Projectone'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="Projects Details" />
                <Projectdtls /> 
                <Projectone />
                <Footer />
            </div>
        </>
    )
}

export default Main