import React from 'react'

const BooksMediaDetails = () => {
  return (
    <div className='properties flex flex-col gap-3 mt-4 max-w-2xl text-[15px]/7'>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className='text-gray-300'>Media:</div>
            <div className='text-white'>Book</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Title:</div>
            <div className='text-white'>The Pragmatic Programmer: Your Journey to Mastery</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Author:</div>
            <div className='text-white '>Andrew Hunt, David Thomas</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Publisher:</div>
            <div className='text-white '>Addison-Wesley</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>ISBN:</div>
            <div className='text-white '>978-0135957059</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Edition:</div>
            <div className='text-white '>20th Anniversary Edition</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Language:</div>
            <div className='text-white '>English</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Genre:</div>
            <div className='text-white '>Technology, Programming</div>
        </div>
        <div className="grid grid-cols-[8rem_1fr] lg:grid-cols-[9rem_1fr] gap-2">
            <div className=' text-gray-300'>Condition:</div>
            <div className='text-white '>New</div>
        </div>
    </div>
  )
}

export default BooksMediaDetails