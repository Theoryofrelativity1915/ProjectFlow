import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../css/table.css'
import '../css/buttons.css'
import Buttons from './ManagementButtons'
import axios from 'axios'

function Table({header, api}) {
  // const [data, setData] = useState(axios.get(api))
  const id = useParams().id
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [search, setSearch] = useState("")
  const pageNumbers = []
  const location = window.location.pathname
  api = api.concat("?page=").concat(page).concat("&limit=").concat(limit).concat("&search=").concat(search)
  const { data, loading, error } = useFetch(api)
  // useEffect(() => {
  //   axios.get(api).then((res) => setData(res.data))
  // })

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
        <select defaultValue={"10"} style={{width: "2.5rem", marginLeft: "2px"}} onChange={(e) => {setLimit(e.target.value)}}>
            <option value={"5"}>5</option>
            <option value={"10"}>10</option>
            <option value={"15"}>15</option>
        </select> entries
        </section>
      </div>
      <table className='paginated-table'>
        <tbody key={'body'}>
          <tr key={'header'}>{header.map((col, key) => (<th key={key}>{col.charAt(0).toUpperCase() + col.slice(1)}</th>))}</tr>
          {data ? data.results.map((object) => (<tr key={object.id} id={object.id}>{header.map((col, key) => 
          (col != "Management") ? 
            (col != 'status') ? 
              (col == 'date') ? (<td key={key}>{object[col].toString().slice(5, 10).concat('-').concat(object[col].substring(0, 4))}</td>) 
              : (<td key={key}>{object[col]}</td>) 
            : (<td key={key}>{object[col] ? 'Open' : 'Closed'}</td>) 
          : <Buttons key={key} link1={'/assign'} link2={location === '/projects' ? location.concat(`/${object.project_id}`) : `/tickets/${object.ticket_id}`}/>
          )}
          </tr>)) : <tr key={'loading-row'}><td key={'Loading'}>Loading</td></tr>}
        </tbody>
      </table>
      {(data?.results.length == 0 && header[0] != 'commenter') ? header[0] == 'title' ? <Link className='general-button no-tickets-link' to={'/tickets/create'} state={{ "id": id }}>Create a ticket</Link> : 
        <Link className='general-button no-tickets-link' to={'/assign'}>Assign Personnel to this Project</Link> : <></>}

      <ul className='paginated-table-list'>
        {pageNumbers.map(num => (<button key={num} id={num} className={num} onClick={(e) => setPage(e.target.id)}>{num}</button>))}
      </ul>
    </div>
  )
}

export default Table