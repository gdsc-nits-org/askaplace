import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <span className="text-yellow-500 text-lg">
          {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
        </span>
      </div>
      <h3 className="font-bold mt-2">{review.name} <span className="text-green-500">✔</span></h3>
      <p className="text-gray-600 mt-2">"{review.text}"</p>
      <p className="text-sm text-gray-400 mt-2">Posted on {review.date}</p>
    </div>
  );
};

export default ReviewCard;