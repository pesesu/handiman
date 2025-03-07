import { MapPinIcon } from "@heroicons/react/24/solid";

interface ServiceProps {
    service: {
        distance: number;
        image: string,
        name: string,
        state: string,
        category: string,
        city: string,
        provider: {
            first_name: string,
            last_name: string,
            profile_photo: string
        }
    },
    key: number
}

const ServiceCardModified: React.FC<ServiceProps> = ({service, key}) => {
  return (
    <div className="service-card-default rounded-lg overflow-hidden bg-[#1E294] shadow-[0_0px_5px_rgba(9,11,12,.4)] border-color">
        <div className="det px-2 py-3">
            <div className="flex justify-between gap-2 text-white">
                <div className="flex items-center gap-1">
                    {/* <MapPinIcon className="h-4 w-4 text-white" /> */}
                    <p className="text-sm">{service.state}, {service.city}</p>
                </div>
                <div className="text-sm text-white/90">{service.distance}/km away</div>
            </div>
        </div>
        <img className='w-full object-cover h-[11.5rem] md:h-[8rem] px-' src={service.image} alt="" />
        <h3 className="text-lg text-white font-[600] mt-2 px-2">{service.name}</h3>
        <div className="bottom px-2 pb-4 flex justify-between mt-2">
            <div className="provider-profile flex items-center gap-2">
                <img className="h-6 w-6 object-cover rounded-full" src={service.provider.profile_photo} alt="" />
                <div>
                    <p className="text-sm text-white">{service.provider.first_name} {service.provider.last_name}</p>
                </div>
            </div>
            <div className="text-sm shadow-sm text-white/90 px-[6px] py-[6px] rounded-lg bg-[#30303B] leading-5 tracking-wide">{service.category}</div>
        </div>
        
    </div>
  )
}

export default ServiceCardModified