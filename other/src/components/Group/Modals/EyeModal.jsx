import React from 'react'

const EyeModal = () => {
  return (
      <div className='bg-white flex gap-4 p-3 outline outline-1 outline-gray-300 rounded-lg'>
          <div className="flex flex-col gap-3">
              <span className='md:text-sm text-xs'>impression</span>
              <span className='md:text-sm text-xs'>45</span>
          </div>
          <div className="flex flex-col gap-3">
              <span className='md:text-sm text-xs'>click</span>
              <span className='md:text-sm text-xs'>5878</span>
          </div>
      </div>
  )
}

export default EyeModal