import React from 'react'
import { Link } from "react-router-dom"
import ProjectTable from '../components/ProjectTable'
import Header from '../components/Header.js'
import '../css/projects.css'
import '../css/app.css'

function Projects() {
  return (
    <div className='projects-page-container'>
      <Link to={'/projects/create'} className='create-project-btn'>Create a new Project</Link>
      <div className='projects-list-container'>
        <Header title={"Your Projects"} description={"All of the Projects that you have access to in the database."}/>
      <ProjectTable/>
      </div>
    </div>
  )
}

export default Projects