// import { useState } from "react";
// import Adoptionform from "./Adoptionform";
import { useNavigate } from "react-router-dom"

function Hero() {
  
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        {/* Hero Content */}
        <div className="w-1/2 space-y-6 animate-fade-in-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Find Your Perfect
            <span className="text-blue-600 block">Furry Friend</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Connect with loving pets waiting for their forever home. Start your journey to pet parenthood today.
          </p>
          <div className="space-x-4">
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300" onClick={() => navigate('/adoption-form')}>
              Get Started 
            </button>
            
          
            <button className="border-2 border-gray-300 px-6 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-1/2 animate-fade-in-right">
          <img
            src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Cute puppy"
            className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-cover h-[500px] w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero



























// import { useNavigate } from 'react-router-dom';

// function Hero() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-[90vh]">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-rose-100/95 before:to-rose-100/80"
//         style={{
//           //backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'round',
//           backgroundAttachment: 'fixed',
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <div className="min-h-[90vh] flex items-center justify-between">
//           {/* Hero Content */}
//           <div className="w-1/2 space-y-8 animate-fade-in-left">
//             <h1 className="text-6xl font-bold text-gray-900 leading-tight">
//               Find Your Perfect
//               <span className="text-rose-600 block">Furry Friend</span>
//             </h1>
//             <p className="text-xl text-gray-800 max-w-md leading-relaxed">
//               Open your heart and home to a new companion. Every pet deserves a loving family, and every family deserves the joy of a pet.
//             </p>
//             <div className="space-x-6 pt-4">
//               <button 
//                 className="bg-rose-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-rose-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
//                 onClick={() => navigate('/adoption-form')}
//               >
//                 Get Started
//               </button>
//               <button className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-rose-600 transition-all duration-300 shadow-lg">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="w-1/2 animate-fade-in-right pl-8">
//             <img
//               src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//               alt="Cute puppy"
//               className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-cover h-[600px] w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;