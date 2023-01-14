import React from 'react'

const Following = ({ profileImage, name, username }) => {
    return (
        <div className="w-full flex flex-col gap-4 mb-5">
            <div className="w-full flex items-center justify-between">
                <div className="flex gap-2 w-full">
                    <img src={profileImage} className='h-10 w-10 rounded-full object-cover ring-2 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                    <div className="flex flex-col">
                        <span className='m-0'>{name}</span>
                        <span className='m-0 lowercase'>{username}</span>
                    </div>
                </div>
                <div className="">
                    <button className=' bg-6A4ADF shadow-xl px-3 py-2 rounded-full text-white text-xs font-semibold whitespace-nowrap'>Accept</button>
                </div>
            </div>
        </div>
    )
}

export default Following