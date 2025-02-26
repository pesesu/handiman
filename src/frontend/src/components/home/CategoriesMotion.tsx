import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const CategoriesMotion = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categories = [
    'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5',
    'Category 6', 'Category 7', 'Category 8', 'Category 9'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='home-categories px-5 py-12 bg-[#1D2934] shadow-xl shadow-[#212f3c]'
    >
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-white font-semibold mb-10"
      >
        Top Categories
      </motion.div>
      <div className="relative">
        <button
          ref={prevRef}
          className="hidden md:block absolute left-[-16px] top-1/2 transform -translate-y-1/2 z-10 p-1 bg-[#405461] rounded-full shadow-md hover:bg-[#1EA54C]"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-200" />
        </button>
        <button
          ref={nextRef}
          className="hidden md:block absolute right-[-16px] top-1/2 transform -translate-y-1/2 z-10 p-1 bg-[#405461] rounded-full shadow-md hover:bg-[#1EA54C]"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-200" />
        </button>
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 30 },
            1024: { slidesPerView: 7, spaceBetween: 34 },
            1280: { slidesPerView: 9, spaceBetween: 36 },
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-3 px-4 py-6 bg-[#2E3E4A] shadow gradient-border rounded-lg transition text-base text-white text-center h-[8.6rem]"
              >
                <motion.img 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='h-[2.4rem] mt-6' src="/images/icons/food.png" alt="" 
                />
                {category}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default CategoriesMotion