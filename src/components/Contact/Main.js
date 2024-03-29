import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Contactform from '../Mencontact/Contactform'
import Map from '../Mencontact/Map'
import Footer from '../Footer/Main'

function Main() {
  return (
    <div>
        <div className="page-wrapper">
            <Header/>
            <Breadcrumb subtitle="Home" title="Contact" />
            <Contactform/>
            <Map />
            <Footer/>
        </div>
    </div>
  )
}

export default Main