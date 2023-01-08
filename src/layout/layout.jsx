import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

export default function Layout() {
    return (
        <div className=' bg-cover m-0 bg  h-screen w-screen '>
            <header> <Header /></header>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/signup' element={<h1>Sign-up</h1>} />
                </Routes>
            </BrowserRouter>

            <footer>
                footer
            </footer>
        </div>
    )
}
