import React, { useState } from 'react'
import './Header.css'
import {IoMdMenu,IoMdClose, IoIosHome, IoIosContact, IoLogoGithub, IoIosConstruct, IoMdBook } from 'react-icons/io'
import {NavLink} from "react-router-dom";


const Header = () => {
   const [active, setActive] = useState(false)
   const activateNav = () => {
      setActive(!active)
   }

   return (
      <div className={active ? 'header' : 'header-mobile'}>
         <div className='menu-icon' onClick={activateNav}>
            {!active ? <IoMdMenu className='menu'/> : <IoMdClose className='menu'/>  }
         </div>
         <nav>
            <ul className={active ? 'ul-item' : 'ul-item oicon'}>
               <li>
                  <IoIosHome className='icon' />
                  <NavLink to ='/home' exact>Home</NavLink>
               </li>
               <li>
                  <IoIosContact  className='icon' />
                  <NavLink to='/aboutme' exact>About me</NavLink>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Header