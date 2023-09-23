import React, { useState, useRef } from 'react'
import Personnel from '../components/Personnel'
import SelectUsers from '../components/SelectUsers.js'
import SelectRole from '../components/SelectRole.js'
import useFetch from '../hooks/useFetch'
import '../css/assign.css'
import '../css/admin.css'
const projectsApi = 'http://localhost:3030/api/projects'
const ticketsApi = 'http://localhost:3030/api/tickets'
const userApi = 'http://localhost:3030/api/users'


function Assign() {
  const [role, setRole] = useState(null)
  const [users, setUsers] = useState(null)
  const [type, setType] = useState("Project")
  
  const [selectedTask, setSelectedTask] = useState(null)
  const { data: ticketsData, loading: ticketsLoading, error: ticketsError } = useFetch(ticketsApi)
  const { data: projectsData, loading: projectsLoading, error: projectsError } = useFetch(projectsApi)
  const projects = useRef([]);
  const tickets  = useRef([])
  const [tasks, setTasks] = useState([])
  

  const handleTaskType = (e) => {
    setType(e.target.value)
    if (e.target.value == "Ticket"){
      setTasks(tickets.current)
    }
    else {
      setTasks(projects.current)
    }
  }
  const getSelectedUsers = (selectedUsers) => {
    setUsers(selectedUsers)
  }
  const getSelectedRole = (selectedRole) => {
    setRole(selectedRole)
  }

  if(tasks.length == 0 && projectsData){
    var projectsArray = []
    var ticketsArray = []
    projectsData.results.map(project => projectsArray.push(project.title))
    projects.current = projectsArray
    ticketsData.results.map(ticket => ticketsArray.push(ticket.title))
    tickets.current = ticketsArray
    console.log(projects)
    setTasks(projects.current)
  }

  return (
    <div className='assign-page-container'>
      <div className='user-selection-col'>
          <section className='admin-title'>Manage Task Assignments</section>
          <div className='user-selection-upper'>
            <SelectUsers getSelectedUsers={getSelectedUsers} allowMultipleSelect={type === "Project"}/>
            <div className='select-type'>
              <div>
                <section>Type</section>
                <section>Select Task to assign to</section>
              </div>
              <div>
                <select onChange={(e) => handleTaskType(e)}>
                  <option>
                    Project
                  </option>
                  <option>
                    Ticket
                  </option>
                </select>
                <select onChange={(e) => setSelectedTask(e.target.value)}>
                  {tasks?.map(task => <option>{task}</option>)}
                </select>
              </div>
            </div>
          </div>

        {/* <div>
          <section>Select the Role to assign</section>
          <select onChange={(e) => setRole(e.target.value)}>
            <option value="" disabled selected>Select Role</option>
            {options.map((option, key) => <option key={key} id={option}>{option}</option>)}
          </select>
          <button className='submit-button' onClick={() => console.log(users, role)}>Submit</button>
        </div> */}
        <SelectRole getSelectedRole={getSelectedRole}/>
        <button className='submit-button' onClick={() => console.log("Complete submission on Assign page")}>Submit</button>
      </div>
      <Personnel/>
    </div>
  )
}

export default Assign