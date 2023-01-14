import React from 'react'
import FollowingCompany from '../FollowingCompany'
import Header from '../Header'

const FollowCompaniesPage = () => {
    return (
        <div className='w-full'>
            <Header />
            <div className="w-full items-center justify-center flex-col my-4">
                <div className="w-full flex items-center justify-center">
                    <div className="flex lgg:w-11/12 mb-5 w-full items-center justify-center flex-col gap-2 px-4 sm:px-8 lgg:px-24">
                        <div className=" w-full flex items-center justify-start p-2 gap-8 pl-0">
                            <button className=' bg-6A4ADF md:px-4 px-2 md:w-32 w-16 py-1 md:h-10 rounded-full text-white text-xs md:text-sm font-semibold'>Companies</button>
                            <button className=' bg-6A4ADF md:px-4 px-2 md:w-32 w-16 py-1 md:h-10 rounded-full text-white text-xs md:text-sm font-semibold'>Discover</button>
                            <button className=' bg-6A4ADF md:px-4 px-2 md:w-32 w-16 py-1 md:h-10 rounded-full text-white text-xs md:text-sm font-semibold'>Add Company</button>
                        </div>
                        <div className=" w-full grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-8 ">
                            <FollowingCompany companyBackground='https://cdn.pixabay.com/photo/2017/07/15/15/50/fantasy-2506830__340.jpg' companyName='Steakers' companyProfile='https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg' members='2.4M' companyType='steakers Company' />
                            
                            <FollowingCompany companyBackground='https://cdn.pixabay.com/photo/2018/05/02/23/42/ux-3370084__340.jpg' companyName='ART Design' companyProfile='https://cdn.pixabay.com/photo/2018/02/12/23/55/hud-3149462__340.png' members='2.4M' companyType='UI Design Company' />
                            
                            <FollowingCompany companyBackground='https://cdn.pixabay.com/photo/2016/04/13/20/36/mercedes-1327610__340.jpg' companyName='Mercedes Benz' companyProfile='https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521_960_720.jpg' members='2.4M' companyType='Car Designing Company' />
                            
                            <FollowingCompany companyBackground='https://cdn.pixabay.com/photo/2018/05/20/16/01/motorcycle-3416119__340.png' companyName='Steakers' companyProfile='https://cdn.pixabay.com/photo/2016/11/21/22/26/motor-bike-1847779__340.jpg' members='2.4M' companyType='Bike manufacturing Company'  />
 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowCompaniesPage