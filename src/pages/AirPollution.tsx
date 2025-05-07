
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import { Wind, Factory, Car, Flame, Home, Trash, Heart, Cloud, Globe, Server } from 'lucide-react';

const AirPollution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <header className="py-12 md:py-16 bg-gradient-to-r from-slate-200 via-gray-100 to-stone-200 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Air Pollution in India: A Public Health Crisis
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            India faces one of the world's most severe air quality challenges, with widespread impacts on health, 
            environment, and economy. Explore the causes, effects, and solutions to this pressing issue.
          </p>
        </div>
      </header>
      
      {/* Introduction Section */}
      <section className="py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              Air pollution has emerged as one of India's most critical environmental health hazards. The country is home to 
              21 of the 30 most polluted cities in the world, with pollution levels often exceeding national standards and 
              WHO guidelines by several times. Major pollutants include particulate matter (PM2.5 and PM10), nitrogen 
              dioxide (NO₂), sulfur dioxide (SO₂), ozone (O₃), and carbon monoxide (CO).
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary my-6">
              <p className="text-blue-800 font-medium">
                According to the State of Global Air Report, air pollution contributed to 1.67 million deaths in India in 2019, 
                including 116,000 infant deaths. It reduces the average Indian's life expectancy by 5.9 years.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sources of Air Pollution */}
      <section className="py-8 md:py-10 border-b border-gray-200 pb-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Wind className="w-7 h-7 mr-3 text-primary" />
            Sources of Air Pollution in India
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Car className="w-5 h-5 mr-2 text-gray-600" /> Vehicular Emissions
              </h3>
              <p className="text-gray-700 mb-2">
                The rapidly growing number of vehicles on India's roads contribute significantly to urban air pollution. 
                Despite improvements like BS-VI fuel standards, older vehicles and inadequate public transportation continue to worsen air quality.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-primary">
                <li>Particulate matter (PM) from diesel engines</li>
                <li>Nitrogen oxides (NOx) from fuel combustion</li>
                <li>Carbon monoxide (CO) from incomplete combustion</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Factory className="w-5 h-5 mr-2 text-gray-600" /> Industrial Emissions
              </h3>
              <p className="text-gray-700 mb-2">
                Power plants, factories, and manufacturing units release significant pollutants, especially in industrial clusters. 
                Coal-based power generation is a major contributor.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-primary">
                <li>Sulfur dioxide (SO₂) from coal burning</li>
                <li>Particulate matter from manufacturing processes</li>
                <li>Heavy metals and toxic compounds</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Flame className="w-5 h-5 mr-2 text-gray-600" /> Agricultural Burning
              </h3>
              <p className="text-gray-700 mb-2">
                Seasonal crop residue burning, especially in northern states like Punjab and Haryana, creates severe 
                pollution episodes during post-harvest periods.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-primary">
                <li>Smoke and particulate matter</li>
                <li>Black carbon and carbon monoxide</li>
                <li>Contributes to regional smog</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center">
                <Home className="w-5 h-5 mr-2 text-gray-600" /> Household Sources
              </h3>
              <p className="text-gray-700 mb-2">
                Millions of households rely on solid fuels like wood, dung cakes, and coal for cooking and heating, 
                creating significant indoor air pollution.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-primary">
                <li>Smoke from biomass burning</li>
                <li>Particulate matter in confined spaces</li>
                <li>Indoor chemical pollutants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact of Air Pollution */}
      <section className="py-8 md:py-10 border-b border-gray-200 pb-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Heart className="w-7 h-7 mr-3 text-primary" />
            Impact of Air Pollution
          </h2>
          
          <h3 className="font-semibold text-xl text-gray-800 mb-3">Health Impacts</h3>
          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              Air pollution exposure significantly impacts public health across India, with vulnerable groups like 
              children, the elderly, and those with pre-existing conditions facing the highest risks.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary my-6">
              <p className="text-blue-800">
                A study by The Lancet found that air pollution contributed to 1.7 million premature deaths in India in 2019 alone.
              </p>
            </div>
            
            <ul className="list-disc list-inside space-y-2 pl-5 marker:text-primary">
              <li><strong>Respiratory Diseases:</strong> Asthma, chronic obstructive pulmonary disease (COPD), bronchitis, and increased respiratory infections</li>
              <li><strong>Cardiovascular Issues:</strong> Heart attacks, strokes, and other cardiovascular diseases</li>
              <li><strong>Child Health:</strong> Reduced lung development, increased susceptibility to infections, cognitive impairment</li>
              <li><strong>Cancer:</strong> Increased risk of lung cancer and other respiratory tract cancers</li>
              <li><strong>Neurological Effects:</strong> Evidence linking air pollution to cognitive decline and conditions like Alzheimer's disease</li>
              <li><strong>Pregnancy Complications:</strong> Low birth weight, premature birth, and developmental issues</li>
            </ul>
          </div>
          
          <h3 className="font-semibold text-xl text-gray-800 mb-3">Environmental Impacts</h3>
          <ul className="list-disc list-inside space-y-2 pl-5 marker:text-primary mb-6">
            <li>Formation of smog and haze, reducing visibility</li>
            <li>Acid rain damaging forests, soils, and water bodies</li>
            <li>Crop damage reducing agricultural yields</li>
            <li>Contribution to climate change through black carbon and greenhouse gases</li>
            <li>Damage to historical monuments and buildings</li>
          </ul>
          
          <h3 className="font-semibold text-xl text-gray-800 mb-3">Economic Impacts</h3>
          <ul className="list-disc list-inside space-y-2 pl-5 marker:text-primary">
            <li>Healthcare costs estimated at 3% of India's GDP</li>
            <li>Lost productivity due to illness and premature death</li>
            <li>Negative impact on tourism in heavily polluted cities</li>
            <li>Agricultural losses from reduced crop yields</li>
          </ul>
        </div>
      </section>
      
      {/* AQI Section */}
      <section className="py-8 md:py-10 border-b border-gray-200 pb-8 mb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Cloud className="w-7 h-7 mr-3 text-primary" />
            Understanding Air Quality Index (AQI)
          </h2>
          
          <p className="text-gray-700 mb-6">
            The Air Quality Index (AQI) is a standardized system used to communicate how polluted the air is and what 
            associated health effects might be. India's AQI considers eight pollutants: PM10, PM2.5, NO2, SO2, CO, O3, NH3, and Pb.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-lg my-8 overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">AQI Range</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Health Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 bg-green-50">0-50</td>
                  <td className="px-6 py-4 font-medium text-green-700">Good</td>
                  <td className="px-6 py-4">Minimal impact</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 bg-yellow-50">51-100</td>
                  <td className="px-6 py-4 font-medium text-yellow-700">Satisfactory</td>
                  <td className="px-6 py-4">Minor breathing discomfort to sensitive people</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 bg-orange-50">101-200</td>
                  <td className="px-6 py-4 font-medium text-orange-700">Moderate</td>
                  <td className="px-6 py-4">Breathing discomfort to people with lung disease, asthma and heart disease</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 bg-red-50">201-300</td>
                  <td className="px-6 py-4 font-medium text-red-700">Poor</td>
                  <td className="px-6 py-4">Breathing discomfort to most people on prolonged exposure</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 bg-purple-50">301-400</td>
                  <td className="px-6 py-4 font-medium text-purple-700">Very Poor</td>
                  <td className="px-6 py-4">Respiratory illness on prolonged exposure</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 bg-gray-800 text-white">401-500</td>
                  <td className="px-6 py-4 font-medium text-gray-900">Severe</td>
                  <td className="px-6 py-4">Affects healthy people and seriously impacts those with existing diseases</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.cpcbccr.com/AQI_India/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary hover:bg-green-600 text-white font-semibold py-2.5 px-5 rounded-lg inline-flex items-center transition-colors shadow-md justify-center"
            >
              <Server className="w-5 h-5 mr-2" />
              Check CPCB Real-time AQI
            </a>
            <a 
              href="http://safar.tropmet.res.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary hover:bg-green-600 text-white font-semibold py-2.5 px-5 rounded-lg inline-flex items-center transition-colors shadow-md justify-center"
            >
              <Server className="w-5 h-5 mr-2" />
              SAFAR Air Quality Portal
            </a>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Globe className="w-7 h-7 mr-3 text-primary" />
            Solutions and Mitigation Strategies
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Government Initiatives</h3>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-primary">
                <li><strong>National Clean Air Programme (NCAP):</strong> Targets to reduce particulate matter concentration by 20-30% by 2024 (compared to 2017 levels)</li>
                <li><strong>BS-VI Emission Standards:</strong> Implementation of stricter vehicle emission norms</li>
                <li><strong>Electric Vehicle Policy:</strong> Promotion of e-mobility through FAME-II scheme</li>
                <li><strong>Industrial Emission Norms:</strong> Stricter standards for power plants and industries</li>
                <li><strong>Odd-Even Scheme:</strong> Periodic implementation in Delhi to reduce vehicular pollution</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Individual & Community Actions</h3>
              <ul className="list-disc list-inside space-y-2 pl-5 marker:text-primary">
                <li>Use of public transportation, carpooling, and non-motorized transport</li>
                <li>Adoption of cleaner cooking fuels (LPG, electricity) instead of solid fuels</li>
                <li>Proper waste management and avoiding burning of garbage</li>
                <li>Energy conservation and use of energy-efficient appliances</li>
                <li>Increasing green cover through tree planting initiatives</li>
                <li>Supporting and advocating for stronger air quality policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Breathe Better" 
        description="Join the movement for cleaner air in India. Stay informed, take action, and be part of the solution."
        buttonText="Find AQI in Your City" 
        buttonLink="/data-insights"
      />
      
      <Footer />
    </div>
  );
};

export default AirPollution;
