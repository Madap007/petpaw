import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import NavPets from '../components/Navpets'

const filters = {
  breed: ['Any', 'Labrador', 'German Shepherd', 'Golden Retriever', 'Bulldog', 'Poodle'],
  age: ['Any', 'Puppy', 'Young', 'Adult', 'Senior'],
  size: ['Any', 'Small', 'Medium', 'Large'],
  gender: ['Any', 'Male', 'Female'],
  goodWith: ['Any', 'Kids', 'Dogs', 'Cats'],
  coatLength: ['Any', 'Short', 'Medium', 'Long']
};


const allpets = [
  {
    id: 1,
    name: "Duke",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    breed: "Border Collie Mix",
    age: "Adult",
    distance: "1 mile away",
    status: "OUT-OF-TOWN PET",
    size: "Medium",
    gender: "Male",
    goodWith: ["Kids", "Dogs"],
    coatLength: "Medium"
  },
  {
    id: 2,
    name: "Luna",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    breed: "Golden Retriever",
    age: "Puppy",
    distance: "2.5 miles away",
    status: "LOCAL PET",
    size: "Large",
    gender: "Female",
    goodWith: ["Kids", "Dogs", "Cats"],
    coatLength: "Long"
  },
  {
    id: 3,
    name: "Max",
    image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80",
    breed: "German Shepherd",
    age: "Young",
    distance: "3 miles away",
    status: "OUT-OF-TOWN PET",
    size: "Large",
    gender: "Male",
    goodWith: ["Dogs"],
    coatLength: "Medium"
  },
  {
    id: 4,
    name: "Bella",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    breed: "Labrador Retriever",
    age: "Adult",
    distance: "0.5 miles away",
    status: "LOCAL PET",
    size: "Large",
    gender: "Female",
    goodWith: ["Kids", "Dogs"],
    coatLength: "Short"
  },
  {
    id: 5,
    name: "Charlie",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    breed: "French Bulldog",
    age: "Senior",
    distance: "4 miles away",
    status: "URGENT ADOPTION",
    size: "Small",
    gender: "Male",
    goodWith: ["Kids"],
    coatLength: "Short"
  },
  {
    id: 6,
    name: "Daisy",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    breed: "Husky Mix",
    age: "Young",
    distance: "2 miles away",
    status: "LOCAL PET",
    size: "Medium",
    gender: "Female",
    goodWith: ["Dogs"],
    coatLength: "Medium"
  },
  {
    id: 7,
    name: "Rocky",
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01",
    breed: "Pitbull Mix",
    age: "Adult",
    distance: "1.5 miles away",
    status: "OUT-OF-TOWN PET",
    size: "Large",
    gender: "Male",
    goodWith: ["Kids", "Dogs"],
    coatLength: "Short"
  },
  {
    id: 8,
    name: "Molly",
    image: "https://images.unsplash.com/photo-1575859431774-2e57ed632664",
    breed: "Poodle",
    age: "Adult",
    distance: "3.5 miles away",
    status: "LOCAL PET",
    size: "Medium",
    gender: "Female",
    goodWith: ["Kids", "Dogs", "Cats"],
    coatLength: "Long"
  },
  {
    id: 9,
    name: "Cooper",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
    breed: "Australian Shepherd",
    age: "Puppy",
    distance: "5 miles away",
    status: "URGENT ADOPTION",
    size: "Medium",
    gender: "Male",
    goodWith: ["Dogs"],
    coatLength: "Medium"
  },
  {
    id: 10,
    name: "Bailey",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    breed: "Beagle Mix",
    age: "Senior",
    distance: "2.8 miles away",
    status: "LOCAL PET",
    size: "Small",
    gender: "Female",
    goodWith: ["Kids", "Cats"],
    coatLength: "Short"
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
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPets, setFilteredPets] = useState(allpets);

  // Filter and search logic
  useEffect(() => {
    let result = [...allpets];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(pet => 
        pet.name.toLowerCase().includes(query) ||
        pet.breed.toLowerCase().includes(query)
      );
    }

    // Apply filters
    result = result.filter(pet => {
      return Object.entries(selectedFilters).every(([key, value]) => {
        if (value === 'Any') return true;
        
        // Special handling for goodWith array
        if (key === 'goodWith') {
          return value === 'Any' || pet.goodWith.includes(value);
        }
        
        return pet[key.toLowerCase()] === value;
      });
    });

    setFilteredPets(result);
  }, [searchQuery, selectedFilters]);

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
    <Navbar />
    <NavPets />
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
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={selectedFilters[filterName]}
                onChange={(e) => handleFilterChange(filterName, e.target.value)}
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

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search pets by name or breed..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
            {/* Pet Cards Grid */}
            <div className="grid grid-cols-4 gap-6">
            {filteredPets.map(pet => (
              <div 
                key={pet.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate(`/pets/${pet.id}`)}
              >
                <div className="relative">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-48 object-cover"
                  />
                  {pet.status && (
                    <span className="absolute top-2 left-2 bg-gray-900/80 text-white text-xs px-2 py-1 rounded">
                      {pet.status}
                    </span>
                  )}
                </div>
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

          {/* No Results Message */}
          {filteredPets.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">
                No pets found matching your criteria. Try adjusting your filters or search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Petlist
