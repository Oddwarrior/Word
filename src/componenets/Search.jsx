import React from 'react'
import Type from './type-writer'
import { useState, useEffect } from 'react';
import { getMeaning } from '../common/api';
import Meaning from './meaning';
import { DotLoader, PacmanLoader, HashLoader } from 'react-spinners';

export default function Search() {

    const [text, setText] = useState("");
    const [partOfSpeech, setPartOfSpeech] = useState("")
    const [meaning, setMeaning] = useState("")
    const [message, setMessage] = useState("")

    const [dataLoaded, setDataLoaded] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowSpinner(true);
        setDataLoaded(false);

        const response = await getMeaning(text);

        if (response.message) {
            setMessage(response.message);
        } else {
            setPartOfSpeech(response.partOfSpeech);
            setMeaning(response.definition);
        }

        setShowSpinner(false);
        setDataLoaded(true);
    }

    //load data only when input is changed
    useEffect(() => {
        setDataLoaded(false);
    }, [text])

    return (
        <div className={`pt-4 lg:p-10 lg:pt-24 lg:flex items-center justify-center  ${dataLoaded && 'xl:gap-20'}  duration-300`}>
            <section className={` lg:p-12 lg:border-[#E0B1CB50] ${dataLoaded && `lg:border-r-[1px]`}`}>

                <form onSubmit={handleSubmit} className='flex  flex-col items-center p-4'>
                    <section className=' text-white' >
                        <h1 className='bold-font'>Welcome to</h1>
                        <h1 className=' text-[#BE95C4] bold-font'><Type string="WORD" /></h1>
                    </section>

                    <section className='flex flex-col w-[300px] sm:w-[400px] justify-center m-4'>
                        <input name='text'
                            value={text} type='text'
                            onChange={(e) => { setText(e.target.value) }}
                            className=' rounded-full h-10 sm:h-12 mt-4 mb-4 md:mt-8 md:mb-8 focus:outline-none p-4 hover:shadow-md'
                            placeholder='Type a word' />
                        <button type='submit' className='rounded-full bg-[#231942] w-24 sm:w-32 sm:h-12 sm:  py-2 text-[#E0B1CB] m-auto  hover:bg-[#0E0A1C] hover:shadow-md duration-500 hover:scale-[1.01]'>Search</button>
                    </section>
                </form >

            </section >

            <section className='lg:p-8'>
                {showSpinner && <section className='flex flex-col items-center justify-center m-8 font-semibold text-[231942] '>
                    <DotLoader
                        color="#231942"
                        size={80}
                    />
                    <h1 className='mt-4 '> loading your word,</h1>
                    <h1 > Please wait</h1>
                </section>}
                <section className={` ${dataLoaded ? ' block' : 'hidden'}`}>
                    <Meaning onDataLoaded={dataLoaded} word={text} partOfSpeech={partOfSpeech} meaning={meaning} message={message} />
                </section>
            </section >
        </div >

    )
}