import { myMetaData } from '@/assets/data';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-b from-yellow-50 to-yellow-50/50">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At our delivery and logistics company, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4">
    
    
        <li>Technical Data (e.g., IP address, browser type, device information)</li>
        <li>Usage Data (e.g., pages visited, time spent on site, interaction data)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To process and deliver your orders</li>
        <li>To communicate with you regarding your account or delivery status</li>
        <li>To improve our services and customer experience</li>
        <li>To send service-related notifications or promotional offers (if you opt in)</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell your personal data. However, we may share your information with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Trusted third-party service providers (e.g., payment processors, delivery partners)</li>
        <li>Law enforcement or regulatory authorities if required by law</li>
        <li>Business partners involved in fulfilling your delivery or service</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies and Tracking</h2>
      <p className="mb-4">
        We use cookies to enhance your browsing experience and collect usage statistics. For more information, please review our <a href="/cookie-policy" className="text-blue-600 underline">Cookie Policy</a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, or loss. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Access your personal data</li>
        <li>Request correction or deletion of your data</li>
        <li>Object to or restrict certain processing</li>
        <li>Withdraw consent (where applicable)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Data Retention</h2>
      <p className="mb-4">
        We retain your information only as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required or permitted by law.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. International Transfers</h2>
      <p className="mb-4">
        If we transfer data outside of Senegal, we ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. The revised policy will be posted on this page with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at:
        <br />
        <strong>Email:</strong> {myMetaData.email}<br />
        <strong>Phone:</strong> {myMetaData.phone}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
