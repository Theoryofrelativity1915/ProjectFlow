import React from 'react'

function SelectRole({type}) {
    const options = ["Project Manager", "Demo Admin", "Developer"]
  return (
    <div className='select-role'>
      <section>Select the Role to assign</section>
        <select name='role'>
          <option value="" disabled selected>Select Role</option>
          {type == 'Project' ? options.map((option, key) => <option key={key} id={option}>{option}</option>) : <option>Roles are not changeable for tickets.</option>}
      </select>
    </div>
  )
}

export default SelectRole