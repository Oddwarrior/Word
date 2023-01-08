import React from 'react'

export default function Footer() {
    return (
        <footer className=' text-gray-400 text-sm flex justify-center w-full mb-0 p-0 absolute bottom-2'>
            © {new Date().getFullYear()} WORD, LLC
        </footer>
    )
}
