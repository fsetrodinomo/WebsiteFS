import React ,{useState} from 'react'
import './Header.css'
import {IoIosHome,IoIosContact,IoLogoGithub,IoIosConstruct,IoFolderOutline,} from 'react-icons/io5'

import { useState } from 'react'

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <ul className='ul-item'>
                <li>
                   <IoMdImage/>
                   <Link to ='/'>Alumni</Link>
                </li>   
                <li>
                   <IoMdImage/>
                   <Link to ='/'>Alumni</Link>
                </li>
                <li>
                   <IoMdImage/>
                   <Link to ='/'>Alumni</Link>
                </li>
                <li>
                   <IoMdImage/>
                   <Link to ='/'>Alumni</Link>
                </li>
                <li>
                   <IoMdImage/>
                   <Link to ='/'>Alumni</Link>
                </li>
                <li>
                   <IoMdImage/>
                   <Link to ='/'>Alumni</Link>
                </li>

            </ul>
        </nav>
    </div>
  )
}

export default Header