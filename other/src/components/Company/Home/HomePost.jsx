import React from 'react'
import { FcPhotoReel, FcStackOfPhotos } from 'react-icons/fc'
import { VscGraph } from 'react-icons/vsc'

import IconText from '../IconText'
const HomePost = () => {
    return (
        <div className='bg-white w-full rounded-2xl box-border px-2'>
            <div className=' p-4 border-b-2 border-solid flex items-center gap-3'>
                <div className="">
                    <div className=" w-10 h-10 ">
                        <img src="https://media.licdn.com/dms/image/C4D0BAQETTlKtJ_XfKg/company-logo_200_200/0/1642261165086?e=1681344000&v=beta&t=ixtqMbpefIsqV62rvHS0Z0QCmBlO8XdAjl9bqK5WNaU" className='h-full w-full rounded-full object-cover ring-2 ring-white duration-150 hover:ring-blue-100 cursor-pointer'alt="profileImg" />
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex items-center w-full py-2 px-4 rounded-full bg-transparent outline outline-gray-500 outline-1">
                        <input className='outline-none bg-transparent w-full text-gray-800 md:text-base text-xs ' placeholder='Write Something..' type="text" />
                    </div>
                </div>
                <div className="">
                    <button className=' bg-blue-700 px-4 md:text-sm text-xs py-2 rounded-full text-white font-semibold'>Send</button>
                </div>
            </div>
            <div className="flex w-full items-center justify-around p-3">
                <IconText Icon={FcPhotoReel} title='reel' fontSize='25px' />
                <IconText Icon={FcStackOfPhotos} title='Photo/Video' fontSize='25px' />
                <IconText Icon={VscGraph} title='reel' color='#a7ab09' fontSize='25px' />
            </div>

        </div>
    )
}

export default HomePost
