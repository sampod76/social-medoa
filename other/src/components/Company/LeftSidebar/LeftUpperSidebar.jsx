import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
const LeftUpperSidebar = () => {
    return (
        <div className='bg-white w-full rounded-2xl box-border md:p-5 p-3'>
            <div className=" flex flex-col gap-3">
                <div className="flex items-center md:justify-evenly justify-start gap-4 w-full ">

                    {/* sidebar profile div */}

                    <div className="flex items-center justify-between">
                        <div className="h-20 w-20">
                            <img src="https://media.licdn.com/dms/image/C4D0BAQETTlKtJ_XfKg/company-logo_200_200/0/1642261165086?e=1681344000&v=beta&t=ixtqMbpefIsqV62rvHS0Z0QCmBlO8XdAjl9bqK5WNaU" className=' h-full w-full rounded-full object-cover ring-4 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                        </div>
                    </div>


                    {/* left sidebar profile about */}

                    <div className="">
                        <div className=" flex flex-col items-start h-full justify-evenly gap-1">
                            <div className=' flex items-center justify-center gap-2 m-0'>
                                <span className='font-semibold text-sm m-0'>ART Design</span>
                                <MdVerified style={{ color: 'blue' }} />
                            </div>
                            <a target='_blank' rel='noreferrer' href='https://artdesign.com' className=' lowercase font-semibold text-xs text-sky-600 m-0 no-underline'>www.artdesign.com</a>
                            <span className=' lowercase font-semibold text-xs opacity-60 m-0'>@artdesigndelhi</span>
                            <span className='font-semibold text-sm m-0'>2.8M followers</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <p className='m-0 whitespace-normal text-sm'>Art Designs is a successful UI Design company which builds high quality UI interfaces.</p>
                </div>

                <div className="pr-8 flex items-center justify-evenly gap-2">
                    <button className=' bg-6A4ADF px-5 py-2 rounded-full text-white font-semibold'>Follow</button>
                    <div className=" w-7 h-7 rounded-full outline outline-1 outline-black flex items-center justify-center ">
                        <BsThreeDots style={{ fontSize: '20px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftUpperSidebar
