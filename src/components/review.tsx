import React from "react";
import ReviewCard from "./reviewList";

const reviews = [
  { name: "Samantha D.", rating: 5, text: "I absolutely love this product it's exceeded all my expectations. The quality is top-notch, and the features are amazing. I highly recommend it to anyone.", date: "August 14, 2023" },
  { name: "Alex M.", rating: 5, text: "This product is a great value for the price. It's well-made and easy to use. I've been using it for 2 months and I've had no issues. I would definitely recommend it to others.", date: "August 15, 2023" },
  { name: "Ethan R.", rating: 4, text: "Not only does this product perform well, but it also looks fantastic. The design is sleek and modern. It's the perfect accessory for anyone who appreciates style and function.", date: "August 16, 2023" },
  { name: "Olivia P.", rating: 5, text: "I've been using this product for years, and I've never been disappointed. It's reliable, durable, and always performs as expected.", date: "August 17, 2023" },
  { name: "Liam K.", rating: 4, text: "While this product is a bit pricey, I think it's worth the investment. It's a high-quality product that will last for years to come. If you're looking for a premium option, this is a great choice.", date: "August 18, 2023" },
  { name: "Ava H.", rating: 3, text: "This product is okay, but it's not anything special. It does the job, but I don't think it's worth the price. I would probably look for a different option if I had to do it again.", date: "August 19, 2023" },
];

const ReviewsList = () => {
  return (
    <div className="bg-green-500 flex flex-col items-center py-10 p-6">
      <h2 className="text-3xl text-black mb-6">What People Are Saying</h2>
      <div className="flex gap-[550px] items-center mb-4">
        <span className="text-black text-bold">All Reviews ({reviews.length})</span>
        <div>
          <button className="bg-gray-200 px-4 py-2 rounded-[50px] text-gray-700 mr-2 hover:bg-gray-300">
            Latest
          </button>
          <button className="bg-white px-4 py-2 rounded-[50px] text-black hover:bg-gray-200">
            Write a Review
          </button>
        </div>
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <button className="mt-6 bg-green-500 border text-white py-2 px-4 rounded-[50px] hover:bg-green-600">
        Load More Reviews
      </button>
    </div>
  );
};

export default ReviewsList;