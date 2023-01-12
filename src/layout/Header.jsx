import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { useState, useEffect } from 'react'


import logo from '../assets/logo.png'
import Menu from '../componenets/Menu'
import MenuMobile from '../componenets/MenuMobile'


export default function Header() {

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
            <nav className={`flex  bg-theme-primary h-[60px] items-center gap-4 justify-between fixed  z-20 w-full ${fixed ? ' shadow-xl' : ''} `}>

                <Link to='/' className='flex ml-6 items-center cursor-pointer justify-start w-8 h-8 gap-2 object-contain ' >
                    <img src={logo} alt='logo' />
                    <span className=' font-bold text-md'>WORD</span>
                </Link >

                <section className='flex gap-2 items-center mr-6'>
                    <article className='hidden md:block'><Menu /></article>
                    <article className='rounded-full pr-2 flex flex-col items-center justify-center'>
                        <NavLink to={'/signup'} className='text-white'>
                            <CgProfile size={25} />
                        </NavLink>
                    </article>
                    <section className=' md:hidden border border2 p-1 text-sm font-semibold text-white rounded border-white cursor-pointer'
                        onClick={handleMenu}
                    >Menu</section>
                </section>

                <section className={`z-10 absolute top-[60px] ${showMenu ? ` opacity-100 ` : 'opacity-0'} w-full p-4 right-0 left-0 bg-white shadow-md md:hidden transition-all  ease-in-out duration-500 `}>
                    <ul>
                        <MenuMobile />
                    </ul>
                </section>
            </nav >
            {showMenu && <div className='w-full h-screen bg-black opacity-50 fixed z-0 md:hidden right-0 left-0 top-0 bottom-0'></div>}

        </div>
    )
}
