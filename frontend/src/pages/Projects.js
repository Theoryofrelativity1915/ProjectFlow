import React from 'react'
import '../css/projects.css'

function Projects() {
  const tempTitleData = "Project 1"
  const tempDescription = "Project 1 description"
  return (
    <div className='projects'>
      <div className='header'>
        <div className='title'>
          <span>Details for {tempTitleData}</span>
        </div>
        <div className='header-information'>
          <div>
              <section>Project Name</section>
              <section>{tempTitleData}</section>
          </div>
          <div>
              <section>Project Description</section>
              <section>{tempDescription}</section>
          </div>
        </div>
      </div>
      <div className='information-container'>
        <div className='information' id='one'>
          <div className='information-header'>
            <h3>Assigned Personnel</h3>
            <p>Current Users on this Project</p>
          </div>
        </div>
        <div className='information' id='two'>
          <div className='information-header'>
            <h3>Assigned Personnel</h3>
            <p>Current Users on this Project</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects