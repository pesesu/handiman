import { useState } from 'react';
import BreadcrumbHero from '@/components/shared/BreadcrumbHero'
import Header from '@/components/shared/Header'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator'
import { Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import FancyMultiSelect from '@/components/shared/multi-select';
import ServiceCardDefault from '@/components/shared/ServiceCardDefault';
import StickyBox from 'react-sticky-box';
import Footer from '@/components/shared/Footer';
import ServiceCardModified from '@/components/shared/ServiceCardModified';
import services from '@/contants/services';

type OptionsProps = Record<"value" | "label", string>;

const Services = () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleSelect = (value: string) => {
        setSelectedValues((prev) =>
          prev.includes(value) ? [...prev] : [...prev, value]
        );
    };

    const languages = [
       {
         value: "next.js",
         label: "Next.js",
       },
       {
         value: "sveltekit",
         label: "SvelteKit",
       },
       {
         value: "nuxt.js",
         label: "Nuxt.js",
       },
       {
         value: "remix",
         label: "Remix",
       },
       {
         value: "astro",
         label: "Astro",
       },
       {
         value: "wordpress",
         label: "WordPress",
       },
       {
         value: "express.js",
         label: "Express.js",
       },
       {
         value: "nest.js",
         label: "Nest.js",
       },
     ] satisfies OptionsProps[];

  return (
    <div>
        <Header />
        <div className="mt-14">
            <BreadcrumbHero title='Services' />
        </div>
        <div className="grid lg:grid-cols-[16rem_1fr] gap-5 px-4 lg:px-5 py-16">
            <div>
              <StickyBox offsetTop={78} offsetBottom={20} className="w-full">
                <div className="filter shrink-none grow-none w-full lg:w-[16rem] px-3 lg:px-4 py-4 rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] border border-[#272A31]">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <Filter className='w-8 h-8 text-white'/>
                            <div className="text-2xl text-white text-left font-semibold h-font ">Filters</div>
                        </div>
                        <div className='text-lg text-white cursor-pointer'>Reset Filter</div>
                    </div>
                    <Separator className='bg-[#272A31] mt-4' />
                    <div className="flex flex-col gap-3 text-white mt-5">
                        <Label htmlFor="email">Search By Keyword</Label>
                        <Input className='text-sm !placeholder-white/50 border-gray-50' type="email" placeholder="What are you looking for" />
                    </div>
                    <Separator className='bg-[#272A31] mt-6' />
                    <div className="flex flex-col gap-3 text-white mt-6">
                        <Label htmlFor="email">Categories</Label>
                        {/* <Select value={selectedValues.join(", ")} onValueChange={handleSelect}>
                            <SelectTrigger className="w-[180px] !text-white/50 border-gray-50 w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent className='max-h-[20rem] !overflow-auto text-white bg-[#26323C] border border-gray-50'>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select> */}
                        <FancyMultiSelect options={languages } placeholder='Programing languages' />
                    </div>
                    <div className="flex flex-col gap-3 text-white mt-5">
                        <Label htmlFor="email">Sub Category</Label>
                        <Select>
                            <SelectTrigger className="w-[180px] !text-white/50 border-gray-50 w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent className='max-h-[20rem] !overflow-auto text-white bg-[#26323C] border border-gray-50'>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                                <SelectItem value="UI">Light</SelectItem>
                                <SelectItem value="Code">Dark</SelectItem>
                                <SelectItem value="Adaptive">System</SelectItem>
                                <SelectItem value="Clear">Light</SelectItem>
                                <SelectItem value="Rose">Dark</SelectItem>
                                <SelectItem value="Gray">System</SelectItem>
                                
                            </SelectContent>
                        </Select>
                    </div>
                    {/* <Separator className='bg-[#272A31] mt-6' /> */}
                  
                </div>
              </StickyBox>
            </div>
            <div>
              <div className="services grid md:grid-cols-3 gap-4 md:gap-6">
              {
                services.map((service, index) => {
                  return (
                    <ServiceCardModified service={service} key={index} />
                  )
                })
              }
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Services