import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-500 text-center mb-12">Last Updated: January 1, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">By accessing or using QuillScribe ("we", "our", or "us"), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, you must not use our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. User Content</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">Users may post content such as blog posts, comments, and other materials. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content on our platform.</p>
                <p className="text-gray-600 leading-relaxed">You are solely responsible for the content you publish. Content that is unlawful, harmful, abusive, defamatory, obscene, or otherwise objectionable is not allowed.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Prohibited Conduct</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Impersonating another person or entity</li>
                <li>Posting false or misleading information</li>
                <li>Uploading viruses, malware, or harmful code</li>
                <li>Violating any laws or regulations</li>
                <li>Spamming or sending unsolicited messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">All content on QuillScribe (excluding user-generated content), including text, graphics, logos, and software, is the property of QuillScribe and protected by intellectual property laws. Unauthorized use is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Account Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed">You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Termination</h2>
              <p className="text-gray-600 leading-relaxed">We may suspend or terminate your access to QuillScribe at our discretion, without notice, for any conduct that we believe violates these Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">Our platform may contain links to third-party websites or services such as Google Analytics or Google AdSense. We are not responsible for the content or practices of these services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">QuillScribe is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of or inability to use the service.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Modifications</h2>
              <p className="text-gray-600 leading-relaxed">We reserve the right to modify these Terms at any time. Changes become effective when posted. Continued use of the platform constitutes your acceptance of the updated Terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">10. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, without regard to its conflict of laws principles.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">If you have any questions about these Terms, please contact us at: <a href="mailto:support@quillscribe.com" className="text-blue-600 hover:text-blue-800">support@quillscribe.com</a></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
