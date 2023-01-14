import React from 'react';
import { CgAlbum } from "react-icons/cg";
import { AiOutlineEye } from "react-icons/ai";

const Card = () => {
    return (
        <div className='space-y-5 w-full'>
            <div className='w-full flex justify-between items-center bg-[#6A4ADF] rounded-lg h-24 md:h-28 text-white shadow-[2px_2px_15px_2px_#ccc]'>

                <div className='h-14 p-[2px] bg-white rounded-tr-lg rounded-br-lg'></div>
                <div className='flex justify-between mx-4 py-3  w-full h-full'>
                    <div className='space-y-3'>
                        <div className='flex gap-2'>

                            <div className='bg-white p-1 rounded-lg flex justify-center items-center '>
                                <CgAlbum className='text-blue-400 text-3xl md:text-4xl '></CgAlbum>
                            </div>
                            <div>
                                <p className='text-[9px] md:text-xs'>Digital Ocean</p>
                                <p className='text-xs md:text-sm'>Sr. Back-End Developer</p>
                                <p className='text-[9px] md:text-xs'>Bokaro, Jharkhand</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>C++</button>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>Open SG</button>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>GPSS</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between md:mr-3'>
                        <div className='flex gap-2 md:gap-7 justify-between'>
                            <p className='flex gap-1 items-center text-[9px] sm:text-xs md:text-sm'><AiOutlineEye className='text-[9px] sm:text-xs md:text-xl'></AiOutlineEye>540</p>
                            <p className='text-[9px] sm:text-xs md:text-sm '>35 applied</p>
                        </div>
                        <p className='text-[9px] sm:text-xs md:text-sm self-end'>4 weeks ago</p>
                    </div>
                </div>
                <div className='h-14 p-[2px] bg-white rounded-tl-lg rounded-bl-lg'></div>
            </div>
            <div className='w-full flex justify-between items-center bg-white rounded-lg h-24 md:h-28 text-white shadow-[2px_2px_15px_2px_#ccc]'>

                <div className='h-14 p-[2px] bg-[#6A4ADF] rounded-tr-lg rounded-br-lg'></div>
                <div className='flex justify-between mx-4 py-3  w-full h-full'>
                    <div className='space-y-3'>
                        <div className='flex gap-2'>

                            <div className='bg-white p-1 rounded-lg flex justify-center items-center shadow-[2px_2px_15px_2px_#ccc]'>
                                <CgAlbum className='text-blue-400 text-3xl md:text-4xl '></CgAlbum>
                            </div>
                            <div>
                                <p className='text-[#A0A0A0] text-[9px] md:text-xs'>Digital Ocean</p>
                                <p className='text-black text-xs md:text-sm'>Sr. Back-End Developer</p>
                                <p className='text-[#A0A0A0] text-[9px] md:text-xs'>Bokaro, Jharkhand</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>C++</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>Open SG</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>GPSS</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between md:mr-3 text-[#6A4ADF] '>
                        <div className='flex gap-2 md:gap-7 justify-between'>
                            <p className='flex gap-1 items-center text-[9px] sm:text-xs md:text-sm'><AiOutlineEye className='text-[9px] sm:text-xs md:text-xl'></AiOutlineEye>540</p>
                            <p className='text-[9px] sm:text-xs md:text-sm '>35 applied</p>
                        </div>
                        <p className='text-[9px] sm:text-xs md:text-sm self-end'>4 weeks ago</p>
                    </div>
                </div>
                <div className='h-14 p-[2px] bg-[#6A4ADF] rounded-tl-lg rounded-bl-lg'></div>
            </div>
            <div className='w-full flex justify-between items-center bg-[#6A4ADF] rounded-lg h-24 md:h-28 text-white shadow-[2px_2px_15px_2px_#ccc]'>

                <div className='h-14 p-[2px] bg-white rounded-tr-lg rounded-br-lg'></div>
                <div className='flex justify-between mx-4 py-3  w-full h-full'>
                    <div className='space-y-3'>
                        <div className='flex gap-2'>

                            <div className='bg-white p-1 rounded-lg flex justify-center items-center '>
                                <CgAlbum className='text-blue-400 text-3xl md:text-4xl '></CgAlbum>
                            </div>
                            <div>
                                <p className='text-[9px] md:text-xs'>Digital Ocean</p>
                                <p className='text-xs md:text-sm'>Sr. Back-End Developer</p>
                                <p className='text-[9px] md:text-xs'>Bokaro, Jharkhand</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>C++</button>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>Open SG</button>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>GPSS</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between md:mr-3'>
                        <div className='flex gap-2 md:gap-7 justify-between'>
                            <p className='flex gap-1 items-center text-[9px] sm:text-xs md:text-sm'><AiOutlineEye className='text-[9px] sm:text-xs md:text-xl'></AiOutlineEye>540</p>
                            <p className='text-[9px] sm:text-xs md:text-sm '>35 applied</p>
                        </div>
                        <p className='text-[9px] sm:text-xs md:text-sm self-end'>4 weeks ago</p>
                    </div>
                </div>
                <div className='h-14 p-[2px] bg-white rounded-tl-lg rounded-bl-lg'></div>
            </div>
            <div className='w-full flex justify-between items-center bg-white rounded-lg h-24 md:h-28 text-white shadow-[2px_2px_15px_2px_#ccc]'>

                <div className='h-14 p-[2px] bg-[#6A4ADF] rounded-tr-lg rounded-br-lg'></div>
                <div className='flex justify-between mx-4 py-3  w-full h-full'>
                    <div className='space-y-3'>
                        <div className='flex gap-2'>

                            <div className='bg-white p-1 rounded-lg flex justify-center items-center shadow-[2px_2px_15px_2px_#ccc]'>
                                <CgAlbum className='text-blue-400 text-3xl md:text-4xl '></CgAlbum>
                            </div>
                            <div>
                                <p className='text-[#A0A0A0] text-[9px] md:text-xs'>Digital Ocean</p>
                                <p className='text-black text-xs md:text-sm'>Sr. Back-End Developer</p>
                                <p className='text-[#A0A0A0] text-[9px] md:text-xs'>Bokaro, Jharkhand</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>C++</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>Open SG</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>GPSS</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between md:mr-3 text-[#6A4ADF] '>
                        <div className='flex gap-2 md:gap-7 justify-between'>
                            <p className='flex gap-1 items-center text-[9px] sm:text-xs md:text-sm'><AiOutlineEye className='text-[9px] sm:text-xs md:text-xl'></AiOutlineEye>540</p>
                            <p className='text-[9px] sm:text-xs md:text-sm '>35 applied</p>
                        </div>
                        <p className='text-[9px] sm:text-xs md:text-sm self-end'>4 weeks ago</p>
                    </div>
                </div>
                <div className='h-14 p-[2px] bg-[#6A4ADF] rounded-tl-lg rounded-bl-lg'></div>
            </div>
            <div className='w-full flex justify-between items-center bg-[#6A4ADF] rounded-lg h-24 md:h-28 text-white shadow-[2px_2px_15px_2px_#ccc]'>

                <div className='h-14 p-[2px] bg-white rounded-tr-lg rounded-br-lg'></div>
                <div className='flex justify-between mx-4 py-3  w-full h-full'>
                    <div className='space-y-3'>
                        <div className='flex gap-2'>

                            <div className='bg-white p-1 rounded-lg flex justify-center items-center '>
                                <CgAlbum className='text-blue-400 text-3xl md:text-4xl '></CgAlbum>
                            </div>
                            <div>
                                <p className='text-[9px] md:text-xs'>Digital Ocean</p>
                                <p className='text-xs md:text-sm'>Sr. Back-End Developer</p>
                                <p className='text-[9px] md:text-xs'>Bokaro, Jharkhand</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>C++</button>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>Open SG</button>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>GPSS</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between md:mr-3'>
                        <div className='flex gap-2 md:gap-7 justify-between'>
                            <p className='flex gap-1 items-center text-[9px] sm:text-xs md:text-sm'><AiOutlineEye className='text-[9px] sm:text-xs md:text-xl'></AiOutlineEye>540</p>
                            <p className='text-[9px] sm:text-xs md:text-sm '>35 applied</p>
                        </div>
                        <p className='text-[9px] sm:text-xs md:text-sm self-end'>4 weeks ago</p>
                    </div>
                </div>
                <div className='h-14 p-[2px] bg-white rounded-tl-lg rounded-bl-lg'></div>
            </div>
            <div className='w-full flex justify-between items-center bg-white rounded-lg h-24 md:h-28 text-white shadow-[2px_2px_15px_2px_#ccc]'>

                <div className='h-14 p-[2px] bg-[#6A4ADF] rounded-tr-lg rounded-br-lg'></div>
                <div className='flex justify-between mx-4 py-3  w-full h-full'>
                    <div className='space-y-3'>
                        <div className='flex gap-2'>

                            <div className='bg-white p-1 rounded-lg flex justify-center items-center shadow-[2px_2px_15px_2px_#ccc]'>
                                <CgAlbum className='text-blue-400 text-3xl md:text-4xl '></CgAlbum>
                            </div>
                            <div>
                                <p className='text-[#A0A0A0] text-[9px] md:text-xs'>Digital Ocean</p>
                                <p className='text-black text-xs md:text-sm'>Sr. Back-End Developer</p>
                                <p className='text-[#A0A0A0] text-[9px] md:text-xs'>Bokaro, Jharkhand</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>C++</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>Open SG</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>GPSS</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between md:mr-3 text-[#6A4ADF] '>
                        <div className='flex gap-2 md:gap-7 justify-between'>
                            <p className='flex gap-1 items-center text-[9px] sm:text-xs md:text-sm'><AiOutlineEye className='text-[9px] sm:text-xs md:text-xl'></AiOutlineEye>540</p>
                            <p className='text-[9px] sm:text-xs md:text-sm '>35 applied</p>
                        </div>
                        <p className='text-[9px] sm:text-xs md:text-sm self-end'>4 weeks ago</p>
                    </div>
                </div>
                <div className='h-14 p-[2px] bg-[#6A4ADF] rounded-tl-lg rounded-bl-lg'></div>
            </div>
            <div className='w-full flex justify-between items-center bg-[#6A4ADF] rounded-lg h-24 md:h-28 text-white shadow-[2px_2px_15px_2px_#ccc]'>

                <div className='h-14 p-[2px] bg-white rounded-tr-lg rounded-br-lg'></div>
                <div className='flex justify-between mx-4 py-3  w-full h-full'>
                    <div className='space-y-3'>
                        <div className='flex gap-2'>

                            <div className='bg-white p-1 rounded-lg flex justify-center items-center '>
                                <CgAlbum className='text-blue-400 text-3xl md:text-4xl '></CgAlbum>
                            </div>
                            <div>
                                <p className='text-[9px] md:text-xs'>Digital Ocean</p>
                                <p className='text-xs md:text-sm'>Sr. Back-End Developer</p>
                                <p className='text-[9px] md:text-xs'>Bokaro, Jharkhand</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>C++</button>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>Open SG</button>
                            <button className='text-[8px] bg-[#8267E8] px-3 py-[2px] rounded-sm'>GPSS</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between md:mr-3'>
                        <div className='flex gap-2 md:gap-7 justify-between'>
                            <p className='flex gap-1 items-center text-[9px] sm:text-xs md:text-sm'><AiOutlineEye className='text-[9px] sm:text-xs md:text-xl'></AiOutlineEye>540</p>
                            <p className='text-[9px] sm:text-xs md:text-sm '>35 applied</p>
                        </div>
                        <p className='text-[9px] sm:text-xs md:text-sm self-end'>4 weeks ago</p>
                    </div>
                </div>
                <div className='h-14 p-[2px] bg-white rounded-tl-lg rounded-bl-lg'></div>
            </div>
            <div className='w-full flex justify-between items-center bg-white rounded-lg h-24 md:h-28 text-white shadow-[2px_2px_15px_2px_#ccc]'>

                <div className='h-14 p-[2px] bg-[#6A4ADF] rounded-tr-lg rounded-br-lg'></div>
                <div className='flex justify-between mx-4 py-3  w-full h-full'>
                    <div className='space-y-3'>
                        <div className='flex gap-2'>

                            <div className='bg-white p-1 rounded-lg flex justify-center items-center shadow-[2px_2px_15px_2px_#ccc]'>
                                <CgAlbum className='text-blue-400 text-3xl md:text-4xl '></CgAlbum>
                            </div>
                            <div>
                                <p className='text-[#A0A0A0] text-[9px] md:text-xs'>Digital Ocean</p>
                                <p className='text-black text-xs md:text-sm'>Sr. Back-End Developer</p>
                                <p className='text-[#A0A0A0] text-[9px] md:text-xs'>Bokaro, Jharkhand</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>C++</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>Open SG</button>
                            <button className='text-[#6A4ADF] text-[8px] bg-[#EEEAFB] px-3 py-[2px] rounded-sm'>GPSS</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between md:mr-3 text-[#6A4ADF] '>
                        <div className='flex gap-2 md:gap-7 justify-between'>
                            <p className='flex gap-1 items-center text-[9px] sm:text-xs md:text-sm'><AiOutlineEye className='text-[9px] sm:text-xs md:text-xl'></AiOutlineEye>540</p>
                            <p className='text-[9px] sm:text-xs md:text-sm '>35 applied</p>
                        </div>
                        <p className='text-[9px] sm:text-xs md:text-sm self-end'>4 weeks ago</p>
                    </div>
                </div>
                <div className='h-14 p-[2px] bg-[#6A4ADF] rounded-tl-lg rounded-bl-lg'></div>
            </div>
            
            
        </div>
    );
};

export default Card;