import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import '../css/createProject.css'
import Header from '../components/Header.js';
import CreateProjectForm from '../components/forms/CreateProjectForm';

const api = 'http://52.3.221.82:3030/api/users'

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
        fetch('http://52.3.221.82:3030/api/projects/create', {
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
        <Header title={`Create a Project`} description={''}/>
        <CreateProjectForm/>
    </div>
  )
}

export default CreateProject