import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Auth from './auth'
import Signup from '../componenets/signup/Signup';
import Login from '../componenets/signup/login';

export default function Layout() {
    return (
        <div className='  m-0  h-screen sm:h-screen w-full grid grid-rows-[auto_1fr_50px] inset-0 '>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='user' element={< Auth />} >
                        <Route index element={<Login />} />
                        <Route path='signup' element={<Signup />} />
                        <Route path='login' element={<Login />} />
                    </Route>
                    <Route path='/' element={
                        <Home />
                    } />
                </Routes>

            </BrowserRouter>
        </div>
    )
}
