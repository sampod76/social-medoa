import React from 'react'
import IconText from '../IconText'
import { IoEyeSharp } from 'react-icons/io5'
import { FaThumbsUp, FaLaughBeam, FaThumbsDown, FaComment, FaShare } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import CommentBox from './CommentBox'
import { useState } from 'react'
import EyeModal from '../Modals/EyeModal'
import { useEffect } from 'react'
import ReactionModal from '../Modals/ReactionModal'
const PostPreView = () => {
    const [like, setLike] = useState(false);
    const [showEye, setShowEye] = useState(false);
    const [commentBox, setCommentBox] = useState(false);
    const [commentInput, setCommentInput] = useState('');
    const [comment, setComment] = useState(['hello', 'world']);
    useEffect(() => {
        const CommentPush = (input) => {
            setComment.push(input);
        }
    })
    return (
        <div className='bg-white w-full shadow-xl rounded-2xl box-border p-3 my-3'>
            <div className="w-full flex justify-between">
                <div className="flex justify-center items-center gap-3 ">

                    <img src="https://media.licdn.com/dms/image/C4D0BAQETTlKtJ_XfKg/company-logo_200_200/0/1642261165086?e=1681344000&v=beta&t=ixtqMbpefIsqV62rvHS0Z0QCmBlO8XdAjl9bqK5WNaU" className='h-10 w-10 rounded-full object-cover ring-2 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />

                    <div className="flex flex-col gap-1 ">
                        <p className='m-0 whitespace-nowrap text-sm font-semibold'>Leads4Needs</p>
                        <p className='m-0 whitespace-nowrap text-xs font-medium'>Sent 4 hours ago</p>
                    </div>
                </div>
                <div className="relative flex gap-3 items-center justify-center">
                    <div className="" onMouseLeave={() => { setShowEye(false) }} onMouseEnter={() => { setShowEye(true) }}>
                        <IconText title='342' Icon={IoEyeSharp} fontSize='20px' />
                    </div>
                    {
                        showEye && <div className='absolute -bottom-16 md:-left-32 md:-bottom-20 -left-28'> <EyeModal /> </div>
                    }
                    <BsThreeDots className='text-sm md:text-xl' />
                </div>
            </div>
            <div className="py-3 break-words w-full ">
                <p className='text-sm m-0 pl-3'>Leads4Needs Promote Local Business Online Free Listing any Type of #Business and Also Search Any Business and Get Free Leads
                    Home: https://lnkd.in/eAcde2yz
                    Free Listing: https://lnkd.in/e9U8PGjK

                    #leadsgeneration #leads4needs #business
                    #onlinemarketing #localbusiness #freemarketing #digitalamarketing
                </p>
            </div>
            <div className="w-full rounded-2xl overflow-hidden">
                <img src="https://media.licdn.com/dms/image/C4D22AQFtMKaf9f9osg/feedshare-shrink_800/0/1649446463247?e=1676505600&v=beta&t=HLDosNi1gnlf463SweUWvMhKij_oSqSJwYaR1uglszU" className='h-full w-full object-cover' alt="postImage" />
            </div>
            <div className="flex items-center justify-between p-3 border-solid border-b-2">
                <div className="flex">
                    <IconText Icon={FaThumbsUp} color='blue' />
                    <IconText Icon={AiFillHeart} color='red' />
                    <IconText Icon={FaLaughBeam} color='#ffb02e' />
                </div>
                <div className="flex items-baseline gap-2">
                    <p className='m-0 text-sm hover:underline cursor-pointer transition-all' onClick={() => { setCommentBox(!commentBox) }}>64 comments</p>
                    <p className='m-0 text-sm'>12 shares</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-evenly py-3">
                <div className="cursor-pointer relative flex items-center transition-all justify-center hover:bg-gray-200 rounded-xl w-28 h-12" onMouseLeave={() => {
                    setLike(false)
                }} onMouseEnter={() => {
                    setLike(true);
                }} >
                    {
                        like && <ReactionModal />
                    }
                    <IconText Icon={FaThumbsUp} title="65" fontSize='20px' />
                </div>
                <div className="cursor-pointer flex items-center justify-center hover:bg-gray-200 rounded-xl w-28 h-12">
                    <IconText Icon={FaThumbsDown} title="32" fontSize='20px' />
                </div>
                <div className="cursor-pointer flex items-center justify-center hover:bg-gray-200 rounded-xl w-28 h-12 " onClick={() => {
                    setCommentBox(!commentBox);
                }} >
                    <IconText Icon={FaComment} title="Comment" fontSize='20px' />
                </div>
                <div className=" flex items-center justify-center hover:bg-gray-200 rounded-xl w-28 h-12 cursor-pointer">
                    <IconText Icon={FaShare} title="Share" fontSize='20px' />
                </div>

            </div>
            {
                commentBox &&
                <div className="">
                    <div className="w-full">
                        <div className=' p-3 flex items-center gap-3'>
                            <div className="">
                                <div className=" w-10 h-10 rounded-full outline outline-1 overflow-hidden outline-black flex items-center justify-center ">
                                    <img src="https://cdn.pixabay.com/photo/2022/12/07/11/39/foam-7640940__340.jpg" className='h-full w-full object-cover' alt="profileImg" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex items-center w-full py-1 pl-4 pr-1 rounded-full bg-slate-200 bg-transparent outline outline-gray-500 outline-1">
                                    <input className='outline-none bg-transparent w-full text-gray-800 md:text-base text-xs ' placeholder='Write Something..' type="text" onChange={(e) => { setCommentInput(e.target.value) }} />
                                    <button className='bg-blue-700 px-4 md:text-sm text-xs py-2 rounded-full text-white font-semibold'

                                        onClick={() => { }}
                                    >Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full transition-all">
                        {
                            comment.map((item, i) => (
                                <CommentBox comment={item[i]} />
                            ))
                        }

                    </div>
                </div>
            }
        </div>
    )
}

export default PostPreView