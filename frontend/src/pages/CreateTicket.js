import React from 'react'
import '../css/create.css'

function CreateTicket() {
  return (
    <div className='create-ticket'>
        <section>Create an initial Ticket</section>
        <section>Title</section>
        <input></input>
        <section>Description</section>
        <input></input>
        <section>Assign a Developer to this Ticket</section>
        <select></select>
        <section>Priority</section>
        <select>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>
        <section>Ticket Type</section>
        <select>
            <option>Bug/Issue</option>
            <option>UI/UX</option>
            <option>Nice to have</option>
        </select>
</div>
  )
}

export default CreateTicket