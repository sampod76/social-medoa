import React from 'react'
import ReactionIcon from './ReactionIcon'
import { FaThumbsUp, FaLaughBeam } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { HiLightBulb } from 'react-icons/hi'
const ReactionModal = () => {
  return (
    <div className='absolute -top-16 pb-5  '>
      <div className=' outline outline-1 outline-gray-200 h-12  flex items-center transition-all justify-around gap-3 rounded-md bg-white shadow-2xl px-4'>
        <ReactionIcon Icon={FaThumbsUp} color='blue' title='Like' />
        <ReactionIcon Icon={AiFillHeart} color='red' title='Heart' />
        <ReactionIcon Icon={FaLaughBeam} color='#ffab18' title='Laugh' />
        <ReactionIcon Icon={HiLightBulb} color='#ffab18' title='Like' />
        <ReactionIcon Icon={HiLightBulb} color='#ffab18' title='Like' />
        <ReactionIcon Icon={HiLightBulb} color='#ffab18' title='Like' />
      </div>
    </div>
  )
}
export default ReactionModal