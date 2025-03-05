import marketplaceCategories from '@/contants/marketplace-categories'
import { Separator } from '@radix-ui/react-separator'
import { a } from 'node_modules/framer-motion/dist/types.d-6pKw1mTI'
import React, { useEffect, useState } from 'react'

interface MarketplaceDrawerProps {
    isActive: boolean;
    setActiveDrawer: (drawer: string) => void;
}
const MarketplaceDrawer: React.FC<MarketplaceDrawerProps> = ({isActive, setActiveDrawer}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [active, setActive] = useState(false)
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')

     useEffect(() => {
        setActive(isActive)
    }, [isActive])

    const onCategoryClick = (category: string, index:number) => {
        setCategory(category)
        setSubCategory('')
        setActiveIndex(index)
    }

  return (
    <>
    {
        active && <div onMouseOver={() => setActiveDrawer('marketplace')} onMouseLeave={() => setActiveDrawer('')} className="service-drawer p-5 pb-8 w-full absolute z-[10] left-0 top-14 bg-[#101218] shadow-lg hidden md:block">

            <div className="grid grid-cols-2 gap-2 max-w-5xl">
                <div className='md:border-r md:border-gray-400 md:pr-5'>
                    <div className="text-lg text-white font-bold">Marketplace</div>
                    <div className='w-full h-[1px] bg-gray-400 mt-3 max-w-[16rem]' />
                    <div className="grid md:grid-cols-2 gap-x-5 gap-y-6 text-sm font-medium mt-8 max-h-[65vh] overflow-auto">
                    
                        {marketplaceCategories.map((item, index) => {
                            return <div onClick={() => onCategoryClick(item.name, index)} className={`cursor-pointer hover:text-[#027CDA] ${index === activeIndex ? 'text-[#027CDA]' : 'text-gray-200'}`} key={index} >{item.name}</div>
                        })}
                    </div>
                </div>

                <div className='md:pl-5 max-h-[60vh] overflow-auto'>
                    <div className="grid md:grid-cols-2 gap-x-2 gap-y-6 text-sm font-medium mt-8">
                        {marketplaceCategories[activeIndex].subCategories.map((item, index) => {
                            return <a href='#'><div onClick={() => setSubCategory(item)} className='text-gray-200 hover:text-[#027CDA]' key={index} >{item}</div></a>
                        })}
                    </div>
                </div>

            </div>
        </div>
        }
    </>
  )
}

export default MarketplaceDrawer