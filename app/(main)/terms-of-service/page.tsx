import { myMetaData } from '@/assets/data';
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-b from-yellow-50 to-yellow-50/50">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        These Terms of Service govern your access to and use of the services provided by our delivery and logistics company based in the USA. By accessing or using our website and services, you agree to be bound by these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Services</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that could damage, disable, overburden, or impair the operation of our platform.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Service Availability</h2>
      <p className="mb-4">
        We strive to ensure that our services are always available, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue our services at any time without notice.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. User Accounts</h2>
      <p className="mb-4">
        If you create an account with us, you are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Orders and Deliveries</h2>
      <p className="mb-4">
        Orders placed through our platform are subject to acceptance and availability. Delivery times are estimates and may be affected by external factors. We will make reasonable efforts to meet delivery timelines.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Fees and Payments</h2>
      <p className="mb-4">
        All charges for our services will be disclosed at the time of purchase. Payments must be made through the approved payment methods on our platform. We reserve the right to change our pricing at any time.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Intellectual Property</h2>
      <p className="mb-4">
        All content, trademarks, logos, and other intellectual property on our website are owned by or licensed to the Company. You may not use any of our intellectual property without prior written permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">
        To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages resulting from your use of our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Termination</h2>
      <p className="mb-4">
        We may suspend or terminate your access to our services at any time if you violate these Terms or engage in any conduct that harms our business or other users.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms at any time. Updates will be posted on this page with an updated effective date. Continued use of the services after changes constitutes acceptance of the new Terms.
      </p>

      

      <h2 className="text-xl font-semibold mt-8 mb-2">11. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
        <br />
        <strong>Email:</strong> {myMetaData.email}<br />
        <strong>Phone:</strong> {myMetaData.phone}
      </p>
    </div>
  );
};

export default TermsOfService;
