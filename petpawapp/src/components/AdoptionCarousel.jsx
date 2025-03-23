import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
 //import Petlist from '../pages/Petlist';


const pets = [
  {
    id: 1,
    name: "Luna",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    breed: "Golden Retriever",
    age: "2 years"
  },
  {
    id: 2,
    name: "Max",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    breed: "Persian Cat",
    age: "1 year"
  },
  {
    id: 3,
    name: "Bella",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    breed: "Labrador",
    age: "8 months"
  },
  {
    id: 4,
    name: "Oliver",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    breed: "Siamese Cat",
    age: "3 years"
  },
  {
    id: 5,
    name: "Charlie",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    breed: "Beagle",
    age: "1.5 years"
  },
  {
    id: 6,
    name: "Lucy",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    breed: "Maine Coon",
    age: "4 years"
  }
];

function AdoptionCarousel() {

  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-rose-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Pets for Adoption</h2>
          <div className="w-20 h-1 bg-rose-400 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-4">Meet our adorable friends looking for their forever homes</p>
        </div>

        <Slider {...settings} className="adoption-carousel">
          {pets.map((pet) => (
            <div key={pet.id} className="px-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{pet.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{pet.breed}</p>
                  <p className="text-gray-500 text-sm">{pet.age}</p>
                  <button 
                    className="mt-3 w-full bg-rose-200 text-black py-2 px-4 rounded-md hover:bg-rose-300 transition-colors duration-300" onClick={() => navigate('/petdetails')}
                   
                  >
                    Meet {pet.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default AdoptionCarousel