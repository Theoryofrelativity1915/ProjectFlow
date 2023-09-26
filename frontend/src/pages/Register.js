import React from 'react'
import RegisterForm from '../components/forms/RegisterForm'

function Register() {
  return (
    <div className='login'>
      <div className='bg-image'/>
      <div className='login-card-container'>
        <section className='login-title'>Create an Account</section>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default Register