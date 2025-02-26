import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { HomeIcon } from "@heroicons/react/24/outline";


interface BreadcrumbHeroProps {
    title: string,
    subs?: {
      name: string,
      url?: string | null
    }[] | null
}

const BreadcrumbHero:React.FC<BreadcrumbHeroProps> = ({title, subs}) => {
  return (
    // #4f6931 #027476
    <div className='flex flex-col gap-2 items-center justify-center h-44 md:h-[154px] bg-gradient-to-r from-[#1D2934] via-[#354651] to-[#1D2934]'>
        <div className="title text-[40px] text-white font-semibold tracking-wide">{title}</div>
        
        <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className='text-white/60 text-base hover:text-[#AFDE74]' href="/"><HomeIcon className="h-[14px] w-[14px] text/white/60" /></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='text-white/60' />
            {subs?.map((sub, index) => (
                <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink className='text-white/60 hover:text-white/60 text-base' href={`/${sub?.url}`}>{sub.name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='text-white/70'/>
                </>
            ))}
            {/* <BreadcrumbItem>
            <BreadcrumbLink className='text-white/60 hover:text-white/60 text-base' href="/components">Service</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='text-white/70'/> */}
            <BreadcrumbItem>
              <BreadcrumbPage className='text-white text-base'>{title}</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>

    </div>
  )
}

export default BreadcrumbHero
