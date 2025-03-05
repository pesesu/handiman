// import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect } from "react"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from "../ui/button";


const Hero = () => {

  return (
    <div className='hero px-3 md:px-5 py-20 md:py-20 md:gap-10 h-[80vh] md:h-[100vh] relative'>
        {/* <img className="h-[5rem] hidden md:block absolute top-28 left-14" src="/images/hero/cart.png" alt="cart" />
        <img className="h-[4rem] hidden lg:block absolute top-[26rem] left-36" src="/images/hero/ruler.png" alt="cart" />
        <img className="h-[2rem] hidden md:block absolute top-28 right-42" src="/images/hero/tools.png" alt="cart" />
        <img className="h-[3rem] hidden lg:block absolute top-[22.5rem] right-28" src="/images/hero/machine.png" alt="cart" />
        <img className="h-[4rem] absolute -bottom-6 right-1/2 translate-x-1/2" src="/images/hero/cook.png" alt="cart" /> */}
        <div className="flex flex-col items-center justify-center gap-16 md:gap-14 h-full md:pt-10 relative z-10">
            <div className="hero-texts flex flex-col justify-center items-center gap-10 md:gap-6 text-center">
                <div className="hidden text-3xl/8 md:text-4xl/8 font-bold text-white h-font">
                    Find Products and Services <span className="text-[#28cb5e] font-extrabold">Near You</span>
                </div>
                
                <div className="text-lg text-[#FFFFFF]/70 hidden">
                    You are just a search away from the service provider
                </div>
            </div>
            <div className="searh w-full">
            <Tabs defaultValue="service" className="w-full flex flex-col justify-center items-center gap-6 md:gap-10">
                <TabsList className="bg-[#242422]">
                    <TabsTrigger className="data-[state=active]:bg-[#2E3E4A] data-[state=active]:text-white text-[#FFFFFF]/70" value="service">Service</TabsTrigger>
                    <TabsTrigger className="data-[state=active]:bg-[#2E3E4A] data-[state=active]:text-white text-[#FFFFFF]/70" value="product">Product</TabsTrigger>
                    <TabsTrigger className="data-[state=active]:bg-[#2E3E4A] data-[state=active]:text-white text-[#FFFFFF]/70" value="provider">Provider</TabsTrigger>
                </TabsList>
                <TabsContent className="w-full" value="service">
                    <div className="flex justify-center">
                        <div className="flex w-full md:max-w-[50rem] gap-5 items-center md:px-10">
                            <div className="servic-search flex items-center justify-center w-full bg-[#18212a] rounded-xl px-5 h-12">
                                <input type="text" className="w-full placeholder-[#FFFFFF]/60 outline-none text-white" placeholder="Search services near you" />
                                <MagnifyingGlassIcon className="h-6 w-6 text-gray-100" />
                            </div>
                            <Button className='hidden md:block text-[#223841] bg-[#AFDE74] hover:bg-[#14893b] rounded-lg h-[44px] px-3'>Create Listing</Button>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="product">Change your password here.</TabsContent>
                <TabsContent value="provider">Change your password here.</TabsContent>
            </Tabs>
            </div>
        </div>
    </div>
  )
}

export default Hero