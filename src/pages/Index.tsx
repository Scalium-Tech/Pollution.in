
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PollutionTypeCard from '../components/PollutionTypeCard';
import FeatureCard from '../components/FeatureCard';
import NewsCard from '../components/NewsCard';
import CallToAction from '../components/CallToAction';
import { ChartBar, FileText, Globe, Book, Newspaper } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Key Pollution Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Major Pollution Concerns in India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PollutionTypeCard 
              type="air"
              title="Air Pollution"
              description="India faces severe air quality challenges with many cities among the world's most polluted. Explore causes, impacts, and solutions."
              link="/air-pollution"
            />
            <PollutionTypeCard 
              type="water"
              title="Water Pollution" 
              description="Many of India's rivers and water bodies are contaminated. Learn about water pollution sources, effects, and remediation efforts."
              link="/water-pollution"
            />
            <PollutionTypeCard 
              type="plastic"
              title="Plastic Pollution" 
              description="Single-use plastics and inadequate waste management contribute to a growing crisis. Discover the impact and potential solutions."
              link="/plastic-pollution"
            />
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Your Comprehensive Pollution Resource</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={ChartBar} 
              title="Real-Time Data" 
              description="Access current and historical pollution measurements from official monitoring stations across India."
            />
            <FeatureCard 
              icon={FileText} 
              title="In-depth Reports" 
              description="Explore comprehensive analyses and research findings on pollution trends and impacts."
            />
            <FeatureCard 
              icon={Globe} 
              title="Laws & Policies" 
              description="Stay informed about environmental regulations, standards, and government initiatives."
            />
            <FeatureCard 
              icon={Book} 
              title="Educational Guides" 
              description="Find resources for students, researchers, and citizens seeking to understand and combat pollution."
            />
          </div>
        </div>
      </section>
      
      {/* Latest News & Updates Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Latest News & Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard 
              image="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
              title="New National Clean Air Programme Targets Announced" 
              summary="The government has revised NCAP targets aiming for 40% reduction in particulate matter concentration by 2026." 
              date="May 2, 2025" 
              category="Air Pollution"
              link="#"
            />
            <NewsCard 
              image="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80" 
              title="Supreme Court Orders Enhanced Monitoring of River Pollution" 
              summary="The Supreme Court has directed stricter oversight of industrial effluents entering major rivers across 10 states." 
              date="April 28, 2025" 
              category="Water Pollution"
              link="#"
            />
            <NewsCard 
              image="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80" 
              title="Single-Use Plastic Alternatives Show Promise in Market Study" 
              summary="New biodegradable alternatives to single-use plastics are gaining consumer acceptance according to a recent market analysis." 
              date="April 25, 2025" 
              category="Plastic Pollution"
              link="#"
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Be Part of the Solution" 
        description="Stay informed, get involved, and help create a cleaner, healthier India for generations to come." 
        buttonText="Get Involved Now" 
        buttonLink="/resources"
      />
      
      <Footer />
    </div>
  );
};

export default Index;
