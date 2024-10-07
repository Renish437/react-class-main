import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { ImCross } from 'react-icons/im';

import hello2 from "../icons/hello2.avif";
const Header = () => {
  const [show, setshow] = useState(false);
  const handleShow=()=>{
    setshow(!show);
  } 
  //flex items-center justify-between p-6 text-white bg-violet-500 sm:bg-indigo-500          
  return (
    <div className='flex items-center justify-between p-5 text-white bg-deep-purple-500 sm:bg-deep-purple-600'>
      
      <div>
      <div className='size-16' >
      <img src={hello2} alt="images" />
      </div>
    {show && <nav className='flex-col hidden mt-3 space-y-2 sm:flex'>

       <NavLink className="hover:text-orange-500"  to={'/'}>Home</NavLink>
       <NavLink className="hover:text-orange-500" to={'/about-page'}>About</NavLink>
       <NavLink className="hover:text-orange-500"  to={'/contact'} >Contact</NavLink>
       <NavLink className="hover:text-orange-500"  to={'/services'} >Services</NavLink>
      </nav> }
      </div> 
                

     <nav className='block space-x-16 sm:hidden'>

            <NavLink className="hover:text-orange-500"  to={'/'}>Home</NavLink>
            <NavLink className="hover:text-orange-500" to={'/about-page'}>About</NavLink>
            <NavLink className="hover:text-orange-500"  to={'/contact'} >Contact</NavLink>
            <NavLink className="hover:text-orange-500"  to={'/services'} >Services</NavLink>
            </nav> 
       <button onClick={handleShow}>{(show) ?<ImCross className='hidden sm:flex' /> :<FaBars className='hidden sm:flex'/>}</button> 
    </div>
  )
}

export default Header