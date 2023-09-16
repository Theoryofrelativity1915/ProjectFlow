import React, { useState } from 'react'
import Personnel from '../components/Personnel'
import SelectUsers from '../components/SelectUsers.js'
import SelectRole from '../components/SelectRole'
import '../css/admin.css'


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
      <Personnel/>
    </div>
  )
}

export default Admin