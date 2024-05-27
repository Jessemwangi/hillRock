import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Whychoose from '../Menabout/Whychoose'
import Testimonial from '../Menhomeone/Testimonial'
import Ctathree from '../Menabout/Ctathree'
import Benefit from '../Menhomethree/Benefit'
import Team from '../Menabout/Team'
import Clienttwo from '../Menhometwo/Clienttwo'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="About" cssclass='page-header__bg_about' />
                <Whychoose />
                <Testimonial />
                <Ctathree />
                <Benefit />
                {/* will enable once agreed  */}
                {/* <Team /> */}
                <Clienttwo />
                <Footer />
            </div>
        </>
    )
}

export default Main