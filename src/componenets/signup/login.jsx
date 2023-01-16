import React from 'react'
import googleIcon from '../../assets/google-icon.png'


function Login() {
    return (
        <div className='w-full  md:w-[500px] px-8   '>
            <form className='flex flex-col gap-1 h-full py-2'>

                <label className='text-gray-500 pt-1 pl-4 font-semibold' >Email :</label>
                <input name='email'
                    type='email'
                    className=' m-1 border h-10 p-3 rounded-full pl-6 transition-all duration-300 outline-none focus:outline-theme-primary-light focus:border-none'
                    placeholder='Enter your email '
                    required
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>Password :</label>
                <input name='password'
                    type='password'
                    className=' m-1 border p-3 h-10 rounded-full pl-6 transition-all duration-300 outline-none focus:outline-theme-primary-light focus:border-none'
                    placeholder='Enter password'
                    required
                />

                <section className='flex flex-col'>
                    <input
                        type='submit'
                        className='  text-white border p-3 mt-6 rounded-full pl-6  bg-theme-primary cursor-pointer active:bg-theme-primary-dark'
                        value="Login"
                    />
                    <label className=' text-center m-2  text-gray-500'>OR</label>

                    <section className=' w-full text-white border-2 p-3  h-12 rounded-full pl-6 flex items-center justify-center active:bg-gray-200 cursor-pointer hover:shadow-sm'>
                        <article className='h-8 w-8 object-contain '>
                            <img src={googleIcon} />
                        </article>
                    </section>
                    <label className=' text-center m-2 text-sm  text-gray-500 font-monts'>continue with google</label>
                </section>

            </form>
        </div>

    )
}

export default Login