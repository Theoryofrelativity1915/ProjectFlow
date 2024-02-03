import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch.js'
import Header from '../components/Header.js';
import TicketInfo from '../components/TicketInfo'
import Table from '../components/Table.js';
import '../css/ticket.css'

const api = process.env.API.concat('tickets/')

function Ticket() {
  const [update, setUpdate] = useState(false)
  const { id } = useParams()
  const { data, loading, error } = useFetch(api.concat(id))
  const commentHeader = ["commenter", "message", "date"]
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    fetch(process.env.API.concat('tickets/').concat(data?.ticket_id).concat('/comment'), {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        message: formJson.message
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': true
      },
    })
    setUpdate(!update)
  }
  return (
    <div className='ticket-page-container'>
      <div className='ticket'>
        <Header title={`Details for this Ticket`} description={''} />
        <TicketInfo ticket={data ? data : null} />
      </div>
      <div className='comments'>
        <Header title={'Ticket Comments'} description={''} />
        <Table header={commentHeader} api={api.concat(`${id}/comments`)} key={update} />
        <div className='comment-input-container'>
          <form onSubmit={handleSubmit}>
            <input name='message' className='comment-input' required maxLength='100' />
            <button type='submit'>Add Comment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Ticket
