import React from 'react';
import Headers from '../Headers/Headers';
import ExperCard from './ExperCard';
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoPencil } from "react-icons/io5";

const ExperienceMain = () => {
    return (
        <div className='bg-white md:bg-[#EEEAFB] font-Poppins'>
            <Headers />
            <main className=' max-w-[1440px] mx-auto py-4 min-h-screen'>
                <div className='flex flex-col-reverse  lgg:flex-row  gap-[2%]  md:mx-6'>

                    <div className=' space-y-6 mt-6 lgg:mt-0'>
                        <ExperCard />
                        <ExperCard />
                        <ExperCard />
                        <ExperCard />
                        <ExperCard />
                        <ExperCard />
                    </div>
                    <section className='flex-1 space-y-6'>
                        <div className='flex justify-between gap-1 px-2 py-1 bg-white rounded-xl w-full  md:w-[18.75rem] shadow-[2px_2px_5px_2px_#ccc]'>
                            <div className='bg-[#6A4ADF] px-2 w-full py-1 rounded-xl text-sm text-white text-center'>Profile</div>
                            <div className=' px-2 w-full py-1 rounded-xl text-sm text-center'>Resume</div>
                        </div>
                        <div className='md:flex justify-between gap-3 '>

                            <div className='p-3 rounded-2xl bg-white w-[350px] md:w-[300px] mx-auto shadow-[2px_2px_5px_2px_#ccc] flex flex-col justify-between'>
                                <div className='flex justify-between items-center'>
                                    <AiFillYoutube className='text-5xl text-red-500'></AiFillYoutube>
                                    <AiFillInstagram className='text-5xl text-red-500'></AiFillInstagram>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGIdujUPEl1B9hw3YF6LKrnb1Z1oWKScVJsl1mHyoCAc9jVWPCEaoiMXWYxvvOLTXu5k&usqp=CAU" alt="" className='rounded-full w-24 h-24 ring-2 ring-white shadow-[2px_2px_5px_2px_#ccc]' />
                                    <p >Diane Cooper</p>
                                    <p className='text-gray-400 text-xs'>dianecooper@gmail.com</p>
                                    <button className='w-[90%] mx-auto p-1 rounded-3xl border-[1px] border-[#6A4ADF] mt-6'>Send Message</button>

                                </div>
                                <div className='flex justify-between items-center px-3 mt-2 mb-3'>

                                    <select name="" id="" value='select' className='bg-[#6A4ADF] rounded-3xl w-24 max-w-[45%] py-2 text-white text-xs '>
                                        <option value="" className='text-center text-yellow-300 bg-white rounded-t-lg'>Pursuing</option>
                                        <option value="">Approved</option>
                                        <option value="">Dismiss</option>
                                    </select>
                                    <button className='bg-red-600 rounded-3xl w-24 max-w-[45%] py-2 text-white text-xs'>Never Apply</button>
                                </div>

                            </div>

                            <div className='flex-1 p-7 rounded-2xl bg-white  shadow-[2px_2px_5px_2px_#ccc] divide-y-2 text-[#5C5A5A] space-y-2 lgg:space-y-6 mt-4 md:mt-0'>
                                <div className='grid grid-cols-3'>
                                    <div className='space-y-4'>
                                        <p className='text-xs'>Gander</p>
                                        <p className='text-xs'>Female</p>
                                    </div>
                                    <div className='space-y-4'>
                                        <p className='text-xs'>Birthday</p>
                                        <p className='text-xs'>Feb 24th, 1997</p>
                                    </div>
                                    <div className='space-y-4'>
                                        <p className='text-xs'>Phone</p>
                                        <p className='text-xs'>Feb 24th, 1997</p>
                                    </div>
                                </div>
                                <div className='grid grid-cols-3 pt-6'>
                                    <div className='space-y-4'>
                                        <p className='text-xs'>City/State</p>
                                        <p className='text-xs'>Cilacap/Uttar Pradesh</p>
                                    </div>
                                    <div className='space-y-4'>
                                        <p className='text-xs'>Skills</p>
                                        <p className='text-xs'>AdobeXD, Figma</p>
                                    </div>
                                </div>
                                <div className='pt-4 space-y-2 lgg:space-y-4'>
                                    <p className='text-xs'>Title</p>
                                    <p className='overflow-y-auto max-h-36 bg-slate-100 rounded-2xl px-3 py-2 text-sm'>
                                        I am a UI Designer. I create a Mobile and Website User Interface and knowledge about Figma, and Adobe XD. I am a Ui Designer. I create a Mobile and Website User Interface and knowledge about Figma, and Adobe XD.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* experience  */}
                        <div className='relative rounded-2xl bg-[#EEEAFB] md:ring-8 ring-white px-3 py-2 space-y-3'>
                            <p className='ml-4'>Experience</p>
                            <section className=" space-y-3 relative before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-[#6A4ADF] ml-2 md:ml-4">
                                <div className='grid grid-cols-2 shadow-[2px_2px_5px_2px_#ccc] px-4 py-4 rounded-2xl bg-white  relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-27px] before:z-[1] before:bg-[#6A4ADF] ml-2
                            
                            after:absolute after:top-[12px] after:w-2 after:h-2 after:rounded-full after:left-[-23px] after:z-[2] after:bg-[#dedde2]

                            '>
                                    <div className='flex gap-3 items-center'>
                                        <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="" className='md:w-10 w-8' />
                                        <div className=''>
                                            <p className='text-xs md:text-sm text-[#2D4FF9]'>UX Designer</p>
                                            <p className='text-xs md:text-sm text-gray-500'>Microsoft, Delhi</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between '>
                                        <div className=''>
                                            <p className='text-xs md:text-sm text-[#2D4FF9]'>UX Designer at Microsoft</p>
                                            <p className='text-xs md:text-sm text-gray-500'>Dec 2021 - Oct 2022</p>
                                        </div>
                                        <IoMdArrowDropup className='text-3xl'></IoMdArrowDropup>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 shadow-[2px_2px_5px_2px_#ccc] px-4 py-4 rounded-2xl bg-white relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-27px] before:z-[1] before:bg-[#6A4ADF] ml-2'>
                                    <div className='flex gap-2 items-center'>
                                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className='w-10 md:w-12 border-2 rounded-2xl' />
                                        <div className=''>
                                            <p className='text-xs md:text-sm text-[#2D4FF9]'>UX Designer</p>
                                            <p className='text-xs md:text-sm text-gray-500'>Google, Noidai</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between '>
                                        <div className=''>
                                            <p className='text-xs md:text-sm text-[#2D4FF9]'>UX Designer at Google</p>
                                            <p className='text-xs md:text-sm text-gray-500'>Dec 2021 - Oct 2022</p>
                                        </div>
                                        <IoMdArrowDropup className='text-3xl'></IoMdArrowDropup>
                                    </div>
                                </div>
                                <div className=' shadow-[2px_2px_5px_2px_#ccc] px-3 py-2 rounded-2xl bg-white flex gap-3 relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-27px] before:z-[1] before:bg-[#6A4ADF] ml-2'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" className='w-8 h-8 md:w-12 md:h-12' />
                                    <div className=''>
                                        <div className='space-y-1 flex justify-between'>
                                            <div>

                                                <p className='text-xs md:text-sm'>Project Youtube</p>
                                                <p className='text-xs md:text-sm'>TechDMax - Intership</p>
                                            </div>
                                            <IoMdArrowDropdown className='text-3xl'></IoMdArrowDropdown>

                                        </div>
                                        <div className='text-gray-500'>
                                            <p className='text-xs'>Sep 2021 - Present - 2 sep 2022</p>
                                            <p className='text-xs md:text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s <span className='text-red-500'>See more</span></p>
                                        </div>
                                    </div>

                                </div>
                                <div className='grid grid-cols-2 shadow-[2px_2px_5px_2px_#ccc] px-4 py-4 rounded-2xl bg-white relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-27px] before:z-[1] before:bg-[#6A4ADF] ml-2'>
                                    <div className='flex gap-2 items-center'>
                                        <img src="https://cdn-icons-png.flaticon.com/512/732/732221.png" alt="" className='w-8 md:w-10' />
                                        <div className=''>
                                            <p className='text-xs md:text-sm text-[#2D4FF9]'>UX Designer</p>
                                            <p className='text-xs md:text-sm text-gray-500 '>Microsoft, Delhi</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between '>
                                        <div className=''>
                                            <p className='text-xs md:text-sm text-[#2D4FF9]'>UX Designer at Microsoft</p>
                                            <p className='text-xs md:text-sm text-gray-500'>Dec 2021 - Oct 2022</p>
                                        </div>
                                        <IoMdArrowDropup className='text-3xl'></IoMdArrowDropup>
                                    </div>
                                </div>


                            </section>
                        </div>

                        {/* education */}
                        <section className='rounded-2xl bg-[#EEEAFB] ring-8 ring-white px-3 py-2 space-y-3  '>
                            <p className='ml-4'>Education</p>
                            <div className='space-y-3 relative before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-[#6A4ADF] ml-2 md:ml-4'>
                                <div className='grid grid-cols-2 shadow-[2px_2px_5px_2px_#ccc] px-4 py-4 rounded-2xl bg-white relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-27px] before:z-[1] before:bg-[#6A4ADF] ml-2

                            after:absolute after:top-[12px] after:w-2 after:h-2 after:rounded-full after:left-[-23px] after:z-[2] after:bg-[#dedde2]
                            '>
                                    <div className='flex gap-2 items-center'>
                                        <img src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-10 h-10 md:w-12 md:h-12 rounded-full' />
                                        <div className=''>
                                            <p className='text-xs text-blue-400'>12th</p>
                                            <p className='text-xs text-gray-500'>Lord Mahavira academy, Saharanpur</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xs text-blue-400'>Dec 2000 - oct 2019</p>
                                        <IoPencil className='text-xl md:text-2xl'></IoPencil>
                                    </div>
                                </div>



                                <div className='grid grid-cols-2 shadow-[2px_2px_5px_2px_#ccc] px-4 py-4 rounded-2xl bg-white relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-27px] before:z-[1] before:bg-[#6A4ADF] ml-2'>
                                    <div className='flex gap-2 items-center'>
                                        <img src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-10 h-10 md:w-12 md:h-12 rounded-full' />
                                        <div className=''>
                                            <p className='text-xs text-blue-400'>B. Tech.</p>
                                            <p className='text-xs text-gray-500'>Delhi University DU, Delhi</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xs text-blue-400'>Dec 2000 - oct 2019</p>
                                        <IoPencil className='text-xl md:text-2xl'></IoPencil>
                                    </div>
                                </div>



                                <div className='grid grid-cols-2 shadow-[2px_2px_5px_2px_#ccc] px-4 py-4 rounded-2xl bg-white relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-27px] before:z-[1] before:bg-[#6A4ADF] ml-2 
                            
                            
                            '>
                                    <div className='flex gap-2 items-center'>
                                        <img src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-10 h-10 md:w-12 md:h-12 rounded-full' />
                                        <div className=''>
                                            <p className='text-xs text-blue-400'>BCA</p>
                                            <p className='text-xs text-gray-500'>DU, Delhi</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xs text-blue-400'>Dec 2000 - oct 2019</p>
                                        <IoPencil className='text-xl md:text-2xl'></IoPencil>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </section>
                </div>
            </main>

        </div>
    );
};

export default ExperienceMain;