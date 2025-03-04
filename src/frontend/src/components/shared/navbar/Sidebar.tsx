import { X } from 'lucide-react'
import React, { useEffect } from 'react'

interface SidebarPops {
    isOpen: boolean,
    setShowSidebar: (value: boolean) => void
}

const Sidebar: React.FC<SidebarPops> = ({isOpen, setShowSidebar}) => {
    
  return (
    <div className={`fixed left-0 top-0 bottom-0 z-[20] bg-black/85 transtion-all duration-200 ${isOpen ? 'right-0': 'right-[100%] -translate-x-68'} `}>
      <div className="w-68 h-[100vh] bg-[#2E3E4A] shadow-lg">
        <div className="flex justify-between items-center h-14 px-4 bg-[#26323C]">
          <div className="brand">
              {/* <img src="logo.png" alt="Logo" /> */}
              <span className="brand-text text-xl font-bold text-white">HandiMan</span>
              
          </div>
          <div onClick={() =>setShowSidebar(false)}><X className='text-white w-5 h-5' /></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar