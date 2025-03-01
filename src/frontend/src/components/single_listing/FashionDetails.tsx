import React from 'react'

const FashionDetails = () => {
  return (
    <div className='properties text-[15px] mt-4 max-w-2xl'>
        <div className='grid sm:grid-cols-2 sm:gap-x-24 md:gap-x-32 gap-y-4'>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300'>Brand</div>
                <div className='text-white font-medium'>Nike</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300'>Size</div>
                <div className='text-white font-medium'>42</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300'>Color</div>
                <div className='text-white font-medium'>Black & White</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300'>Gender</div>
                <div className='text-white font-medium'>Unisex</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300'>Material</div>
                <div className='text-white font-medium'>Leather & Mesh</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300'>Condition</div>
                <div className='text-white font-medium'>New</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300'>Style</div>
                <div className='text-white font-medium'>Causual sneaker</div>
            </div>
            <div className="flex tems-center justify-between text-white">
                <div className='text-gray-300'>Season</div>
                <div className='text-white font-medium'>All-Season</div>
            </div>
        </div>
    
    </div>
  )
}

export default FashionDetails