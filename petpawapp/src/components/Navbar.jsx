import logo from '../assets/images/turtle.png'


function Navbar() {
    return (
      <nav className="bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="Logo"
              />
            </div>
  
            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#" className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#" className="text-gray-800 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
  
            {/* Sign Up Button */}
            <div>
              <button className="bg-transparent border-2 border-gray-800 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar