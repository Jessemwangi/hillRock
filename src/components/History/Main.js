import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Historydtls from '../Menhistory/Historydtls'
import Footer from '../Footer/Main'
import HistoryIntro from '../Menhistory/HistoryIntro'
import HistoryRoadMap from '../Menhistory/HistoryRoadMap'
import MarketPosition from '../Menhistory/MarketPosition'

function Main() {
  return (
    <>
    <div className="page-wrapper">
        <Header />
        <Breadcrumb subtitle="Home" title="History" cssclass='page-header__bg_history' />
        {/* <Historydtls /> */}
        <div className="history">
       <HistoryIntro/>
        </div>
       <HistoryRoadMap/>
       <MarketPosition/>
        <Footer />
    </div>
    </>
  )
}

export default Main