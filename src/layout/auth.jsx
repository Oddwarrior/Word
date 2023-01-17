import React, { useState } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import logo from '../assets/logo.png'
import loginVector from '../assets/loginVector.svg';
import Type from '../componenets/type-writer'


function Auth() {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className='grid md:grid-cols-2 w-full h-screen '>
            <div className='hidden md:bg-black md:grid grid-rows-[60px_auto]'>

                <section className='hidden m-2 h-[60px] bg-black md:flex items-center'>
                    <Link to='/' className='flex ml-6 items-center cursor-pointer justify-start w-8 h-8 gap-2 object-contain ' >
                        <img src={logo} alt='logo' />
                        <span className=' font-bold text-md'>WORD</span>
                    </Link >
                </section>

                <section className='flex flex-col items-center justify-center'>
                    <article className=' p-8 w-[60%] object-contain '>
                        <img src={loginVector} />
                    </article>
                    <article className='text-gray-500 text-xl font-mono p-4 font-monts'><Type string="Stay connected with us" /></article>
                </section>
            </div>

            <div className=' items-center border-t-2 justify-center  md:pt-16'>

                <section className='md:hidden m-[-2px] h-[60px] bg-black flex items-center'>
                    <Link to='/' className='flex ml-6 items-center cursor-pointer justify-start w-8 h-8 gap-2 object-contain ' >
                        <img src={logo} alt='logo' />
                        <span className=' font-bold text-md'>WORD</span>
                    </Link >
                </section>

                <section className='flex justify-center gap-8 text-lg font-bold w-full pt-4 h-20'>
                    <Link to='signup' className={`m-2 pb-2  border-theme-primary transition-color duration-200 ${isSignup ? 'border-b-4' : 'border-b-0'} text-center `} onClick={() => setIsSignup(true)}>Signup</Link>
                    <Link to='login' className={`m-2 pb-2 w-16 text-center  border-theme-primary transition-color duration-200 ${!isSignup ? 'border-b-4' : 'border-b-0 '}`} onClick={() => setIsSignup(false)}> login </Link>
                </section>

                <section className='flex items-center justify-center p-2'>
                    <Outlet />
                </section>

            </div>

        </div>
    )
}

export default Auth;