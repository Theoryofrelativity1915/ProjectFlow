import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/Table'
import { useParams } from 'react-router-dom'
import '../css/project.css'
import useFetch from '../hooks/useFetch'


function Project() {
  const projectId = useParams()
  const api = 'http://localhost:3030/api/projects/'.concat(projectId.id)
  const ticketsApi = api.concat('/tickets')
  const personnelApi = api.concat('/personnel')
  const ticketsHeader = ["title", "submitter", "developer", "status", "date", "Management"]
  const personnelHeader = ["Name", "Email", "Role"]
  const {data, loading, error } = useFetch(api)
  return (
    <div className='projects'>
      <div className='project-header'>
        <div className='project-header-title'>
          <span>Details for {data?.title}</span>
        </div>
        <div className='header-information'>
          <div className='project-title-info'>
              <section>Project Name</section>
              <section>{data?.title}</section>
          </div>
          <div className='project-title-info'>
              <section>Project Description</section>
              <section>{data?.description}</section>
          </div>
        </div>
      </div>
      <div className='information-container'>
        <div className='information' id='one'>
          <div className='informationHeader'>
            <h3>Assigned Personnel</h3>
            <p>Current Users on this Project</p>
          </div>
          {/* <Table header={personnelHeader} api={personnelApi}/> */}
        </div>
        <div className='information' id='two'>
          <div className='informationHeader'>
            <h3>Tickets for this Project</h3>
            <p>Current Tickets for this Project</p>
          </div>
          <div className='paginated-table-container'>
            <Table header={ticketsHeader} api={ticketsApi}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project