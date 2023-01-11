import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function MenuMobile() {
    return (
        <div>
            <ul className='flex flex-col gap-4 p-4 font-medium bg-white text-sm '>
                <NavLink to='/' className=' hover:text-theme-primary-light duration-300 transition-colors ease-linear'>Home</NavLink>
                <NavLink className=' hover:text-theme-primary-light duration-300 transition-colors ease-linear'>About</NavLink>
                <NavLink className=' hover:text-theme-primary-light duration-300 transition-colors ease-linear'>Contact</NavLink>
            </ul>
        </div>
    )
}

export default MenuMobile