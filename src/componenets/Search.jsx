import React from 'react'
import Type from './type-writer'
import { useState, useEffect } from 'react';
import { getMeaning } from '../common/api';
import Meaning from './meaning';
import vector from '../assets/vector-word.svg'

import { DotLoader } from 'react-spinners';

export default function Search() {

    const [text, setText] = useState("");
    const [partOfSpeech, setPartOfSpeech] = useState("")
    const [meaning, setMeaning] = useState("")
    const [message, setMessage] = useState(null)

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
            setMessage(null);
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
        <div className={` pt-24 lg:p-10 lg:pt-32 lg:flex items-center justify-evenly  ${dataLoaded && 'xl:gap-20'}  duration-300`}>
            <section className={` lg:p-12 lg:border-theme-primary-light ${dataLoaded && `lg:border-r-[1px]`}`}>

                <form onSubmit={handleSubmit} className='flex  flex-col items-center p-4'>
                    <section className=' text-theme-primary' >
                        <h1 className='bold-font'>Welcome to</h1>
                        <h1 className='text-black bold-font'><Type string="WORD" /></h1>
                    </section>

                    <section className='flex flex-col w-[300px] sm:w-[400px] justify-center m-4'>
                        <input name='text'
                            value={text} type='text'
                            onChange={(e) => { setText(e.target.value) }}
                            className=' rounded-full h-10 sm:h-12 mt-4 mb-4 md:mt-8 md:mb-8 focus:outline-none p-4  border-gray border-2'
                            placeholder='Type a word'
                            autoComplete='off'
                        />
                        <button type='submit' className='rounded-full bg-theme-primary w-24 sm:w-32 sm:h-12 sm:  py-2 text-white m-auto  hover:bg-theme-primary-dark hover:shadow-md duration-300 '>Search</button>
                    </section>
                </form >

            </section >

            <section className='lg:p-8'>
                {showSpinner && <section className='flex flex-col items-center justify-center m-8 font-semibold text-[231942] '>
                    <DotLoader
                        color="#f72585"
                        size={80}
                    />
                    <h1 className='mt-4 '> loading your word,</h1>
                    <h1 > Please wait</h1>
                </section>}

                {!dataLoaded && !showSpinner && <section className='h-60 w-60 md:h-80 md:w-80 object-contain flex items-center justify-center m-auto'>
                    <img src={vector} />
                </section>}
                <section className={` ${dataLoaded ? ' block' : 'hidden'}`}>
                    <Meaning onDataLoaded={dataLoaded} word={text} partOfSpeech={partOfSpeech} meaning={meaning} message={message} />
                </section>
            </section >
        </div >

    )
}