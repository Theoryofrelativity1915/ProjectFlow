import React from 'react'

function SelectRole({getSelectedRole}) {
    const options = ["Project Manager", "Demo Admin", "Developer"]
  return (
    <div>
        <section>Select the Role to assign</section>
            <select onChange={(e) => getSelectedRole(e.target.value)}>
                <option value="" disabled selected>Select Role</option>
                {options.map((option, key) => <option key={key} id={option}>{option}</option>)}
            </select>
      
    </div>
  )
}

export default SelectRole