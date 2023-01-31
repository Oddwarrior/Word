import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import useAuth from '../common/AuthContext'


import logo from '../assets/logo.png'
import Menu from '../componenets/Menu'

export default function Header() {

    const { user } = useAuth();
    const [fixed, setFixed] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {

        setShowMenu(!showMenu);
    }

    useEffect(() => {
        if (showMenu) document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, [handleMenu])


    window.addEventListener('scroll', () => {
        (window.scrollY >= 80) ? setFixed(true) : setFixed(false);
    });

    return (
        <div >
            <div className='fixed  z-20  flex flex-col w-full'>
                <nav className={`flex  bg-theme-primary h-[60px] items-center gap-4 justify-between w-full ${fixed ? ' shadow-xl' : ''} `}>

                    <Link to='/' className='flex ml-6 items-center cursor-pointer justify-start w-8 h-8 gap-2 object-contain ' >
                        <img src={logo} alt='logo' />
                        <span className=' font-bold text-md'>WORD</span>
                    </Link >

                    <section className='flex gap-2 items-center mr-6'>
                        <article className='hidden md:block'><Menu /></article>
                        <article className='rounded-full pr-2 flex flex-col items-center justify-center'>
                            <NavLink to={`/user/profile/${user?.id}`} className='text-white'>
                                <CgProfile size={25} />
                            </NavLink>
                        </article>
                        <section className=' md:hidden text-white border2 cursor-pointer'
                            onClick={handleMenu}
                        ><GiHamburgerMenu size={25} /></section>
                    </section>

                </nav >
                <section className={` overflow-hidden ${showMenu ? `h-50 ` : 'h-0'} w-full  right-0 left-0 bg-white shadow-md md:hidden transition-all  ease-in-out duration-500 `}>
                    <ul className='flex flex-col  gap-2 p-4 font-medium bg-white text-sm h-auto transition-all duration-300'>
                        <NavLink to='/' className=' hover:text-theme-primary duration-300 transition-colors p-2' onClick={handleMenu} >Home</NavLink>
                        <NavLink to='/about' className=' hover:text-theme-primary duration-300 transition-colors  p-2'>About</NavLink>
                        <NavLink to='/contact' className=' hover:text-theme-primary duration-300 transition-colors  p-2'>Contact</NavLink>
                    </ul>
                </section>
            </div>

            {showMenu && <div className='w-full h-screen bg-black opacity-50 fixed z-0 md:hidden right-0 left-0 top-0 bottom-0'></div>}

        </div>
    )
}
