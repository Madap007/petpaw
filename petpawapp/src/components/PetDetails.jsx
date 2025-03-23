import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Sample pet details (you can move this to your data file)
const petDetails = {
  id: 1,
  name: "Duke",
  images: [
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80",
  ],
  breed: "Border Collie Mix",
  age: "Adult",
  gender: "Male",
  size: "Medium",
  color: "Black and White",
  weight: "45 pounds",
  location: "San Francisco, CA",
  status: "Available for Adoption",
  description: "Duke is a loving and energetic Border Collie mix who's looking for an active family. He's incredibly smart, already knows basic commands, and loves to learn new tricks. Duke is great with other dogs and enjoys playing fetch for hours!",
  characteristics: [
    "Friendly with dogs",
    "Good with children",
    "Highly trainable",
    "Needs active lifestyle",
    "House trained"
  ],
  healthInfo: {
    vaccinated: true,
    neutered: true,
    microchipped: true,
    specialNeeds: false
  }
};

function PetDetails() {
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-rose-600 hover:text-rose-700"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Pets
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
              <img
                src={petDetails.images[activeImage]}
                alt={petDetails.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="flex space-x-4">
              {petDetails.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative rounded-lg overflow-hidden h-20 w-20 ${
                    activeImage === index ? 'ring-2 ring-rose-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${petDetails.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Pet Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{petDetails.name}</h1>
              <p className="text-lg text-rose-600">{petDetails.breed}</p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Age</p>
                <p className="text-lg font-medium">{petDetails.age}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Gender</p>
                <p className="text-lg font-medium">{petDetails.gender}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Size</p>
                <p className="text-lg font-medium">{petDetails.size}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Weight</p>
                <p className="text-lg font-medium">{petDetails.weight}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">About {petDetails.name}</h2>
              <p className="text-gray-600 leading-relaxed">{petDetails.description}</p>
            </div>

            {/* Characteristics */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Characteristics</h2>
              <div className="flex flex-wrap gap-2">
                {petDetails.characteristics.map((trait, index) => (
                  <span
                    key={index}
                    className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Health Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Health</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vaccinated</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Neutered</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Microchipped</span>
                </div>
              </div>
            </div>

            {/* Adoption Button */}
            <button
              onClick={() => navigate('/adoption-form')}
              className="w-full bg-rose-600 text-white py-4 px-8 rounded-lg font-medium hover:bg-rose-700 transition-colors duration-300"
            >
              Start Adoption Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetails;
