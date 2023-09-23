import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch.js'
import Header from '../components/Header.js';
import TicketInfo from '../components/TicketInfo'
import Table from '../components/Table.js';
import CommentSection from '../components/CommentSection'
import '../css/ticket.css'

const api = 'http://localhost:3030/api/tickets/'

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
          <TicketInfo/>
        </div>
        <div className='comments'>
          <Header title={'Ticket Comments'} description={''}/>
          <Table header={commentHeader} api={api.concat(`${id}/comments`)}/>
          {/* <CommentSection/> */}
        </div>
    </div>
  )
}

export default Ticket