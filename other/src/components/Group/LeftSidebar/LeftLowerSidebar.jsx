import React from 'react'
import Following from './Following'
import Analytics from './Following'

const LeftLowerSidebar = () => {
    return (
        <div className='bg-white w-full shadow-xl rounded-2xl box-border md:p-4 p-3 mt-5'>
            <div className="px-2 mb-2">
                <h5 className='m-0 text-lg'>Who is following you</h5>
            </div>  
            <div className="">
                <Following profileImage='https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg' name='jeniffer white' username='@jenniferwhite'  />
                <Following profileImage='https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565__340.jpg' name='Dhruv rathee' username='@dhruvrathee' />

            </div>
            <span className='text-blue-400'>see more..</span>
        </div>
    )
}

export default LeftLowerSidebar