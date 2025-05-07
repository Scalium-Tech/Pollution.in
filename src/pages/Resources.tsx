
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Educational Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive educational materials, toolkits, and guides to understand and address pollution issues.
            </p>
          </div>
          
          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                Educational Materials
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Understanding Air Pollution (PDF)</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Water Pollution: Causes and Effects (PDF)</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Plastic Pollution Guide (PDF)</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Environmental Health and Pollution (PDF)</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Climate Change and Pollution (PDF)</a>
                </li>
              </ul>
              <button className="mt-4 text-primary font-medium hover:underline">View all educational materials</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
                <span className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Action Toolkits
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Community Air Monitoring Toolkit</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Citizen Water Testing Guide</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">School Pollution Awareness Campaign Kit</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Plastic-Free Challenge Toolkit</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Local Advocacy Guide for Environmental Issues</a>
                </li>
              </ul>
              <button className="mt-4 text-primary font-medium hover:underline">View all action toolkits</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
                <span className="bg-purple-100 text-purple-800 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                Research Publications
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">State of Air Pollution in Indian Cities (2024)</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">River Water Quality Assessment (2023-2024)</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Microplastics in Indian Food Chain</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Health Impacts of Urban Air Pollution</a>
                </li>
                <li className="hover:text-primary transition-colors">
                  <a href="#" className="block">Sustainable Waste Management Practices</a>
                </li>
              </ul>
              <button className="mt-4 text-primary font-medium hover:underline">View all research publications</button>
            </div>
          </div>
          
          {/* Video Resources */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Video Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-300">
                  {/* Video Placeholder */}
                  <div className="flex items-center justify-center h-48">
                    <span className="text-gray-500">Video: Understanding Air Pollution</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Understanding Air Pollution</h3>
                  <p className="text-sm text-gray-600 mt-1">An introduction to air pollutants, sources, and impacts</p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-300">
                  {/* Video Placeholder */}
                  <div className="flex items-center justify-center h-48">
                    <span className="text-gray-500">Video: Water Pollution Explained</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Water Pollution Explained</h3>
                  <p className="text-sm text-gray-600 mt-1">Key water pollutants and their environmental impacts</p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-300">
                  {/* Video Placeholder */}
                  <div className="flex items-center justify-center h-48">
                    <span className="text-gray-500">Video: Plastic Pollution Crisis</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Plastic Pollution Crisis</h3>
                  <p className="text-sm text-gray-600 mt-1">The growing issue of plastic pollution in India</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="text-primary font-medium hover:underline">View all educational videos</button>
            </div>
          </div>
          
          {/* For Educators */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">For Educators</h2>
            <p className="text-gray-600 mb-6">
              We offer specialized resources for teachers and educators to incorporate environmental education in their curriculum. Our education packs are aligned with standard curriculum requirements and include lesson plans, activities, and assessment materials.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Primary Education Pack (Grades 1-5)</h3>
                <p className="text-sm text-gray-600 mb-4">Age-appropriate activities and lessons on basic environmental concepts</p>
                <button className="text-primary font-medium hover:underline">Download Free</button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">Secondary Education Pack (Grades 6-10)</h3>
                <p className="text-sm text-gray-600 mb-4">Comprehensive modules on pollution, environmental science, and sustainability</p>
                <button className="text-primary font-medium hover:underline">Download Free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
