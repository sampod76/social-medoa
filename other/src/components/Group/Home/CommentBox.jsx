import React from 'react'

const CommentBox = ({comment}) => {
    return (
        <div className='flex items-start justify-center gap-2 mt-2'>
            <div className="h-full flex items-start justify-start">
                <div className=" w-10 h-10 rounded-full overflow-hidden  flex items-center justify-center ">
                    <img src="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg" className='h-full w-full object-cover' alt="profileImg" />
                </div>
            </div>
            <div className="">
                <div className="w-full flex flex-col bg-slate-300 rounded-2xl p-3">
                    <div className="flex flex-col w-full gap-1 ">
                        <div className=" flex gap-3 items-center justify-start">
                            <p className='m-0 text-sm font-semibold'>Arun Kumar</p>
                            <p className='m-0 text-xs'>2 days ago</p>
                        </div>
                        <p className='text-xs m-0'>web developer designer</p>

                    </div>
                    <p className='m-0 text-xs py-2 pl-3'>{ comment}</p>
                </div>
                <div className="flex items-center justify-start w-full gap-2 py-1 px-3">
                    <p className='m-0 text-blue-600 text-sm'>Like 3</p>
                    <p className='m-0 text-blue-600 text-sm'>Reply 3</p>
                </div>
            </div>
        </div>
    )
}

export default CommentBox