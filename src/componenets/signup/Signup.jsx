import React from 'react'

function Signup() {
    return (
        <div className='w-full  md:w-[500px]  p-6  '>
            <form className='flex flex-col gap-1 h-full '>
                <label className='text-gray-500 pt-1 pl-4 font-semibold'>First name :</label>
                <input name='fname'
                    type='text'
                    className=' mx-1 border p-3 rounded-full pl-6 transition-all duration-300 outline-none focus:outline-theme-primary focus:border-none'
                    placeholder='Enter your first name'
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>Last name :</label>
                <input name='lname'
                    type='text'
                    className=' m-1 border p-3 rounded-full pl-6 transition-all duration-300 outline-none focus:outline-theme-primary focus:border-none'
                    placeholder='Enter your last name'
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold' >Phone :</label>
                <input name='mobile'
                    type='number'
                    className=' m-1 border p-3 rounded-full pl-6 transition-all duration-300 outline-none focus:outline-theme-primary focus:border-none'
                    placeholder='Enter your mobile number '
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold' >Email :</label>
                <input name='email'
                    type='email'
                    className=' m-1 border p-3 rounded-full pl-6 transition-all duration-300 outline-none focus:outline-theme-primary focus:border-none'
                    placeholder='Enter your email '
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>Password :</label>
                <input name='password'
                    type='password'
                    className=' m-1 border p-3 rounded-full pl-6 transition-all duration-300 outline-none focus:outline-theme-primary focus:border-none'
                    placeholder='Enter password'
                />

                <input
                    type='submit'
                    className='  text-white border p-3 mt-4 rounded-full pl-6  bg-theme-primary cursor-pointer'
                    value="Signup"
                />


            </form>
        </div>
    )
}

export default Signup