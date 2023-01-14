import React from 'react'
const LeftUpperSidebar = () => {
    return (
        <div className='bg-white w-full rounded-2xl box-border overflow-hidden shadow-xl pt-0'>
            <div className="w-full h-32">
                <img src="https://cdn.pixabay.com/photo/2019/11/27/21/35/puffin-4657956__340.jpg" className='h-full w-full object-cover ' alt="" />
            </div>
            <div className="flex items-center justify-center flex-col -space-y-8 mb-3">
                <div className="-translate-y-1/2">
                    <img src="https://media.licdn.com/dms/image/C4D0BAQETTlKtJ_XfKg/company-logo_200_200/0/1642261165086?e=1681344000&v=beta&t=ixtqMbpefIsqV62rvHS0Z0QCmBlO8XdAjl9bqK5WNaU" className='h-20 w-20 rounded-full object-cover ring-2 ring-gray-400 duration-150 hover:ring-blue-100 m ' alt="profileImg" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className='m-0 font-semibold text-lg'>Directors Group</span>
                  <span className='lowercase text-sm text-gray-300'>@directorsgroups</span>
                </div>
            </div>
            <div className="p-2 flex border-solid border-y border-gray-300">
                <div className='flex-1 border-solid border-r border-gray-300  flex flex-col items-center justify-center p-3'>
                  <span>5436</span>
                  <span>members</span>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center p-3'>
                  <span>2348</span>
                  <span>followers</span>
                </div>
            </div>
            <div className="flex items-center justify-center py-2">
                <span>join</span>
            </div>
        </div>
    )
}

export default LeftUpperSidebar
