
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-extrabold text-xl">pollution.in</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">Home</Link>
            
            <div className="relative">
              <button 
                onClick={toggleDropdown} 
                className="text-gray-700 hover:text-primary px-3 py-2 font-medium flex items-center"
              >
                Pollution Types <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link to="/air-pollution" className="block px-4 py-2 hover:bg-gray-100">Air Pollution</Link>
                    </li>
                    <li>
                      <Link to="/water-pollution" className="block px-4 py-2 hover:bg-gray-100">Water Pollution</Link>
                    </li>
                    <li>
                      <Link to="/plastic-pollution" className="block px-4 py-2 hover:bg-gray-100">Plastic Pollution</Link>
                    </li>
                    <li>
                      <Link to="/other-pollution" className="block px-4 py-2 hover:bg-gray-100">Other Types</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            <Link to="/data-insights" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">Data & Insights</Link>
            <Link to="/laws-policies" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">Laws & Policies</Link>
            <Link to="/news" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">News</Link>
            <Link to="/resources" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">Resources</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary px-3 py-2 font-medium">About</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">Home</Link>
            <div>
              <button 
                className="w-full text-left text-gray-700 hover:text-primary px-3 py-2 font-medium"
              >
                Pollution Types
              </button>
              <div className="pl-6 space-y-1">
                <Link to="/air-pollution" className="block text-gray-700 hover:text-primary px-3 py-2">Air Pollution</Link>
                <Link to="/water-pollution" className="block text-gray-700 hover:text-primary px-3 py-2">Water Pollution</Link>
                <Link to="/plastic-pollution" className="block text-gray-700 hover:text-primary px-3 py-2">Plastic Pollution</Link>
                <Link to="/other-pollution" className="block text-gray-700 hover:text-primary px-3 py-2">Other Types</Link>
              </div>
            </div>
            <Link to="/data-insights" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">Data & Insights</Link>
            <Link to="/laws-policies" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">Laws & Policies</Link>
            <Link to="/news" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">News</Link>
            <Link to="/resources" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">Resources</Link>
            <Link to="/about" className="block text-gray-700 hover:text-primary px-3 py-2 font-medium">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
