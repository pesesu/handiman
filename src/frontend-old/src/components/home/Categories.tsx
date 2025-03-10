import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// Removed: import 'swiper/css/pagination';
import 'swiper/css/navigation';


// Import required module from Swiper (Navigation only)
import { Navigation } from 'swiper/modules';

// Import chevron icons (using Heroicons)
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/button';

export default function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Sample categories data
  const categories = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8',
    'Category 9',
  ];

  return (
    <div className='home-categories px-3 md:px-5 py-12 bg-[#1D2934] shadow-xl shadow-[#212f3c]'>
      <div className="flex items-center justify-between mb-10">
        <div className="text-xl text-white text-left font-semibold h-font">Top Categories</div>
        <Button className='text-xs text-[#afde74] hover:text-[#223841] bg-transparent hover:bg-[#afde74] border-[#afde74] rounded-lg px-3 font-semibold' variant="outline">View All</Button>
      </div>
      <div className="relative">
        {/* Left Chevron Button */}
        <button
          ref={prevRef}
          className="hidden md:block absolute left-[-16px] top-1/2 transform -translate-y-1/2 z-[5] p-1 bg-[#405461] rounded-full shadow-md hover:bg-[#1EA54C]"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-200" />
        </button>

        {/* Right Chevron Button */}
        <button
          ref={nextRef}
          className="hidden md:block absolute right-[-16px] top-1/2 transform -translate-y-1/2 z-[5] p-1 bg-[#405461] rounded-full shadow-md hover:bg-[#1EA54C]"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-200" />
        </button>

        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 34,
            },
            1280: {
              slidesPerView: 9,
              spaceBetween: 36,
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // Assign navigation elements to Swiper instance
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-3 px-4 py-6 bg-[#2E3E4A] shadow gradient-border rounded-lg transition text-base text-white text-center h-[8.6rem]">
                <img className='h-[2.4rem] mt-6' src="/images/icons/food.png" alt="" />
                {category}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
