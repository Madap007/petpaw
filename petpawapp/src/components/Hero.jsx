function Hero() {
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
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
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