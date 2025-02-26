import React from 'react'
import { Button } from '../ui/button'
import ServiceCardDefault from '../shared/ServiceCardDefault';
import ServiceCardModified from '../shared/ServiceCardModified';
import ServiceCardBlank from '../shared/ServiceCardBlank';

const FeaturedServices = () => {

    const defaultCard = Array.from({ length: 12 }, (_, index) => <div key={index}><ServiceCardDefault /></div>);
    const modifiedCard = Array.from({ length: 12 }, (_, index) => <div key={index}><ServiceCardModified /></div>);
    const blankCard = Array.from({ length: 12 }, (_, index) => <div key={index}><ServiceCardBlank /></div>);

  return (
    <div className='featured-services py-12 px-3 md:px-5 bg-[#26323C]'>
        <div className="flex items-center justify-between mb-10">
          <div className="text-xl text-white text-left font-semibold h-font">Featured Services</div>
          <Button className='text-xs text-[#afde74] hover:text-[#223841] bg-transparent hover:bg-[#afde74] border-[#afde74] rounded-lg px-3 font-semibold' variant="outline">View All</Button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* <ServiceCardModified /> */}
            {/* {modifiedCard} */}
            { defaultCard }
            {/* { blankCard } */}
        </div>
    </div>
  )
}

export default FeaturedServices