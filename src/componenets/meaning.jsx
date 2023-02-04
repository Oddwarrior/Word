import React from 'react'
import { updateUserWords } from '../common/api';
import useAuth from '../common/AuthContext'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';


export default function Meaning({ word, partOfSpeech, meaning, message }) {
    const currentWord = { word }
    const { user, updateWords, token } = useAuth();

    const found = user?.words.find(w => w.word === currentWord.word);
    const [saved, setSaved] = useState(found);

    async function handleClick() {
        if (!user) return <Navigate to='/auth/login' />
        setSaved(!saved);
        const response = await updateUserWords(currentWord, token, user?.id);
        if (response.status == "ok") updateWords(response.words)
    }

    if (message) {
        return (
            <div className='shadow-md border border-gray-2 p-6 w-[80%] md:w-[500px] m-auto rounded-lg flex flex-col gap-2' >
                <section>
                    <h1 className=' font-bold text-theme-primary'>oops</h1>
                    {message}
                </section>
            </div>
        )
    }
    else return (

        <div className='relative shadow-md border border-gray-2  w-[80%] md:w-[500px] m-auto rounded-lg ' >

            <button
                onClick={handleClick}
                className={`absolute right-0 ${saved ? 'bg-green-500  text-white' : 'bg-gray-300'} p-1 px-2 rounded-bl-md rounded-tr-md transition-colors duration-300`}>
                {saved ? "saved" : "save"}
            </button>

            <section className='flex flex-col gap-2 p-6 '>
                <article>
                    <h1 className=' font-bold text-theme-primary '>Word</h1>
                    {word}
                </article>
                <article>
                    <h1 className=' font-bold text-theme-primary'>Part of Speech</h1>
                    {partOfSpeech}
                </article>
                <article>
                    <h1 className=' font-bold text-theme-primary'>Meaning</h1>
                    <ul className=' list-none flex flex-col gap-2'>
                        <li >{meaning[0]?.definition}</li>
                        <li>{meaning[1]?.definition}</li>
                    </ul>

                </article>

            </section>
        </div>
    )
}
