import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Details from '../Menteamdetails/Details'
import Teamform from '../Menteamdetails/Teamform'
import Teamhistory from '../Menteamdetails/Teamhistory'
import Footer from '../Footer/Main'

function Main() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Breadcrumb subtitle="Home" title="Team Detail" />
        <Details />
        <Teamhistory />
        <Teamform />
        <Footer />
      </div>
    </>
  )
}

export default Main