import React from 'react'
import { Link } from 'react-router-dom'
import '../css/managementButtons.css'

function ManagementButtons({link1, link2}) {
  return (
    <td key={'buttons'} className='buttons'>
      <Link key={'/projects'} to={link2}>Details</Link>
      <Link key={'/assign'} to={link1}>Users</Link>
    </td>

  )
}

export default ManagementButtons