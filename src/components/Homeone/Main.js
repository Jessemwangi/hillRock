import React from 'react'
import Header from '../Header/Main'
import Sliderone from '../Menhomeone/Sliderone'
import Feature from '../Menhomeone/Feature'
import About from '../Menhomeone/About'
import Funfact from '../Menhomeone/Funfact'
import Service from '../Menhomeone/Service'
import Client from '../Menhomeone/Client'
import Ctatwo from '../Menhomeone/Ctatwo'
import Blog from '../Menhomeone/Blog'
import Footer from '../Footer/Main'
import WorkProcess from '../Menhometwo/WorkProcess'
import { SpeedInsights } from "@vercel/speed-insights/react"

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Sliderone />
                <Feature />
                <About />
                <WorkProcess />
                <Funfact />
                <Service />
                <SpeedInsights/>
                {/* <Cta /> */}
                <Client />
                {/* <Projectone /> */}
                <Ctatwo />
                {/* <Testimonial /> */}
                <Blog /> 
                <Footer />
            </div>
        </>
    )
}

export default Main