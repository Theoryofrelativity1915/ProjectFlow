import React, { useState } from 'react'
import '../css/create.css'


{/* name, description, personnel, date */}
function CreateProject() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [devs, setDevs] = useState([])
    const handleUserSelected = (options) => {
      let selectedUsers = []
      for (let i = 0; i < options.length; i++){
        if(options[i].selected){
          selectedUsers.push(options[i].value)
        }
      }
      setDevs(selectedUsers) 
    }
    console.log("Fix submit button in Create Project File")
    const submit = () =>{

    }
  return (
    <div className='create-page-container'>
        {/* <div className='create-page-header'>
            <section>Create a Project</section>
        </div>
        <div className='create-project-grid'>
                <div>
                    <section>Title</section>
                    <input/>
                </div>
                <div>
                    <section>Description</section>
                    <textarea/>
                </div>
                <div>
                    <section>Assign Developers to this Project</section>
                    <select multiple='multiple' onChange={(e) => handleUserSelected(e.target)}>
                        {availableUsers.map((user, key) => <option key={key} id={user}>{user.name}</option>)}
                    </select>
                </div>
                <div>
                    <button onClick={() => submit()}>Submit</button>
                </div>
            </div> */}
    </div>
  )
}

export default CreateProject