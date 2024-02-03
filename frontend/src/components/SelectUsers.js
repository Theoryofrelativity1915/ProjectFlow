import React from 'react'
import useFetch from '../hooks/useFetch'
import '../css/selectUsers.css'

const userApi = process.env.API.concat('users')


function SelectUsers({ getSelectedUsers, allowMultipleSelect, defaultValue }) {
  const { data, loading, error } = useFetch(userApi)

  const handleUserSelected = (options) => {
    let selectedUsers = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedUsers.push(options[i].value)
      }
    }
    getSelectedUsers(selectedUsers)

  }
  return (
    <div className='select-users'>
      <section>Select 1 or more Users</section>
      <div>
        <select multiple={allowMultipleSelect ? 'multiple' : ''} onChange={(e) => handleUserSelected(e.target)} name='users' defaultValue={defaultValue}>
          {data?.results.map((user, key) => <option key={key} id={user}>{user.name}</option>)}
        </select>
      </div>
    </div>
  )
}

export default SelectUsers
