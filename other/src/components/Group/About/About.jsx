import React from 'react'
import InputControl from '../InputControl'
import TextAreaControl from '../TextAreaControl'
import { FiEdit } from 'react-icons/fi'
const About = () => {
  return (
    <div className='bg-white w-full shadow-xl rounded-2xl box-border p-6 pt-0'>
      <div className="flex w-full items-end justify-end box-border px-2 pt-5">
        <FiEdit className='text-2xl cursor-pointer text-gray-500' />
      </div>
      <div className="flex gap-3">
        <InputControl label='Company Name/ Title *'  />
        <InputControl label='Categorie*'  />
      </div>
      <div className="flex gap-3">
        <InputControl label='Username *'  />
        <InputControl label='Created on*'  />
      </div>
      <div className="flex gap-3">
        <InputControl label='Website'  />
        <InputControl label='Location'  />
      </div>
      <div className="flex gap-3">
        <InputControl label='Company Size'  />
      </div>
      <div className="flex gap-3">
        <InputControl label='Tittle Description'  />
      </div>
      <div className="flex gap-3">
        <TextAreaControl label='Full Description'  />
      </div>
    </div>
  )
}

export default About