import React from 'react'
import Header from '../Header'
import CompanyNavigation from '../CompanyNavigation'
import LeftLowerSidebar from '../LeftSidebar/LeftLowerSidebar'
import LeftUpperSidebar from '../LeftSidebar/LeftUpperSidebar'
import RightLowerSidebar from '../RightSidebar/RightLowerSidebar'
import RightUpperSidebar from '../RightSidebar/RightUpperSidebar'
import About from '../About/About'
import CompanyProfile from '../CompanyProfile'

const HomePage = () => {
    return (
        <div className='w-full bg-EEEAFB '>
            <Header />
            <div className="w-full flex items-center justify-center px-4">
                <div className="xl:w-4/5 w-full flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-center">
                        <CompanyProfile />
                    </div>
                    <div className="w-full">
                        <div className=" flex gap-4 mt-4 ">
                            <div className="md:block md:w-1/3 hidden lgg:w-1/5">
                                <LeftUpperSidebar />
                                <LeftLowerSidebar />
                            </div>
                            <div className="lgg:w-55% w-full">
                                <CompanyNavigation />
                                <About />
                            </div>
                            <div className="lgg:block hidden w-25%">
                                <RightUpperSidebar />
                                <RightLowerSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage