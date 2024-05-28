import React, { useEffect, useState } from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Projectdtls from '../Menprojectdetails/Projectdtls'
import Projectone from '../Menprojectdetails/Projectone'
import Footer from '../Footer/Main'
import { useParams } from 'react-router-dom'
import { projectData } from '../../data/projectData'

function Main() {
    const { id } = useParams();
    const[project,setProject] =useState([])

    useEffect(()=>
    {
        setProject(projectData.filter(({project_id}) => project_id ==id));
    },[id])
   console.log(project)
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="Projects Details" />
                <Projectdtls project={project} /> 
                <Projectone />
                <Footer />
            </div>
        </>
    )
}

export default Main