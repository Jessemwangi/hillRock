import React from 'react'
import Header from '../Header/Main'
import Sliderone from '../Menhomeone/Sliderone'
import Feature from '../Menhomeone/Feature'
import About from '../Menhomeone/About'
import Funfact from '../Menhomeone/Funfact'
import Service from '../Menhomeone/Service'
import Cta from '../Menhomeone/Cta'
import Client from '../Menhomeone/Client'
import Projectone from '../Menhomeone/Projectone'
import Ctatwo from '../Menhomeone/Ctatwo'
import Testimonial from '../Menhomeone/Testimonial'
import Blog from '../Menhomeone/Blog'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Sliderone />
                <Feature />
                <About />
                <Funfact />
                <Service />
                <Cta />
                <Client />
                <Projectone />
                <Ctatwo />
                <Testimonial />
                <Blog />
                <Footer />
            </div>
        </>
    )
}

export default Main