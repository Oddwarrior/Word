import React from 'react'


export default function Meaning({ word, partOfSpeech, meaning, message }) {
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
    return (

        <div className='shadow-md border border-gray-2 p-6  w-[80%] md:w-[500px] m-auto rounded-lg flex flex-col gap-2' >
            <section>
                <article>
                    <h1 className=' font-bold text-theme-primary'>Word</h1>
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
