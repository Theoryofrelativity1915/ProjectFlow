import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import '../css/selectUsers.css'

const userApi = 'http://localhost:5000/api/users'


function SelectUsers({ getSelectedUsers, allowMultipleSelect }) {
    const { data, loading, error } = useFetch(userApi)

    const handleUserSelected = (options) => {
        let selectedUsers = []
        for (let i = 0; i < options.length; i++){
          if(options[i].selected){
            selectedUsers.push(options[i].value)
          }
        }
        // setUsers(selectedUsers)
        getSelectedUsers(selectedUsers)

      }
  return (
    <div className='select-users'>
    <section>Select 1 or more Users</section>
    <div>
      <select multiple={allowMultipleSelect ? 'multiple' : ''} onChange={(e) => handleUserSelected(e.target)}>
        {data?.results.map((user, key) => <option key={key} id={user}>{user.Name}</option>)}
      </select>
    </div>
  </div>
  )
}

export default SelectUsers