
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OtherPollution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Other Types of Pollution</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond air, water, and plastic pollution, several other forms of environmental contamination impact India's ecosystems and communities.
            </p>
          </div>
          
          {/* Noise Pollution Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 md:pr-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Noise Pollution</h2>
                <p className="text-gray-600 mb-4">
                  Noise pollution is an often overlooked but significant environmental pollutant in urban India. With increasing urbanization, industrialization, and transportation, noise levels in many Indian cities regularly exceed safe limits, leading to various health and environmental impacts.
                </p>
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Major sources include:</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Traffic and vehicular horns</li>
                    <li>Industrial machinery</li>
                    <li>Construction activities</li>
                    <li>Loudspeakers and public address systems</li>
                    <li>Generators and air conditioners</li>
                    <li>Festivals and public gatherings</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  The Central Pollution Control Board has established noise standards for different areas and times of day, but enforcement remains a challenge. Excessive noise exposure can lead to hearing loss, stress, sleep disturbances, and reduced productivity.
                </p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  [Noise Pollution Illustration]
                </div>
              </div>
            </div>
          </div>
          
          {/* Soil Pollution Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="md:flex items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  [Soil Pollution Illustration]
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soil Pollution</h2>
                <p className="text-gray-600 mb-4">
                  Soil pollution is a serious concern in India affecting agricultural productivity, food safety, and ecosystem health. Contaminated soil directly impacts food production and can lead to bioaccumulation of toxins in the food chain.
                </p>
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Key causes of soil pollution in India include:</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Excessive use of chemical fertilizers and pesticides</li>
                    <li>Industrial waste disposal</li>
                    <li>Mining activities</li>
                    <li>Improper solid waste management</li>
                    <li>Oil spills and chemical leakages</li>
                    <li>E-waste dumping</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  The impact of soil pollution includes reduced soil fertility, contamination of groundwater, adverse effects on soil microorganisms, and health risks to humans through the food chain.
                </p>
              </div>
            </div>
          </div>
          
          {/* Light Pollution Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 md:pr-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Light Pollution</h2>
                <p className="text-gray-600 mb-4">
                  As India's cities grow and development increases, excessive and inappropriate artificial lighting is becoming a significant environmental concern. Light pollution disrupts ecosystems, affects human health, and obscures our view of the night sky.
                </p>
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Effects of light pollution:</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Disruption of natural day-night cycles for plants and animals</li>
                    <li>Disorientation of nocturnal animals and migratory birds</li>
                    <li>Interference with human sleep patterns and circadian rhythms</li>
                    <li>Waste of energy resources</li>
                    <li>Loss of connection with the night sky and astronomical heritage</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  Unlike some other forms of pollution, light pollution can be reduced relatively easily through proper lighting design, use of shielded fixtures, and appropriate lighting policies.
                </p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  [Light Pollution Illustration]
                </div>
              </div>
            </div>
          </div>
          
          {/* Radioactive Pollution Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="md:flex items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  [Radioactive Pollution Illustration]
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Radioactive Pollution</h2>
                <p className="text-gray-600 mb-4">
                  Though less widespread than other forms of pollution, radioactive contamination is a concern in certain regions of India, particularly around uranium mining sites, nuclear power plants, and medical facilities using radioactive materials.
                </p>
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Sources and concerns:</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Uranium and thorium mining and processing</li>
                    <li>Nuclear power generation facilities</li>
                    <li>Medical and research institutions using radioisotopes</li>
                    <li>Improper disposal of radioactive waste</li>
                    <li>Historical contamination from nuclear testing</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  The Atomic Energy Regulatory Board (AERB) regulates activities involving radioactive materials in India, but community awareness and monitoring remain important for public safety.
                </p>
              </div>
            </div>
          </div>
          
          {/* Thermal Pollution Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Thermal Pollution</h2>
            <p className="text-gray-600 mb-6">
              Thermal pollution occurs when water bodies experience a significant change in their natural temperature, usually as a result of industrial processes or power generation. In India, thermal pollution primarily affects rivers and coastal areas near power plants and industrial facilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Common sources:</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Thermal power plants (coal, nuclear, natural gas)</li>
                  <li>Industrial manufacturing processes</li>
                  <li>Refineries and petrochemical plants</li>
                  <li>Steel mills and smelting operations</li>
                  <li>Urban runoff from heated surfaces</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Environmental impacts:</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Reduced oxygen levels in water</li>
                  <li>Altered metabolic rates and reproductive cycles of aquatic organisms</li>
                  <li>Changes in species composition and biodiversity</li>
                  <li>Increased vulnerability to disease among aquatic life</li>
                  <li>Disruption of food webs and ecosystems</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-600">
              Mitigation strategies include cooling towers, cooling ponds, artificial lakes, and improved efficiency in industrial processes. Regulations under the Water (Prevention and Control of Pollution) Act govern the discharge of heated effluents into natural water bodies.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OtherPollution;
