import React from 'react'
import './LoginForms.css'


function LoginFormLeft({name}) {
    return (
        <div className='login-form-page-left'>
          <span>{name} to your account</span>
          <img src='https://portfolio-ks.s3.ap-south-1.amazonaws.com/jewellery-login-page.png' alt=''/>
        </div>
    )
}

export default LoginFormLeft