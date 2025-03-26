import React from 'react'
import { useNavigate } from 'react-router-dom';

function Petsinglecard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
      {/* Pet Images Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1"
            alt="Black dog"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden bg-sky-100 p-4">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
            alt="Yorkshire Terrier"
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="mt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-200 text-sky-800">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              GOOD MATCH
            </span>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Find your best match
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        It only takes 60 seconds.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate('/adoption-form')}
        className="w-full bg-rose-200 text-black py-4 px-6 rounded-full text-lg font-semibold hover:bg-rose-400 transition-colors duration-300"
      >
        GET STARTED
      </button>

      {/* Optional: Progress Dots */}
      {/* <div className="flex justify-center space-x-2 mt-6">
        <div className="w-2 h-2 rounded-full bg-purple-700"></div>
        <div className="w-2 h-2 rounded-full bg-purple-200"></div>
        <div className="w-2 h-2 rounded-full bg-purple-200"></div>
      </div> */}
    </div>
  )
}

export default Petsinglecard
