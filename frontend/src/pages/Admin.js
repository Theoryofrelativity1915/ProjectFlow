import React, { useState } from 'react'
import Pagination from '../components/Pagination.js'
import '../css/admin.css'
import '../css/pagination.css'

function Admin() {
  const [users, setUsers] = useState([])
  const [role, setRole] = useState(null)
  const options = ["Project Manager", "Demo Admin", "Developer"]
  const handleUserSelected = (options) => {
    let selectedUsers = []
    for (let i = 0; i < options.length; i++){
      if(options[i].selected){
        selectedUsers.push(options[i].value)
      }
    }
    setUsers(selectedUsers)
  }
  return (
    <div className='admin-page-container'>
      {/* <div className='user-selection-col'>
        <div>
          <section className='admin-title'>Manage User Roles</section>
          <section>Select 1 or more Users</section>
          <select multiple='multiple' onChange={(e) => handleUserSelected(e.target)}>
            {availableUsers.map((user, key) => <option key={key} id={user}>{user.name}</option>)}
          </select>
        </div>
        <div>
          <section>Select the Role to assign</section>
          <select onChange={(e) => setRole(e.target.value)}>
            <option value="" disabled selected>Select Role</option>
            {options.map((option, key) => <option key={key} id={option}>{option}</option>)}
          </select>
          <button className='submit-button' onClick={() => console.log(users, role)}>Submit</button>
        </div>
      </div>
      <div className='personnel-col'>
        <div className='personnel-col-header'>
          <section>Your Personnel</section>
          <section>All of the users in your database.</section>
        </div>
        <Pagination header={["User Name", "Email", "Role"]} array={availableUsers}/>
      </div> */}
    </div>
  )
}

export default Admin