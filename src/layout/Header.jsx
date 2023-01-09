import React from 'react'

export default function Header() {
    return (
        <nav className=' flex justify-between p-4 bg-[#43347350]  md:visible'>
            <img src='' alt='logo' />
            <section className='flex gap-2'>
                <section>Contribute a word</section>

                <section>
                    <img src='' alt='profile pic' />
                    <h1>Username</h1>
                </section>

            </section>
        </nav>
    )
}
