import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BagIcon, BallIcon, IconEqual, ManIcon, RocketIcon, SearchIcon } from '../Svg/Svg';

const MobileHeaders = () => {
    return (
        <div className='md:hidden bg-[#6A4ADF] rounded-b-2xl p-3 space-y-5 shadow-xl shadow-indigo-500/50 pb-6'>
            <div className='flex justify-between my-2'>
                <h3 className='text-2xl text-white'>Platform</h3>
                <div className='flex gap-4'>
                    <div className='text-2xl text-white border-2 p-1 border-white   rounded-full'><AiOutlinePlus></AiOutlinePlus></div>
                    <RocketIcon></RocketIcon>
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-9 h-9 rounded-full outline outline-white' />
                </div>
            </div>
            <hr className='w-full' />
            <div className='flex justify-around mt-2'>

                <IconEqual></IconEqual>
                <SearchIcon></SearchIcon>
                <ManIcon></ManIcon>
                <BagIcon></BagIcon>
                <BallIcon></BallIcon>
            </div>

        </div>
    );
};

export default MobileHeaders;