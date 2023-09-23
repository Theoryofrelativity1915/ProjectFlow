import React from 'react'

function TicketInfo() {
    const ticket = {}
    
  return (
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
  )
}

export default TicketInfo