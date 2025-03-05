import { useEffect, useRef } from "react";
import Header from '@/components/shared/Header'
import BreadcrumbHero from '@/components/shared/BreadcrumbHero'
import { StarIcon } from "@heroicons/react/24/solid";
import { MapPinIcon, EyeIcon, HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import ImageGallerySlider from '@/components/shared/ImageGallerySlider';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Mail, Phone, ScrollText, User } from 'lucide-react'
import GoogleMapComponent from '@/components/shared/GoogleMap';
import AppVideo from '@/components/shared/AppVideo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReviewSection from '@/components/shared/ReviewSection';
import Footer from '@/components/shared/Footer';
import stickybits from "stickybits";
import StickyBox from "react-sticky-box";

const SingleService = () => {
  const breadcrumbItems = [{
    name: "Service",
  }]


  return (
    <div>
        <Header />
        <div className='mt-14'>
            <BreadcrumbHero title='Service Details' subs={breadcrumbItems} />
        </div>
        <div className="content md:px-5 py-14">
            <div className="grid gap-5 lg:grid-cols-[1fr_24rem]">
              <div className="left px-3 lg:px-4 py-4 lg:py-6 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] w-full">
                <div className="name text-3xl font-semibold text-white mb-2">Lighting Services</div>
                <div className="flex flex-col md:flex-row lg:flex-col gap-[10px]">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="h-3 w-3 text-white" />
                      <div className='text-gray-100 text-sm'>18 Boon Lay Way, Singapore <span className='text-[#AFDE74] underline'>View location</span></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="h-3 w-3 text-yellow-500" />
                      <div className='text-gray-100 text-sm'>4.9<span className="text-white/80">(255 reviews)</span></div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center ">
                    <div className="flex items-center gap-1">
                      <EyeIcon className="h-3 w-3 text-white" />
                      <div className="text-sm text-gray-100">
                        3050 Views
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <HeartIcon className="h-3 w-3 text-white" />
                      <div className="text-sm text-gray-100">
                        Add to Wishlist
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <ShareIcon className="h-3 w-3 text-white" />
                      <div className="text-sm text-gray-100">
                        Share Now
                      </div>
                    </div>
                  </div>
                </div>
                <div className='py-6'>
                  <ImageGallerySlider />
                </div>
                <Separator className='bg-[#2E3E4A]' /> 

                <div className="text-2xl text-white text-left font-semibold h-font mt-5">Overview</div>

                <div className='text-[15px]/6 text-gray-100 mt-3'>
                  Provides reliable and professional electrical solutions for residential and commercial clients. Our licensed electricians are dedicated to delivering top-quality service, ensuring safety, and meeting all your electrical needs. Committed to providing high-quality electrical solutions with a focus on safety and customer satisfaction. Our team of licensed electricians is equipped to handle both residential and commercial projects with expertise and care.
                </div>
                <br />
                <div className='text-[15px/6 text-gray-100'>
                  Comprehensive overview of Electrical Services, including the types of services offered, key benefits, location, contact details, special offers, and customer reviews.
                </div>
                
                <div className='mt-5'>
                  <div className="text-2xl text-white text-left font-semibold h-font">Features</div>
                  <div className="attributes mt-5 border border-[#2E3E4A] rounded-lg">
                    <div className="flex flex-col">
                      <div className="-m-1.5 overflow-x-auto">
                        
                        <div className="p-1.5 min-w-full inline-block align-middle">
                          <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-[#2E3E4A]">
                              <thead>
                                <tr>
                                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white/70 uppercase">s/n</th>
                                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white/70 uppercase">Attribute</th>
                                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white/70 uppercase">Value</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#2E3E4A]">
                                <tr className="hover:bg-gray-500">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">1</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">Category</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">Eletrical/Electronics</td>
                                </tr>

                                <tr className="hover:bg-gray-500">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">2</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">Service Type</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">One-Time</td>
                                </tr>

                                <tr className="hover:bg-gray-500">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">3</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">Available</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">Yes</td>
                                </tr>

                                <tr className="hover:bg-gray-500">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">4</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">Pricing Model</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">Quote</td>
                                </tr>

                              </tbody>
                            </table>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="video mt-5">
                  <div className="text-2xl text-white text-left font-semibold h-font ">Video</div>
                  <div className="mt-4">
                    <AppVideo />
                  </div>
                </div>

                <div className="faq mt-5">
                  <div className="text-2xl text-white text-left font-semibold h-font">FAQ's</div>
                  <div className="mt-4">
                    <Accordion type="single" collapsible className="w-full divide-[#2E3E4A]">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className='text-gray-100 hover:no-underline text-base'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='text-gray-100 text-sm'>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className='text-gray-100 hover:no-underline text-base'>Is it styled?</AccordionTrigger>
                        <AccordionContent className='text-gray-100 text-sm'>
                          Yes. It comes with default styles that matches the other
                          components&apos; aesthetic.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className='text-gray-100 hover:no-underline text-base'>Is it animated?</AccordionTrigger>
                        <AccordionContent className='text-gray-100 text-sm'>
                          Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                <div className="contact-us mt-5">
                  <ReviewSection />
                </div>
                
              </div>
              <div  className="right">
                {/* <div ref={sidebarRef}> */}
                <StickyBox offsetTop={68} offsetBottom={20} className="w-full">
                 <div>
                  <div className="Service-provider px-3 lg:px-4 py-4 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] w-full text-base">
                    {/* <div className="text-2xl text-white text-left font-semibold h-font">Service Actions</div> */}
                    <Separator className='bg-[#2E3E4A] mt-2' /> 
                    <div className='flex flex-col gap-4 mt-6'>
                      <Button className='text-[#223841] bg-[#AFDE74] hover:bg-[#91c255] rounded-lg px-3 font-semibold w-full h-[44px]'><Phone className='w-4 h-4'/>Call Provider</Button>
                      <Button className='text-white bg-transparent hover:bg-[#91c255] border border-[#3c4c58] rounded-lg px-3 font-semibold w-full h-[44px]'><Mail className='w-4 h-4' />Send Enquiry</Button>
                    </div>
                  </div>
                  <div className="Service-provider px-3 lg:px-4 py-4 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] w-full text-base mt-7">
                    <div className="text-2xl text-white text-left font-semibold h-font">Service Provider</div>
                    <div className='flex flex-col gap-4 items-center justify-center bg-[#405461] px-3 py-5 rounded-lg mt-4'>
                      <img src="/images/profile.jpg" alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
                      <div className='text-center flex flex-col items-center justify-center'>
                        <div className="text-xl text-gray-100 font-semibold">Thomas Herzberg</div>
                        <div className="flex items-center gap-1">
                          <StarIcon className="h-3 w-3 text-yellow-500" />
                          <div className='text-gray-100 text-sm'>4.9<span className="text-white/80">(255 reviews)</span></div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-between'>
                          <div className='flex gap-2 items-center text-white/95'>
                            <User className='w-4 h-4 text-white/80'/>
                            <div className=''>Member Since</div>
                          </div>
                          <div className='text-white/80'>14 Apr 2023</div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex gap-2 items-center text-white/95'>
                            <MapPinIcon className="h-4 w-4" />
                            <div className=''>Address</div>
                          </div>
                          <div className='text-white/80'>Hanover, Maryland</div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex gap-2 items-center text-white/95'>
                          <Mail className="h-4 w-4" />
                            <div className=''>Email</div>
                          </div>
                          <div className='text-white/80'>Thomasxxx@exaample.com</div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex gap-2 items-center text-white/95'>
                            <Phone className="h-4 w-4" />
                            <div className=''>Phone</div>
                          </div>
                          <div className='text-white/80'>+1 888 8XX XXXX</div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex gap-2 items-center text-white'>
                            <ScrollText className="h-4 w-4" />
                            <div className=''>No of Listings</div>
                          </div>
                          <div className='text-white/80'>03</div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex gap-2 items-center text-white/95'>
                            <div className=''>Social Profiles</div>
                          </div>
                          <div className='flex gap-2'>
                            <a href="#" className="text-white hover:text-gray-200">
                              <img className='w-6 h-6' src="/images/icons/socials/facebook.png" alt="" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200">
                              <img className='w-6 h-6' src="/images/icons/socials/instagram.png" alt="" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200">
                            <img className='w-6 h-6' src="/images/icons/socials/twitter.png" alt="" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200">
                              <img className='w-6 h-6' src="/images/icons/socials/whatsapp.png" alt="" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200">
                              <img className='w-6 h-6' src="/images/icons/socials/youtube.png" alt="" />
                            </a>
                            <a href="#" className="text-white hover:text-gray-200">
                              <img className='w-6 h-6' src="/images/icons/socials/linkedin.png" alt="" />
                            </a>
                          </div>
                        </div>

                      </div>
                      <Separator className='bg-[#2E3E4A] mt-2' /> 
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <Button className='text-[#223841] bg-white hover:bg-[#91c255] rounded-lg px-3 font-semibold w-full h-[44px]'><User className='w-4 h-4'/>Contact Provider</Button>
                        <Button className='text-[#223841] bg-[#a4adb5] hover:bg-[#91c255] rounded-lg px-3 font-semibold w-full h-[44px]'><User className='w-4 h-4'/>Chat Now</Button>
                      </div>
                    </div>
                  </div>

                  <div className="business-hours px-3 lg:px-4 py-4 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] w-full mt-7 text-base">
                    <div className="text-2xl text-white text-left font-semibold h-font">Business Hours</div>
                    <div className='flex flex-col gap-4 mt-4'>
                      <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center text-white/95'>
                          <div className=''>Monday</div>
                        </div>
                        <div className='text-white/80'>10:00 AM - 5:00 PM</div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center text-white/95'>
                          <div className=''>Tuesday</div>
                        </div>
                        <div className='text-white/80'>10:00 AM - 5:00 PM</div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center text-white/95'>
                          <div className=''>Wednesday</div>
                        </div>
                        <div className='text-white/80'>10:00 AM - 5:00 PM</div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center text-white/95'>
                          <div className=''>Thursday</div>
                        </div>
                        <div className='text-white/80'>10:00 AM - 5:00 PM</div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center text-white/95'>
                          <div className=''>Friday</div>
                        </div>
                        <div className='text-white/80'>10:00 AM - 5:00 PM</div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center text-white/95'>
                          <div className=''>Saturday</div>
                        </div>
                        <div className='text-white/80'>10:00 AM - 5:00 PM</div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center text-white/95'>
                          <div className=''>Sunday</div>
                        </div>
                        <div className='text-red-500'>Closed</div>
                      </div>
                    </div>
                  </div>

                  <div className="location px-3 lg:px-4 py-4 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] w-full mt-7 text-base">
                    <div className="text-2xl text-white text-left font-semibold h-font">Location</div>
                    <div className="mt-4">
                      <GoogleMapComponent />
                    </div>
                    {/* <LeafletMap /> */}
                  </div>
                  </div>
                </StickyBox>
                {/* </div> */}

              </div>
            </div>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default SingleService