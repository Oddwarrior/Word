import React from 'react'

export default function Footer() {
    return (
        <footer className=' text-gray-400 text-sm flex justify-center w-full py-2 my-2 '>
            © {new Date().getFullYear()} WORD, LLC
        </footer>
    )
}
