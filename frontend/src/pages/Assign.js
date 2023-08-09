import React, { useState } from 'react'
import Header from '../components/Header'
import SelectUsers from '../components/SelectUsers.js'
import SelectRole from '../components/SelectRole.js'
import Table from '../components/Table'
import '../css/assign.css'

const projectsApi = 'http://localhost:5000/api/projects'
const ticketsApi = 'http://localhost:5000/api/tickets'
const userApi = 'http://localhost:5000/api/users'


function Assign() {
  const [role, setRole] = useState(null)
  const [users, setUsers] = useState(null)
  const [type, setType] = useState("Project")
  const [task, setTask] = useState(null)
  
  const getSelectedUsers = (selectedUsers) => {
    setUsers(selectedUsers)
  }
  const getSelectedRole = (selectedRole) => {
    setRole(selectedRole)
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
                <select onChange={(e) => setType(e.target.value)}>
                  <option>
                    Project
                  </option>
                  <option>
                    Ticket
                  </option>
                </select>
                <select onChange={(e) => setTask(e.target.value)}>
                  <option>
                    Example 1
                  </option>
                </select>
              </div>
            </div>
          </div>
{/* 
        <div>
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
      <div className='personnel-col'>
        <Header title={'Personnel'} description={'All of the users in the database.'}/>
        <Table header={["Name", "Email", "Role"]} api={userApi}/>
      </div>
    </div>
  )
}

export default Assign