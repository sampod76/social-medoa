import React from 'react'

const PeopleRequest = ({name, profileImage, mutualFriends}) => {
    return (
        <div className="w-full flex flex-col gap-4 mb-5">
            <div className="w-full flex gap-2">
                <img src={profileImage} className='h-12 w-12 rounded-full object-cover ring-4 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                <div className="flex flex-col">
                    <span className='m-0'>{name}</span>
                    <span className='m-0'>{mutualFriends} mutual friends</span>
                 </div>
            </div>
            <div className="w-full flex items-center gap-4 justify-between px-1">
                <button className=' bg-6A4ADF shadow-xl flex-1 py-2 rounded-full text-white text-sm font-semibold whitespace-nowrap'>Accept</button>
                <button className=' shadow-xl flex-1 py-2 rounded-full text-black text-sm font-semibold whitespace-nowrap'>Decline</button>
            </div>
        </div>
    )
}

export default PeopleRequest
