import React from 'react'
import '../css/login.css'
import google from '../images/google.png'
import github from '../images/github.png'
function Login() {
  return (
    <div className='login'>
        <div className='bg-image'></div>
        <div className='login-card'>
            <div className='login-card-content'>
                <section className='title'>Issue Tracker</section>
                <section>Log into your account here</section>
                <input type='username' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <section>Sign in as Demo</section>
                <button className='login-btn'>
                  Login</button>
                <button className='google-btn'>
                  <img src={google}/>
                  Login with Google
                </button>
                <button className='github-btn'>
                  <img src={github}/>
                  <section>
                    Login with Github
                  </section>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login