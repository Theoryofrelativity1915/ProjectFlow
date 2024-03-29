import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Table from '../components/Table'
import useFetch from '../hooks/useFetch'
import Error from './Error'
import '../css/projects.css'

function Tickets() {
  const ticketsApi = 'http://52.3.221.82:3030/api/tickets'
  const ticketTableHeader = ["title", "Project Name", "developer", "priority", "date", "Management"]
  return (
    <div className='projects-page-container'>
      <Link to={'/tickets/create'} className='create-project-btn'>Create a new Ticket</Link>
      <div className='projects-list-container'>
        <Header title={"Your Tickets"} description={"All of the Tickets that you have access to in the database."}/>
        <Table header={ticketTableHeader} api={ticketsApi}/>
    </div>
  </div>
  )
}

export default Tickets