import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import serviceCategories from '@/contants/service-categors'
import { Separator } from '@radix-ui/react-separator'
import ServiceDrawer from './navbar/ServiceDrawer'
import MarketplaceDrawer from './navbar/MarketplaceDrawer'
import { Menu } from 'lucide-react'
import Sidebar from './navbar/Sidebar'


const Header: React.FC = () => {
    const [activeDrawer, setActiveDrawer] = useState("")
    const [showSidebar, setShowSidebar] = useState(true)

  return (
    <>
        <Sidebar isOpen={showSidebar} setShowSidebar={setShowSidebar} />
        <div className='h-14 px-3 ms:px-5 flex items-center justify-between bg-[#26323C] w-full fixed top-0 z-[10]'>
            <div className="left flex items-center gap-3">
                <Menu onClick={() => setShowSidebar(true)} className='text-white' />
                <div className="brand">
                    {/* <img src="logo.png" alt="Logo" /> */}
                    <span className="brand-text text-xl font-bold text-white">HandiMan</span>
                </div>
            </div>
            <div className="right h-full">
                <div className="flex items-center gap-8 h-full">
                    <div className="links hidden lg:flex items-center h-full">
                        <a href="#" className="text-white hover:text-gray-300 px-5">Home</a>
                        <a href="#" className="text-white hover:text-gray-300 px-5">About</a>
                        <div onMouseOver={() => setActiveDrawer('services')} onMouseLeave={() => setActiveDrawer('')} className={`flex items-center text-white hover:text-gray-300 h-full px-5 cursor-pointer`}>
                            Services
                        </div>
                        <div onMouseOver={() => setActiveDrawer('marketplace')} onMouseLeave={() => setActiveDrawer('')} className={`flex items-center text-white hover:text-gray-300 h-full px-5 cursor-pointer`}>
                            Marketplace
                        </div>
                        <a href="#" className="text-white hover:text-gray-300 px-5">Providers</a>
                        <a href="#" className="text-white hover:text-gray-300 px-5">Contact</a>
                    </div>
                    <div className="login-btn">
                        {/* <button className="text-white px-2 h-10 rounded-lg text-sm font-medium bg-[#1EA54C] hover:bg-[#14893b] transition-all">Create Listing</button> */}
                        <Button className='text-[#223841] bg-[#afde74] hover:bg-[#91c255] rounded-lg px-3 font-semibold h-10'>Create listing</Button>
                    </div>
                </div>
            </div>
            {/* Drawers */}
            <ServiceDrawer isActive={activeDrawer === 'services'} setActiveDrawer={setActiveDrawer} />
            <MarketplaceDrawer isActive={activeDrawer === 'marketplace'} setActiveDrawer={setActiveDrawer} />
        </div>
    </>
  )
}

export default Header