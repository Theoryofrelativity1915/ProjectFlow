import React, { useState } from 'react'
import Table from '../components/Table'
import { useParams } from 'react-router-dom'
import '../css/project.css'
import '../css/buttons.css'
import useFetch from '../hooks/useFetch'
import Header from '../components/Header'
import ConfirmDeleteModal from '../components/ConfirmDeleteModal'

function Project() {
  const [displayModal, setDisplayModal] = useState(false)
  const projectId = useParams()
  const api = process.env.concat('projects/').concat(projectId.id)
  const ticketsApi = api.concat('/tickets')
  const personnelApi = api.concat('/personnel')
  const ticketsHeader = ["title", "submitter", "developer", "status", "date", "Management"]
  const personnelHeader = ["name", "email", "role"]
  const { data, loading, error } = useFetch(api)

  const handleSetDisplayModal = () => {
    setDisplayModal(false)
  }

  return (
    <div className='projects'>
      <div className='project-header'>
        <Header title={data?.title} />
        <div className='header-information'>
          <div className='project-title-info'>
            <section>Project Name</section>
            <section>{data?.title}</section>
          </div>
          <div className='project-title-info'>
            <section>Project Description</section>
            <section>{data?.description}</section>
          </div>
        </div>
      </div>
      <div className='information-container'>
        <div className='information' id='one'>
          <div className='informationHeader'>
            <h3>Assigned Personnel</h3>
            <p>Current Users on this Project</p>
          </div>
          <Table header={personnelHeader} api={personnelApi} />
        </div>
        <div className='information' id='two'>
          <div className='informationHeader'>
            <h3>Tickets for this Project</h3>
            <p>Current Tickets for this Project</p>
          </div>
          <div className='paginated-table-container'>
            <Table header={ticketsHeader} api={ticketsApi} />
          </div>
        </div>
        <button className='general-button delete-btn' onClick={() => setDisplayModal(true)}>Delete this Project</button>
      </div>
      <ConfirmDeleteModal displayModal={displayModal} handleSetDisplayModal={handleSetDisplayModal} />
    </div>
  )
}

export default Project
