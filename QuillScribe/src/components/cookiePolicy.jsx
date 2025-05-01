import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-sm text-gray-600">Last Updated: January 1, 2025</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              This Cookie Policy explains how QuillScribe ("we", "our", or "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. What Are Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used to make websites work or to improve their efficiency and to provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. How We Use Cookies</h2>
            <p className="text-gray-600 mb-3">We use both first-party and third-party cookies for various reasons including:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>To operate and maintain our website</li>
              <li>To remember your preferences</li>
              <li>To analyze website traffic through tools like Google Analytics</li>
              <li>To serve personalized ads via platforms like Google AdSense</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Types of Cookies We Use</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-medium text-gray-800 mr-2">Essential Cookies:</span>
                <span className="text-gray-600">Necessary for the website to function and cannot be switched off.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-800 mr-2">Performance Cookies:</span>
                <span className="text-gray-600">Help us understand how users interact with our site.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-800 mr-2">Functionality Cookies:</span>
                <span className="text-gray-600">Remember choices you make to enhance your experience.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-800 mr-2">Advertising Cookies:</span>
                <span className="text-gray-600">Deliver relevant ads and track ad performance.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You can set your browser to refuse or delete cookies. If you do so, some features of the website may not function properly.
            </p>
            <p className="text-gray-600">
              To manage cookies, check your browser settings or visit:{' '}
              <a href="https://www.allaboutcookies.org/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 underline">
                www.allaboutcookies.org
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Third-party services such as Google Analytics and Google AdSense may place cookies on your device. We do not control the use of these cookies. Please review the respective policies of these providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time. Changes will be posted on this page with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Cookie Policy, you can contact us at:{' '}
              <a href="mailto:support@quillscribe.com" 
                 className="text-blue-600 hover:text-blue-800">
                support@quillscribe.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
