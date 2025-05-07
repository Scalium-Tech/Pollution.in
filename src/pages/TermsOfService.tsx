
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-600">
              <p>Last updated: May 7, 2025</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using pollution.in ("the Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Website.
              </p>
              
              <h2>2. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any significant changes by posting a notice on our Website. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h2>3. Using Our Website</h2>
              <h3>3.1. Eligibility</h3>
              <p>
                The Website is intended for users who are at least 13 years of age. By using this Website, you represent and warrant that you are at least 13 years old.
              </p>
              
              <h3>3.2. Account Responsibility</h3>
              <p>
                If you create an account, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.
              </p>
              
              <h2>4. Content</h2>
              <h3>4.1. Our Content</h3>
              <p>
                Unless otherwise indicated, the Website and its contents, including but not limited to text, graphics, images, logos, icons, and software, are the property of pollution.in or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <h3>4.2. Use of Our Content</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to access and use the Website's content for personal, non-commercial purposes. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or content obtained from the Website without our prior written consent.
              </p>
              
              <h3>4.3. User Content</h3>
              <p>
                If you submit content to our Website (such as comments, feedback, or suggestions), you grant us a non-exclusive, royalty-free, perpetual, irrevocable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
              </p>
              
              <h2>5. Prohibited Activities</h2>
              <p>You agree not to engage in any of the following activities:</p>
              <ul>
                <li>Using the Website for any illegal purpose or in violation of any local, state, national, or international law</li>
                <li>Violating or attempting to violate the security of the Website</li>
                <li>Accessing data not intended for you or logging onto a server that you are not authorized to access</li>
                <li>Attempting to probe, scan, or test the vulnerability of the Website or any associated system or network</li>
                <li>Interfering with the proper working of the Website</li>
                <li>Posting or transmitting any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable</li>
              </ul>
              
              <h2>6. Disclaimer of Warranties</h2>
              <p>
                THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
              
              <h2>7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE WEBSITE.
              </p>
              
              <h2>8. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless pollution.in, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of the Website or your violation of these Terms.
              </p>
              
              <h2>9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
              
              <h2>11. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at info@pollution.in.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
