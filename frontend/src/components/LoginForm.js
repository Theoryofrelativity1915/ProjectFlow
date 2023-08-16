import React from 'react'
import axios from 'axios'
import '../css/login.css'

function LoginForm() {
    const instance = axios.create({
        withCredentials: true
    })
    function handleSubmit(e){
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      const formJson = Object.fromEntries(formData.entries())
      // instance.post('http://localhost:3000/login', {
      //     username: formJson.username,
      //     password: formJson.password
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
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
           .then((response) => console.log(response))

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