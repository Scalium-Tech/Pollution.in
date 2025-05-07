
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* About/Mission Section */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">About pollution.in</h2>
          <p className="mb-4">
            Our mission is to provide accessible, reliable information on environmental pollution in India, 
            empowering citizens, researchers, and policymakers with knowledge for a cleaner future.
          </p>
          <p>
            pollution.in serves as India's central hub for pollution data, insights, 
            educational resources, and solutions.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/air-pollution" className="hover:text-primary transition-colors">Air Pollution</Link></li>
            <li><Link to="/water-pollution" className="hover:text-primary transition-colors">Water Pollution</Link></li>
            <li><Link to="/plastic-pollution" className="hover:text-primary transition-colors">Plastic Pollution</Link></li>
            <li><Link to="/data-insights" className="hover:text-primary transition-colors">Data & Insights</Link></li>
            <li><Link to="/laws-policies" className="hover:text-primary transition-colors">Laws & Policies</Link></li>
            <li><Link to="/news" className="hover:text-primary transition-colors">News</Link></li>
            <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Contact Us</h2>
          <p className="mb-2">Email: info@pollution.in</p>
          <div className="flex space-x-4 mt-6">
            {/* Social Media Links with proper icons */}
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                <Twitter size={16} />
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                <Facebook size={16} />
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                <Linkedin size={16} />
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                <Instagram size={16} />
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} pollution.in - India's Environmental Information Portal. All rights reserved.</p>
        <p className="mt-2">
          <Link to="/privacy-policy" className="hover:text-primary mr-4">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
