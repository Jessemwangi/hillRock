import React from 'react'
import { Route, Routes, } from 'react-router-dom';
import Homeone from '../components/Homeone/Main';
import HomeTwo from '../components/HomeTwo/Main'
import HomeThree from '../components/HomeThree/Main'
import About from '../components/About/Main';
import TeamDetails from '../components/TeamDetails/Main'
import Jobs from '../components/Jobs/Main'
import History from '../components/History/Main'
import Faq from '../components/Faq/Main'
import Services from '../components/Services/Main'
import ServiceConsulting from '../components/Service-Consulting/Main'
import ServiceResources from '../components/Service-resources/Main'
import ServiceHydro from '../components/Service-Hydro/Main'
import ServiceProgram from '../components/Service-Program/Main'
import ServiceTraining from '../components/Service-Training/Main'
import ServiceManagement from '../components/Service-Management/Main'
import Project from '../components/Project/Main'
import ProjectDetails from '../components/ProjectDetails/Main'
import Blog from '../components/Blog/Main'
import BlogDetails from '../components/BlogDetails/Main'
import Contact from '../components/Contact/Main';

function index() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homeone />} />
                <Route path='/hometwo' element={<HomeTwo />} />
                <Route path='/homethree' element={<HomeThree />} />
                <Route path="/about" element={<About />} />
                <Route path="/teamdetails" element={<TeamDetails />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/history" element={<History />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service-consulting" element={<ServiceConsulting />} />
                <Route path="/service-resources" element={<ServiceResources />} />
                <Route path="/service-hydro" element={<ServiceHydro />} />
                <Route path="/service-program" element={<ServiceProgram />} />
                <Route path="/service-training" element={<ServiceTraining />} />
                <Route path="/service-management" element={<ServiceManagement />} />
                <Route path="/project" element={<Project />} />
                <Route path="/project-details" element={<ProjectDetails />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-details" element={<BlogDetails />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default index