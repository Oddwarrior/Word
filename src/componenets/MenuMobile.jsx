import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function MenuMobile() {
    return (
        <div >
            <ul className='flex flex-col gap-2 p-4 font-medium bg-white text-sm h-auto '>
                <NavLink to='/' className=' hover:text-theme-primary duration-300 transition-colors border-b-2 p-2'>Home</NavLink>
                <NavLink className=' hover:text-theme-primary duration-300 transition-colors border-b-2 p-2'>About</NavLink>
                <NavLink className=' hover:text-theme-primary duration-300 transition-colors border-b-2 p-2'>Contact</NavLink>
            </ul>
        </div>
    )
}

export default MenuMobile