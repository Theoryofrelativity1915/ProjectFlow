import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ConfirmDeleteModal({displayModal, handleSetDisplayModal}) {
    const navigate = useNavigate()
    const id = useParams()
    const handleDeleteProject = () => {
        fetch('http://localhost:3030/api/projects/delete/'.concat(id.id), {
          method: 'DELETE',
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify({
            "id" : id.id
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': true
          },
        })
        navigate('/projects')
    }
    if(displayModal){
        return (
            <div className='confirmation-modal'>
                <section>Are you sure you want to delete this project?</section>
                <div className='modal-btns'>
                <button className='general-button delete' onClick={handleDeleteProject}>Yes</button>
                <button className='general-button' onClick={handleSetDisplayModal}>No</button>
                </div>
            </div>
        )
    }
    else{
        handleSetDisplayModal()
        return (
            <></>
        )
    }
}

export default ConfirmDeleteModal