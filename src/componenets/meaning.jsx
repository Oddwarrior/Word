import React from 'react'

export default function Meaning({ onDataLoaded, word, partOfSpeech, meaning }) {
    if (onDataLoaded) return (
        <div className=' bg-[#BE95C4] p-6 m-4 w-[80%] md:w-[500px] m-auto rounded-lg flex flex-col gap-2 duration-300' >
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
                {meaning}
            </article>
        </div>
    )
}
