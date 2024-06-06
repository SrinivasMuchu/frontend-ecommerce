import React,{useState} from 'react'
import './Topbar.css'
import { useNavigate } from 'react-router-dom'
import AccountMenu from '../AccountMenu/AccountMenu'
import AccountMenuAfter from '../AccountMenu/AccountMenuAfter'

function Topbar() {
  const [openAccountMenu,setOpenAccountMenu] = useState({})
const nav = useNavigate()
  const handleOpenAccountMenu=(section)=>{
    setOpenAccountMenu((prevState) => ({
      ...prevState,
      [section]: !prevState[section], // Toggle the specific section
    }));
  }
  return (
    <div className='top-bar-container'>
        <div className='top-logo'>
            <img src='https://portfolio-ks.s3.ap-south-1.amazonaws.com/logo-name.png' alt='logo' onClick={()=>nav('/')}/>
        </div>
        <div className='top-search'>
            <input type='text' placeholder='search'/>
            <img src='https://cdn-icons-png.freepik.com/256/15247/15247563.png?uid=R116152838&ga=GA1.1.1462843302.1696500966&semt=ais_hybrid' alt='search'/>
        </div>
        <div className='top-icons'>
            <img src='https://cdn-icons-png.freepik.com/256/66/66744.png?uid=R116152838&ga=GA1.1.1462843302.1696500966&semt=ais_hybrid' alt='whishlist'/>
            <img src='https://cdn-icons-png.freepik.com/256/34/34627.png?uid=R116152838&ga=GA1.1.1462843302.1696500966&semt=ais_hybrid' alt='cart'/>
            <img src='https://cdn-icons-png.freepik.com/256/14/14660.png?uid=R116152838&ga=GA1.1.1462843302.1696500966&semt=ais_hybrid' alt='account' onClick={()=>handleOpenAccountMenu('login')}/>
            <img src='https://cdn-icons-png.freepik.com/256/14/14660.png?uid=R116152838&ga=GA1.1.1462843302.1696500966&semt=ais_hybrid' alt='account' onClick={()=>handleOpenAccountMenu('account')}/>
           {openAccountMenu['login'] && <div className='account-menu'>
              <AccountMenu/>
            </div>} 
           {openAccountMenu['account'] && <div className='account-menu-logged'>
              <AccountMenuAfter/>
            </div>} 
        </div>
        {/* Topbar */}
        
    </div>
  )
}

export default Topbar