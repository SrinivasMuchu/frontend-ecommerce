import React,{useState} from 'react'
import './LoginForms.css'
import Topbar from '../TopBar/Topbar'
import LoginFormLeft from './LoginFormLeft'
import { useNavigate } from 'react-router-dom'

function SignUpForm() {
    const [gender, setGender] = useState('');

    const nav = useNavigate()
    const handleGenderChange = (event) => {
        setGender(event.target.value);
      };
  return (
    <>
    <Topbar/>
     <div className='login-form-page'>
      <div className='login-form-div'>
        <LoginFormLeft name='Signup'/>
        <div className='login-form-page-right'>
          {/* <span className='login-head'>Login to your account</span> */}
          <div className='login-form-div-cont'>
            <div className='login-form-input'>
              <span>Email</span>
              <input type='email' />
            </div>
            <div className='login-form-input'>
              <span>Full name</span>
              <input type='text' />
            </div>
            <div className='login-form-input'>
              <span>Password</span>
              <input type='password' />
            </div>
            <div className='login-form-input'>
              <span>Phone number</span>
              <input type='password' />
            </div>
            <div className='login-form-input'>
            <span>Gender</span>
            <div className='login-gender-div'>
            <div className='login-form-radio'>
              <input
                type='radio'
                value='male'
                checked={gender === 'male'}
                onChange={handleGenderChange}
               
              />
              <span>Male</span>
            </div>
            <div className='login-form-radio'>
              <input
                type='radio'
                value='female'
                checked={gender === 'female'}
                onChange={handleGenderChange}
               
              />
              <span>Female</span>
            </div>
            </div>
           
          </div>
            <div className='login-save-btn'>
              <button>Sign up</button>
            </div>

          </div>
          {/* <div className='horizontal-line'></div> */}
          <div className='login-signup-btn'>
            <div className='signup-btn'>
              <span>Already customer?</span>
              <button className='signup' onClick={()=>nav('/login')}>Login</button>
            </div>

          </div>

        </div>
      </div>



    </div>
    </>
  )
}

export default SignUpForm