import React, { useState } from 'react'
import '../css/forgotPassword.css'
import '../css/buttons.css'

function ForgotPassword() {
    const [displaying, setDisplaying] = useState(false)
    const handleSubmit = (e) => {
        setDisplaying(true)
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        console.log('fetching')
        fetch('http://52.3.221.82:3030/forgot', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify({
                    email: formJson.email,
                    }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': true
                },
            })
    }
  return (
    <div className='login'>
      <div className='bg-image'/>
      <div className='login-card-container'>
        <section className='login-title'>Reset Password</section>
        <div className='forgot-password-container'>
            <form onSubmit={handleSubmit}>
                <input placeholder='example@email.com' required/>
                <button className='general-button'>Reset Password</button>
            </form>
            <section className={displaying ? 'displaying' : ''}>*If there is an account associated with this email, you will receive a password reset link.</section>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword