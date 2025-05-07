
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Air Quality Standards Announced by Environment Ministry",
      date: "May 5, 2025",
      summary: "The Ministry of Environment, Forest and Climate Change has announced revised air quality standards for Indian cities, reducing permissible limits for particulate matter and other pollutants.",
      category: "Policy Update",
      imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Study Shows 30% Reduction in Plastic Waste in Coastal Areas After Ban",
      date: "May 2, 2025",
      summary: "A recent study by the National Institute of Oceanography reveals significant decrease in plastic waste along India's coastline following the single-use plastic ban implementation.",
      category: "Research",
      imageUrl: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Major Rivers Show Improved Water Quality During Post-Monsoon Assessment",
      date: "April 28, 2025",
      summary: "The Central Pollution Control Board's latest water quality assessment indicates improvement in dissolved oxygen levels and reduction in biological contaminants in several major rivers.",
      category: "Water Quality",
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "New Citizen Science Initiative Launched to Monitor Local Air Quality",
      date: "April 25, 2025",
      summary: "A collaborative project between government agencies and NGOs will distribute low-cost air quality monitors to citizens across 50 cities to enhance pollution data collection.",
      category: "Citizen Science",
      imageUrl: "https://images.unsplash.com/photo-1545158535-c3f7168a9b92?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Supreme Court Directs States to Submit Action Plans on Industrial Pollution",
      date: "April 20, 2025",
      summary: "In a landmark judgment, the Supreme Court has directed all state governments to submit comprehensive action plans to curb industrial pollution within 60 days.",
      category: "Legal",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "International Conference on Climate Change Adaptation to be Hosted in New Delhi",
      date: "April 15, 2025",
      summary: "India will host a major international conference focusing on climate change adaptation strategies for developing countries next month.",
      category: "Event",
      imageUrl: "https://images.unsplash.com/photo-1618241201672-487328b2bd5b?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Environmental News</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, research findings, and policy developments related to pollution and environmental conservation in India.
            </p>
          </div>
          
          {/* Featured News */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?auto=format&fit=crop&w=800&q=80" 
                  alt="Featured news" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary bg-opacity-10 text-primary text-xs font-medium px-2.5 py-1 rounded">Breaking News</span>
                  <span className="text-gray-500 text-sm ml-2">May 7, 2025</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">National Pollution Control Strategy 2030 Unveiled by Government</h2>
                <p className="text-gray-600 mb-6">
                  The Indian government has unveiled an ambitious decade-long strategy to combat all forms of pollution. The comprehensive plan aims to reduce air pollution by 40%, improve water quality in all major rivers to bathing quality, and achieve 100% plastic waste management by 2030.
                </p>
                <p className="text-gray-600 mb-6">
                  The strategy outlines specific targets for each state, allocation of ₹75,000 crores over the next five years, and introduces stricter penalties for violations of environmental norms. Environmental experts have welcomed the move while emphasizing the need for strict implementation.
                </p>
                <button className="bg-primary text-white font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">{item.category}</span>
                    <span className="text-gray-500 text-sm ml-2">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <button className="text-primary font-medium hover:underline">Read More</button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-primary bg-opacity-10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get the latest environmental news, research findings, and policy updates delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
