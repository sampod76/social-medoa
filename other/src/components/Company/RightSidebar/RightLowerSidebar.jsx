import React from 'react'
import PeopleSearch from './PeopleSearch'
import { GoSearch } from 'react-icons/go'
import { GrAdd } from 'react-icons/gr'
const RightLowerSidebar = () => {
  return (
      <div className='bg-white w-full rounded-2xl box-border p-3 flex flex-col gap-4 my-3'>
          <div className="w-full flex items-center justify-between">
              <h4 className='m-0 font-semibold' style={{fontSize:'18px'}}>Similar Companies...</h4>
              <div className=" w-8 h-8 rounded-full outline outline-1 outline-black flex items-center justify-center ">
                  <GrAdd style={{ fontSize: '10px' }} />
              </div>
          </div>
          <div className="w-full">
                  <div className="flex items-center w-full py-2 px-4 rounded-full bg-transparent outline outline-gray-500 outline-1 bg-none gap-3">
                  <GoSearch style={{ color: "grey", fontSize: '20px' }} />
                  <input className='outline-none bg-transparent w-full text-gray-800 md:text-base text-xs ' placeholder='Write Something..' type="text" />
              </div>
          </div>
          <PeopleSearch company='Google' field='Technology' companyImage='https://cdn.pixabay.com/photo/2013/01/29/00/47/google-76517__340.png' />
          <PeopleSearch company='Amazon' field='online Shopping' companyImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFAiYdR6nm7111dmJC3Oto7pd7afgzEAkTQ&usqp=CAU' />
          <PeopleSearch company='Microsoft' field='Technology' companyImage='https://cdn.pixabay.com/photo/2012/04/10/23/33/logo-27046__340.png' />
          <PeopleSearch company='Flipkart' field='online Shopping' companyImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQXqFhgUcezZutXcundz0NKt_TvSArWoG7Q&usqp=CAU' />
          <PeopleSearch company='Tata' field='Fantastic Cars' companyImage='https://cdn.pixabay.com/photo/2020/11/16/04/48/ratan-tata-5747953__340.png' />

 

    </div>
  )
}

export default RightLowerSidebar