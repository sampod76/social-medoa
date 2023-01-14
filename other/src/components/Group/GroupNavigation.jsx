import React from 'react'
import { NavLink } from 'react-router-dom'
const GroupNavigation = () => {
    return (
        <nav className='w-full flex items-center justify-between gap-3 rounded-2xl md:px-2 bg-white p-2 mb-5 shadow-xl '>   
            <NavLink exact to='/group/home' className='flex-1 py-2 rounded-2xl font-semibold flex items-center justify-center' >Group Home</NavLink>
            <NavLink exact to='/group/about' className='flex-1 py-2 rounded-2xl font-semibold flex items-center justify-center' >About us</NavLink>
            <NavLink exact to='/group/job' className='flex-1 py-2 rounded-2xl font-semibold flex items-center justify-center' >Members</NavLink>
        </nav >
    )
}

export default GroupNavigation