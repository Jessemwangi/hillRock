import React from 'react'
import HeaderTwo from '../HeaderTwo/Main'
import Slidertwo from '../Menhometwo/Slidertwo'
import Abttwo from '../Menhometwo/Abttwo'
import Ctafour from '../Menhometwo/Ctafour'
import Service from '../Menhomeone/Service'
import WorkProcess from '../Menhometwo/WorkProcess'
import Projecttwo from '../Menhometwo/Projecttwo'
import Ctahometwo from '../Menhometwo/Ctahometwo'
import Testimonialtwo from '../Menhometwo/Testimonialtwo'
import Teammember from '../Menhometwo/Teammember'
import ContactformTwo from '../Menhometwo/ContactformTwo'
import Blog from '../Menhomeone/Blog'
import Clienttwo from '../Menhometwo/Clienttwo'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <HeaderTwo />
                <Slidertwo />
                <Abttwo />
                <Ctafour />
                <Service />
                <WorkProcess />
                <Projecttwo />
                <Ctahometwo />
                <Testimonialtwo />
                <Teammember />
                <ContactformTwo />
                <Blog />
                <Clienttwo />
                <Footer />
            </div>
        </>
    )
}

export default Main