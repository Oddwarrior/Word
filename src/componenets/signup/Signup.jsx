import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { createUser } from '../../common/api'

function Signup() {

    const [signupData, setSignupData] = useState({ fname: "fname", lname: "lname", email: "email", mobile: "mobile", password: "password" });
    const [res, setRes] = useState({});
    const handleSignup = async (e) => {
        e.preventDefault();
        const user = signupData;
        const response = await createUser({ user });
        console.log(response);
        setRes(response);
    }

    return (
        <div className='w-full  md:w-[500px]  px-8  '>
            {res?.status && (<Navigate to="/user/login" replace={true} />)}
            <form className='flex flex-col gap-1 h-full ' onSubmit={handleSignup}>

                {res?.error && <p className=' w-full px-4  text-xs p-2 rounded-md animate-pulse text-red-600 break-words bg-red-100'>*{res.error}</p>}

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>First name :</label>
                <input name='fname'
                    type='text'
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
                    className=' m-1 border h-10  p-3 rounded-full pl-6 transitioon-color duration-300 outline-none focus:outline-theme-primary-light  focus:border-none'
                    placeholder='Enter your email '
                    required
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>Password :</label>
                <input name='password'
                    type='password'
                    className=' m-1 border h-10  p-3 rounded-full pl-6 transitioon-color duration-300 outline-none focus:outline-theme-primary-light  focus:border-none'
                    placeholder='Set a password'
                    required
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                />

                <input
                    type='submit'
                    className='  text-white border p-3 mt-4 rounded-full pl-6  bg-theme-primary cursor-pointer active:bg-theme-primary-dark'
                    value="Signup"
                />

            </form>
        </div>
    )
}

export default Signup