import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Menu() {
    return (
        <div>
            <ul className='flex flex-col md:flex-row gap-4 p-4 font-medium text-white '>
                <NavLink to='/' className=' hover:text-theme-primary-light duration-300 transition-colors ease-linear'>Home</NavLink>
                <NavLink className=' hover:text-theme-primary-light duration-300 transition-colors ease-linear'>About</NavLink>
                <NavLink className=' hover:text-theme-primary-light duration-300 transition-colors ease-linear'>Contact</NavLink>
            </ul>
        </div>
    )
}

export default Menu