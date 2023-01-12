import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function Layout() {
    return (
        <div className='  m-0  h-screen sm:h-screen w-full grid grid-rows-[auto_1fr_50px] inset-0 '>
            <BrowserRouter>
                <Routes>
                    <Route path='/signup' element={<h1>Sign-up</h1>} />
                    <Route path='/' element={
                        <Home />
                    } />
                </Routes>

            </BrowserRouter>
        </div>
    )
}
