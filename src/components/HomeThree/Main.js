import React from 'react'
import HeaderThree from '../HeaderThree/Main'
import Sliderthree from '../Menhomethree/Sliderthree'
import FeatureThree from '../Menhomethree/FeatureThree'
import Abtthree from '../Menhomethree/Abtthree'
import Client from '../Menhomeone/Client'
import ServiceThree from '../Menhomethree/ServiceThree'
import Faqthree from '../Menhomethree/Faqthree'
import Projectone from '../Menhomeone/Projectone'
import Testimonialthree from '../Menhomethree/Testimonialthree'
import Pricing from '../Menhomethree/Pricing'
import Benefit from '../Menhomethree/Benefit'
import Blog from '../Menhomeone/Blog'
import Mapthree from '../Menhomethree/Mapthree'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <HeaderThree />
                <Sliderthree />
                <FeatureThree />
                <Abtthree />
                <Client />
                <ServiceThree />
                <Faqthree />
                <Projectone />
                <Testimonialthree />
                <Pricing />
                <Benefit />
                <Blog />
                <Mapthree />
                <Footer />
            </div>
        </>
    )
}

export default Main