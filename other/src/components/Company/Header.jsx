import React from 'react'
import { GoSearch } from 'react-icons/go'
import { MdAdd } from 'react-icons/md'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-evenly sticky top-0 z-50 py-2 bg-6A4ADF gap-6 px-2 box-border'>
      <div className="h-full flex items-center justify-center">
        <h5 className='text-white'>platform</h5>
      </div>

      <div className=" w-2/4">
        <div className="flex items-center w-full py-2 px-4 border-2 rounded-full border-white bg-none gap-3">
          <GoSearch className='text-white text-xl' />
          <input className='outline-none bg-transparent w-full text-white ' placeholder='search for creators, inspirations and projects' type="text" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className=' h-8 w-8 rounded-full ring-2 ring-white flex items-center justify-center duration-150 hover:ring-blue-100 cursor-pointer'>
          <MdAdd className='text-xl text-white' />
        </div>
        <img src="https://media.licdn.com/dms/image/C4D0BAQETTlKtJ_XfKg/company-logo_200_200/0/1642261165086?e=1681344000&v=beta&t=ixtqMbpefIsqV62rvHS0Z0QCmBlO8XdAjl9bqK5WNaU" className=' h-8 w-8 rounded-full object-cover ring-2 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
      

      </div>

    </div>
  )
}

export default Header