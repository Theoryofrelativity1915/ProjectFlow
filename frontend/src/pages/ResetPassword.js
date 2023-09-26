import React from 'react'
import ResetPasswordForm from '../components/forms/ResetPasswordForm'

function ResetPassword() {
  return (
    <div className='login'>
      <div className='bg-image'/>
      <div className='login-card-container'>
        <section className='login-title'>Reset Password</section>
        <ResetPasswordForm/>
      </div>
    </div>
  )
}

export default ResetPassword