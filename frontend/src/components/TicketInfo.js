import React from 'react'

function TicketInfo({ticket}) {
  return (
    <div className='ticket-info'>
            <div>
              <div>
                <section>Ticket Title</section>
                <section>Ticket Description</section>
                <section>{ticket?.title}</section>
                <section>{ticket?.description}</section>
              </div>
              <div>
                <section>Assigned Developer</section>
                <section>Submitter</section>
                <section>{ticket?.developer}</section>
                <section>{ticket?.submitter}</section>
              </div>
              <div>
                <section>Project</section>
                <section>Priority</section>
                <section>{ticket?.project}</section>
                <section>{ticket?.priority}</section>
              </div>
              <div>
                <section>Status</section>
                <section>Date Created</section>
                <section>{ticket?.status ? 'Open' : 'Closed'}</section>
                <section>{ticket?.date.slice(5, 10).concat('-').concat(ticket?.date.substring(0, 4))}</section>
              </div>
              </div>
    </div>
  )
}

export default TicketInfo