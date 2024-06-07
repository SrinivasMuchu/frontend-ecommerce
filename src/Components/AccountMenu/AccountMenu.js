import React from 'react'
import './AccountMenu.css'
import { useNavigate } from 'react-router-dom'

function AccountMenu() {
  const nav = useNavigate()
  return (
   
        <div className='longin-popup'>
            <button className='longin-btn' onClick={()=>nav('/login')}>Login</button>
            <div className='signup-btn'>New customer? <button className='signup' onClick={()=>nav('/signup')}>Signup</button></div>
        </div>
       
    
  )
}

export default AccountMenu