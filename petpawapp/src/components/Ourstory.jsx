import React from 'react'
import cow from '../assets/cow.jpeg'

function OurStory() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between gap-12">
        {/* Image Section */}
        <div className="w-1/3 animate-fade-in-left">
          <img
            src={cow}
            alt="Cute cow"
            className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-cover h-[500px] w-full"
          />
        </div>

        {/* Content Section */}
        <div className="w-1/2 space-y-6 animate-fade-in-right">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="w-20 h-1 bg-rose-400 rounded-full"></div>
          </div>
          
          <h3 className="text-4xl font-bold text-gray-800 leading-tight">
            Connecting Hearts, 
            <span className="text-rose-500 block">One Paw at a Time</span>
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Since 2015, we've been on a mission to create perfect matches between loving homes and animals in need. Our journey started with a simple belief: every animal deserves a chance at happiness.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            From humble beginnings helping local shelters, we've grown into a community of passionate animal lovers, dedicated volunteers, and committed professionals working together to make a difference.
          </p>

          <div className="flex items-center space-x-6 pt-4">
            <div className="text-center">
              <h4 className="text-4xl font-bold text-rose-500">5000+</h4>
              <p className="text-gray-600">Happy Adoptions</p>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-rose-500">100+</h4>
              <p className="text-gray-600">Partner Shelters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
