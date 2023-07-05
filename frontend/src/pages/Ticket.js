import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch.js'
import '../css/ticket.css'
import TicketTable from '../components/TicketTable.js'
import Pagination from '../components/Pagination.js'

function Ticket() {
  const {id} = useParams()
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/1")
  const header = ["Commenter", "Message", "Created"]

  return (
    <div className='ticket-page-container'>
      {/* <div className='ticket-comments-container'>
        <div className='ticket'>
          <div className='ticket-header'>
            <span>Details for ticket {ticket.number}</span>
          </div>
          <TicketTable ticket={ticket}/>
        </div>
        <div className='comments'>
          <div className='comments-header'>
            <span>Ticket Comments</span>
          </div>
          <Pagination array={comments} header={header}/>
          <div className='comment-input-container'>
            <input className='comment-input'/>
            <button>Add Comment</button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Ticket