"use client"

import * as React from "react"
import { Lightbulb, Minus, Plus } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import FloatingButton from "./FloatingButton"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

const HomeDrawer = () => {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <div>
        <Drawer>
          <DrawerTrigger className="fixed bottom-4 right-4 z-10" asChild>
              
            <Button 
                className="rounded-full w-12 h-12 p-0 cursor-pointer bg-gray-600 hover:bg-[#AFDE74] shadow-lg"
                variant="default"
            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {/* <Lightbulb className="h-6 w-6" /> */}
                            <img src="/images/icons/bulb.png" alt="Logo" className="h-7" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Explore Now</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </Button>
                      
              {/* <FloatingButton /> */}
          </DrawerTrigger>
          <DrawerContent className="h-[100vh] padding-0 m-0">
              <div className="w-full h-full bg-[#131518] p-5 md:px-10 lg:px-20 m-0 text-white overflow-auto">
                  <div className="mt-3">
                      <div className="max-w-[48rem] mb-4">
                          <DrawerTitle className="text-2xl text-[#ECECEC] font-bold">Find, Shop & Connect.</DrawerTitle>
                          <DrawerDescription className="text-base text-[#ECECEC] mt-4">Welcome to HandiMan, the ultimate platform to discover businesses, shop online, and connect with top-rated local services – all in one place</DrawerDescription>
                          
                          <div className="content pt-4">
                              <div className="flex flex-col leading-8">
                                  <div className="">🌍 Explore businesses in your area</div>
                                  <div>🛍️ Shop for products & services from trusted sellers</div>
                                  <div>📞 Easily connect with professionals near you</div>
                              </div>
                          
                              <div className="mt-8">
                                  <div className="text-xl font-semibold">
                                      🔥 What We Offer
                                  </div>
                                  <div className="flex flex-col mt-4 leading-8">
                                      <div className="">✅ Business Directory – Find & contact local professionals like plumbers, electricians, mechanics, and more.</div>
                                      <div>✅ E-Commerce Marketplace – Shop directly from local   sellers, offering everything from electronics to fashion</div>
                                      <div>✅ Verified Listings & Reviews – Make informed decisions with ratings & real customer feedback.</div>
                                      <div>✅ Seamless Search & Navigation – Browse by category, location, or product type.</div>
                                  </div>
                              </div>

                              <div className="mt-8">
                                  <div className="text-xl font-semibold">
                                      📍 How It Works
                                  </div>
                                  <div className="flex flex-col mt-4 leading-8">
                                      <div className="">1️⃣ Search – Find businesses or products easily</div>
                                      <div>2️⃣ Compare – Read reviews & check ratings</div>
                                      <div>3️⃣ Shop or Connect – Buy products or hire professionals instantly</div>
                                  </div>
                              </div>

                              <div className="mt-8">
                                  <div className="text-xl font-semibold">
                                      📍 How It Works
                                  </div>
                                  <div>We welcome all businesses, from freelancers and startups to established brands.</div>
                                  <div className="flex flex-col mt-4 leading-8">
                                      <div className="">🔹 Local Services – Plumbers, electricians, cleaners, mechanics, etc.</div>
                                      <div>🔹 Retail & Shopping – Clothing, electronics, supermarkets.</div>
                                      <div>🔹 Food & Drinks – Restaurants, cafés, catering businesses.</div>
                                      <div>🔹 Health & Wellness – Hospitals, pharmacies, gyms, spas.</div>
                                      <div>🔹 Auto & Transport – Car rentals, repairs, logistics.</div>
                                      <div>🔹 And many more!</div>
                                      
                                  </div>
                              </div>

                              <div className="flex flex-col gap-5 mt-4">
                                  <div>🚀 Ready to explore? Start browsing now!</div>
                                  <div>📢 Are you a business owner? List your business & sell your products today!</div>
                                  <div>🔗 Get Started Now | 📞 Contact Us: [Your Contact Info]</div>
                              </div>

                          </div>
                      </div>
                  </div>
                  <DrawerFooter>
                      <DrawerClose asChild>
                        <Button className="text-[#223841]" variant="outline">Close</Button>
                      </DrawerClose>
                  </DrawerFooter>
              </div>
          </DrawerContent>
        </Drawer>
    </div>
  )
}

export default HomeDrawer
