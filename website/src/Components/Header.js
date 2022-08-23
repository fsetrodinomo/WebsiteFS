import React from 'react'
import './Header.css'
//home
import { AiOutlineHome, IoColorFill } from "react-icons/io5";
//about me
import { BsFillPersonLinesFill } from "react-icons/io5";
//projects
import { BsFillPersonLinesFill } from "react-icons/io5";
//tools
import { GoTools } from "react-icons/io5";


const Header = () => {
  return (
    <div className='header'>
      <nav>
        <li>
          <AiOutlineHome style={{color:'white'}}/>
        
        </li>
      </nav>
    </div>
  )
}
