import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { CgAlbum } from 'react-icons/cg';

const ExperCard = () => {
    return (

        <div className='w-full lgg:w-80 flex justify-between items-center bg-white rounded-2xl h-28 md:h-[9rem] text-white shadow-[2px_2px_15px_2px_#ccc] '>

            <div className='h-16 p-[3px] bg-[#6A4ADF] rounded-tr-xl rounded-br-xl'></div>
            <div className='flex justify-between items-center mx-4 py-3 mt-3  w-full h-full '>
                <div className='space-y-3  w-full'>
                    <div className='flex gap-2'>


                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGIdujUPEl1B9hw3YF6LKrnb1Z1oWKScVJsl1mHyoCAc9jVWPCEaoiMXWYxvvOLTXu5k&usqp=CAU" alt="" className='rounded-full w-12 h-12' />

                        <div className='space-y-1'>
                            <p className='text-[#A0A0A0] text-[9px] '>Digital Ocean</p>
                            <p className='text-black text-xs md:text-sm'>UI Designer</p>
                            <p className='text-[#A0A0A0] text-[9px] '>Bokaro, Jharkhand</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-2  '>
                        <div className='space-x-3'>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>C++</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>Open SG</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>GPSS</button>
                        </div>
                        <p className='text-[#FFC20E] text-[8px] bg-white px-3 py-[2px]  justify-self-end mt-2 rounded-md border-[1px] border-[#FFC20E]'>Pursuing</p>
                    </div>
                </div>

            </div>
            <div className='h-16 p-[3px] bg-[#6A4ADF] rounded-tl-lg rounded-bl-lg'></div>
        </div>

    );
};

export default ExperCard;