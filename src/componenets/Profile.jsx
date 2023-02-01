import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { updateUserWords } from '../common/api';
import useAuth from '../common/AuthContext'
import { motion as m } from 'framer-motion';
import { HiHome } from 'react-icons/hi'

function Profile() {
    const { token, user, logout, updateUser } = useAuth();
    const navigate = useNavigate();

    async function handleUpdate() {
        const response = await updateUserWords({ "title": "demoWord" }, token, user?.id);
        if (response.status == "ok") updateUser(response.user.words)
    }
    return (
        <m.div className='p-4 flex flex-col md:flex-row-reverse gap-4  h-screen m-2'
            initial={{ x: 40 }}
            animate={{ x: 0 }}>

            <div className='w-full grid grid-rows-2 md:grid-rows-[250px_auto] '>
                <section className='shadow-lg rounded-2xl mb-4  '>
                    <section className='flex flex-col md:flex-row gap-4 items-center justify-center p-4'>
                        <article className='h-40 w-40 bg-slate-600 rounded-full flex  items-center justify-center text-3xl font-bold text-white uppercase'>
                            <p >{`${user?.fname[0]}${user?.lname[0]} `}</p>
                        </article>
                        <article className='text-center md:text-left'>
                            <h1 className='font-bold p-1 text-xl capitalize'>{`${user?.fname} ${user?.lname} `}</h1>
                            <p className='font-thin p-1'>{`${user?.email}`}</p>
                            <section className='flex justify-center md:justify-start items-center gap-4 p-2'>
                                <article className=' grid grid-rows-2 font-bold text-theme-primary'> {`${user?.words?.length}`} <p className=' text-black'>Words</p></article>
                                <article className=' grid grid-rows-2 font-bold text-theme-primary'>15 <p className=' text-black'>Likes</p></article>
                            </section>
                        </article>
                    </section>

                </section>

                <section className='p-4 shadow-lg rounded-xl'>
                    <button onClick={handleUpdate}> Add word</button>
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


            <div className='w-full md:w-1/5 h-full p-6 s shadow-lg rounded-2xl  bg-gray-200 pt-4 text '>
                <ul className='w-40 mb-4 flex flex-col gap-4 m-auto'>
                    <Link className=' border-b-2 border-gray-300 p-2 py-4 flex items-center justify-center gap-2 text-center font-bold'
                        to="/"
                    >
                        <HiHome />
                        Home
                    </Link>
                    <li className=' border-b-2 border-gray-300 p-2 text-center rounded-lg ease-in hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer'>Profile</li>
                    <li className=' border-b-2 border-gray-300 p-2 text-center rounded-lg ease-in hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer'>Account</li>
                    <li className=' border-b-2 border-gray-300 p-2 text-center rounded-lg ease-in hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer'>Setting</li>
                    <li
                        className='  p-2 mt-2 text-center cursor-pointer bg-theme-primary text-white rounded-lg active:bg-theme-primary-dark'
                        onClick={() => { if (confirm("Are you sure you want to logout?")) logout() }}
                    >Logout</li>
                </ul>
            </div>


            {/* <Link to='/'>Home</Link>
            <button className='bg-red p-2 rounded' onClick={() => { logout(); navigate('/') }}>
                Logout
            </button> */}

        </m.div>
    )
}

export default Profile