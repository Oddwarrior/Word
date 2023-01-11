import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { useState } from 'react'


import logo from '../assets/logo.png'


export default function Header() {

    const [fixed, setFixed] = useState(false);

    window.addEventListener('scroll', () => {
        (window.scrollY >= 80) ? setFixed(true) : setFixed(false);
    });

    return (
        <nav className={`flex p-6 pl-8 bg-theme-primary h-[60px] items-center gap-4 md:justify-between fixed z-10 w-full ${fixed ? 'shadow-md' : ''} `}>

            <Link to='/' className='flex  items-center cursor-pointer justify-start w-8 h-8 gap-2 object-contain ' >
                <img src={logo} alt='logo' />
                <span className=' font-bold text-md'>WORD</span>
            </Link >

            <section className='md:flex  gap-4 items-center invisible md:visible'>
                <ul className='md:flex  gap-4 p-4 font-medium text-white '>
                    <Link to='/' className=' hover:text-theme-primary-light duration-300 transition-colors ease-linear'>Home</Link>
                    <Link className=' hover:text-theme-primary-light duration-300 transition-colors ease-linear'>About</Link>
                    <Link className=' hover:text-theme-primary-light duration-300 transition-colors ease-linear'>Contact</Link>
                </ul>

                <button className='rounded-full bg-black h-10 px-4 text-white  hover:bg-[#0E0A1C] hover:shadow-md duration-500 hover:scale-[1.01] '>add a word</button>

                <section className='flex items-center  gap-1 bg- bg-[#23194250] rounded-full pr-2 '>
                    <span className='text-white'><CgProfile size={25} /></span>
                    <h1 className='text-sm font-semibold'>Username</h1>
                </section>
            </section>

        </nav >
    )
}
