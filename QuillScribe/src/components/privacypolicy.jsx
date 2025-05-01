import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10 font-sans leading-relaxed text-gray-800">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <header className="text-center mb-10 pb-5 border-b-2 border-gray-200">
          <h1 className="text-4xl text-gray-800 mb-2">Privacy Policy for QuillScribe</h1>
          <p className="text-gray-600 italic">Last updated: January 1, 2025</p>
        </header>

        <div className="mb-10">
          <p className="text-lg text-gray-700 leading-8">
            QuillScribe ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our global blog platform. We collect user emails, cookies, and usage data in accordance with applicable laws.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl text-gray-800 mb-5 pb-2 border-b border-gray-200">Data We Collect</h2>
          <p>
            We collect the email address you provide when you subscribe to our newsletter or create an account. We also automatically collect certain information about your device and browsing activity. This may include usage data (such as pages you visit, links clicked, and time spent) and cookies (small text files stored on your device to improve functionality and track analytics).
          </p>
          <ul className="list-none pl-0 mt-4">
            <li className="relative pl-6 mb-4 before:content-['•'] before:text-blue-500 before:absolute before:left-0">
              <span className="font-bold text-gray-800">Email Address:</span> Collected on subscription, used for newsletters and account-related communications.
            </li>
            <li className="relative pl-6 mb-4 before:content-['•'] before:text-blue-500 before:absolute before:left-0">
              <span className="font-bold text-gray-800">Cookies:</span> Used to remember preferences and track site usage for analytics and advertising purposes.
            </li>
            <li className="relative pl-6 mb-4 before:content-['•'] before:text-blue-500 before:absolute before:left-0">
              <span className="font-bold text-gray-800">Usage Data:</span> Information about how you use our site (page views, navigation paths) collected via Google Analytics.
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl text-gray-800 mb-5 pb-2 border-b border-gray-200">How We Use Your Information</h2>
          <p>
            We use your email address to send you newsletters, updates, and important notices about QuillScribe. We use cookies and analytics data to understand user engagement and improve our platform. Google Analytics helps us analyze site traffic and usage patterns. We also use Google AdSense to serve relevant advertisements, which may use cookies to tailor ads based on your browsing history.
          </p>
          <ul className="list-none pl-0 mt-4">
            <li className="relative pl-6 mb-4 before:content-['•'] before:text-blue-500 before:absolute before:left-0">
              <span className="font-bold text-gray-800">Newsletters and Communications:</span> Periodic updates and announcements sent via email.
            </li>
            <li className="relative pl-6 mb-4 before:content-['•'] before:text-blue-500 before:absolute before:left-0">
              <span className="font-bold text-gray-800">Analytics:</span> Google Analytics collects aggregated usage data to help us improve the site.
            </li>
            <li className="relative pl-6 mb-4 before:content-['•'] before:text-blue-500 before:absolute before:left-0">
              <span className="font-bold text-gray-800">Advertising:</span> Google AdSense displays ads on our site; these ads may use cookies to personalize content.
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl text-gray-800 mb-5 pb-2 border-b border-gray-200">Cookies</h2>
          <p>
            Cookies are small text files placed on your device by our website. We use cookies to enhance your experience, remember your settings, and gather anonymous usage statistics. You can disable cookies in your browser, but this may affect how parts of the site function. For more information about cookies and their use in advertising, see Google's policies on third-party advertising cookies.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl text-gray-800 mb-5 pb-2 border-b border-gray-200">Third-Party Services</h2>
          <p>
            We use third-party services such as <span className="font-bold text-blue-600">Google Analytics</span> and <span className="font-bold text-blue-600">Google AdSense</span>. Google Analytics helps us measure site traffic and user behavior. Google AdSense is used to serve ads; it may collect cookie information to personalize ads. We do not share your personal data with these services beyond what is necessary for them to function. You can learn more about how Google uses data by visiting Google's privacy policy.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl text-gray-800 mb-5 pb-2 border-b border-gray-200">Your GDPR Rights</h2>
          <p>
            If you are in the European Union (EU), you have certain rights under the General Data Protection Regulation (GDPR) regarding your personal data. These include the right to access, correct, or delete your personal information. Specifically:
          </p>
          <ul className="list-none pl-0 mt-4">
            <li className="relative pl-6 mb-4 before:content-['•'] before:text-blue-500 before:absolute before:left-0">
              <span className="font-bold text-gray-800">Access:</span> You can request a copy of the personal data we have about you.
            </li>
            <li className="relative pl-6 mb-4 before:content-['•'] before:text-blue-500 before:absolute before:left-0">
              <span className="font-bold text-gray-800">Correction:</span> You can request correction of any inaccurate or incomplete data we hold about you.
            </li>
            <li className="relative pl-6 mb-4 before:content-['•'] before:text-blue-500 before:absolute before:left-0">
              <span className="font-bold text-gray-800">Deletion:</span> You can ask us to delete your personal data when we no longer need it for processing.
            </li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us as described below. We will respond to your request in a timely manner and in accordance with applicable law.
          </p>
        </div>

        <div className="mb-10 bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl text-gray-800 mb-5 pb-2 border-b border-gray-200">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your privacy rights, you can contact us at:
          </p>
          <div className="mt-4">
            <p><span className="font-bold text-gray-800 mr-2">Email:</span> privacy@quillscribe.com</p>
            <p><span className="font-bold text-gray-800 mr-2">Address:</span> QuillScribe, 123 Main Street, Anytown, Any Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
