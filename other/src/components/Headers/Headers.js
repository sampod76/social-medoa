import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { BagIcon, BallIcon, IconEqual, ManIcon, RocketIcon, SearchIcon } from '../Svg/Svg';
import MobileHeaders from './MobileHeaders';

const Headers = () => {
    return (
        <section className='font-Poppins'>
            <div className='bg-[#6A4ADF] h-14 hidden md:block '>
                <div className='max-w-[1440px] mx-auto  '>
                    <header className='flex justify-between items-center md:gap-[16%] lgg:gap-[10%] xl:gap-[5%]'>
                        <div className='w-[20%] '>
                            <h5 className='text-white text-xl'>Platform</h5>
                            <div>
                            </div>
                        </div>
                        <div className=' w-full '>

                            <div className=' flex border-2 border-white rounded-3xl'>
                                <div className='mt-1 ml-2'>
                                    <SearchIcon ></SearchIcon>
                                </div>
                                <input type="search" name="" id="" placeholder='Search for creators, inspirations,and projects' className='w-full p-2  bg-transparent text-white placeholder:text-white focus:outline-none' />
                            </div>
                        </div>
                        <div className='w-[20%] '>
                            <div className='flex items-center gap-3 justify-end'>
                                <div className='text-2xl text-white border-2 border-white   rounded-full'><AiOutlinePlus></AiOutlinePlus></div>
                                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-9 h-9 rounded-full outline outline-white' />
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            {/* mobile headers  */}
            <MobileHeaders></MobileHeaders>

        </section>
    );
};

export default Headers;