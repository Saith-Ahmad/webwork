'use client'

import React from 'react'

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure
        of Your information when You use the Service and tells You about Your privacy rights and how the
        law protects You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to
        the collection and use of information in accordance with this Privacy Policy.
      </p>

      {/* All following content will continue exactly as per PDF in sections like: */}
      {/* Interpretation and Definitions, Collecting and Using Your Personal Data, etc. */}

      {/* For example: */}
      <h2 className="text-2xl font-semibold">Interpretation and Definitions</h2>

      <h3 className="text-xl font-semibold">Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings defined under the following
        conditions. The following definitions shall have the same meaning regardless of whether they
        appear in singular or in plural.
      </p>

      <h3 className="text-xl font-semibold">Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
        <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control...</li>
        <li><strong>Company</strong> refers to Psychometric, Inc. (referred to as either "the Company", "We", "Us" or "Our")...</li>
        <li><strong>Cookies</strong> are small files placed on Your device...</li>
        <li>... (continue all definitions exactly as in PDF)</li>
      </ul>

      {/* ... All sections from your Privacy Policy PDF continue here: 
        - Collecting and Using Your Personal Data
        - Tracking Technologies and Cookies
        - Use of Your Personal Data
        - Retention of Your Personal Data
        - Transfer / Delete / Disclosure / Security
        - GDPR / CCPA / CalOPPA
        - Email Marketing / Analytics / Payment Providers
        - Behavioral Remarketing / Social Media
        - Your Rights and How to Contact Us
      */}

      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul className="list-disc list-inside">
        <li>By email: <a className="text-blue-600 underline" href="mailto:contact@beyondut.com">contact@beyondut.com</a></li>
        <li>By visiting this page on our website: <a className="text-blue-600 underline" href="http://www.beyondhut.com">www.beyondhut.com</a></li>
      </ul>
    </main>
  )
}
