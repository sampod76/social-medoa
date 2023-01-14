import React from 'react'

const PeopleSearch = ({company, field, companyImage }) => {
    return (
        <div className='w-full flex items-center justify-between'>
            <div className="flex items-center justify-center gap-3">     
                    <img src={companyImage} className='h-10 w-10 rounded-full object-cover ring-4 ring-white duration-150 hover:ring-blue-100 cursor-pointer' alt="profileImg" />
                <div className="flex- flex-col gap-1">
                    <h5 className='m-0 text-sm font-semibold'>{company}</h5>
                    <h6 className='m-0 text-sm font-medium'>{field}</h6>
                </div>
            </div>
        </div>
    )
}

export default PeopleSearch
