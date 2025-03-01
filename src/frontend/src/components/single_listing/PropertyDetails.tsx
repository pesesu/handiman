import React from 'react'

const PropertyDetails = () => {
  return (
    <>
        <div className='properties text-[15px] mt-8 max-w-2xl'>
            <div className='grid sm:grid-cols-2 sm:gap-x-24 md:gap-x-32 gap-y-5'>
                <div className="flex tems-center justify-between text-white">
                    <div className='text-gray-300 font-light'>Property Type</div>
                    <div className='text-white font-medium'>Apartment</div>
                </div>
                <div className="flex tems-center justify-between text-white">
                    <div className='text-gray-300 font-light'>Bedrooms</div>
                    <div className='text-white font-medium'>3</div>
                </div>
                <div className="flex tems-center justify-between text-white">
                    <div className='text-gray-300 font-light'>Bathrooms</div>
                    <div className='text-white font-medium'>2</div>
                </div>
                <div className="flex tems-center justify-between text-white">
                    <div className='text-gray-300 font-light'>Area</div>
                    <div className='text-white font-medium'>2000 sqft</div>
                </div>
                <div className="flex tems-center justify-between text-white">
                    <div className='text-gray-300 font-light'>Year builth</div>
                    <div className='text-white font-medium'>2020</div>
                </div>
                <div className="flex tems-center justify-between text-white">
                    <div className='text-gray-300 font-light'>Garages</div>
                    <div className='text-white font-medium'>1</div>
                </div>
                <div className="flex tems-center justify-between text-white">
                    <div className='text-gray-300 font-light'>Furnished</div>
                    <div className='text-white font-medium'>Yes</div>
                </div>
                
            </div>
        
        </div>
    </>
  )
}

export default PropertyDetails