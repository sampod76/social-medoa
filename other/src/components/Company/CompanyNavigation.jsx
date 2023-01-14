import React from 'react'
import { NavLink } from 'react-router-dom'
const CompanyNavigation = () => {
    return (
        <nav className='w-full flex items-center justify-between gap-3 rounded-2xl mb-3 md:px-2 bg-white p-2 '>
           
            <NavLink exact to='/' className='flex-1 py-2 rounded-2xl font-semibold flex items-center justify-center' >Company Home</NavLink>
            <NavLink exact to='/company/about' className='flex-1 py-2 rounded-2xl font-semibold flex items-center justify-center' >About</NavLink>
            <NavLink exact to='/company/job' className='flex-1 py-2 rounded-2xl font-semibold flex items-center justify-center' >Job</NavLink>

        </nav >
    )
}

export default CompanyNavigation