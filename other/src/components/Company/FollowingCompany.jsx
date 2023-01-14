import React from 'react'
export const FollowingCompany = ({companyBackground,companyProfile, companyName, companyType,members}) => {
    return (
        <div className="md:h-96 h-64 flex items-center justify-center">
            <div className="h-full w-full overflow-hidden rounded-lg shadow-xl">

                <div className=" h-2/3 w-full p-3 pb-0 bg-white overflow-hidden">
                    <img src={companyBackground} className='h-full w-full object-cover rounded-t-lg' alt="profilebg" />
                </div>
                <div className="h-1/3 w-full bg-white flex justify-between items-center relative ">
                    <div className=" flex h-full ">
                        {/* profile Image */}
                        <div className="cursor-pointer bg-white">
                            <img src={companyProfile} className='h-20 w-20  md:h-24 md:w-24 rounded-full object-cover ring-4 ring-gray-400 duration-150 bg-white hover:ring-blue-100 md:translate-x-8 translate-x-5 -translate-y-1/2' alt="profileImg" />
                        </div>
                        {/* profile About  */}

                        <div className=" h-full flex md:items-center md:justify-center items-start md:mt-0 mt-2 justify-start md:translate-x-16 translate-x-7 box-border ">
                            <div className=" flex flex-col gap-1 items-start">
                                <span className='font-semibold capitalize text-gray-700 md:text-lg text-sm'>{companyName }</span>    
                                <span className=' capitalize font-normal md:text-base text-xs '> {companyType} </span>
                                <div className='font-normal flex items-center justify-center gap-2'>
                                    <span className='m-0 font-normal md:text-base text-xs'>{members}</span>
                                    <span className='m-0 font-normal md:text-base text-xs'>members</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* end follow div  */}
                    <div className="h-full flex items-end justify-end mdd:pb-0 bottom-3 absolute right-2 ">
                        <div className="md:pr-8 pr-3 flex w-full items-center justify-end md:justify-center gap-2">
                            <button className=' bg-6A4ADF md:px-4 px-2 md:w-32 w-16 py-1 md:h-10 rounded-full text-white text-xs md:text-sm font-semibold'>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowingCompany