import React from 'react'

export default function Footer() {
    return (
        <footer className=' text-gray-400 text-sm flex justify-center w-full my-2 '>
            © {new Date().getFullYear()} WORD, LLC
        </footer>
    )
}
