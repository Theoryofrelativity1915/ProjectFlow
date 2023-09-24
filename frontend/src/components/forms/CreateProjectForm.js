import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const api = 'http://localhost:3030/api/users'

function CreateProjectForm() {
  const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [devs, setDevs] = useState(null)
    const [displaySubmitted, setDisplaySubmitted] = useState(false)
    const [displayError, setDisplayError] = useState(false)
    const { data, loading, error } = useFetch(api)
    const handleUserSelected = (options) => {
      let selectedUsers = []
      for (let i = 0; i < options.length; i++){
        if(options[i].selected){
          selectedUsers.push(options[i].value)
        }
      }
      setDevs(selectedUsers)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      const formJson = Object.fromEntries(formData.entries())
      if(devs != null && devs.length > 0){
        console.log("Submitting")
        setDisplaySubmitted(true)
        fetch('http://localhost:3030/api/projects/create', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify({
              title: formJson.title,
              description: formJson.description,
              users: devs,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Access-Control-Allow-Origin': true
            },
          })
        setTimeout(() => navigate(-1), 1000)
      }
      else{
        console.log('error')
        setDisplayError(true)
      }
      setTimeout(() => {setDisplayError(false)}, 1500)
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className='col'>
        <section>Title</section>
        <input required maxLength={99} name="title" type='title'/>
        <section>Description</section>
        <textarea required maxLength={249} name="description" type='description'/>
      </div>
      <div className='col'>
      <div className='developers-list'>
          <section>Assign Developers</section>
            <select multiple='multiple' onChange={(e) => handleUserSelected(e.target)}>
            {data?.results.map((user, key) => <option key={key} id={user}>{user.name}</option>)}
            </select>
        </div>
        
        <div className='create-project-submit'>
          <button type='submit' className='general-button'>Submit</button>
          <div className={displaySubmitted ? 'project-submitted-alert alerting' : 'project-submitted-alert'}>
            Your project has been created.
          </div>
        </div>
      </div>
    </form>
        
  )
}

export default CreateProjectForm