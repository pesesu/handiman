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
import { Button } from '@/components/ui/button';
import products from '@/contants/products';
import ListingCard from '@/components/shared/ListingCard';

type OptionsProps = Record<"value" | "label", string>;
const Listings = () => {
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
        <div className="mt-16 flex items-center text-gray-300 gap-3 lg:justify-end pt-4 lg:pt-5 text-sm px-2 md:px-5">
            {/* <BreadcrumbHero title='Services' /> */}
          <div className='text-white'><a href="">Marketplace</a></div>
          <div>/</div>
          <div><a href="">Electronics</a></div>
          <div>/</div>
          <div><a href="">Television</a></div>
        </div>
        <div className="grid lg:grid-cols-[15.5rem_1fr] gap-5 px-2 md:px-5 py-1 lg:py-7">
            <div>
              <StickyBox offsetTop={78} offsetBottom={20} className="w-full">
                <div className="filter shrink-none grow-none w-full px-3 lg:px-4 py-4 hidden lg:block rounded-lg shadow-[0_0px_5px_rgba(9,11,12,.4)] border-color">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <Filter className='w-8 h-8 text-white'/>
                            <div className="text-2xl text-white text-left font-semibold h-font ">Filters</div>
                        </div>
                        <div className='text-lg text-white cursor-pointer'>Reset Filter</div>
                    </div>
                    <Separator className='bg-[#3f424a] mt-4' />
                    <div className="flex flex-col gap-3 text-white mt-5">
                        <Label htmlFor="email">Search By Keyword</Label>
                        <Input className='text-sm !placeholder-white/50 border-gray-500' type="email" placeholder="What are you looking for" />
                    </div>
                    <Separator className='bg-[#3f424a] mt-6' />
                    <div className="flex flex-col gap-3 text-white mt-6">
                        <Label htmlFor="email">Categories</Label>
                        {/* <Select value={selectedValues.join(", ")} onValueChange={handleSelect}>
                            <SelectTrigger className="w-[180px] !text-white/50 border-gray-500 w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent className='max-h-[20rem] !overflow-auto text-white bg-[#26323C] border border-gray-500'>
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
                            <SelectTrigger className="w-[180px] !text-white/50 border-gray-500 w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent className='max-h-[20rem] !overflow-auto text-white bg-[#26323C] border border-gray-500'>
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
                    <Separator className='bg-[#3f424a] mt-6' />
                  
                </div>
              </StickyBox>
            </div>
            <div>
              <div className="columns-2 sm:columns-2 md:columns-4 xl:columns-5 gap-[6px] sm:gap-4">
                {products.map((item, i) => {
                  return (
                    <ListingCard item={item} key={i} />
                  )
                })}
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Listings