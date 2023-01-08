import React from 'react'
import Type from './type-writer'
// import '../index.css'

export default function Search() {
    return (
        <form id='searchForm' className='flex  flex-col items-center p-4'>
            <section className=' text-white' >
                <h1 className='bold-font'>Welcome to</h1>
                <h1 className=' text-[#BE95C4] bold-font'><Type string="WORD" /></h1>
            </section>
            <section className='flex flex-col w-[300px] sm:w-[400px] justify-center m-4'>
                <input name='text' type='text' className=' rounded-full h-10 sm:h-12 mt-4 mb-4 md:mt-8 md:mb-8 focus:outline-none p-4 ' placeholder='Type a word' />
                <button type='submit' className='rounded-full bg-[#231942] w-24 sm:w-32 sm:h-12 sm:  py-2 text-[#E0B1CB] m-auto  hover:bg-[#0E0A1C]  duration-300'>Search</button>
            </section>
        </form >
    )
}

function handleSubmit() {

}