
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LawsPolicies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Environmental Laws & Policies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding India's legal and regulatory framework for environmental protection and pollution control.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Environmental Legislations</h2>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Air (Prevention and Control of Pollution) Act, 1981</h3>
                <p className="text-gray-600 mb-4">
                  This Act provides for the prevention, control, and abatement of air pollution. It establishes boards at central and state levels to monitor air quality and enforce regulations.
                </p>
                <button className="text-primary font-medium hover:underline">Read full legislation</button>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Water (Prevention and Control of Pollution) Act, 1974</h3>
                <p className="text-gray-600 mb-4">
                  This Act aims to prevent and control water pollution and maintain or restore the wholesomeness of water in the country. It establishes standards for water quality and effluent discharge.
                </p>
                <button className="text-primary font-medium hover:underline">Read full legislation</button>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Environment (Protection) Act, 1986</h3>
                <p className="text-gray-600 mb-4">
                  This umbrella legislation provides for the protection and improvement of the environment. It empowers the government to set standards for emissions and discharges of environmental pollutants.
                </p>
                <button className="text-primary font-medium hover:underline">Read full legislation</button>
              </div>
              
              <div className="pb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Plastic Waste Management Rules, 2016 (amended in 2021)</h3>
                <p className="text-gray-600 mb-4">
                  These rules aim to minimize plastic waste generation and ensure proper collection, recycling, and disposal of plastic waste to prevent environmental degradation.
                </p>
                <button className="text-primary font-medium hover:underline">Read full legislation</button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">National Environmental Policies</h2>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">National Environment Policy, 2006</h3>
                <p className="text-gray-600 mb-4">
                  This policy aims to ensure environmental protection while simultaneously meeting India's social and economic development goals. It emphasizes sustainable development and the polluter pays principle.
                </p>
              </div>
              
              <div className="border-b pb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">National Action Plan on Climate Change</h3>
                <p className="text-gray-600 mb-4">
                  This plan outlines India's strategy for addressing climate change while promoting sustainable development. It includes eight national missions focusing on various aspects of climate change mitigation and adaptation.
                </p>
              </div>
              
              <div className="pb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">National Clean Air Programme</h3>
                <p className="text-gray-600 mb-4">
                  Launched in 2019, this program aims to reduce particulate matter pollution by 20-30% by 2024. It focuses on 122 non-attainment cities that consistently show poor air quality.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Legal Resources</h2>
            <p className="text-gray-600 mb-6">
              Access comprehensive guides, case studies, and legal interpretations related to environmental law and policy in India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="border border-gray-300 rounded-lg p-4 text-left hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-900 mb-1">Environmental Law Guide for Citizens</h3>
                <p className="text-sm text-gray-600">A comprehensive guide to understanding your environmental rights</p>
              </button>
              
              <button className="border border-gray-300 rounded-lg p-4 text-left hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-900 mb-1">Corporate Compliance Requirements</h3>
                <p className="text-sm text-gray-600">Guidelines for businesses on environmental regulations</p>
              </button>
              
              <button className="border border-gray-300 rounded-lg p-4 text-left hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-900 mb-1">Landmark Environmental Cases</h3>
                <p className="text-sm text-gray-600">Summaries of significant court decisions on pollution</p>
              </button>
              
              <button className="border border-gray-300 rounded-lg p-4 text-left hover:bg-gray-50 transition-colors">
                <h3 className="font-medium text-gray-900 mb-1">Public Interest Litigation Guide</h3>
                <p className="text-sm text-gray-600">How to file environmental PILs in Indian courts</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LawsPolicies;
