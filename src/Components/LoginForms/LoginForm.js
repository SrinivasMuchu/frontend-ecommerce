import React from 'react'
import './LoginForms.css'
import Topbar from '../TopBar/Topbar'
import LoginFormLeft from './LoginFormLeft'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const nav = useNavigate()
  return (
    <>
    <Topbar/>
     <div className='login-form-page'>
      <div className='login-form-div'>
        <LoginFormLeft name='Login'/>
        <div className='login-form-page-right'>
          {/* <span className='login-head'>Login to your account</span> */}
          <div className='login-form-div-cont'>
            <div className='login-form-input'>
              <span>Email</span>
              <input type='text' />
            </div>
            <div className='login-form-input'>
              <span>Password</span>
              <input type='password' />
            </div>
            <div className='login-save-btn'>
              <button>Login</button>
            </div>

          </div>
          {/* <div className='horizontal-line'></div> */}
          <div className='login-signup-btn'>
            <div className='signup-btn'>
              <span>New customer?</span>
              <button className='signup' onClick={()=>nav('/signup')}>Sign up</button>
            </div>

          </div>

        </div>
      </div>



    </div>
    </>
   

  )
}

export default LoginForm