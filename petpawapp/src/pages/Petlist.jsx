import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const filters = {
  breed: ['Any', 'Labrador', 'German Shepherd', 'Golden Retriever', 'Bulldog', 'Poodle'],
  age: ['Any', 'Puppy', 'Young', 'Adult', 'Senior'],
  size: ['Any', 'Small', 'Medium', 'Large'],
  gender: ['Any', 'Male', 'Female'],
  goodWith: ['Any', 'Kids', 'Dogs', 'Cats'],
  coatLength: ['Any', 'Short', 'Medium', 'Long']
};

const samplePets = [
  {
    id: 1,
    name: "Duke",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    breed: "Border Collie Mix",
    age: "Adult",
    distance: "1 mile away",
    status: "OUT-OF-TOWN PET"
  },
  {
    id: 2,
    name: "Luna",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    breed: "Golden Retriever",
    age: "Puppy",
    distance: "2.5 miles away",
    status: "LOCAL PET"
  },
  {
    id: 3,
    name: "Max",
    image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80",
    breed: "German Shepherd",
    age: "Young",
    distance: "3 miles away",
    status: "OUT-OF-TOWN PET"
  },
  {
    id: 4,
    name: "Bella",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    breed: "Labrador Retriever",
    age: "Adult",
    distance: "0.5 miles away",
    status: "LOCAL PET"
  },
  {
    id: 5,
    name: "Charlie",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    breed: "French Bulldog",
    age: "Senior",
    distance: "4 miles away",
    status: "URGENT ADOPTION"
  },
  {
    id: 6,
    name: "Daisy",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    breed: "Husky Mix",
    age: "Young",
    distance: "2 miles away",
    status: "LOCAL PET"
  },
  {
    id: 7,
    name: "Rocky",
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01",
    breed: "Pitbull Mix",
    age: "Adult",
    distance: "1.5 miles away",
    status: "OUT-OF-TOWN PET"
  },
  {
    id: 8,
    name: "Molly",
    image: "https://images.unsplash.com/photo-1575859431774-2e57ed632664",
    breed: "Poodle",
    age: "Adult",
    distance: "3.5 miles away",
    status: "LOCAL PET"
  },
  {
    id: 9,
    name: "Cooper",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
    breed: "Australian Shepherd",
    age: "Puppy",
    distance: "5 miles away",
    status: "URGENT ADOPTION"
  },
  {
    id: 10,
    name: "Bailey",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    breed: "Beagle Mix",
    age: "Senior",
    distance: "2.8 miles away",
    status: "LOCAL PET"
  }
  // Add more sample pets here
];

function Petlist() {
  const [selectedFilters, setSelectedFilters] = useState({
    breed: 'Any',
    age: 'Any',
    size: 'Any',
    gender: 'Any',
    goodWith: 'Any',
    coatLength: 'Any'
  });

  return (
    <div>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="w-64 flex-shrink-0 space-y-6">
          {Object.entries(filters).map(([filterName, options]) => (
            <div key={filterName} className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2 uppercase">
                {filterName.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <select
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={selectedFilters[filterName]}
                onChange={(e) => setSelectedFilters({
                  ...selectedFilters,
                  [filterName]: e.target.value
                })}
              >
                {options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Pet Cards Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-6">
            {samplePets.map(pet => (
              <div key={pet.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Card Image */}
                <div className="relative">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  {pet.status && (
                    <span className="absolute top-2 left-2 bg-gray-900/80 text-white text-xs px-2 py-1 rounded">
                      {pet.status}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{pet.breed}</p>
                  <p className="text-gray-600 text-sm mb-1">{pet.age}</p>
                  <p className="text-gray-500 text-sm">{pet.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Petlist
