import React from 'react'

const InputControl = ({props, label}) => {
  return (
    <div className='flex-1 flex items-start justify-start w-11/12 mt-6 gap-2 flex-col'>
          {
              label && <label className=' text-base font-semibold text-gray-400 '>{label}</label>
          }

          <input type="text" className=' pl-5 box-border border border-solid border-gray-300 outline-none rounded-lg py-2 w-full' {...props} />
    </div>
  )
}

export default InputControl
