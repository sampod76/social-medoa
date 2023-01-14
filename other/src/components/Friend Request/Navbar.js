import React from 'react';

const Navbar = () => {
    return (
        <div className='space-y-3'>
            <div className='flex items-center justify-between'>

                <p>People You May Know</p>
                <input type="search" name="" id="" placeholder='Search..' className='rounded-3xl placeholder:text-gray-600' />
            </div>
            
            <div className='grid grid-cols-5 gap-3'>
                <button className='rounded-3xl text-center text-[#6A4ADF] shadow-[2px_2px_15px_2px_#ccc] py-2'>Artrist</button>
                <button className='rounded-3xl text-center text-[#6A4ADF] shadow-[2px_2px_15px_2px_#ccc] py-2'>Youtuber</button>
                <button className='rounded-3xl text-center text-[#6A4ADF] shadow-[2px_2px_15px_2px_#ccc] py-2'>Instagram</button>
                <button className='rounded-3xl text-center text-[#6A4ADF] shadow-[2px_2px_15px_2px_#ccc] py-2'>Entertainment</button>
                <button className='rounded-3xl text-center text-[#6A4ADF] shadow-[2px_2px_15px_2px_#ccc] py-2'>More Filters</button>
            </div>

        </div>
    );
};

export default Navbar;