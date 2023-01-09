import React from 'react'

export default function Meaning({ word, partOfSpeech, meaning }) {
    return (
        <div className=' bg-[#BE95C4] p-6 m-4 w-[80%] md:w-[500px] m-auto rounded-lg flex flex-col gap-2 duration-500 hover:scale-[1.01]' >
            <article>
                <h1 className=' font-bold'>Word</h1>
                {word}
            </article>
            <article>
                <h1 className=' font-bold'>Part of Speech</h1>
                {partOfSpeech}
            </article>
            <article>
                <h1 className=' font-bold'>Meaning</h1>
                <ul className=' list-none flex flex-col gap-2'>
                    <li >{meaning[0]?.definition}</li>
                    <li>{meaning[1]?.definition}</li>
                </ul>

            </article>
        </div>
    )
}
