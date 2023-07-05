import React from 'react'

function Items({ items, header }) {
  return (
    <>
        {items.map((object, key) => (<tr id={key.toString()} key={key}>{header.map((col, key) => <td key={key}>{object[col]}</td>)}</tr>))}
    </>    
  )
}

export default Items