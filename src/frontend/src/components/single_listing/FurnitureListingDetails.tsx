import React from 'react'

const FurnitureListingDetails = () => {
  return (
    <div className='properties flex flex-col gap-3 mt-4 max-w-2xl text-[15px]/7'>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className='text-gray-300'>Furniture Type:</div>
            <div className='text-white'>Table</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Material:</div>
            <div className='text-white'>Solid Oak Wood</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Dimensions:</div>
            <div className='text-white '>180cm x 90cm x 75cm</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Condition:</div>
            <div className='text-white '>New</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Brand:</div>
            <div className='text-white '>Home Elegance</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Color:</div>
            <div className='text-white '>Brown</div>
        </div>
    </div>
  )
}

export default FurnitureListingDetails