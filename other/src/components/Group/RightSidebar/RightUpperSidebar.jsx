import React from 'react'
import PeopleSearch from './PeopleSearch'
import { GoSearch } from 'react-icons/go'
import { GrAdd } from 'react-icons/gr'
const RightUpperSidebar = () => {
  return (
      <div className='bg-white w-full rounded-2xl box-border shadow-xl px-7 py-5 flex flex-col gap-4 mb-5'>
          <div className="w-full flex items-center justify-between">
              <h4 className='m-0 font-semibold' style={{fontSize:'18px'}}>Groups</h4>
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
          <PeopleSearch company='Directors Group' field='Direction to virtual life' companyImage='https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501__340.jpg' />
          <PeopleSearch company='Friends Occasion' field='See us' companyImage='https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508__340.jpg' />
          <PeopleSearch company='besties' field='Friends Forever' companyImage='https://cdn.pixabay.com/photo/2018/07/31/14/09/young-people-3575167__340.jpg' />
          <PeopleSearch company='Big boy Club' field='Riders with Fighters' companyImage='https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275__340.jpg' />
          <PeopleSearch company='triplets' field='Business Managements' companyImage='https://cdn.pixabay.com/photo/2016/11/22/23/49/cyclists-1851269__340.jpg' />

 

    </div>
  )
}

export default RightUpperSidebar