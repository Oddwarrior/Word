import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../common/AuthContext'
import { CgProfile } from 'react-icons/cg'



function Profile() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    return (
        <div className='p-4 flex flex-col md:flex-row-reverse gap-4  h-screen '>

            <div className='w-full grid grid-rows-2 md:grid-rows-[250px_auto] '>
                <section className='p-4 s shadow-lg rounded-2xl mb-4  '>
                    <section className='flex flex-col md:flex-row gap-4 items-center justify-center p-4'>
                        <article className='h-40 w-40 bg-slate-600 rounded-full flex  items-center justify-center text-3xl font-bold text-white'>
                            <p >SJ</p>
                        </article>
                        <article className='text-center md:text-left'>
                            <h1 className='font-bold'>Shashank Jagtap</h1>
                            <p className='font-thin'>Shashankjagtap8806@gmail.com</p>
                            <section className='flex justify-center md:justify-start items-center gap-4 '>
                                <p>20 Words</p>
                                <p>15 Likes</p>
                            </section>
                        </article>
                    </section>

                </section>

                <section className='p-4 shadow-lg rounded-xl bg-gray-100'>
                    <h1 className='p-4 text-center'>Saved words</h1>
                    {/* <article className=' flex flex-wrap gap-4 justify-evenly'>
                        <article className='p-4 bg-theme-primary rounded-xl w-20 text-white'> word1</article>
                        <article className='p-4 bg-theme-primary rounded-xl w-20 text-white'> word1</article>
                        <article className='p-4 bg-theme-primary rounded-xl w-20 text-white'> word1</article>
                        <article className='p-4 bg-theme-primary rounded-xl w-20 text-white'> word1</article>
                        <article className='p-4 bg-theme-primary rounded-xl w-20 text-white'> word1</article>
                        <article className='p-4 bg-theme-primary rounded-xl w-20 text-white'> word1</article>
                        <article className='p-4 bg-theme-primary rounded-xl w-20 text-white'> word1</article>
                        <article className='p-4 bg-theme-primary rounded-xl w-20 text-white'> word1</article>

                    </article> */}

                </section>
            </div>


            <div className='w-full md:w-1/4 h-full'>
                <ul className='p-4 s shadow-lg rounded-2xl mb-4 flex flex-col gap-2 h-full bg-gray-200'>
                    <li className=' border-b-2 border-gray-300 p-2'>Profile</li>
                    <li className=' border-b-2 border-gray-300 p-2'>account</li>
                    <li className=' border-b-2 border-gray-300 p-2'>setting</li>
                </ul>
            </div>


            {/* <Link to='/'>Home</Link>
            <button className='bg-red p-2 rounded' onClick={() => { logout(); navigate('/') }}>
                Logout
            </button> */}

        </div>
    )
}

export default Profile