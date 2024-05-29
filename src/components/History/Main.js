import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Historydtls from '../Menhistory/Historydtls'
import Footer from '../Footer/Main'
import HistoryIntro from '../Menhistory/HistoryIntro'

function Main() {
  return (
    <>
    <div className="page-wrapper">
        <Header />
        <Breadcrumb subtitle="Home" title="History" cssclass='page-header__bg_history' />
        <Historydtls />
       <HistoryIntro/>
        <Footer />
    </div>
    </>
  )
}

export default Main