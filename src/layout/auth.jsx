import React from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'


import loginVector from '../assets/loginVector.svg';
import Signup from '../componenets/signup/Signup';
import Login from '../componenets/signup/login';


function Auth() {
    const [isSignup, setIsSignup] = useState(true);

    return (
        <div className='grid md:grid-cols-2 w-full h-screen '>
            <div className='hidden md:block md:bg-theme-primary w-full h-full'> img </div>

            <div className=' items-center border-t-2 justify-center'>

                <section className='flex justify-center gap-8 text-lg font-bold w-full pt-10'>
                    <h1 className={`m-2 pb-2  border-theme-primary transition-all duration-200 ${isSignup ? 'border-b-4' : 'border-b-0'} text-center `} onClick={() => setIsSignup(true)}>Signup</h1>
                    <h1 className={`m-2 pb-2 w-16 text-center  border-theme-primary transition-all duration-200 ${!isSignup ? 'border-b-4' : 'border-b-0 '}`} onClick={() => setIsSignup(false)}> login </h1>
                </section>

                <section className='flex items-center justify-center '>
                    <Signup />
                    {/* <article className={`${!isSignup ? 'opacity-100 ' : 'opacity-0 w-0'}`}><Signup /></article> */}
                </section>
            </div>
        </div>
    )
}

export default Auth;