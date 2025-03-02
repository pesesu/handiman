import BreadcrumbHero from '@/components/shared/BreadcrumbHero'
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header'
import ImageGallery from '@/components/shared/ImageGallery'
import NumberFormatter from '@/components/shared/NNumberFormatter';
import BooksMediaDetails from '@/components/single_listing/BooksMediaDetails';
import ElectronicsDetails from '@/components/single_listing/ElectronicsDetails';
import FashionDetails from '@/components/single_listing/FashionDetails';
import FurnitureListingDetails from '@/components/single_listing/FurnitureListingDetails';
import JobListingDetails from '@/components/single_listing/JobListingDetails';
import PropertyDetails from '@/components/single_listing/PropertyDetails';
import VehicleDetails from '@/components/single_listing/VehicleDetails';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { EyeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Bookmark, ChevronDown, ChevronRight, Factory, Flag, Mail, Phone, ScrollText, StarIcon, User } from 'lucide-react';
import { useState } from 'react';

const images = [
"https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGF8FwEQcN76kLjRHfGta7dnHHM0BgeFQ7Wg&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVCLjllQQM9nNTQtwlE7Xamw4Bt_SP8Htyw&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWHp4kbEemUFwpxz1dZcaG9qjsf2HAFoG0w&s"
];

const SingleListing = () => {
    const [descriptionClose, setDescriptionClose] = useState(true);
    const [showPropertyDetails, setShowPropertyDetails] = useState(false);
    const [showVehicleDetails, setShowVehicleDetails] = useState(false);
    const [showFashionDetails, setShowFashionDetails] = useState(false);
    const [showJobListingDetails, setShowJobListingDetails] = useState(false);
    const [furnitureListingDetails, setFurnitureListingDetails] = useState(false);
    const [showBooksMediaDetails, setShowBooksMediaDetails] = useState(false);
    const [showElectronicsDetails, setShowElectronicsDetails] = useState(true);

    const breadcrumbItems = [{
        name: "Marketplace",
      }]
  return (
    <div>
        <Header />
        <div className="mt-14">
            <BreadcrumbHero title="Listing" subs={breadcrumbItems}  />  
        </div>
        <div className="content md:px-5 py-14">
            <div className="grid gap-y-5 lg:gap-x-16 lg:grid-cols-[1fr_24rem]">
                <div className="left px-4 py-4 lg:py-6 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] w-full">
                    <div className="flex justify-between mb-4 md:px-4 text-sm">
                        <div className="flex items-center gap-5 text-white">
                            <div>21 days ago</div>
                            <div className="flex items-center gap-1 text-white">
                                <EyeIcon className="h-4 text-white" />
                            <div>220 Views</div>
                        </div>
                        </div>
                        <div className="flex gap-1 text-white/90 hover:text-[#32424D]">
                            <div className='p-1 rounded-lg hover:bg-[#AFDE74] hover:text-[#26323C]'>
                              <Bookmark className="w-[22px] h-[22px]" />
                            </div>
                        </div>
                    </div>
                    <ImageGallery images={images} />
                    <Separator className='bg-[#2E3E4A] mt-4' />
                    <div className="title mt-4 text-2xl font-bold text-white"> 
                        Norman B20 acoustic- cheapest online !
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:justify-between items md:gap-2 mt-4">
                        <div className="flex items-center address text-white location">
                            <MapPinIcon className="h-4 w-4 text-white" />
                            <div>1234 Main Street, Lagos</div>
                        </div>
                        <div className="flex justify-between items-end gap-2 mt-3 lg:mt-0">
                            <div className="text-3xl text-white font-bold block lg:hidden">&#8358;<NumberFormatter value={30000} /></div>
                            <div className='text-sm font-bold text-[#AFDE74] px-2 py-1 rounded-lg bg-[#405461]'>Promoted</div>   
                        </div>
                    </div>
                    <Separator className='bg-[#2E3E4A] mt-4' />
                    <div>
                        <div className="flex justify-between items-center mt-4 text-white/70 cursor-pointer">
                            <div className="text-white text-lg font-medium">Overview</div>
                            {/* {descriptionClose? <ChevronRight className='h-10' /> : <ChevronDown className='h-10' />} */}
                        </div>
                        <div className={`text-[15px] tracking-wide text-white mt-2 ${descriptionClose ? 'h-10 overflow-hidden' : ''}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos, incidunt provident assumenda! Dolor illo consequatur alias ipsum quidem, perferendis reici magnam tempora quis sint reprehenderit. Aspernatur laboriosam distinctio natus velit ratione! Facilis consectetur libero, possimus numquam totam eius in consequuntur neque, quae repellat vitae accusantium laboriosam eum odio optio? Unde sint assumenda eum repellendus, mollitia nihil ex vero perspiciatis nulla, excepturi est perferendis aspernatur, sed distinctio eveniet deserunt dignissimos officiis? Officiis alias recusandae ipsum, facilis voluptas fugiat illo iusto dolore, beatae quidem ab ad molestias exercitationem voluptate odit fugit a aliquid hic aspernatur illum sint asperiores temporibus? Expedita modi ab voluptates praesentium quibusdam aspernatur corporis sint aperiam vero tempora quae commodi ducimus voluptatem voluptatum nihil ullam
                        </div>
                        <div className='flex mt-5'>
                            <div className="description-toggle cursor-pointer text-white font-semibold" onClick={() => setDescriptionClose((current) => !current)} >
                                { descriptionClose && <span className='text-sm'>Show More...</span> }
                                { !descriptionClose && <span className='text-sm'>Show Less...</span> }
                            </div>
                        </div>
                        <Separator className='bg-[#2E3E4A] mt-4' />
                        {showPropertyDetails && <PropertyDetails />}
                        {showVehicleDetails && <VehicleDetails />}
                        {showFashionDetails && <FashionDetails />}
                        {showJobListingDetails && <JobListingDetails />}
                        {furnitureListingDetails && <FurnitureListingDetails />}
                        {showBooksMediaDetails && <BooksMediaDetails />}
                        {showElectronicsDetails && <ElectronicsDetails />}
                        <Separator className='bg-[#2E3E4A] mt-4' />
                        <div className="business mt-10 mb-2">
                          <div className="text-white text-lg font-semibold">Store</div>
                          {/* <div className="text-white text-lg font-bold"><div>Business Info</div></div> */}
                          <div className='flex gap-5 text-white mt-3'>
                            <Factory className='w-8 h-8'/>
                            <div>
                            <div className="text-white text-2xl mb-1 font-medium">Skyline Intersects Store</div>
                              <div className="flex items-center address text-white text-sm location">
                                <MapPinIcon className="h-3 w-3 text-white" />
                                <div>1234 Main Street, Lagos</div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Service-provider px-4 py-4 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] w-full text-base">
                        {/* <div className="text-2xl text-white text-left font-semibold h-font">Service Actions</div> */}
                        <div className='py-1 flex justify-between'>
                            <div className="text-3xl text-white font-bold hidden lg:block">&#8358;<NumberFormatter value={30000} /></div>
                            <a className='text-[#AFDE74] underline italic' href="">Read Reviews</a>
                        </div>
                        <Separator className='bg-[#2E3E4A] mt-2' /> 
                        <div className='flex flex-col gap-4 mt-6'>
                        <Button className='text-[#223841] bg-[#AFDE74] hover:bg-[#91c255] rounded-lg px-3 font-semibold w-full h-[44px]'><Phone className='w-4 h-4'/>Call Seller</Button>
                        <Button className='text-white bg-transparent hover:bg-[#91c255] border border-[#3c4c58] rounded-lg px-3 font-semibold w-full h-[44px]'><Mail className='w-4 h-4' />Send Enquiry</Button>
                        </div>
                    </div>
                    <div className="Service-provider px-4 py-4 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] w-full text-base mt-7">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl text-white text-left font-semibold h-font">Seller</div>
                      <div className='text-[#FC323F] flex items-center gap-1 text-sm cursor-pointer px-3 py-[6px] rounded-lg border border-[#FC323F]'>
                        <Flag className='w-4 h-4' /> 
                        <div>Report Abuse</div>
                      </div>
                      
                      
                    </div>
                    
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
                  <div className="warning px-4 py-4 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] w-full text-[15px]/6 mt-7 text-white">
                    <div className="text-lg text-white font-semibold">⚠️ Important Notice</div>
                    <div className='mb-2 mt-1'>
                      For your safety, please do not make any payments directly to sellers before receiving your order. Always ensure that:
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div>- You have received the product or service as described</div>
                      <div>- You are satisfied with the quality and condition</div>
                      <div>- The transaction follows our platform’s guidelines</div>
                    </div>
                    <Separator className='bg-[#2E3E4A] mt-2' />
                    <div className='mt-2'>
                      We are not responsible for any disputes arising from payments made outside our platform. Stay safe and shop securely! 🚀
                    </div>
                  </div>
                </div>   
            </div>
            <div className="mt-12">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default SingleListing