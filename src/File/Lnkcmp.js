import React,{useState} from 'react'
import '../App.css'
import { Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'

function Lnkcmp() {
  const[isMobile,setIsMobile]=useState(false);
  return (
  <>

  <div className='hdl'>
    <p id="header-the">THE <p id="header-siren">SIREN</p></p>
    </div>
    <button id='btn1' className='mobile-menu-icon' onClick={()=>{setIsMobile(!isMobile)}}>
        {isMobile ? <GiHamburgerMenu/> :  <RxCross2/> }
        </button>
        <p></p>
 <div  className={isMobile ? "cross" : "menu"} onClick={()=>{setIsMobile(false)}}>
 <Link to='/' className='lnk'>Home</Link>
  <Link to='/File/Bollywood' className='lnk'>Bollywood</Link>
  <Link to='/File/Technology' className='lnk'>Technology</Link>
  <Link to='/File/Hollywood' className='lnk'>Hollywood</Link>
  <Link to='/File/Fitness' className='lnk'>Fitness</Link>
  <Link to='/File/Food' className='lnk'>Food</Link>
    </div>
        <hr id="hr"></hr>
   
    </>
  )
}

export default Lnkcmp