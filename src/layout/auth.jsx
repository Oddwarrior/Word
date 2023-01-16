import React from 'react'
import { useState } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom'

import loginVector from '../assets/loginVector.svg';


function Auth() {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className='grid md:grid-cols-2 w-full h-screen '>
            <div className='hidden md:bg-black w-full h-full md:flex md:flex-col justify-center items-center p-8'>
                <article className=' p-8 w-[70%] object-contain '>
                    <img src={loginVector} />
                </article>
                <article className='text-white text-3xl font-mono p-4 font-monts'>Stay connected with us ...</article>
            </div>

            <div className=' items-center border-t-2 justify-center pt-2 md:pt-10'>

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