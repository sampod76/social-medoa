import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Headers from '../Headers/Headers';
import Card from './Card';
import CreatePostCard from './CreatePostCard';
import { IoReorderThreeOutline } from "react-icons/io5";

const JobListMain = () => {
    return (
        <div className='bg-[#EEEAFB] '>
            <Headers></Headers>
            <div className='max-w-[1440px] mx-auto min-h-screen  text-black '>
                <div className='md:flex p-3 gap-3 mx-2 md:mx-10 space-y-3'>
                    <div className='space-y-3'>
                        <div className='hidden md:block'>

                            <CreatePostCard />
                        </div>
                        <div className='flex gap-2'>

                            <div className='flex justify-between gap-1 px-2 py-1 bg-white rounded-xl w-full  md:w-48'>
                                <div className='bg-[#6A4ADF] px-2 w-full py-1 rounded-xl text-sm text-white text-center'>Open Job</div>
                                <div className=' px-2 w-full py-1 rounded-xl text-sm text-center'>Close Job</div>
                            </div>
                            <div className='rounded-full p-2 bg-white block md:hidden'>
                                <IoReorderThreeOutline className='text-xl'></IoReorderThreeOutline>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 border-2 bg-white rounded-xl p-5 max-h-[95vh] overflow-y-auto'>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobListMain;