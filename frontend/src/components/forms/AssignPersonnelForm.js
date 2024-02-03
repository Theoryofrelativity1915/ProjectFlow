import React, { useState, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import SelectUsers from '../SelectUsers.js'
import SelectRole from '../SelectRole.js'
import '../../css/assign.css'
const api = process.env.api
const projectsApi = api.concat('projects')
const ticketsApi = api.concat('tickets')

function AssignPersonnelForm() {
  const [users, setUsers] = useState([])
  const [type, setType] = useState("Project")
  const { data: ticketsData, loading: ticketsLoading, error: ticketsError } = useFetch(ticketsApi)
  const { data: projectsData, loading: projectsLoading, error: projectsError } = useFetch(projectsApi)
  const projects = useRef([]);
  const tickets = useRef([])
  const [tasks, setTasks] = useState([])


  const handleTaskType = (e) => {
    setType(e.target.value)
    if (e.target.value == "Ticket") {
      setTasks(tickets.current)
    }
    else {
      setTasks(projects.current)
    }
  }
  const getSelectedUsers = (selectedUsers) => {
    setUsers(selectedUsers)
  }

  if (tasks.length == 0 && projectsData) {
    var projectsArray = []
    var ticketsArray = []
    projectsData.results.map(project => projectsArray.push(project.title))
    projects.current = projectsArray
    ticketsData?.results.map(ticket => ticketsArray.push(ticket.title))
    tickets.current = ticketsArray
    setTasks(projects.current)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    fetch(api.concat('users/assign'), {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        users: users,
        type: formJson.type,
        task: formJson.task,
        role: formJson.role,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': true
      },
    })
  }

  return (
    <form className='assign-form' onSubmit={handleSubmit}>
      <div className='user-selection-col'>
        <section className='admin-title'>Manage Task Assignments</section>
        <div className='user-selection-upper'>
          <SelectUsers getSelectedUsers={getSelectedUsers} allowMultipleSelect={type === "Project"} defaultValue={users.length == 1 ? users[0] : 'Joseph Clark'} />
          <div className='select-type'>
            <div className='task-info'>
              <section>Type</section>
              <section>Select Task to assign to</section>
            </div>
            <div className='task-type'>
              <select onChange={(e) => handleTaskType(e)} name='type'>
                <option>
                  Project
                </option>
                <option>
                  Ticket
                </option>
              </select>
              <select name='task' className='tasks'>
                {tasks?.map(task => <option>{task}</option>)}
              </select>
            </div>
          </div>
        </div>
        <SelectRole type={type} />
        <button className='general-button' type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default AssignPersonnelForm
