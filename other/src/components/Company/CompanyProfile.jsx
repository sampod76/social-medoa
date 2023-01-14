import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
export const CompanyProfile = () => {
    return (
        <div className="md:h-90 h-64 w-full flex items-center justify-center mt-4">
            <div className="h-full w-full overflow-hidden rounded-30px">

                <div className=" h-2/3 w-full overflow-hidden">
                    <img src="https://cdn.pixabay.com/photo/2023/01/06/10/56/sunset-7700935__340.jpg" className='h-full w-full object-cover' alt="profilebg" />
                </div>
                <div className="h-1/3 w-full bg-white flex justify-between items-center relative ">
                    <div className=" flex h-full ">
                        {/* profile Image */}
                        <div className="">
                            <img src="https://media.licdn.com/dms/image/C4D0BAQETTlKtJ_XfKg/company-logo_200_200/0/1642261165086?e=1681344000&v=beta&t=ixtqMbpefIsqV62rvHS0Z0QCmBlO8XdAjl9bqK5WNaU" className='h-24 w-24  md:h-40 md:w-40 rounded-full object-cover ring-2 ring-gray-400 duration-150 hover:ring-blue-100 md:translate-x-8 translate-x-5 -translate-y-1/2' alt="profileImg" />
                        </div>
                        {/* profile About  */}

                        <div className=" h-full flex md:items-center md:justify-center items-start md:mt-0 mt-2 justify-start md:translate-x-16 translate-x-7 box-border ">
                            <div className=" flex flex-col gap-1 items-start">
                                <span className='font-semibold text-gray-700 md:text-lg text-sm'>ART Design</span>
                                <div className=" flex items-center justify-center gap-3">
                                    <span className=' lowercase font-normal md:text-base text-xs '> @artdesigndelhi </span>
                                    <span className='m-0 whitespace-nowrap md:text-sm text-xs hidden sm:block '>Digital Marketing</span>
                                </div>
                                <div className='font-normal flex items-center justify-center gap-2'>
                                    <span className='m-0 font-semibold md:text-base text-xs'>2.8M</span>
                                    <span className='m-0 font-normal md:text-base text-xs'>followers</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* end follow div  */}
                    <div className="h-full flex items-end justify-end mdd:pb-0 bottom-3 absolute right-2 ">
                        <div className="md:pr-8 pr-3 flex w-full items-center justify-end md:justify-center gap-2">
                            <button className=' bg-6A4ADF md:px-4 px-2 md:w-32 w-16 py-1 md:h-10 rounded-full text-white text-xs md:text-sm font-semibold'>Follow</button>
                            <BsThreeDots className='mdd:text-xl text-xs ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile