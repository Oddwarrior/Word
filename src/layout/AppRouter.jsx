import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Auth from './auth'
import Signup from '../componenets/signup/Signup';
import Login from '../componenets/signup/login';
import PageNotFound from '../layout/PageNotFound'

export default function AppRouter() {

    return (
        <div className='  m-0  h-screen sm:h-screen w-full grid grid-rows-[auto_1fr_50px] inset-0 '>
            <BrowserRouter>
                <Routes>

                    <Route index element={<Home />} />

                    <Route path='user' element={<Auth />} >
                        <Route index element={<Login />} />
                        <Route path='signup' element={<Signup />} />
                        <Route path='signup' element={<Signup />} />

                        <Route path='login' index element={<Login />} />
                    </Route>

                    <Route path='/' element={
                        <Home />
                    } />

                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
