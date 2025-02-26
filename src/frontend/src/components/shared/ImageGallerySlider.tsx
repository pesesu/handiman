import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  "/images/barber.jpg",
  "/images/img.png",
  "/images/tailor-large.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWHp4kbEemUFwpxz1dZcaG9qjsf2HAFoG0w&s",
  "/images/img.png",
  "/images/tailor-large.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s",
];

const ImageGallerySlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleOpenFullScreen = () => {
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "Escape") {
        handleCloseFullScreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col space-y-4 justify-start items-start items-left">
      <div className="relative w-full">
        <img
          src={images[selectedIndex]}
          alt="Selected"
          className="w-full h-80 md:h-[26rem] object-cover rounded-lg shadow-lg cursor-pointer"
          onClick={handleOpenFullScreen}
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* <Swiper slidesPerView={3} spaceBetween={4}
        breakpoints={{
          640: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 7 }
        }}
       className="w-full max-w-[24rem] sm:max-w-[30rem] md:max-w-[46rem] lg:max-w-[50rem]">
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              className={`w-24 h-24 object-cover rounded-lg cursor-pointer transition-all ${
                selectedIndex === index ? "ring-2 ring-[#91C255]" : "opacity-80"
              }`}
              onClick={() => setSelectedIndex(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}

      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <img
            src={images[selectedIndex]}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={handleCloseFullScreen}
            className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            <X size={24} />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallerySlider