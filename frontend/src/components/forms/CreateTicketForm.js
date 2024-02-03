import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import '../../css/createTicket.css'
import '../../css/buttons.css'

const userApi = process.env.concat('users')
const projectApi = process.env.concat('projects')


function CreateTicketForm({ id }) {
  const navigate = useNavigate()
  const [dev, setDev] = useState('688cc9bb-dae0-43ea-a2fd-503195826643')
  const [displaySubmitted, setDisplaySubmitted] = useState(false)
  const { data: userData, loading: userLoading, error: userError } = useFetch(userApi)
  const { data: projectData, loading: projectLoading, error: projectError } = useFetch(projectApi)
  const useHandleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    setDisplaySubmitted(true)
    fetch(process.env.concat('tickets/create'), {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        title: formJson.title,
        description: formJson.description,
        dev: dev,
        priority: formJson.priority,
        type: formJson.type,
        deviceType: formJson.deviceType,
        projectTitle: formJson.projectTitle,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': true
      },
    })
    navigate('/tickets')
  }
  const handle = (name) => {
    for (let i = 0; i < userData?.length; i++) {
      if (name == userData.results[i][name]) {
        setDev(userData.results[i].user_id)
      }
    }
  }
  return (
    <form onSubmit={useHandleSubmit}>
      <div className='row'>
        <div>
          <section>Title</section>
          <input required name="title"></input>
        </div>
        <div>
          <section>Description</section>
          <textarea required name="description" />
        </div>
      </div>
      <div className='row'>
        <div>
          <section>Assign a Developer</section>
          <select onChange={(e) => handle(e.target.value)} name='developer' defaultValue={"Joseph Clark"}>
            {userData?.results.map((user, key) => <option key={key} id={user}>{user.name}</option>)}
          </select>
        </div>
        <div>
          <section>Priority</section>
          <select name='priority'>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>
      <div className='row'>
        <div>
          <section>Ticket Type</section>
          <select name='type'>
            <option>Bug/Issue</option>
            <option>UI/UX</option>
            <option>Nice to have</option>
          </select>
        </div>
        <div>
          <section>Device Type</section>
          <select name='deviceType'>
            <option>Desktop</option>
            <option>Mobile</option>
            <option>Both</option>
          </select>
        </div>
      </div>
      <div className='row'>
        <div className='project-select'>
          <section>Which Project is this ticket for?</section>
          <select name='projectTitle'>
            {projectData?.results.map((project, key) => <option key={key} id={project.project_id} selected={project.project_id == id ? true : false}>{project.title}</option>)}
          </select>
        </div>
        <div>
          <button type='submit' className='general-button'>Submit</button>
          <div className={displaySubmitted ? 'ticket-submitted-alert alerting' : 'ticket-submitted-alert'}>
            Your ticket has been created.
          </div>
        </div>
      </div>
    </form>
  )
}

export default CreateTicketForm
