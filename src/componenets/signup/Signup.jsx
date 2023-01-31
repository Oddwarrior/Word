import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { createUser } from '../../common/api'
import { motion as m } from 'framer-motion';
import PulseLoader from 'react-spinners/PulseLoader';

function Signup() {

    const [signupData, setSignupData] = useState({ fname: "", lname: "", email: "", mobile: "", password: "" });
    const [res, setRes] = useState({});
    const [showLoader, setShowLoader] = useState(false)


    const handleSignup = async (e) => {
        e.preventDefault();
        setShowLoader(true);
        const user = signupData;
        const response = await createUser({ user });
        setRes(response);
        setShowLoader(false);
    }

    return (
        <m.div className='w-full  md:w-[500px]  px-8 '
            initial={{ x: 40 }}
            animate={{ x: 0 }}
        >
            {res?.message && <p className=' w-full px-4  text-xs p-4 rounded-md animate-pulse text-green-600 break-words bg-green-100'>*{res.message}</p>}
            {res?.status && <Navigate to='/user/profile/me' replace={true} />}
            <form className='flex flex-col gap-1 h-full ' onSubmit={handleSignup}>

                {res?.error && <p className=' w-full px-4  text-xs p-2 rounded-md animate-pulse text-red-600 break-words bg-red-100'>*{res.error}</p>}

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>First name :</label>
                <input name='fname'
                    type='text'
                    value={signupData.fname}
                    className=' mx-1 h-10 border p-3 rounded-full pl-6 transitioon-color duration-300 outline-none focus:outline-theme-primary-light  focus:border-none'
                    placeholder='Enter your first name'
                    required
                    onChange={(e) => setSignupData({ ...signupData, fname: e.target.value })}
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>Last name :</label>
                <input name='lname'
                    type='text'
                    className=' m-1 h-10  border p-3 rounded-full pl-6 transitioon-color duration-300 outline-none focus:outline-theme-primary-light  focus:border-none'
                    placeholder='Enter your last name'
                    onChange={(e) => setSignupData({ ...signupData, lname: e.target.value })}
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold' >Phone :</label>
                <input name='mobile'
                    type='number'
                    className=' m-1 h-10 border p-3 rounded-full pl-6 transitioon-color duration-300 outline-none focus:outline-theme-primary-light  focus:border-none'
                    placeholder='Enter your mobile number '
                    onChange={(e) => setSignupData({ ...signupData, mobile: e.target.value })}
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold' >Email :</label>
                <input name='email'
                    type='email'
                    value={signupData.email}
                    className=' m-1 border h-10  p-3 rounded-full pl-6 transitioon-color duration-300 outline-none focus:outline-theme-primary-light  focus:border-none'
                    placeholder='Enter your email '
                    required
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>Password :</label>
                <input name='password'
                    type='password'
                    value={signupData.password}
                    className=' m-1 border h-10  p-3 rounded-full pl-6 transitioon-color duration-300 outline-none focus:outline-theme-primary-light  focus:border-none'
                    placeholder='Set a password'
                    required
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                />

                <button
                    type='submit'
                    className='  text-white border p-3 mt-6 rounded-full pl-6 h-12 bg-theme-primary cursor-pointer active:bg-theme-primary-dark'>
                    {showLoader ? <PulseLoader size={8} color="#ffffff" /> : "Signup"}
                </button>

            </form>
        </m.div>
    )
}

export default Signup