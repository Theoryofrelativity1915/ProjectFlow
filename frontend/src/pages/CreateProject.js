import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import '../css/createProject.css'
import Header from '../components/Header.js';

const api = 'http://localhost:3030/api/users'

function CreateProject() {
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
    const useHandleSubmit = () => {
      if(devs != null && devs.length > 0){
        console.log(devs)
        setDisplaySubmitted(true)
        fetch('http://localhost:3030/api/projects/create', {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify({
            title: title,
            description: description,
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
    <div className='create-page-container'>
        {/* <div className='create-page-header'>
            <section>Create a Project</section>
        </div> */}
        <Header title={`Create a Project`} description={''}/>
        <div className='create-project-grid'>
                <div>
                    <section>Title</section>
                    <input onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <section>Description</section>
                    <textarea onChange={e => setDescription(e.target.value)}/>
                </div>
                <div>
                    <section>Assign Developers to this Project</section>
                    <select multiple='multiple' onChange={(e) => handleUserSelected(e.target)}>
                        {data?.results.map((user, key) => <option key={key} id={user}>{user.name}</option>)}
                    </select>
                </div>
                <div className='create-project-submit'>
                    <button onClick={useHandleSubmit}>Submit</button>
                    <div className={displaySubmitted ? 'project-submitted-alert alerting' : 'project-submitted-alert'}>
                      Your project has been created.
                    </div>
                    <div className={displayError ? 'project-error-alert alerting' : 'project-error-alert'}>
                      You must select at least one developer.
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CreateProject