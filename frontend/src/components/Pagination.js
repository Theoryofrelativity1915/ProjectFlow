import React, { useState } from 'react'
import Items from './Items.js'
import '../css/pagination.css'

function Pagination({array, header}) {
  const [numEntries, setNumEntries] = useState(10)
  const [query, setQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const totalItems = array.length
  const lastItemIndex = currentPage * numEntries
  const firstItemIndex = lastItemIndex - numEntries
  const currentItems = array.slice(firstItemIndex, lastItemIndex)
  const pageNums = []
  if(numEntries > 0){
    for(let i = 1; i <= Math.ceil(totalItems / numEntries); i++){
      pageNums.push(i)
    }
  }
  return (
    <div className='pagination'>
      <div className='paginated-table'>
      <div className='navigation'>
            <section><input placeholder='Search...' onChange={(e) => setQuery(e.target.value)}/></section>
            <section>Show <select defaultValue={"10"} style={{width: "2.5rem"}} onChange={(e) => setNumEntries(e.target.value)}><option value={"5"}>5</option><option value={"10"}>10</option><option value={"15"}>15</option></select> entries</section>
      </div>
      <table>
        <tbody>
          <tr style={{borderBottom: "2px solid black"}}>{header.map(column => <th key={column} id={column}>{column}</th>)}</tr>
          <Items items={currentItems} header={header}/>          
        </tbody>
      </table>
      </div>
      <ul className='paginated-list'>
        {pageNums.map(num => (<button key={num} className={num == currentPage ? 'active' : ''} onClick={() => setCurrentPage(num)}>{num}</button>))}
      </ul>
    </div>
  )
}

export default Pagination