import React from 'react';

const Accept = () => {
    return (
        <div className='rounded-2xl shadow-[2px_2px_15px_2px_#ccc] p-2 h-90 flex flex-col justify-between'>

            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-full h-[55%] rounded-2xl' />
            <div className='space-y-2 px-2'>
                <div>

                    <p>Henry G</p>
                    <p className='text-xs text-gray-500'>Product Manager</p>
                </div>
                <div className='flex flex-col space-y-3 w-full'>
                    <button className='rounded-3xl text-center bg-[#6A4ADF] py-2 w-full text-white'>Accept</button>
                    <button className='rounded-3xl text-center bg-[#F16166] py-2 w-full text-white'>Decline</button>
                </div>
            </div>

        </div>
    );
};

export default Accept;