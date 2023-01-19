import React, { useState } from 'react'
import { logUser } from '../../common/api'
import googleIcon from '../../assets/google-icon.png'
import { Navigate } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import useAuth from '../../common/AuthContext';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [res, setRes] = useState({});
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await logUser({ email, password });
        if (response.status == "ok") {
            login(response.token)
        }
        setRes(response);

    }

    return (
        <m.div className='w-full  md:w-[500px] px-8 '
            initial={{ x: -40 }}
            animate={{ x: 0 }}
        >
            {res?.status && <Navigate to='/profile' replace={true} />}
            <form onSubmit={handleLogin} className='flex flex-col gap-1 h-full py-2'>
                {res?.error && <p className=' w-full px-4  text-xs p-2 rounded-md animate-pulse text-red-600 break-words bg-red-100'>*{res.error}</p>}
                <label className='text-gray-500 pt-1 pl-4 font-semibold' >Email :</label>
                <input name='email'
                    type='email'
                    className=' m-1 border h-10 p-3 rounded-full pl-6 transition-all duration-300 outline-none focus:outline-theme-primary-light focus:border-none'
                    placeholder='Enter your email '
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>Password :</label>
                <input name='password'
                    type='password'
                    className=' m-1 border p-3 h-10 rounded-full pl-6 transition-all duration-300 outline-none focus:outline-theme-primary-light focus:border-none'
                    placeholder='Enter password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

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
        </m.div>

    )
}

export default Login