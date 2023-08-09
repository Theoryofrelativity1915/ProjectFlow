import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import '../css/create.css'

const api = 'http://localhost:5000/api/users'

function CreateProject() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [devs, setDevs] = useState(null)
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
    console.log("Fix submit button in Create Project File")
  return (
    <div className='create-page-container'>
        <div className='create-page-header'>
            <section>Create a Project</section>
        </div>
        <div className='create-project-grid'>
                <div>
                    <section>Title</section>
                    <input/>
                </div>
                <div>
                    <section>Description</section>
                    <textarea/>
                </div>
                <div>
                    <section>Assign Developers to this Project</section>
                    <select multiple='multiple' onChange={(e) => handleUserSelected(e.target)}>
                        {data?.results.map((user, key) => <option key={key} id={user}>{user.Name}</option>)}
                    </select>
                </div>
                <div>
                    <button onClick={() => navigate(-1)}>Submit</button>
                </div>
            </div>
    </div>
  )
}

export default CreateProject