import { React } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import CreateTicketForm from '../components/forms/CreateTicketForm'
import '../css/createTicket.css'
import '../css/buttons.css'


function CreateTicket() {
  const { state } = useLocation()
  var id

  if (state && state.id) {
    id = state.id
  }
  else {
    id = null
  }


  return (
    <div className='create-ticket'>
      <Header title={'Create a Ticket'} />
      <CreateTicketForm id={id} />
    </div>
  )
}

export default CreateTicket
