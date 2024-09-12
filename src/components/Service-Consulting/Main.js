import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
// import Consultingdtls from '../MenserviceConsulting/Consultingdtls'
import Footer from '../Footer/Main'
import ServicesLists from './ServicesLists'
import { servicesList } from '../../data/newServiceList'
import ServiceIntro from './ServiceIntro'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="Our Services"cssclass='page-header__bg_services'/>
                <ServiceIntro/>
                {servicesList.map((service,index) =>(
                    <section className={`${service.serviceName}`} key={service.id}>
                        <ServicesLists allServices={service} index={index}/>
                    </section>
                ))
                }
              
                <Footer />
            </div>
        </>
    )
}

export default Main