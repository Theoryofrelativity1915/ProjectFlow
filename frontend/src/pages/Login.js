import React from 'react'
import LoginForm from '../components/LoginForm.js'
import '../css/login.css'
import google from '../images/google.png'
import github from '../images/github.png'


function Login() {


  return (
    <div className='login'>
        <div className='bg-image'/>
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
                <section><span style={{'whiteSpace': 'pre-wrap'}}>Forgot your </span><a className='password-button' href='/password-reset'>Password?</a></section>
                <section><span style={{'whiteSpace': 'pre-wrap'}}>Create an account by </span><a className='signup-button' href='/register'>Signing up</a></section>
              </div>
            </div>
    </div>
  )
}

export default Login