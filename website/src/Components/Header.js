import React, { useState } from 'react'
import './Header.css'
import {IoMdMenu,IoMdClose, IoIosHome, IoIosContact, IoLogoGithub, IoIosConstruct, IoFolderOutline } from 'react-icons/io'



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
                  {/* <Link to ='/'>Alumni</Link> */}
               </li>
               <li>
                  <IoIosContact  className='icon' />
                  {/* <Link to='/'>Alumni</Link> */}
               </li>
               <li>
                  <IoLogoGithub  className='icon'/>
                  {/* <Link to='/'>Alumni</Link> */}
               </li>
               <li>
                  <IoIosConstruct  className='icon' />
                  {/* <Link to='/'>Alumni</Link> */}
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Header