import React from 'react'

const VehicleDetails = () => {
  return (
    <div className='properties text-[15px] mt-8 max-w-2xl'>
        <div className='grid sm:grid-cols-2 sm:gap-x-24 md:gap-x-32 gap-y-5'>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Vehicle Type</div>
                <div className='text-white font-medium'>Car</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Make</div>
                <div className='text-white font-medium'>Toyota</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Model</div>
                <div className='text-white font-medium'>Corolla</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Year</div>
                <div className='text-white font-medium'>2018</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Mileage</div>
                <div className='text-white font-medium'>45000</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Engine Size</div>
                <div className='text-white font-medium'>1.8L</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Fuel Type</div>
                <div className='text-white font-medium'>Petrol</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Transmission</div>
                <div className='text-white font-medium'>Automatic</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Color</div>
                <div className='text-white font-medium'>White</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300 font-light'>Condition</div>
                <div className='text-white font-medium'>used</div>
            </div>
        </div>
    
    </div>
  )
}

export default VehicleDetails