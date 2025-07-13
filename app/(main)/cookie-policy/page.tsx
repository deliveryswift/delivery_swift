import React from 'react';
import { myMetaData } from '@/assets/data';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-b from-yellow-50 to-yellow-50/50 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <p className="mb-4">
        This Cookie Policy explains how our delivery and logistics company based in the USA. We use cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control our use of them.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small data files placed on your device when you visit a website. Cookies are widely used by website owners to make their websites work or work more efficiently, as well as to provide reporting information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Why Do We Use Cookies?</h2>
      <p className="mb-4">
        We use cookies for several reasons:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To ensure our website functions properly</li>
        <li>To remember your preferences and settings</li>
        <li>To analyze website traffic and improve user experience</li>
        <li>To offer relevant services based on your usage</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Types of Cookies We Use</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Essential Cookies:</strong> Necessary for the website to function.</li>
        <li><strong>Performance Cookies:</strong> Help us understand how users interact with our website.</li>
        <li><strong>Functionality Cookies:</strong> Remember your choices and preferences.</li>
        <li><strong>Targeting/Advertising Cookies:</strong> Deliver relevant advertisements to you.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Your Choices</h2>
      <p className="mb-4">
        You have the right to decide whether to accept or reject cookies. You can set or amend your cookie preferences at any time by adjusting your browser settings. Please note that blocking cookies may impact your experience on our site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time to reflect changes to our cookies or for operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at:  
        <br />
        <strong>Email:</strong> {myMetaData.email}  
        <br />
        <strong>Phone:</strong> {myMetaData.phone}
      </p>
    </div>
  );
};

export default CookiePolicy;
