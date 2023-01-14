import React from 'react';
import LeftManuBar from '../Group/LeftSidebar/LeftManuBar';
import Headers from '../Headers/Headers';
import Accept from './Accept';
import Navbar from './Navbar';

const Main_Page = () => {
    return (
        <div className='bg-[#EEEAFB]'>
            <Headers />
            <main className='max-w-[1440px] mx-auto'>
                <div className='flex gap-10 mt-3 mx-3 md:mx-10'>
                    <LeftManuBar />

                    {/* main srction */}
                    <section className=' flex-1 bg-white rounded-2xl shadow-[2px_2px_15px_2px_#ccc] p-5 space-y-3'>
                        <p className='text-lg'>Friend Requests</p>
                        {/* friend request  */}
                        <div className='grid grid-cols-2 mdd:grid-cols-3 lgg:grid-cols-4 gap-8'>
                            <Accept />
                            <Accept />
                            <Accept />
                            <Accept />
                        </div>

                        {/* Navbar  */}
                        <Navbar />

                    </section>

                </div>
            </main>
        </div>
    );
};

export default Main_Page;