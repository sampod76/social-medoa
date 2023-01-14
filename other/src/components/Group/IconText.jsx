import React from 'react'

const IconText = ({Icon, title, color, fontSize}) => {
  return (
      <div className='flex items-center sm:gap-2 gap-1 justify-center cursor-pointer'>
          <Icon style={{color:`${color}`, fontSize: `${fontSize}`, }} />
      {title && <p className='m-0 md:text-sm xs text-666666 font-semibold cursor-pointer'>{title}</p>}
      </div>
  )
}
IconText.defaultProps = {
  color: `#666666`,
}
export default IconText