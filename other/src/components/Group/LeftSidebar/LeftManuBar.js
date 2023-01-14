import React from 'react';
import { BookmarksIcon, ConnectionsIcon, ExploreIcon, HomeIcon, MessagesIcon, NotificationsIcon, Themeicon } from '../../Svg/Svg';
import notifi from '../../Assets/img/notifications.png'
// import { CiSettings } from "react-icons/ci";
// import { SiSmartthings } from "react-icons/si";

const LeftManuBar = () => {
    return (
        <div className='max-w-[15.5rem] h-fit space-y-4 font-Poppins hidden md:block  '>
            <div className='rounded-xl flex gap-2 items-center bg-white shadow-lg p-2'>

                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='w-10 mx-2 h-10 rounded-full outline outline-white'></img>
                <div className=''>

                    <h5 className='font-semibold'>John Watson</h5>
                    <p className='text-black/30'>@johnwat</p>
                </div>
            </div>
            <div className='rounded-xl bg-white shadow-lg '>
                <h6 className='py-3 px-7  rounded-t-xl hover:text-[#6A4ADF] hover:bg-[#E5DDF1] flex items-center gap-5 font-bold'>
                    <span>
                        <HomeIcon></HomeIcon>
                    </span>
                    <span>Home</span>
                </h6>
                <h6 className='py-3 px-7  hover:text-[#6A4ADF] hover:bg-[#E5DDF1] flex items-center gap-5 font-bold'>
                    <span>

                        <ExploreIcon></ExploreIcon>
                    </span>
                    <span>Explore</span>
                </h6>
                <h6 className='py-3 px-7  hover:text-[#6A4ADF] hover:bg-[#E5DDF1] flex items-center gap-5 font-bold'>
                    <span>
                        <NotificationsIcon></NotificationsIcon>

                    </span>
                    <span>Notifications</span>
                </h6>
                <h6 className='py-3 px-7  hover:text-[#6A4ADF] hover:bg-[#E5DDF1] flex items-center gap-5 font-bold'>
                    <span>
                        <MessagesIcon className={'w-7'}></MessagesIcon>

                    </span>
                    <span>

                        Messages
                    </span>
                </h6>
                <h6 className='py-3 px-7  hover:text-[#6A4ADF] hover:bg-[#E5DDF1] flex items-center gap-5 font-bold'>
                    <span>

                        <BookmarksIcon className={'w-7'}></BookmarksIcon>
                    </span>
                    <span>
                        Bookmarks
                    </span>
                </h6>
                <h6 className='py-3 px-7  hover:text-[#6A4ADF] hover:bg-[#E5DDF1] flex items-center gap-5 font-bold'>
                    <span>

                        <ConnectionsIcon className={'w-7'}></ConnectionsIcon>
                    </span>
                    <span>
                        Connections
                    </span>
                </h6>
                <h6 className='py-3 px-7  hover:text-[#6A4ADF] hover:bg-[#E5DDF1] flex items-center gap-5 font-bold'>
                    <span>
                        {/* <SiSmartthings className='text-3xl text-gray-400'></SiSmartthings> */}
                    </span>
                    <span>

                        Theme
                    </span>
                </h6>
                <h6 className='py-3 px-7  rounded-b-xl hover:text-[#6A4ADF] hover:bg-[#E5DDF1] flex items-center gap-5 font-bold'>
                    <span>
                        {/* <CiSettings className='text-3xl text-gray-600'></CiSettings> */}
                    </span>
                    <span>

                        Settings
                    </span>
                </h6>
            </div>
            <button className='bg-[#6A4ADF] p-2 rounded-3xl w-full text-white'>Create Post</button>
        </div>
    );
};

export default LeftManuBar;