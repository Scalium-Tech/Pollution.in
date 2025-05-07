
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import { Trash2, Package, ShoppingBag, Recycle, HeartPulse, Fish, Layers } from 'lucide-react';

const PlasticPollution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <header className="py-12 md:py-16 bg-gradient-to-r from-orange-100 via-amber-50 to-yellow-100 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Plastic Overload: India's Fight Against a Modern Menace
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            With over 3.5 million tonnes of plastic waste generated annually, India faces a mounting plastic pollution crisis 
            that threatens ecosystems, marine life, human health, and urban infrastructure.
          </p>
        </div>
      </header>
      
      {/* Introduction Section */}
      <section className="py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              India generates approximately 9.46 million tonnes of plastic waste annually, of which about 40% remains 
              uncollected. The convenience, durability, and low cost that make plastic ubiquitous are the same properties 
              that create an environmental nightmare when discarded. With rapid urbanization, growing consumption patterns, 
              and inadequate waste management systems, plastic pollution has become one of India's most pressing environmental challenges.
            </p>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-6">
              <p className="text-orange-800 font-medium">
                Single-use plastics constitute approximately 43% of India's total plastic waste, with items like food packaging, 
                sachets, bottles, straws, and bags being major contributors. Despite the ban on certain single-use plastics since July 2022, 
                implementation and alternatives remain challenging.
              </p>
            </div>
            
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              This page explores the sources and types of plastic pollution in India, its far-reaching impacts, the status 
              of plastic waste management, and the solutions and innovations being developed to address this growing crisis.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sources and Types Section */}
      <section className="py-8 md:py-10 border-b border-gray-200 pb-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Trash2 className="w-7 h-7 mr-3 text-orange-600" />
            Sources and Types of Plastic Pollution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Package className="w-5 h-5 mr-2 text-gray-600" /> Packaging Waste
              </h3>
              <p className="text-gray-700 mb-2">
                The largest contributor to plastic waste comes from packaging materials used in various industries.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
                <li>FMCG sector's multi-layered packaging (sachets, wrappers, pouches)</li>
                <li>Growing e-commerce packaging waste, including bubble wrap and tape</li>
                <li>Food delivery platforms contributing to disposable container waste</li>
                <li>PET bottles and other beverage containers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2 text-gray-600" /> Single-Use Plastics
              </h3>
              <p className="text-gray-700 mb-2">
                Items designed to be used once and then discarded, contributing significantly to the waste stream.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
                <li>Plastic bags (despite bans in many states)</li>
                <li>Cutlery, straws, and stirrers</li>
                <li>Disposable plates and cups</li>
                <li>Personal care product packaging</li>
                <li>Small FMCG sachets, particularly common in rural areas</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-gray-600" /> Microplastics
              </h3>
              <p className="text-gray-700 mb-2">
                Tiny plastic particles less than 5mm in size, entering the environment from various sources.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
                <li>Breakdown of larger plastic debris</li>
                <li>Synthetic textiles shedding microfibers during washing</li>
                <li>Tire wear particles from road traffic</li>
                <li>Microbeads from personal care products (despite some bans)</li>
                <li>Now found in drinking water, air, soil, and food chains across India</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Recycle className="w-5 h-5 mr-2 text-gray-600" /> Industrial Plastic Waste
              </h3>
              <p className="text-gray-700 mb-2">
                Waste generated during manufacturing and industrial processes.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
                <li>Pre-production plastic pellets (nurdles)</li>
                <li>Scraps and rejects from plastic product manufacturing</li>
                <li>Construction sector plastics (pipes, insulation, etc.)</li>
                <li>Agricultural films and irrigation systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-8 md:py-10 border-b border-gray-200 pb-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <HeartPulse className="w-7 h-7 mr-3 text-orange-600" />
            Impact of Plastic Pollution
          </h2>
          
          <h3 className="font-semibold text-xl text-gray-800 mb-3">Environmental Impact</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              Plastic pollution has far-reaching consequences for India's diverse ecosystems.
            </p>
            
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-6">
              <p className="text-orange-800">
                India contributes approximately 0.6 million tonnes of plastic waste to the oceans annually. 
                This is particularly concerning as India has a coastline spanning over 7,500 kilometers.
              </p>
            </div>
            
            <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
              <li><strong>Marine Ecosystems:</strong> Harm to marine life through ingestion and entanglement, with particular impact on India's coastal fisheries</li>
              <li><strong>Soil Contamination:</strong> Degradation of soil quality, affecting agricultural productivity</li>
              <li><strong>Urban Flooding:</strong> Clogged drainage systems in cities like Mumbai and Chennai, exacerbating monsoon flooding</li>
              <li><strong>Wildlife Impact:</strong> Documented cases of wildlife deaths from plastic ingestion, including sacred cows ingesting plastic bags</li>
              <li><strong>Microplastic Infiltration:</strong> Presence in rivers, lakes, soil, and even remote Himalayan regions</li>
            </ul>
          </div>
          
          <h3 className="font-semibold text-xl text-gray-800 mb-3">Health Impact</h3>
          <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500 mb-6">
            <li><strong>Chemical Leaching:</strong> Toxic additives like phthalates, BPA, and flame retardants entering food chain</li>
            <li><strong>Microplastic Ingestion:</strong> Growing concern about microplastics in drinking water and food</li>
            <li><strong>Burning of Plastic Waste:</strong> Release of toxic dioxins and furans when plastic is burned in the open</li>
            <li><strong>Vector-Borne Diseases:</strong> Water collected in discarded plastics creating breeding grounds for mosquitoes</li>
          </ul>
          
          <h3 className="font-semibold text-xl text-gray-800 mb-3">Economic Impact</h3>
          <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
            <li>Cleanup costs for municipalities and communities</li>
            <li>Loss of tourism revenue in plastic-polluted destinations</li>
            <li>Reduced fisheries yields due to plastic contamination</li>
            <li>Infrastructure damage from clogged drainage systems</li>
            <li>Long-term healthcare costs associated with plastic-related toxicity</li>
          </ul>
        </div>
      </section>
      
      {/* Plastic Waste Management Section */}
      <section className="py-8 md:py-10 border-b border-gray-200 pb-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Recycle className="w-7 h-7 mr-3 text-orange-600" />
            Plastic Waste Management in India
          </h2>
          
          <p className="text-gray-700 mb-6">
            India's approach to plastic waste management is evolving, with regulatory frameworks and practical challenges both shaping the landscape.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Challenges in Plastic Waste Management</h3>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
                <li>Low waste segregation rates at source</li>
                <li>Inadequate collection infrastructure, especially in smaller cities and rural areas</li>
                <li>Limited recycling capacity compared to waste generation</li>
                <li>The informal sector handling 70-80% of plastic recycling without proper safeguards</li>
                <li>Multi-layered packaging posing technical recycling challenges</li>
                <li>Enforcement challenges for existing regulations</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Plastic Waste Management (PWM) Rules</h3>
              <p className="text-gray-700 mb-2">
                The Plastic Waste Management Rules 2016 (amended in 2018, 2021, and 2022) form the regulatory backbone for plastic waste management in India.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
                <li><strong>Single-Use Plastic Ban (2022):</strong> Prohibition on manufacturing, import, stocking, distribution, and sale of identified single-use plastic items</li>
                <li><strong>Extended Producer Responsibility (EPR):</strong> Makes producers responsible for the entire life cycle of plastic packaging</li>
                <li><strong>Thickness Requirements:</strong> Minimum thickness for plastic carry bags increased to 75 microns (from 50), further increasing to 120 microns</li>
                <li><strong>Registration System:</strong> Mandatory registration for producers, importers, and brand owners</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Extended Producer Responsibility (EPR)</h3>
              <p className="text-gray-700 mb-2">
                The EPR framework requires producers, importers, and brand owners to take back plastic packaging waste and ensure its environmentally sound management.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
                <li>Different recycling targets for different categories of plastic packaging</li>
                <li>EPR certificates trading mechanism introduced</li>
                <li>Provision for use of recycled plastic content in packaging</li>
                <li>Implementation challenges including monitoring and verification</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-6">
            <p className="text-orange-800 font-medium">
              Despite progress in plastic waste regulation, India's recycling rate stands at approximately 60% according to the Central Pollution Control Board, 
              with significant regional variations and data reliability issues.
            </p>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Fish className="w-7 h-7 mr-3 text-orange-600" />
            Solutions and Innovations
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">The 5Rs Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Refuse</h4>
                  <p className="text-sm text-gray-600">Declining single-use plastics when alternatives are available, such as bringing your own bags and containers</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Reduce</h4>
                  <p className="text-sm text-gray-600">Minimizing plastic consumption by choosing products with less packaging and longer lifespans</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Reuse</h4>
                  <p className="text-sm text-gray-600">Utilizing durable alternatives like cloth bags, steel bottles, and glass containers</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Repurpose</h4>
                  <p className="text-sm text-gray-600">Creating new uses for plastic items, such as craft projects and upcycled products</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Recycle</h4>
                  <p className="text-sm text-gray-600">Ensuring proper segregation and disposal of recyclable plastics</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Alternatives to Plastics</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Alternative</th>
                      <th className="px-6 py-3">Applications</th>
                      <th className="px-6 py-3">Advantages</th>
                      <th className="px-6 py-3">Challenges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-gray-900">Biodegradable Plastics</td>
                      <td className="px-6 py-4">Bags, packaging, cutlery</td>
                      <td className="px-6 py-4">Reduced persistence in environment</td>
                      <td className="px-6 py-4">Requires specific conditions to degrade, higher cost</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-gray-900">Plant-Based Materials</td>
                      <td className="px-6 py-4">Food packaging, disposable plates</td>
                      <td className="px-6 py-4">Renewable resources, often compostable</td>
                      <td className="px-6 py-4">Land use concerns, variable performance</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium text-gray-900">Traditional Alternatives</td>
                      <td className="px-6 py-4">Clay cups, leaf plates, jute bags</td>
                      <td className="px-6 py-4">Indigenous knowledge, cultural continuity</td>
                      <td className="px-6 py-4">Scalability, standardization</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-gray-900">Paper-Based Products</td>
                      <td className="px-6 py-4">Bags, straws, packaging</td>
                      <td className="px-6 py-4">Biodegradable, familiar material</td>
                      <td className="px-6 py-4">Water intensity in production, durability issues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Community Initiatives and Success Stories</h3>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-orange-500">
                <li><strong>Plastic-Free Communities:</strong> Villages like Mawlynnong in Meghalaya and urban neighborhoods implementing zero-waste approaches</li>
                <li><strong>Beach Cleanup Movements:</strong> Versova Beach cleanup in Mumbai and similar initiatives across coastal India</li>
                <li><strong>Upcycling Enterprises:</strong> Organizations creating products from plastic waste, providing livelihoods while addressing pollution</li>
                <li><strong>Corporate Initiatives:</strong> Companies implementing plastic neutrality programs and redesigning packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Join the Plastic Revolution" 
        description="Small changes in our daily habits can create a massive impact in reducing plastic pollution across India."
        buttonText="Your Guide to Reducing Plastic Use" 
        buttonLink="/resources"
      />
      
      <Footer />
    </div>
  );
};

export default PlasticPollution;
