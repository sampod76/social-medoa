import React from 'react'
function TextAreaControl({ label, ...props }) {
    return (
        <div className='flex-1 flex items-start justify-start w-11/12 mt-10 gap-2 flex-col'>
            {
                label && <label className=' text-base font-normal text-gray-400 '>{label}</label>
            }

            <textarea className=' resize-none h-40 shadow-xl pl-5 box-border border border-solid border-gray-300 outline-none rounded-lg py-2 w-full' {...props} />
        </div>
    )
}

export default TextAreaControl

