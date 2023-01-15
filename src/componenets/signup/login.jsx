import React from 'react'

function Login() {
    return (
        <div className='w-full  md:w-[500px] p-6   '>
            <form className='flex flex-col gap-1 h-full py-2'>

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
                    className='  text-white border p-3 mt-8 rounded-full pl-6  bg-theme-primary cursor-pointer'
                    value="Login"
                />
            </form>
        </div>

    )
}

export default Login