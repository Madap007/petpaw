// import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Petsinglecard from '../components/Petsinglecard';

function Aboutus() {
   
  return (
    <div>
      <Navbar/>
      {/* Hero Section with Grid Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-4">
          {/* Large Featured Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-6 row-span-2 relative overflow-hidden rounded-lg">
            <div className="relative h-[600px] bg-rose-100 p-8 rounded-lg">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006"
                  alt="Farm Sanctuary"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Our Sanctuary</h1>
                  <p className="text-white/90 text-lg">A safe haven for all animals</p>
                </div>
                <button className="bg-white text-rose-600 px-6 py-3 rounded-lg w-fit hover:bg-rose-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
          {/* Small Cards Grid */}
          <div className="col-span-6 grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative h-[290px] bg-blue-100 rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2"
                alt="Cat Stories"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Cat Stories</h2>
                <p className="text-white/90">Where it all began</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-[290px] bg-green-100 rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1567201080580-bfcc97dae346"
                alt="Farm Life"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Farm Life</h2>
                <p className="text-white/90">Our daily adventures</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative h-[290px] bg-yellow-100 rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1551717743-49959800b1f6"
                alt="Pet Care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Pet Care</h2>
                <p className="text-white/90">How we nurture</p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative h-[290px] bg-purple-100 rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01"
                alt="Visit Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Visit Us</h2>
                <p className="text-white/90">Plan your trip</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="max-w-7xl mx-auto px-2 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Journey content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Where It All Began</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              It started with three rescued cats - Candy, Leo, and Sassy. As a first-time cat mom, 
              I discovered the profound joy and fulfillment that comes from giving abandoned animals 
              a second chance at life. What began as a small act of kindness transformed into a 
              lifelong mission to create a haven for animals in need.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" 
                alt="First Cat" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1573865526739-10659fec78a5" 
                alt="Second Cat" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d" 
                alt="Third Cat" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right side - PetSingleCard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <Petsinglecard />
          </motion.div>
        </div>
      </div>

      {/* Farm Sanctuary Section */}
      <div className="bg-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Farm Sanctuary</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Today, our 5-acre farm is home to dozens of rescued animals, including dogs, cats, 
              horses, and farm animals. Each has their own story of survival and resilience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Meet Our Animals",
                image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a",
                description: "From playful puppies to gentle horses, each animal here has found their forever home."
              },
              {
                title: "Visit & Feed",
                image: "https://images.unsplash.com/photo-1559214369-a6b1d7919865",
                description: "Join us for feeding times and experience the joy of connecting with our rescued animals."
              },
              {
                title: "Volunteer",
                image: "https://images.unsplash.com/photo-1601758282760-b6cc3d07523d",
                description: "Help us care for our animals and become part of our growing community."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Come Visit Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We welcome visitors to experience the magic of our sanctuary. Join us during feeding 
              times, help with daily care routines, or simply spend time with our amazing animals. 
              Your visit helps support our mission and brings joy to our rescued friends.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Open Wednesday - Sunday, 10 AM - 4 PM</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>123 Sanctuary Lane, Peaceful Valley, CA 90210</p>
              </div>
              <button className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors">
                Schedule a Visit
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2" alt="Farm Life" className="rounded-lg shadow-lg" />
            <img src="https://images.unsplash.com/photo-1567201080580-bfcc97dae346" alt="Farm Life" className="rounded-lg shadow-lg" />
            <img src="https://images.unsplash.com/photo-1551717743-49959800b1f6" alt="Farm Life" className="rounded-lg shadow-lg" />
            <img src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a" alt="Farm Life" className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
