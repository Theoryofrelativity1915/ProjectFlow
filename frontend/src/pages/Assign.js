import React from 'react'
import Personnel from '../components/Personnel'
import AssignPersonnelForm from '../components/forms/AssignPersonnelForm'
import '../css/assign.css'

function Assign() {

  return (
    <div className='assign-page-container'>
      <AssignPersonnelForm/>
      <Personnel/>
    </div>
  )
}

export default Assign