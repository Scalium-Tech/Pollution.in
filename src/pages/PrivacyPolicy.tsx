
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-600">
              <p>Last updated: May 7, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                Welcome to pollution.in ("we," "our," or "us"). We are committed to protecting your privacy and the information that you share while using our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways including:</p>
              <h3>2.1. Personal Data</h3>
              <p>
                When you voluntarily provide it, we may collect personal information such as your name, email address, and other contact details. This typically occurs when you sign up for our newsletter, register for an account, or submit a contact form.
              </p>
              
              <h3>2.2. Usage Data</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate our website. This information may include your IP address, browser type, operating system, referring URLs, device information, pages viewed, and the dates/times of your website visits.
              </p>
              
              <h2>3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our website and services</li>
                <li>Send you newsletters, updates, and other communications if you have subscribed to them</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
                <li>Detect, investigate, and prevent security incidents and fraudulent transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>4. Sharing Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with applicable laws and regulations</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transaction such as a merger or acquisition</li>
              </ul>
              <p>
                We do not sell your personal information to third parties for marketing purposes.
              </p>
              
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies, web beacons, and other tracking technologies to collect and track information about your browsing activities on our website. You can control cookies through your browser settings and other tools.
              </p>
              
              <h2>6. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2>7. Your Choices</h2>
              <p>You have certain choices regarding your personal information:</p>
              <ul>
                <li>You can opt-out of receiving our newsletters or marketing emails by following the unsubscribe instructions</li>
                <li>You can choose not to provide certain information, though this may limit your ability to use some features of our website</li>
                <li>You can request access to, correction of, or deletion of your personal information by contacting us</li>
              </ul>
              
              <h2>8. Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If you believe we might have collected information from a child under 13, please contact us.
              </p>
              
              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our practices, please contact us at info@pollution.in.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
