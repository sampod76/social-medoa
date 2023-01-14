import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { TiCamera } from 'react-icons/ti'
export const GroupProfile = () => {
    return (
        <div className="md:h-96 h-64 w-full flex items-center justify-center my-4">
            <div className="h-full w-full relative overflow-hidden rounded-30px shadow-xl ">
                <div className="h-full w-full before:absolute before:content-[''] before:h-full before:w-full before:bg-00000080">
                    <img src="https://cdn.pixabay.com/photo/2017/06/26/08/43/ribblehead-viaduct-2443085__340.jpg" className="h-full w-full object-cover  " alt="profilebg" />
                </div>
                <div className="w-full h-4/5 absolute top-0 pb-8 lg:px-8 px-3">
                    <div className="flex w-full items-center lg:p-5 p-4 justify-end">
                        <div className="lg:outline-1 lg:outline-white lg:outline lg:py-3 lg:px-6 cursor-pointer flex items-center justify-center gap-4 rounded-3xl ">
                            <TiCamera className='text-white lg:text-xl text-3xl lg:opacity-100 opacity-70' />
                            <h5 className='m-0 text-white text-xs font-semibold lg:block hidden '>Change Background</h5>
                        </div>
                    </div>
                    <div className='absolute bottom-7 flex items-center justify-center gap-5 left-7 lg:left-12'>
                        <div className="lg:h-40 lg:w-40 md:h-32 md:w-32 w-24 h-24  relative ">
                            <TiCamera className='text-white text-xl lg:opacity-100 absolute right-2 top-2 opacity-70 cursor-pointer' />
                            <img src="https://cdn.pixabay.com/photo/2017/06/26/08/43/ribblehead-viaduct-2443085__340.jpg" className='h-full w-full object-cover rounded-xl outline-2 outline-white outline' alt="" />
                        </div>
                        <div className="flex flex-col translate-y-1/2 h-full ">
                            <span className="m-0 lg:text-4xl md:text-3xl mdd:text-2xl text-xl text-white sm:font-bold font-bold">Directors Group</span>
                            <div className="sm:flex hidden items-center justify-center gap-2">
                                <div className=" flex items-center justify-center my-4 md:-space-x-4 -space-x-2">
                                    <img src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565__340.jpg" className='md:h-8 md:w-8 w-4 h-4 rounded-full object-cover ring-1 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                                    <img src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750__340.jpg" className='md:h-8 md:w-8 w-4 h-4 rounded-full object-cover ring-1 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                                    <img src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646__340.jpg" className='md:h-8 md:w-8 w-4 h-4 rounded-full object-cover ring-1 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                                </div>
                                <div className="flex md:gap-2 gap-1 ">
                                    <span className='text-white text-sm md:text-lg'>&</span>
                                    <span className='text-white text-sm md:text-lg'>other members of this group</span>
                                </div>
                            </div>
                        </div>

                    </div>




                </div>
                <div className="h-1/5 absolute w-full border-t-2 border-t-white border-solid flex justify-between items-center bottom-0 px-6 ">
                    <div className=" flex items-center justify-center gap-1 md:gap-4 text-white">
                        <span className='m-0 md:text-base smm:text-sm text-xs text-white whitespace-nowrap'>5436 members</span>
                        <span className='m-0  text-white md:text-3xl p-2 pb-2 md:pb-4'>.</span>
                        <span className='m-0 md:text-base smm:text-sm text-xs text-white whitespace-nowrap'>2348 followers</span>

                    </div>

                    {/* end follow div  */}
                    <div className="flex items-center justify-center ">
                        <div className=" flex w-full items-center justify-center gap-2">
                            <button className=' bg-white md:px-4 px-2 md:w-32 w-16 py-1 md:h-10 rounded-full text-black text-xs md:text-sm font-semibold'>Join</button>
                            <BsThreeDots className='md:text-3xl text-xs text-white ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupProfile