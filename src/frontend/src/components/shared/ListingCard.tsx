import { MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface ListingCardProps {
    item: {
        distance: number,
        image: string,
        title: string,
        price: string,
        description: string,
        state: string,
        city: string,
    },
    key: number
}

const ListingCard: React.FC<ListingCardProps> = ({item, key}) => {
  return (
    <div key={key} className="break-inside-avoid mb-2 shadow-[0_0px_5px_rgba(9,11,12,.67)] overflow-hidden border-color rounded-[4px] overflow-hidden bg-[#08090c]">
        <div className="w-full">
        <img
            src={item.image}
            alt="Service Image"
            className="w-full h-auto object-cover"
        />
        </div>
        <div className="px-3 py-4">
        <h3 className="text-base font-medium text-white leading-6">{item.title}</h3>
        <p className="text-xl font-bold text-white mt-[2px]">&#x20A6;{item.price}</p>
        <div className="flex items-center text-white mt-2 gap-[2px]">
            {/* <MapPinIcon className="h-3 w-3 text-white" /> */}
            <div className="text-sm text-gray-200">{item.state}, {item.city}</div>
        </div>
        <p className="text-gray-200 text-sm  mt-3">
            {item.description}
        </p>
        </div>
    </div>
  )
}

export default ListingCard