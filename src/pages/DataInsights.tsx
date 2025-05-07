
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const airQualityData = [
  { name: 'Delhi', AQI: 220 },
  { name: 'Mumbai', AQI: 140 },
  { name: 'Chennai', AQI: 95 },
  { name: 'Kolkata', AQI: 165 },
  { name: 'Bangalore', AQI: 85 },
  { name: 'Hyderabad', AQI: 105 },
];

const riverHealthData = [
  { name: 'Ganga', DO: 5.2, BOD: 3.8 },
  { name: 'Yamuna', DO: 2.1, BOD: 8.5 },
  { name: 'Krishna', DO: 6.4, BOD: 2.6 },
  { name: 'Cauvery', DO: 5.8, BOD: 3.0 },
  { name: 'Narmada', DO: 7.1, BOD: 2.2 },
];

const plasticWasteData = [
  { year: '2019', waste: 3.4 },
  { year: '2020', waste: 3.2 },
  { year: '2021', waste: 3.5 },
  { year: '2022', waste: 3.7 },
  { year: '2023', waste: 3.6 },
  { year: '2024', waste: 3.4 },
];

const DataInsights = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Data & Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore comprehensive data on pollution trends, sources, and impacts across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Air Quality Data Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Air Quality Index</h2>
              <p className="text-gray-600 mb-4">
                Tracking real-time air quality data across major cities in India.
              </p>
              <div className="h-48 rounded mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={airQualityData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={11} />
                    <YAxis fontSize={11} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: '11px' }} />
                    <Bar dataKey="AQI" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <button className="text-primary font-medium hover:underline">
                View detailed air quality data
              </button>
            </div>
            
            {/* Water Quality Data Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">River Health Monitoring</h2>
              <p className="text-gray-600 mb-4">
                Water quality metrics for major rivers and waterways across the country.
              </p>
              <div className="h-48 rounded mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={riverHealthData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fontSize={11} />
                    <YAxis fontSize={11} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: '11px' }} />
                    <Bar dataKey="DO" fill="#82ca9d" name="Dissolved Oxygen" />
                    <Bar dataKey="BOD" fill="#ff8042" name="BOD" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <button className="text-primary font-medium hover:underline">
                Explore water quality trends
              </button>
            </div>
            
            {/* Plastic Waste Data Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Plastic Waste Generation</h2>
              <p className="text-gray-600 mb-4">
                Statistical data on plastic consumption and waste management.
              </p>
              <div className="h-48 rounded mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={plasticWasteData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" fontSize={11} />
                    <YAxis fontSize={11} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: '11px' }} />
                    <Bar dataKey="waste" fill="#8dd1e1" name="Million Tons" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <button className="text-primary font-medium hover:underline">
                View plastic pollution statistics
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Environmental Metrics</h2>
            <p className="text-gray-600 mb-6">
              This section provides access to critical environmental data collected across India. Our data is sourced from government agencies, research institutions, and citizen science projects.
            </p>
            <div className="space-y-6">
              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-900 mb-2">Data Sources:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Central Pollution Control Board (CPCB)</li>
                  <li>National Air Quality Monitoring Programme</li>
                  <li>Indian Council of Agricultural Research</li>
                  <li>National Environmental Engineering Research Institute</li>
                  <li>Ministry of Environment, Forest and Climate Change</li>
                </ul>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-900 mb-2">Download Resources:</h3>
                <div className="space-y-2">
                  <button className="text-primary font-medium hover:underline block">Annual Air Quality Reports (2020-2023)</button>
                  <button className="text-primary font-medium hover:underline block">River Water Quality Assessment</button>
                  <button className="text-primary font-medium hover:underline block">State-wise Plastic Waste Generation Data</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DataInsights;
