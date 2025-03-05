import { MapPinIcon } from "@heroicons/react/24/solid";

const ServiceCardDefault = () => {
  return (
    <div className="service-card-default rounded-[4px] overflow-hidden b-[#4D5160]/90 border border-[#4D5160]">
        <img className='w-full object-cover h-[10rem]' src="/images/img.png" alt="" />
        <div className="flex items-center justify-between gap-2 text-white mt-4 px-2">
            <div className="flex items-center gap-1">
                <MapPinIcon className="h-4 w-4 text-white" />
                <p className="text-sm">Lekki, Lagos</p>
            </div>
            <div className="text-xs text-white px-[6px] py-[6px] rounded-lg bg-[#30303B] leading-5 tracking-wide">Electrician</div>
        </div>

        <div className="det px-2 pt-4">
            <h3 className="text text-lg text-white font-[600]">Car Parts & Repair</h3>
            {/* <p className="text-sm text-white">House 32, afric avenue, lokiz, Zame</p> */}
            
        </div>
        <div className="bottom px-2 py-3 flex justify-between mt-2">
            <div className="provider-profile flex gap-2">
                <img className="h-6 w-6 object-cover rounded-full" src="/images/profile.jpg" alt="" />
                
                <div>
                    <p className="text-sm text-white">Alan Brookes</p>
                    {/* <p className="text-sm text-white/70">Contractor</p> */}
                </div>
            </div>
            <div className="text-sm text-white/90">10/km away</div>
            {/* <Button className='text-[#223841] bg-[#afde74] hover:bg-[#91c255] rounded-lg px-2 h-8 text-xs font-semibold'>View</Button> */}
        </div>
    </div>
  )
}

export default ServiceCardDefault