import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import {IoMdMenu,IoMdClose, IoIosHome, IoIosContact, IoLogoGithub, IoIosConstruct } from 'react-icons/io'


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
                  <NavLink to ='/' exact>Home</NavLink>
               </li>
               <li>
                  <IoIosContact  className='icon'/>
                  <NavLink to='/aboutme' exact>About me</NavLink>
               </li>
              
               <li>
                  <IoIosConstruct  className='icon' />
                  <NavLink to='/project' exact>Projects</NavLink>
               </li>
               
               
            </ul>
         </nav>
      </div>
   )
}

export default Header