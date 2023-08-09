import React from 'react'
import { Link } from 'react-router-dom'

function ManagementButtons({link1, link2}) {
  return (
    <td key={'buttons'}>
      <Link key={'/assign'} to={link1}>Manage Users</Link>
      <Link key={'/projects'} to={link2}>Details</Link>
    </td>

  )
}

export default ManagementButtons