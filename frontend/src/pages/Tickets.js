import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import TicketTable from '../components/TicketTable'
import Table from '../components/Table'
import useFetch from '../hooks/useFetch'
import Error from './Error'
import '../css/projects.css'

function Tickets() {
  const ticketsApi = 'http://localhost:3030/api/tickets'
  const ticketTableHeader = ["title", "Project Name", "developer", "priority", "date", "Management"]
  return (
    <div className='projects-page-container'>
      <div className='projects-list-container'>
        <Header title={"Your Tickets"} description={"All of the Tickets that you have access to in the database."}/>
        <Table header={ticketTableHeader} api={ticketsApi}/>
    </div>
  </div>
  )
}

export default Tickets