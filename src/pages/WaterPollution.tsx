
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import { Droplet, Factory, Home, Tractor, Trash2, HeartPulse, Fish, Server } from 'lucide-react';

const WaterPollution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <header className="py-12 md:py-16 bg-gradient-to-r from-cyan-100 via-sky-50 to-blue-100 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Water Pollution in India: Threats to Our Lifeline
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Despite being home to 18% of the world's population, India has only 4% of global freshwater resources. 
            Water pollution threatens this precious resource, affecting millions of lives, ecosystems, and livelihoods.
          </p>
        </div>
      </header>
      
      {/* Introduction Section */}
      <section className="py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              Water is essential for life, yet in India, water pollution has reached critical levels. According to the Central 
              Pollution Control Board (CPCB), 351 river stretches across the country are polluted. Major rivers like the 
              Ganga, Yamuna, Godavari, and Cauvery face severe contamination from multiple sources. Groundwater, lakes, 
              and coastal waters are similarly affected, creating widespread health, environmental, and economic challenges.
            </p>
            
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-6">
              <p className="text-cyan-800 font-medium">
                Nearly 70% of India's surface water is unfit for consumption without treatment, and approximately 200,000 people 
                die annually due to inadequate access to safe water according to NITI Aayog reports.
              </p>
            </div>
            
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              This page explores the major sources and impacts of water pollution in India, the current state of 
              water bodies, and prevention and control measures being implemented across the country.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sources of Water Pollution */}
      <section className="py-8 md:py-10 border-b border-gray-200 pb-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Droplet className="w-7 h-7 mr-3 text-cyan-600" />
            Major Sources of Water Pollution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Home className="w-5 h-5 mr-2 text-gray-600" /> Untreated Sewage
              </h3>
              <p className="text-gray-700 mb-2">
                Domestic wastewater is the largest source of water pollution in India, with over 70% of sewage generated 
                being discharged untreated into water bodies.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li>Contains organic waste, pathogens, detergents, and other household chemicals</li>
                <li>Major capacity gap between sewage generation and treatment infrastructure</li>
                <li>Even in cities with treatment facilities, operational issues and power shortages affect effectiveness</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Factory className="w-5 h-5 mr-2 text-gray-600" /> Industrial Effluents
              </h3>
              <p className="text-gray-700 mb-2">
                Industries discharge waste containing toxic chemicals, heavy metals, and organic pollutants into water bodies, 
                often without adequate treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li>Major contributors include textile, tannery, paper, chemical, pharmaceutical, and mining industries</li>
                <li>Heavy metals like lead, mercury, and chromium cause persistent contamination</li>
                <li>Many small-scale industries operate without proper effluent treatment facilities</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Tractor className="w-5 h-5 mr-2 text-gray-600" /> Agricultural Runoff
              </h3>
              <p className="text-gray-700 mb-2">
                Rainwater carries fertilizers, pesticides, and animal waste from agricultural fields into water bodies, 
                causing nutrient loading and chemical contamination.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li>Excessive fertilizer use leads to nitrogen and phosphorus runoff</li>
                <li>Pesticide contamination affects aquatic life and accumulates in the food chain</li>
                <li>Runoff from livestock operations contributes pathogens and antibiotics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Trash2 className="w-5 h-5 mr-2 text-gray-600" /> Solid Waste Dumping
              </h3>
              <p className="text-gray-700 mb-2">
                Direct disposal of solid waste into water bodies or on their banks leads to leaching of contaminants 
                into the water.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li>Plastic waste chokes waterways and harms aquatic life</li>
                <li>Debris from religious activities, including idols and offerings</li>
                <li>Leachate from improper landfills contaminating groundwater</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact of Water Pollution */}
      <section className="py-8 md:py-10 border-b border-gray-200 pb-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <HeartPulse className="w-7 h-7 mr-3 text-cyan-600" />
            Impact of Water Pollution
          </h2>
          
          <h3 className="font-semibold text-xl text-gray-800 mb-3">Human Health Impacts</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              Water pollution directly affects public health, particularly in areas where treatment infrastructure is lacking or compromised.
            </p>
            
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 my-6">
              <p className="text-cyan-800">
                The World Bank estimates that 21% of communicable diseases in India are water-related, contributing to a 
                significant disease burden, especially among children under five.
              </p>
            </div>
            
            <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
              <li><strong>Waterborne Diseases:</strong> Diarrhea, cholera, typhoid, dysentery, and hepatitis A due to fecal contamination</li>
              <li><strong>Chemical Exposure:</strong> Long-term health effects from heavy metals and industrial chemicals</li>
              <li><strong>Specific Regional Issues:</strong> Arsenic poisoning in parts of West Bengal and Bihar; fluoride contamination in Rajasthan, Gujarat, and Andhra Pradesh</li>
              <li><strong>Developmental Impacts:</strong> Impaired physical and cognitive development in children exposed to contaminated water</li>
            </ul>
          </div>
          
          <h3 className="font-semibold text-xl text-gray-800 mb-3">Aquatic Ecosystems</h3>
          <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500 mb-6">
            <li><strong>Eutrophication:</strong> Excessive algal growth due to nutrient pollution, depleting oxygen</li>
            <li><strong>Biodiversity Loss:</strong> Decline in fish populations and other aquatic species</li>
            <li><strong>Habitat Destruction:</strong> Damage to breeding grounds and aquatic habitats</li>
            <li><strong>Bioaccumulation:</strong> Concentration of toxins in aquatic food chains</li>
            <li><strong>Impact on Coastal Areas:</strong> Damage to mangroves and coral reefs</li>
          </ul>
          
          <h3 className="font-semibold text-xl text-gray-800 mb-3">Economic Impacts</h3>
          <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
            <li>Increased healthcare costs for treating water-related diseases</li>
            <li>Loss of livelihoods for fishing communities due to depleted fish stocks</li>
            <li>Reduced agricultural productivity from irrigation with contaminated water</li>
            <li>Tourism losses in areas with visibly polluted water bodies</li>
            <li>Increased costs for water treatment and purification</li>
          </ul>
        </div>
      </section>
      
      {/* State of India's Rivers */}
      <section className="py-8 md:py-10 border-b border-gray-200 pb-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Fish className="w-7 h-7 mr-3 text-cyan-600" />
            State of India's Rivers and Water Bodies
          </h2>
          
          <p className="text-gray-700 mb-6">
            India's major river systems face significant pollution challenges, with many stretches too contaminated for 
            safe use without extensive treatment.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Ganga River</h3>
              <p className="text-gray-700 mb-2">
                India's most sacred river, stretching 2,525 km across five states, faces severe pollution despite multiple 
                cleanup initiatives spanning decades.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li>Major pollution hotspots at Kanpur, Varanasi, Patna, and Kolkata</li>
                <li>Key issues include untreated sewage, industrial waste from tanneries and textile units, and religious waste</li>
                <li>Despite Namami Gange Programme investments, water quality remains below acceptable standards in many stretches</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Yamuna River</h3>
              <p className="text-gray-700 mb-2">
                Delhi's stretch of the Yamuna is particularly polluted, with the river effectively "dead" in terms 
                of dissolved oxygen necessary for aquatic life.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li>22 km Delhi stretch contributes about 76% of the total pollution load</li>
                <li>Foam formation due to high phosphate content from detergents</li>
                <li>Several cleanup initiatives have shown limited success</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Other Major Rivers</h3>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li><strong>Godavari:</strong> Facing industrial pollution from sugar and paper mills</li>
                <li><strong>Cauvery:</strong> Affected by industrial and agricultural runoff</li>
                <li><strong>Sabarmati:</strong> High industrial contamination</li>
                <li><strong>Brahmaputra:</strong> Relatively cleaner but facing increasing threats</li>
              </ul>
            </div>
            
            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
              <p className="text-cyan-800 font-medium">
                According to the CPCB's 2018 assessment, there are 351 polluted river stretches across 323 rivers in India, 
                with 45 critically polluted stretches.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="https://cpcb.nic.in/water-quality-criteria/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary hover:bg-green-600 text-white font-semibold py-2.5 px-5 rounded-lg inline-flex items-center transition-colors shadow-md"
            >
              <Server className="w-5 h-5 mr-2" />
              Access CPCB Water Quality Data
            </a>
          </div>
        </div>
      </section>
      
      {/* Prevention and Control */}
      <section className="py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Droplet className="w-7 h-7 mr-3 text-cyan-600" />
            Prevention and Control Measures
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Wastewater Treatment</h3>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li>Expansion of Sewage Treatment Plants (STPs) capacity in urban areas</li>
                <li>Implementation of decentralized wastewater treatment systems for smaller communities</li>
                <li>Mandatory Effluent Treatment Plants (ETPs) for industries</li>
                <li>Zero Liquid Discharge (ZLD) requirements for highly polluting industries</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Government Initiatives</h3>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li><strong>Namami Gange Programme:</strong> Comprehensive approach to Ganga cleanup with ₹20,000 crore allocation</li>
                <li><strong>National River Conservation Plan:</strong> Covers multiple rivers across the country</li>
                <li><strong>Jal Jeevan Mission:</strong> Providing safe drinking water to all rural households by 2024</li>
                <li><strong>AMRUT:</strong> Urban water supply and sewage management improvements</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Sustainable Practices</h3>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li>Promoting organic farming to reduce chemical fertilizer and pesticide runoff</li>
                <li>Rainwater harvesting and groundwater recharge</li>
                <li>Water conservation and recycling in industries and households</li>
                <li>Proper solid waste management to prevent leaching into water bodies</li>
                <li>River bank restoration and maintenance of riparian buffer zones</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Community Participation</h3>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-cyan-500">
                <li>Public awareness campaigns about water conservation and pollution prevention</li>
                <li>Community-based water quality monitoring programs</li>
                <li>Engaging religious institutions in promoting eco-friendly practices for rituals</li>
                <li>Citizen science initiatives for water body restoration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Protect Our Water Resources" 
        description="Every drop counts. Join the movement to preserve and protect India's precious water bodies for future generations."
        buttonText="Learn About Namami Gange" 
        buttonLink="/resources"
      />
      
      <Footer />
    </div>
  );
};

export default WaterPollution;
