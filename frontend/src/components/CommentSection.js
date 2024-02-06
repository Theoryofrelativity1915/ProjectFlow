import React from 'react'
import { useParams } from 'react-router-dom'



function CommentSection() {
  const id = useParams()
  const handleSubmit = (e) => {
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    fetch('http://52.3.221.82:3030/api/tickets/'.concat(id.id).concat('/comment'), {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          message: formJson.message
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': true
        },
      })
  }
  
  return (
    <div className='comment-input-container'>
      <form onSubmit={handleSubmit}>
        <input name='message' className='comment-input' required maxLength='100'/>
        <button type='submit'>Add Comment</button>
      </form>
    </div>
  )
}

export default CommentSection