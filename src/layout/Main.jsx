import React from 'react'
import Meaning from '../componenets/meaning'
import Search from '../componenets/Search'

export default function Main() {

    return (
        <div className=' pt-4 lg:p-10 lg:pt-24 lg:flex items-center justify-center lg:gap-20'>
            <section className=' lg:p-8'>
                <Search />
            </section>


            <section className='lg:p-8'>
                <Meaning />
            </section>

        </div>
    )
}
