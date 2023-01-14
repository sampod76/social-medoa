import React from 'react';
import { GoThreeBars } from "react-icons/go";
import { CgToolbox, CgAlignBottom } from "react-icons/cg";
const CreatePostCard = () => {
    return (
        <div className='space-y-3 '>
        <div className='w-48 rounded-3xl bg-[#6A4ADF] h-12 p-2 flex justify-center gap-2 items-center text-white  ring-4 ring-white shadow-2xl'>

            <h1 className='text-3xl -mt-1' >+</h1>
            <h1 className='text-base'>Create a New Job</h1>

        </div>
        <div className='w-48  rounded-xl shadow-2xl divide-y-2 bg-white'>
            <p className='p-2 bg-[#6A4ADF] rounded-t-xl text-white font-thin text-sm flex items-center gap-2  pl-6'><span><GoThreeBars></GoThreeBars></span> My Job List</p>
            <p className='p-2 font-thin text-sm flex items-center gap-2  pl-6'><span><CgToolbox></CgToolbox></span> Discover Jobs</p>
            <p className='p-2 font-thin text-sm flex items-center gap-2  pl-6'><span><CgAlignBottom></CgAlignBottom></span> Job Analytics</p>
        </div>
    </div>
    );
};

export default CreatePostCard;