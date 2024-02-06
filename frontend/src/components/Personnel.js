import React from 'react'
import Header from './Header'
import Table from './Table'

const api = 'http://52.3.221.82:3030/api/users'

function Personnel() {
  return (
    <div className='personnel-col'>
        <Header title={'Personnel'} description={'All of the users in the database.'}/>
        <Table header={["name", "email", "role"]} api={api}/>
  </div>
  )
}

export default Personnel