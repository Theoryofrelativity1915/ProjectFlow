import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../css/project.css'
import Pagination from '../components/Pagination.js'
import TicketTable from '../components/TicketTable'
import useFetch from '../hooks/useFetch'


function Project() {
  const projectId = useParams()
  const api = 'http://localhost:5000/api/projects/'.concat(projectId.id).concat("/tickets")
  const header1Data = ["Title", "Submitter", "Developer", "Status", "Date Created", "Management"]
  const header2Data = ["User Name", "Email", "Role"]
  const {data, loading, error } = useFetch(api)

  return (
    <div className='projects'>
      <div className='project-header'>
        <div className='project-header-title'>
          <span>Details for {data?.name}</span>
        </div>
        <div className='header-information'>
          <div className='project-title-info'>
              <section>Project Name</section>
              <section>{"sample"}</section>
          </div>
          <div className='project-title-info'>
              <section>Project Description</section>
              <section>{"sample"}</section>
          </div>
        </div>
      </div>
      <div className='information-container'>
        <div className='information' id='one'>
          <div className='informationHeader'>
            <h3>Assigned Personnel</h3>
            <p>Current Users on this Project</p>
          </div>
        </div>
        <div className='information' id='two'>
          <div className='informationHeader'>
            <h3>Tickets for this Project</h3>
            <p>Current Tickets for this Project</p>
          </div>
              <div className='paginated-table-container'>
      {/* <div className='navigation'>
        <section><input placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/></section>
        <section style={{marginLeft: "2px"}}>Show
          <select defaultValue={"10"} style={{width: "2.5rem", marginLeft: "2px"}} onChange={(e) => {console.log(e.target.value)}}>
            <option value={"5"}>5</option>
            <option value={"10"}>10</option>
            <option value={"15"}>15</option>
          </select> entries
        </section>
      </div> */}
      {/* <table className='paginated-table'>
        <tbody>
          <tr>{header.map((col, key) => (<th key={key}>{col}</th>))}</tr>
          {data ? data.results.map((object) => (<tr key={object.id} id={object.id}>{header.map((col, key) => (col != "Management") ? (<td key={key}>{object[col]}</td>) : <td key={'buttons'}>
          <Link key={'/assign'} to={'/assign'}>Manage Users</Link>
          <Link key={'/tickets'} to={'/tickets/'.concat(object.id)}>Details</Link>
          </td>)}
          </tr>)) : <tr key={'loading-row'}><td key={'Loading'}>Loading</td></tr>}
        </tbody>
      </table>
      <ul className='paginated-table-list'>
        {pageNumbers.map(num => (<button key={num} id={num} className={num} onClick={(e) => setPage(e.target.id)}>{num}</button>))}
      </ul> */}
      <TicketTable/>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Project