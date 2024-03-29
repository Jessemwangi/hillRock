import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes'

import './assets/vendors/reey-font/stylesheet.css'
import './assets/vendors/bootstrap/css/bootstrap.min.css'
import './assets/vendors/bootstrap-select/bootstrap-select.min.css'
import './assets/vendors/animate/animate.min.css'
import './assets/vendors/fontawesome/css/all.min.css'
import './assets/vendors/jquery-ui/jquery-ui.css'
import './assets/vendors/jarallax/jarallax.css'
import './assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css'
import './assets/vendors/nouislider/nouislider.min.css'
import './assets/vendors/nouislider/nouislider.pips.css'
import './assets/vendors/slick/slick.css'
import './assets/vendors/hiredots-icons/style.css'
import './assets/vendors/owl-carousel/css/owl.carousel.min.css'
import './assets/vendors/owl-carousel/css/owl.theme.default.min.css'

import './assets/css/hiredots.css'


function App() {
  return (
    <>
      <Router>
        <Routing />
      </Router>
    </>
  );
}

export default App