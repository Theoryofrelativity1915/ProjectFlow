import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import '../css/createTicket.css'
const userApi = 'http://localhost:3030/api/users'
const projectApi = 'http://localhost:3030/api/projects'

function CreateTicket() {
  const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dev, setDev] = useState(null)
    const [project, setProject] = useState(null)
    const [displaySubmitted, setDisplaySubmitted] = useState(false)
    const [displayError, setDisplayError] = useState(false)
    const { data: userData, loading: userLoading, error: userError } = useFetch(userApi)
    const { data: projectData, loading: projectLoading, error: projectError } = useFetch(projectApi)
    const useHandleSubmit = () => {
      
        setDisplaySubmitted(true)
        // fetch('http://localhost:3030/api/projects/create', {
        //   method: 'POST',
        //   mode: 'cors',
        //   credentials: 'include',
        //   body: JSON.stringify({
        //     title: title,
        //     description: description,
        //     users: devs,
        //   }),
        //   headers: {
        //     'Content-type': 'application/json; charset=UTF-8',
        //     'Access-Control-Allow-Origin': true
        //   },
        // })
        // setDisplayError(true)
    }
  return (
    <div className='create-ticket'>
        <Header title={'Create a Ticket'}/>
        <div className='row'>
          <div>
            <section>Title</section>
            <input></input>
          </div>
          <div>
            <section>Description</section>
            <textarea/>
          </div>
        </div>
        <div className='row'>
          <div>
            <section>Assign a Developer to this Ticket</section>
            <select onChange={(e) => setDev(e.target.value)}>
                {userData?.results.map((user, key) => <option key={key} id={user}>{user.name}</option>)}
            </select>
          </div>
          <div>
          <section>Priority</section>
          <select>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
          </select>
          </div>
        </div>
        <div className='row'>
          <div>
            <section>Ticket Type</section>
            <select>
                <option>Bug/Issue</option>
                <option>UI/UX</option>
                <option>Nice to have</option>
            </select>
          </div>
          <div>
            <section>Device Type</section>
            <select>
                <option>Desktop</option>
                <option>Mobile</option>
                <option>Both</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div>
            <section>Which Project is this ticket for?</section>
          <select onChange={(e) => setProject(e.target.value)}>
                {projectData?.results.map((project, key) => <option key={key} id={project}>{project.title}</option>)}
            </select>
          </div>
          <div>
            <button onClick={useHandleSubmit}>Submit</button>
            <div className={displaySubmitted ? 'ticket-submitted-alert alerting' : 'ticket-submitted-alert'}>
              Your ticket has been created.
            </div>
            <div className={displayError ? 'ticket-error-alert alerting' : 'ticket-error-alert'}>
              You must select a developer.
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateTicket