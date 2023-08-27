import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../css/login.css'
import  AuthContext  from '../contexts/AuthProvider'

function LoginForm() {
  const {auth, setAuth} = useContext(AuthContext)
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    fetch('http://localhost:3000/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          username: formJson.username,
          password: formJson.password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': true
        },
      })
        .then((response) => {
          if (response.status == 200){
            setAuth(true)
            navigate('/')
          }
          else{
            setAuth(false)
          }
        })

    }
  return (
    <div className='login-inputs'>
        <form method='post' onSubmit={handleSubmit}>
            <label><input className='input-username' name="username" type='Username' placeholder='Username' onSubmit ={ev =>{ev.preventDefault()}}/></label>
            <label><input className='input-password' name="password" type='Password' placeholder='Password' onSubmit ={ev =>{ev.preventDefault()}}/></label>
            <section>Sign in as a <button type='button' onSubmit ={ev =>{ev.preventDefault()}}>Demo User</button></section>
            <button className='login-btn' type='submit' onSubmit ={ev =>{ev.preventDefault()}}>
            Login
            </button>
        </form>
    </div>
  )
}

export default LoginForm