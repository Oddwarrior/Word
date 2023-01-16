import React from 'react'
import { Link } from 'react-router-dom'
import pageNotFound from '../assets/pageNotFound.png'
import { ClimbingBoxLoader } from 'react-spinners'


function PageNotFound() {
    return (
        <div className='h-screen w-full bg-white flex flex-col items-center justify-center p-4'>
            <section className='flex  flex-col items-center justify-center'>
                <ClimbingBoxLoader color='#f72585' />
                <article className=' w-[80%] md:w-[40%] object-contain '>
                    <img src={pageNotFound} />
                </article>
                <article className='p-4 text-center'>
                    <h1 className='text font-semibold'>Page Not Found, please chek URL entered or visit <Link className=' text-theme-primary' to='/'>Home</Link></h1>
                </article>
            </section>

        </div>
    )
}

export default PageNotFound