import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Jobfrom from '../Menjobs/Jobfrom'
import Footer from '../Footer/Main'

function Main() {
  return (
    <>
    <div className="page-wrapper">
        <Header />
        <Breadcrumb subtitle="Home" title="Jobs" />
        <Jobfrom />
        <Footer />
    </div>
    </>
  )
}

export default Main