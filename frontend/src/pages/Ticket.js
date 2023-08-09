import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch.js'
import Header from '../components/Header.js';
import Table from '../components/Table.js';
import '../css/ticket.css'
import TicketTable from '../components/TicketTable.js'
import Pagination from '../components/Pagination.js'

const api = 'http://localhost:5000/api/tickets/'

function Ticket() {
  const {id} = useParams()
  const { data, loading, error } = useFetch(api.concat(id))
  const ticketHeader = ["Title", "Project Name", "Developer", "Priority", "Status", "Date Created", "Management"]
  const commentHeader = ["Commenter", "Message", "Date Created"]
  const ticket = data
  return (
    <div className='ticket-page-container'>
        <div className='ticket'>
          <Header title={`Details for this Ticket`} description={''}/>
          <div className='ticket-info'>
            <div>
              <div>
                <section>Ticket Title</section>
                <section>Ticket Description</section>
                <section>{ticket?.Title}</section>
                <section>{ticket?.Description}</section>
              </div>
              <div>
                <section>Assigned Developer</section>
                <section>Submitter</section>
                <section>{ticket?.Developer}</section>
                <section>{ticket?.Submitter}</section>
              </div>
              <div>
                <section>Project</section>
                <section>Priority</section>
                <section>{ticket?.['Project Name']}</section>
                <section>{ticket?.Priority}</section>
              </div>
              <div>
                <section>Status</section>
                <section>Date Created</section>
                <section>{ticket?.Status}</section>
                <section>{ticket?.["Date Created"]}</section>
              </div>
              </div>
          </div>
        </div>
        <div className='comments'>
          <Header title={'Ticket Comments'} description={''}/>
          <Table header={commentHeader} api={api.concat(`${id}/comments`)}/>
          <div className='comment-input-container'>
            <input className='comment-input'/>
            <button>Add Comment</button>
          </div>
        </div>
    </div>
  )
}

export default Ticket