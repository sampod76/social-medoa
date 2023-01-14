import React from 'react'
import { GrAdd } from 'react-icons/gr'
const RightUpperSidebar = () => {
    return (
        <div className='bg-white w-full rounded-2xl box-border p-3 flex flex-col gap-4'>
            <div className="">
                <h5 className='m-0'>Grow Followers</h5>
            </div>

            <div className=" flex items-center justify-evenly">
                <div className="">
                    <div className=" w-12 h-12 rounded-full outline outline-1 outline-black flex items-center justify-center ">
                        <GrAdd style={{ fontSize: '20px' }} />
                    </div>
                </div>
                <div className=" flex items-center justify-center my-4 -space-x-2">
                    <img src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565__340.jpg" className='h-12 w-12 rounded-full object-cover ring-4 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                    <img src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg" className='h-12 w-12 rounded-full object-cover ring-4 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                    <img src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg" className='h-12 w-12 rounded-full object-cover ring-4 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg" className='h-12 w-12 rounded-full object-cover ring-4 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                </div>
            </div>


            <div className="w-full">
                <div className="w-full flex items-center justify-start">
                    <button className=' bg-6A4ADF px-5 py-2 rounded-full text-white font-semibold whitespace-nowrap'>Invite Followers</button>
                </div>
            </div>
        </div>
    )
}

export default RightUpperSidebar