import React from 'react'
import { Link } from "react-router-dom"
import Table from '../components/Table'
import Header from '../components/Header.js'
import '../css/projects.css'
import '../css/app.css'

function Projects() {
  const projectsApi = 'http://localhost:5000/api/projects'
  const projectsTableHeader = ["Project Name", "Description", "Management"]

  return (
    <div className='projects-page-container'>
      <Link to={'/projects/create'} className='create-project-btn'>Create a new Project</Link>
      <div className='projects-list-container'>
        <Header title={"Your Projects"} description={"All of the Projects that you have access to in the database."}/>
      <Table header={projectsTableHeader} api={projectsApi}/>
      </div>
    </div>
  )
}

export default Projects