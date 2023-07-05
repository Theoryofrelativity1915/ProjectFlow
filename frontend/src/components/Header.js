import React from 'react'
import '../css/app.css'

function Header({title, description}) {
  return (
    <div className='header-container'>
        <div className='header'>
            <section>{title}</section>
            <section>{description}</section>
        </div>
    </div>
  )
}

export default Header