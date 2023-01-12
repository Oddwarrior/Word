import React from 'react'
import Search from '../componenets/Search'
import Footer from './Footer'
import Header from './Header'


function Home() {
    return (
        <div>
            <header> <Header /></header>
            <main>
                <Search />
            </main>
            <footer >
                <Footer />
            </footer>
        </div>
    )
}

export default Home