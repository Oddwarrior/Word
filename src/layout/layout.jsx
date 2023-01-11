import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from '../componenets/Search'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    return (
        <div className='  m-0  h-screen sm:h-screen w-full grid grid-rows-[auto_1fr_50px] inset-0 '>
            <BrowserRouter>
                <header> <Header /></header>
                <main>
                    <Routes>
                        <Route path='/' element={<Search />} />
                        <Route path='/signup' element={<h1>Sign-up</h1>} />
                    </Routes>
                </main>
                <footer >
                    <Footer />
                </footer>
            </BrowserRouter>
        </div>
    )
}
