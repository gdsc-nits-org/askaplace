import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Add this import

// --- SVG Icon Components (replaces react-icons) ---
const FaStar = ({ className = "" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
);

const FaStarHalfAlt = ({ className = "" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 385.3l-124.2 65.3 23.7-138.4-100.6-98.2 139-20.2L288 17.8V385.3zM528.1 171.5L388 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6z"></path></svg>
);

const FaRegStar = ({ className = "" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L388 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98.2 139-20.2L288 17.8l61.7 124.1 139 20.2-100.7 98.2z"></path></svg>
);

const FaCheckCircle = ({ className = "" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
);

const FaEllipsisH = ({ className = "" }) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
);

const FiFilter = ({ className = "" }) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
);


// Define the structure of a review
interface Review {
  id?: string;
  reviewer: string;
  rating: number;
  createdAt?: string;
  review: string;
  verified?: boolean;
}

// --- Get place name from URL params ---
const ReviewsApp: React.FC = () => {
  const { placeName = "this place" } = useParams(); // Default fallback

  // --- Mock Data ---
  const initialReviews: Review[] = [
    {
      id: '1',
      reviewer: 'Samantha D.',
      rating: 5,
      createdAt: '2023-08-14T10:00:00Z',
      review: `I absolutely loved visiting ${placeName}! The scenery was breathtaking and the local food was delicious. Highly recommended for nature lovers.`,
      verified: true,
    },
    {
      id: '2',
      reviewer: 'Alex M.',
      rating: 4,
      createdAt: '2023-08-15T12:30:00Z',
      review: `${placeName} is a vibrant town with friendly people. The markets are lively and there are plenty of places to explore nearby.`,
      verified: true,
    },
    {
      id: '3',
      reviewer: 'Ethan R.',
      rating: 5,
      createdAt: '2023-08-16T09:00:00Z',
      review: `The culture and nature in ${placeName} are amazing. The river views and temples are worth visiting.`,
      verified: true,
    },
    {
      id: '4',
      reviewer: 'Olivia P.',
      rating: 5,
      createdAt: '2023-08-17T15:45:00Z',
      review: `I loved my stay in ${placeName}. The weather was perfect and the scenery was unforgettable. Will visit again!`,
      verified: true,
    },
    {
      id: '5',
      reviewer: 'Liam K.',
      rating: 4,
      createdAt: '2023-08-18T11:20:00Z',
      review: `${placeName} is a bit crowded but has its own charm. The tea gardens around the city are beautiful.`,
      verified: true,
    },
    {
      id: '6',
      reviewer: 'Ava H.',
      rating: 3,
      createdAt: '2023-08-19T18:00:00Z',
      review: `${placeName} is nice but traffic can be an issue. The main temple is a must-see.`,
      verified: true,
    },
  ];

  const REVIEWS_PER_PAGE = 4;
  const placeId = "your_actual_place_id"; // Replace with actual placeId

  // StarRating Component: Renders the star rating based on a number
  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
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

  // ReviewCard Component: Displays a single review card
  const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
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

  const [allReviews, setAllReviews] = useState<Review[]>(initialReviews);
  const [visibleReviews, setVisibleReviews] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({ reviewer: "", rating: 0, review: "" });
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("Latest");
  const [page, setPage] = useState(1);

  // Helper function to sort and paginate reviews
  const applyFilterAndPagination = (reviewsArr: Review[], filterType: string, pageNum: number) => {
    let sorted = [...reviewsArr];
    if (filterType === "Latest") {
      sorted.sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
    } else if (filterType === "Oldest") {
      sorted.sort((a, b) => new Date(a.createdAt || "").getTime() - new Date(b.createdAt || "").getTime());
    } else if (filterType === "Highest Rated") {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (filterType === "Lowest Rated") {
      sorted.sort((a, b) => a.rating - b.rating);
    }
    return sorted.slice(0, pageNum * REVIEWS_PER_PAGE);
  };

  // Effect to initialize and update visible reviews
  useEffect(() => {
    setVisibleReviews(applyFilterAndPagination(allReviews, filter, page));
  }, [allReviews, filter, page]);


  // Handle filter change
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    setPage(1); // Reset to first page on filter change
  };

  // Load more reviews
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Modal controls
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

  // Submit new review
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.rating === 0) {
        setError("Please select a rating.");
        return;
    }
    setPosting(true);
    setError("");
    try {
      // This simulates posting to an API.
      // In a real app, you would use the response from the API.
      // For now, we just create a new review locally.
      console.log("Posting review:", { ...newReview, placeId });
      // const response = await axios.post(`https://askaplace-api-3.onrender.com/api/v1/review/add`, { ... });
      
      const addedReview: Review = {
        id: new Date().toISOString(), // Generate a unique ID
        ...newReview,
        createdAt: new Date().toISOString(),
        verified: false, // New reviews are not verified by default
      };

      // Add the new review to the top of the list
      setAllReviews([addedReview, ...allReviews]);
      setFilter("Latest"); // Switch to latest to see the new review
      setPage(1);
      
      setShowModal(false);
    } catch (err) {
      setError("Failed to post review. Please try again.");
      console.error("Post error:", err);
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
              All Reviews <span className="text-gray-500 font-normal">({allReviews.length})</span>
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
               <FiFilter className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-8 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                value={filter}
                onChange={handleFilterChange}
              >
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
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
                          <FaStar className="text-yellow-400 text-2xl transition-transform transform hover:scale-125" />
                        ) : (
                          <FaRegStar className="text-gray-300 text-2xl transition-colors hover:text-yellow-400" />
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  rows={4}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
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
          {visibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </main>

        {/* Load More Button */}
        <footer className="text-center mt-12">
          {visibleReviews.length < allReviews.length && (
            <button
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors shadow-sm"
              onClick={handleLoadMore}
            >
              Load More Reviews
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default ReviewsApp;
