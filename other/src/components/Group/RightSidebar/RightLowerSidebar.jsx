import React from 'react'
import { GrAdd } from 'react-icons/gr'
import PeopleRequest from './PeopleRequest'
const RightLowerSidebar = () => {
    return (
        <div className='bg-white w-full shadow-xl rounded-2xl box-border p-3 flex flex-col gap-4'>
            <div className="px-2">
                <h5 className='m-0 text-lg'>Requests</h5>
            </div>

            <div className=" w-full flex items-center justify-evenly">
                <div className="flex flex-col w-full">
                    <PeopleRequest name='Alex tailor' mutualFriends='14' profileImage='https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565__340.jpg' />
                    <PeopleRequest name='Tailor Swift' mutualFriends='155' profileImage='https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg' />
                </div> 
            </div>
        </div>
    )
}

export default RightLowerSidebar