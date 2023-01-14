import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike, AiFillDislike, AiFillCaretDown } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";

const Main = () => {
    return (
        <div className='space-y-3 mx-5 md:mx-0 w-full'>
            <div className='h-12 bg-white rounded-3xl p-2 shadow-md'>
                <div className='flex gap-2'>

                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-9 h-9  rounded-full' />
                    <input type="search" name="" id="" placeholder='What’s on your mind, John?' className='w-full p-2 rounded-3xl bg-transparent  placeholder:text-gray-400 focus:outline-none -mt-1' />
                    <button className='bg-[#6A4ADF] w-28 h-7 text-white font-semibold rounded-3xl'>Post</button>
                </div>
            </div>
            <div className='bg-white rounded-2xl p-5 space-y-3 shadow-md'>
                <div className='flex justify-between gap-2 items-center'>
                    <div className='flex gap-2'>

                        <img src="https://img.freepik.com/free-vector/portrait-beautiful-girl-with-tiara-her-head_1196-849.jpg?size=338&ext=jpg&ga=GA1.1.1420041849.1667928226&semt=sph" alt="" className='w-9 h-9 rounded-full' />
                        <div className='-mt-1'>
                            <p className='font-semibold'>Jennifer White</p>
                            <p className='text-gray-400 text-xs'>Ireland, 28 minutes ago</p>
                        </div>
                    </div>
                    <BsThreeDots></BsThreeDots>
                </div>
                <img src="https://images.pexels.com/photos/6698524/pexels-photo-6698524.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full  rounded-xl' />
                <div className='flex justify-end items-center gap-2 text-gray-400'>
                    <p>64 comments</p>
                    <p>12 shares</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <div className='flex gap-1'>
                        <AiFillLike className='text-xl text-gray-400'></AiFillLike>
                        <p>65</p>
                    </div>
                    <div className='flex gap-1'>
                        <AiFillDislike className='text-xl mt-1 text-gray-400'></AiFillDislike>
                        <p>32</p>
                    </div>
                    <div className='flex gap-1'>
                        <FaComment className='text-xl text-gray-400 mt-1'></FaComment>
                        <p>Comments</p>
                    </div>
                    <div className='flex gap-1'>
                        <FaShare className='text-xl text-gray-400 mt-1'></FaShare>
                        <p>Share</p>
                    </div>

                </div>
                <div>
                    <p className='flex gap-2 text-gray-400'>Most Relevant <span><AiFillCaretDown className='text-lg mt-1'></AiFillCaretDown></span></p>
                </div>

                <div className='h-12 bg-white rounded-3xl p-2'>
                    <div className='flex gap-2 items-center'>

                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-9 h-9  rounded-full' />
                        <div className='flex justify-between items-center w-full border-2 rounded-3xl'>

                            <input type="search" name="" id="" placeholder='Add a comment...' className='w-full p-2 rounded-3xl bg-transparent  placeholder:text-gray-400 focus:outline-none -mt-1' />
                            <button className='bg-[#6A4ADF] w-24 h-7 text-white font-semibold rounded-3xl mx-1'>Post</button>
                        </div>
                    </div>

                </div>
                <div>

                    <div className='flex mx-2 gap-3 '>
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-9 h-9  rounded-full ' />
                        <div className='rounded-xl  w-full space-y-2'>
                            <div className='bg-[#F0EDF5] p-2 rounded-lg'>

                                <p className='font-semibold'>Rahul nath</p>
                                <p className='text-sm'>Product design figma . Work in T.P.O</p>
                                <p className='text-xs'>Such a wonderful memories in the mountains. Had a  great adventure with u guys. Hope to see you soon !!!</p>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex text-blue-600 gap-2 ml-1'>

                                    <p className='text-xs'>Like 3</p>
                                    <p className='text-xs'>Reply 1</p>
                                </div>
                                <div className='flex gap-2 space-y-2'>
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-8 h-8  rounded-full ' />
                                    <div className='bg-[#F0EDF5] p-2 w-full rounded-lg'>

                                        <p className='font-semibold'>Moran nath</p>
                                        <p className='text-sm'>Product design figma . Work in T.P.O</p>
                                        <p className='text-xs'>Such a wonderful memories in the mountains. Had a  great adventure with u guys.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className='bg-white rounded-2xl p-5 space-y-3 shadow-md'>
                <div className='flex justify-between gap-2 items-center'>
                    <div className='flex gap-2'>

                        <img src="https://img.freepik.com/free-vector/portrait-beautiful-girl-with-tiara-her-head_1196-849.jpg?size=338&ext=jpg&ga=GA1.1.1420041849.1667928226&semt=sph" alt="" className='w-9 h-9 rounded-full' />
                        <div className='-mt-1'>
                            <p className='font-semibold'>Jennifer White</p>
                            <p className='text-gray-400 text-xs'>Ireland, 28 minutes ago</p>
                        </div>
                    </div>
                    <BsThreeDots></BsThreeDots>
                </div>
                <img src="https://images.pexels.com/photos/6698524/pexels-photo-6698524.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='w-full  rounded-xl' />
                <div className='flex justify-end items-center gap-2 text-gray-400'>
                    <p>64 comments</p>
                    <p>12 shares</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <div className='flex gap-1'>
                        <AiFillLike className='text-xl text-gray-400'></AiFillLike>
                        <p>65</p>
                    </div>
                    <div className='flex gap-1'>
                        <AiFillDislike className='text-xl mt-1 text-gray-400'></AiFillDislike>
                        <p>32</p>
                    </div>
                    <div className='flex gap-1'>
                        <FaComment className='text-xl text-gray-400 mt-1'></FaComment>
                        <p>Comments</p>
                    </div>
                    <div className='flex gap-1'>
                        <FaShare className='text-xl text-gray-400 mt-1'></FaShare>
                        <p>Share</p>
                    </div>

                </div>
                <div className=''>
                    <p className='flex gap-2 text-gray-400'>Most Relevant <span><AiFillCaretDown className='text-lg mt-1'></AiFillCaretDown></span></p>
                </div>

                
               

            </div>
        </div>
    );
};

export default Main;