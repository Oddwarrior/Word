import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

export default function Layout() {
    return (
        <div className='  m-0  h-full sm:h-screen w-full grid grid-rows-[auto_auto_50px]'>
            <header> <Header /></header>
            <main >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/signup' element={<h1>Sign-up</h1>} />
                    </Routes>
                </BrowserRouter>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
