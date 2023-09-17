import React from 'react'
import Logo from '../assets/undraw_logo.svg'
import { HiMagnifyingGlass, HiMoon } from "react-icons/hi2";

function Nav() {
  return (
    <div className='navContainer flex items-center px-5'>
        <img src={Logo} width={60} height={60}/>
        <div className='search flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
            <HiMagnifyingGlass className=''/>
            <input type='text' placeholder='Search A Game' className='bg-transparent w-full outline-none px-2' />
        </div>
        <div>
            <HiMoon/>
        </div>
    </div>
  )
}

export default Nav