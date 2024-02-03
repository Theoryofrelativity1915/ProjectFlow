import React from 'react'
import LoginForm from '../components/forms/LoginForm.js'
import '../css/login.css'

function Login() {


  return (
    <div className='login'>
      <div className='bg-image' />
      <div className='login-card-container'>
        <section className='login-title'>ProjectFlow Login</section>
        <LoginForm />
        <div className='password-signup-container'>
          <section><span style={{ 'whiteSpace': 'pre-wrap' }}>Create an account by </span><a className='signup-button' href='/register'>Signing up</a></section>
        </div>
      </div>
    </div>
  )
}

export default Login
