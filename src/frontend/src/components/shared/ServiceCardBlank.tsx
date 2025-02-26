import React from 'react'
import { Button } from '../ui/button'

const ServiceCardBlank = () => {
  return (
    <div className="service-card-blank rounded-[4px] overflow-hidden">
        <img className='w-full object-cover h-[10rem]' src="/images/img.png" alt="" />
        <div className="det px-2 pt-3 pb-2">
            <h3 className="text-white font-semibold mb-1">Car Parts & Repair</h3>
            <p className="text-sm text-white">House 32, afric avenue, lokiz, Zame</p>
        </div>
        <div className="bottom px-2 pt-2 pb-3 flex justify-between items-center">
            <div className="provider-profile flex gap-2">
                <img className="h-10 w-10 object-cover rounded-full" src="/images/profile.jpg" alt="" />
                <div>
                    <p className="text-sm text-white">Alan Brookes</p>
                    <p className="text-sm text-white/70">Contractor</p>
                </div>
            </div>
            <Button className='bg-[#1EA54C] hover:bg-[#14893b] rounded-lg px-3'>View</Button>
        </div>
    </div>
  )
}

export default ServiceCardBlank