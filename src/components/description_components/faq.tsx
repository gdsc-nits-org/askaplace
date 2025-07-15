'use client'; // This directive is necessary for using hooks in Next.js App Router

import React, { useState } from 'react';

// --- SVG Icon Components ---
const ChevronRightIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const CircleIcon = ({ className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" clipRule="evenodd" />
    </svg>
);


// --- Initial Data (Places-Themed) ---
const initialFaqs = [
  {
    id: 1,
    question: 'How do I find the best-rated restaurants near me?',
    answer: 'You can use the search bar at the top of the page and apply the "Top Rated" filter to find the most popular options in your area.',
  },
  {
    id: 2,
    question: 'Can I save a list of my favorite places?',
    answer: 'Yes! Click the "Save" icon on any place. You can access your saved places from your profile page under the "My Favorites" tab.',
  },
  {
    id: 3,
    question: 'Is the information about business hours accurate?',
    answer: 'We strive to provide accurate information, but we always recommend checking directly with the establishment for holiday hours or special events.',
  },
    {
    id: 4,
    question: 'How are "verified" reviews different from regular ones?',
    answer: 'A "Verified" review means we have confirmed that the user has genuinely visited the location, ensuring more trustworthy feedback.',
  },
    {
    id: 5,
    question: 'How can I add my own business to the platform?',
    answer: 'You can add your business by clicking the "Add Your Business" link in the footer and following the simple verification process.',
  },
];

// --- Main FAQ Component ---
export default function FAQComponent() {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [error, setError] = useState('');

  const handleQuestionClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleOpenModal = () => {
    setNewQuestion('');
    setError('');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim().length < 10) {
        setError('Please enter a question with at least 10 characters.');
        return;
    }

    const newFaqItem = {
        id: faqs.length + 1,
        question: newQuestion,
        answer: "Thank you for your question! We will review it and post an answer soon.",
    };

    setFaqs([...faqs, newFaqItem]);
    handleCloseModal();
  };

  return (
    <div className="bg-green-500 min-h-screen w-full flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="relative w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Questions List */}
                <div className="bg-white p-6 rounded-2xl shadow-2xl z-10">
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`p-4 rounded-lg cursor-pointer transition-colors duration-200 ${activeIndex === index ? 'bg-emerald-50' : 'hover:bg-gray-50'}`}
                            onClick={() => handleQuestionClick(index)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <CircleIcon className={`w-4 h-4 mr-4 flex-shrink-0 transition-colors duration-300 ${activeIndex === index ? 'text-emerald-500' : 'text-emerald-300'}`} />
                                    <span className={`font-semibold text-base ${activeIndex === index ? 'text-emerald-800' : 'text-gray-700'}`}>
                                        {faq.question}
                                    </span>
                                </div>
                            <ChevronRightIcon className={`w-5 h-5 flex-shrink-0 text-gray-300 transition-transform duration-300 ${activeIndex === index ? 'text-emerald-500' : ''}`} />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Answer Display */}
                <div className="hidden lg:block bg-green-400/50 p-8 rounded-2xl text-white min-h-[300px] shadow-lg backdrop-blur-sm">
                    {faqs[activeIndex] ? (
                    <div className="transition-opacity duration-500">
                        <h3 className="font-bold text-xl mb-4">{faqs[activeIndex].question}</h3>
                        <p className="leading-relaxed">{faqs[activeIndex].answer}</p>
                    </div>
                    ) : null}
                </div>
            </div>
        </div>


        {/* "Have any questions?" Button */}
        <div className="mt-16 text-center">
          <button
            onClick={handleOpenModal}
            className="bg-white w-full max-w-xl mx-auto py-5 px-6 rounded-2xl text-gray-500 text-lg shadow-2xl hover:shadow-emerald-300/40 hover:scale-[1.03] transition-all duration-300"
          >
            Have any questions?
          </button>
        </div>
      </div>

      {/* Modal for Asking a Question */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl m-4 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl leading-none"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Ask a Question</h2>
            <form onSubmit={handleSubmitQuestion}>
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Type your question here..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                required
              />
               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button
                type="submit"
                className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Submit Question
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
