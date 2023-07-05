import React from 'react'
import '../css/login.css'
import google from '../images/google.png'
import github from '../images/github.png'
function Login() {
  return (
    <div className='login'>
        <div className='bg-image'></div>
            <div className='login-card-container'>
              <section className='login-title'>Issue Tracker Login</section>
              <div className='login-inputs'>
                <input className='input-username' type='Username' placeholder='Username'/>
                <input className='input-password' type='Password' placeholder='Password'/>
                <section>Sign in as a <button>Demo User</button></section>
              </div>
              <div className='login-buttons'>
                <button className='login-btn'>
                  Login
                </button>
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
              <div className='password-signup-container'>
                <section>Forgot your <button className='password-button'>Password?</button></section>
                <section>Create an account by <button className='signup-button'>Signing up</button></section>
              </div>
                {/* <section className='title'>Issue Tracker</section>
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
                </button> */}
            </div>
    </div>
  )
}

export default Login