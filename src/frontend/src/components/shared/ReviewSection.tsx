import React, { useState } from 'react';
import { FaStar, FaThumbsUp, FaReply } from 'react-icons/fa';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    { id: 1, author: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', rating: 4, comment: 'Great product! Highly recommended.', likes: 5 },
    { id: 2, author: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', rating: 5, comment: 'Absolutely love it! The quality is outstanding.', likes: 8 },
    { id: 3, author: 'Mike Johnson', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', rating: 3, comment: 'Decent product, but could use some improvements.', likes: 2 },
  ]);

  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const handleRatingHover = (rating: number) => {
    setHoverRating(rating);
  };

  const handleRatingClick = (rating: number) => {
    setUserRating(rating);
  };

  const handleLike = (id: number) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, likes: review.likes + 1 } : review
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl text-white text-left font-semibold h-font">Customer Reviews</h2>
      
      <div className="flex items-center mb-6">
        <div className="mr-4">
          <p className="text-gray-100 text-3xl font-bold">{averageRating.toFixed(1)}</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`w-6 h-6 ${star <= Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <p className="text-sm text-white/50">{reviews.length} reviews</p>
        </div>
        <div className="flex-grow">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <span className="w-4 text-sm text-gray-100">{rating}</span>
              <div className="w-full bg-gray-200 rounded-full h-2 ml-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${(reviews.filter(r => r.rating === rating).length / reviews.length) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-100 font-semibold mb-2">Rate this product:</p>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`w-8 h-8 cursor-pointer ${star <= (hoverRating || userRating) ? 'text-yellow-500' : 'text-gray-300'}`}
              onMouseEnter={() => handleRatingHover(star)}
              onMouseLeave={() => handleRatingHover(0)}
              onClick={() => handleRatingClick(star)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="b-[#405461]/50 border border-[#2E3E4A] p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <img
                src={review.avatar}
                alt={`${review.author}'s avatar`}
                className="w-8 h-8 rounded-full mr-3 border-2 border-gray-300"
              />
              <div>
                <p className="text-gray-100 font-semibold">{review.author}</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/70 mb-2">{review.comment}</p>
            <div className="flex items-center text-sm text-gray-500">
              <button
                onClick={() => handleLike(review.id)}
                className="flex items-center mr-4 text-white/50 hover:text-[#AFDE74]"
              >
                <FaThumbsUp className="mr-1" /> {review.likes} Helpful
              </button>
              <button className="flex items-center text-white/50 hover:text-[#AFDE74]">
                <FaReply className="mr-1" /> Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
