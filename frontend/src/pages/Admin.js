import React, { useState } from 'react'
import Header from '../components/Header'
import SelectUsers from '../components/SelectUsers.js'
import SelectRole from '../components/SelectRole'
import Table from '../components/Table'
import '../css/admin.css'

const api = 'http://localhost:3030/api/users'

function Admin() {
  const [users, setUsers] = useState(null)
  const [role, setRole] = useState(null)
  const getSelectedUsers = (selectedUsers) => {
    setUsers(selectedUsers)
  }

  const getSelectedRole = (selectedRole) => {
    setRole(selectedRole)
  }

  return (
    <div className='admin-page-container'>
      <div className='user-selection-col'>
        <div>
          <section className='admin-title'>Manage User Roles</section>
          <SelectUsers getSelectedUsers={getSelectedUsers} allowMultipleSelect={true}/>
        </div>
        <SelectRole getSelectedRole={getSelectedRole}/>
        
      </div>
      <div className='personnel-col'>
        <Header title={'Personnel'} description={'All of the users in the database.'}/>
        <Table header={["Name", "Email", "Role"]} api={api}/>

      </div>
    </div>
  )
}

export default Admin