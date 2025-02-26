import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"


const Header: React.FC = () => {
  return (
    <div className='h-14 px-3 ms:px-5 flex items-center justify-between bg-[#26323C]/75 w-full fixed top-0 z-[5]'>
        <div className="left">
            <div className="brand">
                {/* <img src="logo.png" alt="Logo" /> */}
                <span className="brand-text text-xl font-bold text-white">HandiMan</span>
            </div>
        </div>
        <div className="right">
            <div className="flex items-center gap-8">
                <div className="links hidden lg:flex items-center gap-8">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300">Services</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact</a>
                </div>
                <div className="login-btn">
                    {/* <button className="text-white px-2 h-10 rounded-lg text-sm font-medium bg-[#1EA54C] hover:bg-[#14893b] transition-all">Create Listing</button> */}
                    <Button className='text-[#223841] bg-[#afde74] hover:bg-[#91c255] rounded-lg px-3 font-semibold h-10'>Create listing</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header