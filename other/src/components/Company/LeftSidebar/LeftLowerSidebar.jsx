import React from 'react'
import Analytics from './Analytics'

const LeftLowerSidebar = () => {
    return (
        <div className='bg-white w-full rounded-2xl box-border md:p-4 p-3 my-3'>
            <div className=" flex flex-col md:gap-2 gap-4">
                <div className="flex flex-col gap-2">
                    <h4 className='m-0 md:text-xl text-sm '>Analytics</h4>
                    <p className='m-0'>Last 30 days update</p>
                </div>
                <Analytics title='New Followers' percent='31.8%' analytCount='360' color='green' />
                <Analytics title='Post Impressions' percent='-48.7%' analytCount='287' color='red' />
                <Analytics title='Custom Button Clicks' percent='21.8%' analytCount='368' color='green' />
            </div>
        </div>
    )
}

export default LeftLowerSidebar