import React from 'react'

const Analytics = ({title, percent, analytCount,color}) => {
  return (
      <div className="flex flex-col">
          <div className="flex items-center justify-between">
              <p className='m-0 text-6A4ADF '>{analytCount}</p>
              <p className='m-0 ' style={{color: `${color}`}}>{percent}</p>
          </div>
          <p>{ title }</p>
      </div>
  )
}

export default Analytics