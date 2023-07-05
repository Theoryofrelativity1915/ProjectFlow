import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../css/table.css'

function TicketTable() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [search, setSearch] = useState("")
  const pageNumbers = []
  const api = 'http://localhost:5000/api/tickets'.concat("?page=").concat(page).concat("&limit=").concat(limit).concat("&search=").concat(search)
  const header = ["Title", "Project Name", "Developer", "Priority", "Status", "Date Created", "Management"]
  const { data, loading, error } = useFetch(api)
  if(data){
      for (let i = 1; i <= data.totalPages; i++) {
        pageNumbers.push(i)
    }
  }
  return (
    <div className='paginated-table-container'>
      <div className='navigation'>
        <section><input placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/></section>
        <section style={{marginLeft: "2px"}}>Show
          <select defaultValue={"10"} style={{width: "2.5rem", marginLeft: "2px"}} onChange={(e) => {console.log(e.target.value)}}>
            <option value={"5"}>5</option>
            <option value={"10"}>10</option>
            <option value={"15"}>15</option>
          </select> entries
        </section>
      </div>
      <table className='paginated-table'>
        <tbody>
          <tr>{header.map((col, key) => (<th key={key}>{col}</th>))}</tr>
          {data ? data.results.map((object) => (<tr key={object.id} id={object.id}>{header.map((col, key) => (col != "Management") ? (<td key={key}>{object[col]}</td>) : <td key={'buttons'}>
          <Link key={'/assign'} to={'/assign'}>Manage Users</Link>
          <Link key={'/tickets'} to={'/tickets/'.concat(object.id)}>Details</Link>
          </td>)}
          </tr>)) : <tr key={'loading-row'}><td key={'Loading'}>Loading</td></tr>}
        </tbody>
      </table>
      <ul className='paginated-table-list'>
        {pageNumbers.map(num => (<button key={num} id={num} className={num} onClick={(e) => setPage(e.target.id)}>{num}</button>))}
      </ul>
    </div>
  )
}

export default TicketTable