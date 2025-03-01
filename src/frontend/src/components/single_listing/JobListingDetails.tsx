import React from 'react'

const JobListingDetails = () => {
  return (
    <div className='properties flex flex-col gap-5 text-[15px] mt-8 max-w-2xl'>
        <div className="flex gap-2">
            <div className='text-white font-semibold'>Job Title:</div>
            <div className='text-gray-200'>Frontend Developer</div>
        </div>
        <div className="flex gap-2">
            <div className='text-white font-semibold'>Company Name:</div>
            <div className='text-gray-200'>Innovative Tech</div>
        </div>
        <div className="flex gap-2">
            <div className='text-white font-semibold'>Location:</div>
            <div className='text-gray-200'>Abuja, Nigeria</div>
        </div>
        <div className="flex gap-2">
            <div className='text-white font-semibold'>Job Type:</div>
            <div className='text-gray-200'>Full Time</div>
        </div>
        <div className="flex gap-2">
            <div className='text-white font-semibold'>Salary Range:</div>
            <div className='text-gray-200'>₦250,000 - ₦400,000 per month</div>
        </div>
        <div className="flex gap-2">
            <div className='text-white font-semibold'>Experience Required:</div>
            <div className='text-gray-200'>2+ years in frontend development</div>
        </div>
        <div className="flex gap-2">
            <div className='text-white font-semibold'>Education Required:</div>
            <div className='text-gray-200'>Bachelor's Degree in Computer Science or related field</div>
        </div>
        {/* <div className="flex flex-col gap-2">
            <div className='text-white font-semibold'>Job Descriptions:</div>
            <div className='text-gray-200'>We are looking for a Frontend Developer with experience in React.js and modern UI/UX design principles. 
                The role involves building responsive applications and collaborating with the backend team.</div>
        </div> */}
        <div className="flex flex-col gap-2">
            <div className='text-white font-semibold'>Benfits:</div>
            <div className='flex flex-col gap-1'>
                <div className='text-gray-200'>- Flexible work hours, Health insurance</div>
                <div className='text-gray-200'>- Health insurance</div>
                <div className='text-gray-200'>- Career growth opportunities</div>
                <div className='text-gray-200'>- Remote work options</div>
            </div>
        </div>
    </div>
  )
}

export default JobListingDetails