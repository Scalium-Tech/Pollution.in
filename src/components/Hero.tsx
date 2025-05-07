
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center relative text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="z-10 text-center p-6 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          India's Pollution Challenge: Data. Insights. Action.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Your definitive resource for understanding and addressing environmental pollution across India. 
          Explore real-time data, expert analysis, and community solutions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/data-insights" 
            className="py-3 px-6 rounded-lg text-lg font-semibold shadow-xl transition-transform hover:scale-105 bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary"
          >
            Explore Pollution Data
          </Link>
          <Link 
            to="/resources" 
            className="py-3 px-6 rounded-lg text-lg font-semibold shadow-xl transition-transform hover:scale-105 bg-secondary hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-secondary"
          >
            Discover Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
