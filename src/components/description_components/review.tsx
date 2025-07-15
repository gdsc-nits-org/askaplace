import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCheckCircle, FaEllipsisH } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

interface Review {
  reviewer: string;
  rating: number;
  createdAt?: string;
  review: string;
  verified?: boolean;
}

interface StarRatingProps {
  rating: number;
}

interface ReviewCardProps {
  review: Review;
}

// --- Star Rating Component ---
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return <div className="flex items-center">{stars}</div>;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm transition-transform transform hover:-translate-y-1 hover:shadow-lg">
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="flex items-center mb-1">
          <StarRating rating={review.rating} />
        </div>
        <h3 className="font-bold text-lg text-gray-800 flex items-center">
          {review.reviewer}
          {review.verified && (
            <span className="ml-2 text-green-500">
              <FaCheckCircle className="text-sm" />
            </span>
          )}
        </h3>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <FaEllipsisH />
      </button>
    </div>
    <p className="text-gray-600 leading-relaxed mb-6">"{review.review}"</p>
    <p className="text-sm text-gray-500">
      Posted on {review.createdAt ? new Date(review.createdAt).toLocaleDateString() : "Unknown"}
    </p>
  </div>
);

const defaultReviews: Review[] = [
  { reviewer: 'Samantha D.', rating: 5, createdAt: '2023-08-14', review: "I absolutely love this product! It's exceeded all my expectations.", verified: true },
  { reviewer: 'Alex M.', rating: 4.5, createdAt: '2023-08-15', review: "This product is a great value for the price.", verified: true },
  { reviewer: 'Ethan R.', rating: 5, createdAt: '2023-08-16', review: "Not only does this product perform well, but it also looks fantastic.", verified: true },
  { reviewer: 'Olivia P.', rating: 5, createdAt: '2023-08-17', review: "I've been using this product for years, and I've never been disappointed.", verified: true },
  { reviewer: 'Liam K.', rating: 4, createdAt: '2023-08-18', review: "While this product is a bit pricey, I think it's worth the investment.", verified: true },
  { reviewer: 'Ava H.', rating: 3, createdAt: '2023-08-19', review: "This product is okay, but it's not anything special.", verified: true },
];

const ReviewsApp: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({
    reviewer: "",
    rating: 0,
    review: "",
  });
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");
  const placeId = "replace_with_valid_place_id"; // Replace with actual placeId

  useEffect(() => {
    axios
      .get(`https://askaplace-api-3.onrender.com/review/${placeId}`)
      .then((res) => {
        if (res.data && res.data.reviews && res.data.reviews.length > 0) {
          const backendReviews = res.data.reviews.map((r: any) => ({
            reviewer: r.reviewer,
            rating: r.rating,
            createdAt: r.createdAt,
            review: r.review,
            verified: true,
          }));
          setReviews(backendReviews);
        }
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
      });
  }, [placeId]);

  const handleOpenModal = () => {
    setShowModal(true);
    setNewReview({ reviewer: "", rating: 0, review: "" });
    setError("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPosting(true);
    setError("");
    try {
      await axios.post(`https://askaplace-api-3.onrender.com/review/${placeId}`, {
        reviewer: newReview.reviewer,
        rating: newReview.rating,
        review: newReview.review,
      });
      setReviews([
        {
          ...newReview,
          createdAt: new Date().toISOString(),
          verified: true,
        },
        ...reviews,
      ]);
      setShowModal(false);
    } catch (err) {
      setError("Failed to post review. Please try again.");
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="bg-gray-50 antialiased font-sans">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight inline-flex items-center">
            What people are saying
            <span className="ml-3 w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">R</span>
          </h1>
        </header>

        {/* Controls and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-800">
              All Reviews <span className="text-gray-500 font-normal">({reviews.length})</span>
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <FiFilter className="w-5 h-5 mr-2" />
              <span className="font-medium">Filter</span>
            </button>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-8 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                <option>Latest</option>
                <option>Oldest</option>
                <option>Highest Rated</option>
                <option>Lowest Rated</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md"
              onClick={handleOpenModal}
            >
              Write a Review
            </button>
          </div>
        </div>

        {/* Modal for Writing Review */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Write a Review</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="reviewer"
                  placeholder="Your Name"
                  value={newReview.reviewer}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <div>
                  <span className="block mb-2 text-gray-700 font-medium">Rating:</span>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => handleRatingChange(star)}
                        className="focus:outline-none"
                      >
                        {star <= newReview.rating ? (
                          <FaStar className="text-yellow-400 text-xl" />
                        ) : (
                          <FaRegStar className="text-yellow-400 text-xl" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  name="review"
                  placeholder="Your Review"
                  value={newReview.review}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  rows={4}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md"
                  disabled={posting}
                >
                  {posting ? "Posting..." : "Submit Review"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </main>

        {/* Load More Button */}
        <footer className="text-center mt-12">
          <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors shadow-sm">
            Load More Reviews
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ReviewsApp;