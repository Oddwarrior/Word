import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'


import logo from '../assets/logo.png'


export default function Header() {

    return (
        <nav className=' flex p-4 pl-8 bg-[#43347350] h-[80px] items-center gap-4 md:justify-between  w-full '>

            <Link to='/' className='flex flex-col items-center cursor-pointer justify-start w-8 h-8 object-contain' >
                <img src={logo} alt='logo' />
                <span className=' font-bold text-md'>WORD</span>
            </Link>

            <section className='md:flex  gap-4 items-center invisible md:visible'>
                <ul className='md:flex  gap-4 p-4 font-medium text-[#231942] '>
                    <Link to='/' className=' hover:text-[#E0B1CB] duration-500 transition-colors ease-linear'>Home</Link>
                    <Link className=' hover:text-[#E0B1CB] duration-500 transition-colors ease-linear'>About</Link>
                    <Link className=' hover:text-[#E0B1CB] duration-500 transition-colors ease-linear'>Contact</Link>
                </ul>

                <button className='rounded-full bg-[#231942] h-10 px-4 text-[#E0B1CB]  hover:bg-[#0E0A1C] hover:shadow-md duration-500 hover:scale-[1.01] '>add a word</button>

                <section className='flex items-center  gap-1 bg- bg-[#23194250] rounded-full pr-2 '>
                    <span className='text-white'><CgProfile size={25} /></span>
                    <h1 className='text-sm font-semibold'>Username</h1>
                </section>
            </section>

        </nav>
    )
}
