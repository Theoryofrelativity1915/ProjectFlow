import React from 'react'
import LoginForm from '../components/LoginForm.js'
import '../css/login.css'
import google from '../images/google.png'
import github from '../images/github.png'


function Login() {


  return (
    <div className='login'>
        <div className='bg-image'></div>
            <div className='login-card-container'>
              <section className='login-title'>ProjectFlow Login</section>
              <LoginForm/>
              {/* <div className='login-buttons'>
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
              </div> */}
              <div className='password-signup-container'>
                <section>Forgot your <a className='password-button'>Password?</a></section>
                <section>Create an account by <a className='signup-button'>Signing up</a></section>
              </div>
            </div>
    </div>
  )
}

export default Login