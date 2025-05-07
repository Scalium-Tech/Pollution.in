
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="py-12 md:py-16 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">About Pollution.in & Contact Information</h1>
        </div>
      </div>
      
      {/* About Us Section */}
      <section className="py-8 md:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Our mission at pollution.in is to provide accessible, reliable information on environmental pollution in India, 
              empowering citizens, researchers, and policymakers with knowledge for a cleaner future.
            </p>
            <p>
              We aim to be India's central hub for pollution data, insights, educational resources, and solutions. 
              By raising awareness about air, water, plastic, and other forms of pollution, we hope to contribute 
              to a more environmentally conscious society and support initiatives that address these challenges.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Our Vision</h2>
          <div className="text-lg text-gray-700 leading-relaxed">
            <p>
              We envision an India where all citizens have access to clean air, water, and a pollution-free environment. 
              Through reliable information, data-driven insights, and community engagement, we strive to be a catalyst 
              for positive environmental change across the country.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Our Values</h2>
          <ul className="text-lg text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
            <li><span className="font-medium">Accuracy</span>: We are committed to providing factual, verified information.</li>
            <li><span className="font-medium">Accessibility</span>: We make complex environmental topics understandable to all.</li>
            <li><span className="font-medium">Data-driven</span>: Our insights are based on reliable research and official data.</li>
            <li><span className="font-medium">Solution-oriented</span>: Beyond highlighting problems, we focus on practical solutions.</li>
            <li><span className="font-medium">Collaborative</span>: We work with experts, organizations, and communities for broader impact.</li>
          </ul>
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Contact Information */}
              <div className="text-gray-700 space-y-3 mb-8 md:mb-0">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@pollution.in
                </p>
                
                <div className="flex space-x-4 justify-start mt-6">
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                      <Twitter size={16} />
                    </div>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                      <Facebook size={16} />
                    </div>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                      <Linkedin size={16} />
                    </div>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                      <Instagram size={16} />
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition-colors w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved Section */}
      <section className="py-8 md:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Involved</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              We welcome collaboration with researchers, environmental experts, NGOs, and concerned citizens. 
              If you have data, insights, or content that could benefit our platform, or if you're interested 
              in partnering with us, please reach out through our contact form or email.
            </p>
            <p>
              Together, we can build a more comprehensive resource on pollution in India and work towards 
              sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
