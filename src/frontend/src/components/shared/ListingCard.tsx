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
    <div key={key} className="break-inside-avoid mb-3 bg-[#4D5160]/30 shadow-[0_0px_5px_rgba(9,11,12,.4)] rounded overflow-hidden">
        <div className="w-full">
        <img
            src={item.image}
            alt="Service Image"
            className="w-full h-auto object-cover rounded-t-lg"
        />
        </div>
        <div className="px-3 py-4">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-base font-bold text-[#d7a31a]">{item.price}</p>
        <p className="text-gray-200 mt-2 text-sm">
            {item.description}
        </p>
        <div className="text-sm text-white mt-4">{item.state}, {item.city}</div>
        </div>
    </div>
  )
}

export default ListingCard