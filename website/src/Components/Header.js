import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {IoMdMenu,IoMdClose, IoIosHome, IoIosContact, IoIosConstruct, IoIosColorPalette } from 'react-icons/io'


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
                  <Link to ='/' exact>Home</Link>
               </li>
               <li>
                  <IoIosContact  className='icon'/>
                  <Link to='/aboutme' exact>About me</Link>
               </li>              
               <li>
                  <IoIosConstruct  className='icon' />
                  <Link to='/project' exact>Projects</Link>
               </li>
               {/* <li>
                  <IoIosColorPalette className='icon' />
                  <Link to='/designs' exact>Designs</Link>
               </li> */}
            </ul>
         </nav>
      </div>
   )
}

export default Header