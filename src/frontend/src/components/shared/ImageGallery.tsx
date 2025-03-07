import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type ProductGalleryProps = {
  images: string[];
}

const ImageGallery: React.FC<ProductGalleryProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // Handle key events when modal is open
  useEffect(() => {

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  }, [modalOpen]);


  // Set image from thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Navigate to previous image (cyclic)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Navigate to next image (cyclic)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Open fullscreen modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Close fullscreen modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full">
      {/* Main Image Container */}
      <div className="relative group bg-[#17191F]/50 rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          className="max-w-full h-[18rem] md:h-[26rem] object-cover rounded-sm mx-auto"
        />
        {/* Left Chevron on Main View */}
        <button
          onClick={handlePrev}
          className="cursor-pointer absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-[#30303B]/80 bg-opacity-50 hover:bg-opacity-75 text-white z-[4] rounded-lg hover:bg-[#0092FF]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Right Chevron on Main View */}
        <button
          onClick={handleNext}
          className="cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-[#30303B]/80 bg-opacity-50 hover:bg-opacity-75 text-white z-[4] rounded-lg hover:bg-[#0092FF]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Hover Overlay on Main View */}
        <div onClick={openModal} className="group absolute inset-0 flex items-center justify-center cursor-pointer hover:bg-white/40 transition-opacity">
          <div className="group-hover:bg-black/70 text-white/0 group-hover:text-white px-4 py-2 rounded">
            Click to view fullscreen
          </div>
        </div>
      </div>

      {/* Thumbnail Row */}
      <div className="mt-4 flex items-center space-x-2 h-full overflow-x-auto hide-scrollbar">
        {images.slice(0, 5).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            className={`shrink-0 w-24 h-28 object-cover cursor-pointer border-2 rounded-sm ${
              index === currentIndex ? 'border-[#AFDE74]' : 'border-transparent'
            }`}
          />
        ))}
        {images.length > 5 && <div className='shrink-0 grow-0 flex justify-center items-center w-24 h-28 cursor-pointer bg-[#1D2934] hover:bg-[#364153] text-white text-2xl rounded'>
          <Plus className='w-5 h-5'/>
          <div>{images.length-5}</div>
        </div>}
      </div>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            {/* Close Button */}
          <button
              onClick={closeModal}
              className="absolute top-8 lg:top-4 right-10 text-white text-3xl cursor-pointer z-20 w-12 h-12  rounded-full bg-white/10 hover:bg-white/20"
            >
              &times;
          </button>
            {/* Left Chevron in Modal */}
          <div className="relative w-full max-w-4xl">
            
            <button
              onClick={handlePrev}
              className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-white z-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Fullscreen Image */}
            <div className="flex justify-center">
              <img
                src={images[currentIndex]}
                alt={`Fullscreen Product ${currentIndex + 1}`}
                className="max-w-full h-auto object-contain"
              />
            </div>
            {/* Right Chevron in Modal */}
            <button
              onClick={handleNext}
              className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white z-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;